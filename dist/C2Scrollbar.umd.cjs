"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("vue"),s=require("./props-xBErzBHw.cjs"),p={...s.propsScrollbar,visible:Boolean,border:Boolean,inverse:Boolean},u=e.defineComponent({name:"C2Scrollbar",__name:"C2Scrollbar",props:{...p},setup(c,{expose:n,emit:l}){const t=l,r=c,a=e.computed(()=>({main:{"c2-scrollbar":!0,"c2-scrollbar--visible":r.visible,"c2-scrollbar--border":r.border,"c2-scrollbar--inverse":r.inverse}})),i=e.computed(()=>({})),o=new s.ScrollbarDesign("c2.scrollbar",r,{emits:t,classes:a,styles:i}),b=o.render();return n(o.expose()),(d,v)=>(e.openBlock(),e.createBlock(e.resolveDynamicComponent(e.unref(b))))}}),m=u;exports.C2Scrollbar=m;