"use strict";var E=Object.defineProperty;var I=(e,t,s)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var r=(e,t,s)=>(I(e,typeof t!="symbol"?t+"":t,s),s);const h=require("./forEach-AdslABYj.cjs"),S=require("./getElement-BOMHgffA.cjs"),L=require("./getElementId-IhFFofBL.cjs"),l=require("./isFilled-7Imyp3vm.cjs"),A=require("./Api-Dt0Cen0R.cjs"),w=require("./toArray-C_3YLL9r.cjs"),$=require("./DesignConstructorAbstract-BWdw5G97.cjs"),p=require("./DataStorage-BDCQmA4V.cjs"),b=require("./Translate-CGVHNNfm.cjs");var o=(e=>(e.new="new",e.init="init",e.end="end",e))(o||{});function g(e){return e.toString().trim().replace(/[^\w- ]+/g,"").replace(/ +/g,"-").replace(new RegExp("(?<=[A-Z])([A-Z])","g"),t=>`${t.toLowerCase()}`).replace(/^[A-Z]/,t=>t.toLowerCase()).replace(new RegExp("(?<=[\\w ])[A-Z]","g"),t=>`-${t.toLowerCase()}`).replace(/[A-Z]/g,t=>t.toLowerCase())}const m="d-mutation",y=g(p.useEnv("DESIGNS_MAIN","design")),v=g(p.useEnv("DESIGNS_GLOBAL","ui")),d="__UI_PROJECT";class a{static getKeyUi(){return v}static getKeyInit(){return o.init}static getKeyEnd(){return o.end}static getAttributeUi(){return`data-${this.getKeyUi()}`}static getClassInit(){return`${m}--${this.getKeyInit()}`}static getClassEnd(){return`${m}--${this.getKeyEnd()}`}static find(t=document.body,s=o.new){const i=[];if("querySelector"in t){const n=this.getSelectorByStatus(s);t.querySelector(n)&&t.querySelectorAll(n).forEach(u=>i.push(u))}return i}static closestInit(t){var s,i;return!!((s=t==null?void 0:t.closest)!=null&&s.call(t,this.getSelectorInit())||!((i=t==null?void 0:t.closest)!=null&&i.call(t,"body")))}static getSelectorNew(){return`*[${this.getAttributeUi()}]:not(.${this.getClassInit()}):not(.${this.getClassEnd()})`}static getSelectorInit(){return`*[${this.getAttributeUi()}].${this.getClassInit()}`}static getSelectorEnd(){return`*[${this.getAttributeUi()}].${this.getClassEnd()}`}static getSelectorByStatus(t){switch(t){case o.init:return`${this.getSelectorInit()}, ${this.getSelectorEnd()}`;case o.end:return this.getSelectorEnd();default:return this.getSelectorNew()}}}function f(e){const t={},s=S.getElement(e);if(s)for(const i of s.attributes)t[i.name]=((i==null?void 0:i.value)||(i==null?void 0:i.textContent))??void 0;return t}function C(e){return $.toCamelCase(e).replace(/^([a-z])/,t=>`${t.toUpperCase()}`)}class c{static isFunction(t){return t in this.functions}static isClass(t){return t in this.classes}static isComponent(t){return t in this.components}static getComponentList(){return this.components}static getComponentGlobal(){return d in window?window[d]:{}}static getComponentGlobalItem(t){var s;if(d in window)return((s=window[d])==null?void 0:s[t])??void 0}static getComponentVue(t){if(t in this.components)return this.components[t]}static getComponentItem(t){if(t in this.compItems)return this.compItems[t].item}static addFunction(t,s){this.isFunction(t)||(this.functions[t]=s)}static addClass(t,s){this.isClass(t)||(this.classes[t]=s)}static addComponent(t,s){this.isComponent(t)||(this.components[t]=s)}static addFunctionList(t){h.forEach(t,(s,i)=>{this.addFunction(i,s)})}static addClassList(t){h.forEach(t,(s,i)=>{this.addClass(i,s)})}static addComponentList(t){h.forEach(t,(s,i)=>{this.addComponent(i,s)})}static addTranslate(t){b.Translate.addSync(t)}static registrationComponent(t,s,i){if(this.compItems[t]={item:s,callback:i},t in this.compCaching){const n=this.compCaching[t];return delete this.compCaching[t],n}}static comp(t,s){t in this.compItems?this.compItems[t].callback(s):this.compCaching[t]=s}static removeComponent(t){t in this.compItems&&delete this.compItems[t]}}r(c,"functions",{}),r(c,"classes",{}),r(c,"components",{}),r(c,"compItems",{}),r(c,"compCaching",{});class N{constructor(t){r(this,"id");r(this,"componentName");r(this,"static");r(this,"slots",{});r(this,"props",{});r(this,"callback");var s;this.element=t,this.id=L.getElementId(t),this.componentName=((s=t.dataset)==null?void 0:s[a.getKeyUi()])??"component",this.static=o.new,this.slots=this.initSlots(),this.setStatus(o.init),this.element.classList.add(this.getClassMain())}is(t){return this.element===t}isLink(){return!!this.componentName.match("/")}getId(){return this.id}getComponentName(){if(this.isLink())return this.componentName;const t=C(this.componentName);return c.isComponent(t)?t:C(`${y}-${this.componentName}`)}getDesign(){return g(this.getComponentName()).replace(/-.*?$/,"")}getClassMain(){return`${this.getDesign()}-system`}getElement(){return this.element}getStatus(){return this.static}getProps(){return{...this.getDataset(),...this.props}}getSlots(){return this.slots}setStatus(t){switch(this.removeClasses(),this.static=t,this.static){case o.init:this.element.classList.add(a.getClassInit());break;case o.end:this.element.classList.add(a.getClassEnd());break}return this}registration(t,s){const i=c.registrationComponent(this.getId(),t,n=>{l.isFilled(n)&&this.setProps(n).update()});return i&&this.setProps(i),this.callback=s,this}update(){var t;return(t=this.callback)==null||t.call(this,this.getProps()),this}disconnect(){return c.removeComponent(this.getId()),this}getDataset(){const t={};return h.forEach(this.element.dataset,(s,i)=>{i!==a.getKeyUi()&&(t[i]=p.transformation(s))}),t}setProps(t){return l.isFilled(t)&&h.forEach(t,(s,i)=>{i==="slots"?this.setSlots(s):this.props[i]=s}),this}setSlots(t){return l.isFilled(t)&&h.forEach(t,(s,i)=>{this.slots[i]=this.initChildrenList(w.toArray(s))}),this}initSlots(){const t={},s=[];for(const i of this.element.children){const n=i.getAttribute("data-slot");if(n)t[n]=this.initChildrenList(i.childNodes);else{const u=this.initChildren(i);u&&("default"in t?t.default.push(u):t.default=[u])}s.push(i)}for(const i of s)this.element.removeChild(i);return t}initChildrenList(t){const s=[];for(const i of t){const n=this.initChildren(i);n&&s.push(n)}return s}initChildren(t){var i,n;if(t instanceof HTMLElement)return{tag:t.nodeName,attributes:{...f(t),innerHTML:(t==null?void 0:t.innerHTML)??""}};const s=(n=(i=t==null?void 0:t.textContent)==null?void 0:i.trim)==null?void 0:n.call(i);if(l.isFilled(s))return s;if(A.isString(t)&&l.isFilled(t))return t}removeClasses(){return this.element.classList.remove(a.getClassInit()),this.element.classList.remove(a.getClassEnd()),this}}exports.KEY_GLOBAL_PROJECT=d;exports.MutationCollect=a;exports.MutationDataItem=N;exports.MutationGlobal=c;exports.MutationStatus=o;exports.getAttributes=f;exports.toCamelCaseFirst=C;exports.toKebabCase=g;
