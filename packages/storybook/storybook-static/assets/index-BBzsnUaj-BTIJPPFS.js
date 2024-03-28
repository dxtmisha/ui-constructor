import{t as b,c as J}from"./DesignConstructorAbstract-pm1V7i1G-AwalHq2u.js";import{s as x,z as ut,x as lt}from"./GeoIntl-DH3GBVnO-Ba8p-fOD.js";import{i as ht}from"./getElement-uQ-JTFk--VVvc7s1q.js";import{s as pt,c as I,w as H,v as dt,f as ft}from"./vue.esm-bundler-C0PuLcVh.js";import{p as V,x as mt,E as K,o as q}from"./DataStorage-BS0mwKb9-CnrN-7_f.js";import{F as T,C as gt}from"./GeoFlag-DfvLx1lW-BCKykf8X.js";import{t as M}from"./isFilled-ClO-1E4U-BUdjZhTW.js";var vt=Object.defineProperty,_t=(e,t,s)=>t in e?vt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,C=(e,t,s)=>(_t(e,typeof t!="symbol"?t+"":t,s),s);const y=class z{static async get(t){var s;const n=this.getName(t);return n in this.data?this.data[n]:(T.isLocalhost()||await this.add(t),((s=this.data)==null?void 0:s[n])??t)}static getSync(t,s=!1){const n=this.getName(t);return n in this.data?this.data[n]:s?" ":t}static getList(t){return new Promise(s=>{const n={};let o=0;for(const i of t)this.get(i).then(a=>{n[i]=a,++o>=t.length&&s(n)})})}static getListSync(t,s=!1){const n={};for(const o of t)n[o]=this.getSync(o,s);return n}static add(t){return new Promise(s=>{this.getNamesNone(t).length>0?(this.cache.push(...this.getNamesNone(t)),this.resolveList.push(s),this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(()=>{this.timeout=void 0,this.make().then(()=>{this.resolveList.forEach(n=>n()),this.resolveList=[]})},160)):s()})}static addSync(t){b(t,(s,n)=>{ut(s)&&M(s)&&(this.data[this.getName(n)]=s)})}static async addNormalOrSync(t){if(M(t))if(T.isLocalhost())this.addSync(t);else{const s=Object.keys(t);s.length>0&&await this.add(s)}}static setUrl(t){return this.url=t,z}static getName(t){return`${x.getLocation()}-${t}`}static getNamesNone(t){const s=[];return J(t).forEach(n=>{n!=="__TRANSLATE_START__"&&n!=="__TRANSLATE_END__"&&!(this.getName(n)in this.data)&&s.push(n)}),s}static async getResponse(){const t=await T.get({api:!1,path:this.url,request:{list:this.cache},global:!0});return(t==null?void 0:t.data)??{}}static async make(){const t=await this.getResponse();this.cache.forEach(s=>{this.data[this.getName(s)]=(t==null?void 0:t[s])??""}),this.cache=[]}};C(y,"url",V("apiTranslate")),C(y,"data",{}),C(y,"cache",[]),C(y,"resolveList",[]),C(y,"timeout");let yt=y;var bt=Object.defineProperty,wt=(e,t,s)=>t in e?bt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,k=(e,t,s)=>(wt(e,typeof t!="symbol"?t+"":t,s),s);function Y(e){return e.toString().trim().replace(/[^\w- ]+/g,"").replace(/ +/g,"-").replace(new RegExp("(?<=[A-Z])([A-Z])","g"),t=>`${t.toLowerCase()}`).replace(/^[A-Z]/,t=>t.toLowerCase()).replace(new RegExp("(?<=[\\w ])[A-Z]","g"),t=>`-${t.toLowerCase()}`).replace(/[A-Z]/g,t=>t.toLowerCase())}Y(V("DESIGNS_MAIN","design"));Y(V("DESIGNS_GLOBAL","ui"));const N="__UI_PROJECT";let E,Ct=class{static get(t){return E&&(E==null?void 0:E[t])}static add(t){E===void 0&&(E={...t})}};class L{static isFunction(t){return t in this.functions}static isClass(t){return t in this.classes}static isComponent(t){return t in this.components}static getComponentList(){return this.components}static getComponentGlobal(){return N in window?window[N]:{}}static getComponentGlobalItem(t){var s;if(N in window)return((s=window[N])==null?void 0:s[t])??void 0}static getComponentVue(t){if(t in this.components)return this.components[t]}static getComponentItem(t){if(t in this.compItems)return this.compItems[t].item}static addFunction(t,s){this.isFunction(t)||(this.functions[t]=s)}static addClass(t,s){this.isClass(t)||(this.classes[t]=s)}static addComponent(t,s){this.isComponent(t)||(this.components[t]=s)}static addFunctionList(t){b(t,(s,n)=>{this.addFunction(n,s)})}static addClassList(t){b(t,(s,n)=>{this.addClass(n,s)})}static addComponentList(t){b(t,(s,n)=>{this.addComponent(n,s)})}static addGlobal(t){Ct.add(t)}static addResponse(t){T.addResponse(t)}static addTranslate(t){yt.addSync(t)}static registrationComponent(t,s,n){if(this.compItems[t]={item:s,callback:n},t in this.compCaching){const o=this.compCaching[t];return delete this.compCaching[t],o}}static comp(t,s){t in this.compItems?this.compItems[t].callback(s):this.compCaching[t]=s}static removeComponent(t){t in this.compItems&&delete this.compItems[t]}}k(L,"functions",{}),k(L,"classes",{}),k(L,"components",{}),k(L,"compItems",{}),k(L,"compCaching",{});var kt=Object.defineProperty,Et=(e,t,s)=>t in e?kt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,d=(e,t,s)=>(Et(e,typeof t!="symbol"?t+"":t,s),s);class Lt{constructor(){d(this,"cache",{})}get(t,s,n){return this.getCacheItem(t,s).getCache(n??[])}async getAsync(t,s,n){return await this.getCacheItem(t,s).getCacheAsync(n??[])}getCacheItem(t,s){return t in this.cache||(this.cache[t]=new lt(s)),this.cache[t]}}const Z=class{static get(t,s,n){return this.cache.get(t,s,n)}};d(Z,"cache"),Z.cache=new Lt;const Ot="cookie-block";class St{static get(){return this.storage.get()??!1}static set(t){this.storage.set(t)}}d(St,"storage",new mt(Ot));(()=>{if(K())for(const e of document.cookie.split(";")){const[t,s]=e.trim().split("=");t&&M(s)&&q(s)}})();const j=class{static get(t){return this.list.find(s=>t===s.value)}static getByPhone(t){let s=this.map,n,o="";return this.toNumber(t).forEach(i=>{o===""&&i in s?(n=s[i],s=s[i].next):o+=i}),{item:n,phone:o}}static getList(){return this.list}static getMap(){return this.map}static toMask(t,s){if(M(t)&&Array.isArray(s)&&s.length>0){const n=this.removeZero(t),o=n.length;for(const i of s)if(this.getUnnecessaryLength(i)===o)return this.toStandard(n,i)}}static removeZero(t){return t.match(/^0/)?t.replace(/^0/,""):t.match(/^89/)?t.replace(/^8/,""):t}static getUnnecessaryLength(t){return t.replace(/[^*]+/ig,"").length}static makeList(){const t=b(x.getList(),s=>{if(s!=null&&s.phoneMask)return{phone:(s==null?void 0:s.phoneCode)&&parseInt(s.phoneCode)||void 0,mask:J(s.phoneMask),value:s.country}});this.list=t.sort((s,n)=>s.phone-n.phone)}static makeMap(){this.list.forEach(t=>{t.mask.forEach(s=>{let n=this.map,o;this.toNumber(s).forEach(i=>{i in n||(n[i]={items:[],info:void 0,value:void 0,mask:[],maskFull:[],next:{}}),o=n[i],n=n[i].next}),o&&(o.value===void 0&&(o.info=t,o.value=t.value),o.mask.push(s),o.maskFull.push(s.replace(/\d/ig,"*")),o.items.push(t))})})}static toNumber(t){return t.replace(/\D+/ig,"").split("")}static toStandard(t,s){let n=0;return s.replace(/\*/ig,()=>t[n++])}};d(j,"list",[]),d(j,"map",{}),j.makeList(),j.makeMap();const O=class{static get(t,s){return!(t in this.hash)&&s&&this.set(t,s),this.hash[t]}static set(t,s){var n;const o=ht(s);o!==((n=this.hash)==null?void 0:n[t])&&(this.hash[t]=o,this.update())}static addWatch(t,s){t in this.watch?this.watch[t].push(s):this.watch={[t]:[s]}}static getLocation(){const t={};return location.hash.replace(/([\w-]+)[:=]([^;]+)/ig,(...s)=>(t[s[1]]=q(s[2]),"")),t}static update(){this.block=!0,history.replaceState(null,"",`#${gt(this.hash,"=",";")}`),requestAnimationFrame(()=>{this.block=!1})}static reload(){if(!this.block){const t=this.getLocation();this.makeWatch(t),this.hash=t}}static makeWatch(t){b(this.watch,(s,n)=>{var o;((o=this.hash)==null?void 0:o[n])!==(t==null?void 0:t[n])&&s.forEach(i=>i(t[n]))})}};d(O,"hash",{}),d(O,"watch",{}),d(O,"block",!1),K()&&(O.reload(),addEventListener("hashchange",()=>O.reload()));function It(){return X().__VUE_DEVTOOLS_GLOBAL_HOOK__}function X(){return typeof navigator<"u"&&typeof window<"u"?window:typeof globalThis<"u"?globalThis:{}}const xt=typeof Proxy=="function",Nt="devtools-plugin:setup",jt="plugin:settings:set";let S,$;function Tt(){var e;return S!==void 0||(typeof window<"u"&&window.performance?(S=!0,$=window.performance):typeof globalThis<"u"&&!((e=globalThis.perf_hooks)===null||e===void 0)&&e.performance?(S=!0,$=globalThis.perf_hooks.performance):S=!1),S}function Mt(){return Tt()?$.now():Date.now()}class At{constructor(t,s){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=s;const n={};if(t.settings)for(const a in t.settings){const r=t.settings[a];n[a]=r.defaultValue}const o=`__vue-devtools-plugin-settings__${t.id}`;let i=Object.assign({},n);try{const a=localStorage.getItem(o),r=JSON.parse(a);Object.assign(i,r)}catch{}this.fallbacks={getSettings(){return i},setSettings(a){try{localStorage.setItem(o,JSON.stringify(a))}catch{}i=a},now(){return Mt()}},s&&s.on(jt,(a,r)=>{a===this.plugin.id&&this.fallbacks.setSettings(r)}),this.proxiedOn=new Proxy({},{get:(a,r)=>this.target?this.target.on[r]:(...l)=>{this.onQueue.push({method:r,args:l})}}),this.proxiedTarget=new Proxy({},{get:(a,r)=>this.target?this.target[r]:r==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(r)?(...l)=>(this.targetQueue.push({method:r,args:l,resolve:()=>{}}),this.fallbacks[r](...l)):(...l)=>new Promise(h=>{this.targetQueue.push({method:r,args:l,resolve:h})})})}async setRealTarget(t){this.target=t;for(const s of this.onQueue)this.target.on[s.method](...s.args);for(const s of this.targetQueue)s.resolve(await this.target[s.method](...s.args))}}function Pt(e,t){const s=e,n=X(),o=It(),i=xt&&s.enableEarlyProxy;if(o&&(n.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))o.emit(Nt,e,t);else{const a=i?new At(s,o):null;(n.__VUE_DEVTOOLS_PLUGINS__=n.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:s,setupFn:t,proxy:a}),a&&t(a.proxiedTarget)}}/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */var Gt="store";function w(e,t){Object.keys(e).forEach(function(s){return t(e[s],s)})}function Dt(e){return e!==null&&typeof e=="object"}function $t(e){return e&&typeof e.then=="function"}function Rt(e,t){return function(){return e(t)}}function tt(e,t,s){return t.indexOf(e)<0&&(s&&s.prepend?t.unshift(e):t.push(e)),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function et(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var s=e.state;P(e,s,[],e._modules.root,!0),F(e,s,t)}function F(e,t,s){var n=e._state,o=e._scope;e.getters={},e._makeLocalGettersCache=Object.create(null);var i=e._wrappedGetters,a={},r={},l=dt(!0);l.run(function(){w(i,function(h,c){a[c]=Rt(h,e),r[c]=I(function(){return a[c]()}),Object.defineProperty(e.getters,c,{get:function(){return r[c].value},enumerable:!0})})}),e._state=ft({data:t}),e._scope=l,e.strict&&Zt(e),n&&s&&e._withCommit(function(){n.data=null}),o&&o.stop()}function P(e,t,s,n,o){var i=!s.length,a=e._modules.getNamespace(s);if(n.namespaced&&(e._modulesNamespaceMap[a],e._modulesNamespaceMap[a]=n),!i&&!o){var r=U(t,s.slice(0,-1)),l=s[s.length-1];e._withCommit(function(){r[l]=n.state})}var h=n.context=Vt(e,a,s);n.forEachMutation(function(c,u){var p=a+u;Ft(e,p,c,h)}),n.forEachAction(function(c,u){var p=c.root?u:a+u,G=c.handler||c;Ut(e,p,G,h)}),n.forEachGetter(function(c,u){var p=a+u;Qt(e,p,c,h)}),n.forEachChild(function(c,u){P(e,t,s.concat(u),c,o)})}function Vt(e,t,s){var n=t==="",o={dispatch:n?e.dispatch:function(i,a,r){var l=A(i,a,r),h=l.payload,c=l.options,u=l.type;return(!c||!c.root)&&(u=t+u),e.dispatch(u,h)},commit:n?e.commit:function(i,a,r){var l=A(i,a,r),h=l.payload,c=l.options,u=l.type;(!c||!c.root)&&(u=t+u),e.commit(u,h,c)}};return Object.defineProperties(o,{getters:{get:n?function(){return e.getters}:function(){return st(e,t)}},state:{get:function(){return U(e.state,s)}}}),o}function st(e,t){if(!e._makeLocalGettersCache[t]){var s={},n=t.length;Object.keys(e.getters).forEach(function(o){if(o.slice(0,n)===t){var i=o.slice(n);Object.defineProperty(s,i,{get:function(){return e.getters[o]},enumerable:!0})}}),e._makeLocalGettersCache[t]=s}return e._makeLocalGettersCache[t]}function Ft(e,t,s,n){var o=e._mutations[t]||(e._mutations[t]=[]);o.push(function(i){s.call(e,n.state,i)})}function Ut(e,t,s,n){var o=e._actions[t]||(e._actions[t]=[]);o.push(function(i){var a=s.call(e,{dispatch:n.dispatch,commit:n.commit,getters:n.getters,state:n.state,rootGetters:e.getters,rootState:e.state},i);return $t(a)||(a=Promise.resolve(a)),e._devtoolHook?a.catch(function(r){throw e._devtoolHook.emit("vuex:error",r),r}):a})}function Qt(e,t,s,n){e._wrappedGetters[t]||(e._wrappedGetters[t]=function(o){return s(n.state,n.getters,o.state,o.getters)})}function Zt(e){H(function(){return e._state.data},function(){},{deep:!0,flush:"sync"})}function U(e,t){return t.reduce(function(s,n){return s[n]},e)}function A(e,t,s){return Dt(e)&&e.type&&(s=t,t=e,e=e.type),{type:e,payload:t,options:s}}var Bt="vuex bindings",B="vuex:mutations",D="vuex:actions",_="vuex",Wt=0;function Jt(e,t){Pt({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[Bt]},function(s){s.addTimelineLayer({id:B,label:"Vuex Mutations",color:W}),s.addTimelineLayer({id:D,label:"Vuex Actions",color:W}),s.addInspector({id:_,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),s.on.getInspectorTree(function(n){if(n.app===e&&n.inspectorId===_)if(n.filter){var o=[];at(o,t._modules.root,n.filter,""),n.rootNodes=o}else n.rootNodes=[it(t._modules.root,"")]}),s.on.getInspectorState(function(n){if(n.app===e&&n.inspectorId===_){var o=n.nodeId;st(t,o),n.state=qt(Yt(t._modules,o),o==="root"?t.getters:t._makeLocalGettersCache,o)}}),s.on.editInspectorState(function(n){if(n.app===e&&n.inspectorId===_){var o=n.nodeId,i=n.path;o!=="root"&&(i=o.split("/").filter(Boolean).concat(i)),t._withCommit(function(){n.set(t._state.data,i,n.state.value)})}}),t.subscribe(function(n,o){var i={};n.payload&&(i.payload=n.payload),i.state=o,s.notifyComponentUpdate(),s.sendInspectorTree(_),s.sendInspectorState(_),s.addTimelineEvent({layerId:B,event:{time:Date.now(),title:n.type,data:i}})}),t.subscribeAction({before:function(n,o){var i={};n.payload&&(i.payload=n.payload),n._id=Wt++,n._time=Date.now(),i.state=o,s.addTimelineEvent({layerId:D,event:{time:n._time,title:n.type,groupId:n._id,subtitle:"start",data:i}})},after:function(n,o){var i={},a=Date.now()-n._time;i.duration={_custom:{type:"duration",display:a+"ms",tooltip:"Action duration",value:a}},n.payload&&(i.payload=n.payload),i.state=o,s.addTimelineEvent({layerId:D,event:{time:Date.now(),title:n.type,groupId:n._id,subtitle:"end",data:i}})}})})}var W=8702998,Ht=6710886,Kt=16777215,nt={label:"namespaced",textColor:Kt,backgroundColor:Ht};function ot(e){return e&&e!=="root"?e.split("/").slice(-2,-1)[0]:"Root"}function it(e,t){return{id:t||"root",label:ot(t),tags:e.namespaced?[nt]:[],children:Object.keys(e._children).map(function(s){return it(e._children[s],t+s+"/")})}}function at(e,t,s,n){n.includes(s)&&e.push({id:n||"root",label:n.endsWith("/")?n.slice(0,n.length-1):n||"Root",tags:t.namespaced?[nt]:[]}),Object.keys(t._children).forEach(function(o){at(e,t._children[o],s,n+o+"/")})}function qt(e,t,s){t=s==="root"?t:t[s];var n=Object.keys(t),o={state:Object.keys(e.state).map(function(a){return{key:a,editable:!0,value:e.state[a]}})};if(n.length){var i=zt(t);o.getters=Object.keys(i).map(function(a){return{key:a.endsWith("/")?ot(a):a,editable:!1,value:R(function(){return i[a]})}})}return o}function zt(e){var t={};return Object.keys(e).forEach(function(s){var n=s.split("/");if(n.length>1){var o=t,i=n.pop();n.forEach(function(a){o[a]||(o[a]={_custom:{value:{},display:a,tooltip:"Module",abstract:!0}}),o=o[a]._custom.value}),o[i]=R(function(){return e[s]})}else t[s]=R(function(){return e[s]})}),t}function Yt(e,t){var s=t.split("/").filter(function(n){return n});return s.reduce(function(n,o,i){var a=n[o];if(!a)throw new Error('Missing module "'+o+'" for path "'+t+'".');return i===s.length-1?a:a._children},t==="root"?e:e.root._children)}function R(e){try{return e()}catch(t){return t}}var m=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var s=e.state;this.state=(typeof s=="function"?s():s)||{}},rt={namespaced:{configurable:!0}};rt.namespaced.get=function(){return!!this._rawModule.namespaced};m.prototype.addChild=function(e,t){this._children[e]=t};m.prototype.removeChild=function(e){delete this._children[e]};m.prototype.getChild=function(e){return this._children[e]};m.prototype.hasChild=function(e){return e in this._children};m.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};m.prototype.forEachChild=function(e){w(this._children,e)};m.prototype.forEachGetter=function(e){this._rawModule.getters&&w(this._rawModule.getters,e)};m.prototype.forEachAction=function(e){this._rawModule.actions&&w(this._rawModule.actions,e)};m.prototype.forEachMutation=function(e){this._rawModule.mutations&&w(this._rawModule.mutations,e)};Object.defineProperties(m.prototype,rt);var v=function(e){this.register([],e,!1)};v.prototype.get=function(e){return e.reduce(function(t,s){return t.getChild(s)},this.root)};v.prototype.getNamespace=function(e){var t=this.root;return e.reduce(function(s,n){return t=t.getChild(n),s+(t.namespaced?n+"/":"")},"")};v.prototype.update=function(e){ct([],this.root,e)};v.prototype.register=function(e,t,s){var n=this;s===void 0&&(s=!0);var o=new m(t,s);if(e.length===0)this.root=o;else{var i=this.get(e.slice(0,-1));i.addChild(e[e.length-1],o)}t.modules&&w(t.modules,function(a,r){n.register(e.concat(r),a,s)})};v.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),s=e[e.length-1],n=t.getChild(s);n&&n.runtime&&t.removeChild(s)};v.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),s=e[e.length-1];return t?t.hasChild(s):!1};function ct(e,t,s){if(t.update(s),s.modules)for(var n in s.modules){if(!t.getChild(n))return;ct(e.concat(n),t.getChild(n),s.modules[n])}}var f=function(t){var s=this;t===void 0&&(t={});var n=t.plugins;n===void 0&&(n=[]);var o=t.strict;o===void 0&&(o=!1);var i=t.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new v(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=i;var a=this,r=this,l=r.dispatch,h=r.commit;this.dispatch=function(u,p){return l.call(a,u,p)},this.commit=function(u,p,G){return h.call(a,u,p,G)},this.strict=o;var c=this._modules.root.state;P(this,c,[],this._modules.root),F(this,c),n.forEach(function(u){return u(s)})},Q={state:{configurable:!0}};f.prototype.install=function(e,t){e.provide(t||Gt,this),e.config.globalProperties.$store=this;var s=this._devtools!==void 0?this._devtools:!1;s&&Jt(e,this)};Q.state.get=function(){return this._state.data};Q.state.set=function(e){};f.prototype.commit=function(e,t,s){var n=this,o=A(e,t,s),i=o.type,a=o.payload,r={type:i,payload:a},l=this._mutations[i];l&&(this._withCommit(function(){l.forEach(function(h){h(a)})}),this._subscribers.slice().forEach(function(h){return h(r,n.state)}))};f.prototype.dispatch=function(e,t){var s=this,n=A(e,t),o=n.type,i=n.payload,a={type:o,payload:i},r=this._actions[o];if(r){try{this._actionSubscribers.slice().filter(function(h){return h.before}).forEach(function(h){return h.before(a,s.state)})}catch{}var l=r.length>1?Promise.all(r.map(function(h){return h(i)})):r[0](i);return new Promise(function(h,c){l.then(function(u){try{s._actionSubscribers.filter(function(p){return p.after}).forEach(function(p){return p.after(a,s.state)})}catch{}h(u)},function(u){try{s._actionSubscribers.filter(function(p){return p.error}).forEach(function(p){return p.error(a,s.state,u)})}catch{}c(u)})})}};f.prototype.subscribe=function(e,t){return tt(e,this._subscribers,t)};f.prototype.subscribeAction=function(e,t){var s=typeof e=="function"?{before:e}:e;return tt(s,this._actionSubscribers,t)};f.prototype.watch=function(e,t,s){var n=this;return H(function(){return e(n.state,n.getters)},t,Object.assign({},s))};f.prototype.replaceState=function(e){var t=this;this._withCommit(function(){t._state.data=e})};f.prototype.registerModule=function(e,t,s){s===void 0&&(s={}),typeof e=="string"&&(e=[e]),this._modules.register(e,t),P(this,this.state,e,this._modules.get(e),s.preserveState),F(this,this.state)};f.prototype.unregisterModule=function(e){var t=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var s=U(t.state,e.slice(0,-1));delete s[e[e.length-1]]}),et(this)};f.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};f.prototype.hotUpdate=function(e){this._modules.update(e),et(this,!0)};f.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t};Object.defineProperties(f.prototype,Q);const g=class{static get(){return this.item}static getCountry(){return this.country}static getLanguage(){return this.language}static getStandard(){return this.standard}static getFirstDay(){return this.firstDay}static set(t){x.set(t,!0),this.item.value=x.getItem()}};d(g,"item",pt(x.get())),d(g,"country",I(()=>g.item.value.country)),d(g,"language",I(()=>g.item.value.language)),d(g,"standard",I(()=>g.item.value.standard)),d(g,"firstDay",I(()=>g.item.value.firstDay));let he=g;export{he as $};