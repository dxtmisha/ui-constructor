"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const n=require("vue"),t=require("./inArray-iLoL9QGm.cjs"),o=require("./props-CfvHtfh3.cjs"),i={indeterminate:["type1","type2","type3"],position:["top","bottom"]},r={...o.defaultsProgress,linear:!0,indeterminate:"type3",position:"top"},d={...o.propsProgress,linear:{type:Boolean,default:r==null?void 0:r.linear},circular:Boolean,indeterminate:{type:String,default:r==null?void 0:r.indeterminate},position:{type:String,default:r==null?void 0:r.position},dense:Boolean,inverse:Boolean},y=n.defineComponent({name:"C2Progress",__name:"C2Progress",props:{...d},setup(p,{expose:c,emit:a}){const l=a,e=p,g=n.computed(()=>({main:{"c2-progress":!0,"c2-progress--linear":e.linear&&!e.circular,"c2-progress--circular":e.circular,[`c2-progress--indeterminate--${e.indeterminate}`]:t.inArray(i.indeterminate,e.indeterminate),[`c2-progress--position--${e.position}`]:t.inArray(i.position,e.position),"c2-progress--dense":e.dense,"c2-progress--inverse":e.inverse}})),m=n.computed(()=>({})),s=new o.ProgressDesign("c2.progress",e,{emits:l,classes:g,styles:m}),u=s.render();return c(s.expose()),(v,B)=>(n.openBlock(),n.createBlock(n.resolveDynamicComponent(n.unref(u))))}}),P=y;exports.C2Progress=P;
