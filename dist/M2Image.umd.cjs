"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("vue"),s=require("./props-O3UC8yOo.cjs"),d={...s.propsImage,turn:Boolean,disabled:Boolean,hide:Boolean,adaptive:Boolean},l=e.defineComponent({name:"M2Image",__name:"M2Image",props:{...d},emits:["load"],setup(t,{expose:a,emit:m}){const i=m,o=t,r=e.computed(()=>({main:{"m2-image":!0,"m2-image--turn":o.turn,"m2-image--disabled":o.disabled,"m2-image--hide":o.hide,"m2-image--adaptive":o.adaptive}})),c=e.computed(()=>({})),n=new s.ImageDesign("m2.image",o,{emits:i,classes:r,styles:c}),p=n.render();return a(n.expose()),(g,I)=>(e.openBlock(),e.createBlock(e.resolveDynamicComponent(e.unref(p))))}}),u=l;exports.M2Image=u;
