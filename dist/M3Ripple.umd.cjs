"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("vue"),n=require("./props-DVIRiDY5.cjs"),u={...n.propsRipple},a=e.defineComponent({name:"M3Ripple",__name:"M3Ripple",props:{...u},setup(o,{expose:p,emit:t}){const r=t,c=o,i=e.computed(()=>({main:{"m3-ripple":!0}})),l=e.computed(()=>({})),s=new n.RippleDesign("m3.ripple",c,{emits:r,classes:i,styles:l}),m=s.render();return p(s.expose()),(R,_)=>(e.openBlock(),e.createBlock(e.resolveDynamicComponent(e.unref(m))))}}),d=a;exports.M3Ripple=d;