"use strict";var $=Object.defineProperty;var D=(i,t,s)=>t in i?$(i,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[t]=s;var c=(i,t,s)=>(D(i,typeof t!="symbol"?t+"":t,s),s);const U=require("./getElement-BELE3lVa.cjs"),f=require("./toArray-h-YFi-Q9.cjs"),d=require("./isFilled-Cbsu2kXd.cjs"),u=require("./Geo-CEQqVODa.cjs"),w=require("./DataStorage-DA5HrVSP.cjs"),T=require("./EventItem-CQLUkI1j.cjs");function j(i,t="=",s="&"){return f.forEach(i,(r,e)=>`${e}${t}${encodeURIComponent(String(r).trim())}`).sort().join(s)}const F="ui-loading",l=class l{static is(){return this.value>0}static show(){this.value++,this.dispatch()}static hide(){this.is()&&(this.value--,this.dispatch())}static registrationEvent(t,s){new T.EventItem(window,F,t).setElementControl(s).start()}static dispatch(){this.event.dispatch({loading:this.is()})}};c(l,"value",0),c(l,"event"),w.isDomRuntime()&&(l.event=new T.EventItem(window,F));let h=l;var O=(i=>(i.get="GET",i.post="POST",i.put="PUT",i.delete="DELETE",i))(O||{});const G=[],o=class o{static isLocalhost(){return typeof location>"u"||location.hostname==="localhost"}static getHeaders(t,s="application/json;charset=UTF-8"){if(t!==null){const r={...t||{}};return s&&(r["Content-Type"]=s),r}}static getUrl(t,s=!0){return`${s?this.url:""}${t}`.replace("{locale}",u.Geo.getLocation()).replace("{country}",u.Geo.getCountry()).replace("{language}",u.Geo.getLanguage())}static getBody(t={},s="GET"){if(s!=="GET"&&d.isFilled(t))return t instanceof FormData||u.isString(t)?t:JSON.stringify(t)}static getBodyForGet(t,s="",r="GET"){if(r==="GET"){const e=s.match(/\?/)?"&":"?",n=typeof t=="object"?j(t):t;if(d.isFilled(n))return`${e}${n}`}return""}static setUrl(t){return this.url=t,o}static async request(t){return u.isString(t)?await this.fetch({path:t}):await this.fetch(t)}static get(t){return this.request({...t,method:"GET"})}static post(t){return this.request({...t,method:"POST"})}static put(t){return this.request({...t,method:"PUT"})}static delete(t){return this.request({...t,method:"DELETE"})}static addResponse(t){return this.response.push(...f.toArray(t)),o}static getResponse(t="",s,r){return this.response.find(e=>{if((e==null?void 0:e.disable)!==!0&&t===e.path&&s===e.method&&G.indexOf(e)===-1){let n=!1;if(r===(e==null?void 0:e.request)&&(n=!0),d.isFilled(r)&&d.isFilled(e.request)&&f.isObjectNotArray(r)&&f.isObjectNotArray(e.request)&&!(r instanceof FormData)&&!(e.request instanceof FormData)&&Object.values(r).length===Object.values(e.request).length&&(n=Object.entries(e.request).reduce((g,[p,E])=>g&&E===(r==null?void 0:r[p]),!0)),n)return G.push(e),!0}return!1})}static async fetch({api:t=!0,path:s="",pathFull:r=void 0,method:e="GET",request:n=void 0,headers:g={},type:p="application/json;charset=UTF-8",global:E=e==="GET",init:b={}}){if(E){const a=this.getResponse(s,e,n);if(a)return U.executeFunction(a.response)}let v={};h.show();try{const a=r??this.getUrl(s,t),S=`${a}${this.getBodyForGet(n,a,e)}`;v=await(await fetch(S,{...b,method:e,headers:this.getHeaders(g,p),body:this.getBody(n,e)})).json()}catch(a){console.error(a)}return h.hide(),v}};c(o,"url",w.useEnv("api","/")),c(o,"response",[]);let y=o;exports.Api=y;exports.ApiMethodItem=O;exports.Loading=h;exports.getRequestString=j;
