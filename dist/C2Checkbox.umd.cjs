"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("vue"),m=require("./inArray-iLoL9QGm.cjs"),s=require("./props-CjxlS_ur.cjs"),l=require("./C2Image.umd.cjs"),C=require("./C2Progress.umd.cjs"),b=require("./C2FieldMessage.umd.cjs"),k={size:["sm","md","lg"]},c={...s.defaultsCheckbox,iconCheckbox:"check-md",iconIndeterminate:"minus-md",size:"md"},h={...s.propsCheckbox,iconCheckbox:{type:s.propsCheckbox.iconCheckbox,default:c.iconCheckbox},iconIndeterminate:{type:s.propsCheckbox.iconIndeterminate,default:c.iconIndeterminate},required:Boolean,size:{type:String,default:c==null?void 0:c.size},focus:Boolean,disabled:Boolean},x=e.defineComponent({name:"C2Checkbox",__name:"C2Checkbox",props:{...h},emits:["input","update:value","update:modelValue","change"],setup(t,{expose:r,emit:i}){const a=i,o=t,u=e.computed(()=>({main:{"c2-checkbox":!0,"c2-checkbox--required":o.required,[`c2-checkbox--size--${o.size}`]:m.inArray(k.size,o.size),"c2-checkbox--focus":o.focus,"c2-checkbox--disabled":o.disabled}})),d=e.computed(()=>({})),n=new s.CheckboxDesign("c2.checkbox",o,{emits:a,components:{icon:l.C2Image,progress:C.C2Progress,message:b.C2FieldMessage},classes:u,styles:d}),p=n.render();return r(n.expose()),(f,y)=>(e.openBlock(),e.createBlock(e.resolveDynamicComponent(e.unref(p))))}}),g=x;exports.C2Checkbox=g;
