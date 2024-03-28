import{G as k}from"./M2Button-script-DXmBH0-J.js";import{b as g}from"./M2Image-script-C36D88Uu.js";import{g as f,c as o,j as x,k as B,l as b,u as S}from"./vue.esm-bundler-C0PuLcVh.js";import{x as T,N as y,s as M,a as h,b as w}from"./skeleton-DACZO-0o.js";import{b as L}from"./values-B4iSBSEf.js";import"./inArray-BLmbg9f_-Da-N6vMw.js";import"./props-CpUbgiGH-Dwc9uvwy.js";import"./DesignConstructorAbstract-pm1V7i1G-AwalHq2u.js";import"./useEnabled-BTR3ciPG-D572bbZq.js";import"./getBind-CgHMfjrB-D9Fn5VDR.js";import"./eventStopPropagation-fHm2p5BF-D53V-aZD.js";import"./M2Icon-script-ABCmUtOf.js";import"./props-5ohlAg-W-nclBsaZA.js";import"./M2Progress-script-DPovr8sL.js";import"./props-CpvvQJ8b-C-ux5dyN.js";import"./toNumber-eA5ODeva-B35HWKKW.js";import"./DesignAsyncAbstract-Bi5cMulT-_fSgJIaJ.js";import"./isArray-QlWcxgml-TsNjkBGN.js";import"./M2Ripple-script-BJr_v6sr.js";import"./props-BPZFlFo0-CM5YBCpu.js";import"./createElement-Bvijtmfm-bdgvASHc.js";import"./getElement-uQ-JTFk--VVvc7s1q.js";import"./props-CpiO6YEk-BvInzHmp.js";import"./GeoIntl-DH3GBVnO-Ba8p-fOD.js";import"./isNull-CjWwlQS3-GxMmF9sj.js";import"./DataStorage-BS0mwKb9-CnrN-7_f.js";import"./GeoFlag-DfvLx1lW-BCKykf8X.js";import"./isFilled-ClO-1E4U-BUdjZhTW.js";import"./EventItem-CNRiCeQO-Z63F0Mu0.js";import"./category-CNhBE4DO.js";const j={...y,active:Boolean},_=f({name:"M2Skeleton",__name:"M2Skeleton",props:{...j},setup(s,{expose:m,emit:c}){const p=c,t=s,d=o(()=>({main:{"m2-skeleton":!0,"m2-skeleton--active":t.active}})),v=o(()=>({})),n=new T("m2.skeleton",t,{emits:p,classes:d,styles:v}),u=n.render();return m(n.expose()),(V,D)=>(x(),B(b(S(u))))}}),l=_,A=M,C=h,I=w,pe={title:"M2/Skeleton",component:l,tags:["autodocs"],parameters:{design:"m2",docs:{description:{component:I.main.description.main}}},argTypes:A,args:C},e={render:s=>({components:{M2Button:k,M2Image:g,M2Skeleton:l},setup(){return{args:s,imageLink1:L}},template:`
      <m2-skeleton class="flex items-center justify-center gap-2" v-bind="args">
        <template v-slot:default="{classText, classBackground, classBorder}">
          <div
            :class="classBorder"
            class="w-80 border rounded-md overflow-hidden"
          >
            <div :class="classBackground" class="relative h-60">
              <m2-image :value="imageLink1"/>
            </div>
            <div class="px-4 pt-4">
              <div :class="classText" class="m2-font--headline6">Title</div>
              <div :class="classText" class="pt-2">
                a spoken or written representation or account of a person.
              </div>
            </div>
            <div class="flex justify-end gap-2 p-4">
              <m2-button :class="classBackground" icon="home" label="Label"/>
            </div>
          </div>
        </template>
      </m2-skeleton>
    `})};var a,r,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      M2Button,
      M2Image,
      M2Skeleton
    },
    setup() {
      return {
        args,
        imageLink1
      };
    },
    template: \`
      <m2-skeleton class="flex items-center justify-center gap-2" v-bind="args">
        <template v-slot:default="{classText, classBackground, classBorder}">
          <div
            :class="classBorder"
            class="w-80 border rounded-md overflow-hidden"
          >
            <div :class="classBackground" class="relative h-60">
              <m2-image :value="imageLink1"/>
            </div>
            <div class="px-4 pt-4">
              <div :class="classText" class="m2-font--headline6">Title</div>
              <div :class="classText" class="pt-2">
                a spoken or written representation or account of a person.
              </div>
            </div>
            <div class="flex justify-end gap-2 p-4">
              <m2-button :class="classBackground" icon="home" label="Label"/>
            </div>
          </div>
        </template>
      </m2-skeleton>
    \`
  })
}`,...(i=(r=e.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const de=["Skeleton"];export{e as Skeleton,de as __namedExportsOrder,pe as default};
