import{a as h}from"./isArray-QlWcxgml-TsNjkBGN.js";var n=Object.defineProperty,c=(i,e,t)=>e in i?n(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,s=(i,e,t)=>(c(i,typeof e!="symbol"?e+"":e,t),t);class r{constructor(e,t=Object.keys(e)){s(this,"cache",{}),this.props=e,this.watch=t}is(e){return h(e)?!!e.find(t=>this.isDifferent(t)):this.isDifferent(e)}isChanged(){const e=this.props;return!!this.watch.find(t=>t in e&&this.isDifferent(t))}update(){const e=this.props;this.watch.forEach(t=>{t in e&&this.isDifferent(t)&&(this.cache[t]=e[t])})}isDifferent(e){var t,a;return((t=this.cache)==null?void 0:t[e])!==((a=this.props)==null?void 0:a[e])}}class l{constructor(e,t,a){s(this,"event",{}),s(this,"changed"),this.props=e,this.callback=t,this.changed=new r(e,a)}make(e){return this.makeCallback(e),this}is(e){return e in this.props}isChanged(e,t){return!(e in this.event)||this.changed.is(t||e)}makeCallback(e=!1){(e||this.changed.isChanged())&&(this.initEvent(),this.makeCallbackItem(),this.changed.update())}makeCallbackItem(){this.callback&&this.callback(this.event)}}class d extends l{make(e){return this.makeCallback(e).then(),this}async makeCallback(e){(e||this.changed.isChanged())&&(await this.initEvent(),this.makeCallbackItem(),this.changed.update())}}export{d as o};
