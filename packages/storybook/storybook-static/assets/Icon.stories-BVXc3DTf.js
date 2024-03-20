import{s as p}from"./vue.esm-bundler-DKn_-kmd.js";import{$ as c}from"./C2Icon-script-Bm5Q8US7.js";import{S as l,a as m}from"./category-CNhBE4DO.js";import{c as T,e as _,g as z,h as V}from"./icon-JKHqKBwu.js";import{a as k}from"./values-B4iSBSEf.js";import{d as E}from"./props-CsESFwpU.js";const e={animationType:["type1","type2"],variation:["icon","payment","avatar","country"],shape:["rect","circle","box"],size:["12","16","20","24","32"]},r={...E,animationType:"type1",variation:"icon",shape:"box",size:"24"},R={...T(e,r,k),variation:{control:l.select,options:e.variation,table:{category:m.token,defaultValue:{summary:r.variation},type:{summary:e.variation.join(" | ")}}},shape:{control:l.select,options:e.shape,table:{category:m.token,defaultValue:{summary:r.shape},type:{summary:e.shape.join(" | ")}}},size:_(e,r)},O={...z,icon:"notification",iconActive:"notification-off"},G=V,L={title:"C2/Icon",component:c,parameters:{design:"c2"},argTypes:R,args:O},a={},t={name:"Список иконок",render:n=>({components:{C2Icon:c},setup(){return{args:n,icons:k}},template:`
      <div class="columns-3 w-full">
        <div
          v-for="(icon, key) of icons"
          :key="key"
          class="flex gap-2 text-center"
        >
          <c2-icon v-bind="args" :icon="icon"/>
          <span>{{ icon }}</span>
        </div>
      </div>
    `})},o={name:"Active",render:()=>({components:{C2Icon:c},setup(){const n=p(!1);return setInterval(()=>{n.value=!n.value},1e3),{active:n}},template:`
      <div class="flex items-center justify-center gap-4">
        <C2Icon
          :active="active"
          icon="location-pointer"
          icon-active="location-pointer-off"
        />
      </div>
    `})},s={name:"AnimationType",render:()=>({components:{C2Icon:c},setup(){const n=p(!1);return setInterval(()=>{n.value=!n.value},1e3),{hide:n}},template:`
      <div class="flex flex-col items-center justify-center gap-4">
        <div class="p-2 border">
          <div class="flex flex-wrap items-center justify-center gap-2">
            <C2Icon
              :hide="hide"
              icon="image-01"
              animation-type="type1"
            />
            <span>animation-type: type1</span>
          </div>
        </div>
        <div class="p-2 border">
          <div class="flex flex-wrap items-center justify-center gap-2">
            <C2Icon
              :hide="hide"
              icon="image-01"
              animation-type="type2"
            />
            <span>animation-type: type2</span>
          </div>
        </div>
      </div>
    `})},i={name:"AnimationShow",render:()=>({components:{C2Icon:c},setup(){const n=p(!0);return setInterval(()=>{n.value=!n.value},1e3),{show:n}},template:`
      <div class="flex flex-col items-center justify-center gap-4">
        <div class="p-2 border">
          <div class="flex flex-wrap items-center justify-center gap-2">
            <C2Icon
              v-if="show"
              icon="image-01"
              :animation-show="false"
            />
            <span>animation-show: false</span>
          </div>
        </div>
        <div class="p-2 border">
          <div class="flex flex-wrap items-center justify-center gap-2">
            <C2Icon
              v-if="show"
              icon="image-01"
              :animation-show="true"
            />
            <span>animation-show: true</span>
          </div>
        </div>
      </div>
    `})};var d,v,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(u=(v=a.parameters)==null?void 0:v.docs)==null?void 0:u.source}}};var f,y,g;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Список иконок',
  render: (args: any) => ({
    components: {
      C2Icon
    },
    setup() {
      return {
        args,
        icons
      };
    },
    template: \`
      <div class="columns-3 w-full">
        <div
          v-for="(icon, key) of icons"
          :key="key"
          class="flex gap-2 text-center"
        >
          <c2-icon v-bind="args" :icon="icon"/>
          <span>{{ icon }}</span>
        </div>
      </div>
    \`
  })
}`,...(g=(y=t.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var h,I,x;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Active',
  render: () => ({
    components: {
      C2Icon
    },
    setup() {
      const active = shallowRef(false);
      setInterval(() => {
        active.value = !active.value;
      }, 1000);
      return {
        active
      };
    },
    template: \`
      <div class="flex items-center justify-center gap-4">
        <C2Icon
          :active="active"
          icon="location-pointer"
          icon-active="location-pointer-off"
        />
      </div>
    \`
  })
}`,...(x=(I=o.parameters)==null?void 0:I.docs)==null?void 0:x.source}}};var w,C,b;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'AnimationType',
  render: () => ({
    components: {
      C2Icon
    },
    setup() {
      const hide = shallowRef(false);
      setInterval(() => {
        hide.value = !hide.value;
      }, 1000);
      return {
        hide
      };
    },
    template: \`
      <div class="flex flex-col items-center justify-center gap-4">
        <div class="p-2 border">
          <div class="flex flex-wrap items-center justify-center gap-2">
            <C2Icon
              :hide="hide"
              icon="image-01"
              animation-type="type1"
            />
            <span>animation-type: type1</span>
          </div>
        </div>
        <div class="p-2 border">
          <div class="flex flex-wrap items-center justify-center gap-2">
            <C2Icon
              :hide="hide"
              icon="image-01"
              animation-type="type2"
            />
            <span>animation-type: type2</span>
          </div>
        </div>
      </div>
    \`
  })
}`,...(b=(C=s.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var A,j,S;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'AnimationShow',
  render: () => ({
    components: {
      C2Icon
    },
    setup() {
      const show = shallowRef(true);
      setInterval(() => {
        show.value = !show.value;
      }, 1000);
      return {
        show
      };
    },
    template: \`
      <div class="flex flex-col items-center justify-center gap-4">
        <div class="p-2 border">
          <div class="flex flex-wrap items-center justify-center gap-2">
            <C2Icon
              v-if="show"
              icon="image-01"
              :animation-show="false"
            />
            <span>animation-show: false</span>
          </div>
        </div>
        <div class="p-2 border">
          <div class="flex flex-wrap items-center justify-center gap-2">
            <C2Icon
              v-if="show"
              icon="image-01"
              :animation-show="true"
            />
            <span>animation-show: true</span>
          </div>
        </div>
      </div>
    \`
  })
}`,...(S=(j=i.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};const $=["Icon","IconList","IconActive","IconAnimationType","IconAnimationShow"],H=Object.freeze(Object.defineProperty({__proto__:null,Icon:a,IconActive:o,IconAnimationShow:i,IconAnimationType:s,IconList:t,__namedExportsOrder:$,default:L},Symbol.toStringTag,{value:"Module"}));export{H as I,a,t as b,G as c,o as d,s as e,i as f};
