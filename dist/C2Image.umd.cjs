"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("vue"),s=require("./props-DYATrv7K.cjs"),d={...s.propsImage,turn:Boolean,disabled:Boolean,hide:Boolean,adaptive:Boolean},l=e.defineComponent({name:"C2Image",__name:"C2Image",props:{...d},emits:["load"],setup(t,{expose:a,emit:c}){const i=c,o=t,r=e.computed(()=>({main:{"c2-image":!0,"c2-image--turn":o.turn,"c2-image--disabled":o.disabled,"c2-image--hide":o.hide,"c2-image--adaptive":o.adaptive}})),m=e.computed(()=>({})),n=new s.ImageDesign("c2.image",o,{emits:i,classes:r,styles:m}),p=n.render();return a(n.expose()),(g,I)=>(e.openBlock(),e.createBlock(e.resolveDynamicComponent(e.unref(p))))}}),u=l;exports.C2Image=u;
