import{g as $,c as b,j as G,k as X,l as L,u as _,r as R}from"./vue.esm-bundler-C0PuLcVh.js";import{w as d}from"./M3Button-script-2hVGuqU5.js";import{t as g}from"./isFilled-ClO-1E4U-BUdjZhTW.js";import{i as t}from"./inArray-BLmbg9f_-Da-N6vMw.js";import{u as V,e as j,s as q,w as z,a as H,b as J}from"./window-CRlQUzei.js";import{M as K}from"./M3Scrollbar-script-CqkAG0qo.js";import"./props-CpUbgiGH-Dwc9uvwy.js";import"./DesignConstructorAbstract-pm1V7i1G-AwalHq2u.js";import"./useEnabled-BTR3ciPG-D572bbZq.js";import"./getBind-CgHMfjrB-D9Fn5VDR.js";import"./eventStopPropagation-fHm2p5BF-D53V-aZD.js";import"./M3Icon-script-5CQlgdFd.js";import"./props-5ohlAg-W-nclBsaZA.js";import"./M3Image-script-DV-X7kKH.js";import"./props-CpiO6YEk-BvInzHmp.js";import"./GeoIntl-DH3GBVnO-Ba8p-fOD.js";import"./isNull-CjWwlQS3-GxMmF9sj.js";import"./toNumber-eA5ODeva-B35HWKKW.js";import"./DataStorage-BS0mwKb9-CnrN-7_f.js";import"./getElement-uQ-JTFk--VVvc7s1q.js";import"./DesignAsyncAbstract-Bi5cMulT-_fSgJIaJ.js";import"./isArray-QlWcxgml-TsNjkBGN.js";import"./GeoFlag-DfvLx1lW-BCKykf8X.js";import"./EventItem-CNRiCeQO-Z63F0Mu0.js";import"./M3Progress-script-iewzvVgm.js";import"./props-CpvvQJ8b-C-ux5dyN.js";import"./category-CNhBE4DO.js";import"./props-CWBtSxkn-D8jRp_8J.js";import"./createElement-Bvijtmfm-bdgvASHc.js";const u={width:["auto","max","sm","md","lg"],height:["auto","max","sm","md","lg"],adaptive:["menu","modal","modalDynamic","static","auto","staticSm","staticMd","staticLg"],alignment:["center","top","right","bottom","left"],origin:["center","top","right","bottom","left","topToBottom","rightToLeft","bottomToTop","leftToRight"]},s={...V,adaptive:"auto",overscroll:!0},N={...j,width:String,height:String,adaptive:{type:String,default:s==null?void 0:s.adaptive},overscroll:{type:Boolean,default:s==null?void 0:s.overscroll},dense:Boolean,fullscreen:Boolean,alignment:String,origin:String},P=$({name:"M3Window",__name:"M3Window",props:{...N},emits:["window"],setup(e,{expose:o,emit:a}){const S=a,n=e,T=b(()=>({main:{"m3-window":!0,"m3-window--width--custom":g(n.width)&&!t(u.width,n.width),[`m3-window--width--${n.width}`]:t(u.width,n.width),"m3-window--height--custom":g(n.height)&&!t(u.height,n.height),[`m3-window--height--${n.height}`]:t(u.height,n.height),[`m3-window--adaptive--${n.adaptive}`]:t(u.adaptive,n.adaptive),"m3-window--overscroll":n.overscroll,"m3-window--dense":n.dense,"m3-window--fullscreen":n.fullscreen,[`m3-window--alignment--${n.alignment}`]:t(u.alignment,n.alignment),[`m3-window--origin--${n.origin}`]:t(u.origin,n.origin)}})),U=b(()=>({"m3-window-sys-width":n.width??null,"m3-window-sys-height":n.height??null})),v=new q("m3.window",n,{emits:S,components:{scrollbar:K},classes:T,styles:U}),O=v.render();return o(v.expose()),(nn,en)=>(G(),X(L(_(O))))}}),i=P,Q=z,Y=H,Z=J,Sn={title:"M3/Window",component:i,tags:["autodocs"],parameters:{design:"m3",docs:{description:{component:Q}}},argTypes:Y,args:Z},r={render:e=>({components:{M3Button:d,M3Window:i},setup(){return{args:e}},template:`
      <m3-window v-bind="args">
        <template v-slot:control="binds">
          <m3-button v-bind="binds">Window</m3-button>
        </template>
        <template v-slot:default>
          <div style="padding: 16px;">
            <p>
              <b>What's Material?</b>
            </p>
            <p>
              Material Design is a design system built and supported<br/>
              by Google designers and developers. Material.io includes<br/>
              in-depth UX guidance and UI component implementations for<br/>
              Android, Flutter, and the Web.
            </p>
            <p>
              The latest version, Material 3, enables personal, adaptive,<br/>
              and expressive experiences – from dynamic color and enhanced<br/>
              accessibility, to foundations for large screen layouts and<br/>
              design tokens.
            </p>
            <div>
              <m3-button outlined class="m3-window--close">Close</m3-button>
            </div>
          </div>
        </template>
      </m3-window>
    `})},p={name:"Contextmenu",parameters:{docs:{description:{story:"Свойство contextmenu изменяет открытие окна через правую кнопку мыши, вместо левой, и убирает стандартное меню."}}},render:e=>({components:{M3Button:d,M3Window:i},setup(){return{args:e}},template:`
      <m3-window contextmenu v-bind="args">
        <template v-slot:control="binds">
          <m3-button v-bind="binds">Contextmenu</m3-button>
        </template>
        <template v-slot:default>

          <div style="padding: 8px 16px;">Item 1</div>
          <div style="padding: 8px 16px;">Item 2</div>
          <div style="padding: 8px 16px;">Item 3</div>
          <div style="padding: 8px 16px;">Item 4</div>
          <div style="padding: 8px 16px;">Item 5</div>
          <div style="padding: 8px 16px;">Item 6</div>
        </template>
      </m3-window>
    `})},l={name:"Over",parameters:{docs:{description:{story:"Через свойство over-element можно заставить окно центрироваться относительно выбранного элемента.<br> Свойство работает только если axis равно on.<br> Свойство принимает объект самого элемента или селектор к нужному элементу."}}},render:e=>({components:{M3Button:d,M3Window:i},setup(){return{args:e}},template:`
      <m3-window
        axis="on"
        over-element="#window-over-item-3"
        v-bind="args"
      >
        <template v-slot:control="binds">
          <m3-button v-bind="binds">Over: Item 3</m3-button>
        </template>
        <template v-slot:default>
          <div style="padding: 8px 16px;">Item 1</div>
          <div style="padding: 8px 16px;">Item 2</div>
          <div style="padding: 8px 16px; background-color: #0b2a32; color: #4db6ac;" id="window-over-item-3">Item 3
          </div>
          <div style="padding: 8px 16px;">Item 4</div>
          <div style="padding: 8px 16px;">Item 5</div>
          <div style="padding: 8px 16px;">Item 6</div>
        </template>
      </m3-window>
    `})},m={name:"Static mode",parameters:{docs:{description:{story:"Свойство staticMode включает статический режим. Статический режим переводит окно в position: static, и само окно становится видимым. Это нужно для таких компонентов, как поиск или главное меню справа, которые видны на ПК и скрываются в мобильном режиме.<br> Свойство будет работать только когда adaptive равно 1 из статических значений."}}},render:e=>({components:{M3Button:d,M3Window:i},setup(){return{args:e}},template:`
      <m3-window
        adaptive="staticLg"
        alignment="left"
        dense
        height="max"
        origin="leftToRight"
        over-element="#window-over-item-3"
        static-mode
        v-bind="args"
      >
        <template v-slot:control="binds">
          <m3-button v-bind="binds">Window</m3-button>
        </template>
        <template v-slot:default>
          <div style="padding: 16px;">
            <p>
              <b>What's Material?</b>
            </p>
            <p>
              Material Design is a design system built and supported<br/>
              by Google designers and developers. Material.io includes<br/>
              in-depth UX guidance and UI component implementations for<br/>
              Android, Flutter, and the Web.
            </p>
            <p>
              The latest version, Material 3, enables personal, adaptive,<br/>
              and expressive experiences – from dynamic color and enhanced<br/>
              accessibility, to foundations for large screen layouts and<br/>
              design tokens.
            </p>
            <div>
              <m3-button outlined class="m3-window--close">Close</m3-button>
            </div>
          </div>
        </template>
      </m3-window>
    `})},c={name:"Management",parameters:{docs:{description:{story:"Управление окном можно через методы <b>setOpen(boolean)</b>, <b>toggle()</b>.</small>"}}},render:e=>({components:{M3Button:d,M3Window:i},setup(){const o=R();return{args:e,window:o,onClick:()=>{var a;console.log("window.value",o.value),(a=o.value)==null||a.toggle()}}},template:`
      <div style="display: flex; gap: 16px;">
        <div>
          <m3-button @click="onClick">Open</m3-button>
        </div>
        <div>
          <m3-window
            ref="window"
            adaptive="modal"
            v-bind="args"
          >
            <template v-slot:default>
              <div style="padding: 16px;">
                <p>
                  <b>What's Material?</b>
                </p>
                <p>
                  Material Design is a design system built and supported<br/>
                  by Google designers and developers. Material.io includes<br/>
                  in-depth UX guidance and UI component implementations for<br/>
                  Android, Flutter, and the Web.
                </p>
                <p>
                  The latest version, Material 3, enables personal, adaptive,<br/>
                  and expressive experiences – from dynamic color and enhanced<br/>
                  accessibility, to foundations for large screen layouts and<br/>
                  design tokens.
                </p>
                <div>
                  <m3-button outlined class="m3-window--close">Close</m3-button>
                </div>
              </div>
            </template>
          </m3-window>
        </div>
      </div>
    `})};var w,x,y;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      M3Button,
      M3Window
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <m3-window v-bind="args">
        <template v-slot:control="binds">
          <m3-button v-bind="binds">Window</m3-button>
        </template>
        <template v-slot:default>
          <div style="padding: 16px;">
            <p>
              <b>What's Material?</b>
            </p>
            <p>
              Material Design is a design system built and supported<br/>
              by Google designers and developers. Material.io includes<br/>
              in-depth UX guidance and UI component implementations for<br/>
              Android, Flutter, and the Web.
            </p>
            <p>
              The latest version, Material 3, enables personal, adaptive,<br/>
              and expressive experiences – from dynamic color and enhanced<br/>
              accessibility, to foundations for large screen layouts and<br/>
              design tokens.
            </p>
            <div>
              <m3-button outlined class="m3-window--close">Close</m3-button>
            </div>
          </div>
        </template>
      </m3-window>
    \`
  })
}`,...(y=(x=r.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var h,E,f;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Contextmenu',
  parameters: {
    docs: {
      description: {
        story: 'Свойство contextmenu изменяет открытие окна через правую кнопку мыши, ' + 'вместо левой, и убирает стандартное меню.'
      }
    }
  },
  render: (args: any) => ({
    components: {
      M3Button,
      M3Window
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <m3-window contextmenu v-bind="args">
        <template v-slot:control="binds">
          <m3-button v-bind="binds">Contextmenu</m3-button>
        </template>
        <template v-slot:default>

          <div style="padding: 8px 16px;">Item 1</div>
          <div style="padding: 8px 16px;">Item 2</div>
          <div style="padding: 8px 16px;">Item 3</div>
          <div style="padding: 8px 16px;">Item 4</div>
          <div style="padding: 8px 16px;">Item 5</div>
          <div style="padding: 8px 16px;">Item 6</div>
        </template>
      </m3-window>
    \`
  })
}`,...(f=(E=p.parameters)==null?void 0:E.docs)==null?void 0:f.source}}};var M,D,C;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Over',
  parameters: {
    docs: {
      description: {
        story: 'Через свойство over-element можно заставить окно центрироваться относительно выбранного элемента.<br> ' + 'Свойство работает только если axis равно on.<br> ' + 'Свойство принимает объект самого элемента или селектор к нужному элементу.'
      }
    }
  },
  render: (args: any) => ({
    components: {
      M3Button,
      M3Window
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <m3-window
        axis="on"
        over-element="#window-over-item-3"
        v-bind="args"
      >
        <template v-slot:control="binds">
          <m3-button v-bind="binds">Over: Item 3</m3-button>
        </template>
        <template v-slot:default>
          <div style="padding: 8px 16px;">Item 1</div>
          <div style="padding: 8px 16px;">Item 2</div>
          <div style="padding: 8px 16px; background-color: #0b2a32; color: #4db6ac;" id="window-over-item-3">Item 3
          </div>
          <div style="padding: 8px 16px;">Item 4</div>
          <div style="padding: 8px 16px;">Item 5</div>
          <div style="padding: 8px 16px;">Item 6</div>
        </template>
      </m3-window>
    \`
  })
}`,...(C=(D=l.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var W,B,A;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Static mode',
  parameters: {
    docs: {
      description: {
        story: 'Свойство staticMode включает статический режим. ' + 'Статический режим переводит окно в position: static, и само окно становится видимым. ' + 'Это нужно для таких компонентов, как поиск или главное меню справа, которые видны на ПК и скрываются в мобильном режиме.<br> ' + 'Свойство будет работать только когда adaptive равно 1 из статических значений.'
      }
    }
  },
  render: (args: any) => ({
    components: {
      M3Button,
      M3Window
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <m3-window
        adaptive="staticLg"
        alignment="left"
        dense
        height="max"
        origin="leftToRight"
        over-element="#window-over-item-3"
        static-mode
        v-bind="args"
      >
        <template v-slot:control="binds">
          <m3-button v-bind="binds">Window</m3-button>
        </template>
        <template v-slot:default>
          <div style="padding: 16px;">
            <p>
              <b>What's Material?</b>
            </p>
            <p>
              Material Design is a design system built and supported<br/>
              by Google designers and developers. Material.io includes<br/>
              in-depth UX guidance and UI component implementations for<br/>
              Android, Flutter, and the Web.
            </p>
            <p>
              The latest version, Material 3, enables personal, adaptive,<br/>
              and expressive experiences – from dynamic color and enhanced<br/>
              accessibility, to foundations for large screen layouts and<br/>
              design tokens.
            </p>
            <div>
              <m3-button outlined class="m3-window--close">Close</m3-button>
            </div>
          </div>
        </template>
      </m3-window>
    \`
  })
}`,...(A=(B=m.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var I,F,k;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Management',
  parameters: {
    docs: {
      description: {
        story: 'Управление окном можно через методы <b>setOpen(boolean)</b>, <b>toggle()</b>.</small>'
      }
    }
  },
  render: (args: any) => ({
    components: {
      M3Button,
      M3Window
    },
    setup() {
      const window = ref<any>();
      return {
        args,
        window,
        onClick: () => {
          console.log('window.value', window.value);
          window.value?.toggle();
        }
      };
    },
    template: \`
      <div style="display: flex; gap: 16px;">
        <div>
          <m3-button @click="onClick">Open</m3-button>
        </div>
        <div>
          <m3-window
            ref="window"
            adaptive="modal"
            v-bind="args"
          >
            <template v-slot:default>
              <div style="padding: 16px;">
                <p>
                  <b>What's Material?</b>
                </p>
                <p>
                  Material Design is a design system built and supported<br/>
                  by Google designers and developers. Material.io includes<br/>
                  in-depth UX guidance and UI component implementations for<br/>
                  Android, Flutter, and the Web.
                </p>
                <p>
                  The latest version, Material 3, enables personal, adaptive,<br/>
                  and expressive experiences – from dynamic color and enhanced<br/>
                  accessibility, to foundations for large screen layouts and<br/>
                  design tokens.
                </p>
                <div>
                  <m3-button outlined class="m3-window--close">Close</m3-button>
                </div>
              </div>
            </template>
          </m3-window>
        </div>
      </div>
    \`
  })
}`,...(k=(F=c.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};const Tn=["Window","WindowContextmenu","WindowOver","WindowStaticMode","WindowManagement"];export{r as Window,p as WindowContextmenu,c as WindowManagement,l as WindowOver,m as WindowStaticMode,Tn as __namedExportsOrder,Sn as default};
