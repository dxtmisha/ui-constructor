"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("vue"),r=require("./props-CQsGUVdp.cjs"),d=require("./C2Image.umd.cjs"),h=require("./C2Progress.umd.cjs"),p=require("./C2FieldMessage.umd.cjs");class g extends r.CheckboxDesign{constructor(s,o,i){super(s,o,i)}renderSwitch(){const s=this.setup();return e.h("span",{class:s.classes.value.track},[this.renderChecked()])}initSetup(){return{...super.initSetup(),renderChecked:()=>this.renderSwitch()}}initClasses(){return{main:{},input:this.getSubClass("input"),body:this.getSubClass("body"),item:this.getSubClass("item"),itemIcon:this.getSubClass("item__icon"),loading:this.getSubClass("loading"),info:this.getSubClass("info"),infoLabel:this.getSubClass("info__label"),track:this.getSubClass("track")}}}const C={...r.propsCheckbox,required:Boolean,right:Boolean,focus:Boolean,disabled:Boolean},m={...C,required:Boolean,right:Boolean,focus:Boolean,disabled:Boolean},b=e.defineComponent({name:"C2Switch",__name:"C2Switch",props:{...m},emits:["input","update:value","update:modelValue","change"],setup(n,{expose:s,emit:o}){const i=o,t=n,a=e.computed(()=>({main:{"c2-switch":!0,"c2-switch--required":t.required,"c2-switch--right":t.right,"c2-switch--focus":t.focus,"c2-switch--disabled":t.disabled}})),u=e.computed(()=>({})),c=new g("c2.switch",t,{emits:i,components:{icon:d.C2Image,progress:h.C2Progress,message:p.C2FieldMessage},classes:a,styles:u}),l=c.render();return s(c.expose()),(w,f)=>(e.openBlock(),e.createBlock(e.resolveDynamicComponent(e.unref(l))))}}),S=b;exports.C2Switch=S;
