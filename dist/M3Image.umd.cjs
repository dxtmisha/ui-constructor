"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("vue"),s=require("./props-BVmule3Q.cjs"),d={...s.propsImage,turn:Boolean,disabled:Boolean,hide:Boolean,adaptive:Boolean},l=e.defineComponent({name:"M3Image",__name:"M3Image",props:{...d},emits:["load"],setup(t,{expose:a,emit:m}){const i=m,o=t,r=e.computed(()=>({main:{"m3-image":!0,"m3-image--turn":o.turn,"m3-image--disabled":o.disabled,"m3-image--hide":o.hide,"m3-image--adaptive":o.adaptive}})),c=e.computed(()=>({})),n=new s.ImageDesign("m3.image",o,{emits:i,classes:r,styles:c}),p=n.render();return a(n.expose()),(g,I)=>(e.openBlock(),e.createBlock(e.resolveDynamicComponent(e.unref(p))))}}),u=l;exports.M3Image=u;
