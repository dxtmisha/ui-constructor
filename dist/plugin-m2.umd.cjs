"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("./components-m2.umd.cjs"),a=require("./translate.umd.cjs"),i=async(r,e)=>(await(await Promise.resolve().then(()=>require("./media.umd.cjs"))).makeMedia(),e&&e!=null&&e.translate&&await a.registrationUiTranslate(e.translate),r.use(t.uiM2ComponentsPlugin),r);exports.registrationUiM2=i;