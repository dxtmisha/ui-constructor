"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("./components-m3.umd.cjs"),a=require("./media.umd.cjs"),i=require("./translate.umd.cjs"),n=async(r,e={})=>(a.makeUiIcons(),e!=null&&e.flag&&a.makeUiFlags(),e!=null&&e.translate&&await i.registrationUiTranslate(e.translate),r.use(t.uiM3ComponentsPlugin),r);exports.registrationUiM3=n;