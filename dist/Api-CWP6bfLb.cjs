"use strict";var j=Object.defineProperty;var b=(n,t,r)=>t in n?j(n,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[t]=r;var d=(n,t,r)=>(b(n,typeof t!="symbol"?t+"":t,r),r);const O=require("./executeFunction-HIcLkt3C.cjs"),l=require("./toArray-h-YFi-Q9.cjs"),u=require("./isFilled-mq6KFBc-.cjs"),c=require("./Geo-CwYIFTsn.cjs"),S=require("./DataStorage-CrDkIbGp.cjs");function T(n,t="=",r="&"){return l.forEach(n,(s,e)=>`${e}${t}${encodeURIComponent(String(s).trim())}`).sort().join(r)}var E=(n=>(n.get="GET",n.post="POST",n.put="PUT",n.delete="DELETE",n))(E||{});const y=[],a=class a{static isLocalhost(){return typeof location>"u"||location.hostname==="localhost"}static getHeaders(t,r="application/json;charset=UTF-8"){if(t!==null){const s={...t||{}};return r&&(s["Content-Type"]=r),s}}static getUrl(t,r=!0){return`${r?this.url:""}${t}`.replace("{locale}",c.Geo.getLocation()).replace("{country}",c.Geo.getCountry()).replace("{language}",c.Geo.getLanguage())}static getBody(t={},r="GET"){if(r!=="GET"&&u.isFilled(t))return t instanceof FormData||c.isString(t)?t:JSON.stringify(t)}static getBodyForGet(t,r="",s="GET"){if(s==="GET"){const e=r.match(/\?/)?"&":"?",o=typeof t=="object"?T(t):t;if(u.isFilled(o))return`${e}${o}`}return""}static setUrl(t){return this.url=t,a}static async request(t){return c.isString(t)?await this.fetch({path:t}):await this.fetch(t)}static get(t){return this.request({...t,method:"GET"})}static post(t){return this.request({...t,method:"POST"})}static put(t){return this.request({...t,method:"PUT"})}static delete(t){return this.request({...t,method:"DELETE"})}static addResponse(t){return this.response.push(...l.toArray(t)),a}static getResponse(t="",r,s){return this.response.find(e=>{if((e==null?void 0:e.disable)!==!0&&t===e.path&&r===e.method&&y.indexOf(e)===-1){let o=!1;if(s===(e==null?void 0:e.request)&&(o=!0),u.isFilled(s)&&u.isFilled(e.request)&&l.isObjectNotArray(s)&&l.isObjectNotArray(e.request)&&!(s instanceof FormData)&&!(e.request instanceof FormData)&&Object.values(s).length===Object.values(e.request).length&&(o=Object.entries(e.request).reduce((h,[f,g])=>h&&g===(s==null?void 0:s[f]),!0)),o)return y.push(e),!0}return!1})}static async fetch({api:t=!0,path:r="",pathFull:s=void 0,method:e="GET",request:o=void 0,headers:h={},type:f="application/json;charset=UTF-8",global:g=e==="GET",init:F={}}){if(g){const i=this.getResponse(r,e,o);if(i)return O.executeFunction(i.response)}try{const i=s??this.getUrl(r,t),G=`${i}${this.getBodyForGet(o,i,e)}`;return await(await fetch(G,{...F,method:e,headers:this.getHeaders(h,f),body:this.getBody(o,e)})).json()}catch(i){console.error(i)}return{}}};d(a,"url",S.useEnv("api","/")),d(a,"response",[]);let p=a;exports.Api=p;exports.ApiMethodItem=E;exports.getRequestString=T;
