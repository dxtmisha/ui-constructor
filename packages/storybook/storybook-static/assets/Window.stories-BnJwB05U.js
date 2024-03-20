import{g as _,c as b,j as $,k as G,l as X,u as L,r as j}from"./vue.esm-bundler-DKn_-kmd.js";import{w as s}from"./C2Button-script-Dy-442_m.js";import{t as h}from"./isFilled-ClO-1E4U-BUdjZhTW.js";import{i as u}from"./inArray-BLmbg9f_-Da-N6vMw.js";import{u as q,e as z,s as H,a as J,b as K,c as N}from"./window-qJ_kvK2i.js";import{R as P,T as Q}from"./props-CWBtSxkn-BUgqQ2-t.js";import"./props-CpUbgiGH-cDV5n-S7.js";import"./DesignConstructorAbstract-pm1V7i1G-DKYGky5W.js";import"./useEnabled-BTR3ciPG-BYSamwcS.js";import"./getBind-CgHMfjrB-mdqCrtd3.js";import"./eventStopPropagation-fHm2p5BF-D53V-aZD.js";import"./C2Icon-script-Bm5Q8US7.js";import"./props-5ohlAg-W-CvoNuT0a.js";import"./C2Image-script-DJB3rZS7.js";import"./props-CpiO6YEk-DlqqMfTs.js";import"./GeoIntl-DH3GBVnO-Ba8p-fOD.js";import"./isNull-CjWwlQS3-GxMmF9sj.js";import"./toNumber-eA5ODeva-B35HWKKW.js";import"./DataStorage-BS0mwKb9-CnrN-7_f.js";import"./getElement-uQ-JTFk--VVvc7s1q.js";import"./DesignAsyncAbstract-Bi5cMulT-_fSgJIaJ.js";import"./isArray-QlWcxgml-TsNjkBGN.js";import"./GeoFlag-DfvLx1lW-DVZop2nR.js";import"./EventItem-CNRiCeQO-BBiOwxAe.js";import"./C2Progress-script-CNiQBQz_.js";import"./props-CpvvQJ8b-BW9Rwh9M.js";import"./category-CNhBE4DO.js";import"./createElement-Bvijtmfm-DCzadBt_.js";const Y={...Q,visible:Boolean,border:Boolean,inverse:Boolean},Z=_({name:"C2Scrollbar",__name:"C2Scrollbar",props:{...Y},setup(e,{expose:t,emit:i}){const g=i,n=e,w=b(()=>({main:{"c2-scrollbar":!0,"c2-scrollbar--visible":n.visible,"c2-scrollbar--border":n.border,"c2-scrollbar--inverse":n.inverse}})),x=b(()=>({})),a=new P("c2.scrollbar",n,{emits:g,classes:w,styles:x}),y=a.render();return t(a.expose()),(R,V)=>($(),G(X(L(y))))}}),nn=Z,o={width:["auto","max","sm","md","lg"],height:["auto","max","sm","md","lg"],adaptive:["menu","modal","modalDynamic","static","auto","staticSm","staticMd","staticLg"],alignment:["center","top","right","bottom","left"],origin:["center","top","right","bottom","left","topToBottom","rightToLeft","bottomToTop","leftToRight"]},r={...q,adaptive:"auto",overscroll:!0},en={...z,width:String,height:String,adaptive:{type:String,default:r==null?void 0:r.adaptive},overscroll:{type:Boolean,default:r==null?void 0:r.overscroll},dense:Boolean,fullscreen:Boolean,alignment:String,origin:String},tn=_({name:"C2Window",__name:"C2Window",props:{...en},emits:["window"],setup(e,{expose:t,emit:i}){const g=i,n=e,w=b(()=>({main:{"c2-window":!0,"c2-window--width--custom":h(n.width)&&!u(o.width,n.width),[`c2-window--width--${n.width}`]:u(o.width,n.width),"c2-window--height--custom":h(n.height)&&!u(o.height,n.height),[`c2-window--height--${n.height}`]:u(o.height,n.height),[`c2-window--adaptive--${n.adaptive}`]:u(o.adaptive,n.adaptive),"c2-window--overscroll":n.overscroll,"c2-window--dense":n.dense,"c2-window--fullscreen":n.fullscreen,[`c2-window--alignment--${n.alignment}`]:u(o.alignment,n.alignment),[`c2-window--origin--${n.origin}`]:u(o.origin,n.origin)}})),x=b(()=>({"c2-window-sys-width":n.width??null,"c2-window-sys-height":n.height??null})),a=new H("c2.window",n,{emits:g,components:{scrollbar:nn},classes:w,styles:x}),y=a.render();return t(a.expose()),(R,V)=>($(),G(X(L(y))))}}),d=tn,un=J,on=K,dn=N,On={title:"C2/Window",component:d,tags:["autodocs"],parameters:{design:"c2",docs:{description:{component:dn.main.description.main}}},argTypes:un,args:on},l={render:e=>({components:{C2Button:s,C2Window:d},setup(){return{args:e}},template:`
      <c2-window v-bind="args">
        <template v-slot:control="binds">
          <c2-button v-bind="binds">Window</c2-button>
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
              <c2-button outlined class="c2-window--close">Close</c2-button>
            </div>
          </div>
        </template>
      </c2-window>
    `})},p={name:"Contextmenu",parameters:{docs:{description:{story:"Свойство contextmenu изменяет открытие окна через правую кнопку мыши, вместо левой, и убирает стандартное меню."}}},render:e=>({components:{C2Button:s,C2Window:d},setup(){return{args:e}},template:`
      <c2-window contextmenu v-bind="args">
        <template v-slot:control="binds">
          <c2-button v-bind="binds">Contextmenu</c2-button>
        </template>
        <template v-slot:default>

          <div style="padding: 8px 16px;">Item 1</div>
          <div style="padding: 8px 16px;">Item 2</div>
          <div style="padding: 8px 16px;">Item 3</div>
          <div style="padding: 8px 16px;">Item 4</div>
          <div style="padding: 8px 16px;">Item 5</div>
          <div style="padding: 8px 16px;">Item 6</div>
        </template>
      </c2-window>
    `})},c={name:"Over",parameters:{docs:{description:{story:"Через свойство over-element можно заставить окно центрироваться относительно выбранного элемента.<br> Свойство работает только если axis равно on.<br> Свойство принимает объект самого элемента или селектор к нужному элементу."}}},render:e=>({components:{C2Button:s,C2Window:d},setup(){return{args:e}},template:`
      <c2-window
        axis="on"
        over-element="#window-over-item-3"
        v-bind="args"
      >
        <template v-slot:control="binds">
          <c2-button v-bind="binds">Over: Item 3</c2-button>
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
      </c2-window>
    `})},m={name:"Static mode",parameters:{docs:{description:{story:"Свойство staticMode включает статический режим. Статический режим переводит окно в position: static, и само окно становится видимым. Это нужно для таких компонентов, как поиск или главное меню справа, которые видны на ПК и скрываются в мобильном режиме.<br> Свойство будет работать только когда adaptive равно 1 из статических значений."}}},render:e=>({components:{C2Button:s,C2Window:d},setup(){return{args:e}},template:`
      <c2-window
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
          <c2-button v-bind="binds">Window</c2-button>
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
              <c2-button outlined class="c2-window--close">Close</c2-button>
            </div>
          </div>
        </template>
      </c2-window>
    `})},v={name:"Management",parameters:{docs:{description:{story:"Управление окном можно через методы <b>setOpen(boolean)</b>, <b>toggle()</b>.</small>"}}},render:e=>({components:{C2Button:s,C2Window:d},setup(){const t=j();return{args:e,window:t,onClick:()=>{var i;console.log("window.value",t.value),(i=t.value)==null||i.toggle()}}},template:`
      <div style="display: flex; gap: 16px;">
        <div>
          <c2-button @click="onClick">Open</c2-button>
        </div>
        <div>
          <c2-window
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
                  <c2-button outlined class="c2-window--close">Close</c2-button>
                </div>
              </div>
            </template>
          </c2-window>
        </div>
      </div>
    `})};var C,E,f;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      C2Button,
      C2Window
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <c2-window v-bind="args">
        <template v-slot:control="binds">
          <c2-button v-bind="binds">Window</c2-button>
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
              <c2-button outlined class="c2-window--close">Close</c2-button>
            </div>
          </div>
        </template>
      </c2-window>
    \`
  })
}`,...(f=(E=l.parameters)==null?void 0:E.docs)==null?void 0:f.source}}};var D,B,W;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
      C2Button,
      C2Window
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <c2-window contextmenu v-bind="args">
        <template v-slot:control="binds">
          <c2-button v-bind="binds">Contextmenu</c2-button>
        </template>
        <template v-slot:default>

          <div style="padding: 8px 16px;">Item 1</div>
          <div style="padding: 8px 16px;">Item 2</div>
          <div style="padding: 8px 16px;">Item 3</div>
          <div style="padding: 8px 16px;">Item 4</div>
          <div style="padding: 8px 16px;">Item 5</div>
          <div style="padding: 8px 16px;">Item 6</div>
        </template>
      </c2-window>
    \`
  })
}`,...(W=(B=p.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};var A,M,I;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
      C2Button,
      C2Window
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <c2-window
        axis="on"
        over-element="#window-over-item-3"
        v-bind="args"
      >
        <template v-slot:control="binds">
          <c2-button v-bind="binds">Over: Item 3</c2-button>
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
      </c2-window>
    \`
  })
}`,...(I=(M=c.parameters)==null?void 0:M.docs)==null?void 0:I.source}}};var F,k,S;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
      C2Button,
      C2Window
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <c2-window
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
          <c2-button v-bind="binds">Window</c2-button>
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
              <c2-button outlined class="c2-window--close">Close</c2-button>
            </div>
          </div>
        </template>
      </c2-window>
    \`
  })
}`,...(S=(k=m.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var T,U,O;v.parameters={...v.parameters,docs:{...(T=v.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
      C2Button,
      C2Window
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
          <c2-button @click="onClick">Open</c2-button>
        </div>
        <div>
          <c2-window
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
                  <c2-button outlined class="c2-window--close">Close</c2-button>
                </div>
              </div>
            </template>
          </c2-window>
        </div>
      </div>
    \`
  })
}`,...(O=(U=v.parameters)==null?void 0:U.docs)==null?void 0:O.source}}};const _n=["Window","WindowContextmenu","WindowOver","WindowStaticMode","WindowManagement"];export{l as Window,p as WindowContextmenu,v as WindowManagement,c as WindowOver,m as WindowStaticMode,_n as __namedExportsOrder,On as default};
