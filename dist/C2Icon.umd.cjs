"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const o=require("vue"),i=require("./inArray-iLoL9QGm.cjs"),t=require("./props-BJ7gqnEl.cjs"),h=require("./C2Image.umd.cjs"),a={animationType:["type1","type2"],variation:["icon","payment","avatar","country"],shape:["rect","circle","box"],size:["12","16","20","24","32"]},e={...t.defaultsIcon,animationType:"type1",variation:"icon",shape:"box",size:"24"},u={...t.propsIcon,turn:Boolean,disabled:Boolean,hide:Boolean,animationType:{type:String,default:e==null?void 0:e.animationType},animationShow:Boolean,overlay:Boolean,dynamic:Boolean,start:Boolean,end:Boolean,high:Boolean,variation:{type:String,default:e==null?void 0:e.variation},shape:{type:String,default:e==null?void 0:e.shape},size:{type:String,default:e==null?void 0:e.size}},v=o.defineComponent({name:"C2Icon",__name:"C2Icon",props:{...u},emits:["load"],setup(r,{expose:s,emit:p}){const y=p,n=r,m=o.computed(()=>({main:{"c2-icon":!0,"c2-icon--turn":n.turn,"c2-icon--disabled":n.disabled,"c2-icon--hide":n.hide,[`c2-icon--animationType--${n.animationType}`]:i.inArray(a.animationType,n.animationType),"c2-icon--animationShow":n.animationShow,"c2-icon--overlay":n.overlay,"c2-icon--dynamic":n.dynamic,"c2-icon--start":n.start,"c2-icon--end":n.end,"c2-icon--high":n.high,[`c2-icon--variation--${n.variation}`]:i.inArray(a.variation,n.variation),[`c2-icon--shape--${n.shape}`]:i.inArray(a.shape,n.shape),[`c2-icon--size--${n.size}`]:i.inArray(a.size,n.size)}})),l=o.computed(()=>({})),c=new t.IconDesign("c2.icon",n,{emits:y,components:{image:h.C2Image},classes:m,styles:l}),d=c.render();return s(c.expose()),(B,T)=>(o.openBlock(),o.createBlock(o.resolveDynamicComponent(o.unref(d))))}}),g=v;exports.C2Icon=g;