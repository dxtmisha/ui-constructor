"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const n=require("vue"),t=require("./inArray-iLoL9QGm.cjs"),o=require("./props-DpMbx9sY.cjs"),i={indeterminate:["type1","type2","type3"],position:["top","bottom"]},r={...o.defaultsProgress,linear:!0,indeterminate:"type1",position:"top"},d={...o.propsProgress,linear:{type:Boolean,default:r==null?void 0:r.linear},circular:Boolean,indeterminate:{type:String,default:r==null?void 0:r.indeterminate},position:{type:String,default:r==null?void 0:r.position},dense:Boolean,inverse:Boolean},y=n.defineComponent({name:"M3Progress",__name:"M3Progress",props:{...d},setup(p,{expose:c,emit:a}){const m=a,e=p,l=n.computed(()=>({main:{"m3-progress":!0,"m3-progress--linear":e.linear&&!e.circular,"m3-progress--circular":e.circular,[`m3-progress--indeterminate--${e.indeterminate}`]:t.inArray(i.indeterminate,e.indeterminate),[`m3-progress--position--${e.position}`]:t.inArray(i.position,e.position),"m3-progress--dense":e.dense,"m3-progress--inverse":e.inverse}})),g=n.computed(()=>({})),s=new o.ProgressDesign("m3.progress",e,{emits:m,classes:l,styles:g}),u=s.render();return c(s.expose()),(v,B)=>(n.openBlock(),n.createBlock(n.resolveDynamicComponent(n.unref(u))))}}),P=y;exports.M3Progress=P;