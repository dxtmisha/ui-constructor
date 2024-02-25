"use strict";var b=Object.defineProperty;var d=(r,s,e)=>s in r?b(r,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[s]=e;var l=(r,s,e)=>(d(r,typeof s!="symbol"?s+"":s,e),e);const a=require("vue"),g=require("./DesignConstructorAbstract-BWdw5G97.cjs"),o=require("./toNumber-Bjrk1Cck.cjs");class y extends o.DesignAsyncAbstract{constructor(e,t){super(e,t,["value","visible"]);l(this,"timeout");l(this,"timeoutReject")}isValue(){return this.getValue()>0}getTag(){var e;return(e=this.props)!=null&&e.circular?"svg":"div"}getValue(){var e;return o.toNumber(((e=this.props)==null?void 0:e.value)??0)}getValueInPercent(){var e;if(this.isValue()){const t=this.getValue(),n=100/this.getMax()*t;return(e=this.props)!=null&&e.circular?n.toString():`${100-n}%`}return null}getMax(){var e;return o.toNumber(((e=this.props)==null?void 0:e.max)??100)}getStyles(){return{"--??-sys-value":this.getValueInPercent()}}onAnimation({animationName:e}){e.match("-hidden")&&(this.event.hide=!1,this.event.classes=this.initClasses(),this.makeCallbackItem())}async initEvent(){this.isChanged("visible")&&([this.event.hide,this.event.visible]=await this.makeVisible()),this.isChanged("classes",["value","visible"])&&(this.event.classes=this.initClasses())}makeVisible(){return new Promise((e,t)=>{var h,m,p,v;const n=(h=this.props)==null?void 0:h.visible,u=o.toNumber(((m=this.props)==null?void 0:m.delay)??0),c=o.toNumber(((p=this.props)==null?void 0:p.delayHide)??0);clearTimeout(this.timeout),this.isValue()?e([!1,!1]):!!((v=this.event)!=null&&v.visible)!==n&&(n&&u?(this.timeout=setTimeout(()=>{clearTimeout(this.timeoutReject),e(this.initVisible())},u),this.timeoutReject=setTimeout(t,u+1e3)):!n&&c?this.timeout=setTimeout(()=>{e(this.initVisible())},c):e(this.initVisible()))})}initVisible(){var t;const e=(t=this.props)==null?void 0:t.visible;return[!e,!!e]}initClasses(){return{"??--hide":this.event.hide,"??--visible":this.event.visible,"??--value":this.isValue()}}}class f{constructor(s){l(this,"item");l(this,"tag",a.computed(()=>this.item.getTag()));l(this,"valueInPercent",a.computed(()=>this.item.getValueInPercent()));l(this,"hide",a.shallowRef(!1));l(this,"visible",a.shallowRef(!1));l(this,"classes",a.shallowRef({}));l(this,"styles",a.computed(()=>this.item.getStyles()));this.props=s,this.item=new y(s,e=>{this.hide.value=e.hide,this.visible.value=e.visible,this.classes.value=e.classes}),a.watchEffect(()=>this.item.make())}onAnimation(s){this.item.onAnimation(s)}}class S extends g.DesignConstructorAbstract{constructor(e,t,n){super(e,t,n);l(this,"item");this.item=new f(t),this.init()}makeOptions(){return this}initSetup(){return{tag:this.item.tag,valueInPercent:this.item.valueInPercent,hide:this.item.hide,visible:this.item.visible,onAnimation:e=>this.item.onAnimation(e)}}initExpose(){return{}}initClasses(){return{main:{...this.toClassName(this.item.classes.value)},circle:this.getSubClass("circle"),circleSub:this.getSubClass("circleSub")}}initStyles(){return{...this.toClassName(this.item.styles.value)}}initRender(){var n,u;const e=this.setup(),t=[];return(n=this.props)!=null&&n.circular&&(((u=this.props)==null?void 0:u.indeterminate)==="type3"&&t.push(a.h("circle",{class:e.classes.value.circleSub,cx:"24",cy:"24",r:"20"})),t.push(a.h("circle",{class:e.classes.value.circle,cx:"24",cy:"24",r:"20"}))),a.h(e.tag.value,{ref:this.element,class:e.classes.value.main,style:e.styles.value,viewBox:"0 0 48 48",onAnimationend:e.onAnimation},t)}}const i={max:100,delay:360,linear:!0,indeterminate:"type1",position:"top"},V={value:[Number,String],max:{type:[Number,String],default:i==null?void 0:i.max},visible:Boolean,delay:{type:[Number,String],default:i==null?void 0:i.delay},delayHide:[Number,String],linear:{type:Boolean,default:i==null?void 0:i.linear},circular:Boolean,indeterminate:{type:String,default:i==null?void 0:i.indeterminate},position:{type:String,default:i==null?void 0:i.position},dense:Boolean,inverse:Boolean};exports.ProgressDesign=S;exports.defaultsProgress=i;exports.propsProgress=V;