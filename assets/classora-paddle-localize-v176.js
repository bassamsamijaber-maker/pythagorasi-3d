/* Classora localized pricing using Paddle PricePreview.
 * Real customer locale and conversion come from Paddle, not from guessed IP/FX rates.
 * Client-side token is limited-scope/public. Never use a Paddle API secret here.
 * This is display only, and does not create checkout, confirm payment, or grant access.
 */
(function() {
  "use strict";
  let catalog=null, locale="ar", notify=()=>{}, initialized=false, loading=false, localized=false;
  let unitPrices=new Map(), currency="ILS", country="", tokenConfigured=false, unavailable=false;
  const totals=new Map(), pending=new Set();
  let lastSelection="", sequence=0;
  const supported = ["student_plus","student_premium","teacher_plus","teacher_premium","class_plus","class_premium","school_plus","school_premium","extra_student","extra_teacher"];
  const msg={
    ar:{converted:"الأسعار معروضة بعملة بلدك حسب Paddle، وقد تُضاف ضريبة عند الدفع.",base:"الأسعار بالشيكل ₪ حاليًا. رح تظهر بعملة بلد الزائر بعد اكتمال إعداد Paddle Live.",error:"تعذّر جلب الأسعار المحلية، لذلك نعرض الأسعار الأصلية بالشيكل ₪. المبلغ النهائي يحدده Paddle عند الدفع."},
    en:{converted:"Prices are localized by Paddle to your country's currency; checkout may add tax.",base:"Prices are shown in ILS (₪) until Paddle Live localization is configured.",error:"Local pricing unavailable. Showing the original ILS prices. Paddle determines the final checkout total."},
    es:{converted:"Paddle muestra los precios en la moneda de tu país. Pueden aplicarse impuestos.",base:"Precios en ILS (₪) hasta configurar Paddle Live.",error:"No hay precios locales. Se muestran los importes originales en ILS."},
    ko:{converted:"Paddle에서 현지 통화로 가격을 표시합니다. 결제 시 세금이 추가될 수 있습니다.",base:"Paddle Live 설정 전에는 ILS(₪) 가격으로 표시됩니다.",error:"현지 가격을 불러오지 못해 ILS 가격을 표시합니다."},
    de:{converted:"Paddle zeigt Preise in der lokalen Währung; Steuern können beim Checkout anfallen.",base:"Bis zur Aktivierung von Paddle Live werden Preise in ILS (₪) angezeigt.",error:"Lokale Preise sind nicht verfügbar. Die Originalpreise in ILS werden angezeigt."},
    it:{converted:"Paddle mostra i prezzi nella valuta locale; potrebbero essere applicate imposte.",base:"Prezzi in ILS (₪) finché Paddle Live non è configurato.",error:"Prezzi locali non disponibili. Mostriamo i prezzi originali in ILS."},
    hi:{converted:"Paddle कीमतें आपके देश की मुद्रा में दिखाता है; भुगतान पर कर लग सकता है।",base:"Paddle Live चालू होने तक कीमतें ILS (₪) में हैं।",error:"स्थानीय कीमत उपलब्ध नहीं। मूल ILS कीमत दिखाई गई है।"},
    tr:{converted:"Paddle fiyatları ülkenizin para biriminde gösterir; ödeme sırasında vergi uygulanabilir.",base:"Paddle Live ayarlanana kadar fiyatlar ILS (₪) cinsindendir.",error:"Yerel fiyatlar alınamadı; orijinal ILS fiyatları gösteriliyor."}
  };
  function note(lang){const x=msg[lang]||msg.en;return x[localized?"converted":unavailable?"error":"base"];}
  function readItems(response){
    const data=response?.data,code=data?.currencyCode;
    const lines=data?.details?.lineItems;
    if(!/^[A-Z]{3}$/.test(code||"")||!Array.isArray(lines)||!lines.length)throw Error("Bad Paddle pricing response");
    const parsed=new Map();
    for(const item of lines){
      const id=item?.price?.id;
      const form=item?.formattedUnitTotals?.subtotal,number=item?.totals?.subtotal;
      if(!/^pri_[a-z0-9]{26}$/.test(id||"")||typeof form!=="string"||!form.trim()||!Number.isSafeInteger(Number(number)))throw Error("Paddle preview missing price information");
      if(parsed.has(id))throw Error("Paddle preview contains duplicates");
      parsed.set(id,{formatted:form,subunits:Number(number),quantity:item.quantity});
    }
    return {parsed,code,address:data?.address?.countryCode||""};
  }
  function fmt(subunits,code){
    if(!Number.isSafeInteger(subunits)||subunits<0)return null;
    const digits=new Intl.NumberFormat("en-US",{style:"currency",currency:code}).resolvedOptions().maximumFractionDigits;
    return new Intl.NumberFormat("en-US",{style:"currency",currency:code,minimumFractionDigits:digits,maximumFractionDigits:digits}).format(subunits/Math.pow(10,digits));
  }
  function priceFor(key,period){
    if(!localized)return null;
    const id=catalog?.products?.[key]?.[period]?.priceId;
    return id?unitPrices.get(id)||null:null;
  }
  function totalFor(kind,tier,period,seats){
    if(!localized)return null;
    const base=kind==="class"?35:kind==="school"?55:1;
    const extra=Math.max(0,seats-base);
    const main=priceFor(kind+"_"+tier,period);
    if(!main)return null;
    if(!extra)return main;
    const cacheKey=[kind,tier,period,seats].join(":");
    return totals.get(cacheKey)||null;
  }
  function requestTotals(kind,tier,period,seats) {
    if(!localized||!catalog||!window.Paddle?.PricePreview)return;
    const base=kind==="class"?35:kind==="school"?55:1;
    const extra=Math.max(0,seats-base);
    if(!extra)return;
    const cacheKey=[kind,tier,period,seats].join(":");
    if(pending.has(cacheKey)||totals.has(cacheKey))return;
    const mainId=catalog.products[kind+"_"+tier]?.[period]?.priceId;
    const addonId=catalog.products[kind==="class"?"extra_student":"extra_teacher"]?.[period]?.priceId;
    if(!mainId||!addonId)return;
    pending.add(cacheKey);
    // Ask Paddle to preview actual quantity: never multiply FX rates or displayed currency ourselves.
    window.Paddle.PricePreview({items:[{priceId:mainId,quantity:1},{priceId:addonId,quantity:extra}]})
      .then(response=>{
        const {parsed,code}=readItems(response);
        if(code!==currency||parsed.size!==2||!parsed.has(mainId)||!parsed.has(addonId))throw Error("Paddle currency or price mismatch");
        const sum=parsed.get(mainId).subunits+parsed.get(addonId).subunits;
        const display=fmt(sum,code);
        if(!display)throw Error("Paddle total could not be formatted");
        totals.set(cacheKey,display);
        notify();
      }).catch(e=>console.warn("Paddle seat pricing preview unavailable",e))
      .finally(()=>pending.delete(cacheKey));
  }
  function updateSelection(kind,tier,period,seats){
    const next=[kind,tier,period,seats].join(":");
    if(next===lastSelection)return;
    lastSelection=next;
    requestTotals(kind,tier,period,seats);
  }
  async function start(priceCatalog,options={}){
    if(initialized)return;
    initialized=true;catalog=priceCatalog;notify=typeof options.onChange==="function"?options.onChange:()=>{};
    try{
      const result=await fetch("./assets/classora-paddle-localization-config.json",{cache:"no-store"});
      if(!result.ok)throw Error("Paddle public config unavailable");
      const conf=await result.json();
      // No secret keys in frontend, and never let a test token use Live catalog IDs.
      if(conf.environment!=="live"||conf.enabled!==true||!/^live_[a-z0-9]+$/i.test(conf.clientSideToken||""))return;
      tokenConfigured=true;
      for(let retry=0;retry<40&&!window.Paddle?.Initialize;retry++)await new Promise(resolve=>setTimeout(resolve,75));
      if(!window.Paddle?.Initialize||!window.Paddle?.PricePreview)throw Error("Paddle.js did not load");
      window.Paddle.Initialize({token:conf.clientSideToken});
      const items=supported.flatMap(k=>["monthly","annual"].map(period=>({
        priceId:catalog?.products?.[k]?.[period]?.priceId,quantity:1
      })));
      if(items.some(i=>!/^pri_[a-z0-9]{26}$/.test(i.priceId||""))||items.length!==20)throw Error("Incomplete Paddle Live catalog");
      // Do not supply country. Paddle estimates country from the customer's connection.
      const response=await window.Paddle.PricePreview({items});
      const {parsed,code,address}=readItems(response);
      if(parsed.size!==20||items.some(({priceId})=>!parsed.has(priceId)))throw Error("Paddle preview missing catalog products");
      unitPrices=new Map([...parsed].map(([id,info])=>[id,info.formatted]));
      currency=code;country=address;localized=true;notify();
    }catch(e){
      unavailable=tokenConfigured;
      console.warn("Classora local currency preview unavailable",e);
      localized=false;notify();
    }
  }
  window.ClassoraPriceLocalization=Object.freeze({start,priceFor,totalFor,updateSelection,note,getInfo:()=>({localized,currency,country,tokenConfigured})});
})();