"use strict";var d=Object.defineProperty;var w=(a,t,i)=>t in a?d(a,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[t]=i;var r=(a,t,i)=>(w(a,typeof t!="symbol"?t+"":t,i),i);const l=require("./forEach-AdslABYj.cjs"),g=require("./DataStorage-_0PvcqzD.cjs"),f=require("./Api-DsLlrXmc.cjs"),o="__UI_ICON",m=320,N="--LOAD--",s=class s{static is(t){return t in this.icons||this.getName(t)in this.icons}static async get(t,i="",e=1e3*60*3){var h,u;const c=((h=this.icons)==null?void 0:h[this.getName(t)])??((u=this.icons)==null?void 0:u[t])??`${t.replace(/^@/,i??this.url)}.svg`;return typeof c=="string"?c===N&&e>0?(await this.wait(),this.get(t,i,e-m)):c:await c}static getNameList(){return l.forEach(this.icons,(t,i)=>i.replace(/^@/,""))}static add(t,i){this.icons[this.getName(t)]=i}static addLoad(t){this.icons[this.getName(t)]=N}static addGlobal(t,i){this.icons[this.getName(t)]=`${this.urlGlobal}${i}`}static addByList(t){l.forEach(t,(i,e)=>this.add(e,i))}static getName(t){return`@${t}`}static wait(){return new Promise(t=>setTimeout(()=>t(),m))}};r(s,"icons",{}),r(s,"url",g.useEnv("UI_PATH")??"/icons/"),r(s,"urlGlobal",`${f.Api.isLocalhost(),""}${s.url}`),g.isDomRuntime()&&(o in window||(window[o]={}),s.icons=window[o]);let n=s;exports.Icons=n;
