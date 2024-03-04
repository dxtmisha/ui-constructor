"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("vue"),o=require("./inArray-iLoL9QGm.cjs"),r=require("./props-CX_ooPA-.cjs"),g=require("./M2Icon.umd.cjs"),b=require("./M2Progress.umd.cjs"),h=require("./M2Ripple.umd.cjs"),i={adaptive:["icon","sm","md"],height:["sm","md","lg"],palette:["red","pink","purple","deepPurple","indigo","blue","lightBlue","cyan","teal","green","lightGreen","lime","yellow","amber","orange","deepOrange","brown","grey","greyBlue","white","black","blackLight"]},n={...r.defaultsButton,height:"md",contained:!0},B={...r.propsButton,focus:Boolean,disabled:Boolean,selected:Boolean,loading:Boolean,readonly:Boolean,adaptive:String,height:{type:String,default:n==null?void 0:n.height},contained:{type:Boolean,default:n==null?void 0:n.contained},outlined:Boolean,text:Boolean,palette:String},y=t.defineComponent({name:"M2Button",__name:"M2Button",props:{...B},emits:["click"],setup(s,{expose:l,emit:c}){const u=c,e=s,p=t.computed(()=>({main:{"m2-button":!0,"m2-button--focus":e.focus,"m2-button--disabled":e.disabled,"m2-button--selected":e.selected,"m2-button--loading":e.loading,"m2-button--readonly":e.readonly,[`m2-button--adaptive--${e.adaptive}`]:o.inArray(i.adaptive,e.adaptive),[`m2-button--height--${e.height}`]:o.inArray(i.height,e.height),"m2-button--contained":e.contained&&!e.outlined&&!e.text,"m2-button--outlined":e.outlined,"m2-button--text":e.text,[`m2-palette--${e.palette}`]:o.inArray(i.palette,e.palette)}})),d=t.computed(()=>({})),a=new r.ButtonDesign("m2.button",e,{emits:u,components:{icon:g.M2Icon,progress:b.M2Progress,ripple:h.M2Ripple},classes:p,styles:d}),m=a.render();return l(a.expose()),(v,k)=>(t.openBlock(),t.createBlock(t.resolveDynamicComponent(t.unref(m))))}}),M=y;exports.M2Button=M;
