"use strict";var b=Object.defineProperty;var g=(o,t,e)=>t in o?b(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var a=(o,t,e)=>(g(o,typeof t!="symbol"?t+"":t,e),e);const s=require("vue"),f=require("./toArray-h-YFi-Q9.cjs"),v=require("./DesignConstructorAbstract-BUcyMiAM.cjs"),h=require("./MutationDataItem-CXP85LNI.cjs");class C{constructor(t,e){a(this,"mainElement",document.body);a(this,"componentName","div");a(this,"componentItem",s.shallowRef());a(this,"binds",s.shallowRef({}));a(this,"slots",s.shallowRef({}));var n;this.props=t,t.item&&(this.mainElement=t.item.getElement(),this.componentName=t.item.getComponentName(),t.item.registration(e,()=>this.update()),this.initComponentItem().then(i=>{this.componentItem.value=i})),(n=t.item)==null||n.setStatus(h.MutationStatus.end),this.update()}update(){var e,n;const t=(e=this.props.item)==null?void 0:e.getSlots();return this.binds.value={...((n=this.props.item)==null?void 0:n.getProps())??{}},this.slots.value=t?{...t}:void 0,this}getComponentGlobalItem(){var t;return(t=h.MutationGlobal.getComponentGlobalItem(this.componentName))==null?void 0:t.item}async initComponentItem(){return new Promise(t=>{var n;const e=this.getComponentGlobalItem();if(e)t(e);else if((n=this.props.item)!=null&&n.isLink()){let i=24;const u=setInterval(()=>{if(i-- >0){const l=this.getComponentGlobalItem();l&&(clearInterval(u),t(l))}else clearInterval(u),t(s.resolveComponent(this.componentName))},64)}else t(s.resolveComponent(this.componentName))})}}class w extends v.DesignConstructorAbstract{constructor(e,n,i){super(e,n,i);a(this,"mutation");this.mutation=new C(n,this.element),this.init()}makeOptions(){return this}initSetup(){return{mainElement:this.mutation.mainElement,componentName:this.mutation.componentName,componentItem:this.mutation.componentItem,binds:this.mutation.binds,slots:this.mutation.slots,renderSlots:s.computed(()=>this.renderSlots())}}initExpose(){return{}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){var n;const e=this.setup();if(e.componentItem.value)return s.h(s.Teleport,{ref:this.element,class:(n=this.classes)==null?void 0:n.value.main,to:e.mainElement},[s.h(e.componentItem.value,e.binds.value,e.renderSlots.value)])}renderSlots(){const e=this.setup(),n={},i=e.slots.value;return i&&f.forEach(i,(u,l)=>{const r=[];let p=!1;u.forEach(m=>{typeof m=="string"?r.push(m):r.push(s.h(m.tag,{...m.attributes}))}),n[l]=m=>{var d,I;if(!p&&m){const c=r==null?void 0:r[0];c&&"UI"in window&&f.isObjectNotArray(c)&&((d=c.props)!=null&&d["data-ui"])&&(window.UI.comp((I=c.props)==null?void 0:I.id,m),p=!0)}return r}}),n}}const E={item:h.MutationDataItem};exports.MutationItemDesign=w;exports.propsMutationItem=E;