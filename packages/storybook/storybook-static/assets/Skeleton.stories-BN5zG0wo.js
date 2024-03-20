import{w as u}from"./C2Button-script-Dy-442_m.js";import{M as x}from"./C2Checkbox-script-D3qt8lO1.js";import{x as g}from"./C2Image-script-DJB3rZS7.js";import{g as f,c as n,j as b,k as C,l as B,u as T}from"./vue.esm-bundler-DKn_-kmd.js";import{x as h,N as S,s as y,a as w,b as j}from"./skeleton-CbfsPnAo.js";import{b as L}from"./values-B4iSBSEf.js";import"./inArray-BLmbg9f_-Da-N6vMw.js";import"./props-CpUbgiGH-cDV5n-S7.js";import"./DesignConstructorAbstract-pm1V7i1G-DKYGky5W.js";import"./useEnabled-BTR3ciPG-BYSamwcS.js";import"./getBind-CgHMfjrB-mdqCrtd3.js";import"./eventStopPropagation-fHm2p5BF-D53V-aZD.js";import"./C2Icon-script-Bm5Q8US7.js";import"./props-5ohlAg-W-CvoNuT0a.js";import"./C2Progress-script-CNiQBQz_.js";import"./props-CpvvQJ8b-BW9Rwh9M.js";import"./toNumber-eA5ODeva-B35HWKKW.js";import"./DesignAsyncAbstract-Bi5cMulT-_fSgJIaJ.js";import"./isArray-QlWcxgml-TsNjkBGN.js";import"./props-DTzsiaKN-BiI7jQmt.js";import"./isFilled-ClO-1E4U-BUdjZhTW.js";import"./isNull-CjWwlQS3-GxMmF9sj.js";import"./useInputCheck-DS0d910p-eprLVnsr.js";import"./GeoIntl-DH3GBVnO-Ba8p-fOD.js";import"./DataStorage-BS0mwKb9-CnrN-7_f.js";import"./getElement-uQ-JTFk--VVvc7s1q.js";import"./createElement-Bvijtmfm-DCzadBt_.js";import"./FieldMessageDesign-BdZzFt32-DrCUyb2g.js";import"./C2FieldMessage-script-C-_fOCiy.js";import"./props-CpiO6YEk-DlqqMfTs.js";import"./GeoFlag-DfvLx1lW-DVZop2nR.js";import"./EventItem-CNRiCeQO-BBiOwxAe.js";import"./category-CNhBE4DO.js";const _={...S,active:Boolean},A=f({name:"C2Skeleton",__name:"C2Skeleton",props:{..._},setup(s,{expose:l,emit:p}){const m=p,t=s,d=n(()=>({main:{"c2-skeleton":!0,"c2-skeleton--active":t.active}})),v=n(()=>({})),o=new h("c2.skeleton",t,{emits:m,classes:d,styles:v}),k=o.render();return l(o.expose()),(E,M)=>(b(),C(B(T(k))))}}),i=A,I=y,V=w,D=j,ue={title:"C2/Skeleton",component:i,tags:["autodocs"],parameters:{design:"c2",docs:{description:{component:D.main.description.main}}},argTypes:I,args:V},e={render:s=>({components:{C2Button:u,C2Checkbox:x,C2Image:g,C2Skeleton:i},setup(){return{args:s,imageLink1:L}},template:`
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
