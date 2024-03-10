"use strict";var M=Object.defineProperty;var k=(o,t,e)=>t in o?M(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var n=(o,t,e)=>(k(o,typeof t!="symbol"?t+"":t,e),e);Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const l=require("vue"),b=require("./isFilled-Cbsu2kXd.cjs"),w=require("./inArray-iLoL9QGm.cjs"),O=require("./DesignConstructorAbstract-BUcyMiAM.cjs"),T=require("./getElementId-Brybhc3_.cjs"),x=require("./getElement-BELE3lVa.cjs"),S=require("./EventItem-CQLUkI1j.cjs"),v=require("./getMouseClientY-BAQt6jOl.cjs"),$=require("./M3Scrollbar.umd.cjs");var d=(o=>(o.display="display",o.preparation="preparation",o.flash="flash",o.open="open",o.hide="hide",o.close="close",o))(d||{}),y=(o=>(o.block="block",o.close="close",o.static="static",o.controlStatic="controlStatic",o))(y||{}),C=(o=>(o.top="top",o.center="center",o.bottom="bottom",o))(C||{});class A{constructor(){n(this,"status",d.close)}isHide(){return this.status===d.hide}isOpen(){return this.status===d.open||this.status===d.flash}get(){return this.status}set(t){return this.status=t,this}toDisplay(){return this.set(d.display),this}toPreparation(){return this.set(d.preparation),this}toFlash(){return this.set(d.flash),this}toOpen(){return this.set(d.open),this}toHide(){return this.set(d.hide),this}toClose(){return this.set(d.close),this}}class E{constructor(){n(this,"x",0);n(this,"y",0)}is(){return this.x!==0||this.y!==0}getX(){return this.x}getY(){return this.y}getShiftX(t){return this.x-t}getShiftY(t){return this.y-t}set(t,e){return this.x=t,this.y=e,this}reset(){return this.x=0,this.y=0,this}}class H{constructor(t,e){n(this,"persistent",!1);this.props=t,this.callback=e}get(){return this.persistent}on(){return this.props.persistent?(this.persistent=!0,this.makeCallback(),!0):!1}disabled(){return this.persistent&&(this.persistent=!1,this.makeCallback()),this}makeCallback(){return this.callback&&this.callback(),this}}class R{constructor(t){this.props=t}async preparation(t){this.props.preparation&&await this.props.preparation(t)}async beforeOpening(t){return this.props.beforeOpening?await this.props.beforeOpening(!t):!0}async opening(t){return this.props.opening?await this.props.opening(t):!1}}class W{constructor(t,e="is-window",i="is-control",s="is-body",r="is-body-context"){n(this,"id",`window--${T.getElementId()}`);this.persistent=t,this.className=e,this.classControl=i,this.classBody=s,this.classBodyContext=r}isWindow(t){return!!(t&&t.classList.contains(this.getClassMain()))}getId(){return this.id}getClassMain(){return this.className}getClassControl(){return this.classControl}getClassControlAndId(){return`${this.classControl} ${this.getId()}`}getClassStatus(t){return`${this.className}[data-status="${t}"]`}getClasses(){return{[this.getId()]:!0,"??--persistent":this.persistent.get()}}getSelectorControl(){return`.${this.classControl}.${this.getId()}`}getSelectorStatusControl(t){return`.${this.getClassMain()}--${t}`}findMain(t){return(t==null?void 0:t.closest(`.${this.className}`))??void 0}findControl(){return document.querySelector(`.${this.classControl}.${this.id}`)||void 0}findControlByElement(t){var e;if(t)return document.querySelector(`.${this.getClassControl()}.${(e=t.dataset)==null?void 0:e.window}`)??void 0}findBody(){return document.querySelector(`.${this.className}.${this.id} .${this.classBody}`)||void 0}findBodyContext(){return document.querySelector(`.${this.className}.${this.id} .${this.classBodyContext}`)||void 0}}class I{constructor(t,e){this.classes=t,this.element=e}isMain(){return!!this.element.value}getMain(){return this.element.value}getControl(){return this.classes.findControl()}getControlRect(){var t;return((t=this.getControl())==null?void 0:t.getBoundingClientRect())||void 0}getBody(){return this.classes.findBody()}getBodyRect(){var t;return((t=this.getBody())==null?void 0:t.getBoundingClientRect())||void 0}getBodyContext(){return this.classes.findBodyContext()}}class q{constructor(t,e){n(this,"control",!1);this.props=t,this.classes=e}is(){return!!this.props.flash}isOpen(){return this.is()||this.control}isClose(){return this.is()||!!document.querySelector(`.${this.classes.getClassStatus(d.hide)}`)}setControl(t){var e;return this.control=((e=t==null?void 0:t.closest(`.${this.classes.getClassControl()}`))==null?void 0:e.dataset.window)===this.classes.getId(),this}}class F{constructor(t,e){n(this,"top",0);n(this,"right",0);n(this,"bottom",0);n(this,"left",0);n(this,"width",0);n(this,"height",0);n(this,"innerWidth",0);n(this,"innerHeight",0);n(this,"padding",0);n(this,"location",C.center);this.classes=t,this.element=e}getTop(){return this.top}getRight(){return this.right}getBottom(){return this.bottom}getLeft(){return this.left}getWidth(){return this.width}getHeight(){return this.height}getInnerWidth(){return this.innerWidth}getInnerHeight(){return this.innerHeight}getPadding(){return this.padding}getLocation(){return this.location}getMaxHeight(){const t=this.element.getBody();return t?parseInt(getComputedStyle(t).maxHeight.replace(/[^0-9]+/g,"")):0}update(){const t=this.element.getMain(),e=this.element.getControlRect();return t&&e&&(this.top!==e.top||this.right!==e.right||this.bottom!==e.bottom||this.left!==e.left||this.width!==t.offsetWidth||this.height!==t.offsetHeight||this.innerWidth!==window.innerWidth||this.innerHeight!==window.innerHeight)?(this.top=e.top,this.right=e.right,this.bottom=e.bottom,this.left=e.left,this.width=t.offsetWidth,this.height=t.offsetHeight,this.innerWidth=window.innerWidth,this.innerHeight=window.innerHeight,this.padding=(window.innerHeight-this.getMaxHeight())/2,this.location=this.initLocation(e.top+e.height/2),!0):!1}reset(){return this.top=0,this.right=0,this.bottom=0,this.left=0,this.width=0,this.height=0,this.innerWidth=0,this.innerWidth=0,this}initLocation(t){switch(Math.floor(t/(window.innerHeight/3))){case 0:return C.top;case 2:return C.bottom}return C.center}}class D{constructor(t,e,i,s){n(this,"x",0);n(this,"y",0);this.props=t,this.client=e,this.element=i,this.coordinates=s}isOver(){var t;return((t=this.props)==null?void 0:t.axis)==="on"}getX(){return this.x}getY(){return this.y}getStyleX(){return`${this.x}px`}getStyleY(){return`${this.y}px`}getStyles(){return{"--??-sys-inset-x":this.getStyleX(),"--??-sys-inset-y":this.getStyleY()}}update(){return this.coordinates.update()?(this.setX(),this.setY(),!0):!1}updateScroll(){var e,i,s;const t=this.element.getBodyContext();if(this.isOver()&&this.props.overElement&&t&&t.scrollHeight>t.offsetHeight){const r=(e=x.getElement(this.props.overElement))==null?void 0:e.getBoundingClientRect(),h=(i=this.element.getBody())==null?void 0:i.getBoundingClientRect(),a=t==null?void 0:t.getBoundingClientRect(),c=(s=this.element.getControl())==null?void 0:s.getBoundingClientRect();if(t&&r&&h&&a){const g=r.height/2,p=r.top-a.top;if(c&&this.coordinates.getMaxHeight()===h.height){if(c.top+g<h.top){t.scrollTop+=p;return}if(c.bottom-g>h.bottom){t.scrollTop+=p-a.height+r.height;return}t.scrollTop+=p-(c.top-a.top)-c.height/2+g;return}t.scrollTop+=p-a.height/2+g}}}getAxis(){var t;return this.isOver()?"y":((t=this.props)==null?void 0:t.axis)??"y"}getIndent(t){return this.getAxis()===t?this.props.indent??4:0}getOverHeight(t,e){var r,h;const i=(e-t)/2;if(this.props.overElement){const a=(r=x.getElement(this.props.overElement))==null?void 0:r.getBoundingClientRect(),c=(h=this.element.getBody())==null?void 0:h.getBoundingClientRect();if(a&&c){const g=a.top-c.top,p=a.height/2;return e-g-p-i}}const s=this.coordinates.getHeight()/2;return e-i-s}setX(){const t=this.element.getMain();if(t){const e=this.getIndent("x"),i=this.props.contextmenu?this.client.getX():this.coordinates.getRight()+e,s=this.props.contextmenu?this.client.getX():this.coordinates.getLeft()-e,r=[];this.getAxis()==="x"?r.push(i,s):r.push(s,i),this.x=this.calculationInner(r[0],r[1],t.offsetWidth,window.innerWidth,this.coordinates.getWidth())}return this}setY(){const t=this.element.getMain();if(t){const e=this.getIndent("y"),i=this.props.contextmenu?this.client.getY():this.coordinates.getTop()-e,s=this.props.contextmenu?this.client.getY():this.coordinates.getBottom()+e,r=[];if(this.isOver())return this.y=this.calculationOver(this.getOverHeight(i,s),i,s,t.offsetHeight,window.innerHeight),this;this.getAxis()!=="x"?r.push(s,i):r.push(i,s),this.y=this.calculationInner(r[0],r[1],t.offsetHeight,window.innerHeight,this.coordinates.getHeight())}return this}calculationInner(t,e,i,s,r){const h=this.coordinates.getPadding();return t+i<=s-h?t:e-i>h?e-i:s/2-r/2}calculationOver(t,e,i,s,r){const h=this.coordinates.getPadding();if(i<h)return i;if(e>r-h){const a=e-s-h;return a<h?h:a}return t<h?h:t+s<=r-h?t:r-s-h}}class P{constructor(t,e,i){n(this,"x",null);n(this,"y",null);this.client=t,this.element=e,this.position=i}getStyleX(){return this.x!==null?`${this.x}px`:null}getStyleY(){return this.y!==null?`${this.y}px`:null}getStyles(){return{"--??-origin-x":this.getStyleX(),"--??-origin-y":this.getStyleY()}}update(){const t=this.element.getMain();if(!this.client.is())this.x=0,this.y=0;else if(t&&getComputedStyle(t).content!=='"--MENU--"'){const e=this.element.getBodyRect();e&&(this.x=this.client.getShiftX(e.left),this.y=this.client.getShiftY(e.top))}else this.x=this.client.getShiftX(this.position.getX()),this.y=this.client.getShiftY(this.position.getY());return this}reset(){return this.x=null,this.y=null,this}}class Y{constructor(t,e,i){n(this,"activity",!1);n(this,"event");this.props=t,this.element=e,this.callback=i}is(){return this.activity}isStaticMod(){return!!this.props.staticMode}update(){const t=this.isStatic();return t!==this.activity?(this.activity=t,!0):!1}make(){this.isStaticMod()?!this.event&&this.element.getMain()&&(this.event=new S.EventItem(window,["resize"],()=>this.listener()),this.listener(),this.event.start()):this.stop()}makeAdaptive(){this.props.adaptive&&this.props.staticMode&&this.element.getMain()&&requestAnimationFrame(()=>this.listener())}stop(){this.event&&(this.event.stop(),this.event=void 0)}isStatic(){const t=this.element.getMain();return!!(t&&getComputedStyle(t).content==='"--STATIC--"')}listener(){var t;this.update()&&((t=this.callback)==null||t.call(this))}}class X{constructor(t,e,i,s,r,h,a,c,g,p,B){n(this,"open",!1);n(this,"first",!1);this.props=t,this.status=e,this.client=i,this.hook=s,this.element=r,this.flash=h,this.coordinates=a,this.position=c,this.origin=g,this.callback=p,this.callbackEmit=B}inDom(){return this.open||this.props.staticMode||this.first&&!!this.props.inDom}get(){return this.open}async set(t=!0){return this.open!==t&&await this.toggle(),this}async toggle(){if(await this.hook.beforeOpening(this.open)){const t=!this.open;t?(this.reset(),this.status.toDisplay(),await this.setOpenAndEmit(t),requestAnimationFrame(async()=>{await this.hook.preparation(this.open),await this.watchPosition(),await this.callback(),requestAnimationFrame(async()=>{this.position.updateScroll(),this.status.toPreparation(),await this.callback(),requestAnimationFrame(async()=>{await this.hook.opening(this.open),this.flash.isClose()?this.status.toFlash():this.status.toOpen(),await this.callback()})})})):(this.client.reset(),this.flash.isOpen()?this.toClose():(this.status.toHide(),await this.callback()))}return this}close(){this.status.isHide()&&this.toClose()}reset(){return this.coordinates.reset(),this.origin.reset(),this}async watchPosition(){this.open&&this.element.isMain()?(this.position.update(),this.origin.update(),this.watchCoordinates()):this.reset()}async setOpenAndEmit(t){return this.open=t,t&&!this.first&&(this.first=!0),await this.callback(),this.callbackEmit(),this}watchCoordinates(){return v.frame(()=>{const t=this.element.getMain();t&&getComputedStyle(t).content==='"--MENU--"'&&this.position.update()&&this.callback().then()},()=>this.open&&!this.status.isHide()),this}toClose(){setTimeout(()=>this.setOpenAndEmit(!1).then(),48),this.status.toClose(),this.hook.opening(this.open).then()}}class N{constructor(t,e,i,s,r,h,a){n(this,"target");n(this,"focus");this.props=t,this.persistent=e,this.classes=i,this.element=s,this.staticMode=r,this.open=h,this.callback=a}async update(t){this.target=t,this.focus=this.getFocus(),!this.staticMode.is()&&(this.open.get()?this.isContextmenu()?(await this.open.reset().watchPosition(),await this.callback()):this.focus===null?await this.open.toggle():this.isFocus()?this.isTarget()?this.persistent.on()||await this.open.toggle():(this.isClose()||this.isAutoClose()||!this.isChildren())&&await this.open.toggle():this.isNotBlock()&&(this.isChildren()?requestAnimationFrame(async()=>{var e;["open","flash"].indexOf(((e=this.focus)==null?void 0:e.dataset.status)||"")===-1&&await this.open.toggle()}):await this.open.toggle()):this.isEnabled()&&await this.open.toggle())}getFocus(){return this.classes.findMain(this.getTarget())}getTarget(){return this.target??this.element.getMain()??document.body}isFocus(){return this.element.getMain()===this.focus}isTarget(){return this.element.getMain()===this.target}isChildren(t=this.getTarget()){const e=this.classes.findMain(t);return!!(e&&(e.dataset.window===this.classes.getId()||this.isChildren(this.classes.findControlByElement(e))))}isEnabled(){const t=this.classes.getSelectorStatusControl(y.controlStatic);return!this.props.disabled&&!this.getTarget().closest(t)}isAutoClose(){const t=this.classes.getSelectorStatusControl(y.static);return!!this.props.autoClose&&!this.getTarget().closest(`${t}, .${this.classes.getId()} .${this.classes.getClassControl()}`)}isNotBlock(){var e;const t=this.classes.getSelectorStatusControl(y.block);return!this.classes.isWindow(this.getTarget())&&!((e=this.classes.findControlByElement(this.focus))!=null&&e.closest(t))}isContextmenu(){return!!(this.props.contextmenu&&this.getTarget().closest(this.classes.getSelectorControl()))}isClose(){const t=this.classes.getSelectorStatusControl(y.close),e=this.classes.getSelectorStatusControl(y.static);return!!this.getTarget().closest(`${t}:not(${e})`)}}class _{constructor(t,e,i,s,r,h,a){n(this,"event");this.props=t,this.status=e,this.client=i,this.persistent=s,this.flash=r,this.open=h,this.verification=a,this.event=new S.EventItem("body",["click","contextmenu"],c=>this.onGlobal(c))}async onClick(t){this.props.contextmenu||await this.on(t)}async onContextmenu(t){this.props.contextmenu&&(t.preventDefault(),await this.on(t))}onTransition(){this.open.close()}onPersistent(){this.persistent.disabled()}start(){return this.event.start(),this}stop(){return this.event.stop(),this}toggle(){return this.open.get()&&this.status.isOpen()?this.start():this.stop(),this}async on(t){this.client.set(v.getMouseClientX(t),v.getMouseClientY(t)),await this.verification.update(t.target)}async onGlobal(t){this.open.get()?(this.flash.setControl(t==null?void 0:t.target),await this.verification.update(t==null?void 0:t.target)):this.event.stop()}}class L{constructor(t,e,i,s,r="is-window",h="is-control",a="is-body",c="is-body-context"){n(this,"status");n(this,"client");n(this,"persistent");n(this,"hook");n(this,"classes");n(this,"element");n(this,"flash");n(this,"coordinates");n(this,"position");n(this,"origin");n(this,"staticMode");n(this,"open");n(this,"verification");n(this,"event");this.status=new A,this.client=new E,this.persistent=new H(t,i),this.hook=new R(t),this.classes=new W(this.persistent,r,h,a,c),this.element=new I(this.classes,e),this.flash=new q(t,this.classes),this.coordinates=new F(this.classes,this.element),this.position=new D(t,this.client,this.element,this.coordinates),this.origin=new P(this.client,this.element,this.position),this.staticMode=new Y(t,this.element,i),this.open=new X(t,this.status,this.client,this.hook,this.element,this.flash,this.coordinates,this.position,this.origin,async()=>{await i(),this.event.toggle()},()=>s(this.getEmitOptions())),this.verification=new N(t,this.persistent,this.classes,this.element,this.staticMode,this.open,i),this.event=new _(t,this.status,this.client,this.persistent,this.flash,this.open,this.verification),t.open&&requestAnimationFrame(()=>this.open.set(t.open).then())}getClasses(){return{...this.classes.getClasses(),"??--staticMode":this.staticMode.is(),[`??--location--${this.coordinates.getLocation()}`]:!0}}getStyles(){return{...this.origin.getStyles(),...this.position.getStyles()}}getEmitOptions(){return{id:this.classes.getId(),element:this.element.getMain(),control:this.element.getControl(),open:this.open.get()}}update(){return this.staticMode.make(),this.staticMode.makeAdaptive(),this}stop(){return this.event.stop(),this.staticMode.stop(),this}}class U{constructor(t,e,i,s="is-window",r="is-control",h="is-body",a="is-body-context"){n(this,"window");n(this,"status",l.shallowRef());n(this,"staticMode",l.shallowRef(!1));n(this,"inDom",l.shallowRef(!1));n(this,"open",l.shallowRef(!1));n(this,"classes",l.shallowRef({}));n(this,"styles",l.shallowRef({}));this.window=new L(t,e,async()=>this.update(),i,s,r,h,a),l.watchEffect(async()=>await this.window.open.set(t.open)),l.watchEffect(async()=>{this.window.update(),await this.update()}),l.onUnmounted(()=>this.window.stop())}getId(){return this.window.classes.getId()}getClassControl(){return this.window.classes.getClassControlAndId()}async setOpen(t=!0){await this.window.open.set(t)}async toggle(){await this.window.open.toggle()}async onClick(t){return this.window.event.onClick(t)}async onContextmenu(t){return this.window.event.onContextmenu(t)}onTransition(){return this.window.event.onTransition()}onPersistent(){return this.window.event.onPersistent()}async update(){this.status.value=this.window.status.get(),this.staticMode.value=this.window.staticMode.is(),this.inDom.value=this.window.open.inDom(),this.open.value=this.window.open.get(),this.updateClasses(),await l.nextTick()}updateClasses(){return this.classes.value=this.window.getClasses(),this.styles.value=this.window.getStyles(),this}}class j extends O.DesignConstructorAbstract{constructor(e,i,s){super(e,i,s);n(this,"window");this.window=new U(this.props,this.element,r=>{var h;return(h=this.emits)==null?void 0:h.call(this,"window",r)},this.getName(),this.getSubClass("control"),this.getSubClass("body"),this.getSubClass(["body","context"])),this.init()}makeOptions(){return this}initSetup(){return{id:this.window.getId(),status:this.window.status,open:this.window.open,inDom:this.window.inDom,staticMode:this.window.staticMode,slotControl:{class:this.window.getClassControl(),onclick:async e=>await this.window.onClick(e),oncontextmenu:async e=>this.window.onContextmenu(e)},setOpen:e=>this.window.setOpen(e),toggle:()=>this.window.toggle(),onTransition:()=>this.window.onTransition(),onPersistent:()=>this.window.onPersistent(),renderBodyContext:()=>this.renderBodyContext()}}initExpose(){const e=this.setup();return{id:e.id,open:e.open,setOpen:e.setOpen,toggle:e.toggle}}initClasses(){return{main:{...this.toClassName(this.window.classes.value)},body:this.getSubClass("body"),bodyContext:this.getSubClass("body__context"),control:this.getSubClass("control")}}initStyles(){return{...this.toClassName(this.window.styles.value)}}initRender(){const e=this.setup(),i=[];if(this.initSlot("control",i,e.slotControl),e.inDom.value){const s=[this.renderBody()];i.push(l.h(l.Teleport,{key:"teleport",disabled:e.staticMode.value,to:"body"},[l.h("div",{...this.getAttrs(),key:"main",ref:this.element,class:e.classes.value.main,style:e.styles.value,"data-window":e.id,"data-status":e.status.value,onTransitionend:e.onTransition,onAnimationend:e.onPersistent},s)]))}return i}renderBody(){const e=this.setup(),i=[this.initSlot("title"),this.renderBodyContext(),this.initSlot("footer")];return l.h("div",{key:"body",class:e.classes.value.body},i)}renderBodyContext(){const e=this.setup(),i=()=>this.initSlot("default"),s={key:"bodyContext",class:e.classes.value.bodyContext};return this.components.renderOne("scrollbar",s,i)??l.h("div",s,i)}}const u={axis:"y",indent:4,overscroll:!0},G={open:Boolean,disabled:Boolean,preparation:Function,beforeOpening:Function,opening:Function,contextmenu:Boolean,staticMode:Boolean,axis:{type:String,default:u==null?void 0:u.axis},indent:{type:Number,default:u==null?void 0:u.indent},persistent:Boolean,overElement:[String,Object],autoClose:Boolean,flash:Boolean,inDom:Boolean,width:String,height:String,adaptive:String,overscroll:{type:Boolean,default:u==null?void 0:u.overscroll},dense:Boolean,fullscreen:Boolean,alignment:String,origin:String},m={width:["auto","max","sm","md","lg"],height:["auto","max","sm","md","lg"],adaptive:["menu","modal","modalDynamic","static","auto","staticSm","staticMd","staticLg"],alignment:["center","top","right","bottom","left"],origin:["center","top","right","bottom","left","topToBottom","rightToLeft","bottomToTop","leftToRight"]},f={...u,adaptive:"auto",overscroll:!0},V={...G,width:String,height:String,adaptive:{type:String,default:f==null?void 0:f.adaptive},overscroll:{type:Boolean,default:f==null?void 0:f.overscroll},dense:Boolean,fullscreen:Boolean,alignment:String,origin:String},z=l.defineComponent({name:"M3Window",__name:"M3Window",props:{...V},emits:["window"],setup(o,{expose:t,emit:e}){const i=e,s=o,r=l.computed(()=>({main:{"m3-window":!0,"m3-window--width--custom":b.isFilled(s.width)&&!w.inArray(m.width,s.width),[`m3-window--width--${s.width}`]:w.inArray(m.width,s.width),"m3-window--height--custom":b.isFilled(s.height)&&!w.inArray(m.height,s.height),[`m3-window--height--${s.height}`]:w.inArray(m.height,s.height),[`m3-window--adaptive--${s.adaptive}`]:w.inArray(m.adaptive,s.adaptive),"m3-window--overscroll":s.overscroll,"m3-window--dense":s.dense,"m3-window--fullscreen":s.fullscreen,[`m3-window--alignment--${s.alignment}`]:w.inArray(m.alignment,s.alignment),[`m3-window--origin--${s.origin}`]:w.inArray(m.origin,s.origin)}})),h=l.computed(()=>({"m3-window-sys-width":s.width??null,"m3-window-sys-height":s.height??null})),a=new j("m3.window",s,{emits:i,components:{scrollbar:$.M3Scrollbar},classes:r,styles:h}),c=a.render();return t(a.expose()),(g,p)=>(l.openBlock(),l.createBlock(l.resolveDynamicComponent(l.unref(c))))}}),J=z;exports.M3Window=J;
