"use strict";var y=Object.defineProperty;var k=(s,t,e)=>t in s?y(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var r=(s,t,e)=>(k(s,typeof t!="symbol"?t+"":t,e),e);const h=require("vue"),I=require("./DesignConstructorAbstract-BUcyMiAM.cjs"),d=require("./Geo-VVc_JzGu.cjs"),m=require("./DesignAsyncAbstract-CVhttDdX.cjs"),S=require("./GeoIntl-bAPmWQn7.cjs"),v=require("./Icons-BnnpG1mE.cjs"),z=require("./GeoFlag-BgDiqZTJ.cjs"),A=require("./isArray-Bin_5of_.cjs"),C=require("./getElementId-BJPPLqQT.cjs"),l=require("./toNumber-BpR23ePZ.cjs"),x=require("./EventItem-BcAMj33T.cjs"),B=require("./isFilled-BySHTEb1.cjs"),H=1280;class b{static isImage(t){return!!t.type.match(/^image\//)}static createImage(t){return new Promise(e=>{if(t){const i=new Image;i.onerror=()=>e(void 0),i.onload=()=>{e({image:i,src:this.getSRC(i,t),width:i.naturalWidth,height:i.naturalHeight})},(async()=>i.src=t instanceof File?await this.getFileResult(t):t)()}else e(void 0)})}static getPath(t){return this.createImage(t).then(e=>(e==null?void 0:e.src)??"")}static getFileResult(t){return new Promise(e=>{this.isImage(t)?this.getFileReader(t).then(i=>e(i)):e("")})}static getFileReader(t){return new Promise(e=>{const i=new FileReader;i.onload=()=>e(typeof i.result=="string"?i.result:""),i.readAsDataURL(t)})}static getSRC(t,e,i=H){var a;if((e instanceof File||e===void 0)&&(t.naturalHeight>i||t.naturalWidth>i)){const c=t.naturalWidth>=t.naturalHeight,u=(a=document.createElement("canvas"))==null?void 0:a.getContext("2d");return u?(u.canvas.width=c?i:t.naturalWidth/t.naturalHeight*i,u.canvas.height=c?t.naturalHeight/t.naturalWidth*i:i,u.drawImage(t,0,0,u.canvas.width,u.canvas.height),u.canvas.toDataURL()):""}else return t.src}}const f="#toolbar=0&scrollbar=1";class w{static isPdf(t){return d.isString(t)?!!t.match(/\.pdf$/i):!!t.type.match(/\/pdf$/i)}static async get(t){return d.isString(t)?`${t}${f}`:this.isPdf(t)?`${await b.getFileReader(t)}${f}`:""}}var n=(s=>(s.pdf="pdf",s.file="file",s.image="image",s.flag="flag",s.color="color",s.public="public",s.filled="filled",s.outlined="outlined",s.round="round",s.sharp="sharp",s.twoTone="two-tone",s.material="material",s.icon="icon",s))(n||{});class j extends S.CacheItem{constructor(t){super(()=>this.update()),this.props=t}get(){var t;return this.getCache([(t=this.props)==null?void 0:t.value])}update(){var e;const t=(e=this.props)==null?void 0:e.value;if(t){if(w.isPdf(t))return n.pdf;if(t instanceof File)return n.file;if(t.match(/\//))return n.image;if(t.match(z.GEO_FLAG_ICON_NAME))return n.icon;if(t.match(/^#/))return n.color;if(t.match(/^@/))return n.public;if(t.match(/^\$/))return n.material;if(t.match(/^flag-[a-z]{2}$/))return n.flag;const i=t.match(/^(filled|outlined|round|sharp|two-tone)-/);return i?i[1]:v.Icons.is(t)?n.public:n.material}}}class F extends m.DesignAsyncAbstract{constructor(e,i,a){var c;super(e,a,["value","url"]);r(this,"item");this.type=i,(c=this.props)!=null&&c.value&&this.make()}is(){return this.getImage()!==void 0}isLink(){return this.is()&&typeof this.getImage()=="string"}isImage(){return this.is()&&typeof this.getImage()!="string"}getImage(){var e;return(e=this.event)==null?void 0:e.image}async initEvent(){this.isChanged("image",["value","url"])&&(this.event.image=await this.initImage())}async initImage(){var i,a;const e=(i=this.props)==null?void 0:i.value;if(e)switch(this.type.get()){case n.pdf:return await w.get(e);case n.image:case n.file:try{return await b.createImage(e)}catch{console.error(Image,e)}break;case n.public:case n.icon:case n.flag:if(d.isString(e))return await v.Icons.get(e,(a=this.props)==null?void 0:a.url);break}}}class E{constructor(t){this.props=t}is(){var e;const t=(e=this.props)==null?void 0:e.coordinator;return A.isArray(t)&&t.length>0&&t.length<5}get(){const t=this.getCoordinator();return{width:100-t[1]-t[3],height:100-t[2]-t[0]}}getCoordinator(){var t;if(this.is()){const e=(t=this.props)==null?void 0:t.coordinator;switch(e.length){case 1:return[e[0],e[0],e[0],e[0]];case 2:return[e[0],e[1],e[0],e[1]];case 3:return[e[0],e[1],e[2],e[1]];case 4:return e}}return[0,0,0,0]}getSize(){const t=this.get();return{width:`${100/t.width*100}%`,height:`${100/t.height*100}%`}}}class W{constructor(t,e){this.props=t,this.coordinator=e}getX(){var t,e;return this.coordinator.is()?`${this.coordinator.getCoordinator()[3]+this.coordinator.get().width/2}%`:((e=(t=this.props)==null?void 0:t.x)==null?void 0:e.toString())||"center"}getY(){var t,e;return this.coordinator.is()?`${this.coordinator.getCoordinator()[0]+this.coordinator.get().height/2}%`:((e=(t=this.props)==null?void 0:t.y)==null?void 0:e.toString())||"center"}}class ${constructor(t){r(this,"factorMax",1);r(this,"size",{width:0,height:0});r(this,"offset",{width:7680,height:7680});this.name=t}is(t){return this.name===t}isSize(){return!!(this.size.width||this.size.width)}getWidth(){return this.size.width}getHeight(){return this.size.height}getOffsetWidth(){return this.offset.width}getOffsetHeight(){return this.offset.height}getFactorMax(){return this.factorMax}makeWidth(t){return t>this.size.width&&(this.size.width=t),this}makeHeight(t){return t>this.size.height&&(this.size.height=t),this}makeOffsetWidth(t){return t<this.offset.width&&(this.offset.width=t),this}makeOffsetHeight(t){return t<this.offset.height&&(this.offset.height=t),this}makeFactorMax(t){return t<this.factorMax&&(this.factorMax=t),this}reset(){return this.factorMax=1,this.size={width:0,height:0},this.offset={width:7680,height:7680},this}}class g{static isSize(){return this.items.find(t=>t.isSize())!==void 0}static get(t){return this.find(t)||this.init(t)}static reset(){this.items.forEach(t=>t.reset())}static find(t){return this.items.find(e=>e.is(t))}static init(t){const e=new $(t);return this.items.push(e),e}}r(g,"items",[]);class o{static is(t){return this.objects.findIndex(e=>e===t)!==-1}static add(t){this.is(t)||(this.objects.push(t),this.make())}static remove(t){const e=this.objects.findIndex(i=>i===t);e!==-1&&(this.objects.splice(e,1),this.cache=[]),this.make()}static reset(){this.cache=[],this.start()}static make(){this.event&&this.objects.length<1?(this.event.stop(),this.event=void 0):this.objects.length>0&&(this.event=new x.EventItem(window,["scroll-sync"],()=>this.start()).start(),this.start())}static getItemIdByVisible(){const t=[];return this.objectsAdaptive.forEach(e=>{e.isBeyond()&&t.push(e.getId())}),t}static start(){var t;if(this.isAdaptive()){this.makeAdaptive();const e=this.getItemIdByVisible();this.isCache(e)&&(this.cache=e,this.makeSize(),this.makePercent(),this.makeFactorMax(),this.makeCallback())}else(t=this.event)==null||t.stop()}static makeAdaptive(){this.objectsAdaptive=[],this.objects.forEach(t=>{t.make(),t.isBeyond()&&this.objectsAdaptive.push(t)})}static makeSize(){g.reset(),this.objectsAdaptive.forEach(t=>{const e=t.getElement();e&&t.isBeyond()&&g.get(t.getGroup()).makeWidth(t.getWidth()).makeHeight(t.getHeight()).makeOffsetWidth(e.offsetWidth).makeOffsetHeight(e.offsetHeight)})}static makePercent(){g.isSize()&&this.objectsAdaptive.forEach(t=>{const e=t.getElement(),i=g.get(t.getGroup());if(e){const a=i.getWidth(),c=i.getHeight();t.setPercent(t.getWidth()*(a?1/a:0)*(i.getOffsetWidth()/e.offsetWidth),t.getHeight()*(c?1/c:0)*(i.getOffsetHeight()/e.offsetHeight))}})}static makeFactorMax(){g.isSize()&&this.objectsAdaptive.forEach(t=>{t.isVisible()&&g.get(t.getGroup()).makeFactorMax(t.getFactor())})}static makeCallback(){this.objectsAdaptive.forEach(t=>t.makeCallback())}static isAdaptive(){return!!this.objects.find(t=>t.is())}static isCache(t){return this.cache.join("|")!==t.join("|")}}r(o,"objects",[]),r(o,"objectsAdaptive",[]),r(o,"cache",[]),r(o,"event"),r(o,"time");const R="main",p=512;class M{constructor(t,e,i,a){r(this,"percent",{width:0,height:0});r(this,"beyond",!1);r(this,"visible",!1);this.props=t,this.data=e,this.element=i,this.callback=a,this.reset()}is(){var t;return!!((t=this.props)!=null&&t.adaptive)&&this.data.isImage()&&!!(this.element.value&&this.element.value.closest("body")&&(this.getWidth()||this.getHeight()))}isGroup(t){return this.getGroup()===t}isBeyond(){return this.beyond}isVisible(){return this.visible}getGroup(){var t;return((t=this.props)==null?void 0:t.adaptiveGroup)??R}getId(){return C.getElementId(this.element.value)}getElement(){return this.element.value}getWidth(){var t;return l.toNumber(((t=this.props)==null?void 0:t.objectWidth)??0)}getHeight(){var t;return l.toNumber(((t=this.props)==null?void 0:t.objectHeight)??0)}getType(){if(this.getWidth()&&this.percent.width>0)return"x";if(this.getHeight()&&this.percent.height>0)return"y"}getSize(){if(this.element.value&&this.data.isImage()){const t=this.data.getImage();switch(this.getType()){case"x":return t.height*(this.element.value.offsetWidth*this.percent.width/t.width);case"y":return t.width*(this.element.value.offsetHeight*this.percent.height/t.height)}}return 0}getFactor(){const t=this.element.value,e=this.getSize(),i=this.getType();if(t){if(i==="x"&&e>t.offsetHeight)return t.offsetHeight/e;if(i==="y"&&e>t.offsetWidth)return t.offsetWidth/e}return 1}getBackgroundSize(){const t=g.get(this.getGroup()).getFactorMax();switch(this.getType()){case"x":return`${100*this.percent.width*t}% auto`;case"y":return`auto ${100*this.percent.height*t}%`}return null}setPercent(t,e){return this.percent.width=t,this.percent.height=e,this}update(){this.is()?o.add(this):o.remove(this)}reset(){this.is()&&(o.is(this)?o.reset():o.add(this))}remove(){this.is()&&o.remove(this)}make(){var t,e;if(this.beyond=!1,this.visible=!1,this.is())if((t=this.props)!=null&&t.adaptiveAlways)this.beyond=!0,this.visible=!0;else{const i=(e=this.element.value)==null?void 0:e.getBoundingClientRect();i&&(this.beyond=!(i.bottom<0-p||i.top>window.innerHeight+p),this.visible=!(i.bottom<0||i.top>window.innerHeight))}return this}makeCallback(){var t;return(t=this.callback)==null||t.call(this),this}}class O{constructor(t,e,i,a){this.props=t,this.data=e,this.coordinator=i,this.adaptive=a}get(){if(this.coordinator.is())return this.getSizeByCoordinator();if(this.adaptive.is()){const t=this.adaptive.getBackgroundSize();if(t)return t.toString()}return this.getSizeForItem()}getImage(){const t=this.data.getImage();switch(typeof t){case"string":return`url("${t}")`;case"object":return`url("${t.src}")`;default:return null}}getSize(t,e){const i=this.data.getImage();return typeof i=="object"?i.height<i.width?`auto ${e}`:`${t} auto`:null}getSizeByCoordinator(){const{width:t,height:e}=this.coordinator.getSize();return this.getSize(t,e)}getSizeForItem(){var e;const t=(e=this.props)==null?void 0:e.size;return t&&B.isFilled(t)?t.toString().match(/%$/)?this.getSize(t,t):t.toString():null}}let P=class extends m.DesignAsyncAbstract{constructor(e,i,a){super(e,a);r(this,"type");r(this,"data");r(this,"coordinator");r(this,"position");r(this,"adaptiveItem");r(this,"background");this.props=e,this.callback=a,this.type=new j(e),this.data=new F(e,this.type,()=>{this.adaptiveItem.is()&&this.adaptiveItem.reset(),this.make(!0)}),this.coordinator=new E(e),this.position=new W(e,this.coordinator),this.adaptiveItem=new M(e,this.data,i,()=>this.make(!0)),this.background=new O(e,this.data,this.coordinator,this.adaptiveItem)}destructor(){this.adaptiveItem.remove()}getType(){return this.type.get()}getValue(){var e;return(e=this.props)==null?void 0:e.value}getData(){return this.data}getText(){const e=this.type.get();if(e===n.pdf){const a=this.data.getImage();if(d.isString(a))return a}const i=this.getValue();if(e&&d.isString(i)&&["filled","outlined","round","sharp","two-tone","material"].indexOf(e)!==-1)return i.replace(/^(filled|outlined|round|sharp|two-tone)-/,"")}getClasses(){const e=this.type.get(),i={[`??--type--${e}`]:e!==void 0,"??--background":!!this.background.getImage(),notranslate:!0};switch(e){case"filled":case"outlined":case"round":case"sharp":case"two-tone":case"material":i["material-icons"]=!0;break}return i}getStyles(){var e;return((e=this.event)==null?void 0:e.styles)||{}}updateAdaptive(){return this.adaptiveItem.update(),this.make(!0),this}async initEvent(){(!this.event.image||this.isChanged("image",["value","url"]))&&(this.event.image=this.getData().getImage()),this.event.styles=this.initStyles()}initStyles(){var i,a;const e=this.getValue();if(e)switch(this.type.get()){case n.file:case n.image:return{"background-image":this.background.getImage(),"background-size":this.background.get(),"background-position-x":(i=this.position)==null?void 0:i.getX(),"background-position-y":(a=this.position)==null?void 0:a.getY()};case n.icon:case n.flag:return{"background-image":this.background.getImage()};case n.public:return{"mask-image":this.background.getImage()};case n.color:if(d.isString(e))return{"background-color":e}}return{}}};class D{constructor(t,e){r(this,"item");r(this,"type",h.computed(()=>this.item.getType()));r(this,"data",h.shallowRef());r(this,"text",h.computed(()=>this.item.getText()));r(this,"classes",h.shallowRef());r(this,"styles",h.shallowRef());this.item=new P(t,e,i=>{this.data.value=i.image,this.classes.value=this.item.getClasses(),this.styles.value=i.styles}),this.classes.value=this.item.getClasses(),h.watchEffect(()=>this.item.data.make(!0)),h.watchEffect(()=>this.item.updateAdaptive())}destructor(){this.item.destructor()}}class G extends I.DesignConstructorAbstract{constructor(e,i,a){super(e,i,a);r(this,"image");this.image=new D(this.props,this.element),this.init(),h.onUnmounted(()=>this.image.destructor()),h.watch(this.image.data,c=>{var u;return(u=this.emits)==null?void 0:u.call(this,"load",{type:this.image.type.value,image:c})})}makeOptions(){return this}initSetup(){return{type:this.image.type,data:this.image.data,text:this.image.text,renderValue:()=>this.renderValue()}}initExpose(){const e=this.setup();return{type:e.type,data:e.data}}initClasses(){return{main:{...this.toClassName(this.image.classes.value)}}}initStyles(){return{...this.image.styles.value}}initRender(){const e=this.setup();return h.h("span",{ref:this.element,class:e.classes.value.main,style:e.styles.value,translate:"no"},e.renderValue())}renderValue(){const e=this.setup();return e.type.value===n.pdf?[h.h("object",{data:e.data.value})]:e.text.value}}const q={adaptiveGroup:"basic"},N={value:[String,File],coordinator:Array,size:String,x:[String,Number],y:[String,Number],adaptiveGroup:{type:String,default:q.adaptiveGroup},adaptiveAlways:Boolean,objectWidth:[String,Number],objectHeight:[String,Number],url:String,turn:Boolean,disabled:Boolean,hide:Boolean,adaptive:Boolean};exports.ImageDesign=G;exports.propsImage=N;
