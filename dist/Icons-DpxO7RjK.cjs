"use strict";var d=Object.defineProperty;var _=(a,t,i)=>t in a?d(a,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[t]=i;var r=(a,t,i)=>(_(a,typeof t!="symbol"?t+"":t,i),i);const N=require("./forEach-AdslABYj.cjs"),w=require("./Api-DHkrMuUs.cjs"),g=require("./useEnv-DHcFv9Fs.cjs"),n=320,o="--LOAD--",s=class s{static is(t){return t in this.icons||this.getName(t)in this.icons}static async get(t,i="",e=1e3*60*3){var u,l;const c=((u=this.icons)==null?void 0:u[this.getName(t)])??((l=this.icons)==null?void 0:l[t])??`${t.replace(/^@/,i??this.url)}.svg`;return typeof c=="string"?c===o&&e>0?(await this.wait(),this.get(t,i,e-n)):c:await c}static getNameList(){return N.forEach(this.icons,(t,i)=>i.replace(/^@/,""))}static add(t,i){this.icons[this.getName(t)]=i}static addLoad(t){this.icons[this.getName(t)]=o}static addGlobal(t,i){this.icons[this.getName(t)]=`${this.urlGlobal}${i}`}static addByList(t){N.forEach(t,(i,e)=>this.add(e,i))}static getName(t){return`@${t}`}static wait(){return new Promise(t=>setTimeout(()=>t(),n))}};r(s,"icons",{}),r(s,"url",g.useEnv("UI_PATH")??"/icons/"),r(s,"urlGlobal",`${w.Api.isLocalhost(),""}${s.url}`),typeof window<"u"&&("__UI__ICON"in window||(window.__UI__ICON={}),s.icons=window.__UI__ICON);let h=s;exports.ICONS_LOAD=o;exports.ICONS_WAIT=n;exports.Icons=h;
