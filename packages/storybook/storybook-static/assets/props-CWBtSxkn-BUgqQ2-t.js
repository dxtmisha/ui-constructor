import{h as n,r as h,a as c,o as u,n as p}from"./vue.esm-bundler-DKn_-kmd.js";import{Z as m}from"./DesignConstructorAbstract-pm1V7i1G-DKYGky5W.js";import{j as o}from"./createElement-Bvijtmfm-DCzadBt_.js";import{x as b}from"./DataStorage-BS0mwKb9-CnrN-7_f.js";import{R as d}from"./EventItem-CNRiCeQO-BBiOwxAe.js";var g=Object.defineProperty,v=(e,t,s)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,i=(e,t,s)=>(v(e,typeof t!="symbol"?t+"":t,s),s);class a{static async is(){const t=await this.get();return t!==-1&&t<=8}static async get(){const t=this.storage.get()??-1;if(!this.calculate&&t===-1){const s=await this.init();return this.storage.set(s),s}return t}static createElement(){return o(document.body,"div",t=>{t.style.height="24px",t.style.overflowY="scroll",t.style.position="fixed",t.style.width="100%",o(t,"div",s=>{s.style.height="100px"})})}static init(){return new Promise(t=>{this.calculate=!0;const s=this.createElement();requestAnimationFrame(()=>{t(s.offsetWidth-s.clientWidth),s.remove(),this.calculate=!1})})}}i(a,"storage",new b("scrollbar",!0)),i(a,"calculate",!1);const l=8;class y{constructor(t,s,r){i(this,"event"),i(this,"top",!1),i(this,"bottom",!1),this.props=t,this.element=s,this.callback=r}getClasses(){return{"??--border--top":this.top,"??--border--bottom":this.bottom}}start(){return this.event?this.event.start():this.event=new d(this.element.value,["scroll-sync"],()=>this.on()).start(),this.on(),this}stop(){return this.event&&this.event.stop(),this}toggle(){return this.props.border?this.start():this.stop(),this}reset(){return this.event&&this.event.setElement(this.element.value),this.toggle()}setData(t,s){return(this.top!==t||this.bottom!==s)&&(this.top=t,this.bottom=s,this.callback&&this.callback()),this}on(){const t=this.element.value;t&&this.setData(t.scrollTop>l,t.scrollTop<t.scrollHeight-t.clientHeight-l)}}class f{constructor(t,s,r){i(this,"border"),this.border=new y(t,s,r)}async getClasses(){return{"??--disabled":await this.getDisabled(),...this.border.getClasses()}}async getDisabled(){return await a.is()}}class w{constructor(t,s){i(this,"scrollbar"),i(this,"classes",h({})),this.scrollbar=new f(t,s,()=>this.updateClasses().then()),c(async()=>{this.scrollbar.border.reset(),await this.updateClasses()}),u(async()=>{await p(),requestAnimationFrame(()=>this.scrollbar.border.toggle())})}async updateClasses(){return this.classes.value=await this.scrollbar.getClasses(),this}}class R extends m{constructor(t,s,r){super(t,s,r),i(this,"scrollbar"),this.scrollbar=new w(this.props,this.element),this.init()}makeOptions(){return this}initSetup(){return{}}initExpose(){return{}}initClasses(){return{main:{...this.toClassName(this.scrollbar.classes.value)}}}initStyles(){return{}}initRender(){const t=this.setup(),s=[this.initSlot("default")];return n(this.props.tag,{...this.getAttrs(),ref:this.element,class:t.classes.value.main},s)}}const C={tag:"div"},T={tag:{type:String,default:C.tag},visible:Boolean,border:Boolean,inverse:Boolean};export{R,T};
