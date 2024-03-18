"use strict";var x=Object.defineProperty;var C=(i,e,t)=>e in i?x(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var a=(i,e,t)=>(C(i,typeof e!="symbol"?e+"":e,t),t);const r=require("vue"),y=require("./Skeleton-BCo3ghxJ.cjs"),m=require("./DesignConstructorAbstract-BUcyMiAM.cjs"),v=require("./isArray-Bin_5of_.cjs"),g=require("./isFilled-BySHTEb1.cjs"),k=require("./toArray-h-YFi-Q9.cjs"),I=require("./getBind-JXbQO-KO.cjs"),f=require("./useInputCheck-BtP25CMG.cjs"),u=require("./useEnabled-CmQoH0i5.cjs"),B=require("./props-glpBh0r5.cjs"),d=require("./FieldMessageDesign-Cx8vRcQv.cjs");class M{constructor(e,t,s,n){this.props=e,this.element=t,this.type=s,this.pattern=n}get(){const e=this.element.value;if(e)return"input"in e?e.input:e}getName(){var e;return((e=this.get())==null?void 0:e.name)??""}getPattern(){var e,t,s,n,h,c,l,o,p,b;return{name:(e=this.props)==null?void 0:e.name,type:(t=this.type)==null?void 0:t.get(),required:(s=this.props)==null?void 0:s.required,pattern:(n=this.pattern)==null?void 0:n.get(),step:(h=this.props)==null?void 0:h.step,min:(c=this.props)==null?void 0:c.min,max:(l=this.props)==null?void 0:l.max,minlength:(o=this.props)==null?void 0:o.minlength,maxlength:(p=this.props)==null?void 0:p.maxlength,...((b=this.props)==null?void 0:b.input)??{}}}findByName(e){var n;if(e instanceof Element)return e;const t=(n=this.get())==null?void 0:n.form;if(t){const h=t.querySelector(`[name="${e}"]`);if(h)return h}const s=document.querySelector(e);if(s)return s}clear(){var t;const e=this.element.value;return e&&"clear"in e&&((t=e.clear)==null||t.call(e)),this}}class S extends M{constructor(e,t){super(e,t)}getPattern(){var e,t,s;return{name:(e=this.props)==null?void 0:e.name,type:"checkbox",required:(t=this.props)==null?void 0:t.required,...((s=this.props)==null?void 0:s.input)??{}}}}class E{constructor(){a(this,"change",!1)}get(){return this.change}set(e){return this.change=e,this}toChange(){return this.set(!0)}reset(){return this.set(!1)}}class q{constructor(e,t,s,n){a(this,"value");a(this,"valueIs",!1);this.props=e,this.element=t,this.change=s,this.callback=n,this.value=this.getOriginal()}is(){var e;return this.valueIs||this.getBoolean()||!!((e=this.props)!=null&&e.placeholder)}get(){return this.value}getString(){var t;const e=this.get();return v.isArray(e)?e.join(", "):k.isObject(e)?JSON.stringify(e):e===!0?"1":e===!1?"0":g.isFilled(e)?((t=e==null?void 0:e.toString)==null?void 0:t.call(e))??"":""}getNumber(){return this.getBoolean()?parseFloat(this.getString()):0}getBoolean(){return g.isFilled(this.get())}getOriginal(){var e,t;return((e=this.props)==null?void 0:e.value)||((t=this.props)==null?void 0:t.modelValue)}getLength(){const e=this.get();return v.isArray(e)?e.length:k.isObject(e)?Object.keys(e).length:this.getString().length??0}set(e){return this.value!==e&&(this.value=e,this.change.set(!0),this.callback()),this}setByEvent(e){switch(typeof e){case"object":e&&("value"in e?this.set(e.value):"target"in e&&this.setByTarget(e.target),"valueIs"in e&&(this.valueIs=e.valueIs));break;default:this.set(e);break}return this}setByTarget(e){const t=this.isCheckbox(e)?e.checked:e.value;return this.set(t)}setByChecked(e){const t=e.target;return this.set(t.checked)}setByRadio(e){const t=e.target,s=t.checked?t.value:"";return this.set(s)}update(){return this.set(this.getOriginal())}clear(){return this.set(""),this.element.clear(),this.valueIs=!1,this}isCheckbox(e){return e.type==="checkbox"}}class w{constructor(e,t){this.props=e,this.value=t}get(){var t;const e=this.getIcon();return I.getBind(((t=this.props)==null?void 0:t.icon)??e,{value:e})}getIcon(){var e,t,s;if(this.value.getBoolean())return(e=this.props)!=null&&e.indeterminate?(t=this.props)==null?void 0:t.iconIndeterminate:(s=this.props)==null?void 0:s.iconCheckbox}}class V{constructor(e){this.props=e}get(e){var s;const t=(s=this.props)==null?void 0:s.validationCode;if(t&&!e.valid){if(typeof t=="string")return t;{const n=this.getIndex(e);if(n&&n in t)return t[n]}}}getIndex(e){for(const t in e)if(t!=="valid"&&e[t])return t}}class F{constructor(e,t,s,n,h,c,l){a(this,"item");a(this,"validation");a(this,"cache");a(this,"cacheValue");this.props=e,this.element=t,this.change=s,this.value=n,this.code=h,this.match=c,this.callback=l,this.item=f.useInputCheck(this.element.getPattern())}isError(){var e;return!((e=this.get())!=null&&e.status)}checkValidity(){var t;const e=!this.isError();return(t=this.callback)==null||t.call(this),e}get(){var e;return(this.cacheValue!==this.value.get()||this.cache===void 0)&&(this.cacheValue=this.value.get(),this.cache=this.checkGlobal()??this.checkItem()??((e=this.match)==null?void 0:e.check())),!this.change.get()||!this.cache?{value:void 0}:this.cache}getMessage(){var e;return((e=this.get())==null?void 0:e.validationMessage)??""}set(e){return"status"in e&&"validationMessage"in e&&"value"in e?this.validation={status:e.status,required:e==null?void 0:e.required,input:e==null?void 0:e.input,validationMessage:e.validationMessage,validity:e==null?void 0:e.validity,pattern:e==null?void 0:e.pattern,value:e.value}:this.validation=void 0,this}update(){return this.item=f.useInputCheck(this.element.getPattern()),this}checkGlobal(){var e;return(e=this.props)!=null&&e.validationMessage?{status:!1,validationMessage:this.props.validationMessage,value:this.value.get()}:this.validation??void 0}checkItem(){const e=this.item.check(this.value.get());if(!(e!=null&&e.status))return e}}class R{constructor(e,t,s,n,h){this.props=e,this.change=t,this.value=s,this.validation=n,this.callbackEmit=h}onInput(e){this.isEnabled()&&(this.validation.set(e),this.value.setByEvent(e),this.on(e))}onChange(e){this.isEnabled()&&this.on(e,"change")}onSelect(e){this.isEnabled()&&(this.value.setByEvent(e),this.on(e).onChange(e))}onChecked(e){this.isEnabled()&&(this.value.setByChecked(e),this.on(e).onChange(e))}onRadio(e){this.isEnabled()&&(this.value.setByRadio(e),this.on(e).onChange(e))}onClear(e){this.isEnabled()&&(this.value.clear(),this.on(e).onChange(e))}on(e,t="input"){if(this.callbackEmit(t,e,{...this.getValidation(t),...this.getData()}),t==="input"){const s=this.value.get();this.callbackEmit("update:value",s,{value:s}),this.callbackEmit("update:modelValue",s,{value:s})}return this}isValue(e){return!!(e&&["input","change"].indexOf(e)>=0)}isEnabled(){var e;return((e=this.props)==null?void 0:e.disabled)!==!0}getData(){return{value:this.value.get(),detail:this.props.detail}}getValidation(e){return this.isValue(e)?this.validation.get():{}}}class O{constructor(e,t,s,n){a(this,"element");a(this,"change");a(this,"value");a(this,"icon");a(this,"code");a(this,"validation");a(this,"event");this.element=new S(e,t),this.change=new E,this.value=new q(e,this.element,this.change,s),this.icon=new w(e,this.value),this.code=new V(e),this.validation=new F(e,this.element,this.change,this.value,this.code,void 0,s),this.event=new R(e,this.change,this.value,this.validation,n)}update(){return this.value.update(),this}}class D{constructor(e,t,s){a(this,"checkbox");a(this,"value",r.shallowRef(!1));a(this,"iconBind",r.shallowRef({}));a(this,"checkValidity");a(this,"validationMessage",r.shallowRef(""));a(this,"onInput",e=>{switch(e.target.type){case"checkbox":this.checkbox.event.onChecked(e);break;case"radio":this.checkbox.event.onRadio(e);break}});this.checkbox=new O(e,t,()=>{this.update()},s),this.checkValidity=()=>this.checkbox.validation.checkValidity(),r.watchEffect(()=>this.checkbox.value.update()),r.watchEffect(()=>this.checkbox.validation.update()),r.watchEffect(()=>this.update())}update(){return this.value.value=this.checkbox.value.getBoolean(),this.iconBind.value=this.checkbox.icon.get(),this.validationMessage.value=this.checkbox.validation.getMessage(),this}}const A={disabled:d.propsFieldMessage.disabled,helperMessage:d.propsFieldMessage.helperMessage,validationMessage:d.propsFieldMessage.validationMessage},P=function(i,e,t){const s=r.computed(()=>({disabled:i==null?void 0:i.disabled,counter:i==null?void 0:i.counter,maxlength:i==null?void 0:i.maxlength,helperMessage:i==null?void 0:i.helperMessage,validationMessage:g.isFilled(i==null?void 0:i.validationMessage)?i.validationMessage:m.getRef(t)}));return{messageBind:s,renderFieldMessage(){const n=[];return e&&e.renderAdd(n,"message",s.value),n}}};class j extends m.DesignConstructorAbstract{constructor(t,s,n){super(t,s,n);a(this,"checkbox");a(this,"classesSkeleton");a(this,"type","checkbox");this.checkbox=new D(s,this.element,(h,c,l)=>{var o;(o=this.emits)==null||o.call(this,h,c,l)}),this.classesSkeleton=y.Skeleton.getClassesListByDesign(this.name[0]),this.init()}renderInput(){var s;const t=this.setup();return r.h("input",{class:t.classes.value.input,name:this.props.name,type:this.type,checked:t.value.value,readonly:this.props.readonly,disabled:t.isDisabled.value,value:((s=this.props)==null?void 0:s.valueVariant)??"1",on:this.props.on,onInput:t.onInput})}renderInputHidden(){return r.h("input",{name:this.props.name,type:"hidden",value:"0"})}renderBody(){const t=this.setup(),s=[t.renderChecked()];return t.isLabel.value&&s.push(t.renderInfo()),r.h("span",{class:t.classes.value.body},s)}renderChecked(){const t=this.setup(),s=[t.renderProgress(),r.h("span",{class:[t.classes.value.itemIcon,t.classesSkeleton.classBackgroundVariant]},[this.components.renderOne("icon",t.iconBind.value)])];return this.components.renderAdd(s,"ripple",{disabled:t.isDisabled.value}),r.h("span",{class:t.classes.value.item},s)}renderInfo(){const t=this.setup(),s=[...t.renderLabel(),...t.renderFieldMessage()];return r.h("span",{class:t.classes.value.info},s)}makeOptions(){return this}initSetup(){return{value:this.checkbox.value,iconBind:this.checkbox.iconBind,checkValidity:this.checkbox.checkValidity,validationMessage:this.checkbox.validationMessage,renderInput:()=>this.renderInput(),renderInputHidden:()=>this.renderInputHidden(),renderBody:()=>this.renderBody(),renderChecked:()=>this.renderChecked(),renderInfo:()=>this.renderInfo(),onInput:this.checkbox.onInput,...u.useLabel(this.props,this.slots,[this.getSubClass(["info","label"]),this.classesSkeleton.classText]),...u.useEnabled(this.props),...u.useProgressRef(this.props,this.components,this.getSubClass("loading"),{circular:!0,inverse:!0,dense:!0}),...P(this.props,this.components,this.checkbox.validationMessage),classesSkeleton:this.classesSkeleton}}initExpose(){const t=this.setup();return{value:t.value,checkValidity:t.checkValidity,validationMessage:t.validationMessage}}initClasses(){return{main:{},input:this.getSubClass("input"),body:this.getSubClass("body"),item:this.getSubClass("item"),itemIcon:this.getSubClass("item__icon"),loading:this.getSubClass("loading"),info:this.getSubClass("info"),infoLabel:this.getSubClass("info__label")}}initStyles(){return{}}initRender(){const t=this.setup(),s=[t.renderInputHidden(),t.renderInput(),t.renderBody()];return r.h("label",{...this.getAttrs(),ref:this.element,class:t.classes.value.main},s)}}const L={},H={...B.propsBasicInput,...A,value:Boolean,modelValue:Boolean,icon:[String,Object],indeterminate:Boolean,iconCheckbox:String,iconIndeterminate:String,required:Boolean,right:Boolean,focus:Boolean,disabled:Boolean};exports.CheckboxDesign=j;exports.defaultsCheckbox=L;exports.propsCheckbox=H;