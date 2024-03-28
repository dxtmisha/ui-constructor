import{w as u}from"./C2Button-script-D-5Ka75c.js";import{M as x}from"./C2Checkbox-script-CD6RIPTU.js";import{x as g}from"./C2Image-script-BXBHuJTE.js";import{g as f,c as n,j as b,k as C,l as B,u as T}from"./vue.esm-bundler-C0PuLcVh.js";import{x as h,N as S,s as y,a as w,b as j}from"./skeleton-DACZO-0o.js";import{b as L}from"./values-B4iSBSEf.js";import"./inArray-BLmbg9f_-Da-N6vMw.js";import"./props-CpUbgiGH-Dwc9uvwy.js";import"./DesignConstructorAbstract-pm1V7i1G-AwalHq2u.js";import"./useEnabled-BTR3ciPG-D572bbZq.js";import"./getBind-CgHMfjrB-D9Fn5VDR.js";import"./eventStopPropagation-fHm2p5BF-D53V-aZD.js";import"./C2Icon-script-Di4Ef8br.js";import"./props-5ohlAg-W-nclBsaZA.js";import"./C2Progress-script-D32IRNn7.js";import"./props-CpvvQJ8b-C-ux5dyN.js";import"./toNumber-eA5ODeva-B35HWKKW.js";import"./DesignAsyncAbstract-Bi5cMulT-_fSgJIaJ.js";import"./isArray-QlWcxgml-TsNjkBGN.js";import"./props-DTzsiaKN-CfRpMroS.js";import"./isFilled-ClO-1E4U-BUdjZhTW.js";import"./isNull-CjWwlQS3-GxMmF9sj.js";import"./useInputCheck-DS0d910p-x1LBU4vD.js";import"./GeoIntl-DH3GBVnO-Ba8p-fOD.js";import"./DataStorage-BS0mwKb9-CnrN-7_f.js";import"./getElement-uQ-JTFk--VVvc7s1q.js";import"./createElement-Bvijtmfm-bdgvASHc.js";import"./FieldMessageDesign-BdZzFt32-Drc35n5g.js";import"./C2FieldMessage-script-ArJmprZd.js";import"./props-CpiO6YEk-BvInzHmp.js";import"./GeoFlag-DfvLx1lW-BCKykf8X.js";import"./EventItem-CNRiCeQO-Z63F0Mu0.js";import"./category-CNhBE4DO.js";const _={...S,active:Boolean},A=f({name:"C2Skeleton",__name:"C2Skeleton",props:{..._},setup(s,{expose:l,emit:p}){const m=p,t=s,d=n(()=>({main:{"c2-skeleton":!0,"c2-skeleton--active":t.active}})),v=n(()=>({})),o=new h("c2.skeleton",t,{emits:m,classes:d,styles:v}),k=o.render();return l(o.expose()),(E,M)=>(b(),C(B(T(k))))}}),i=A,I=y,V=w,D=j,ue={title:"C2/Skeleton",component:i,tags:["autodocs"],parameters:{design:"c2",docs:{description:{component:D.main.description.main}}},argTypes:I,args:V},e={render:s=>({components:{C2Button:u,C2Checkbox:x,C2Image:g,C2Skeleton:i},setup(){return{args:s,imageLink1:L}},template:`
      <c2-skeleton class="flex items-center justify-center gap-2" v-bind="args">
        <template v-slot:default="{classText, classBackground, classBorder}">
          <div
            :class="classBorder"
            class="w-80 border rounded-md overflow-hidden"
          >
            <div :class="classBackground" class="relative h-60">
              <c2-image :value="imageLink1"/>
            </div>
            <div class="px-4 pt-4">
              <div :class="classText" class="c2-font--display">Title</div>
              <div :class="classText" class="pt-2">
                a spoken or written representation or account of a person.
              </div>
              <div :class="classText" class="pt-6">
                <c2-checkbox label="Checkbox"/>
              </div>
            </div>
            <div class="flex justify-end gap-2 p-4">
              <c2-button icon="home" label="Button"/>
            </div>
          </div>
        </template>
      </c2-skeleton>
    `})};var a,r,c;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      C2Button,
      C2Checkbox,
      C2Image,
      C2Skeleton
    },
    setup() {
      return {
        args,
        imageLink1
      };
    },
    template: \`
      <c2-skeleton class="flex items-center justify-center gap-2" v-bind="args">
        <template v-slot:default="{classText, classBackground, classBorder}">
          <div
            :class="classBorder"
            class="w-80 border rounded-md overflow-hidden"
          >
            <div :class="classBackground" class="relative h-60">
              <c2-image :value="imageLink1"/>
            </div>
            <div class="px-4 pt-4">
              <div :class="classText" class="c2-font--display">Title</div>
              <div :class="classText" class="pt-2">
                a spoken or written representation or account of a person.
              </div>
              <div :class="classText" class="pt-6">
                <c2-checkbox label="Checkbox"/>
              </div>
            </div>
            <div class="flex justify-end gap-2 p-4">
              <c2-button icon="home" label="Button"/>
            </div>
          </div>
        </template>
      </c2-skeleton>
    \`
  })
}`,...(c=(r=e.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};const xe=["Skeleton"];export{e as Skeleton,xe as __namedExportsOrder,ue as default};
