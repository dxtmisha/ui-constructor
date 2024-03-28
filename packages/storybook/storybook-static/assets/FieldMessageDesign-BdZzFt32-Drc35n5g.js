import{h as a,c as r}from"./vue.esm-bundler-C0PuLcVh.js";import{Z as l}from"./DesignConstructorAbstract-pm1V7i1G-AwalHq2u.js";import{t as o}from"./isFilled-ClO-1E4U-BUdjZhTW.js";import{i as u}from"./toNumber-eA5ODeva-B35HWKKW.js";var g=Object.defineProperty,m=(i,s,t)=>s in i?g(i,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[s]=t,e=(i,s,t)=>(m(i,typeof s!="symbol"?s+"":s,t),t);const b={disabled:Boolean,counter:[String,Number],maxlength:[String,Number],helperMessage:String,validationMessage:String};class c{constructor(s){this.props=s}is(){return!!this.get()}isValidation(){var s;return o((s=this.props)==null?void 0:s.validationMessage)}get(){var s;if(this.isValidation())return this.props.validationMessage;if(o((s=this.props)==null?void 0:s.helperMessage))return this.props.helperMessage}}class p{constructor(s){this.props=s}is(){return this.getCounter()>0||this.isMax()}isMax(){return this.getMax()>0}get(){return this.isMax()?`${this.getCounter()} / ${this.getMax()}`:this.getCounter().toString()}getCounter(){var s;return u(((s=this.props)==null?void 0:s.counter)??0)}getMax(){var s;return u(((s=this.props)==null?void 0:s.maxlength)??0)}}class d{constructor(s){e(this,"message"),e(this,"counter"),this.props=s,this.message=new c(s),this.counter=new p(s)}is(){var s;return!((s=this.props)!=null&&s.disabled)&&(this.message.is()||this.counter.is())}classes(){return{"??--validation":this.message.isValidation()}}}class v{constructor(s){e(this,"item"),e(this,"is",r(()=>this.item.is())),e(this,"isMessage",r(()=>this.item.message.is())),e(this,"isValidation",r(()=>this.item.message.isValidation())),e(this,"isCounter",r(()=>this.item.counter.is())),e(this,"isMax",r(()=>this.item.counter.isMax())),e(this,"message",r(()=>this.item.message.get())),e(this,"counter",r(()=>this.item.counter.get())),e(this,"classes",r(()=>this.item.classes())),this.item=new d(s)}}class S extends l{constructor(s,t,h){super(s,t,h),e(this,"message"),e(this,"renderInfo",()=>{const n=this.setup();return a("div",{key:"message",class:n.classes.value.info,innerHTML:n.message.value})}),e(this,"renderCounter",()=>{const n=this.setup();return a("div",{key:"counter",class:n.classes.value.counter,innerHTML:n.counter.value})}),this.message=new v(t),this.init()}makeOptions(){return this}initSetup(){return{is:this.message.is,isMessage:this.message.isMessage,isValidation:this.message.isValidation,isCounter:this.message.isCounter,isMax:this.message.isMax,message:this.message.message,counter:this.message.counter,renderInfo:this.renderInfo,renderCounter:this.renderCounter}}initExpose(){return{}}initClasses(){return{main:{...this.toClassName(this.message.classes.value)},info:this.getSubClass("info"),counter:this.getSubClass("counter")}}initStyles(){return{}}initRender(){const s=this.setup(),t=[];if(s.isMessage.value&&t.push(s.renderInfo()),s.isCounter.value&&t.push(s.renderCounter()),s.is.value)return a("div",{...this.getAttrs(),ref:this.element,key:"main",class:s.classes.value.main},t)}}export{S as F,b};