"use strict";var I=Object.defineProperty;var M=(i,e,t)=>e in i?I(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var r=(i,e,t)=>(M(i,typeof e!="symbol"?e+"":e,t),t);Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const a=require("vue"),C=require("./DesignConstructorAbstract-BUcyMiAM.cjs"),v=require("./isArray-Bin_5of_.cjs"),b=require("./isFilled-BySHTEb1.cjs"),f=require("./toArray-h-YFi-Q9.cjs"),y=require("./getBind-JXbQO-KO.cjs"),k=require("./useInputCheck-BtP25CMG.cjs"),p=require("./useEnabled-CmQoH0i5.cjs"),l=require("./index-5Up5lv1l.cjs"),B=require("./M3Image.umd.cjs"),q=require("./M3Ripple.umd.cjs"),E=require("./M3Progress.umd.cjs"),S=require("./props-BVap6_Zf.cjs");class w{constructor(e,t,s,n){this.props=e,this.element=t,this.type=s,this.pattern=n}get(){const e=this.element.value;if(e)return"input"in e?e.input:e}getName(){var e;return((e=this.get())==null?void 0:e.name)??""}getPattern(){var e,t,s,n,h,o,c,u,d,g;return{name:(e=this.props)==null?void 0:e.name,type:(t=this.type)==null?void 0:t.get(),required:(s=this.props)==null?void 0:s.required,pattern:(n=this.pattern)==null?void 0:n.get(),step:(h=this.props)==null?void 0:h.step,min:(o=this.props)==null?void 0:o.min,max:(c=this.props)==null?void 0:c.max,minlength:(u=this.props)==null?void 0:u.minlength,maxlength:(d=this.props)==null?void 0:d.maxlength,...((g=this.props)==null?void 0:g.input)??{}}}findByName(e){var n;if(e instanceof Element)return e;const t=(n=this.get())==null?void 0:n.form;if(t){const h=t.querySelector(`[name="${e}"]`);if(h)return h}const s=document.querySelector(e);if(s)return s}clear(){var t;const e=this.element.value;return e&&"clear"in e&&((t=e.clear)==null||t.call(e)),this}}class F extends w{constructor(e,t){super(e,t)}getPattern(){var e,t,s;return{name:(e=this.props)==null?void 0:e.name,type:"checkbox",required:(t=this.props)==null?void 0:t.required,...((s=this.props)==null?void 0:s.input)??{}}}}class R{constructor(){r(this,"change",!1)}get(){return this.change}set(e){return this.change=e,this}toChange(){return this.set(!0)}reset(){return this.set(!1)}}class V{constructor(e,t,s,n){r(this,"value");r(this,"valueIs",!1);this.props=e,this.element=t,this.change=s,this.callback=n,this.value=this.getOriginal()}is(){var e;return this.valueIs||this.getBoolean()||!!((e=this.props)!=null&&e.placeholder)}get(){return this.value}getString(){var t;const e=this.get();return v.isArray(e)?e.join(", "):f.isObject(e)?JSON.stringify(e):e===!0?"1":e===!1?"0":b.isFilled(e)?((t=e==null?void 0:e.toString)==null?void 0:t.call(e))??"":""}getNumber(){return this.getBoolean()?parseFloat(this.getString()):0}getBoolean(){return b.isFilled(this.get())}getOriginal(){var e,t;return((e=this.props)==null?void 0:e.value)||((t=this.props)==null?void 0:t.modelValue)}getLength(){const e=this.get();return v.isArray(e)?e.length:f.isObject(e)?Object.keys(e).length:this.getString().length??0}set(e){return this.value!==e&&(this.value=e,this.change.set(!0),this.callback()),this}setByEvent(e){switch(typeof e){case"object":e&&("value"in e?this.set(e.value):"target"in e&&this.setByTarget(e.target),"valueIs"in e&&(this.valueIs=e.valueIs));break;default:this.set(e);break}return this}setByTarget(e){const t=this.isCheckbox(e)?e.checked:e.value;return this.set(t)}setByChecked(e){const t=e.target;return this.set(t.checked)}setByRadio(e){const t=e.target,s=t.checked?t.value:"";return this.set(s)}update(){return this.set(this.getOriginal())}clear(){return this.set(""),this.element.clear(),this.valueIs=!1,this}isCheckbox(e){return e.type==="checkbox"}}class O{constructor(e,t){this.props=e,this.value=t}get(){var t;const e=this.getIcon();return y.getBind(((t=this.props)==null?void 0:t.icon)??e,{value:e})}getIcon(){var e,t,s;if(this.value.getBoolean())return(e=this.props)!=null&&e.indeterminate?(t=this.props)==null?void 0:t.iconIndeterminate:(s=this.props)==null?void 0:s.iconCheckbox}}class _{constructor(e){this.props=e}get(e){var s;const t=(s=this.props)==null?void 0:s.validationCode;if(t&&!e.valid){if(typeof t=="string")return t;{const n=this.getIndex(e);if(n&&n in t)return t[n]}}}getIndex(e){for(const t in e)if(t!=="valid"&&e[t])return t}}class P{constructor(e,t,s,n,h,o,c){r(this,"item");r(this,"validation");r(this,"cache");r(this,"cacheValue");this.props=e,this.element=t,this.change=s,this.value=n,this.code=h,this.match=o,this.callback=c,this.item=k.useInputCheck(this.element.getPattern())}isError(){var e;return!((e=this.get())!=null&&e.status)}checkValidity(){var t;const e=!this.isError();return(t=this.callback)==null||t.call(this),e}get(){var e;return(this.cacheValue!==this.value.get()||this.cache===void 0)&&(this.cacheValue=this.value.get(),this.cache=this.checkGlobal()??this.checkItem()??((e=this.match)==null?void 0:e.check())),!this.change.get()||!this.cache?{value:void 0}:this.cache}getMessage(){var e;return((e=this.get())==null?void 0:e.validationMessage)??""}set(e){return"status"in e&&"validationMessage"in e&&"value"in e?this.validation={status:e.status,required:e==null?void 0:e.required,input:e==null?void 0:e.input,validationMessage:e.validationMessage,validity:e==null?void 0:e.validity,pattern:e==null?void 0:e.pattern,value:e.value}:this.validation=void 0,this}update(){return this.item=k.useInputCheck(this.element.getPattern()),this}checkGlobal(){var e;return(e=this.props)!=null&&e.validationMessage?{status:!1,validationMessage:this.props.validationMessage,value:this.value.get()}:this.validation??void 0}checkItem(){const e=this.item.check(this.value.get());if(!(e!=null&&e.status))return e}}class A{constructor(e,t,s,n,h){this.props=e,this.change=t,this.value=s,this.validation=n,this.callbackEmit=h}onInput(e){this.isEnabled()&&(this.validation.set(e),this.value.setByEvent(e),this.on(e))}onChange(e){this.isEnabled()&&this.on(e,"change")}onSelect(e){this.isEnabled()&&(this.value.setByEvent(e),this.on(e).onChange(e))}onChecked(e){this.isEnabled()&&(this.value.setByChecked(e),this.on(e).onChange(e))}onRadio(e){this.isEnabled()&&(this.value.setByRadio(e),this.on(e).onChange(e))}onClear(e){this.isEnabled()&&(this.value.clear(),this.on(e).onChange(e))}on(e,t="input"){if(this.callbackEmit(t,e,{...this.getValidation(t),...this.getData()}),t==="input"){const s=this.value.get();this.callbackEmit("update:value",s,{value:s}),this.callbackEmit("update:modelValue",s,{value:s})}return this}isValue(e){return!!(e&&["input","change"].indexOf(e)>=0)}isEnabled(){return this.props.loading!==!0&&this.props.readonly!==!0&&this.props.disabled!==!0}getData(){return{value:this.value.get(),detail:this.props.detail}}getValidation(e){return this.isValue(e)?this.validation.get():{}}}class D{constructor(e,t,s,n){r(this,"element");r(this,"change");r(this,"value");r(this,"icon");r(this,"code");r(this,"validation");r(this,"event");this.element=new F(e,t),this.change=new R,this.value=new V(e,this.element,this.change,s),this.icon=new O(e,this.value),this.code=new _(e),this.validation=new P(e,this.element,this.change,this.value,this.code,void 0,s),this.event=new A(e,this.change,this.value,this.validation,n)}update(){return this.value.update(),this}}class j{constructor(e,t,s){r(this,"checkbox");r(this,"value",a.shallowRef(!1));r(this,"iconBind",a.shallowRef({}));r(this,"checkValidity");r(this,"validationMessage",a.shallowRef(""));r(this,"onInput",e=>this.checkbox.event.onChecked(e));this.checkbox=new D(e,t,()=>{this.update()},s),this.checkValidity=()=>this.checkbox.validation.checkValidity(),a.watchEffect(()=>this.checkbox.value.update()),a.watchEffect(()=>{this.update()})}update(){return this.value.value=this.checkbox.value.getBoolean(),this.iconBind.value=this.checkbox.icon.get(),this.validationMessage.value=this.checkbox.validation.getMessage(),this}}const L={disabled:l.propsFieldMessage.disabled,helperMessage:l.propsFieldMessage.helperMessage,validationMessage:l.propsFieldMessage.validationMessage},T=function(i,e,t){const s=a.computed(()=>({disabled:i==null?void 0:i.disabled,counter:i==null?void 0:i.counter,maxlength:i==null?void 0:i.maxlength,helperMessage:i==null?void 0:i.helperMessage,validationMessage:b.isFilled(i==null?void 0:i.validationMessage)?i.validationMessage:C.getRef(t)}));return{messageBind:s,renderFieldMessage(){const n=[];return e&&e.renderAdd(n,"message",s.value),n}}};class H extends C.DesignConstructorAbstract{constructor(t,s,n){super(t,s,n);r(this,"checkbox");r(this,"renderInput",()=>{const t=this.setup();return a.h("input",{class:t.classes.value.input,name:this.props.name,type:"checkbox",checked:t.value.value,readonly:this.props.readonly,disabled:t.isDisabled.value,on:this.props.on,onInput:t.onInput})});r(this,"renderInputHidden",()=>a.h("input",{name:this.props.name,type:"hidden",value:"0"}));r(this,"renderChecked",()=>{const t=this.setup(),s=[t.renderProgress(),a.h("span",{class:t.classes.value.itemIcon},[this.components.renderOne("icon",t.iconBind.value)])];return this.components.renderAdd(s,"ripple",{disabled:t.isDisabled.value}),a.h("span",{class:t.classes.value.item},s)});r(this,"renderInfo",()=>{const t=this.setup(),s=[...t.renderLabel(),...t.renderFieldMessage()];return a.h("span",{class:t.classes.value.info},s)});this.checkbox=new j(s,this.element,(h,o,c)=>{var u;(u=this.emits)==null||u.call(this,h,o,c)}),this.init()}makeOptions(){return this}initSetup(){return{value:this.checkbox.value,iconBind:this.checkbox.iconBind,checkValidity:this.checkbox.checkValidity,validationMessage:this.checkbox.validationMessage,renderInput:this.renderInput,renderInputHidden:this.renderInputHidden,renderChecked:this.renderChecked,renderInfo:this.renderInfo,onInput:this.checkbox.onInput,...p.useLabel(this.props,this.slots,this.getSubClass(["info","label"])),...p.useEnabled(this.props),...p.useProgressRef(this.props,this.components,this.getSubClass("loading"),{circular:!0,inverse:!0,dense:!0}),...T(this.props,this.components,this.checkbox.validationMessage)}}initExpose(){const t=this.setup();return{value:t.value,checkValidity:t.checkValidity,validationMessage:t.validationMessage}}initClasses(){return{main:{},input:this.getSubClass("input"),item:this.getSubClass("item"),itemIcon:this.getSubClass("item__icon"),info:this.getSubClass("info"),infoLabel:this.getSubClass("info__label"),loading:this.getSubClass("loading")}}initStyles(){return{}}initRender(){const t=this.setup(),s=[t.renderInputHidden(),t.renderInput(),t.renderChecked()];return t.isLabel.value&&s.push(t.renderInfo()),a.h("label",{...this.getAttrs(),ref:this.element,class:t.classes.value.main},s)}}const N={},m={...S.propsBasicInput,...L,value:Boolean,modelValue:Boolean,icon:[String,Object],indeterminate:Boolean,iconCheckbox:String,iconIndeterminate:String,required:Boolean},x={...N,iconCheckbox:"check",iconIndeterminate:"horizontal_rule"},G={...m,iconCheckbox:{type:m.iconCheckbox,default:x.iconCheckbox},iconIndeterminate:{type:m.iconIndeterminate,default:x.iconIndeterminate},required:Boolean,disabled:Boolean},z=a.defineComponent({name:"M3Checkbox",__name:"M3Checkbox",props:{...G},emits:["input","update:value","update:modelValue","change"],setup(i,{expose:e,emit:t}){const s=t,n=i,h=a.computed(()=>({main:{"m3-checkbox":!0,"m3-checkbox--required":n.required,"m3-checkbox--disabled":n.disabled}})),o=a.computed(()=>({})),c=new H("m3.checkbox",n,{emits:s,components:{icon:B.M3Image,ripple:q.M3Ripple,progress:E.M3Progress,message:l.M3FieldMessage},classes:h,styles:o}),u=c.render();return e(c.expose()),(d,g)=>(a.openBlock(),a.createBlock(a.resolveDynamicComponent(a.unref(u))))}}),J=z;exports.M3Checkbox=J;
