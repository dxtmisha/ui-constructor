"use strict";var E=Object.defineProperty;var p=(i,e,t)=>e in i?E(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var o=(i,e,t)=>(p(i,typeof e!="symbol"?e+"":e,t),t);const m=require("./getElement-BELE3lVa.cjs");var d=typeof document<"u"?document.currentScript:null;function g(){return typeof window<"u"}function I(i){return i==null}function a(i,e=!1){if(typeof i=="string"){const t=i.trim();switch(t){case"undefined":return;case"null":return null;case"true":return!0;case"false":return!1;default:if(/^[{[]/.exec(t))try{return JSON.parse(t)}catch{}else{if(/^[0-9]+\.[0-9.]+$/.exec(t))return parseFloat(t);if(/^[0-9]+$/.exec(t))return parseInt(t,10);if(e&&window&&t in window&&typeof window[t]=="function")return window[t]}}}return i}var r={VITE_PREFIX:"__dUi",VITE_DESIGNS:"m2,m3,c1,c2",VITE_DESIGNS_GLOBAL:"UI",VITE_DESIGNS_ALTER:"CC",VITE_UI_GIT:"git+https://github.com/dxtmisha/ui-playground.git",VITE_UI_WEB:"https://ru.dev2.coralclub.app",VITE_UI_PATH:"/ui/icons/",VITE_UI_API_URL:"/restApi/",VITE_UI_API_TRANSLATE:"/restApi/uiTranslate",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const c={api:{index:"UI_API_URL",value:"/api/"},apiTranslate:{index:"UI_API_TRANSLATE",value:"ui/?command=translate"},cache:{index:"UI_CACHE",value:7*24*60*60},iconPath:{index:"UI_ICON_PATH",value:"/icons/"},language:{index:"UI_LANGUAGE",value:"en-GB"},prefix:{index:"UI_PREFIX",value:"ui-playground-"}};class f{constructor(e){this.index=e}get(e){var n,s,h;const t=this.getName();typeof document>"u"?require("url").pathToFileURL(__filename).href:d&&d.src||new URL("DataStorage-DA5HrVSP.cjs",document.baseURI).href;{const u=(r==null?void 0:r[t])??(r==null?void 0:r[`VITE_${t}`]);if(u)return a(u)}if(typeof process<"u"){const u=((n=process.env)==null?void 0:n[t])??((s=process.env)==null?void 0:s[`VUE_APP_${t}`])??((h=process.env)==null?void 0:h[`NUXT_${t}`]);if(u)return a(u)}return a(e??this.getValue())}getBasic(){return c==null?void 0:c[this.index]}getName(){var e;return((e=this.getBasic())==null?void 0:e.index)??this.index}getValue(){var e;return(e=this.getBasic())==null?void 0:e.value}}function v(i,e){return new f(i).get(e)}class _{constructor(e,t=!1){o(this,"value");o(this,"age");this.name=e,this.isSession=t;const n=`${t?"session":"storage"}#${e}`;if(n in l)return l[n];const s=this.getValue();s&&(this.value=s.value,this.age=s.age),l[n]=this}get(e,t){if(this.value&&this.isCache(t))return this.value;if(e)return this.set(e)}set(e){var t,n;return this.value=m.executeFunction(e),this.age=new Date().getTime(),this.value===void 0?(t=this.getMethod())==null||t.removeItem(this.getIndex()):(n=this.getMethod())==null||n.setItem(this.getIndex(),JSON.stringify({value:this.value,age:this.age})),this.value}isCache(e){return I(e)||this.age&&this.age+e*1e3>=new Date().getTime()}getMethod(){if(g())return this.isSession?window==null?void 0:window.sessionStorage:window==null?void 0:window.localStorage}getIndex(){return`${v("prefix","")}${this.name}`}getValue(){var t;const e=(t=this.getMethod())==null?void 0:t.getItem(this.getIndex());if(e)try{return JSON.parse(e)}catch{}}}const l={};exports.DataStorage=_;exports.Env=f;exports.isDomRuntime=g;exports.isNull=I;exports.transformation=a;exports.useEnv=v;
