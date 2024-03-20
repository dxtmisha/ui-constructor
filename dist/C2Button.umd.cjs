"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("vue"),n=require("./inArray-iLoL9QGm.cjs"),a=require("./props-Cz8O6oWQ.cjs"),y=require("./C2Icon.umd.cjs"),g=require("./C2Progress.umd.cjs"),s={adaptive:["icon"],size:["x","xs","sm","md","lg","xl"],palette:["carmine","iris","redfish","goldenrod","asparagus","slate","gray","alpha","pistachio","mint","jade","teal","celestial","indigo","orchid","cerise","informative","positive","negative","neutral"]},o={...a.defaultsButton,primary:!0,size:"md"},b={...a.propsButton,focus:Boolean,disabled:Boolean,selected:Boolean,loading:Boolean,readonly:Boolean,adaptive:String,intent:Boolean,primary:{type:Boolean,default:o==null?void 0:o.primary},secondary:Boolean,outline:Boolean,ghost:Boolean,size:{type:String,default:o==null?void 0:o.size},palette:String},B=t.defineComponent({name:"C2Button",__name:"C2Button",props:{...b},emits:["click"],setup(i,{expose:c,emit:l}){const u=l,e=i,p=t.computed(()=>({main:{"c2-button":!0,"c2-button--focus":e.focus,"c2-button--disabled":e.disabled,"c2-button--selected":e.selected,"c2-button--loading":e.loading,"c2-button--readonly":e.readonly,[`c2-button--adaptive--${e.adaptive}`]:n.inArray(s.adaptive,e.adaptive),"c2-button--intent":e.intent,"c2-button--primary":e.primary&&!e.secondary&&!e.outline&&!e.ghost,"c2-button--secondary":e.secondary,"c2-button--outline":e.outline,"c2-button--ghost":e.ghost,[`c2-button--size--${e.size}`]:n.inArray(s.size,e.size),[`c2-palette c2-palette--${e.palette}`]:n.inArray(s.palette,e.palette)}})),d=t.computed(()=>({})),r=new a.ButtonDesign("c2.button",e,{emits:u,components:{icon:y.C2Icon,progress:g.C2Progress},classes:p,styles:d}),m=r.render();return c(r.expose()),(C,f)=>(t.openBlock(),t.createBlock(t.resolveDynamicComponent(t.unref(m))))}}),v=B;exports.C2Button=v;
