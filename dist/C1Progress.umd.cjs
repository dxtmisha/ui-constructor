"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const n=require("vue"),t=require("./inArray-iLoL9QGm.cjs"),o=require("./props-Cu7tMAI2.cjs"),i={indeterminate:["type1","type2","type3"],position:["top","bottom"]},r={...o.defaultsProgress,linear:!0,indeterminate:"type1",position:"top"},d={...o.propsProgress,linear:{type:Boolean,default:r==null?void 0:r.linear},circular:Boolean,indeterminate:{type:String,default:r==null?void 0:r.indeterminate},position:{type:String,default:r==null?void 0:r.position},dense:Boolean,inverse:Boolean},y=n.defineComponent({name:"C1Progress",__name:"C1Progress",props:{...d},setup(p,{expose:c,emit:a}){const l=a,e=p,g=n.computed(()=>({main:{"c1-progress":!0,"c1-progress--linear":e.linear&&!e.circular,"c1-progress--circular":e.circular,[`c1-progress--indeterminate--${e.indeterminate}`]:t.inArray(i.indeterminate,e.indeterminate),[`c1-progress--position--${e.position}`]:t.inArray(i.position,e.position),"c1-progress--dense":e.dense,"c1-progress--inverse":e.inverse}})),m=n.computed(()=>({})),s=new o.ProgressDesign("c1.progress",e,{emits:l,classes:g,styles:m}),u=s.render();return c(s.expose()),(v,B)=>(n.openBlock(),n.createBlock(n.resolveDynamicComponent(n.unref(u))))}}),P=y;exports.C1Progress=P;
