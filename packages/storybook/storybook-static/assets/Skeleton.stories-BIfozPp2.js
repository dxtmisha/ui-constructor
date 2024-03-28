import{w as k}from"./M3Button-script-2hVGuqU5.js";import{b as g}from"./M3Image-script-DV-X7kKH.js";import{g as f,c as o,j as x,k as B,l as b,u as S}from"./vue.esm-bundler-C0PuLcVh.js";import{x as T,N as y,s as M,a as w,b as L}from"./skeleton-DACZO-0o.js";import{b as h}from"./values-B4iSBSEf.js";import"./inArray-BLmbg9f_-Da-N6vMw.js";import"./props-CpUbgiGH-Dwc9uvwy.js";import"./DesignConstructorAbstract-pm1V7i1G-AwalHq2u.js";import"./useEnabled-BTR3ciPG-D572bbZq.js";import"./getBind-CgHMfjrB-D9Fn5VDR.js";import"./eventStopPropagation-fHm2p5BF-D53V-aZD.js";import"./M3Icon-script-5CQlgdFd.js";import"./props-5ohlAg-W-nclBsaZA.js";import"./M3Progress-script-iewzvVgm.js";import"./props-CpvvQJ8b-C-ux5dyN.js";import"./toNumber-eA5ODeva-B35HWKKW.js";import"./DesignAsyncAbstract-Bi5cMulT-_fSgJIaJ.js";import"./isArray-QlWcxgml-TsNjkBGN.js";import"./props-CpiO6YEk-BvInzHmp.js";import"./GeoIntl-DH3GBVnO-Ba8p-fOD.js";import"./isNull-CjWwlQS3-GxMmF9sj.js";import"./DataStorage-BS0mwKb9-CnrN-7_f.js";import"./getElement-uQ-JTFk--VVvc7s1q.js";import"./GeoFlag-DfvLx1lW-BCKykf8X.js";import"./isFilled-ClO-1E4U-BUdjZhTW.js";import"./EventItem-CNRiCeQO-Z63F0Mu0.js";import"./category-CNhBE4DO.js";const j={...y,active:Boolean},_=f({name:"M3Skeleton",__name:"M3Skeleton",props:{...j},setup(s,{expose:m,emit:c}){const p=c,t=s,d=o(()=>({main:{"m3-skeleton":!0,"m3-skeleton--active":t.active}})),v=o(()=>({})),n=new T("m3.skeleton",t,{emits:p,classes:d,styles:v}),u=n.render();return m(n.expose()),(V,D)=>(x(),B(b(S(u))))}}),i=_,A=M,C=w,I=L,ie={title:"M3/Skeleton",component:i,tags:["autodocs"],parameters:{design:"m3",docs:{description:{component:I.main.description.main}}},argTypes:A,args:C},e={render:s=>({components:{M3Button:k,M3Image:g,M3Skeleton:i},setup(){return{args:s,imageLink1:h}},template:`
      <m3-skeleton class="flex items-center justify-center gap-2" v-bind="args">
        <template v-slot:default="{classText, classBackground, classBorder}">
          <div
            :class="classBorder"
            class="w-80 border rounded-md overflow-hidden"
          >
            <div :class="classBackground" class="relative h-60">
              <m3-image :value="imageLink1"/>
            </div>
            <div class="px-4 pt-4">
              <div :class="classText" class="m3-font--titleLarge">Title</div>
              <div :class="classText" class="pt-2">
                a spoken or written representation or account of a person.
              </div>
            </div>
            <div class="flex justify-end gap-2 p-4">
              <m3-button :class="classBackground" icon="home" label="Label"/>
            </div>
          </div>
        </template>
      </m3-skeleton>
    `})};var a,r,l;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      M3Button,
      M3Image,
      M3Skeleton
    },
    setup() {
      return {
        args,
        imageLink1
      };
    },
    template: \`
      <m3-skeleton class="flex items-center justify-center gap-2" v-bind="args">
        <template v-slot:default="{classText, classBackground, classBorder}">
          <div
            :class="classBorder"
            class="w-80 border rounded-md overflow-hidden"
          >
            <div :class="classBackground" class="relative h-60">
              <m3-image :value="imageLink1"/>
            </div>
            <div class="px-4 pt-4">
              <div :class="classText" class="m3-font--titleLarge">Title</div>
              <div :class="classText" class="pt-2">
                a spoken or written representation or account of a person.
              </div>
            </div>
            <div class="flex justify-end gap-2 p-4">
              <m3-button :class="classBackground" icon="home" label="Label"/>
            </div>
          </div>
        </template>
      </m3-skeleton>
    \`
  })
}`,...(l=(r=e.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const me=["Skeleton"];export{e as Skeleton,me as __namedExportsOrder,ie as default};
