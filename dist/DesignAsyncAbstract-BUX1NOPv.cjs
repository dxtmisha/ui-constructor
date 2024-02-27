"use strict";var c=Object.defineProperty;var r=(i,t,s)=>t in i?c(i,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[t]=s;var a=(i,t,s)=>(r(i,typeof t!="symbol"?t+"":t,s),s);const l=require("./toNumber-cBi38xJ6.cjs");class h{constructor(t,s=Object.keys(t)){a(this,"cache",{});this.props=t,this.watch=s}is(t){return l.isArray(t)?!!t.find(s=>this.isDifferent(s)):this.isDifferent(t)}isChanged(){const t=this.props;return!!this.watch.find(s=>s in t&&this.isDifferent(s))}update(){const t=this.props;this.watch.forEach(s=>{s in t&&this.isDifferent(s)&&(this.cache[s]=t[s])})}isDifferent(t){var s,e;return((s=this.cache)==null?void 0:s[t])!==((e=this.props)==null?void 0:e[t])}}class n{constructor(t,s,e){a(this,"event",{});a(this,"changed");this.props=t,this.callback=s,this.changed=new h(t,e)}make(t){return this.makeCallback(t),this}is(t){return t in this.props}isChanged(t,s){return!(t in this.event)||this.changed.is(s||t)}makeCallback(t=!1){(t||this.changed.isChanged())&&(this.initEvent(),this.makeCallbackItem(),this.changed.update())}makeCallbackItem(){this.callback&&this.callback(this.event)}}class k extends n{make(t){return this.makeCallback(t).then(),this}async makeCallback(t){(t||this.changed.isChanged())&&(await this.initEvent(),this.makeCallbackItem(),this.changed.update())}}exports.DesignAbstract=n;exports.DesignAsyncAbstract=k;exports.DesignChanged=h;
