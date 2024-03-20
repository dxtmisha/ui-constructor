"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("vue"),n=require("./inArray-iLoL9QGm.cjs"),a=require("./props-Cz8O6oWQ.cjs"),g=require("./C1Icon.umd.cjs"),x=require("./C1Progress.umd.cjs"),y=require("./C1Ripple.umd.cjs"),r={adaptive:["icon"],size:["sm","md","lg","xl"],palette:["webText","webWhite","webAccent","webAccentWhite","webError","webGray1","webGray2","webGray3","webGray4","webGlue1","webGlue2","webGlue3","accent","success","error","notification","ripple","background","backgroundImage","backgroundNotificationInfo","backgroundNotificationWarning","backgroundError","gray1","gray2","gray3","gray4","shading","green1","green2","yellow1","yellow2","yellow3","blue1","extra1","extra2","extra3","extra4","extra5","extra6","extra7","extra8","extra9","extra10","extra11","extra12","extra13","extra14","extra15","extra16","extra17","extra18","extra19"]},o={...a.defaultsButton,size:"md",contained:!0},w={...a.propsButton,focus:Boolean,disabled:Boolean,selected:Boolean,loading:Boolean,readonly:Boolean,adaptive:String,size:{type:String,default:o==null?void 0:o.size},contained:{type:Boolean,default:o==null?void 0:o.contained},outlined:Boolean,white:Boolean,text:Boolean,palette:String},m=t.defineComponent({name:"C1Button",__name:"C1Button",props:{...w},emits:["click"],setup(i,{expose:s,emit:l}){const u=l,e=i,d=t.computed(()=>({main:{"c1-button":!0,"c1-button--focus":e.focus,"c1-button--disabled":e.disabled,"c1-button--selected":e.selected,"c1-button--loading":e.loading,"c1-button--readonly":e.readonly,[`c1-button--adaptive--${e.adaptive}`]:n.inArray(r.adaptive,e.adaptive),[`c1-button--size--${e.size}`]:n.inArray(r.size,e.size),"c1-button--contained":e.contained&&!e.outlined&&!e.white&&!e.text,"c1-button--outlined":e.outlined,"c1-button--white":e.white,"c1-button--text":e.text,[`c1-palette c1-palette--${e.palette}`]:n.inArray(r.palette,e.palette)}})),p=t.computed(()=>({})),c=new a.ButtonDesign("c1.button",e,{emits:u,components:{icon:g.C1Icon,progress:x.C1Progress,ripple:y.C1Ripple},classes:d,styles:p}),b=c.render();return s(c.expose()),(C,f)=>(t.openBlock(),t.createBlock(t.resolveDynamicComponent(t.unref(b))))}}),B=m;exports.C1Button=B;
