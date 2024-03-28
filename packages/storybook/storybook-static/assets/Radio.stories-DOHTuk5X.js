import{g as b,c as d,j as x,k as C,l as R,u as h}from"./vue.esm-bundler-C0PuLcVh.js";import{i as y}from"./inArray-BLmbg9f_-Da-N6vMw.js";import{i as B,s as k,t as z}from"./props-DTzsiaKN-CfRpMroS.js";import{x as q}from"./C2Image-script-BXBHuJTE.js";import{b as A}from"./C2Progress-script-D32IRNn7.js";import{B as V}from"./C2FieldMessage-script-ArJmprZd.js";import{c as I,a as T}from"./checkbox-D6gpyAij.js";import{i as _,a as w}from"./values-B4iSBSEf.js";import{a as j}from"./checkbox-ZBReqGHi.js";import"./useEnabled-BTR3ciPG-D572bbZq.js";import"./DesignConstructorAbstract-pm1V7i1G-AwalHq2u.js";import"./getBind-CgHMfjrB-D9Fn5VDR.js";import"./isArray-QlWcxgml-TsNjkBGN.js";import"./isFilled-ClO-1E4U-BUdjZhTW.js";import"./isNull-CjWwlQS3-GxMmF9sj.js";import"./useInputCheck-DS0d910p-x1LBU4vD.js";import"./GeoIntl-DH3GBVnO-Ba8p-fOD.js";import"./toNumber-eA5ODeva-B35HWKKW.js";import"./DataStorage-BS0mwKb9-CnrN-7_f.js";import"./getElement-uQ-JTFk--VVvc7s1q.js";import"./createElement-Bvijtmfm-bdgvASHc.js";import"./FieldMessageDesign-BdZzFt32-Drc35n5g.js";import"./props-CpiO6YEk-BvInzHmp.js";import"./DesignAsyncAbstract-Bi5cMulT-_fSgJIaJ.js";import"./GeoFlag-DfvLx1lW-BCKykf8X.js";import"./EventItem-CNRiCeQO-Z63F0Mu0.js";import"./props-CpvvQJ8b-C-ux5dyN.js";import"./category-CNhBE4DO.js";import"./fieldMessage-d4_rHpd-.js";var D=Object.defineProperty,O=(o,e,a)=>e in o?D(o,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[e]=a,S=(o,e,a)=>(O(o,typeof e!="symbol"?e+"":e,a),a);class $ extends z{constructor(){super(...arguments),S(this,"type","radio")}}const E={...k},n={...B,required:Boolean,right:Boolean,focus:Boolean,disabled:Boolean},G={size:["sm","md","lg"]},r={...E,iconCheckbox:"status-dot",iconIndeterminate:"status-dot",size:"md"},P={...n,iconCheckbox:{type:n.iconCheckbox,default:r.iconCheckbox},iconIndeterminate:{type:n.iconIndeterminate,default:r.iconIndeterminate},required:Boolean,right:Boolean,size:{type:String,default:r==null?void 0:r.size},focus:Boolean,disabled:Boolean},F=b({name:"C2Radio",__name:"C2Radio",props:{...P},emits:["input","update:value","update:modelValue","change"],setup(o,{expose:e,emit:a}){const u=a,i=o,g=d(()=>({main:{"c2-radio":!0,"c2-radio--required":i.required,"c2-radio--right":i.right,[`c2-radio--size--${i.size}`]:y(G.size,i.size),"c2-radio--focus":i.focus,"c2-radio--disabled":i.disabled}})),v=d(()=>({})),s=new $("c2.radio",i,{emits:u,components:{icon:q,progress:A,message:V},classes:g,styles:v}),f=s.render();return e(s.expose()),(Q,U)=>(x(),C(R(h(f))))}}),l=F,H=(o=_)=>({...I(o)}),J=T,K={main:{title:"Radio",description:{main:"Радиокнопки позволяют людям выбирать один вариант из набора вариантов."}}},L={...H(w),size:j.size},M=J,N=K,qo={title:"C2/Radio",component:l,tags:["autodocs"],parameters:{design:"c2",docs:{description:{component:N.main.description.main}}},argTypes:L,args:M},t={render:o=>({components:{C2Radio:l},setup(){return{args:o}},template:`
      <div class="flex flex-col gap-2">
        <C2Radio name="radio" value-variant="radio1" v-bind="args"/>
        <C2Radio name="radio" value-variant="radio2" v-bind="args"/>
        <C2Radio name="radio" value-variant="radio3" v-bind="args"/>
      </div>
    `})};var m,c,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      C2Radio
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="flex flex-col gap-2">
        <C2Radio name="radio" value-variant="radio1" v-bind="args"/>
        <C2Radio name="radio" value-variant="radio2" v-bind="args"/>
        <C2Radio name="radio" value-variant="radio3" v-bind="args"/>
      </div>
    \`
  })
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const Ao=["Radio"];export{t as Radio,Ao as __namedExportsOrder,qo as default};
