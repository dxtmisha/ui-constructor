"use strict";var d=Object.defineProperty;var f=(c,t,s)=>t in c?d(c,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):c[t]=s;var e=(c,t,s)=>(f(c,typeof t!="symbol"?t+"":t,s),s);const g=require("./forEach-AdslABYj.cjs"),n=require("./isFilled-B58mquTF.cjs"),l=require("./Geo-BXw53kTY.cjs"),N=require("./toArray-C_3YLL9r.cjs"),h=require("./Api-DF2GCa58.cjs"),m=require("./DataStorage-BkX_xmBA.cjs");class a{static async get(t){var i;const s=this.getName(t);return s in this.data?this.data[s]:(h.Api.isLocalhost()||await this.add(t),((i=this.data)==null?void 0:i[s])??t)}static getSync(t,s=!1){const i=this.getName(t);return i in this.data?this.data[i]:s?" ":t}static getList(t){return new Promise(s=>{const i={};let o=0;for(const r of t)this.get(r).then(u=>{i[r]=u,++o>=t.length&&s(i)})})}static getListSync(t,s=!1){const i={};for(const o of t)i[o]=this.getSync(o,s);return i}static add(t){return new Promise(s=>{this.getNamesNone(t).length>0?(this.cache.push(...this.getNamesNone(t)),this.resolveList.push(s),this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(()=>{this.timeout=void 0,this.make().then(()=>{this.resolveList.forEach(o=>o()),this.resolveList=[]})},160)):s()})}static addSync(t){g.forEach(t,(s,i)=>{l.isString(s)&&n.isFilled(s)&&(this.data[this.getName(i)]=s)})}static async addNormalOrSync(t){if(n.isFilled(t))if(h.Api.isLocalhost())this.addSync(t);else{const s=Object.keys(t);s.length>0&&await this.add(s)}}static getName(t){return`${l.Geo.getLocation()}-${t}`}static getNamesNone(t){const s=[];return N.toArray(t).forEach(i=>{i!=="__TRANSLATE_START__"&&i!=="__TRANSLATE_END__"&&!(this.getName(i)in this.data)&&s.push(i)}),s}static async getResponse(){const t=h.Api.isLocalhost()?this.urlLocalhost:this.url,s=await h.Api.response({path:t,request:{list:this.cache}});return(s==null?void 0:s.data)??{}}static async make(){const t=await this.getResponse();this.cache.forEach(s=>{this.data[this.getName(s)]=(t==null?void 0:t[s])??""}),this.cache=[]}}e(a,"url",m.useEnv("apiTranslate")),e(a,"urlLocalhost","translate.json"),e(a,"data",{}),e(a,"cache",[]),e(a,"resolveList",[]),e(a,"timeout");exports.Translate=a;
