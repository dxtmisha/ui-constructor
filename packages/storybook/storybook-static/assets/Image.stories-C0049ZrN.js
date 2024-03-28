import{r as M}from"./vue.esm-bundler-C0PuLcVh.js";import"./GeoIntl-DH3GBVnO-Ba8p-fOD.js";import"./index-BBzsnUaj-BTIJPPFS.js";import{g as o}from"./GeoFlag-DfvLx1lW-BCKykf8X.js";import{x as e}from"./C2Image-script-BXBHuJTE.js";import{i as O,a as K,b as X}from"./image-psPrCwtn.js";const B=O,H=K,ie=X,U=""+new URL("DX12-28-DCVgwRE-.png",import.meta.url).href,_=""+new URL("FX135-GtEBOyms.png",import.meta.url).href,R=""+new URL("Galaxy_Z_Fold5-CM27KV1l.png",import.meta.url).href,D=""+new URL("Galaxy_Z_Flip5-Chntpe4G.png",import.meta.url).href,r=""+new URL("Galaxy_S23p-DHEuDs2-.png",import.meta.url).href,E=""+new URL("pad-DVvNoKPd.png",import.meta.url).href,P=""+new URL("coralclub-Ce5bokMW.svg",import.meta.url).href,k=""+new URL("doc-CEYSVp7E.pdf",import.meta.url).href,N=""+new URL("photo-BfKo26Xn.jpg",import.meta.url).href,W={title:"C2/Image",component:e,parameters:{design:"c2"},argTypes:B,args:H},a={},i={render:()=>({components:{C2Image:e},setup(){return{galaxyS23p:r,coralclub:P,doc:k}},template:`
      <div class="flex flex-wrap items-center justify-center gap-2">
        <div class="p-2 border">
          <div class="pb-2 text-center">Icon</div>
          <div class="relative w-48 h-48">
            <C2Image value="home"/>
          </div>
        </div>
        <div class="p-2 border">
          <div class="pb-2 text-center">Image</div>
          <div class="relative w-48 h-48">
            <C2Image :value="galaxyS23p" size="contain"/>
          </div>
        </div>
        <div class="p-2 border">
          <div class="pb-2 text-center">Image/ SVG</div>
          <div class="relative w-48 h-48">
            <C2Image :value="coralclub" size="contain"/>
          </div>
        </div>
        <div class="p-2 border">
          <div class="pb-2 text-center">PDF</div>
          <div class="relative w-48 h-48">
            <C2Image :value="doc"/>
          </div>
        </div>
      </div>
    `})},n={name:"Value/ icon",render:()=>({components:{C2Image:e},setup(){return o.add("icon-image",r),o.add("icon-svg",P),{}},template:`
      <div class="flex flex-wrap items-center justify-center gap-2">
        <div class="p-2 border">
          <div class="pb-2 text-center">Icon/ image</div>
          <div class="relative w-48 h-48">
            <C2Image value="icon-image"/>
          </div>
        </div>
        <div class="p-2 border">
          <div class="pb-2 text-center">Icon/ SVG</div>
          <div class="relative w-48 h-48">
            <C2Image value="icon-svg"/>
          </div>
        </div>
      </div>
    `})},t={name:"Value/ unloaded",render:()=>({components:{C2Image:e},setup(){const l=M();return{file:l,onInput:({target:T})=>{var c;l.value=(c=T.files)==null?void 0:c[0]}}},template:`
      <div class="flex flex-wrap items-center justify-center gap-2">
        <div class="p-2 border">
          <div class="pb-2">Input</div>
          <input type="file" accept="application/pdf, image/*" @input="onInput">
        </div>
        <div class="p-2 border">
          <div class="relative w-72 h-72">
            <C2Image :value="file" size="contain"/>
          </div>
        </div>
      </div>
    `})},s={render:()=>({components:{C2Image:e},setup(){return{photo:N}},template:`
      <div class="flex items-center justify-center gap-4">
        <div class="p-2 border">
          <div class="pb-2 text-center">Standard</div>
          <div class="flex flex-wrap items-center justify-center gap-2">
            <div class="relative w-72 h-44">
              <C2Image :value="photo"/>
            </div>
            <div class="relative w-44 h-44">
              <C2Image :value="photo"/>
            </div>
            <div class="relative w-44 h-72">
              <C2Image :value="photo"/>
            </div>
            <div class="relative w-72 h-32">
              <C2Image :value="photo"/>
            </div>
          </div>
        </div>
        <div class="p-2 border">
          <div class="pb-2 text-center">Coordinator: [5,5,5,50]</div>
          <div class="flex flex-wrap items-center justify-center gap-2">
            <div class="relative w-72 h-44">
              <C2Image :value="photo" :coordinator="[5,5,5,50]"/>
            </div>
            <div class="relative w-44 h-44">
              <C2Image :value="photo" :coordinator="[5,5,5,50]"/>
            </div>
            <div class="relative w-44 h-72">
              <C2Image :value="photo" :coordinator="[5,5,5,50]"/>
            </div>
            <div class="relative w-72 h-32">
              <C2Image :value="photo" :coordinator="[5,5,5,50]"/>
            </div>
          </div>
        </div>
      </div>
    `})},d={render:()=>({components:{C2Image:e},setup(){return{dx1228:U,fx135:_,galaxyS23p:r,galaxyZFlip5:D,galaxyZFold5:R,pad:E}},template:`
      <div class="flex items-center justify-center gap-4">
        <div class="p-2 border">
          <div class="pb-2 text-center">Standard</div>
          <div class="flex flex-wrap items-center justify-center gap-2">
            <div class="relative w-64 h-48">
              <C2Image :value="dx1228" size="contain"/>
            </div>
            <div class="relative w-64 h-48">
              <C2Image :value="fx135" size="contain"/>
            </div>
            <div class="relative w-48 h-48">
              <C2Image :value="galaxyS23p" size="contain"/>
            </div>
            <div class="relative w-48 h-48">
              <C2Image :value="galaxyZFlip5" size="contain"/>
            </div>
            <div class="relative w-48 h-48">
              <C2Image :value="galaxyZFold5" size="contain"/>
            </div>
            <div class="relative w-48 h-48">
              <C2Image :value="pad" size="contain"/>
            </div>
          </div>
        </div>
        <div class="p-2 border">
          <div class="pb-2 text-center">Adaptive</div>
          <div class="flex flex-wrap items-center justify-center gap-2">
            <div class="relative w-64 h-48">
              <C2Image :value="dx1228" adaptive object-width="63.5"/>
            </div>
            <div class="relative w-64 h-48">
              <C2Image :value="fx135" adaptive object-width="139.5"/>
            </div>
            <div class="relative w-48 h-48">
              <C2Image :value="galaxyS23p" adaptive object-width="76.2"/>
            </div>
            <div class="relative w-48 h-48">
              <C2Image :value="galaxyZFlip5" adaptive object-width="71.9"/>
            </div>
            <div class="relative w-48 h-48">
              <C2Image :value="galaxyZFold5" adaptive object-width="129.9"/>
            </div>
            <div class="relative w-48 h-48">
              <C2Image :value="pad" adaptive object-width="254.3"/>
            </div>
          </div>
        </div>
      </div>
    `})},v={name:"Adaptive/ group",render:()=>({components:{C2Image:e},setup(){return{dx1228:U,fx135:_,galaxyS23p:r,galaxyZFlip5:D,galaxyZFold5:R,pad:E}},template:`
      <div class="flex items-center justify-center gap-4">
        <div class="p-2 border">
          <div class="pb-2 text-center">Lens</div>
          <div class="flex flex-wrap items-center justify-center gap-2">
            <div class="relative w-64 h-48">
              <C2Image :value="dx1228" adaptive adaptive-group="lens" object-width="63.5"/>
            </div>
            <div class="relative w-64 h-48">
              <C2Image :value="fx135" adaptive adaptive-group="lens" object-width="139.5"/>
            </div>
          </div>
        </div>
        <div class="p-2 border">
          <div class="pb-2 text-center">Phone</div>
          <div class="flex flex-wrap items-center justify-center gap-2">
            <div class="relative w-48 h-48">
              <C2Image :value="galaxyS23p" adaptive adaptive-group="phone" object-width="76.2"/>
            </div>
            <div class="relative w-48 h-48">
              <C2Image :value="pad" adaptive adaptive-group="phone" object-width="254.3"/>
            </div>
          </div>
        </div>
      </div>
    `})};var p,m,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,h,x;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => ({
    components: {
      C2Image
    },
    setup() {
      return {
        galaxyS23p,
        coralclub,
        doc
      };
    },
    template: \`
      <div class="flex flex-wrap items-center justify-center gap-2">
        <div class="p-2 border">
          <div class="pb-2 text-center">Icon</div>
          <div class="relative w-48 h-48">
            <C2Image value="home"/>
          </div>
        </div>
        <div class="p-2 border">
          <div class="pb-2 text-center">Image</div>
          <div class="relative w-48 h-48">
            <C2Image :value="galaxyS23p" size="contain"/>
          </div>
        </div>
        <div class="p-2 border">
          <div class="pb-2 text-center">Image/ SVG</div>
          <div class="relative w-48 h-48">
            <C2Image :value="coralclub" size="contain"/>
          </div>
        </div>
        <div class="p-2 border">
          <div class="pb-2 text-center">PDF</div>
          <div class="relative w-48 h-48">
            <C2Image :value="doc"/>
          </div>
        </div>
      </div>
    \`
  })
}`,...(x=(h=i.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var w,f,I;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Value/ icon',
  render: () => ({
    components: {
      C2Image
    },
    setup() {
      Icons.add('icon-image', galaxyS23p);
      Icons.add('icon-svg', coralclub);
      return {};
    },
    template: \`
      <div class="flex flex-wrap items-center justify-center gap-2">
        <div class="p-2 border">
          <div class="pb-2 text-center">Icon/ image</div>
          <div class="relative w-48 h-48">
            <C2Image value="icon-image"/>
          </div>
        </div>
        <div class="p-2 border">
          <div class="pb-2 text-center">Icon/ SVG</div>
          <div class="relative w-48 h-48">
            <C2Image value="icon-svg"/>
          </div>
        </div>
      </div>
    \`
  })
}`,...(I=(f=n.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var b,C,y;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Value/ unloaded',
  render: () => ({
    components: {
      C2Image
    },
    setup() {
      const file = ref();
      return {
        file,
        onInput: ({
          target
        }: {
          target: HTMLInputElement;
        }) => {
          file.value = target.files?.[0];
        }
      };
    },
    template: \`
      <div class="flex flex-wrap items-center justify-center gap-2">
        <div class="p-2 border">
          <div class="pb-2">Input</div>
          <input type="file" accept="application/pdf, image/*" @input="onInput">
        </div>
        <div class="p-2 border">
          <div class="relative w-72 h-72">
            <C2Image :value="file" size="contain"/>
          </div>
        </div>
      </div>
    \`
  })
}`,...(y=(C=t.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var j,S,V;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => ({
    components: {
      C2Image
    },
    setup() {
      return {
        photo
      };
    },
    template: \`
      <div class="flex items-center justify-center gap-4">
        <div class="p-2 border">
          <div class="pb-2 text-center">Standard</div>
          <div class="flex flex-wrap items-center justify-center gap-2">
            <div class="relative w-72 h-44">
              <C2Image :value="photo"/>
            </div>
            <div class="relative w-44 h-44">
              <C2Image :value="photo"/>
            </div>
            <div class="relative w-44 h-72">
              <C2Image :value="photo"/>
            </div>
            <div class="relative w-72 h-32">
              <C2Image :value="photo"/>
            </div>
          </div>
        </div>
        <div class="p-2 border">
          <div class="pb-2 text-center">Coordinator: [5,5,5,50]</div>
          <div class="flex flex-wrap items-center justify-center gap-2">
            <div class="relative w-72 h-44">
              <C2Image :value="photo" :coordinator="[5,5,5,50]"/>
            </div>
            <div class="relative w-44 h-44">
              <C2Image :value="photo" :coordinator="[5,5,5,50]"/>
            </div>
            <div class="relative w-44 h-72">
              <C2Image :value="photo" :coordinator="[5,5,5,50]"/>
            </div>
            <div class="relative w-72 h-32">
              <C2Image :value="photo" :coordinator="[5,5,5,50]"/>
            </div>
          </div>
        </div>
      </div>
    \`
  })
}`,...(V=(S=s.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var z,F,Z;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => ({
    components: {
      C2Image
    },
    setup() {
      return {
        dx1228,
        fx135,
        galaxyS23p,
        galaxyZFlip5,
        galaxyZFold5,
        pad
      };
    },
    template: \`
      <div class="flex items-center justify-center gap-4">
        <div class="p-2 border">
          <div class="pb-2 text-center">Standard</div>
          <div class="flex flex-wrap items-center justify-center gap-2">
            <div class="relative w-64 h-48">
              <C2Image :value="dx1228" size="contain"/>
            </div>
            <div class="relative w-64 h-48">
              <C2Image :value="fx135" size="contain"/>
            </div>
            <div class="relative w-48 h-48">
              <C2Image :value="galaxyS23p" size="contain"/>
            </div>
            <div class="relative w-48 h-48">
              <C2Image :value="galaxyZFlip5" size="contain"/>
            </div>
            <div class="relative w-48 h-48">
              <C2Image :value="galaxyZFold5" size="contain"/>
            </div>
            <div class="relative w-48 h-48">
              <C2Image :value="pad" size="contain"/>
            </div>
          </div>
        </div>
        <div class="p-2 border">
          <div class="pb-2 text-center">Adaptive</div>
          <div class="flex flex-wrap items-center justify-center gap-2">
            <div class="relative w-64 h-48">
              <C2Image :value="dx1228" adaptive object-width="63.5"/>
            </div>
            <div class="relative w-64 h-48">
              <C2Image :value="fx135" adaptive object-width="139.5"/>
            </div>
            <div class="relative w-48 h-48">
              <C2Image :value="galaxyS23p" adaptive object-width="76.2"/>
            </div>
            <div class="relative w-48 h-48">
              <C2Image :value="galaxyZFlip5" adaptive object-width="71.9"/>
            </div>
            <div class="relative w-48 h-48">
              <C2Image :value="galaxyZFold5" adaptive object-width="129.9"/>
            </div>
            <div class="relative w-48 h-48">
              <C2Image :value="pad" adaptive object-width="254.3"/>
            </div>
          </div>
        </div>
      </div>
    \`
  })
}`,...(Z=(F=d.parameters)==null?void 0:F.docs)==null?void 0:Z.source}}};var L,A,G;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Adaptive/ group',
  render: () => ({
    components: {
      C2Image
    },
    setup() {
      return {
        dx1228,
        fx135,
        galaxyS23p,
        galaxyZFlip5,
        galaxyZFold5,
        pad
      };
    },
    template: \`
      <div class="flex items-center justify-center gap-4">
        <div class="p-2 border">
          <div class="pb-2 text-center">Lens</div>
          <div class="flex flex-wrap items-center justify-center gap-2">
            <div class="relative w-64 h-48">
              <C2Image :value="dx1228" adaptive adaptive-group="lens" object-width="63.5"/>
            </div>
            <div class="relative w-64 h-48">
              <C2Image :value="fx135" adaptive adaptive-group="lens" object-width="139.5"/>
            </div>
          </div>
        </div>
        <div class="p-2 border">
          <div class="pb-2 text-center">Phone</div>
          <div class="flex flex-wrap items-center justify-center gap-2">
            <div class="relative w-48 h-48">
              <C2Image :value="galaxyS23p" adaptive adaptive-group="phone" object-width="76.2"/>
            </div>
            <div class="relative w-48 h-48">
              <C2Image :value="pad" adaptive adaptive-group="phone" object-width="254.3"/>
            </div>
          </div>
        </div>
      </div>
    \`
  })
}`,...(G=(A=v.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};const Y=["Image","Value","ValueIcon","ValueUnloaded","Coordinator","Adaptive","AdaptiveGroup"],ne=Object.freeze(Object.defineProperty({__proto__:null,Adaptive:d,AdaptiveGroup:v,Coordinator:s,Image:a,Value:i,ValueIcon:n,ValueUnloaded:t,__namedExportsOrder:Y,default:W},Symbol.toStringTag,{value:"Module"}));export{d as A,s as C,ne as I,i as V,a,n as b,ie as c,t as d,v as e};
