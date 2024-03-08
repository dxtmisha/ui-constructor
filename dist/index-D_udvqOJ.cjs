"use strict";var Ce=Object.defineProperty;var Se=(e,t,r)=>t in e?Ce(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var d=(e,t,r)=>(Se(e,typeof t!="symbol"?t+"":t,r),r);const m=require("./getClipboardData-CkKSBgE4.cjs"),O=require("./Geo-pWSG9_zK.cjs"),at=require("./createElement-BGN-bNwW.cjs"),De=require("./eventStopPropagation-gA3cHL89.cjs"),q=require("./executeFunction-HIcLkt3C.cjs"),y=require("./toArray-h-YFi-Q9.cjs"),V=require("./getMouseClientY-BAQt6jOl.cjs"),E=require("./MutationDataItem-BpdtLyGI.cjs"),It=require("./getElement-BOMHgffA.cjs"),xt=require("./getElementId-DvFT2KHT.cjs"),G=require("./EventItem-BqRCiATU.cjs"),H=require("./Api-DdA0cMiR.cjs"),Ne=require("./inArray-iLoL9QGm.cjs"),Rt=require("./toNumber-cBi38xJ6.cjs"),b=require("./DataStorage-Bad5dLlo.cjs"),X=require("./isFilled-D1Z5OZVG.cjs"),c=require("vue"),qt=require("./getBind-JXbQO-KO.cjs"),p=require("./DesignConstructorAbstract-BUcyMiAM.cjs"),M=require("./GeoIntl-D4_kTquE.cjs"),pt=require("./GeoFlag-awoi01FC.cjs"),Me=require("./Icons-CAT7HElz.cjs"),W=require("./Translate-DOYWexjd.cjs"),ct=require("./DesignAsyncAbstract-BUX1NOPv.cjs"),B=require("./Mutation-16S-gAzG.cjs"),Ie=require("vue-router");function Pt(e){var t;return(e==null?void 0:e.key)??(e==null?void 0:e.code)??((t=e==null?void 0:e.keyCode)==null?void 0:t.toString())}function Bt(e){return Math.min(...m.getLengthOfAllArray(e))}function Ut(e){return{x:V.getMouseClientX(e),y:V.getMouseClientY(e)}}function Kt(e,t){const r={};return y.isObject(e)&&y.isObject(t)&&y.forEach(e,(i,n)=>{n in t&&(r[n]=i)}),r}function Ht(e,t){let r=Object.keys(e).length!==Object.keys(t).length;return r||y.forEach(e,(i,n)=>{i!==(t==null?void 0:t[n])&&(r=!0)}),r}function Wt(e,t){const r=Math.floor(t);return e>=r&&e<r+1}function Yt(e,t){return Array.isArray(e)?e.every(r=>O.isSelected(r,t)):O.isSelected(e,t)}function Qt(e,t={},r="value"){return c.computed(()=>qt.getBind(e==null?void 0:e.value,p.getRef(t),r))}function S(e){return c.isRef(e)?e:c.ref(e)}function Jt(e,t){let r=e;return y.forEach(t,(i,n)=>{r=r.replace(m.getExp(`[${n}]`),q.executeFunction(i))}),r}function zt(e,t,r){if(y.isObject(e)&&y.isObject(t)){if(r){let i={},n=!1;return y.forEach(e,(o,s)=>{!n&&(r===s||r===o)?(n=!0,i=m.replaceRecursive(i,t)):n?i=m.replaceRecursive(i,{[s]:o}):i[s]=y.isObject(o)?O.copyObject(o):o}),n?i:m.replaceRecursive(e,t)}if(y.isObject(t))return m.replaceRecursive(e,t)}return O.copyObject(e)}class bt{constructor(){d(this,"cache",{})}get(t,r,i){return this.getCacheItem(t,r).getCache(i??[])}async getAsync(t,r,i){return await this.getCacheItem(t,r).getCacheAsync(i??[])}getCacheItem(t,r){return t in this.cache||(this.cache[t]=new M.CacheItem(r)),this.cache[t]}}const z=class z{static get(t,r,i){return this.cache.get(t,r,i)}};d(z,"cache"),z.cache=new bt;let Y=z;const xe="cookie-block";class Z{static get(){return this.storage.get()??!1}static set(t){this.storage.set(t)}}d(Z,"storage",new b.DataStorage(xe));const U={};class _t{constructor(t){d(this,"value");d(this,"options",{});if(this.name=t,t in ut)return ut[t];this.value=U==null?void 0:U[t],ut[t]=this}get(t,r){return this.value===void 0&&t&&this.set(t,r),this.value}set(t,r){this.value=q.executeFunction(t),Object.assign(this.options,r),this.update()}remove(){this.set("")}getAge(){var t;return((t=this.options)==null?void 0:t.age)??b.useEnv("cache")??7*24*60*60}update(){var t,r;if(b.isDomRuntime()&&!Z.get()){const i=String(this.value??"");document.cookie=[`${encodeURIComponent(this.name)}=${encodeURIComponent(i)}`,`max-age=${i===""?"-1":this.getAge()}`,`SameSite=${((t=this.options)==null?void 0:t.sameSite)??"strict"}`,...((r=this.options)==null?void 0:r.arguments)??[]].join("; ")}}}(()=>{if(b.isDomRuntime())for(const t of document.cookie.split(";")){const[r,i]=t.trim().split("=");r&&X.isFilled(i)&&(U[r]=b.transformation(i))}})();const ut={},j=class j{static get(t){return this.list.find(r=>t===r.value)}static getByPhone(t){let r=this.map,i,n="";return this.toNumber(t).forEach(o=>{n===""&&o in r?(i=r[o],r=r[o].next):n+=o}),{item:i,phone:n}}static getList(){return this.list}static getMap(){return this.map}static toMask(t,r){if(X.isFilled(t)&&Array.isArray(r)&&r.length>0){const i=this.removeZero(t),n=i.length;for(const o of r)if(this.getUnnecessaryLength(o)===n)return this.toStandard(i,o)}}static removeZero(t){return t.match(/^0/)?t.replace(/^0/,""):t.match(/^89/)?t.replace(/^8/,""):t}static getUnnecessaryLength(t){return t.replace(/[^*]+/ig,"").length}static makeList(){const t=y.forEach(O.Geo.getList(),r=>{if(r!=null&&r.phoneMask)return{phone:(r==null?void 0:r.phoneCode)&&parseInt(r.phoneCode)||void 0,mask:y.toArray(r.phoneMask),value:r.country}});this.list=t.sort((r,i)=>r.phone-i.phone)}static makeMap(){this.list.forEach(t=>{t.mask.forEach(r=>{let i=this.map,n;this.toNumber(r).forEach(o=>{o in i||(i[o]={items:[],info:void 0,value:void 0,mask:[],maskFull:[],next:{}}),n=i[o],i=i[o].next}),n&&(n.value===void 0&&(n.info=t,n.value=t.value),n.mask.push(r),n.maskFull.push(r.replace(/\d/ig,"*")),n.items.push(t))})})}static toNumber(t){return t.replace(/\D+/ig,"").split("")}static toStandard(t,r){let i=0;return r.replace(/\*/ig,()=>t[i++])}};d(j,"list",[]),d(j,"map",{}),j.makeList(),j.makeMap();let Q=j;const N=class N{static get(t,r){return!(t in this.hash)&&r&&this.set(t,r),this.hash[t]}static set(t,r){var n;const i=q.executeFunction(r);i!==((n=this.hash)==null?void 0:n[t])&&(this.hash[t]=i,this.update())}static addWatch(t,r){t in this.watch?this.watch[t].push(r):this.watch={[t]:[r]}}static getLocation(){const t={};return location.hash.replace(/([\w-]+)[:=]([^;]+)/ig,(...r)=>(t[r[1]]=b.transformation(r[2]),"")),t}static update(){this.block=!0,history.replaceState(null,"",`#${H.getRequestString(this.hash,"=",";")}`),requestAnimationFrame(()=>{this.block=!1})}static reload(){if(!this.block){const t=this.getLocation();this.makeWatch(t),this.hash=t}}static makeWatch(t){y.forEach(this.watch,(r,i)=>{var n;((n=this.hash)==null?void 0:n[i])!==(t==null?void 0:t[i])&&r.forEach(o=>o(t[i]))})}};d(N,"hash",{}),d(N,"watch",{}),d(N,"block",!1),b.isDomRuntime()&&(N.reload(),addEventListener("hashchange",()=>N.reload()));let I=N;const Lt="ui-loading",$=class ${static is(){return this.value>0}static show(){this.value++,this.dispatch()}static hide(){this.is()&&(this.value--,this.dispatch())}static registrationEvent(t,r){new G.EventItem(window,Lt,t).setElementControl(r).start()}static dispatch(){this.event.dispatch({loading:this.is()})}};d($,"value",0),d($,"event"),b.isDomRuntime()&&($.event=new G.EventItem(window,Lt));let k=$;function Re(){return Xt().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Xt(){return typeof navigator<"u"&&typeof window<"u"?window:typeof globalThis<"u"?globalThis:{}}const Le=typeof Proxy=="function",Te="devtools-plugin:setup",je="plugin:settings:set";let L,vt;function Ge(){var e;return L!==void 0||(typeof window<"u"&&window.performance?(L=!0,vt=window.performance):typeof globalThis<"u"&&(!((e=globalThis.perf_hooks)===null||e===void 0)&&e.performance)?(L=!0,vt=globalThis.perf_hooks.performance):L=!1),L}function ke(){return Ge()?vt.now():Date.now()}class Fe{constructor(t,r){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=r;const i={};if(t.settings)for(const s in t.settings){const a=t.settings[s];i[s]=a.defaultValue}const n=`__vue-devtools-plugin-settings__${t.id}`;let o=Object.assign({},i);try{const s=localStorage.getItem(n),a=JSON.parse(s);Object.assign(o,a)}catch{}this.fallbacks={getSettings(){return o},setSettings(s){try{localStorage.setItem(n,JSON.stringify(s))}catch{}o=s},now(){return ke()}},r&&r.on(je,(s,a)=>{s===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(s,a)=>this.target?this.target.on[a]:(...u)=>{this.onQueue.push({method:a,args:u})}}),this.proxiedTarget=new Proxy({},{get:(s,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...u)=>(this.targetQueue.push({method:a,args:u,resolve:()=>{}}),this.fallbacks[a](...u)):(...u)=>new Promise(f=>{this.targetQueue.push({method:a,args:u,resolve:f})})})}async setRealTarget(t){this.target=t;for(const r of this.onQueue)this.target.on[r.method](...r.args);for(const r of this.targetQueue)r.resolve(await this.target[r.method](...r.args))}}function Ve(e,t){const r=e,i=Xt(),n=Re(),o=Le&&r.enableEarlyProxy;if(n&&(i.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!o))n.emit(Te,e,t);else{const s=o?new Fe(r,n):null;(i.__VUE_DEVTOOLS_PLUGINS__=i.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:r,setupFn:t,proxy:s}),s&&t(s.proxiedTarget)}}/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */var tt="store";function Zt(e){return e===void 0&&(e=null),c.inject(e!==null?e:tt)}function $e(e,t){return e.filter(t)[0]}function mt(e,t){if(t===void 0&&(t=[]),e===null||typeof e!="object")return e;var r=$e(t,function(n){return n.original===e});if(r)return r.copy;var i=Array.isArray(e)?[]:{};return t.push({original:e,copy:i}),Object.keys(e).forEach(function(n){i[n]=mt(e[n],t)}),i}function x(e,t){Object.keys(e).forEach(function(r){return t(e[r],r)})}function te(e){return e!==null&&typeof e=="object"}function qe(e){return e&&typeof e.then=="function"}function A(e,t){if(!e)throw new Error("[vuex] "+t)}function Pe(e,t){return function(){return e(t)}}function ee(e,t,r){return t.indexOf(e)<0&&(r&&r.prepend?t.unshift(e):t.push(e)),function(){var i=t.indexOf(e);i>-1&&t.splice(i,1)}}function re(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var r=e.state;et(e,r,[],e._modules.root,!0),Et(e,r,t)}function Et(e,t,r){var i=e._state,n=e._scope;e.getters={},e._makeLocalGettersCache=Object.create(null);var o=e._wrappedGetters,s={},a={},u=c.effectScope(!0);u.run(function(){x(o,function(f,l){s[l]=Pe(f,e),a[l]=c.computed(function(){return s[l]()}),Object.defineProperty(e.getters,l,{get:function(){return a[l].value},enumerable:!0})})}),e._state=c.reactive({data:t}),e._scope=u,e.strict&&We(e),i&&r&&e._withCommit(function(){i.data=null}),n&&n.stop()}function et(e,t,r,i,n){var o=!r.length,s=e._modules.getNamespace(r);if(i.namespaced&&(e._modulesNamespaceMap[s]&&process.env.NODE_ENV!=="production"&&console.error("[vuex] duplicate namespace "+s+" for the namespaced module "+r.join("/")),e._modulesNamespaceMap[s]=i),!o&&!n){var a=Ot(t,r.slice(0,-1)),u=r[r.length-1];e._withCommit(function(){process.env.NODE_ENV!=="production"&&u in a&&console.warn('[vuex] state field "'+u+'" was overridden by a module with the same name at "'+r.join(".")+'"'),a[u]=i.state})}var f=i.context=Be(e,s,r);i.forEachMutation(function(l,h){var g=s+h;Ue(e,g,l,f)}),i.forEachAction(function(l,h){var g=l.root?h:s+h,v=l.handler||l;Ke(e,g,v,f)}),i.forEachGetter(function(l,h){var g=s+h;He(e,g,l,f)}),i.forEachChild(function(l,h){et(e,t,r.concat(h),l,n)})}function Be(e,t,r){var i=t==="",n={dispatch:i?e.dispatch:function(o,s,a){var u=J(o,s,a),f=u.payload,l=u.options,h=u.type;if((!l||!l.root)&&(h=t+h,process.env.NODE_ENV!=="production"&&!e._actions[h])){console.error("[vuex] unknown local action type: "+u.type+", global type: "+h);return}return e.dispatch(h,f)},commit:i?e.commit:function(o,s,a){var u=J(o,s,a),f=u.payload,l=u.options,h=u.type;if((!l||!l.root)&&(h=t+h,process.env.NODE_ENV!=="production"&&!e._mutations[h])){console.error("[vuex] unknown local mutation type: "+u.type+", global type: "+h);return}e.commit(h,f,l)}};return Object.defineProperties(n,{getters:{get:i?function(){return e.getters}:function(){return ie(e,t)}},state:{get:function(){return Ot(e.state,r)}}}),n}function ie(e,t){if(!e._makeLocalGettersCache[t]){var r={},i=t.length;Object.keys(e.getters).forEach(function(n){if(n.slice(0,i)===t){var o=n.slice(i);Object.defineProperty(r,o,{get:function(){return e.getters[n]},enumerable:!0})}}),e._makeLocalGettersCache[t]=r}return e._makeLocalGettersCache[t]}function Ue(e,t,r,i){var n=e._mutations[t]||(e._mutations[t]=[]);n.push(function(s){r.call(e,i.state,s)})}function Ke(e,t,r,i){var n=e._actions[t]||(e._actions[t]=[]);n.push(function(s){var a=r.call(e,{dispatch:i.dispatch,commit:i.commit,getters:i.getters,state:i.state,rootGetters:e.getters,rootState:e.state},s);return qe(a)||(a=Promise.resolve(a)),e._devtoolHook?a.catch(function(u){throw e._devtoolHook.emit("vuex:error",u),u}):a})}function He(e,t,r,i){if(e._wrappedGetters[t]){process.env.NODE_ENV!=="production"&&console.error("[vuex] duplicate getter key: "+t);return}e._wrappedGetters[t]=function(o){return r(i.state,i.getters,o.state,o.getters)}}function We(e){c.watch(function(){return e._state.data},function(){process.env.NODE_ENV!=="production"&&A(e._committing,"do not mutate vuex store state outside mutation handlers.")},{deep:!0,flush:"sync"})}function Ot(e,t){return t.reduce(function(r,i){return r[i]},e)}function J(e,t,r){return te(e)&&e.type&&(r=t,t=e,e=e.type),process.env.NODE_ENV!=="production"&&A(typeof e=="string","expects string as the type, but found "+typeof e+"."),{type:e,payload:t,options:r}}var Ye="vuex bindings",Tt="vuex:mutations",lt="vuex:actions",T="vuex",Qe=0;function Je(e,t){Ve({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[Ye]},function(r){r.addTimelineLayer({id:Tt,label:"Vuex Mutations",color:jt}),r.addTimelineLayer({id:lt,label:"Vuex Actions",color:jt}),r.addInspector({id:T,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),r.on.getInspectorTree(function(i){if(i.app===e&&i.inspectorId===T)if(i.filter){var n=[];ae(n,t._modules.root,i.filter,""),i.rootNodes=n}else i.rootNodes=[se(t._modules.root,"")]}),r.on.getInspectorState(function(i){if(i.app===e&&i.inspectorId===T){var n=i.nodeId;ie(t,n),i.state=Ze(er(t._modules,n),n==="root"?t.getters:t._makeLocalGettersCache,n)}}),r.on.editInspectorState(function(i){if(i.app===e&&i.inspectorId===T){var n=i.nodeId,o=i.path;n!=="root"&&(o=n.split("/").filter(Boolean).concat(o)),t._withCommit(function(){i.set(t._state.data,o,i.state.value)})}}),t.subscribe(function(i,n){var o={};i.payload&&(o.payload=i.payload),o.state=n,r.notifyComponentUpdate(),r.sendInspectorTree(T),r.sendInspectorState(T),r.addTimelineEvent({layerId:Tt,event:{time:Date.now(),title:i.type,data:o}})}),t.subscribeAction({before:function(i,n){var o={};i.payload&&(o.payload=i.payload),i._id=Qe++,i._time=Date.now(),o.state=n,r.addTimelineEvent({layerId:lt,event:{time:i._time,title:i.type,groupId:i._id,subtitle:"start",data:o}})},after:function(i,n){var o={},s=Date.now()-i._time;o.duration={_custom:{type:"duration",display:s+"ms",tooltip:"Action duration",value:s}},i.payload&&(o.payload=i.payload),o.state=n,r.addTimelineEvent({layerId:lt,event:{time:Date.now(),title:i.type,groupId:i._id,subtitle:"end",data:o}})}})})}var jt=8702998,ze=6710886,Xe=16777215,ne={label:"namespaced",textColor:Xe,backgroundColor:ze};function oe(e){return e&&e!=="root"?e.split("/").slice(-2,-1)[0]:"Root"}function se(e,t){return{id:t||"root",label:oe(t),tags:e.namespaced?[ne]:[],children:Object.keys(e._children).map(function(r){return se(e._children[r],t+r+"/")})}}function ae(e,t,r,i){i.includes(r)&&e.push({id:i||"root",label:i.endsWith("/")?i.slice(0,i.length-1):i||"Root",tags:t.namespaced?[ne]:[]}),Object.keys(t._children).forEach(function(n){ae(e,t._children[n],r,i+n+"/")})}function Ze(e,t,r){t=r==="root"?t:t[r];var i=Object.keys(t),n={state:Object.keys(e.state).map(function(s){return{key:s,editable:!0,value:e.state[s]}})};if(i.length){var o=tr(t);n.getters=Object.keys(o).map(function(s){return{key:s.endsWith("/")?oe(s):s,editable:!1,value:yt(function(){return o[s]})}})}return n}function tr(e){var t={};return Object.keys(e).forEach(function(r){var i=r.split("/");if(i.length>1){var n=t,o=i.pop();i.forEach(function(s){n[s]||(n[s]={_custom:{value:{},display:s,tooltip:"Module",abstract:!0}}),n=n[s]._custom.value}),n[o]=yt(function(){return e[r]})}else t[r]=yt(function(){return e[r]})}),t}function er(e,t){var r=t.split("/").filter(function(i){return i});return r.reduce(function(i,n,o){var s=i[n];if(!s)throw new Error('Missing module "'+n+'" for path "'+t+'".');return o===r.length-1?s:s._children},t==="root"?e:e.root._children)}function yt(e){try{return e()}catch(t){return t}}var C=function(t,r){this.runtime=r,this._children=Object.create(null),this._rawModule=t;var i=t.state;this.state=(typeof i=="function"?i():i)||{}},ce={namespaced:{configurable:!0}};ce.namespaced.get=function(){return!!this._rawModule.namespaced};C.prototype.addChild=function(t,r){this._children[t]=r};C.prototype.removeChild=function(t){delete this._children[t]};C.prototype.getChild=function(t){return this._children[t]};C.prototype.hasChild=function(t){return t in this._children};C.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)};C.prototype.forEachChild=function(t){x(this._children,t)};C.prototype.forEachGetter=function(t){this._rawModule.getters&&x(this._rawModule.getters,t)};C.prototype.forEachAction=function(t){this._rawModule.actions&&x(this._rawModule.actions,t)};C.prototype.forEachMutation=function(t){this._rawModule.mutations&&x(this._rawModule.mutations,t)};Object.defineProperties(C.prototype,ce);var R=function(t){this.register([],t,!1)};R.prototype.get=function(t){return t.reduce(function(r,i){return r.getChild(i)},this.root)};R.prototype.getNamespace=function(t){var r=this.root;return t.reduce(function(i,n){return r=r.getChild(n),i+(r.namespaced?n+"/":"")},"")};R.prototype.update=function(t){ue([],this.root,t)};R.prototype.register=function(t,r,i){var n=this;i===void 0&&(i=!0),process.env.NODE_ENV!=="production"&&le(t,r);var o=new C(r,i);if(t.length===0)this.root=o;else{var s=this.get(t.slice(0,-1));s.addChild(t[t.length-1],o)}r.modules&&x(r.modules,function(a,u){n.register(t.concat(u),a,i)})};R.prototype.unregister=function(t){var r=this.get(t.slice(0,-1)),i=t[t.length-1],n=r.getChild(i);if(!n){process.env.NODE_ENV!=="production"&&console.warn("[vuex] trying to unregister module '"+i+"', which is not registered");return}n.runtime&&r.removeChild(i)};R.prototype.isRegistered=function(t){var r=this.get(t.slice(0,-1)),i=t[t.length-1];return r?r.hasChild(i):!1};function ue(e,t,r){if(process.env.NODE_ENV!=="production"&&le(e,r),t.update(r),r.modules)for(var i in r.modules){if(!t.getChild(i)){process.env.NODE_ENV!=="production"&&console.warn("[vuex] trying to add a new module '"+i+"' on hot reloading, manual reload is needed");return}ue(e.concat(i),t.getChild(i),r.modules[i])}}var Gt={assert:function(e){return typeof e=="function"},expected:"function"},rr={assert:function(e){return typeof e=="function"||typeof e=="object"&&typeof e.handler=="function"},expected:'function or object with "handler" function'},kt={getters:Gt,mutations:Gt,actions:rr};function le(e,t){Object.keys(kt).forEach(function(r){if(t[r]){var i=kt[r];x(t[r],function(n,o){A(i.assert(n),ir(e,r,o,n,i.expected))})}})}function ir(e,t,r,i,n){var o=t+" should be "+n+' but "'+t+"."+r+'"';return e.length>0&&(o+=' in module "'+e.join(".")+'"'),o+=" is "+JSON.stringify(i)+".",o}function wt(e){return new _(e)}var _=function e(t){var r=this;t===void 0&&(t={}),process.env.NODE_ENV!=="production"&&(A(typeof Promise<"u","vuex requires a Promise polyfill in this browser."),A(this instanceof e,"store must be called with the new operator."));var i=t.plugins;i===void 0&&(i=[]);var n=t.strict;n===void 0&&(n=!1);var o=t.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new R(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=o;var s=this,a=this,u=a.dispatch,f=a.commit;this.dispatch=function(g,v){return u.call(s,g,v)},this.commit=function(g,v,D){return f.call(s,g,v,D)},this.strict=n;var l=this._modules.root.state;et(this,l,[],this._modules.root),Et(this,l),i.forEach(function(h){return h(r)})},At={state:{configurable:!0}};_.prototype.install=function(t,r){t.provide(r||tt,this),t.config.globalProperties.$store=this;var i=this._devtools!==void 0?this._devtools:process.env.NODE_ENV!=="production"||!1;i&&Je(t,this)};At.state.get=function(){return this._state.data};At.state.set=function(e){process.env.NODE_ENV!=="production"&&A(!1,"use store.replaceState() to explicit replace store state.")};_.prototype.commit=function(t,r,i){var n=this,o=J(t,r,i),s=o.type,a=o.payload,u=o.options,f={type:s,payload:a},l=this._mutations[s];if(!l){process.env.NODE_ENV!=="production"&&console.error("[vuex] unknown mutation type: "+s);return}this._withCommit(function(){l.forEach(function(g){g(a)})}),this._subscribers.slice().forEach(function(h){return h(f,n.state)}),process.env.NODE_ENV!=="production"&&u&&u.silent&&console.warn("[vuex] mutation type: "+s+". Silent option has been removed. Use the filter functionality in the vue-devtools")};_.prototype.dispatch=function(t,r){var i=this,n=J(t,r),o=n.type,s=n.payload,a={type:o,payload:s},u=this._actions[o];if(!u){process.env.NODE_ENV!=="production"&&console.error("[vuex] unknown action type: "+o);return}try{this._actionSubscribers.slice().filter(function(l){return l.before}).forEach(function(l){return l.before(a,i.state)})}catch(l){process.env.NODE_ENV!=="production"&&(console.warn("[vuex] error in before action subscribers: "),console.error(l))}var f=u.length>1?Promise.all(u.map(function(l){return l(s)})):u[0](s);return new Promise(function(l,h){f.then(function(g){try{i._actionSubscribers.filter(function(v){return v.after}).forEach(function(v){return v.after(a,i.state)})}catch(v){process.env.NODE_ENV!=="production"&&(console.warn("[vuex] error in after action subscribers: "),console.error(v))}l(g)},function(g){try{i._actionSubscribers.filter(function(v){return v.error}).forEach(function(v){return v.error(a,i.state,g)})}catch(v){process.env.NODE_ENV!=="production"&&(console.warn("[vuex] error in error action subscribers: "),console.error(v))}h(g)})})};_.prototype.subscribe=function(t,r){return ee(t,this._subscribers,r)};_.prototype.subscribeAction=function(t,r){var i=typeof t=="function"?{before:t}:t;return ee(i,this._actionSubscribers,r)};_.prototype.watch=function(t,r,i){var n=this;return process.env.NODE_ENV!=="production"&&A(typeof t=="function","store.watch only accepts a function."),c.watch(function(){return t(n.state,n.getters)},r,Object.assign({},i))};_.prototype.replaceState=function(t){var r=this;this._withCommit(function(){r._state.data=t})};_.prototype.registerModule=function(t,r,i){i===void 0&&(i={}),typeof t=="string"&&(t=[t]),process.env.NODE_ENV!=="production"&&(A(Array.isArray(t),"module path must be a string or an Array."),A(t.length>0,"cannot register the root module by using registerModule.")),this._modules.register(t,r),et(this,this.state,t,this._modules.get(t),i.preserveState),Et(this,this.state)};_.prototype.unregisterModule=function(t){var r=this;typeof t=="string"&&(t=[t]),process.env.NODE_ENV!=="production"&&A(Array.isArray(t),"module path must be a string or an Array."),this._modules.unregister(t),this._withCommit(function(){var i=Ot(r.state,t.slice(0,-1));delete i[t[t.length-1]]}),re(this)};_.prototype.hasModule=function(t){return typeof t=="string"&&(t=[t]),process.env.NODE_ENV!=="production"&&A(Array.isArray(t),"module path must be a string or an Array."),this._modules.isRegistered(t)};_.prototype.hotUpdate=function(t){this._modules.update(t),re(this,!0)};_.prototype._withCommit=function(t){var r=this._committing;this._committing=!0,t(),this._committing=r};Object.defineProperties(_.prototype,At);var Ct=it(function(e,t){var r={};return process.env.NODE_ENV!=="production"&&!P(t)&&console.error("[vuex] mapState: mapper parameter must be either an Array or an Object"),rt(t).forEach(function(i){var n=i.key,o=i.val;r[n]=function(){var a=this.$store.state,u=this.$store.getters;if(e){var f=nt(this.$store,"mapState",e);if(!f)return;a=f.context.state,u=f.context.getters}return typeof o=="function"?o.call(this,a,u):a[o]},r[n].vuex=!0}),r}),St=it(function(e,t){var r={};return process.env.NODE_ENV!=="production"&&!P(t)&&console.error("[vuex] mapMutations: mapper parameter must be either an Array or an Object"),rt(t).forEach(function(i){var n=i.key,o=i.val;r[n]=function(){for(var a=[],u=arguments.length;u--;)a[u]=arguments[u];var f=this.$store.commit;if(e){var l=nt(this.$store,"mapMutations",e);if(!l)return;f=l.context.commit}return typeof o=="function"?o.apply(this,[f].concat(a)):f.apply(this.$store,[o].concat(a))}}),r}),Dt=it(function(e,t){var r={};return process.env.NODE_ENV!=="production"&&!P(t)&&console.error("[vuex] mapGetters: mapper parameter must be either an Array or an Object"),rt(t).forEach(function(i){var n=i.key,o=i.val;o=e+o,r[n]=function(){if(!(e&&!nt(this.$store,"mapGetters",e))){if(process.env.NODE_ENV!=="production"&&!(o in this.$store.getters)){console.error("[vuex] unknown getter: "+o);return}return this.$store.getters[o]}},r[n].vuex=!0}),r}),Nt=it(function(e,t){var r={};return process.env.NODE_ENV!=="production"&&!P(t)&&console.error("[vuex] mapActions: mapper parameter must be either an Array or an Object"),rt(t).forEach(function(i){var n=i.key,o=i.val;r[n]=function(){for(var a=[],u=arguments.length;u--;)a[u]=arguments[u];var f=this.$store.dispatch;if(e){var l=nt(this.$store,"mapActions",e);if(!l)return;f=l.context.dispatch}return typeof o=="function"?o.apply(this,[f].concat(a)):f.apply(this.$store,[o].concat(a))}}),r}),fe=function(e){return{mapState:Ct.bind(null,e),mapGetters:Dt.bind(null,e),mapMutations:St.bind(null,e),mapActions:Nt.bind(null,e)}};function rt(e){return P(e)?Array.isArray(e)?e.map(function(t){return{key:t,val:t}}):Object.keys(e).map(function(t){return{key:t,val:e[t]}}):[]}function P(e){return Array.isArray(e)||te(e)}function it(e){return function(t,r){return typeof t!="string"?(r=t,t=""):t.charAt(t.length-1)!=="/"&&(t+="/"),e(t,r)}}function nt(e,t,r){var i=e._modulesNamespaceMap[r];return process.env.NODE_ENV!=="production"&&!i&&console.error("[vuex] module namespace not found in "+t+"(): "+r),i}function he(e){e===void 0&&(e={});var t=e.collapsed;t===void 0&&(t=!0);var r=e.filter;r===void 0&&(r=function(l,h,g){return!0});var i=e.transformer;i===void 0&&(i=function(l){return l});var n=e.mutationTransformer;n===void 0&&(n=function(l){return l});var o=e.actionFilter;o===void 0&&(o=function(l,h){return!0});var s=e.actionTransformer;s===void 0&&(s=function(l){return l});var a=e.logMutations;a===void 0&&(a=!0);var u=e.logActions;u===void 0&&(u=!0);var f=e.logger;return f===void 0&&(f=console),function(l){var h=mt(l.state);typeof f>"u"||(a&&l.subscribe(function(g,v){var D=mt(v);if(r(g,h,D)){var ot=$t(),st=n(g),Ae="mutation "+g.type+ot;Ft(f,Ae,t),f.log("%c prev state","color: #9E9E9E; font-weight: bold",i(h)),f.log("%c mutation","color: #03A9F4; font-weight: bold",st),f.log("%c next state","color: #4CAF50; font-weight: bold",i(D)),Vt(f)}h=D}),u&&l.subscribeAction(function(g,v){if(o(g,v)){var D=$t(),ot=s(g),st="action "+g.type+D;Ft(f,st,t),f.log("%c action","color: #03A9F4; font-weight: bold",ot),Vt(f)}}))}}function Ft(e,t,r){var i=r?e.groupCollapsed:e.group;try{i.call(e,t)}catch{e.log(t)}}function Vt(e){try{e.groupEnd()}catch{e.log("—— log end ——")}}function $t(){var e=new Date;return" @ "+K(e.getHours(),2)+":"+K(e.getMinutes(),2)+":"+K(e.getSeconds(),2)+"."+K(e.getMilliseconds(),3)}function nr(e,t){return new Array(t+1).join(e)}function K(e,t){return nr("0",t-e.toString().length)+e}var or={version:"4.1.0",Store:_,storeKey:tt,createStore:wt,useStore:Zt,mapState:Ct,mapMutations:St,mapGetters:Dt,mapActions:Nt,createNamespacedHelpers:fe,createLogger:he};const sr=Object.freeze(Object.defineProperty({__proto__:null,Store:_,createLogger:he,createNamespacedHelpers:fe,createStore:wt,default:or,mapActions:Nt,mapGetters:Dt,mapMutations:St,mapState:Ct,storeKey:tt,useStore:Zt},Symbol.toStringTag,{value:"Module"}));class de{static addComponent(t,r,i,n,o,s){const a=window,u={item:r,router:i,store:n,init:o,translate:s};E.KEY_GLOBAL_PROJECT in a?a[E.KEY_GLOBAL_PROJECT][t]=u:a[E.KEY_GLOBAL_PROJECT]={[t]:u}}static createComponent(t){const r=E.MutationGlobal.getComponentGlobalItem(t);r&&E.MutationGlobal.addComponent(E.toCamelCaseFirst(t.replace(/\//g,"-")),r.item)}static createApp(t){const r=E.MutationGlobal.getComponentGlobalItem(t);r&&(X.isFilled(r==null?void 0:r.translate)?W.Translate.add(r.translate).then(()=>this.createAppItem(t,r)):this.createAppItem(t,r))}static createAppItem(t,r){const i=c.createApp(r.item);r!=null&&r.router&&i.use(this.createRouter(r.router)),r!=null&&r.store&&i.use(this.createStore(r.store)),r!=null&&r.init&&r.init(i),y.forEach(E.MutationGlobal.getComponentList(),(n,o)=>i.component(o,n)),i.mount(`*[data-app="${t}"]`)}static createRouter(t){return Ie.createRouter(t)}static createStore(t){return wt(t)}}class ge{constructor(t,r="date",i=O.Geo.getLocation()){d(this,"item");d(this,"type");d(this,"code");d(this,"date");d(this,"datetime");d(this,"year",c.computed(()=>this.date.value&&this.datetime.getYear()));d(this,"month",c.computed(()=>this.date.value&&this.datetime.getMonth()));d(this,"day",c.computed(()=>this.date.value&&this.datetime.getDay()));d(this,"hour",c.computed(()=>this.date.value&&this.datetime.getHour()));d(this,"minute",c.computed(()=>this.date.value&&this.datetime.getMinute()));d(this,"second",c.computed(()=>this.date.value&&this.datetime.getSecond()));this.item=S(t),this.type=S(r),this.code=S(i),this.date=c.ref(M.toDate(this.item.value)),this.datetime=new m.Datetime(this.date.value,this.type.value,this.code.value),c.watch(this.item,n=>{this.date.value=M.toDate(n)}),c.watch(this.type,n=>this.datetime.setType(n)),c.watch(this.code,n=>this.datetime.setCode(n)),c.watch(this.date,n=>this.datetime.setDate(n)),this.datetime.setWatch(()=>c.triggerRef(this.date))}getItem(){return this.item}getDate(){return this.date}getDatetime(){return this.datetime}getHoursType(){return c.computed(()=>this.date.value&&this.datetime.getHoursType())}getFirstDayCode(){return c.computed(()=>this.date.value&&this.datetime.getFirstDayCode())}getYear(){return this.year}getMonth(){return this.month}getDay(){return this.day}getHour(){return this.hour}getMinute(){return this.minute}getSecond(){return this.second}getMaxDay(){return c.computed(()=>this.date.value&&this.datetime.getMaxDay())}locale(t=this.type.value,r){return c.computed(()=>this.date.value&&this.datetime.locale(t,r))}standard(t=!0){return c.computed(()=>this.date.value&&this.datetime.standard(t))}}class pe extends G.EventItem{constructor(t,r,i=["click"],n,o,s){const a=S(t),u=S(r);super(a.value,i,n,o,s),u.value&&this.setElementControl(u.value),c.watch(a,f=>this.setElement(f)),c.watch(u,f=>this.setElementControl(f))}}class ve{constructor(t=O.Geo.getLocation()){d(this,"code");d(this,"flag");this.code=S(t),this.flag=new pt.GeoFlag(this.code.value),c.watch(this.code,r=>this.flag.setCode(r))}getCode(){return this.code}get(t=this.code.value){return c.computed(()=>this.flag.get(t))}getFlag(t=this.code.value){return c.computed(()=>{var r;return(r=this.flag.get(t))==null?void 0:r.icon})}getList(t){return c.computed(()=>this.flag.getList(t))}getNational(t){return c.computed(()=>this.flag.getNational(t))}}const w=class w{static get(){return this.item}static getCountry(){return this.country}static getLanguage(){return this.language}static getStandard(){return this.standard}static getFirstDay(){return this.firstDay}static set(t){O.Geo.set(t,!0),this.item.value=O.Geo.getItem()}};d(w,"item",c.shallowRef(O.Geo.get())),d(w,"country",c.computed(()=>w.item.value.country)),d(w,"language",c.computed(()=>w.item.value.language)),d(w,"standard",c.computed(()=>w.item.value.standard)),d(w,"firstDay",c.computed(()=>w.item.value.firstDay));let F=w;class me{constructor(t){d(this,"location");d(this,"intl");this.location=S(t),this.intl=c.computed(()=>new M.GeoIntl(this.location.value??F.getLanguage().value))}display(t,r){return c.computed(()=>this.intl.value.display(p.getRef(t),r))}languageName(t,r){return c.computed(()=>this.intl.value.languageName(p.getRef(t),r))}countryName(t,r){return c.computed(()=>this.intl.value.countryName(p.getRef(t),r))}number(t,r){return c.computed(()=>this.intl.value.number(p.getRef(t),r))}decimal(){return c.computed(()=>this.intl.value.decimal())}currency(t,r,i=!1){return c.computed(()=>this.intl.value.currency(p.getRef(t),r,i))}unit(t,r){return c.computed(()=>this.intl.value.unit(p.getRef(t),r))}percent(t,r){return c.computed(()=>this.intl.value.percent(p.getRef(t),r))}percentBy100(t,r){return c.computed(()=>this.intl.value.percentBy100(p.getRef(t),r))}date(t,r,i,n){return c.computed(()=>this.intl.value.date(p.getRef(t),r,i,n))}relative(t,r,i){return c.computed(()=>this.intl.value.relative(p.getRef(t),r,i))}relativeLimit(t,r,i,n,o,s,a){return c.computed(()=>this.intl.value.relativeLimit(p.getRef(t),r,i,n,o,s,a))}month(t,r){return c.computed(()=>this.intl.value.month(p.getRef(t),r))}months(t){return c.computed(()=>this.intl.value.months(t))}weekday(t,r){return c.computed(()=>this.intl.value.weekday(p.getRef(t),r))}weekdays(t){return c.computed(()=>this.intl.value.weekdays(t))}time(t){return c.computed(()=>this.intl.value.time(p.getRef(t)))}}function ye(e,t,r){if(e in ft)return ft[e];const i=new _t(e),n=c.ref(i.get(t,r));return c.watch(n,o=>{i.set(o,r)}),ft[e]=n,n}const ft={};function be(e,t){if(e in ht)return ht[e];const r=c.shallowRef(I.get(e,t));return c.watch(r,i=>I.set(e,i)),I.addWatch(e,i=>{r.value=i}),ht[e]=r,r}const ht={};function _e(){const e=c.shallowRef(k.is());return k.registrationEvent(({detail:t})=>{e.value=t.loading}),e}function Ee(e,t){if(e in dt)return dt[e];const r=new b.DataStorage(e,!0),i=c.shallowRef(r.get(t));return c.watch(i,n=>r.set(n)),dt[e]=i,i}const dt={};function Oe(e,t,r){if(e in gt)return gt[e];const i=new b.DataStorage(e),n=c.shallowRef(i.get(t,r));return c.watch(n,o=>i.set(o)),gt[e]=n,n}const gt={};function Mt(e){const t=c.shallowRef(W.Translate.getListSync(e,!0));return c.watchEffect(async()=>{F.getLanguage()&&(t.value={...await W.Translate.getList(e)})}),t}const we=e=>Mt(e),ar=Object.freeze(Object.defineProperty({__proto__:null,Api:H.Api,ApiMethodItem:H.ApiMethodItem,Cache:bt,CacheItem:M.CacheItem,CacheStatic:Y,Cookie:_t,CookieBlock:Z,DataStorage:b.DataStorage,Datetime:m.Datetime,DatetimeRef:ge,DesignAbstract:ct.DesignAbstract,DesignAsyncAbstract:ct.DesignAsyncAbstract,DesignChanged:ct.DesignChanged,DesignComponents:p.DesignComponents,DesignConstructorAbstract:p.DesignConstructorAbstract,Env:b.Env,EventItem:G.EventItem,EventRef:pe,GEO_FLAG_ICON_NAME:pt.GEO_FLAG_ICON_NAME,Geo:O.Geo,GeoFlag:pt.GeoFlag,GeoFlagRef:ve,GeoIntl:M.GeoIntl,GeoIntlRef:me,GeoPhone:Q,GeoRef:F,Hash:I,Icons:Me.Icons,Loading:k,Mutation:B.Mutation,MutationCollect:E.MutationCollect,MutationData:B.MutationData,MutationDataItem:E.MutationDataItem,MutationGlobal:E.MutationGlobal,MutationGlobalRef:de,MutationObserverGlobal:B.MutationObserverGlobal,MutationObserverItems:B.MutationObserverItems,Translate:W.Translate,anyToString:m.anyToString,arrFill:m.arrFill,copyObject:O.copyObject,createElement:at.createElement,eventStopPropagation:De.eventStopPropagation,executeFunction:q.executeFunction,forEach:y.forEach,frame:V.frame,getAttributes:E.getAttributes,getBind:qt.getBind,getBindRef:Qt,getClassName:p.getClassName,getClipboardData:m.getClipboardData,getColumn:m.getColumn,getElement:It.getElement,getElementId:xt.getElementId,getElementItem:at.getElementItem,getElementOrWindow:G.getElementOrWindow,getExp:m.getExp,getIndexForRender:p.getIndexForRender,getKey:Pt,getLengthOfAllArray:m.getLengthOfAllArray,getMaxLengthAllArray:m.getMaxLengthAllArray,getMinLengthAllArray:Bt,getMouseClient:Ut,getMouseClientX:V.getMouseClientX,getMouseClientY:V.getMouseClientY,getRef:p.getRef,getRequestString:H.getRequestString,inArray:Ne.inArray,intersectKey:Kt,isArray:Rt.isArray,isDifferent:Ht,isDomRuntime:b.isDomRuntime,isFilled:X.isFilled,isFunction:q.isFunction,isInDom:G.isInDom,isIntegerBetween:Wt,isNull:b.isNull,isObject:y.isObject,isObjectNotArray:y.isObjectNotArray,isSelected:O.isSelected,isSelectedByList:Yt,isString:O.isString,isWindow:It.isWindow,random:xt.random,render:p.render,replaceRecursive:m.replaceRecursive,replaceTemplate:Jt,setElementItem:at.setElementItem,splice:zt,strFill:m.strFill,t:we,toArray:y.toArray,toCamelCase:p.toCamelCase,toCamelCaseFirst:E.toCamelCaseFirst,toDate:M.toDate,toKebabCase:E.toKebabCase,toNumber:Rt.toNumber,toRefItem:S,transformation:b.transformation,uniqueArray:m.uniqueArray,useCookieRef:ye,useEnv:b.useEnv,useHashRef:be,useLoadingRef:_e,useSessionRef:Ee,useStorageRef:Oe,useTranslateRef:Mt},Symbol.toStringTag,{value:"Module"}));exports.Cache=bt;exports.CacheStatic=Y;exports.Cookie=_t;exports.CookieBlock=Z;exports.DatetimeRef=ge;exports.EventRef=pe;exports.GeoFlagRef=ve;exports.GeoIntlRef=me;exports.GeoPhone=Q;exports.GeoRef=F;exports.Hash=I;exports.Loading=k;exports.MutationGlobalRef=de;exports.getBindRef=Qt;exports.getKey=Pt;exports.getMinLengthAllArray=Bt;exports.getMouseClient=Ut;exports.intersectKey=Kt;exports.isDifferent=Ht;exports.isIntegerBetween=Wt;exports.isSelectedByList=Yt;exports.replaceTemplate=Jt;exports.splice=zt;exports.t=we;exports.toRefItem=S;exports.ui=ar;exports.useCookieRef=ye;exports.useHashRef=be;exports.useLoadingRef=_e;exports.useSessionRef=Ee;exports.useStorageRef=Oe;exports.useTranslateRef=Mt;exports.vuex=sr;
