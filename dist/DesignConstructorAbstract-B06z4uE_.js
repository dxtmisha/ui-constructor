var Ic = Object.defineProperty;
var kc = (e, t, n) => t in e ? Ic(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var le = (e, t, n) => (kc(e, typeof t != "symbol" ? t + "" : t, n), n);
import { g as kr, a as Pc, d as Vi, G as fs, f as In } from "./Api-BN9TTpr9.js";
import { t as $n } from "./toArray-rswbj5Xf.js";
function xi(e) {
  return kr(e) && !Array.isArray(e);
}
function Ti(e) {
  return e === window;
}
function Vt(e) {
  if (Ti(e))
    return document.body;
  if (typeof e == "string")
    try {
      return document.querySelector(e) ?? void 0;
    } catch {
      return;
    }
  return e;
}
function Lc(e, t) {
  return Math.floor(Math.random() * (t - e + 1) + e);
}
let xo = Lc(1e5, 9e5);
function fp(e, t) {
  const n = Vt(e);
  return n ? (Pc(n.id) || n.setAttribute("id", `id-${xo++}`), t ? `#${n.id}${t}`.trim() : n.id) : `id-${xo++}`;
}
function To(e) {
  return Ti(e) ? e : Vt(e);
}
function Fc(e) {
  return Array.isArray(e);
}
function jc(e) {
  var t;
  return !!((t = Vt(e)) != null && t.closest("html"));
}
/**
* @vue/shared v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Se(e, t) {
  const n = new Set(e.split(","));
  return t ? (s) => n.has(s.toLowerCase()) : (s) => n.has(s);
}
const te = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, Yt = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], fe = () => {
}, Si = () => !1, cn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ds = (e) => e.startsWith("onUpdate:"), ne = Object.assign, Pr = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Hc = Object.prototype.hasOwnProperty, X = (e, t) => Hc.call(e, t), F = Array.isArray, St = (e) => an(e) === "[object Map]", Ht = (e) => an(e) === "[object Set]", So = (e) => an(e) === "[object Date]", Bc = (e) => an(e) === "[object RegExp]", K = (e) => typeof e == "function", se = (e) => typeof e == "string", _t = (e) => typeof e == "symbol", ee = (e) => e !== null && typeof e == "object", Cs = (e) => (ee(e) || K(e)) && K(e.then) && K(e.catch), Ai = Object.prototype.toString, an = (e) => Ai.call(e), Lr = (e) => an(e).slice(8, -1), Mi = (e) => an(e) === "[object Object]", Fr = (e) => se(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Jt = /* @__PURE__ */ Se(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Uc = /* @__PURE__ */ Se(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), ws = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Kc = /-(\w)/g, $e = ws((e) => e.replace(Kc, (t, n) => n ? n.toUpperCase() : "")), Gc = /\B([A-Z])/g, ye = ws(
  (e) => e.replace(Gc, "-$1").toLowerCase()
), yt = ws((e) => e.charAt(0).toUpperCase() + e.slice(1)), Je = ws((e) => e ? `on${yt(e)}` : ""), Le = (e, t) => !Object.is(e, t), ut = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, ps = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, kn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, hs = (e) => {
  const t = se(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Ao;
const jr = () => Ao || (Ao = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {}), Wc = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error", zc = /* @__PURE__ */ Se(Wc);
function un(e) {
  if (F(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = se(s) ? Zc(s) : un(s);
      if (r)
        for (const o in r)
          t[o] = r[o];
    }
    return t;
  } else if (se(e) || ee(e))
    return e;
}
const qc = /;(?![^(]*\))/g, Yc = /:([^]+)/, Jc = /\/\*[^]*?\*\//g;
function Zc(e) {
  const t = {};
  return e.replace(Jc, "").split(qc).forEach((n) => {
    if (n) {
      const s = n.split(Yc);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function Xc(e) {
  let t = "";
  if (!e || se(e))
    return t;
  for (const n in e) {
    const s = e[n], r = n.startsWith("--") ? n : ye(n);
    (se(s) || typeof s == "number") && (t += `${r}:${s};`);
  }
  return t;
}
function fn(e) {
  let t = "";
  if (se(e))
    t = e;
  else if (F(e))
    for (let n = 0; n < e.length; n++) {
      const s = fn(e[n]);
      s && (t += s + " ");
    }
  else if (ee(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function Qc(e) {
  if (!e)
    return null;
  let { class: t, style: n } = e;
  return t && !se(t) && (e.class = fn(t)), n && (e.style = un(n)), e;
}
const ea = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", ta = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", na = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", sa = /* @__PURE__ */ Se(ea), ra = /* @__PURE__ */ Se(ta), oa = /* @__PURE__ */ Se(na), Ri = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ia = /* @__PURE__ */ Se(Ri), Mo = /* @__PURE__ */ Se(
  Ri + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected"
);
function Hr(e) {
  return !!e || e === "";
}
const la = /* @__PURE__ */ Se(
  "accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap"
), ca = /* @__PURE__ */ Se(
  "xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xmlns:xlink,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan"
);
function aa(e) {
  if (e == null)
    return !1;
  const t = typeof e;
  return t === "string" || t === "number" || t === "boolean";
}
function ua(e, t) {
  if (e.length !== t.length)
    return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = vt(e[s], t[s]);
  return n;
}
function vt(e, t) {
  if (e === t)
    return !0;
  let n = So(e), s = So(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = _t(e), s = _t(t), n || s)
    return e === t;
  if (n = F(e), s = F(t), n || s)
    return n && s ? ua(e, t) : !1;
  if (n = ee(e), s = ee(t), n || s) {
    if (!n || !s)
      return !1;
    const r = Object.keys(e).length, o = Object.keys(t).length;
    if (r !== o)
      return !1;
    for (const i in e) {
      const l = e.hasOwnProperty(i), c = t.hasOwnProperty(i);
      if (l && !c || !l && c || !vt(e[i], t[i]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Ds(e, t) {
  return e.findIndex((n) => vt(n, t));
}
const fa = (e) => se(e) ? e : e == null ? "" : F(e) || ee(e) && (e.toString === Ai || !K(e.toString)) ? JSON.stringify(e, Ii, 2) : String(e), Ii = (e, t) => t && t.__v_isRef ? Ii(e, t.value) : St(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, r], o) => (n[Zs(s, o) + " =>"] = r, n),
    {}
  )
} : Ht(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Zs(n))
} : _t(t) ? Zs(t) : ee(t) && !F(t) && !Mi(t) ? String(t) : t, Zs = (e, t = "") => {
  var n;
  return _t(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
};
/**
* @vue/reactivity v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function nn(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let xe;
class Br {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = xe, !t && xe && (this.index = (xe.scopes || (xe.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = xe;
      try {
        return xe = this, t();
      } finally {
        xe = n;
      }
    } else
      process.env.NODE_ENV !== "production" && nn("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    xe = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    xe = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++)
        this.effects[n].stop();
      for (n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, s = this.scopes.length; n < s; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function da(e) {
  return new Br(e);
}
function ki(e, t = xe) {
  t && t.active && t.effects.push(e);
}
function Pi() {
  return xe;
}
function pa(e) {
  xe ? xe.cleanups.push(e) : process.env.NODE_ENV !== "production" && nn(
    "onScopeDispose() is called when there is no active effect scope to be associated with."
  );
}
let At;
class sn {
  constructor(t, n, s, r) {
    this.fn = t, this.trigger = n, this.scheduler = s, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, ki(this, r);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, Ot();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (ha(n.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), $t();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = dt, n = At;
    try {
      return dt = !0, At = this, this._runnings++, Ro(this), this.fn();
    } finally {
      Io(this), this._runnings--, At = n, dt = t;
    }
  }
  stop() {
    var t;
    this.active && (Ro(this), Io(this), (t = this.onStop) == null || t.call(this), this.active = !1);
  }
}
function ha(e) {
  return e.value;
}
function Ro(e) {
  e._trackId++, e._depsLength = 0;
}
function Io(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      Li(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function Li(e, t) {
  const n = e.get(t);
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup());
}
function ma(e, t) {
  e.effect instanceof sn && (e = e.effect.fn);
  const n = new sn(e, fe, () => {
    n.dirty && n.run();
  });
  t && (ne(n, t), t.scope && ki(n, t.scope)), (!t || !t.lazy) && n.run();
  const s = n.run.bind(n);
  return s.effect = n, s;
}
function ga(e) {
  e.effect.stop();
}
let dt = !0, ur = 0;
const Fi = [];
function Ot() {
  Fi.push(dt), dt = !1;
}
function $t() {
  const e = Fi.pop();
  dt = e === void 0 ? !0 : e;
}
function Ur() {
  ur++;
}
function Kr() {
  for (ur--; !ur && fr.length; )
    fr.shift()();
}
function ji(e, t, n) {
  var s;
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const r = e.deps[e._depsLength];
    r !== t ? (r && Li(r, e), e.deps[e._depsLength++] = t) : e._depsLength++, process.env.NODE_ENV !== "production" && ((s = e.onTrack) == null || s.call(e, ne({ effect: e }, n)));
  }
}
const fr = [];
function Hi(e, t, n) {
  var s;
  Ur();
  for (const r of e.keys()) {
    let o;
    r._dirtyLevel < t && (o ?? (o = e.get(r) === r._trackId)) && (r._shouldSchedule || (r._shouldSchedule = r._dirtyLevel === 0), r._dirtyLevel = t), r._shouldSchedule && (o ?? (o = e.get(r) === r._trackId)) && (process.env.NODE_ENV !== "production" && ((s = r.onTrigger) == null || s.call(r, ne({ effect: r }, n))), r.trigger(), (!r._runnings || r.allowRecurse) && r._dirtyLevel !== 2 && (r._shouldSchedule = !1, r.scheduler && fr.push(r.scheduler)));
  }
  Kr();
}
const Bi = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, ms = /* @__PURE__ */ new WeakMap(), Mt = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), dr = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
function _e(e, t, n) {
  if (dt && At) {
    let s = ms.get(e);
    s || ms.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || s.set(n, r = Bi(() => s.delete(n))), ji(
      At,
      r,
      process.env.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n
      } : void 0
    );
  }
}
function Be(e, t, n, s, r, o) {
  const i = ms.get(e);
  if (!i)
    return;
  let l = [];
  if (t === "clear")
    l = [...i.values()];
  else if (n === "length" && F(e)) {
    const c = Number(s);
    i.forEach((a, h) => {
      (h === "length" || !_t(h) && h >= c) && l.push(a);
    });
  } else
    switch (n !== void 0 && l.push(i.get(n)), t) {
      case "add":
        F(e) ? Fr(n) && l.push(i.get("length")) : (l.push(i.get(Mt)), St(e) && l.push(i.get(dr)));
        break;
      case "delete":
        F(e) || (l.push(i.get(Mt)), St(e) && l.push(i.get(dr)));
        break;
      case "set":
        St(e) && l.push(i.get(Mt));
        break;
    }
  Ur();
  for (const c of l)
    c && Hi(
      c,
      4,
      process.env.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n,
        newValue: s,
        oldValue: r,
        oldTarget: o
      } : void 0
    );
  Kr();
}
function Ea(e, t) {
  var n;
  return (n = ms.get(e)) == null ? void 0 : n.get(t);
}
const _a = /* @__PURE__ */ Se("__proto__,__v_isRef,__isVue"), Ui = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(_t)
), ko = /* @__PURE__ */ ya();
function ya() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const s = Y(this);
      for (let o = 0, i = this.length; o < i; o++)
        _e(s, "get", o + "");
      const r = s[t](...n);
      return r === -1 || r === !1 ? s[t](...n.map(Y)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      Ot(), Ur();
      const s = Y(this)[t].apply(this, n);
      return Kr(), $t(), s;
    };
  }), e;
}
function va(e) {
  const t = Y(this);
  return _e(t, "has", e), t.hasOwnProperty(e);
}
class Ki {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._shallow = n;
  }
  get(t, n, s) {
    const r = this._isReadonly, o = this._shallow;
    if (n === "__v_isReactive")
      return !r;
    if (n === "__v_isReadonly")
      return r;
    if (n === "__v_isShallow")
      return o;
    if (n === "__v_raw")
      return s === (r ? o ? Zi : Ji : o ? Yi : qi).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const i = F(t);
    if (!r) {
      if (i && X(ko, n))
        return Reflect.get(ko, n, s);
      if (n === "hasOwnProperty")
        return va;
    }
    const l = Reflect.get(t, n, s);
    return (_t(n) ? Ui.has(n) : _a(n)) || (r || _e(t, "get", n), o) ? l : he(l) ? i && Fr(n) ? l : l.value : ee(l) ? r ? Wr(l) : Ts(l) : l;
  }
}
class Gi extends Ki {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let o = t[n];
    if (!this._shallow) {
      const c = Xe(o);
      if (!ht(s) && !Xe(s) && (o = Y(o), s = Y(s)), !F(t) && he(o) && !he(s))
        return c ? !1 : (o.value = s, !0);
    }
    const i = F(t) && Fr(n) ? Number(n) < t.length : X(t, n), l = Reflect.set(t, n, s, r);
    return t === Y(r) && (i ? Le(s, o) && Be(t, "set", n, s, o) : Be(t, "add", n, s)), l;
  }
  deleteProperty(t, n) {
    const s = X(t, n), r = t[n], o = Reflect.deleteProperty(t, n);
    return o && s && Be(t, "delete", n, void 0, r), o;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!_t(n) || !Ui.has(n)) && _e(t, "has", n), s;
  }
  ownKeys(t) {
    return _e(
      t,
      "iterate",
      F(t) ? "length" : Mt
    ), Reflect.ownKeys(t);
  }
}
class Wi extends Ki {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && nn(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && nn(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Na = /* @__PURE__ */ new Gi(), ba = /* @__PURE__ */ new Wi(), Oa = /* @__PURE__ */ new Gi(
  !0
), $a = /* @__PURE__ */ new Wi(!0), Gr = (e) => e, Vs = (e) => Reflect.getPrototypeOf(e);
function Qn(e, t, n = !1, s = !1) {
  e = e.__v_raw;
  const r = Y(e), o = Y(t);
  n || (Le(t, o) && _e(r, "get", t), _e(r, "get", o));
  const { has: i } = Vs(r), l = s ? Gr : n ? qr : Ln;
  if (i.call(r, t))
    return l(e.get(t));
  if (i.call(r, o))
    return l(e.get(o));
  e !== r && e.get(t);
}
function es(e, t = !1) {
  const n = this.__v_raw, s = Y(n), r = Y(e);
  return t || (Le(e, r) && _e(s, "has", e), _e(s, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function ts(e, t = !1) {
  return e = e.__v_raw, !t && _e(Y(e), "iterate", Mt), Reflect.get(e, "size", e);
}
function Po(e) {
  e = Y(e);
  const t = Y(this);
  return Vs(t).has.call(t, e) || (t.add(e), Be(t, "add", e, e)), this;
}
function Lo(e, t) {
  t = Y(t);
  const n = Y(this), { has: s, get: r } = Vs(n);
  let o = s.call(n, e);
  o ? process.env.NODE_ENV !== "production" && zi(n, s, e) : (e = Y(e), o = s.call(n, e));
  const i = r.call(n, e);
  return n.set(e, t), o ? Le(t, i) && Be(n, "set", e, t, i) : Be(n, "add", e, t), this;
}
function Fo(e) {
  const t = Y(this), { has: n, get: s } = Vs(t);
  let r = n.call(t, e);
  r ? process.env.NODE_ENV !== "production" && zi(t, n, e) : (e = Y(e), r = n.call(t, e));
  const o = s ? s.call(t, e) : void 0, i = t.delete(e);
  return r && Be(t, "delete", e, void 0, o), i;
}
function jo() {
  const e = Y(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? St(e) ? new Map(e) : new Set(e) : void 0, s = e.clear();
  return t && Be(e, "clear", void 0, void 0, n), s;
}
function ns(e, t) {
  return function(s, r) {
    const o = this, i = o.__v_raw, l = Y(i), c = t ? Gr : e ? qr : Ln;
    return !e && _e(l, "iterate", Mt), i.forEach((a, h) => s.call(r, c(a), c(h), o));
  };
}
function ss(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, o = Y(r), i = St(o), l = e === "entries" || e === Symbol.iterator && i, c = e === "keys" && i, a = r[e](...s), h = n ? Gr : t ? qr : Ln;
    return !t && _e(
      o,
      "iterate",
      c ? dr : Mt
    ), {
      // iterator protocol
      next() {
        const { value: d, done: m } = a.next();
        return m ? { value: d, done: m } : {
          value: l ? [h(d[0]), h(d[1])] : h(d),
          done: m
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function st(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(
        `${yt(e)} operation ${n}failed: target is readonly.`,
        Y(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Ca() {
  const e = {
    get(o) {
      return Qn(this, o);
    },
    get size() {
      return ts(this);
    },
    has: es,
    add: Po,
    set: Lo,
    delete: Fo,
    clear: jo,
    forEach: ns(!1, !1)
  }, t = {
    get(o) {
      return Qn(this, o, !1, !0);
    },
    get size() {
      return ts(this);
    },
    has: es,
    add: Po,
    set: Lo,
    delete: Fo,
    clear: jo,
    forEach: ns(!1, !0)
  }, n = {
    get(o) {
      return Qn(this, o, !0);
    },
    get size() {
      return ts(this, !0);
    },
    has(o) {
      return es.call(this, o, !0);
    },
    add: st("add"),
    set: st("set"),
    delete: st("delete"),
    clear: st("clear"),
    forEach: ns(!0, !1)
  }, s = {
    get(o) {
      return Qn(this, o, !0, !0);
    },
    get size() {
      return ts(this, !0);
    },
    has(o) {
      return es.call(this, o, !0);
    },
    add: st("add"),
    set: st("set"),
    delete: st("delete"),
    clear: st("clear"),
    forEach: ns(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
    e[o] = ss(
      o,
      !1,
      !1
    ), n[o] = ss(
      o,
      !0,
      !1
    ), t[o] = ss(
      o,
      !1,
      !0
    ), s[o] = ss(
      o,
      !0,
      !0
    );
  }), [
    e,
    n,
    t,
    s
  ];
}
const [
  wa,
  Da,
  Va,
  xa
] = /* @__PURE__ */ Ca();
function xs(e, t) {
  const n = t ? e ? xa : Va : e ? Da : wa;
  return (s, r, o) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(
    X(n, r) && r in s ? n : s,
    r,
    o
  );
}
const Ta = {
  get: /* @__PURE__ */ xs(!1, !1)
}, Sa = {
  get: /* @__PURE__ */ xs(!1, !0)
}, Aa = {
  get: /* @__PURE__ */ xs(!0, !1)
}, Ma = {
  get: /* @__PURE__ */ xs(!0, !0)
};
function zi(e, t, n) {
  const s = Y(n);
  if (s !== n && t.call(e, s)) {
    const r = Lr(e);
    console.warn(
      `Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const qi = /* @__PURE__ */ new WeakMap(), Yi = /* @__PURE__ */ new WeakMap(), Ji = /* @__PURE__ */ new WeakMap(), Zi = /* @__PURE__ */ new WeakMap();
function Ra(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Ia(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Ra(Lr(e));
}
function Ts(e) {
  return Xe(e) ? e : Ss(
    e,
    !1,
    Na,
    Ta,
    qi
  );
}
function Xi(e) {
  return Ss(
    e,
    !1,
    Oa,
    Sa,
    Yi
  );
}
function Wr(e) {
  return Ss(
    e,
    !0,
    ba,
    Aa,
    Ji
  );
}
function xt(e) {
  return Ss(
    e,
    !0,
    $a,
    Ma,
    Zi
  );
}
function Ss(e, t, n, s, r) {
  if (!ee(e))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = r.get(e);
  if (o)
    return o;
  const i = Ia(e);
  if (i === 0)
    return e;
  const l = new Proxy(
    e,
    i === 2 ? s : n
  );
  return r.set(e, l), l;
}
function pt(e) {
  return Xe(e) ? pt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Xe(e) {
  return !!(e && e.__v_isReadonly);
}
function ht(e) {
  return !!(e && e.__v_isShallow);
}
function Pn(e) {
  return pt(e) || Xe(e);
}
function Y(e) {
  const t = e && e.__v_raw;
  return t ? Y(t) : e;
}
function zr(e) {
  return Object.isExtensible(e) && ps(e, "__v_skip", !0), e;
}
const Ln = (e) => ee(e) ? Ts(e) : e, qr = (e) => ee(e) ? Wr(e) : e, ka = "Computed is still dirty after getter evaluation, likely because a computed is mutating its own dependency in its getter. State mutations in computed getters should be avoided.  Check the docs for more details: https://vuejs.org/guide/essentials/computed.html#getters-should-be-side-effect-free";
class Qi {
  constructor(t, n, s, r) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new sn(
      () => t(this._value),
      () => Zt(
        this,
        this.effect._dirtyLevel === 2 ? 2 : 3
      )
    ), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = s;
  }
  get value() {
    const t = Y(this);
    return (!t._cacheable || t.effect.dirty) && Le(t._value, t._value = t.effect.run()) && Zt(t, 4), Yr(t), t.effect._dirtyLevel >= 2 && (process.env.NODE_ENV !== "production" && nn(ka), Zt(t, 2)), t._value;
  }
  set value(t) {
    this._setter(t);
  }
  // #region polyfill _dirty for backward compatibility third party code for Vue <= 3.3.x
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(t) {
    this.effect.dirty = t;
  }
  // #endregion
}
function Pa(e, t, n = !1) {
  let s, r;
  const o = K(e);
  o ? (s = e, r = process.env.NODE_ENV !== "production" ? () => {
    nn("Write operation failed: computed value is readonly");
  } : fe) : (s = e.get, r = e.set);
  const i = new Qi(s, r, o || !r, n);
  return process.env.NODE_ENV !== "production" && t && !n && (i.effect.onTrack = t.onTrack, i.effect.onTrigger = t.onTrigger), i;
}
function Yr(e) {
  var t;
  dt && At && (e = Y(e), ji(
    At,
    (t = e.dep) != null ? t : e.dep = Bi(
      () => e.dep = void 0,
      e instanceof Qi ? e : void 0
    ),
    process.env.NODE_ENV !== "production" ? {
      target: e,
      type: "get",
      key: "value"
    } : void 0
  ));
}
function Zt(e, t = 4, n) {
  e = Y(e);
  const s = e.dep;
  s && Hi(
    s,
    t,
    process.env.NODE_ENV !== "production" ? {
      target: e,
      type: "set",
      key: "value",
      newValue: n
    } : void 0
  );
}
function he(e) {
  return !!(e && e.__v_isRef === !0);
}
function mt(e) {
  return el(e, !1);
}
function La(e) {
  return el(e, !0);
}
function el(e, t) {
  return he(e) ? e : new Fa(e, t);
}
class Fa {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : Y(t), this._value = n ? t : Ln(t);
  }
  get value() {
    return Yr(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || ht(t) || Xe(t);
    t = n ? t : Y(t), Le(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : Ln(t), Zt(this, 4, t));
  }
}
function ja(e) {
  Zt(e, 4, process.env.NODE_ENV !== "production" ? e.value : void 0);
}
function Jr(e) {
  return he(e) ? e.value : e;
}
function Ha(e) {
  return K(e) ? e() : Jr(e);
}
const Ba = {
  get: (e, t, n) => Jr(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return he(r) && !he(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Zr(e) {
  return pt(e) ? e : new Proxy(e, Ba);
}
class Ua {
  constructor(t) {
    this.dep = void 0, this.__v_isRef = !0;
    const { get: n, set: s } = t(
      () => Yr(this),
      () => Zt(this)
    );
    this._get = n, this._set = s;
  }
  get value() {
    return this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function tl(e) {
  return new Ua(e);
}
function nl(e) {
  process.env.NODE_ENV !== "production" && !Pn(e) && console.warn("toRefs() expects a reactive object but received a plain one.");
  const t = F(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = sl(e, n);
  return t;
}
class Ka {
  constructor(t, n, s) {
    this._object = t, this._key = n, this._defaultValue = s, this.__v_isRef = !0;
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return Ea(Y(this._object), this._key);
  }
}
class Ga {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0;
  }
  get value() {
    return this._getter();
  }
}
function Wa(e, t, n) {
  return he(e) ? e : K(e) ? new Ga(e) : ee(e) && arguments.length > 1 ? sl(e, t, n) : mt(e);
}
function sl(e, t, n) {
  const s = e[t];
  return he(s) ? s : new Ka(e, t, n);
}
const za = {
  GET: "get",
  HAS: "has",
  ITERATE: "iterate"
}, qa = {
  SET: "set",
  ADD: "add",
  DELETE: "delete",
  CLEAR: "clear"
};
/**
* @vue/runtime-core v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Rt = [];
function Cn(e) {
  Rt.push(e);
}
function wn() {
  Rt.pop();
}
function N(e, ...t) {
  Ot();
  const n = Rt.length ? Rt[Rt.length - 1].component : null, s = n && n.appContext.config.warnHandler, r = Ya();
  if (s)
    Ue(
      s,
      n,
      11,
      [
        e + t.join(""),
        n && n.proxy,
        r.map(
          ({ vnode: o }) => `at <${Gs(n, o.type)}>`
        ).join(`
`),
        r
      ]
    );
  else {
    const o = [`[Vue warn]: ${e}`, ...t];
    r.length && o.push(`
`, ...Ja(r)), console.warn(...o);
  }
  $t();
}
function Ya() {
  let e = Rt[Rt.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const s = e.component && e.component.parent;
    e = s && s.vnode;
  }
  return t;
}
function Ja(e) {
  const t = [];
  return e.forEach((n, s) => {
    t.push(...s === 0 ? [] : [`
`], ...Za(n));
  }), t;
}
function Za({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, r = ` at <${Gs(
    e.component,
    e.type,
    s
  )}`, o = ">" + n;
  return e.props ? [r, ...Xa(e.props), o] : [r + o];
}
function Xa(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((s) => {
    t.push(...rl(s, e[s]));
  }), n.length > 3 && t.push(" ..."), t;
}
function rl(e, t, n) {
  return se(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : he(t) ? (t = rl(e, Y(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : K(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = Y(t), n ? t : [`${e}=`, t]);
}
function Xr(e, t) {
  process.env.NODE_ENV !== "production" && e !== void 0 && (typeof e != "number" ? N(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && N(`${t} is NaN - the duration expression might be incorrect.`));
}
const Qa = {
  SETUP_FUNCTION: 0,
  0: "SETUP_FUNCTION",
  RENDER_FUNCTION: 1,
  1: "RENDER_FUNCTION",
  WATCH_GETTER: 2,
  2: "WATCH_GETTER",
  WATCH_CALLBACK: 3,
  3: "WATCH_CALLBACK",
  WATCH_CLEANUP: 4,
  4: "WATCH_CLEANUP",
  NATIVE_EVENT_HANDLER: 5,
  5: "NATIVE_EVENT_HANDLER",
  COMPONENT_EVENT_HANDLER: 6,
  6: "COMPONENT_EVENT_HANDLER",
  VNODE_HOOK: 7,
  7: "VNODE_HOOK",
  DIRECTIVE_HOOK: 8,
  8: "DIRECTIVE_HOOK",
  TRANSITION_HOOK: 9,
  9: "TRANSITION_HOOK",
  APP_ERROR_HANDLER: 10,
  10: "APP_ERROR_HANDLER",
  APP_WARN_HANDLER: 11,
  11: "APP_WARN_HANDLER",
  FUNCTION_REF: 12,
  12: "FUNCTION_REF",
  ASYNC_COMPONENT_LOADER: 13,
  13: "ASYNC_COMPONENT_LOADER",
  SCHEDULER: 14,
  14: "SCHEDULER"
}, As = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."
};
function Ue(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    Ct(r, t, n);
  }
}
function Te(e, t, n, s) {
  if (K(e)) {
    const o = Ue(e, t, n, s);
    return o && Cs(o) && o.catch((i) => {
      Ct(i, t, n);
    }), o;
  }
  const r = [];
  for (let o = 0; o < e.length; o++)
    r.push(Te(e[o], t, n, s));
  return r;
}
function Ct(e, t, n, s = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const i = t.proxy, l = process.env.NODE_ENV !== "production" ? As[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; o; ) {
      const a = o.ec;
      if (a) {
        for (let h = 0; h < a.length; h++)
          if (a[h](e, i, l) === !1)
            return;
      }
      o = o.parent;
    }
    const c = t.appContext.config.errorHandler;
    if (c) {
      Ue(
        c,
        null,
        10,
        [e, i, l]
      );
      return;
    }
  }
  eu(e, n, r, s);
}
function eu(e, t, n, s = !0) {
  if (process.env.NODE_ENV !== "production") {
    const r = As[t];
    if (n && Cn(n), N(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && wn(), s)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let Fn = !1, pr = !1;
const ve = [];
let He = 0;
const Xt = [];
let Ye = null, it = 0;
const ol = /* @__PURE__ */ Promise.resolve();
let Qr = null;
const tu = 100;
function Ms(e) {
  const t = Qr || ol;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function nu(e) {
  let t = He + 1, n = ve.length;
  for (; t < n; ) {
    const s = t + n >>> 1, r = ve[s], o = Hn(r);
    o < e || o === e && r.pre ? t = s + 1 : n = s;
  }
  return t;
}
function zn(e) {
  (!ve.length || !ve.includes(
    e,
    Fn && e.allowRecurse ? He + 1 : He
  )) && (e.id == null ? ve.push(e) : ve.splice(nu(e.id), 0, e), il());
}
function il() {
  !Fn && !pr && (pr = !0, Qr = ol.then(ll));
}
function su(e) {
  const t = ve.indexOf(e);
  t > He && ve.splice(t, 1);
}
function jn(e) {
  F(e) ? Xt.push(...e) : (!Ye || !Ye.includes(
    e,
    e.allowRecurse ? it + 1 : it
  )) && Xt.push(e), il();
}
function Ho(e, t, n = Fn ? He + 1 : 0) {
  for (process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < ve.length; n++) {
    const s = ve[n];
    if (s && s.pre) {
      if (e && s.id !== e.uid || process.env.NODE_ENV !== "production" && eo(t, s))
        continue;
      ve.splice(n, 1), n--, s();
    }
  }
}
function gs(e) {
  if (Xt.length) {
    const t = [...new Set(Xt)].sort(
      (n, s) => Hn(n) - Hn(s)
    );
    if (Xt.length = 0, Ye) {
      Ye.push(...t);
      return;
    }
    for (Ye = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), it = 0; it < Ye.length; it++)
      process.env.NODE_ENV !== "production" && eo(e, Ye[it]) || Ye[it]();
    Ye = null, it = 0;
  }
}
const Hn = (e) => e.id == null ? 1 / 0 : e.id, ru = (e, t) => {
  const n = Hn(e) - Hn(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function ll(e) {
  pr = !1, Fn = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), ve.sort(ru);
  const t = process.env.NODE_ENV !== "production" ? (n) => eo(e, n) : fe;
  try {
    for (He = 0; He < ve.length; He++) {
      const n = ve[He];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        Ue(n, null, 14);
      }
    }
  } finally {
    He = 0, ve.length = 0, gs(e), Fn = !1, Qr = null, (ve.length || Xt.length) && ll(e);
  }
}
function eo(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > tu) {
      const s = t.ownerInstance, r = s && Gn(s.type);
      return Ct(
        `Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
let gt = !1;
const Wt = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (jr().__VUE_HMR_RUNTIME__ = {
  createRecord: Xs(cl),
  rerender: Xs(lu),
  reload: Xs(cu)
});
const Pt = /* @__PURE__ */ new Map();
function ou(e) {
  const t = e.type.__hmrId;
  let n = Pt.get(t);
  n || (cl(t, e.type), n = Pt.get(t)), n.instances.add(e);
}
function iu(e) {
  Pt.get(e.type.__hmrId).instances.delete(e);
}
function cl(e, t) {
  return Pt.has(e) ? !1 : (Pt.set(e, {
    initialDef: Dn(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Dn(e) {
  return ac(e) ? e.__vccOpts : e;
}
function lu(e, t) {
  const n = Pt.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((s) => {
    t && (s.render = t, Dn(s.type).render = t), s.renderCache = [], gt = !0, s.effect.dirty = !0, s.update(), gt = !1;
  }));
}
function cu(e, t) {
  const n = Pt.get(e);
  if (!n)
    return;
  t = Dn(t), Bo(n.initialDef, t);
  const s = [...n.instances];
  for (const r of s) {
    const o = Dn(r.type);
    Wt.has(o) || (o !== n.initialDef && Bo(o, t), Wt.add(o)), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (Wt.add(o), r.ceReload(t.styles), Wt.delete(o)) : r.parent ? (r.parent.effect.dirty = !0, zn(r.parent.update)) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  jn(() => {
    for (const r of s)
      Wt.delete(
        Dn(r.type)
      );
  });
}
function Bo(e, t) {
  ne(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Xs(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (s) {
      console.error(s), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let ke, Nn = [], hr = !1;
function qn(e, ...t) {
  ke ? ke.emit(e, ...t) : hr || Nn.push({ event: e, args: t });
}
function to(e, t) {
  var n, s;
  ke = e, ke ? (ke.enabled = !0, Nn.forEach(({ event: r, args: o }) => ke.emit(r, ...o)), Nn = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !((s = (n = window.navigator) == null ? void 0 : n.userAgent) != null && s.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((o) => {
    to(o, t);
  }), setTimeout(() => {
    ke || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, hr = !0, Nn = []);
  }, 3e3)) : (hr = !0, Nn = []);
}
function au(e, t) {
  qn("app:init", e, t, {
    Fragment: me,
    Text: Nt,
    Comment: pe,
    Static: Et
  });
}
function uu(e) {
  qn("app:unmount", e);
}
const mr = /* @__PURE__ */ no(
  "component:added"
  /* COMPONENT_ADDED */
), al = /* @__PURE__ */ no(
  "component:updated"
  /* COMPONENT_UPDATED */
), fu = /* @__PURE__ */ no(
  "component:removed"
  /* COMPONENT_REMOVED */
), du = (e) => {
  ke && typeof ke.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !ke.cleanupBuffer(e) && fu(e);
};
function no(e) {
  return (t) => {
    qn(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const pu = /* @__PURE__ */ ul(
  "perf:start"
  /* PERFORMANCE_START */
), hu = /* @__PURE__ */ ul(
  "perf:end"
  /* PERFORMANCE_END */
);
function ul(e) {
  return (t, n, s) => {
    qn(e, t.appContext.app, t.uid, t, n, s);
  };
}
function mu(e, t, n) {
  qn(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
function gu(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const s = e.vnode.props || te;
  if (process.env.NODE_ENV !== "production") {
    const {
      emitsOptions: h,
      propsOptions: [d]
    } = e;
    if (h)
      if (!(t in h))
        (!d || !(Je(t) in d)) && N(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Je(t)}" prop.`
        );
      else {
        const m = h[t];
        K(m) && (m(...n) || N(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let r = n;
  const o = t.startsWith("update:"), i = o && t.slice(7);
  if (i && i in s) {
    const h = `${i === "modelValue" ? "model" : i}Modifiers`, { number: d, trim: m } = s[h] || te;
    m && (r = n.map((v) => se(v) ? v.trim() : v)), d && (r = n.map(kn));
  }
  if (process.env.NODE_ENV !== "production" && mu(e, t, r), process.env.NODE_ENV !== "production") {
    const h = t.toLowerCase();
    h !== t && s[Je(h)] && N(
      `Event "${h}" is emitted in component ${Gs(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${ye(
        t
      )}" instead of "${t}".`
    );
  }
  let l, c = s[l = Je(t)] || // also try camelCase event handler (#2249)
  s[l = Je($e(t))];
  !c && o && (c = s[l = Je(ye(t))]), c && Te(
    c,
    e,
    6,
    r
  );
  const a = s[l + "Once"];
  if (a) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Te(
      a,
      e,
      6,
      r
    );
  }
}
function fl(e, t, n = !1) {
  const s = t.emitsCache, r = s.get(e);
  if (r !== void 0)
    return r;
  const o = e.emits;
  let i = {}, l = !1;
  if (!K(e)) {
    const c = (a) => {
      const h = fl(a, t, !0);
      h && (l = !0, ne(i, h));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !o && !l ? (ee(e) && s.set(e, null), null) : (F(o) ? o.forEach((c) => i[c] = null) : ne(i, o), ee(e) && s.set(e, i), i);
}
function Rs(e, t) {
  return !e || !cn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), X(e, t[0].toLowerCase() + t.slice(1)) || X(e, ye(t)) || X(e, t));
}
let ue = null, Is = null;
function Bn(e) {
  const t = ue;
  return ue = e, Is = e && e.type.__scopeId || null, t;
}
function Eu(e) {
  Is = e;
}
function _u() {
  Is = null;
}
const yu = (e) => so;
function so(e, t = ue, n) {
  if (!t || e._n)
    return e;
  const s = (...r) => {
    s._d && $r(-1);
    const o = Bn(t);
    let i;
    try {
      i = e(...r);
    } finally {
      Bn(o), s._d && $r(1);
    }
    return process.env.NODE_ENV !== "production" && al(t), i;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
let gr = !1;
function Es() {
  gr = !0;
}
function as(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: r,
    props: o,
    propsOptions: [i],
    slots: l,
    attrs: c,
    emit: a,
    render: h,
    renderCache: d,
    data: m,
    setupState: v,
    ctx: b,
    inheritAttrs: k
  } = e;
  let W, q;
  const S = Bn(e);
  process.env.NODE_ENV !== "production" && (gr = !1);
  try {
    if (n.shapeFlag & 4) {
      const y = r || s, V = process.env.NODE_ENV !== "production" && v.__isScriptSetup ? new Proxy(y, {
        get(O, x, M) {
          return N(
            `Property '${String(
              x
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(O, x, M);
        }
      }) : y;
      W = we(
        h.call(
          V,
          y,
          d,
          o,
          v,
          m,
          b
        )
      ), q = c;
    } else {
      const y = t;
      process.env.NODE_ENV !== "production" && c === o && Es(), W = we(
        y.length > 1 ? y(
          o,
          process.env.NODE_ENV !== "production" ? {
            get attrs() {
              return Es(), c;
            },
            slots: l,
            emit: a
          } : { attrs: c, slots: l, emit: a }
        ) : y(
          o,
          null
          /* we know it doesn't need it */
        )
      ), q = t.props ? c : vu(c);
    }
  } catch (y) {
    An.length = 0, Ct(y, e, 1), W = ce(pe);
  }
  let g = W, E;
  if (process.env.NODE_ENV !== "production" && W.patchFlag > 0 && W.patchFlag & 2048 && ([g, E] = dl(W)), q && k !== !1) {
    const y = Object.keys(q), { shapeFlag: V } = g;
    if (y.length) {
      if (V & 7)
        i && y.some(ds) && (q = Nu(
          q,
          i
        )), g = Re(g, q);
      else if (process.env.NODE_ENV !== "production" && !gr && g.type !== pe) {
        const O = Object.keys(c), x = [], M = [];
        for (let I = 0, B = O.length; I < B; I++) {
          const R = O[I];
          cn(R) ? ds(R) || x.push(R[2].toLowerCase() + R.slice(3)) : M.push(R);
        }
        M.length && N(
          `Extraneous non-props attributes (${M.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
        ), x.length && N(
          `Extraneous non-emits event listeners (${x.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !Uo(g) && N(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), g = Re(g), g.dirs = g.dirs ? g.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !Uo(g) && N(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), g.transition = n.transition), process.env.NODE_ENV !== "production" && E ? E(g) : W = g, Bn(S), W;
}
const dl = (e) => {
  const t = e.children, n = e.dynamicChildren, s = ks(t, !1);
  if (s) {
    if (process.env.NODE_ENV !== "production" && s.patchFlag > 0 && s.patchFlag & 2048)
      return dl(s);
  } else
    return [e, void 0];
  const r = t.indexOf(s), o = n ? n.indexOf(s) : -1, i = (l) => {
    t[r] = l, n && (o > -1 ? n[o] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [we(s), i];
};
function ks(e, t = !0) {
  let n;
  for (let s = 0; s < e.length; s++) {
    const r = e[s];
    if (Qe(r)) {
      if (r.type !== pe || r.children === "v-if") {
        if (n)
          return;
        if (n = r, process.env.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return ks(n.children);
      }
    } else
      return;
  }
  return n;
}
const vu = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || cn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Nu = (e, t) => {
  const n = {};
  for (const s in e)
    (!ds(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
}, Uo = (e) => e.shapeFlag & 7 || e.type === pe;
function bu(e, t, n) {
  const { props: s, children: r, component: o } = e, { props: i, children: l, patchFlag: c } = t, a = o.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (r || l) && gt || t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return s ? Ko(s, i, a) : !!i;
    if (c & 8) {
      const h = t.dynamicProps;
      for (let d = 0; d < h.length; d++) {
        const m = h[d];
        if (i[m] !== s[m] && !Rs(a, m))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : s === i ? !1 : s ? i ? Ko(s, i, a) : !0 : !!i;
  return !1;
}
function Ko(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < s.length; r++) {
    const o = s[r];
    if (t[o] !== e[o] && !Rs(n, o))
      return !0;
  }
  return !1;
}
function ro({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const _s = "components", Ou = "directives";
function $u(e, t) {
  return io(_s, e, !0, t) || e;
}
const oo = Symbol.for("v-ndc");
function Cu(e) {
  return se(e) ? io(_s, e, !1) || e : e || oo;
}
function wu(e) {
  return io(Ou, e);
}
function io(e, t, n = !0, s = !1) {
  const r = ue || de;
  if (r) {
    const o = r.type;
    if (e === _s) {
      const l = Gn(
        o,
        !1
      );
      if (l && (l === t || l === $e(t) || l === yt($e(t))))
        return o;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      Go(r[e] || o[e], t) || // global registration
      Go(r.appContext[e], t)
    );
    if (!i && s)
      return o;
    if (process.env.NODE_ENV !== "production" && n && !i) {
      const l = e === _s ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      N(`Failed to resolve ${e.slice(0, -1)}: ${t}${l}`);
    }
    return i;
  } else
    process.env.NODE_ENV !== "production" && N(
      `resolve${yt(e.slice(0, -1))} can only be used in render() or setup().`
    );
}
function Go(e, t) {
  return e && (e[t] || e[$e(t)] || e[yt($e(t))]);
}
const pl = (e) => e.__isSuspense;
let Er = 0;
const Du = {
  name: "Suspense",
  // In order to make Suspense tree-shakable, we need to avoid importing it
  // directly in the renderer. The renderer checks for the __isSuspense flag
  // on a vnode's type and calls the `process` method, passing in renderer
  // internals.
  __isSuspense: !0,
  process(e, t, n, s, r, o, i, l, c, a) {
    if (e == null)
      xu(
        t,
        n,
        s,
        r,
        o,
        i,
        l,
        c,
        a
      );
    else {
      if (o && o.deps > 0) {
        t.suspense = e.suspense;
        return;
      }
      Tu(
        e,
        t,
        n,
        s,
        r,
        i,
        l,
        c,
        a
      );
    }
  },
  hydrate: Su,
  create: lo,
  normalize: Au
}, Vu = Du;
function Un(e, t) {
  const n = e.props && e.props[t];
  K(n) && n();
}
function xu(e, t, n, s, r, o, i, l, c) {
  const {
    p: a,
    o: { createElement: h }
  } = c, d = h("div"), m = e.suspense = lo(
    e,
    r,
    s,
    t,
    d,
    n,
    o,
    i,
    l,
    c
  );
  a(
    null,
    m.pendingBranch = e.ssContent,
    d,
    null,
    s,
    m,
    o,
    i
  ), m.deps > 0 ? (Un(e, "onPending"), Un(e, "onFallback"), a(
    null,
    e.ssFallback,
    t,
    n,
    s,
    null,
    // fallback tree will not have suspense context
    o,
    i
  ), Qt(m, e.ssFallback)) : m.resolve(!1, !0);
}
function Tu(e, t, n, s, r, o, i, l, { p: c, um: a, o: { createElement: h } }) {
  const d = t.suspense = e.suspense;
  d.vnode = t, t.el = e.el;
  const m = t.ssContent, v = t.ssFallback, { activeBranch: b, pendingBranch: k, isInFallback: W, isHydrating: q } = d;
  if (k)
    d.pendingBranch = m, Pe(m, k) ? (c(
      k,
      m,
      d.hiddenContainer,
      null,
      r,
      d,
      o,
      i,
      l
    ), d.deps <= 0 ? d.resolve() : W && (q || (c(
      b,
      v,
      n,
      s,
      r,
      null,
      // fallback tree will not have suspense context
      o,
      i,
      l
    ), Qt(d, v)))) : (d.pendingId = Er++, q ? (d.isHydrating = !1, d.activeBranch = k) : a(k, r, d), d.deps = 0, d.effects.length = 0, d.hiddenContainer = h("div"), W ? (c(
      null,
      m,
      d.hiddenContainer,
      null,
      r,
      d,
      o,
      i,
      l
    ), d.deps <= 0 ? d.resolve() : (c(
      b,
      v,
      n,
      s,
      r,
      null,
      // fallback tree will not have suspense context
      o,
      i,
      l
    ), Qt(d, v))) : b && Pe(m, b) ? (c(
      b,
      m,
      n,
      s,
      r,
      d,
      o,
      i,
      l
    ), d.resolve(!0)) : (c(
      null,
      m,
      d.hiddenContainer,
      null,
      r,
      d,
      o,
      i,
      l
    ), d.deps <= 0 && d.resolve()));
  else if (b && Pe(m, b))
    c(
      b,
      m,
      n,
      s,
      r,
      d,
      o,
      i,
      l
    ), Qt(d, m);
  else if (Un(t, "onPending"), d.pendingBranch = m, m.shapeFlag & 512 ? d.pendingId = m.component.suspenseId : d.pendingId = Er++, c(
    null,
    m,
    d.hiddenContainer,
    null,
    r,
    d,
    o,
    i,
    l
  ), d.deps <= 0)
    d.resolve();
  else {
    const { timeout: S, pendingId: g } = d;
    S > 0 ? setTimeout(() => {
      d.pendingId === g && d.fallback(v);
    }, S) : S === 0 && d.fallback(v);
  }
}
let Wo = !1;
function lo(e, t, n, s, r, o, i, l, c, a, h = !1) {
  process.env.NODE_ENV !== "production" && !Wo && (Wo = !0, console[console.info ? "info" : "log"](
    "<Suspense> is an experimental feature and its API will likely change."
  ));
  const {
    p: d,
    m,
    um: v,
    n: b,
    o: { parentNode: k, remove: W }
  } = a;
  let q;
  const S = Mu(e);
  S && t != null && t.pendingBranch && (q = t.pendingId, t.deps++);
  const g = e.props ? hs(e.props.timeout) : void 0;
  process.env.NODE_ENV !== "production" && Xr(g, "Suspense timeout");
  const E = o, y = {
    vnode: e,
    parent: t,
    parentComponent: n,
    namespace: i,
    container: s,
    hiddenContainer: r,
    deps: 0,
    pendingId: Er++,
    timeout: typeof g == "number" ? g : -1,
    activeBranch: null,
    pendingBranch: null,
    isInFallback: !h,
    isHydrating: h,
    isUnmounted: !1,
    effects: [],
    resolve(V = !1, O = !1) {
      if (process.env.NODE_ENV !== "production") {
        if (!V && !y.pendingBranch)
          throw new Error(
            "suspense.resolve() is called without a pending branch."
          );
        if (y.isUnmounted)
          throw new Error(
            "suspense.resolve() is called on an already unmounted suspense boundary."
          );
      }
      const {
        vnode: x,
        activeBranch: M,
        pendingBranch: I,
        pendingId: B,
        effects: R,
        parentComponent: J,
        container: re
      } = y;
      let ie = !1;
      y.isHydrating ? y.isHydrating = !1 : V || (ie = M && I.transition && I.transition.mode === "out-in", ie && (M.transition.afterLeave = () => {
        B === y.pendingId && (m(
          I,
          re,
          o === E ? b(M) : o,
          0
        ), jn(R));
      }), M && (k(M.el) !== y.hiddenContainer && (o = b(M)), v(M, J, y, !0)), ie || m(I, re, o, 0)), Qt(y, I), y.pendingBranch = null, y.isInFallback = !1;
      let H = y.parent, z = !1;
      for (; H; ) {
        if (H.pendingBranch) {
          H.effects.push(...R), z = !0;
          break;
        }
        H = H.parent;
      }
      !z && !ie && jn(R), y.effects = [], S && t && t.pendingBranch && q === t.pendingId && (t.deps--, t.deps === 0 && !O && t.resolve()), Un(x, "onResolve");
    },
    fallback(V) {
      if (!y.pendingBranch)
        return;
      const { vnode: O, activeBranch: x, parentComponent: M, container: I, namespace: B } = y;
      Un(O, "onFallback");
      const R = b(x), J = () => {
        y.isInFallback && (d(
          null,
          V,
          I,
          R,
          M,
          null,
          // fallback tree will not have suspense context
          B,
          l,
          c
        ), Qt(y, V));
      }, re = V.transition && V.transition.mode === "out-in";
      re && (x.transition.afterLeave = J), y.isInFallback = !0, v(
        x,
        M,
        null,
        // no suspense so unmount hooks fire now
        !0
        // shouldRemove
      ), re || J();
    },
    move(V, O, x) {
      y.activeBranch && m(y.activeBranch, V, O, x), y.container = V;
    },
    next() {
      return y.activeBranch && b(y.activeBranch);
    },
    registerDep(V, O) {
      const x = !!y.pendingBranch;
      x && y.deps++;
      const M = V.vnode.el;
      V.asyncDep.catch((I) => {
        Ct(I, V, 0);
      }).then((I) => {
        if (V.isUnmounted || y.isUnmounted || y.pendingId !== V.suspenseId)
          return;
        V.asyncResolved = !0;
        const { vnode: B } = V;
        process.env.NODE_ENV !== "production" && Cn(B), xr(V, I, !1), M && (B.el = M);
        const R = !M && V.subTree.el;
        O(
          V,
          B,
          // component may have been moved before resolve.
          // if this is not a hydration, instance.subTree will be the comment
          // placeholder.
          k(M || V.subTree.el),
          // anchor will not be used if this is hydration, so only need to
          // consider the comment placeholder case.
          M ? null : b(V.subTree),
          y,
          i,
          c
        ), R && W(R), ro(V, B.el), process.env.NODE_ENV !== "production" && wn(), x && --y.deps === 0 && y.resolve();
      });
    },
    unmount(V, O) {
      y.isUnmounted = !0, y.activeBranch && v(
        y.activeBranch,
        n,
        V,
        O
      ), y.pendingBranch && v(
        y.pendingBranch,
        n,
        V,
        O
      );
    }
  };
  return y;
}
function Su(e, t, n, s, r, o, i, l, c) {
  const a = t.suspense = lo(
    t,
    s,
    n,
    e.parentNode,
    // eslint-disable-next-line no-restricted-globals
    document.createElement("div"),
    null,
    r,
    o,
    i,
    l,
    !0
  ), h = c(
    e,
    a.pendingBranch = t.ssContent,
    n,
    a,
    o,
    i
  );
  return a.deps === 0 && a.resolve(!1, !0), h;
}
function Au(e) {
  const { shapeFlag: t, children: n } = e, s = t & 32;
  e.ssContent = zo(
    s ? n.default : n
  ), e.ssFallback = s ? zo(n.fallback) : ce(pe);
}
function zo(e) {
  let t;
  if (K(e)) {
    const n = Ft && e._c;
    n && (e._d = !1, Bs()), e = e(), n && (e._d = !0, t = De, Zl());
  }
  if (F(e)) {
    const n = ks(e);
    process.env.NODE_ENV !== "production" && !n && e.filter((s) => s !== oo).length > 0 && N("<Suspense> slots expect a single root node."), e = n;
  }
  return e = we(e), t && !e.dynamicChildren && (e.dynamicChildren = t.filter((n) => n !== e)), e;
}
function hl(e, t) {
  t && t.pendingBranch ? F(e) ? t.effects.push(...e) : t.effects.push(e) : jn(e);
}
function Qt(e, t) {
  e.activeBranch = t;
  const { vnode: n, parentComponent: s } = e;
  let r = t.el;
  for (; !r && t.component; )
    t = t.component.subTree, r = t.el;
  n.el = r, s && s.subTree === n && (s.vnode.el = r, ro(s, r));
}
function Mu(e) {
  var t;
  return ((t = e.props) == null ? void 0 : t.suspensible) != null && e.props.suspensible !== !1;
}
const ml = Symbol.for("v-scx"), gl = () => {
  {
    const e = Tn(ml);
    return e || process.env.NODE_ENV !== "production" && N(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function Ru(e, t) {
  return Yn(e, null, t);
}
function El(e, t) {
  return Yn(
    e,
    null,
    process.env.NODE_ENV !== "production" ? ne({}, t, { flush: "post" }) : { flush: "post" }
  );
}
function _l(e, t) {
  return Yn(
    e,
    null,
    process.env.NODE_ENV !== "production" ? ne({}, t, { flush: "sync" }) : { flush: "sync" }
  );
}
const rs = {};
function Vn(e, t, n) {
  return process.env.NODE_ENV !== "production" && !K(t) && N(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Yn(e, t, n);
}
function Yn(e, t, {
  immediate: n,
  deep: s,
  flush: r,
  once: o,
  onTrack: i,
  onTrigger: l
} = te) {
  if (t && o) {
    const O = t;
    t = (...x) => {
      O(...x), V();
    };
  }
  process.env.NODE_ENV !== "production" && s !== void 0 && typeof s == "number" && N(
    'watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.'
  ), process.env.NODE_ENV !== "production" && !t && (n !== void 0 && N(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), s !== void 0 && N(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && N(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const c = (O) => {
    N(
      "Invalid watch source: ",
      O,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, a = de, h = (O) => s === !0 ? O : (
    // for deep: false, only traverse root-level properties
    Tt(O, s === !1 ? 1 : void 0)
  );
  let d, m = !1, v = !1;
  if (he(e) ? (d = () => e.value, m = ht(e)) : pt(e) ? (d = () => h(e), m = !0) : F(e) ? (v = !0, m = e.some((O) => pt(O) || ht(O)), d = () => e.map((O) => {
    if (he(O))
      return O.value;
    if (pt(O))
      return h(O);
    if (K(O))
      return Ue(O, a, 2);
    process.env.NODE_ENV !== "production" && c(O);
  })) : K(e) ? t ? d = () => Ue(e, a, 2) : d = () => (b && b(), Te(
    e,
    a,
    3,
    [k]
  )) : (d = fe, process.env.NODE_ENV !== "production" && c(e)), t && s) {
    const O = d;
    d = () => Tt(O());
  }
  let b, k = (O) => {
    b = E.onStop = () => {
      Ue(O, a, 4), b = E.onStop = void 0;
    };
  }, W;
  if (Zn)
    if (k = fe, t ? n && Te(t, a, 3, [
      d(),
      v ? [] : void 0,
      k
    ]) : d(), r === "sync") {
      const O = gl();
      W = O.__watcherHandles || (O.__watcherHandles = []);
    } else
      return fe;
  let q = v ? new Array(e.length).fill(rs) : rs;
  const S = () => {
    if (!(!E.active || !E.dirty))
      if (t) {
        const O = E.run();
        (s || m || (v ? O.some((x, M) => Le(x, q[M])) : Le(O, q))) && (b && b(), Te(t, a, 3, [
          O,
          // pass undefined as the old value when it's changed for the first time
          q === rs ? void 0 : v && q[0] === rs ? [] : q,
          k
        ]), q = O);
      } else
        E.run();
  };
  S.allowRecurse = !!t;
  let g;
  r === "sync" ? g = S : r === "post" ? g = () => Ee(S, a && a.suspense) : (S.pre = !0, a && (S.id = a.uid), g = () => zn(S));
  const E = new sn(d, fe, g), y = Pi(), V = () => {
    E.stop(), y && Pr(y.effects, E);
  };
  return process.env.NODE_ENV !== "production" && (E.onTrack = i, E.onTrigger = l), t ? n ? S() : q = E.run() : r === "post" ? Ee(
    E.run.bind(E),
    a && a.suspense
  ) : E.run(), W && W.push(V), V;
}
function Iu(e, t, n) {
  const s = this.proxy, r = se(e) ? e.includes(".") ? yl(s, e) : () => s[e] : e.bind(s, s);
  let o;
  K(t) ? o = t : (o = t.handler, n = t);
  const i = jt(this), l = Yn(r, o.bind(s), n);
  return i(), l;
}
function yl(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++)
      s = s[n[r]];
    return s;
  };
}
function Tt(e, t, n = 0, s) {
  if (!ee(e) || e.__v_skip)
    return e;
  if (t && t > 0) {
    if (n >= t)
      return e;
    n++;
  }
  if (s = s || /* @__PURE__ */ new Set(), s.has(e))
    return e;
  if (s.add(e), he(e))
    Tt(e.value, t, n, s);
  else if (F(e))
    for (let r = 0; r < e.length; r++)
      Tt(e[r], t, n, s);
  else if (Ht(e) || St(e))
    e.forEach((r) => {
      Tt(r, t, n, s);
    });
  else if (Mi(e))
    for (const r in e)
      Tt(e[r], t, n, s);
  return e;
}
function vl(e) {
  Uc(e) && N("Do not use built-in directive ids as custom directive id: " + e);
}
function ku(e, t) {
  if (ue === null)
    return process.env.NODE_ENV !== "production" && N("withDirectives can only be used inside render functions."), e;
  const n = Ks(ue) || ue.proxy, s = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [o, i, l, c = te] = t[r];
    o && (K(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && Tt(i), s.push({
      dir: o,
      instance: n,
      value: i,
      oldValue: void 0,
      arg: l,
      modifiers: c
    }));
  }
  return e;
}
function je(e, t, n, s) {
  const r = e.dirs, o = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const l = r[i];
    o && (l.oldValue = o[i].value);
    let c = l.dir[s];
    c && (Ot(), Te(c, n, 8, [
      e.el,
      l,
      e,
      t
    ]), $t());
  }
}
const lt = Symbol("_leaveCb"), os = Symbol("_enterCb");
function co() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Jn(() => {
    e.isMounted = !0;
  }), js(() => {
    e.isUnmounting = !0;
  }), e;
}
const Ae = [Function, Array], ao = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Ae,
  onEnter: Ae,
  onAfterEnter: Ae,
  onEnterCancelled: Ae,
  // leave
  onBeforeLeave: Ae,
  onLeave: Ae,
  onAfterLeave: Ae,
  onLeaveCancelled: Ae,
  // appear
  onBeforeAppear: Ae,
  onAppear: Ae,
  onAfterAppear: Ae,
  onAppearCancelled: Ae
}, Pu = {
  name: "BaseTransition",
  props: ao,
  setup(e, { slots: t }) {
    const n = tt(), s = co();
    let r;
    return () => {
      const o = t.default && Ps(t.default(), !0);
      if (!o || !o.length)
        return;
      let i = o[0];
      if (o.length > 1) {
        let k = !1;
        for (const W of o)
          if (W.type !== pe) {
            if (process.env.NODE_ENV !== "production" && k) {
              N(
                "<transition> can only be used on a single element or component. Use <transition-group> for lists."
              );
              break;
            }
            if (i = W, k = !0, process.env.NODE_ENV === "production")
              break;
          }
      }
      const l = Y(e), { mode: c } = l;
      if (process.env.NODE_ENV !== "production" && c && c !== "in-out" && c !== "out-in" && c !== "default" && N(`invalid <transition> mode: ${c}`), s.isLeaving)
        return Qs(i);
      const a = qo(i);
      if (!a)
        return Qs(i);
      const h = rn(
        a,
        l,
        s,
        n
      );
      Lt(a, h);
      const d = n.subTree, m = d && qo(d);
      let v = !1;
      const { getTransitionKey: b } = a.type;
      if (b) {
        const k = b();
        r === void 0 ? r = k : k !== r && (r = k, v = !0);
      }
      if (m && m.type !== pe && (!Pe(a, m) || v)) {
        const k = rn(
          m,
          l,
          s,
          n
        );
        if (Lt(m, k), c === "out-in")
          return s.isLeaving = !0, k.afterLeave = () => {
            s.isLeaving = !1, n.update.active !== !1 && (n.effect.dirty = !0, n.update());
          }, Qs(i);
        c === "in-out" && a.type !== pe && (k.delayLeave = (W, q, S) => {
          const g = bl(
            s,
            m
          );
          g[String(m.key)] = m, W[lt] = () => {
            q(), W[lt] = void 0, delete h.delayedLeave;
          }, h.delayedLeave = S;
        });
      }
      return i;
    };
  }
}, Nl = Pu;
function bl(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function rn(e, t, n, s) {
  const {
    appear: r,
    mode: o,
    persisted: i = !1,
    onBeforeEnter: l,
    onEnter: c,
    onAfterEnter: a,
    onEnterCancelled: h,
    onBeforeLeave: d,
    onLeave: m,
    onAfterLeave: v,
    onLeaveCancelled: b,
    onBeforeAppear: k,
    onAppear: W,
    onAfterAppear: q,
    onAppearCancelled: S
  } = t, g = String(e.key), E = bl(n, e), y = (x, M) => {
    x && Te(
      x,
      s,
      9,
      M
    );
  }, V = (x, M) => {
    const I = M[1];
    y(x, M), F(x) ? x.every((B) => B.length <= 1) && I() : x.length <= 1 && I();
  }, O = {
    mode: o,
    persisted: i,
    beforeEnter(x) {
      let M = l;
      if (!n.isMounted)
        if (r)
          M = k || l;
        else
          return;
      x[lt] && x[lt](
        !0
        /* cancelled */
      );
      const I = E[g];
      I && Pe(e, I) && I.el[lt] && I.el[lt](), y(M, [x]);
    },
    enter(x) {
      let M = c, I = a, B = h;
      if (!n.isMounted)
        if (r)
          M = W || c, I = q || a, B = S || h;
        else
          return;
      let R = !1;
      const J = x[os] = (re) => {
        R || (R = !0, re ? y(B, [x]) : y(I, [x]), O.delayedLeave && O.delayedLeave(), x[os] = void 0);
      };
      M ? V(M, [x, J]) : J();
    },
    leave(x, M) {
      const I = String(e.key);
      if (x[os] && x[os](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return M();
      y(d, [x]);
      let B = !1;
      const R = x[lt] = (J) => {
        B || (B = !0, M(), J ? y(b, [x]) : y(v, [x]), x[lt] = void 0, E[I] === e && delete E[I]);
      };
      E[I] = e, m ? V(m, [x, R]) : R();
    },
    clone(x) {
      return rn(x, t, n, s);
    }
  };
  return O;
}
function Qs(e) {
  if (dn(e))
    return e = Re(e), e.children = null, e;
}
function qo(e) {
  return dn(e) ? (
    // #7121 ensure get the child component subtree in case
    // it's been replaced during HMR
    process.env.NODE_ENV !== "production" && e.component ? e.component.subTree : e.children ? e.children[0] : void 0
  ) : e;
}
function Lt(e, t) {
  e.shapeFlag & 6 && e.component ? Lt(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Ps(e, t = !1, n) {
  let s = [], r = 0;
  for (let o = 0; o < e.length; o++) {
    let i = e[o];
    const l = n == null ? i.key : String(n) + String(i.key != null ? i.key : o);
    i.type === me ? (i.patchFlag & 128 && r++, s = s.concat(
      Ps(i.children, t, l)
    )) : (t || i.type !== pe) && s.push(l != null ? Re(i, { key: l }) : i);
  }
  if (r > 1)
    for (let o = 0; o < s.length; o++)
      s[o].patchFlag = -2;
  return s;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function uo(e, t) {
  return K(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ne({ name: e.name }, t, { setup: e })
  ) : e;
}
const It = (e) => !!e.type.__asyncLoader;
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Lu(e) {
  K(e) && (e = { loader: e });
  const {
    loader: t,
    loadingComponent: n,
    errorComponent: s,
    delay: r = 200,
    timeout: o,
    // undefined = never times out
    suspensible: i = !0,
    onError: l
  } = e;
  let c = null, a, h = 0;
  const d = () => (h++, c = null, m()), m = () => {
    let v;
    return c || (v = c = t().catch((b) => {
      if (b = b instanceof Error ? b : new Error(String(b)), l)
        return new Promise((k, W) => {
          l(b, () => k(d()), () => W(b), h + 1);
        });
      throw b;
    }).then((b) => {
      if (v !== c && c)
        return c;
      if (process.env.NODE_ENV !== "production" && !b && N(
        "Async component loader resolved to undefined. If you are using retry(), make sure to return its return value."
      ), b && (b.__esModule || b[Symbol.toStringTag] === "Module") && (b = b.default), process.env.NODE_ENV !== "production" && b && !ee(b) && !K(b))
        throw new Error(`Invalid async component load result: ${b}`);
      return a = b, b;
    }));
  };
  return /* @__PURE__ */ uo({
    name: "AsyncComponentWrapper",
    __asyncLoader: m,
    get __asyncResolved() {
      return a;
    },
    setup() {
      const v = de;
      if (a)
        return () => er(a, v);
      const b = (S) => {
        c = null, Ct(
          S,
          v,
          13,
          !s
        );
      };
      if (i && v.suspense || Zn)
        return m().then((S) => () => er(S, v)).catch((S) => (b(S), () => s ? ce(s, {
          error: S
        }) : null));
      const k = mt(!1), W = mt(), q = mt(!!r);
      return r && setTimeout(() => {
        q.value = !1;
      }, r), o != null && setTimeout(() => {
        if (!k.value && !W.value) {
          const S = new Error(
            `Async component timed out after ${o}ms.`
          );
          b(S), W.value = S;
        }
      }, o), m().then(() => {
        k.value = !0, v.parent && dn(v.parent.vnode) && (v.parent.effect.dirty = !0, zn(v.parent.update));
      }).catch((S) => {
        b(S), W.value = S;
      }), () => {
        if (k.value && a)
          return er(a, v);
        if (W.value && s)
          return ce(s, {
            error: W.value
          });
        if (n && !q.value)
          return ce(n);
      };
    }
  });
}
function er(e, t) {
  const { ref: n, props: s, children: r, ce: o } = t.vnode, i = ce(e, s, r);
  return i.ref = n, i.ce = o, delete t.vnode.ce, i;
}
const dn = (e) => e.type.__isKeepAlive, Fu = {
  name: "KeepAlive",
  // Marker for special handling inside the renderer. We are not using a ===
  // check directly on KeepAlive in the renderer, because importing it directly
  // would prevent it from being tree-shaken.
  __isKeepAlive: !0,
  props: {
    include: [String, RegExp, Array],
    exclude: [String, RegExp, Array],
    max: [String, Number]
  },
  setup(e, { slots: t }) {
    const n = tt(), s = n.ctx;
    if (!s.renderer)
      return () => {
        const S = t.default && t.default();
        return S && S.length === 1 ? S[0] : S;
      };
    const r = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set();
    let i = null;
    process.env.NODE_ENV !== "production" && (n.__v_cache = r);
    const l = n.suspense, {
      renderer: {
        p: c,
        m: a,
        um: h,
        o: { createElement: d }
      }
    } = s, m = d("div");
    s.activate = (S, g, E, y, V) => {
      const O = S.component;
      a(S, g, E, 0, l), c(
        O.vnode,
        S,
        g,
        E,
        O,
        l,
        y,
        S.slotScopeIds,
        V
      ), Ee(() => {
        O.isDeactivated = !1, O.a && ut(O.a);
        const x = S.props && S.props.onVnodeMounted;
        x && Ce(x, O.parent, S);
      }, l), process.env.NODE_ENV !== "production" && mr(O);
    }, s.deactivate = (S) => {
      const g = S.component;
      a(S, m, null, 1, l), Ee(() => {
        g.da && ut(g.da);
        const E = S.props && S.props.onVnodeUnmounted;
        E && Ce(E, g.parent, S), g.isDeactivated = !0;
      }, l), process.env.NODE_ENV !== "production" && mr(g);
    };
    function v(S) {
      tr(S), h(S, n, l, !0);
    }
    function b(S) {
      r.forEach((g, E) => {
        const y = Gn(g.type);
        y && (!S || !S(y)) && k(E);
      });
    }
    function k(S) {
      const g = r.get(S);
      !i || !Pe(g, i) ? v(g) : i && tr(i), r.delete(S), o.delete(S);
    }
    Vn(
      () => [e.include, e.exclude],
      ([S, g]) => {
        S && b((E) => bn(S, E)), g && b((E) => !bn(g, E));
      },
      // prune post-render after `current` has been updated
      { flush: "post", deep: !0 }
    );
    let W = null;
    const q = () => {
      W != null && r.set(W, nr(n.subTree));
    };
    return Jn(q), Fs(q), js(() => {
      r.forEach((S) => {
        const { subTree: g, suspense: E } = n, y = nr(g);
        if (S.type === y.type && S.key === y.key) {
          tr(y);
          const V = y.component.da;
          V && Ee(V, E);
          return;
        }
        v(S);
      });
    }), () => {
      if (W = null, !t.default)
        return null;
      const S = t.default(), g = S[0];
      if (S.length > 1)
        return process.env.NODE_ENV !== "production" && N("KeepAlive should contain exactly one component child."), i = null, S;
      if (!Qe(g) || !(g.shapeFlag & 4) && !(g.shapeFlag & 128))
        return i = null, g;
      let E = nr(g);
      const y = E.type, V = Gn(
        It(E) ? E.type.__asyncResolved || {} : y
      ), { include: O, exclude: x, max: M } = e;
      if (O && (!V || !bn(O, V)) || x && V && bn(x, V))
        return i = E, g;
      const I = E.key == null ? y : E.key, B = r.get(I);
      return E.el && (E = Re(E), g.shapeFlag & 128 && (g.ssContent = E)), W = I, B ? (E.el = B.el, E.component = B.component, E.transition && Lt(E, E.transition), E.shapeFlag |= 512, o.delete(I), o.add(I)) : (o.add(I), M && o.size > parseInt(M, 10) && k(o.values().next().value)), E.shapeFlag |= 256, i = E, pl(g.type) ? g : E;
    };
  }
}, ju = Fu;
function bn(e, t) {
  return F(e) ? e.some((n) => bn(n, t)) : se(e) ? e.split(",").includes(t) : Bc(e) ? e.test(t) : !1;
}
function Ol(e, t) {
  Cl(e, "a", t);
}
function $l(e, t) {
  Cl(e, "da", t);
}
function Cl(e, t, n = de) {
  const s = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (Ls(t, s, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      dn(r.parent.vnode) && Hu(s, t, n, r), r = r.parent;
  }
}
function Hu(e, t, n, s) {
  const r = Ls(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  Hs(() => {
    Pr(s[t], r);
  }, n);
}
function tr(e) {
  e.shapeFlag &= -257, e.shapeFlag &= -513;
}
function nr(e) {
  return e.shapeFlag & 128 ? e.ssContent : e;
}
function Ls(e, t, n = de, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...i) => {
      if (n.isUnmounted)
        return;
      Ot();
      const l = jt(n), c = Te(t, n, e, i);
      return l(), $t(), c;
    });
    return s ? r.unshift(o) : r.push(o), o;
  } else if (process.env.NODE_ENV !== "production") {
    const r = Je(As[e].replace(/ hook$/, ""));
    N(
      `${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const et = (e) => (t, n = de) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!Zn || e === "sp") && Ls(e, (...s) => t(...s), n)
), wl = et("bm"), Jn = et("m"), Dl = et("bu"), Fs = et("u"), js = et("bum"), Hs = et("um"), Vl = et("sp"), xl = et(
  "rtg"
), Tl = et(
  "rtc"
);
function Sl(e, t = de) {
  Ls("ec", e, t);
}
function Bu(e, t, n, s) {
  let r;
  const o = n && n[s];
  if (F(e) || se(e)) {
    r = new Array(e.length);
    for (let i = 0, l = e.length; i < l; i++)
      r[i] = t(e[i], i, void 0, o && o[i]);
  } else if (typeof e == "number") {
    process.env.NODE_ENV !== "production" && !Number.isInteger(e) && N(`The v-for range expect an integer value but got ${e}.`), r = new Array(e);
    for (let i = 0; i < e; i++)
      r[i] = t(i + 1, i, void 0, o && o[i]);
  } else if (ee(e))
    if (e[Symbol.iterator])
      r = Array.from(
        e,
        (i, l) => t(i, l, void 0, o && o[l])
      );
    else {
      const i = Object.keys(e);
      r = new Array(i.length);
      for (let l = 0, c = i.length; l < c; l++) {
        const a = i[l];
        r[l] = t(e[a], a, l, o && o[l]);
      }
    }
  else
    r = [];
  return n && (n[s] = r), r;
}
function Uu(e, t) {
  for (let n = 0; n < t.length; n++) {
    const s = t[n];
    if (F(s))
      for (let r = 0; r < s.length; r++)
        e[s[r].name] = s[r].fn;
    else
      s && (e[s.name] = s.key ? (...r) => {
        const o = s.fn(...r);
        return o && (o.key = s.key), o;
      } : s.fn);
  }
  return e;
}
function Ku(e, t, n = {}, s, r) {
  if (ue.isCE || ue.parent && It(ue.parent) && ue.parent.isCE)
    return t !== "default" && (n.name = t), ce("slot", n, s && s());
  let o = e[t];
  process.env.NODE_ENV !== "production" && o && o.length > 1 && (N(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), o = () => []), o && o._c && (o._d = !1), Bs();
  const i = o && Al(o(n)), l = mo(
    me,
    {
      key: n.key || // slot content array of a dynamic conditional slot may have a branch
      // key attached in the `createSlots` helper, respect that
      i && i.key || `_${t}`
    },
    i || (s ? s() : []),
    i && e._ === 1 ? 64 : -2
  );
  return !r && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), o && o._c && (o._d = !0), l;
}
function Al(e) {
  return e.some((t) => Qe(t) ? !(t.type === pe || t.type === me && !Al(t.children)) : !0) ? e : null;
}
function Gu(e, t) {
  const n = {};
  if (process.env.NODE_ENV !== "production" && !ee(e))
    return N("v-on with no argument expects an object value."), n;
  for (const s in e)
    n[t && /[A-Z]/.test(s) ? `on:${s}` : Je(s)] = e[s];
  return n;
}
const _r = (e) => e ? oc(e) ? Ks(e) || e.proxy : _r(e.parent) : null, kt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ne(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? xt(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? xt(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? xt(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? xt(e.refs) : e.refs,
    $parent: (e) => _r(e.parent),
    $root: (e) => _r(e.root),
    $emit: (e) => e.emit,
    $options: (e) => po(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, zn(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ms.bind(e.proxy)),
    $watch: (e) => Iu.bind(e)
  })
), fo = (e) => e === "_" || e === "$", sr = (e, t) => e !== te && !e.__isScriptSetup && X(e, t), xn = {
  get({ _: e }, t) {
    const { ctx: n, setupState: s, data: r, props: o, accessCache: i, type: l, appContext: c } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let a;
    if (t[0] !== "$") {
      const v = i[t];
      if (v !== void 0)
        switch (v) {
          case 1:
            return s[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return o[t];
        }
      else {
        if (sr(s, t))
          return i[t] = 1, s[t];
        if (r !== te && X(r, t))
          return i[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (a = e.propsOptions[0]) && X(a, t)
        )
          return i[t] = 3, o[t];
        if (n !== te && X(n, t))
          return i[t] = 4, n[t];
        yr && (i[t] = 0);
      }
    }
    const h = kt[t];
    let d, m;
    if (h)
      return t === "$attrs" ? (_e(e, "get", t), process.env.NODE_ENV !== "production" && Es()) : process.env.NODE_ENV !== "production" && t === "$slots" && _e(e, "get", t), h(e);
    if (
      // css module (injected by vue-loader)
      (d = l.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== te && X(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      m = c.config.globalProperties, X(m, t)
    )
      return m[t];
    process.env.NODE_ENV !== "production" && ue && (!se(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (r !== te && fo(t[0]) && X(r, t) ? N(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === ue && N(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: o } = e;
    return sr(r, t) ? (r[t] = n, !0) : process.env.NODE_ENV !== "production" && r.__isScriptSetup && X(r, t) ? (N(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : s !== te && X(s, t) ? (s[t] = n, !0) : X(e.props, t) ? (process.env.NODE_ENV !== "production" && N(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && N(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(o, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, propsOptions: o }
  }, i) {
    let l;
    return !!n[i] || e !== te && X(e, i) || sr(t, i) || (l = o[0]) && X(l, i) || X(s, i) || X(kt, i) || X(r.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : X(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (xn.ownKeys = (e) => (N(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
const Wu = /* @__PURE__ */ ne(
  {},
  xn,
  {
    get(e, t) {
      if (t !== Symbol.unscopables)
        return xn.get(e, t, e);
    },
    has(e, t) {
      const n = t[0] !== "_" && !zc(t);
      return process.env.NODE_ENV !== "production" && !n && xn.has(e, t) && N(
        `Property ${JSON.stringify(
          t
        )} should not start with _ which is a reserved prefix for Vue internals.`
      ), n;
    }
  }
);
function zu(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(kt).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => kt[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: fe
    });
  }), t;
}
function qu(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((s) => {
    Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[s],
      set: fe
    });
  });
}
function Yu(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(Y(n)).forEach((s) => {
    if (!n.__isScriptSetup) {
      if (fo(s[0])) {
        N(
          `setup() return property ${JSON.stringify(
            s
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, s, {
        enumerable: !0,
        configurable: !0,
        get: () => n[s],
        set: fe
      });
    }
  });
}
const Bt = (e) => N(
  `${e}() is a compiler-hint helper that is only usable inside <script setup> of a single file component. Its arguments should be compiled away and passing it at runtime has no effect.`
);
function Ju() {
  return process.env.NODE_ENV !== "production" && Bt("defineProps"), null;
}
function Zu() {
  return process.env.NODE_ENV !== "production" && Bt("defineEmits"), null;
}
function Xu(e) {
  process.env.NODE_ENV !== "production" && Bt("defineExpose");
}
function Qu(e) {
  process.env.NODE_ENV !== "production" && Bt("defineOptions");
}
function ef() {
  return process.env.NODE_ENV !== "production" && Bt("defineSlots"), null;
}
function tf() {
  process.env.NODE_ENV !== "production" && Bt("defineModel");
}
function nf(e, t) {
  return process.env.NODE_ENV !== "production" && Bt("withDefaults"), null;
}
function Ml() {
  return Il().slots;
}
function Rl() {
  return Il().attrs;
}
function Il() {
  const e = tt();
  return process.env.NODE_ENV !== "production" && !e && N("useContext() called without active instance."), e.setupContext || (e.setupContext = cc(e));
}
function Kn(e) {
  return F(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function sf(e, t) {
  const n = Kn(e);
  for (const s in t) {
    if (s.startsWith("__skip"))
      continue;
    let r = n[s];
    r ? F(r) || K(r) ? r = n[s] = { type: r, default: t[s] } : r.default = t[s] : r === null ? r = n[s] = { default: t[s] } : process.env.NODE_ENV !== "production" && N(`props default key "${s}" has no corresponding declaration.`), r && t[`__skip_${s}`] && (r.skipFactory = !0);
  }
  return n;
}
function rf(e, t) {
  return !e || !t ? e || t : F(e) && F(t) ? e.concat(t) : ne({}, Kn(e), Kn(t));
}
function of(e, t) {
  const n = {};
  for (const s in e)
    t.includes(s) || Object.defineProperty(n, s, {
      enumerable: !0,
      get: () => e[s]
    });
  return n;
}
function lf(e) {
  const t = tt();
  process.env.NODE_ENV !== "production" && !t && N(
    "withAsyncContext called without active current instance. This is likely a bug."
  );
  let n = e();
  return Dr(), Cs(n) && (n = n.catch((s) => {
    throw jt(t), s;
  })), [n, () => jt(t)];
}
function cf() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? N(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let yr = !0;
function af(e) {
  const t = po(e), n = e.proxy, s = e.ctx;
  yr = !1, t.beforeCreate && Yo(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: o,
    methods: i,
    watch: l,
    provide: c,
    inject: a,
    // lifecycle
    created: h,
    beforeMount: d,
    mounted: m,
    beforeUpdate: v,
    updated: b,
    activated: k,
    deactivated: W,
    beforeDestroy: q,
    beforeUnmount: S,
    destroyed: g,
    unmounted: E,
    render: y,
    renderTracked: V,
    renderTriggered: O,
    errorCaptured: x,
    serverPrefetch: M,
    // public API
    expose: I,
    inheritAttrs: B,
    // assets
    components: R,
    directives: J,
    filters: re
  } = t, ie = process.env.NODE_ENV !== "production" ? cf() : null;
  if (process.env.NODE_ENV !== "production") {
    const [z] = e.propsOptions;
    if (z)
      for (const j in z)
        ie("Props", j);
  }
  if (a && uf(a, s, ie), i)
    for (const z in i) {
      const j = i[z];
      K(j) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(s, z, {
        value: j.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : s[z] = j.bind(n), process.env.NODE_ENV !== "production" && ie("Methods", z)) : process.env.NODE_ENV !== "production" && N(
        `Method "${z}" has type "${typeof j}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (r) {
    process.env.NODE_ENV !== "production" && !K(r) && N(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const z = r.call(n, n);
    if (process.env.NODE_ENV !== "production" && Cs(z) && N(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !ee(z))
      process.env.NODE_ENV !== "production" && N("data() should return an object.");
    else if (e.data = Ts(z), process.env.NODE_ENV !== "production")
      for (const j in z)
        ie("Data", j), fo(j[0]) || Object.defineProperty(s, j, {
          configurable: !0,
          enumerable: !0,
          get: () => z[j],
          set: fe
        });
  }
  if (yr = !0, o)
    for (const z in o) {
      const j = o[z], Ve = K(j) ? j.bind(n, n) : K(j.get) ? j.get.bind(n, n) : fe;
      process.env.NODE_ENV !== "production" && Ve === fe && N(`Computed property "${z}" has no getter.`);
      const pn = !K(j) && K(j.set) ? j.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        N(
          `Write operation failed: computed property "${z}" is readonly.`
        );
      } : fe, hn = zt({
        get: Ve,
        set: pn
      });
      Object.defineProperty(s, z, {
        enumerable: !0,
        configurable: !0,
        get: () => hn.value,
        set: (Ut) => hn.value = Ut
      }), process.env.NODE_ENV !== "production" && ie("Computed", z);
    }
  if (l)
    for (const z in l)
      kl(l[z], s, n, z);
  if (c) {
    const z = K(c) ? c.call(n) : c;
    Reflect.ownKeys(z).forEach((j) => {
      Ll(j, z[j]);
    });
  }
  h && Yo(h, e, "c");
  function H(z, j) {
    F(j) ? j.forEach((Ve) => z(Ve.bind(n))) : j && z(j.bind(n));
  }
  if (H(wl, d), H(Jn, m), H(Dl, v), H(Fs, b), H(Ol, k), H($l, W), H(Sl, x), H(Tl, V), H(xl, O), H(js, S), H(Hs, E), H(Vl, M), F(I))
    if (I.length) {
      const z = e.exposed || (e.exposed = {});
      I.forEach((j) => {
        Object.defineProperty(z, j, {
          get: () => n[j],
          set: (Ve) => n[j] = Ve
        });
      });
    } else
      e.exposed || (e.exposed = {});
  y && e.render === fe && (e.render = y), B != null && (e.inheritAttrs = B), R && (e.components = R), J && (e.directives = J);
}
function uf(e, t, n = fe) {
  F(e) && (e = vr(e));
  for (const s in e) {
    const r = e[s];
    let o;
    ee(r) ? "default" in r ? o = Tn(
      r.from || s,
      r.default,
      !0
    ) : o = Tn(r.from || s) : o = Tn(r), he(o) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (i) => o.value = i
    }) : t[s] = o, process.env.NODE_ENV !== "production" && n("Inject", s);
  }
}
function Yo(e, t, n) {
  Te(
    F(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function kl(e, t, n, s) {
  const r = s.includes(".") ? yl(n, s) : () => n[s];
  if (se(e)) {
    const o = t[e];
    K(o) ? Vn(r, o) : process.env.NODE_ENV !== "production" && N(`Invalid watch handler specified by key "${e}"`, o);
  } else if (K(e))
    Vn(r, e.bind(n));
  else if (ee(e))
    if (F(e))
      e.forEach((o) => kl(o, t, n, s));
    else {
      const o = K(e.handler) ? e.handler.bind(n) : t[e.handler];
      K(o) ? Vn(r, o, e) : process.env.NODE_ENV !== "production" && N(`Invalid watch handler specified by key "${e.handler}"`, o);
    }
  else
    process.env.NODE_ENV !== "production" && N(`Invalid watch option: "${s}"`, e);
}
function po(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: r,
    optionsCache: o,
    config: { optionMergeStrategies: i }
  } = e.appContext, l = o.get(t);
  let c;
  return l ? c = l : !r.length && !n && !s ? c = t : (c = {}, r.length && r.forEach(
    (a) => ys(c, a, i, !0)
  ), ys(c, t, i)), ee(t) && o.set(t, c), c;
}
function ys(e, t, n, s = !1) {
  const { mixins: r, extends: o } = t;
  o && ys(e, o, n, !0), r && r.forEach(
    (i) => ys(e, i, n, !0)
  );
  for (const i in t)
    if (s && i === "expose")
      process.env.NODE_ENV !== "production" && N(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = ff[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const ff = {
  data: Jo,
  props: Zo,
  emits: Zo,
  // objects
  methods: On,
  computed: On,
  // lifecycle
  beforeCreate: Oe,
  created: Oe,
  beforeMount: Oe,
  mounted: Oe,
  beforeUpdate: Oe,
  updated: Oe,
  beforeDestroy: Oe,
  beforeUnmount: Oe,
  destroyed: Oe,
  unmounted: Oe,
  activated: Oe,
  deactivated: Oe,
  errorCaptured: Oe,
  serverPrefetch: Oe,
  // assets
  components: On,
  directives: On,
  // watch
  watch: pf,
  // provide / inject
  provide: Jo,
  inject: df
};
function Jo(e, t) {
  return t ? e ? function() {
    return ne(
      K(e) ? e.call(this, this) : e,
      K(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function df(e, t) {
  return On(vr(e), vr(t));
}
function vr(e) {
  if (F(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Oe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function On(e, t) {
  return e ? ne(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Zo(e, t) {
  return e ? F(e) && F(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ne(
    /* @__PURE__ */ Object.create(null),
    Kn(e),
    Kn(t ?? {})
  ) : t;
}
function pf(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = ne(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = Oe(e[s], t[s]);
  return n;
}
function Pl() {
  return {
    app: null,
    config: {
      isNativeTag: Si,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let hf = 0;
function mf(e, t) {
  return function(s, r = null) {
    K(s) || (s = ne({}, s)), r != null && !ee(r) && (process.env.NODE_ENV !== "production" && N("root props passed to app.mount() must be an object."), r = null);
    const o = Pl(), i = /* @__PURE__ */ new WeakSet();
    let l = !1;
    const c = o.app = {
      _uid: hf++,
      _component: s,
      _props: r,
      _container: null,
      _context: o,
      _instance: null,
      version: Sr,
      get config() {
        return o.config;
      },
      set config(a) {
        process.env.NODE_ENV !== "production" && N(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(a, ...h) {
        return i.has(a) ? process.env.NODE_ENV !== "production" && N("Plugin has already been applied to target app.") : a && K(a.install) ? (i.add(a), a.install(c, ...h)) : K(a) ? (i.add(a), a(c, ...h)) : process.env.NODE_ENV !== "production" && N(
          'A plugin must either be a function or an object with an "install" function.'
        ), c;
      },
      mixin(a) {
        return o.mixins.includes(a) ? process.env.NODE_ENV !== "production" && N(
          "Mixin has already been applied to target app" + (a.name ? `: ${a.name}` : "")
        ) : o.mixins.push(a), c;
      },
      component(a, h) {
        return process.env.NODE_ENV !== "production" && Vr(a, o.config), h ? (process.env.NODE_ENV !== "production" && o.components[a] && N(`Component "${a}" has already been registered in target app.`), o.components[a] = h, c) : o.components[a];
      },
      directive(a, h) {
        return process.env.NODE_ENV !== "production" && vl(a), h ? (process.env.NODE_ENV !== "production" && o.directives[a] && N(`Directive "${a}" has already been registered in target app.`), o.directives[a] = h, c) : o.directives[a];
      },
      mount(a, h, d) {
        if (l)
          process.env.NODE_ENV !== "production" && N(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          process.env.NODE_ENV !== "production" && a.__vue_app__ && N(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const m = ce(s, r);
          return m.appContext = o, d === !0 ? d = "svg" : d === !1 && (d = void 0), process.env.NODE_ENV !== "production" && (o.reload = () => {
            e(
              Re(m),
              a,
              d
            );
          }), h && t ? t(m, a) : e(m, a, d), l = !0, c._container = a, a.__vue_app__ = c, process.env.NODE_ENV !== "production" && (c._instance = m.component, au(c, Sr)), Ks(m.component) || m.component.proxy;
        }
      },
      unmount() {
        l ? (e(null, c._container), process.env.NODE_ENV !== "production" && (c._instance = null, uu(c)), delete c._container.__vue_app__) : process.env.NODE_ENV !== "production" && N("Cannot unmount an app that is not mounted.");
      },
      provide(a, h) {
        return process.env.NODE_ENV !== "production" && a in o.provides && N(
          `App already provides property with key "${String(a)}". It will be overwritten with the new value.`
        ), o.provides[a] = h, c;
      },
      runWithContext(a) {
        const h = en;
        en = c;
        try {
          return a();
        } finally {
          en = h;
        }
      }
    };
    return c;
  };
}
let en = null;
function Ll(e, t) {
  if (!de)
    process.env.NODE_ENV !== "production" && N("provide() can only be used inside setup().");
  else {
    let n = de.provides;
    const s = de.parent && de.parent.provides;
    s === n && (n = de.provides = Object.create(s)), n[e] = t;
  }
}
function Tn(e, t, n = !1) {
  const s = de || ue;
  if (s || en) {
    const r = s ? s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : en._context.provides;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && K(t) ? t.call(s && s.proxy) : t;
    process.env.NODE_ENV !== "production" && N(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && N("inject() can only be used inside setup() or functional components.");
}
function gf() {
  return !!(de || ue || en);
}
function Ef(e, t, n, s = !1) {
  const r = {}, o = {};
  ps(o, Us, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), Fl(e, t, r, o);
  for (const i in e.propsOptions[0])
    i in r || (r[i] = void 0);
  process.env.NODE_ENV !== "production" && Hl(t || {}, r, e), n ? e.props = s ? r : Xi(r) : e.type.props ? e.props = r : e.props = o, e.attrs = o;
}
function _f(e) {
  for (; e; ) {
    if (e.type.__hmrId)
      return !0;
    e = e.parent;
  }
}
function yf(e, t, n, s) {
  const {
    props: r,
    attrs: o,
    vnode: { patchFlag: i }
  } = e, l = Y(r), [c] = e.propsOptions;
  let a = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(process.env.NODE_ENV !== "production" && _f(e)) && (s || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const h = e.vnode.dynamicProps;
      for (let d = 0; d < h.length; d++) {
        let m = h[d];
        if (Rs(e.emitsOptions, m))
          continue;
        const v = t[m];
        if (c)
          if (X(o, m))
            v !== o[m] && (o[m] = v, a = !0);
          else {
            const b = $e(m);
            r[b] = Nr(
              c,
              l,
              b,
              v,
              e,
              !1
            );
          }
        else
          v !== o[m] && (o[m] = v, a = !0);
      }
    }
  } else {
    Fl(e, t, r, o) && (a = !0);
    let h;
    for (const d in l)
      (!t || // for camelCase
      !X(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((h = ye(d)) === d || !X(t, h))) && (c ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[h] !== void 0) && (r[d] = Nr(
        c,
        l,
        d,
        void 0,
        e,
        !0
      )) : delete r[d]);
    if (o !== l)
      for (const d in o)
        (!t || !X(t, d)) && (delete o[d], a = !0);
  }
  a && Be(e, "set", "$attrs"), process.env.NODE_ENV !== "production" && Hl(t || {}, r, e);
}
function Fl(e, t, n, s) {
  const [r, o] = e.propsOptions;
  let i = !1, l;
  if (t)
    for (let c in t) {
      if (Jt(c))
        continue;
      const a = t[c];
      let h;
      r && X(r, h = $e(c)) ? !o || !o.includes(h) ? n[h] = a : (l || (l = {}))[h] = a : Rs(e.emitsOptions, c) || (!(c in s) || a !== s[c]) && (s[c] = a, i = !0);
    }
  if (o) {
    const c = Y(n), a = l || te;
    for (let h = 0; h < o.length; h++) {
      const d = o[h];
      n[d] = Nr(
        r,
        c,
        d,
        a[d],
        e,
        !X(a, d)
      );
    }
  }
  return i;
}
function Nr(e, t, n, s, r, o) {
  const i = e[n];
  if (i != null) {
    const l = X(i, "default");
    if (l && s === void 0) {
      const c = i.default;
      if (i.type !== Function && !i.skipFactory && K(c)) {
        const { propsDefaults: a } = r;
        if (n in a)
          s = a[n];
        else {
          const h = jt(r);
          s = a[n] = c.call(
            null,
            t
          ), h();
        }
      } else
        s = c;
    }
    i[
      0
      /* shouldCast */
    ] && (o && !l ? s = !1 : i[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === ye(n)) && (s = !0));
  }
  return s;
}
function jl(e, t, n = !1) {
  const s = t.propsCache, r = s.get(e);
  if (r)
    return r;
  const o = e.props, i = {}, l = [];
  let c = !1;
  if (!K(e)) {
    const h = (d) => {
      c = !0;
      const [m, v] = jl(d, t, !0);
      ne(i, m), v && l.push(...v);
    };
    !n && t.mixins.length && t.mixins.forEach(h), e.extends && h(e.extends), e.mixins && e.mixins.forEach(h);
  }
  if (!o && !c)
    return ee(e) && s.set(e, Yt), Yt;
  if (F(o))
    for (let h = 0; h < o.length; h++) {
      process.env.NODE_ENV !== "production" && !se(o[h]) && N("props must be strings when using array syntax.", o[h]);
      const d = $e(o[h]);
      Xo(d) && (i[d] = te);
    }
  else if (o) {
    process.env.NODE_ENV !== "production" && !ee(o) && N("invalid props options", o);
    for (const h in o) {
      const d = $e(h);
      if (Xo(d)) {
        const m = o[h], v = i[d] = F(m) || K(m) ? { type: m } : ne({}, m);
        if (v) {
          const b = ei(Boolean, v.type), k = ei(String, v.type);
          v[
            0
            /* shouldCast */
          ] = b > -1, v[
            1
            /* shouldCastTrue */
          ] = k < 0 || b < k, (b > -1 || X(v, "default")) && l.push(d);
        }
      }
    }
  }
  const a = [i, l];
  return ee(e) && s.set(e, a), a;
}
function Xo(e) {
  return e[0] !== "$" && !Jt(e) ? !0 : (process.env.NODE_ENV !== "production" && N(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function br(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function Qo(e, t) {
  return br(e) === br(t);
}
function ei(e, t) {
  return F(t) ? t.findIndex((n) => Qo(n, e)) : K(t) && Qo(t, e) ? 0 : -1;
}
function Hl(e, t, n) {
  const s = Y(t), r = n.propsOptions[0];
  for (const o in r) {
    let i = r[o];
    i != null && vf(
      o,
      s[o],
      i,
      process.env.NODE_ENV !== "production" ? xt(s) : s,
      !X(e, o) && !X(e, ye(o))
    );
  }
}
function vf(e, t, n, s, r) {
  const { type: o, required: i, validator: l, skipCheck: c } = n;
  if (i && r) {
    N('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !i)) {
    if (o != null && o !== !0 && !c) {
      let a = !1;
      const h = F(o) ? o : [o], d = [];
      for (let m = 0; m < h.length && !a; m++) {
        const { valid: v, expectedType: b } = bf(t, h[m]);
        d.push(b || ""), a = v;
      }
      if (!a) {
        N(Of(e, t, d));
        return;
      }
    }
    l && !l(t, s) && N('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Nf = /* @__PURE__ */ Se(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function bf(e, t) {
  let n;
  const s = br(t);
  if (Nf(s)) {
    const r = typeof e;
    n = r === s.toLowerCase(), !n && r === "object" && (n = e instanceof t);
  } else
    s === "Object" ? n = ee(e) : s === "Array" ? n = F(e) : s === "null" ? n = e === null : n = e instanceof t;
  return {
    valid: n,
    expectedType: s
  };
}
function Of(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let s = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(yt).join(" | ")}`;
  const r = n[0], o = Lr(t), i = ti(t, r), l = ti(t, o);
  return n.length === 1 && ni(r) && !$f(r, o) && (s += ` with value ${i}`), s += `, got ${o} `, ni(o) && (s += `with value ${l}.`), s;
}
function ti(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function ni(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function $f(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Bl = (e) => e[0] === "_" || e === "$stable", ho = (e) => F(e) ? e.map(we) : [we(e)], Cf = (e, t, n) => {
  if (t._n)
    return t;
  const s = so((...r) => (process.env.NODE_ENV !== "production" && de && (!n || n.root === de.root) && N(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), ho(t(...r))), n);
  return s._c = !1, s;
}, Ul = (e, t, n) => {
  const s = e._ctx;
  for (const r in e) {
    if (Bl(r))
      continue;
    const o = e[r];
    if (K(o))
      t[r] = Cf(r, o, s);
    else if (o != null) {
      process.env.NODE_ENV !== "production" && N(
        `Non-function value encountered for slot "${r}". Prefer function slots for better performance.`
      );
      const i = ho(o);
      t[r] = () => i;
    }
  }
}, Kl = (e, t) => {
  process.env.NODE_ENV !== "production" && !dn(e.vnode) && N(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = ho(t);
  e.slots.default = () => n;
}, wf = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = Y(t), ps(t, "_", n)) : Ul(
      t,
      e.slots = {}
    );
  } else
    e.slots = {}, t && Kl(e, t);
  ps(e.slots, Us, 1);
}, Df = (e, t, n) => {
  const { vnode: s, slots: r } = e;
  let o = !0, i = te;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? process.env.NODE_ENV !== "production" && gt ? (ne(r, t), Be(e, "set", "$slots")) : n && l === 1 ? o = !1 : (ne(r, t), !n && l === 1 && delete r._) : (o = !t.$stable, Ul(t, r)), i = t;
  } else
    t && (Kl(e, t), i = { default: 1 });
  if (o)
    for (const l in r)
      !Bl(l) && i[l] == null && delete r[l];
};
function vs(e, t, n, s, r = !1) {
  if (F(e)) {
    e.forEach(
      (m, v) => vs(
        m,
        t && (F(t) ? t[v] : t),
        n,
        s,
        r
      )
    );
    return;
  }
  if (It(s) && !r)
    return;
  const o = s.shapeFlag & 4 ? Ks(s.component) || s.component.proxy : s.el, i = r ? null : o, { i: l, r: c } = e;
  if (process.env.NODE_ENV !== "production" && !l) {
    N(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const a = t && t.r, h = l.refs === te ? l.refs = {} : l.refs, d = l.setupState;
  if (a != null && a !== c && (se(a) ? (h[a] = null, X(d, a) && (d[a] = null)) : he(a) && (a.value = null)), K(c))
    Ue(c, l, 12, [i, h]);
  else {
    const m = se(c), v = he(c);
    if (m || v) {
      const b = () => {
        if (e.f) {
          const k = m ? X(d, c) ? d[c] : h[c] : c.value;
          r ? F(k) && Pr(k, o) : F(k) ? k.includes(o) || k.push(o) : m ? (h[c] = [o], X(d, c) && (d[c] = h[c])) : (c.value = [o], e.k && (h[e.k] = c.value));
        } else
          m ? (h[c] = i, X(d, c) && (d[c] = i)) : v ? (c.value = i, e.k && (h[e.k] = i)) : process.env.NODE_ENV !== "production" && N("Invalid template ref type:", c, `(${typeof c})`);
      };
      i ? (b.id = -1, Ee(b, n)) : b();
    } else
      process.env.NODE_ENV !== "production" && N("Invalid template ref type:", c, `(${typeof c})`);
  }
}
let Ge = !1;
const Vf = (e) => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject", xf = (e) => e.namespaceURI.includes("MathML"), is = (e) => {
  if (Vf(e))
    return "svg";
  if (xf(e))
    return "mathml";
}, gn = (e) => e.nodeType === 8;
function Tf(e) {
  const {
    mt: t,
    p: n,
    o: {
      patchProp: s,
      createText: r,
      nextSibling: o,
      parentNode: i,
      remove: l,
      insert: c,
      createComment: a
    }
  } = e, h = (g, E) => {
    if (!E.hasChildNodes()) {
      process.env.NODE_ENV !== "production" && N(
        "Attempting to hydrate existing markup but container is empty. Performing full mount instead."
      ), n(null, g, E), gs(), E._vnode = g;
      return;
    }
    Ge = !1, d(E.firstChild, g, null, null, null), gs(), E._vnode = g, Ge && console.error("Hydration completed but contains mismatches.");
  }, d = (g, E, y, V, O, x = !1) => {
    const M = gn(g) && g.data === "[", I = () => k(
      g,
      E,
      y,
      V,
      O,
      M
    ), { type: B, ref: R, shapeFlag: J, patchFlag: re } = E;
    let ie = g.nodeType;
    E.el = g, process.env.NODE_ENV !== "production" && ("__vnode" in g || Object.defineProperty(g, "__vnode", {
      value: E,
      enumerable: !1
    }), "__vueParentComponent" in g || Object.defineProperty(g, "__vueParentComponent", {
      value: y,
      enumerable: !1
    })), re === -2 && (x = !1, E.dynamicChildren = null);
    let H = null;
    switch (B) {
      case Nt:
        ie !== 3 ? E.children === "" ? (c(E.el = r(""), i(g), g), H = g) : H = I() : (g.data !== E.children && (Ge = !0, process.env.NODE_ENV !== "production" && N(
          "Hydration text mismatch in",
          g.parentNode,
          `
  - rendered on server: ${JSON.stringify(
            g.data
          )}
  - expected on client: ${JSON.stringify(E.children)}`
        ), g.data = E.children), H = o(g));
        break;
      case pe:
        S(g) ? (H = o(g), q(
          E.el = g.content.firstChild,
          g,
          y
        )) : ie !== 8 || M ? H = I() : H = o(g);
        break;
      case Et:
        if (M && (g = o(g), ie = g.nodeType), ie === 1 || ie === 3) {
          H = g;
          const z = !E.children.length;
          for (let j = 0; j < E.staticCount; j++)
            z && (E.children += H.nodeType === 1 ? H.outerHTML : H.data), j === E.staticCount - 1 && (E.anchor = H), H = o(H);
          return M ? o(H) : H;
        } else
          I();
        break;
      case me:
        M ? H = b(
          g,
          E,
          y,
          V,
          O,
          x
        ) : H = I();
        break;
      default:
        if (J & 1)
          (ie !== 1 || E.type.toLowerCase() !== g.tagName.toLowerCase()) && !S(g) ? H = I() : H = m(
            g,
            E,
            y,
            V,
            O,
            x
          );
        else if (J & 6) {
          E.slotScopeIds = O;
          const z = i(g);
          if (M ? H = W(g) : gn(g) && g.data === "teleport start" ? H = W(g, g.data, "teleport end") : H = o(g), t(
            E,
            z,
            null,
            y,
            V,
            is(z),
            x
          ), It(E)) {
            let j;
            M ? (j = ce(me), j.anchor = H ? H.previousSibling : z.lastChild) : j = g.nodeType === 3 ? Eo("") : ce("div"), j.el = g, E.component.subTree = j;
          }
        } else
          J & 64 ? ie !== 8 ? H = I() : H = E.type.hydrate(
            g,
            E,
            y,
            V,
            O,
            x,
            e,
            v
          ) : J & 128 ? H = E.type.hydrate(
            g,
            E,
            y,
            V,
            is(i(g)),
            O,
            x,
            e,
            d
          ) : process.env.NODE_ENV !== "production" && N("Invalid HostVNode type:", B, `(${typeof B})`);
    }
    return R != null && vs(R, null, V, E), H;
  }, m = (g, E, y, V, O, x) => {
    x = x || !!E.dynamicChildren;
    const { type: M, props: I, patchFlag: B, shapeFlag: R, dirs: J, transition: re } = E, ie = M === "input" || M === "option";
    if (process.env.NODE_ENV !== "production" || ie || B !== -1) {
      J && je(E, null, y, "created");
      let H = !1;
      if (S(g)) {
        H = ql(V, re) && y && y.vnode.props && y.vnode.props.appear;
        const j = g.content.firstChild;
        H && re.beforeEnter(j), q(j, g, y), E.el = g = j;
      }
      if (R & 16 && // skip if element has innerHTML / textContent
      !(I && (I.innerHTML || I.textContent))) {
        let j = v(
          g.firstChild,
          E,
          g,
          y,
          V,
          O,
          x
        ), Ve = !1;
        for (; j; ) {
          Ge = !0, process.env.NODE_ENV !== "production" && !Ve && (N(
            "Hydration children mismatch on",
            g,
            `
Server rendered element contains more child nodes than client vdom.`
          ), Ve = !0);
          const pn = j;
          j = j.nextSibling, l(pn);
        }
      } else
        R & 8 && g.textContent !== E.children && (Ge = !0, process.env.NODE_ENV !== "production" && N(
          "Hydration text content mismatch on",
          g,
          `
  - rendered on server: ${g.textContent}
  - expected on client: ${E.children}`
        ), g.textContent = E.children);
      if (I)
        if (process.env.NODE_ENV !== "production" || ie || !x || B & 48)
          for (const j in I)
            process.env.NODE_ENV !== "production" && Sf(g, j, I[j], E, y) && (Ge = !0), (ie && (j.endsWith("value") || j === "indeterminate") || cn(j) && !Jt(j) || // force hydrate v-bind with .prop modifiers
            j[0] === ".") && s(
              g,
              j,
              null,
              I[j],
              void 0,
              void 0,
              y
            );
        else
          I.onClick && s(
            g,
            "onClick",
            null,
            I.onClick,
            void 0,
            void 0,
            y
          );
      let z;
      (z = I && I.onVnodeBeforeMount) && Ce(z, y, E), J && je(E, null, y, "beforeMount"), ((z = I && I.onVnodeMounted) || J || H) && hl(() => {
        z && Ce(z, y, E), H && re.enter(g), J && je(E, null, y, "mounted");
      }, V);
    }
    return g.nextSibling;
  }, v = (g, E, y, V, O, x, M) => {
    M = M || !!E.dynamicChildren;
    const I = E.children, B = I.length;
    let R = !1;
    for (let J = 0; J < B; J++) {
      const re = M ? I[J] : I[J] = we(I[J]);
      if (g)
        g = d(
          g,
          re,
          V,
          O,
          x,
          M
        );
      else {
        if (re.type === Nt && !re.children)
          continue;
        Ge = !0, process.env.NODE_ENV !== "production" && !R && (N(
          "Hydration children mismatch on",
          y,
          `
Server rendered element contains fewer child nodes than client vdom.`
        ), R = !0), n(
          null,
          re,
          y,
          null,
          V,
          O,
          is(y),
          x
        );
      }
    }
    return g;
  }, b = (g, E, y, V, O, x) => {
    const { slotScopeIds: M } = E;
    M && (O = O ? O.concat(M) : M);
    const I = i(g), B = v(
      o(g),
      E,
      I,
      y,
      V,
      O,
      x
    );
    return B && gn(B) && B.data === "]" ? o(E.anchor = B) : (Ge = !0, c(E.anchor = a("]"), I, B), B);
  }, k = (g, E, y, V, O, x) => {
    if (Ge = !0, process.env.NODE_ENV !== "production" && N(
      `Hydration node mismatch:
- rendered on server:`,
      g,
      g.nodeType === 3 ? "(text)" : gn(g) && g.data === "[" ? "(start of fragment)" : "",
      `
- expected on client:`,
      E.type
    ), E.el = null, x) {
      const B = W(g);
      for (; ; ) {
        const R = o(g);
        if (R && R !== B)
          l(R);
        else
          break;
      }
    }
    const M = o(g), I = i(g);
    return l(g), n(
      null,
      E,
      I,
      M,
      y,
      V,
      is(I),
      O
    ), M;
  }, W = (g, E = "[", y = "]") => {
    let V = 0;
    for (; g; )
      if (g = o(g), g && gn(g) && (g.data === E && V++, g.data === y)) {
        if (V === 0)
          return o(g);
        V--;
      }
    return g;
  }, q = (g, E, y) => {
    const V = E.parentNode;
    V && V.replaceChild(g, E);
    let O = y;
    for (; O; )
      O.vnode.el === E && (O.vnode.el = O.subTree.el = g), O = O.parent;
  }, S = (g) => g.nodeType === 1 && g.tagName.toLowerCase() === "template";
  return [h, d];
}
function Sf(e, t, n, s, r) {
  var o;
  let i, l, c, a;
  if (t === "class")
    c = e.getAttribute("class"), a = fn(n), Af(si(c || ""), si(a)) || (i = l = "class");
  else if (t === "style") {
    c = e.getAttribute("style"), a = se(n) ? n : Xc(un(n));
    const h = ri(c), d = ri(a);
    if (s.dirs)
      for (const { dir: v, value: b } of s.dirs)
        v.name === "show" && !b && d.set("display", "none");
    const m = r == null ? void 0 : r.subTree;
    if (s === m || (m == null ? void 0 : m.type) === me && m.children.includes(s)) {
      const v = (o = r == null ? void 0 : r.getCssVars) == null ? void 0 : o.call(r);
      for (const b in v)
        d.set(`--${b}`, String(v[b]));
    }
    Mf(h, d) || (i = l = "style");
  } else
    (e instanceof SVGElement && ca(t) || e instanceof HTMLElement && (Mo(t) || la(t))) && (Mo(t) ? (c = e.hasAttribute(t), a = Hr(n)) : n == null ? (c = e.hasAttribute(t), a = !1) : (e.hasAttribute(t) ? c = e.getAttribute(t) : t === "value" && e.tagName === "TEXTAREA" ? c = e.value : c = !1, a = aa(n) ? String(n) : !1), c !== a && (i = "attribute", l = t));
  if (i) {
    const h = (v) => v === !1 ? "(not rendered)" : `${l}="${v}"`, d = `Hydration ${i} mismatch on`, m = `
  - rendered on server: ${h(c)}
  - expected on client: ${h(a)}
  Note: this mismatch is check-only. The DOM will not be rectified in production due to performance overhead.
  You should fix the source of the mismatch.`;
    return N(d, e, m), !0;
  }
  return !1;
}
function si(e) {
  return new Set(e.trim().split(/\s+/));
}
function Af(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
function ri(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e.split(";")) {
    let [s, r] = n.split(":");
    s = s == null ? void 0 : s.trim(), r = r == null ? void 0 : r.trim(), s && r && t.set(s, r);
  }
  return t;
}
function Mf(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const [n, s] of e)
    if (s !== t.get(n))
      return !1;
  return !0;
}
let En, ft;
function We(e, t) {
  e.appContext.config.performance && Ns() && ft.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && pu(e, t, Ns() ? ft.now() : Date.now());
}
function ze(e, t) {
  if (e.appContext.config.performance && Ns()) {
    const n = `vue-${t}-${e.uid}`, s = n + ":end";
    ft.mark(s), ft.measure(
      `<${Gs(e, e.type)}> ${t}`,
      n,
      s
    ), ft.clearMarks(n), ft.clearMarks(s);
  }
  process.env.NODE_ENV !== "production" && hu(e, t, Ns() ? ft.now() : Date.now());
}
function Ns() {
  return En !== void 0 || (typeof window < "u" && window.performance ? (En = !0, ft = window.performance) : En = !1), En;
}
function Rf() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const Ee = hl;
function Gl(e) {
  return zl(e);
}
function Wl(e) {
  return zl(e, Tf);
}
function zl(e, t) {
  Rf();
  const n = jr();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && to(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: s,
    remove: r,
    patchProp: o,
    createElement: i,
    createText: l,
    createComment: c,
    setText: a,
    setElementText: h,
    parentNode: d,
    nextSibling: m,
    setScopeId: v = fe,
    insertStaticContent: b
  } = e, k = (u, p, _, $ = null, C = null, T = null, P = void 0, D = null, A = process.env.NODE_ENV !== "production" && gt ? !1 : !!p.dynamicChildren) => {
    if (u === p)
      return;
    u && !Pe(u, p) && ($ = Xn(u), nt(u, C, T, !0), u = null), p.patchFlag === -2 && (A = !1, p.dynamicChildren = null);
    const { type: w, ref: L, shapeFlag: G } = p;
    switch (w) {
      case Nt:
        W(u, p, _, $);
        break;
      case pe:
        q(u, p, _, $);
        break;
      case Et:
        u == null ? S(p, _, $, P) : process.env.NODE_ENV !== "production" && g(u, p, _, P);
        break;
      case me:
        J(
          u,
          p,
          _,
          $,
          C,
          T,
          P,
          D,
          A
        );
        break;
      default:
        G & 1 ? V(
          u,
          p,
          _,
          $,
          C,
          T,
          P,
          D,
          A
        ) : G & 6 ? re(
          u,
          p,
          _,
          $,
          C,
          T,
          P,
          D,
          A
        ) : G & 64 || G & 128 ? w.process(
          u,
          p,
          _,
          $,
          C,
          T,
          P,
          D,
          A,
          Kt
        ) : process.env.NODE_ENV !== "production" && N("Invalid VNode type:", w, `(${typeof w})`);
    }
    L != null && C && vs(L, u && u.ref, T, p || u, !p);
  }, W = (u, p, _, $) => {
    if (u == null)
      s(
        p.el = l(p.children),
        _,
        $
      );
    else {
      const C = p.el = u.el;
      p.children !== u.children && a(C, p.children);
    }
  }, q = (u, p, _, $) => {
    u == null ? s(
      p.el = c(p.children || ""),
      _,
      $
    ) : p.el = u.el;
  }, S = (u, p, _, $) => {
    [u.el, u.anchor] = b(
      u.children,
      p,
      _,
      $,
      u.el,
      u.anchor
    );
  }, g = (u, p, _, $) => {
    if (p.children !== u.children) {
      const C = m(u.anchor);
      y(u), [p.el, p.anchor] = b(
        p.children,
        _,
        C,
        $
      );
    } else
      p.el = u.el, p.anchor = u.anchor;
  }, E = ({ el: u, anchor: p }, _, $) => {
    let C;
    for (; u && u !== p; )
      C = m(u), s(u, _, $), u = C;
    s(p, _, $);
  }, y = ({ el: u, anchor: p }) => {
    let _;
    for (; u && u !== p; )
      _ = m(u), r(u), u = _;
    r(p);
  }, V = (u, p, _, $, C, T, P, D, A) => {
    p.type === "svg" ? P = "svg" : p.type === "math" && (P = "mathml"), u == null ? O(
      p,
      _,
      $,
      C,
      T,
      P,
      D,
      A
    ) : I(
      u,
      p,
      C,
      T,
      P,
      D,
      A
    );
  }, O = (u, p, _, $, C, T, P, D) => {
    let A, w;
    const { props: L, shapeFlag: G, transition: U, dirs: Z } = u;
    if (A = u.el = i(
      u.type,
      T,
      L && L.is,
      L
    ), G & 8 ? h(A, u.children) : G & 16 && M(
      u.children,
      A,
      null,
      $,
      C,
      rr(u, T),
      P,
      D
    ), Z && je(u, null, $, "created"), x(A, u, u.scopeId, P, $), L) {
      for (const oe in L)
        oe !== "value" && !Jt(oe) && o(
          A,
          oe,
          null,
          L[oe],
          T,
          u.children,
          $,
          C,
          Ke
        );
      "value" in L && o(A, "value", null, L.value, T), (w = L.onVnodeBeforeMount) && Ce(w, $, u);
    }
    process.env.NODE_ENV !== "production" && (Object.defineProperty(A, "__vnode", {
      value: u,
      enumerable: !1
    }), Object.defineProperty(A, "__vueParentComponent", {
      value: $,
      enumerable: !1
    })), Z && je(u, null, $, "beforeMount");
    const Q = ql(C, U);
    Q && U.beforeEnter(A), s(A, p, _), ((w = L && L.onVnodeMounted) || Q || Z) && Ee(() => {
      w && Ce(w, $, u), Q && U.enter(A), Z && je(u, null, $, "mounted");
    }, C);
  }, x = (u, p, _, $, C) => {
    if (_ && v(u, _), $)
      for (let T = 0; T < $.length; T++)
        v(u, $[T]);
    if (C) {
      let T = C.subTree;
      if (process.env.NODE_ENV !== "production" && T.patchFlag > 0 && T.patchFlag & 2048 && (T = ks(T.children) || T), p === T) {
        const P = C.vnode;
        x(
          u,
          P,
          P.scopeId,
          P.slotScopeIds,
          C.parent
        );
      }
    }
  }, M = (u, p, _, $, C, T, P, D, A = 0) => {
    for (let w = A; w < u.length; w++) {
      const L = u[w] = D ? ct(u[w]) : we(u[w]);
      k(
        null,
        L,
        p,
        _,
        $,
        C,
        T,
        P,
        D
      );
    }
  }, I = (u, p, _, $, C, T, P) => {
    const D = p.el = u.el;
    let { patchFlag: A, dynamicChildren: w, dirs: L } = p;
    A |= u.patchFlag & 16;
    const G = u.props || te, U = p.props || te;
    let Z;
    if (_ && wt(_, !1), (Z = U.onVnodeBeforeUpdate) && Ce(Z, _, p, u), L && je(p, u, _, "beforeUpdate"), _ && wt(_, !0), process.env.NODE_ENV !== "production" && gt && (A = 0, P = !1, w = null), w ? (B(
      u.dynamicChildren,
      w,
      D,
      _,
      $,
      rr(p, C),
      T
    ), process.env.NODE_ENV !== "production" && Sn(u, p)) : P || Ve(
      u,
      p,
      D,
      null,
      _,
      $,
      rr(p, C),
      T,
      !1
    ), A > 0) {
      if (A & 16)
        R(
          D,
          p,
          G,
          U,
          _,
          $,
          C
        );
      else if (A & 2 && G.class !== U.class && o(D, "class", null, U.class, C), A & 4 && o(D, "style", G.style, U.style, C), A & 8) {
        const Q = p.dynamicProps;
        for (let oe = 0; oe < Q.length; oe++) {
          const ae = Q[oe], ge = G[ae], Ie = U[ae];
          (Ie !== ge || ae === "value") && o(
            D,
            ae,
            ge,
            Ie,
            C,
            u.children,
            _,
            $,
            Ke
          );
        }
      }
      A & 1 && u.children !== p.children && h(D, p.children);
    } else
      !P && w == null && R(
        D,
        p,
        G,
        U,
        _,
        $,
        C
      );
    ((Z = U.onVnodeUpdated) || L) && Ee(() => {
      Z && Ce(Z, _, p, u), L && je(p, u, _, "updated");
    }, $);
  }, B = (u, p, _, $, C, T, P) => {
    for (let D = 0; D < p.length; D++) {
      const A = u[D], w = p[D], L = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        A.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (A.type === me || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Pe(A, w) || // - In the case of a component, it could contain anything.
        A.shapeFlag & 70) ? d(A.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          _
        )
      );
      k(
        A,
        w,
        L,
        null,
        $,
        C,
        T,
        P,
        !0
      );
    }
  }, R = (u, p, _, $, C, T, P) => {
    if (_ !== $) {
      if (_ !== te)
        for (const D in _)
          !Jt(D) && !(D in $) && o(
            u,
            D,
            _[D],
            null,
            P,
            p.children,
            C,
            T,
            Ke
          );
      for (const D in $) {
        if (Jt(D))
          continue;
        const A = $[D], w = _[D];
        A !== w && D !== "value" && o(
          u,
          D,
          w,
          A,
          P,
          p.children,
          C,
          T,
          Ke
        );
      }
      "value" in $ && o(u, "value", _.value, $.value, P);
    }
  }, J = (u, p, _, $, C, T, P, D, A) => {
    const w = p.el = u ? u.el : l(""), L = p.anchor = u ? u.anchor : l("");
    let { patchFlag: G, dynamicChildren: U, slotScopeIds: Z } = p;
    process.env.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (gt || G & 2048) && (G = 0, A = !1, U = null), Z && (D = D ? D.concat(Z) : Z), u == null ? (s(w, _, $), s(L, _, $), M(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      p.children || [],
      _,
      L,
      C,
      T,
      P,
      D,
      A
    )) : G > 0 && G & 64 && U && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    u.dynamicChildren ? (B(
      u.dynamicChildren,
      U,
      _,
      C,
      T,
      P,
      D
    ), process.env.NODE_ENV !== "production" ? Sn(u, p) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (p.key != null || C && p === C.subTree) && Sn(
        u,
        p,
        !0
        /* shallow */
      )
    )) : Ve(
      u,
      p,
      _,
      L,
      C,
      T,
      P,
      D,
      A
    );
  }, re = (u, p, _, $, C, T, P, D, A) => {
    p.slotScopeIds = D, u == null ? p.shapeFlag & 512 ? C.ctx.activate(
      p,
      _,
      $,
      P,
      A
    ) : ie(
      p,
      _,
      $,
      C,
      T,
      P,
      A
    ) : H(u, p, A);
  }, ie = (u, p, _, $, C, T, P) => {
    const D = u.component = rc(
      u,
      $,
      C
    );
    if (process.env.NODE_ENV !== "production" && D.type.__hmrId && ou(D), process.env.NODE_ENV !== "production" && (Cn(u), We(D, "mount")), dn(u) && (D.ctx.renderer = Kt), process.env.NODE_ENV !== "production" && We(D, "init"), ic(D), process.env.NODE_ENV !== "production" && ze(D, "init"), D.asyncDep) {
      if (C && C.registerDep(D, z), !u.el) {
        const A = D.subTree = ce(pe);
        q(null, A, p, _);
      }
    } else
      z(
        D,
        u,
        p,
        _,
        C,
        T,
        P
      );
    process.env.NODE_ENV !== "production" && (wn(), ze(D, "mount"));
  }, H = (u, p, _) => {
    const $ = p.component = u.component;
    if (bu(u, p, _))
      if ($.asyncDep && !$.asyncResolved) {
        process.env.NODE_ENV !== "production" && Cn(p), j($, p, _), process.env.NODE_ENV !== "production" && wn();
        return;
      } else
        $.next = p, su($.update), $.effect.dirty = !0, $.update();
    else
      p.el = u.el, $.vnode = p;
  }, z = (u, p, _, $, C, T, P) => {
    const D = () => {
      if (u.isMounted) {
        let { next: L, bu: G, u: U, parent: Z, vnode: Q } = u;
        {
          const Gt = Yl(u);
          if (Gt) {
            L && (L.el = Q.el, j(u, L, P)), Gt.asyncDep.then(() => {
              u.isUnmounted || D();
            });
            return;
          }
        }
        let oe = L, ae;
        process.env.NODE_ENV !== "production" && Cn(L || u.vnode), wt(u, !1), L ? (L.el = Q.el, j(u, L, P)) : L = Q, G && ut(G), (ae = L.props && L.props.onVnodeBeforeUpdate) && Ce(ae, Z, L, Q), wt(u, !0), process.env.NODE_ENV !== "production" && We(u, "render");
        const ge = as(u);
        process.env.NODE_ENV !== "production" && ze(u, "render");
        const Ie = u.subTree;
        u.subTree = ge, process.env.NODE_ENV !== "production" && We(u, "patch"), k(
          Ie,
          ge,
          // parent may have changed if it's in a teleport
          d(Ie.el),
          // anchor may have changed if it's in a fragment
          Xn(Ie),
          u,
          C,
          T
        ), process.env.NODE_ENV !== "production" && ze(u, "patch"), L.el = ge.el, oe === null && ro(u, ge.el), U && Ee(U, C), (ae = L.props && L.props.onVnodeUpdated) && Ee(
          () => Ce(ae, Z, L, Q),
          C
        ), process.env.NODE_ENV !== "production" && al(u), process.env.NODE_ENV !== "production" && wn();
      } else {
        let L;
        const { el: G, props: U } = p, { bm: Z, m: Q, parent: oe } = u, ae = It(p);
        if (wt(u, !1), Z && ut(Z), !ae && (L = U && U.onVnodeBeforeMount) && Ce(L, oe, p), wt(u, !0), G && Js) {
          const ge = () => {
            process.env.NODE_ENV !== "production" && We(u, "render"), u.subTree = as(u), process.env.NODE_ENV !== "production" && ze(u, "render"), process.env.NODE_ENV !== "production" && We(u, "hydrate"), Js(
              G,
              u.subTree,
              u,
              C,
              null
            ), process.env.NODE_ENV !== "production" && ze(u, "hydrate");
          };
          ae ? p.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !u.isUnmounted && ge()
          ) : ge();
        } else {
          process.env.NODE_ENV !== "production" && We(u, "render");
          const ge = u.subTree = as(u);
          process.env.NODE_ENV !== "production" && ze(u, "render"), process.env.NODE_ENV !== "production" && We(u, "patch"), k(
            null,
            ge,
            _,
            $,
            u,
            C,
            T
          ), process.env.NODE_ENV !== "production" && ze(u, "patch"), p.el = ge.el;
        }
        if (Q && Ee(Q, C), !ae && (L = U && U.onVnodeMounted)) {
          const ge = p;
          Ee(
            () => Ce(L, oe, ge),
            C
          );
        }
        (p.shapeFlag & 256 || oe && It(oe.vnode) && oe.vnode.shapeFlag & 256) && u.a && Ee(u.a, C), u.isMounted = !0, process.env.NODE_ENV !== "production" && mr(u), p = _ = $ = null;
      }
    }, A = u.effect = new sn(
      D,
      fe,
      () => zn(w),
      u.scope
      // track it in component's effect scope
    ), w = u.update = () => {
      A.dirty && A.run();
    };
    w.id = u.uid, wt(u, !0), process.env.NODE_ENV !== "production" && (A.onTrack = u.rtc ? (L) => ut(u.rtc, L) : void 0, A.onTrigger = u.rtg ? (L) => ut(u.rtg, L) : void 0, w.ownerInstance = u), w();
  }, j = (u, p, _) => {
    p.component = u;
    const $ = u.vnode.props;
    u.vnode = p, u.next = null, yf(u, p.props, $, _), Df(u, p.children, _), Ot(), Ho(u), $t();
  }, Ve = (u, p, _, $, C, T, P, D, A = !1) => {
    const w = u && u.children, L = u ? u.shapeFlag : 0, G = p.children, { patchFlag: U, shapeFlag: Z } = p;
    if (U > 0) {
      if (U & 128) {
        hn(
          w,
          G,
          _,
          $,
          C,
          T,
          P,
          D,
          A
        );
        return;
      } else if (U & 256) {
        pn(
          w,
          G,
          _,
          $,
          C,
          T,
          P,
          D,
          A
        );
        return;
      }
    }
    Z & 8 ? (L & 16 && Ke(w, C, T), G !== w && h(_, G)) : L & 16 ? Z & 16 ? hn(
      w,
      G,
      _,
      $,
      C,
      T,
      P,
      D,
      A
    ) : Ke(w, C, T, !0) : (L & 8 && h(_, ""), Z & 16 && M(
      G,
      _,
      $,
      C,
      T,
      P,
      D,
      A
    ));
  }, pn = (u, p, _, $, C, T, P, D, A) => {
    u = u || Yt, p = p || Yt;
    const w = u.length, L = p.length, G = Math.min(w, L);
    let U;
    for (U = 0; U < G; U++) {
      const Z = p[U] = A ? ct(p[U]) : we(p[U]);
      k(
        u[U],
        Z,
        _,
        null,
        C,
        T,
        P,
        D,
        A
      );
    }
    w > L ? Ke(
      u,
      C,
      T,
      !0,
      !1,
      G
    ) : M(
      p,
      _,
      $,
      C,
      T,
      P,
      D,
      A,
      G
    );
  }, hn = (u, p, _, $, C, T, P, D, A) => {
    let w = 0;
    const L = p.length;
    let G = u.length - 1, U = L - 1;
    for (; w <= G && w <= U; ) {
      const Z = u[w], Q = p[w] = A ? ct(p[w]) : we(p[w]);
      if (Pe(Z, Q))
        k(
          Z,
          Q,
          _,
          null,
          C,
          T,
          P,
          D,
          A
        );
      else
        break;
      w++;
    }
    for (; w <= G && w <= U; ) {
      const Z = u[G], Q = p[U] = A ? ct(p[U]) : we(p[U]);
      if (Pe(Z, Q))
        k(
          Z,
          Q,
          _,
          null,
          C,
          T,
          P,
          D,
          A
        );
      else
        break;
      G--, U--;
    }
    if (w > G) {
      if (w <= U) {
        const Z = U + 1, Q = Z < L ? p[Z].el : $;
        for (; w <= U; )
          k(
            null,
            p[w] = A ? ct(p[w]) : we(p[w]),
            _,
            Q,
            C,
            T,
            P,
            D,
            A
          ), w++;
      }
    } else if (w > U)
      for (; w <= G; )
        nt(u[w], C, T, !0), w++;
    else {
      const Z = w, Q = w, oe = /* @__PURE__ */ new Map();
      for (w = Q; w <= U; w++) {
        const be = p[w] = A ? ct(p[w]) : we(p[w]);
        be.key != null && (process.env.NODE_ENV !== "production" && oe.has(be.key) && N(
          "Duplicate keys found during update:",
          JSON.stringify(be.key),
          "Make sure keys are unique."
        ), oe.set(be.key, w));
      }
      let ae, ge = 0;
      const Ie = U - Q + 1;
      let Gt = !1, wo = 0;
      const mn = new Array(Ie);
      for (w = 0; w < Ie; w++)
        mn[w] = 0;
      for (w = Z; w <= G; w++) {
        const be = u[w];
        if (ge >= Ie) {
          nt(be, C, T, !0);
          continue;
        }
        let Fe;
        if (be.key != null)
          Fe = oe.get(be.key);
        else
          for (ae = Q; ae <= U; ae++)
            if (mn[ae - Q] === 0 && Pe(be, p[ae])) {
              Fe = ae;
              break;
            }
        Fe === void 0 ? nt(be, C, T, !0) : (mn[Fe - Q] = w + 1, Fe >= wo ? wo = Fe : Gt = !0, k(
          be,
          p[Fe],
          _,
          null,
          C,
          T,
          P,
          D,
          A
        ), ge++);
      }
      const Do = Gt ? If(mn) : Yt;
      for (ae = Do.length - 1, w = Ie - 1; w >= 0; w--) {
        const be = Q + w, Fe = p[be], Vo = be + 1 < L ? p[be + 1].el : $;
        mn[w] === 0 ? k(
          null,
          Fe,
          _,
          Vo,
          C,
          T,
          P,
          D,
          A
        ) : Gt && (ae < 0 || w !== Do[ae] ? Ut(Fe, _, Vo, 2) : ae--);
      }
    }
  }, Ut = (u, p, _, $, C = null) => {
    const { el: T, type: P, transition: D, children: A, shapeFlag: w } = u;
    if (w & 6) {
      Ut(u.component.subTree, p, _, $);
      return;
    }
    if (w & 128) {
      u.suspense.move(p, _, $);
      return;
    }
    if (w & 64) {
      P.move(u, p, _, Kt);
      return;
    }
    if (P === me) {
      s(T, p, _);
      for (let G = 0; G < A.length; G++)
        Ut(A[G], p, _, $);
      s(u.anchor, p, _);
      return;
    }
    if (P === Et) {
      E(u, p, _);
      return;
    }
    if ($ !== 2 && w & 1 && D)
      if ($ === 0)
        D.beforeEnter(T), s(T, p, _), Ee(() => D.enter(T), C);
      else {
        const { leave: G, delayLeave: U, afterLeave: Z } = D, Q = () => s(T, p, _), oe = () => {
          G(T, () => {
            Q(), Z && Z();
          });
        };
        U ? U(T, Q, oe) : oe();
      }
    else
      s(T, p, _);
  }, nt = (u, p, _, $ = !1, C = !1) => {
    const {
      type: T,
      props: P,
      ref: D,
      children: A,
      dynamicChildren: w,
      shapeFlag: L,
      patchFlag: G,
      dirs: U
    } = u;
    if (D != null && vs(D, null, _, u, !0), L & 256) {
      p.ctx.deactivate(u);
      return;
    }
    const Z = L & 1 && U, Q = !It(u);
    let oe;
    if (Q && (oe = P && P.onVnodeBeforeUnmount) && Ce(oe, p, u), L & 6)
      Rc(u.component, _, $);
    else {
      if (L & 128) {
        u.suspense.unmount(_, $);
        return;
      }
      Z && je(u, null, p, "beforeUnmount"), L & 64 ? u.type.remove(
        u,
        p,
        _,
        C,
        Kt,
        $
      ) : w && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (T !== me || G > 0 && G & 64) ? Ke(
        w,
        p,
        _,
        !1,
        !0
      ) : (T === me && G & 384 || !C && L & 16) && Ke(A, p, _), $ && zs(u);
    }
    (Q && (oe = P && P.onVnodeUnmounted) || Z) && Ee(() => {
      oe && Ce(oe, p, u), Z && je(u, null, p, "unmounted");
    }, _);
  }, zs = (u) => {
    const { type: p, el: _, anchor: $, transition: C } = u;
    if (p === me) {
      process.env.NODE_ENV !== "production" && u.patchFlag > 0 && u.patchFlag & 2048 && C && !C.persisted ? u.children.forEach((P) => {
        P.type === pe ? r(P.el) : zs(P);
      }) : Mc(_, $);
      return;
    }
    if (p === Et) {
      y(u);
      return;
    }
    const T = () => {
      r(_), C && !C.persisted && C.afterLeave && C.afterLeave();
    };
    if (u.shapeFlag & 1 && C && !C.persisted) {
      const { leave: P, delayLeave: D } = C, A = () => P(_, T);
      D ? D(u.el, T, A) : A();
    } else
      T();
  }, Mc = (u, p) => {
    let _;
    for (; u !== p; )
      _ = m(u), r(u), u = _;
    r(p);
  }, Rc = (u, p, _) => {
    process.env.NODE_ENV !== "production" && u.type.__hmrId && iu(u);
    const { bum: $, scope: C, update: T, subTree: P, um: D } = u;
    $ && ut($), C.stop(), T && (T.active = !1, nt(P, u, p, _)), D && Ee(D, p), Ee(() => {
      u.isUnmounted = !0;
    }, p), p && p.pendingBranch && !p.isUnmounted && u.asyncDep && !u.asyncResolved && u.suspenseId === p.pendingId && (p.deps--, p.deps === 0 && p.resolve()), process.env.NODE_ENV !== "production" && du(u);
  }, Ke = (u, p, _, $ = !1, C = !1, T = 0) => {
    for (let P = T; P < u.length; P++)
      nt(u[P], p, _, $, C);
  }, Xn = (u) => u.shapeFlag & 6 ? Xn(u.component.subTree) : u.shapeFlag & 128 ? u.suspense.next() : m(u.anchor || u.el);
  let qs = !1;
  const Co = (u, p, _) => {
    u == null ? p._vnode && nt(p._vnode, null, null, !0) : k(
      p._vnode || null,
      u,
      p,
      null,
      null,
      null,
      _
    ), qs || (qs = !0, Ho(), gs(), qs = !1), p._vnode = u;
  }, Kt = {
    p: k,
    um: nt,
    m: Ut,
    r: zs,
    mt: ie,
    mc: M,
    pc: Ve,
    pbc: B,
    n: Xn,
    o: e
  };
  let Ys, Js;
  return t && ([Ys, Js] = t(
    Kt
  )), {
    render: Co,
    hydrate: Ys,
    createApp: mf(Co, Ys)
  };
}
function rr({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function wt({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function ql(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Sn(e, t, n = !1) {
  const s = e.children, r = t.children;
  if (F(s) && F(r))
    for (let o = 0; o < s.length; o++) {
      const i = s[o];
      let l = r[o];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[o] = ct(r[o]), l.el = i.el), n || Sn(i, l)), l.type === Nt && (l.el = i.el), process.env.NODE_ENV !== "production" && l.type === pe && !l.el && (l.el = i.el);
    }
}
function If(e) {
  const t = e.slice(), n = [0];
  let s, r, o, i, l;
  const c = e.length;
  for (s = 0; s < c; s++) {
    const a = e[s];
    if (a !== 0) {
      if (r = n[n.length - 1], e[r] < a) {
        t[s] = r, n.push(s);
        continue;
      }
      for (o = 0, i = n.length - 1; o < i; )
        l = o + i >> 1, e[n[l]] < a ? o = l + 1 : i = l;
      a < e[n[o]] && (o > 0 && (t[s] = n[o - 1]), n[o] = s);
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0; )
    n[o] = i, i = t[i];
  return n;
}
function Yl(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Yl(t);
}
const kf = (e) => e.__isTeleport, tn = (e) => e && (e.disabled || e.disabled === ""), oi = (e) => typeof SVGElement < "u" && e instanceof SVGElement, ii = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Or = (e, t) => {
  const n = e && e.to;
  if (se(n))
    if (t) {
      const s = t(n);
      return s || process.env.NODE_ENV !== "production" && N(
        `Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`
      ), s;
    } else
      return process.env.NODE_ENV !== "production" && N(
        "Current renderer does not support string target for Teleports. (missing querySelector renderer option)"
      ), null;
  else
    return process.env.NODE_ENV !== "production" && !n && !tn(e) && N(`Invalid Teleport target: ${n}`), n;
}, Pf = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, s, r, o, i, l, c, a) {
    const {
      mc: h,
      pc: d,
      pbc: m,
      o: { insert: v, querySelector: b, createText: k, createComment: W }
    } = a, q = tn(t.props);
    let { shapeFlag: S, children: g, dynamicChildren: E } = t;
    if (process.env.NODE_ENV !== "production" && gt && (c = !1, E = null), e == null) {
      const y = t.el = process.env.NODE_ENV !== "production" ? W("teleport start") : k(""), V = t.anchor = process.env.NODE_ENV !== "production" ? W("teleport end") : k("");
      v(y, n, s), v(V, n, s);
      const O = t.target = Or(t.props, b), x = t.targetAnchor = k("");
      O ? (v(x, O), i === "svg" || oi(O) ? i = "svg" : (i === "mathml" || ii(O)) && (i = "mathml")) : process.env.NODE_ENV !== "production" && !q && N("Invalid Teleport target on mount:", O, `(${typeof O})`);
      const M = (I, B) => {
        S & 16 && h(
          g,
          I,
          B,
          r,
          o,
          i,
          l,
          c
        );
      };
      q ? M(n, V) : O && M(O, x);
    } else {
      t.el = e.el;
      const y = t.anchor = e.anchor, V = t.target = e.target, O = t.targetAnchor = e.targetAnchor, x = tn(e.props), M = x ? n : V, I = x ? y : O;
      if (i === "svg" || oi(V) ? i = "svg" : (i === "mathml" || ii(V)) && (i = "mathml"), E ? (m(
        e.dynamicChildren,
        E,
        M,
        r,
        o,
        i,
        l
      ), Sn(e, t, !0)) : c || d(
        e,
        t,
        M,
        I,
        r,
        o,
        i,
        l,
        !1
      ), q)
        x ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : ls(
          t,
          n,
          y,
          a,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const B = t.target = Or(
          t.props,
          b
        );
        B ? ls(
          t,
          B,
          null,
          a,
          0
        ) : process.env.NODE_ENV !== "production" && N(
          "Invalid Teleport target on update:",
          V,
          `(${typeof V})`
        );
      } else
        x && ls(
          t,
          V,
          O,
          a,
          1
        );
    }
    Jl(t);
  },
  remove(e, t, n, s, { um: r, o: { remove: o } }, i) {
    const { shapeFlag: l, children: c, anchor: a, targetAnchor: h, target: d, props: m } = e;
    if (d && o(h), i && o(a), l & 16) {
      const v = i || !tn(m);
      for (let b = 0; b < c.length; b++) {
        const k = c[b];
        r(
          k,
          t,
          n,
          v,
          !!k.dynamicChildren
        );
      }
    }
  },
  move: ls,
  hydrate: Lf
};
function ls(e, t, n, { o: { insert: s }, m: r }, o = 2) {
  o === 0 && s(e.targetAnchor, t, n);
  const { el: i, anchor: l, shapeFlag: c, children: a, props: h } = e, d = o === 2;
  if (d && s(i, t, n), (!d || tn(h)) && c & 16)
    for (let m = 0; m < a.length; m++)
      r(
        a[m],
        t,
        n,
        2
      );
  d && s(l, t, n);
}
function Lf(e, t, n, s, r, o, {
  o: { nextSibling: i, parentNode: l, querySelector: c }
}, a) {
  const h = t.target = Or(
    t.props,
    c
  );
  if (h) {
    const d = h._lpa || h.firstChild;
    if (t.shapeFlag & 16)
      if (tn(t.props))
        t.anchor = a(
          i(e),
          t,
          l(e),
          n,
          s,
          r,
          o
        ), t.targetAnchor = d;
      else {
        t.anchor = i(e);
        let m = d;
        for (; m; )
          if (m = i(m), m && m.nodeType === 8 && m.data === "teleport anchor") {
            t.targetAnchor = m, h._lpa = t.targetAnchor && i(t.targetAnchor);
            break;
          }
        a(
          d,
          t,
          h,
          n,
          s,
          r,
          o
        );
      }
    Jl(t);
  }
  return t.anchor && i(t.anchor);
}
const Ff = Pf;
function Jl(e) {
  const t = e.ctx;
  if (t && t.ut) {
    let n = e.children[0].el;
    for (; n && n !== e.targetAnchor; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", t.uid), n = n.nextSibling;
    t.ut();
  }
}
const me = Symbol.for("v-fgt"), Nt = Symbol.for("v-txt"), pe = Symbol.for("v-cmt"), Et = Symbol.for("v-stc"), An = [];
let De = null;
function Bs(e = !1) {
  An.push(De = e ? null : []);
}
function Zl() {
  An.pop(), De = An[An.length - 1] || null;
}
let Ft = 1;
function $r(e) {
  Ft += e;
}
function Xl(e) {
  return e.dynamicChildren = Ft > 0 ? De || Yt : null, Zl(), Ft > 0 && De && De.push(e), e;
}
function jf(e, t, n, s, r, o) {
  return Xl(
    go(
      e,
      t,
      n,
      s,
      r,
      o,
      !0
    )
  );
}
function mo(e, t, n, s, r) {
  return Xl(
    ce(
      e,
      t,
      n,
      s,
      r,
      !0
    )
  );
}
function Qe(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Pe(e, t) {
  return process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && Wt.has(t.type) ? (e.shapeFlag &= -257, t.shapeFlag &= -513, !1) : e.type === t.type && e.key === t.key;
}
let Cr;
function Hf(e) {
  Cr = e;
}
const Bf = (...e) => ec(
  ...Cr ? Cr(e, ue) : e
), Us = "__vInternal", Ql = ({ key: e }) => e ?? null, us = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? se(e) || he(e) || K(e) ? { i: ue, r: e, k: t, f: !!n } : e : null);
function go(e, t = null, n = null, s = 0, r = null, o = e === me ? 0 : 1, i = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ql(t),
    ref: t && us(t),
    scopeId: Is,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: ue
  };
  return l ? (_o(c, n), o & 128 && e.normalize(c)) : n && (c.shapeFlag |= se(n) ? 8 : 16), process.env.NODE_ENV !== "production" && c.key !== c.key && N("VNode created with invalid key (NaN). VNode type:", c.type), Ft > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  De && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && De.push(c), c;
}
const ce = process.env.NODE_ENV !== "production" ? Bf : ec;
function ec(e, t = null, n = null, s = 0, r = null, o = !1) {
  if ((!e || e === oo) && (process.env.NODE_ENV !== "production" && !e && N(`Invalid vnode type when creating vnode: ${e}.`), e = pe), Qe(e)) {
    const l = Re(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && _o(l, n), Ft > 0 && !o && De && (l.shapeFlag & 6 ? De[De.indexOf(e)] = l : De.push(l)), l.patchFlag |= -2, l;
  }
  if (ac(e) && (e = e.__vccOpts), t) {
    t = tc(t);
    let { class: l, style: c } = t;
    l && !se(l) && (t.class = fn(l)), ee(c) && (Pn(c) && !F(c) && (c = ne({}, c)), t.style = un(c));
  }
  const i = se(e) ? 1 : pl(e) ? 128 : kf(e) ? 64 : ee(e) ? 4 : K(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && Pn(e) && (e = Y(e), N(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), go(
    e,
    t,
    n,
    s,
    r,
    i,
    o,
    !0
  );
}
function tc(e) {
  return e ? Pn(e) || Us in e ? ne({}, e) : e : null;
}
function Re(e, t, n = !1) {
  const { props: s, ref: r, patchFlag: o, children: i } = e, l = t ? sc(s || {}, t) : s;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && Ql(l),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? F(r) ? r.concat(us(t)) : [r, us(t)] : us(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && o === -1 && F(i) ? i.map(nc) : i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== me ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Re(e.ssContent),
    ssFallback: e.ssFallback && Re(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function nc(e) {
  const t = Re(e);
  return F(e.children) && (t.children = e.children.map(nc)), t;
}
function Eo(e = " ", t = 0) {
  return ce(Nt, null, e, t);
}
function Uf(e, t) {
  const n = ce(Et, null, e);
  return n.staticCount = t, n;
}
function Kf(e = "", t = !1) {
  return t ? (Bs(), mo(pe, null, e)) : ce(pe, null, e);
}
function we(e) {
  return e == null || typeof e == "boolean" ? ce(pe) : F(e) ? ce(
    me,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? ct(e) : ce(Nt, null, String(e));
}
function ct(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Re(e);
}
function _o(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (F(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), _o(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !(Us in t) ? t._ctx = ue : r === 3 && ue && (ue.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    K(t) ? (t = { default: t, _ctx: ue }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [Eo(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function sc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = fn([t.class, s.class]));
      else if (r === "style")
        t.style = un([t.style, s.style]);
      else if (cn(r)) {
        const o = t[r], i = s[r];
        i && o !== i && !(F(o) && o.includes(i)) && (t[r] = o ? [].concat(o, i) : i);
      } else
        r !== "" && (t[r] = s[r]);
  }
  return t;
}
function Ce(e, t, n, s = null) {
  Te(e, t, 7, [
    n,
    s
  ]);
}
const Gf = Pl();
let Wf = 0;
function rc(e, t, n) {
  const s = e.type, r = (t ? t.appContext : e.appContext) || Gf, o = {
    uid: Wf++,
    vnode: e,
    type: s,
    parent: t,
    appContext: r,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    scope: new Br(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: jl(s, r),
    emitsOptions: fl(s, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: te,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: te,
    data: te,
    props: te,
    attrs: te,
    slots: te,
    refs: te,
    setupState: te,
    setupContext: null,
    attrsProxy: null,
    slotsProxy: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return process.env.NODE_ENV !== "production" ? o.ctx = zu(o) : o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = gu.bind(null, o), e.ce && e.ce(o), o;
}
let de = null;
const tt = () => de || ue;
let bs, wr;
{
  const e = jr(), t = (n, s) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(s), (o) => {
      r.length > 1 ? r.forEach((i) => i(o)) : r[0](o);
    };
  };
  bs = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => de = n
  ), wr = t(
    "__VUE_SSR_SETTERS__",
    (n) => Zn = n
  );
}
const jt = (e) => {
  const t = de;
  return bs(e), e.scope.on(), () => {
    e.scope.off(), bs(t);
  };
}, Dr = () => {
  de && de.scope.off(), bs(null);
}, zf = /* @__PURE__ */ Se("slot,component");
function Vr(e, t) {
  const n = t.isNativeTag || Si;
  (zf(e) || n(e)) && N(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function oc(e) {
  return e.vnode.shapeFlag & 4;
}
let Zn = !1;
function ic(e, t = !1) {
  t && wr(t);
  const { props: n, children: s } = e.vnode, r = oc(e);
  Ef(e, n, r, t), wf(e, s);
  const o = r ? qf(e, t) : void 0;
  return t && wr(!1), o;
}
function qf(e, t) {
  var n;
  const s = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (s.name && Vr(s.name, e.appContext.config), s.components) {
      const o = Object.keys(s.components);
      for (let i = 0; i < o.length; i++)
        Vr(o[i], e.appContext.config);
    }
    if (s.directives) {
      const o = Object.keys(s.directives);
      for (let i = 0; i < o.length; i++)
        vl(o[i]);
    }
    s.compilerOptions && yo() && N(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = zr(new Proxy(e.ctx, xn)), process.env.NODE_ENV !== "production" && qu(e);
  const { setup: r } = s;
  if (r) {
    const o = e.setupContext = r.length > 1 ? cc(e) : null, i = jt(e);
    Ot();
    const l = Ue(
      r,
      e,
      0,
      [
        process.env.NODE_ENV !== "production" ? xt(e.props) : e.props,
        o
      ]
    );
    if ($t(), i(), Cs(l)) {
      if (l.then(Dr, Dr), t)
        return l.then((c) => {
          xr(e, c, t);
        }).catch((c) => {
          Ct(c, e, 0);
        });
      if (e.asyncDep = l, process.env.NODE_ENV !== "production" && !e.suspense) {
        const c = (n = s.name) != null ? n : "Anonymous";
        N(
          `Component <${c}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      xr(e, l, t);
  } else
    lc(e, t);
}
function xr(e, t, n) {
  K(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ee(t) ? (process.env.NODE_ENV !== "production" && Qe(t) && N(
    "setup() should not return VNodes directly - return a render function instead."
  ), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Zr(t), process.env.NODE_ENV !== "production" && Yu(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && N(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), lc(e, n);
}
let Mn, Tr;
function Yf(e) {
  Mn = e, Tr = (t) => {
    t.render._rc && (t.withProxy = new Proxy(t.ctx, Wu));
  };
}
const yo = () => !Mn;
function lc(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && Mn && !s.render) {
      const r = s.template || po(e).template;
      if (r) {
        process.env.NODE_ENV !== "production" && We(e, "compile");
        const { isCustomElement: o, compilerOptions: i } = e.appContext.config, { delimiters: l, compilerOptions: c } = s, a = ne(
          ne(
            {
              isCustomElement: o,
              delimiters: l
            },
            i
          ),
          c
        );
        s.render = Mn(r, a), process.env.NODE_ENV !== "production" && ze(e, "compile");
      }
    }
    e.render = s.render || fe, Tr && Tr(e);
  }
  {
    const r = jt(e);
    Ot();
    try {
      af(e);
    } finally {
      $t(), r();
    }
  }
  process.env.NODE_ENV !== "production" && !s.render && e.render === fe && !t && (!Mn && s.template ? N(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : N("Component is missing template or render function."));
}
function li(e) {
  return e.attrsProxy || (e.attrsProxy = new Proxy(
    e.attrs,
    process.env.NODE_ENV !== "production" ? {
      get(t, n) {
        return Es(), _e(e, "get", "$attrs"), t[n];
      },
      set() {
        return N("setupContext.attrs is readonly."), !1;
      },
      deleteProperty() {
        return N("setupContext.attrs is readonly."), !1;
      }
    } : {
      get(t, n) {
        return _e(e, "get", "$attrs"), t[n];
      }
    }
  ));
}
function Jf(e) {
  return e.slotsProxy || (e.slotsProxy = new Proxy(e.slots, {
    get(t, n) {
      return _e(e, "get", "$slots"), t[n];
    }
  }));
}
function cc(e) {
  const t = (n) => {
    if (process.env.NODE_ENV !== "production" && (e.exposed && N("expose() should be called only once per setup()."), n != null)) {
      let s = typeof n;
      s === "object" && (F(n) ? s = "array" : he(n) && (s = "ref")), s !== "object" && N(
        `expose() should be passed a plain object, received ${s}.`
      );
    }
    e.exposed = n || {};
  };
  return process.env.NODE_ENV !== "production" ? Object.freeze({
    get attrs() {
      return li(e);
    },
    get slots() {
      return Jf(e);
    },
    get emit() {
      return (n, ...s) => e.emit(n, ...s);
    },
    expose: t
  }) : {
    get attrs() {
      return li(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Ks(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Zr(zr(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in kt)
          return kt[n](e);
      },
      has(t, n) {
        return n in t || n in kt;
      }
    }));
}
const Zf = /(?:^|[-_])(\w)/g, Xf = (e) => e.replace(Zf, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Gn(e, t = !0) {
  return K(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Gs(e, t, n = !1) {
  let s = Gn(t);
  if (!s && t.__file) {
    const r = t.__file.match(/([^/\\]+)\.\w+$/);
    r && (s = r[1]);
  }
  if (!s && e && e.parent) {
    const r = (o) => {
      for (const i in o)
        if (o[i] === t)
          return i;
    };
    s = r(
      e.components || e.parent.type.components
    ) || r(e.appContext.components);
  }
  return s ? Xf(s) : n ? "App" : "Anonymous";
}
function ac(e) {
  return K(e) && "__vccOpts" in e;
}
const zt = (e, t) => Pa(e, t, Zn);
function Qf(e, t, n = te) {
  const s = tt();
  if (process.env.NODE_ENV !== "production" && !s)
    return N("useModel() called without active instance."), mt();
  if (process.env.NODE_ENV !== "production" && !s.propsOptions[0][t])
    return N(`useModel() called with prop "${t}" which is not declared.`), mt();
  const r = $e(t), o = ye(t), i = tl((c, a) => {
    let h;
    return _l(() => {
      const d = e[t];
      Le(h, d) && (h = d, a());
    }), {
      get() {
        return c(), n.get ? n.get(h) : h;
      },
      set(d) {
        const m = s.vnode.props;
        !(m && // check if parent has passed v-model
        (t in m || r in m || o in m) && (`onUpdate:${t}` in m || `onUpdate:${r}` in m || `onUpdate:${o}` in m)) && Le(d, h) && (h = d, a()), s.emit(`update:${t}`, n.set ? n.set(d) : d);
      }
    };
  }), l = t === "modelValue" ? "modelModifiers" : `${t}Modifiers`;
  return i[Symbol.iterator] = () => {
    let c = 0;
    return {
      next() {
        return c < 2 ? { value: c++ ? e[l] || {} : i, done: !1 } : { done: !0 };
      }
    };
  }, i;
}
function vo(e, t, n) {
  const s = arguments.length;
  return s === 2 ? ee(t) && !F(t) ? Qe(t) ? ce(e, null, [t]) : ce(e, t) : ce(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && Qe(n) && (n = [n]), ce(e, t, n));
}
function uc() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, s = { style: "color:#eb2f96" }, r = {
    header(d) {
      return ee(d) ? d.__isVue ? ["div", e, "VueInstance"] : he(d) ? [
        "div",
        {},
        ["span", e, h(d)],
        "<",
        l(d.value),
        ">"
      ] : pt(d) ? [
        "div",
        {},
        ["span", e, ht(d) ? "ShallowReactive" : "Reactive"],
        "<",
        l(d),
        `>${Xe(d) ? " (readonly)" : ""}`
      ] : Xe(d) ? [
        "div",
        {},
        ["span", e, ht(d) ? "ShallowReadonly" : "Readonly"],
        "<",
        l(d),
        ">"
      ] : null : null;
    },
    hasBody(d) {
      return d && d.__isVue;
    },
    body(d) {
      if (d && d.__isVue)
        return [
          "div",
          {},
          ...o(d.$)
        ];
    }
  };
  function o(d) {
    const m = [];
    d.type.props && d.props && m.push(i("props", Y(d.props))), d.setupState !== te && m.push(i("setup", d.setupState)), d.data !== te && m.push(i("data", Y(d.data)));
    const v = c(d, "computed");
    v && m.push(i("computed", v));
    const b = c(d, "inject");
    return b && m.push(i("injected", b)), m.push([
      "div",
      {},
      [
        "span",
        {
          style: s.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: d }]
    ]), m;
  }
  function i(d, m) {
    return m = ne({}, m), Object.keys(m).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        d
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(m).map((v) => [
          "div",
          {},
          ["span", s, v + ": "],
          l(m[v], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(d, m = !0) {
    return typeof d == "number" ? ["span", t, d] : typeof d == "string" ? ["span", n, JSON.stringify(d)] : typeof d == "boolean" ? ["span", s, d] : ee(d) ? ["object", { object: m ? Y(d) : d }] : ["span", n, String(d)];
  }
  function c(d, m) {
    const v = d.type;
    if (K(v))
      return;
    const b = {};
    for (const k in d.ctx)
      a(v, k, m) && (b[k] = d.ctx[k]);
    return b;
  }
  function a(d, m, v) {
    const b = d[v];
    if (F(b) && b.includes(m) || ee(b) && m in b || d.extends && a(d.extends, m, v) || d.mixins && d.mixins.some((k) => a(k, m, v)))
      return !0;
  }
  function h(d) {
    return ht(d) ? "ShallowRef" : d.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
function ed(e, t, n, s) {
  const r = n[s];
  if (r && fc(r, e))
    return r;
  const o = t();
  return o.memo = e.slice(), n[s] = o;
}
function fc(e, t) {
  const n = e.memo;
  if (n.length != t.length)
    return !1;
  for (let s = 0; s < n.length; s++)
    if (Le(n[s], t[s]))
      return !1;
  return Ft > 0 && De && De.push(e), !0;
}
const Sr = "3.4.19", Ne = process.env.NODE_ENV !== "production" ? N : fe, td = As, nd = (process.env.NODE_ENV, ke), sd = (process.env.NODE_ENV, to), rd = {
  createComponentInstance: rc,
  setupComponent: ic,
  renderComponentRoot: as,
  setCurrentRenderingInstance: Bn,
  isVNode: Qe,
  normalizeVNode: we
}, od = rd, id = null, ld = null, cd = null;
/**
* @vue/runtime-dom v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const ad = "http://www.w3.org/2000/svg", ud = "http://www.w3.org/1998/Math/MathML", at = typeof document < "u" ? document : null, ci = at && /* @__PURE__ */ at.createElement("template"), fd = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const r = t === "svg" ? at.createElementNS(ad, e) : t === "mathml" ? at.createElementNS(ud, e) : at.createElement(e, n ? { is: n } : void 0);
    return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r;
  },
  createText: (e) => at.createTextNode(e),
  createComment: (e) => at.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => at.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, r, o) {
    const i = n ? n.previousSibling : t.lastChild;
    if (r && (r === o || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === o || !(r = r.nextSibling)); )
        ;
    else {
      ci.innerHTML = s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e;
      const l = ci.content;
      if (s === "svg" || s === "mathml") {
        const c = l.firstChild;
        for (; c.firstChild; )
          l.appendChild(c.firstChild);
        l.removeChild(c);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      i ? i.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, rt = "transition", _n = "animation", on = Symbol("_vtc"), No = (e, { slots: t }) => vo(Nl, pc(e), t);
No.displayName = "Transition";
const dc = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
}, dd = No.props = /* @__PURE__ */ ne(
  {},
  ao,
  dc
), Dt = (e, t = []) => {
  F(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, ai = (e) => e ? F(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function pc(e) {
  const t = {};
  for (const R in e)
    R in dc || (t[R] = e[R]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: s,
    duration: r,
    enterFromClass: o = `${n}-enter-from`,
    enterActiveClass: i = `${n}-enter-active`,
    enterToClass: l = `${n}-enter-to`,
    appearFromClass: c = o,
    appearActiveClass: a = i,
    appearToClass: h = l,
    leaveFromClass: d = `${n}-leave-from`,
    leaveActiveClass: m = `${n}-leave-active`,
    leaveToClass: v = `${n}-leave-to`
  } = e, b = pd(r), k = b && b[0], W = b && b[1], {
    onBeforeEnter: q,
    onEnter: S,
    onEnterCancelled: g,
    onLeave: E,
    onLeaveCancelled: y,
    onBeforeAppear: V = q,
    onAppear: O = S,
    onAppearCancelled: x = g
  } = t, M = (R, J, re) => {
    ot(R, J ? h : l), ot(R, J ? a : i), re && re();
  }, I = (R, J) => {
    R._isLeaving = !1, ot(R, d), ot(R, v), ot(R, m), J && J();
  }, B = (R) => (J, re) => {
    const ie = R ? O : S, H = () => M(J, R, re);
    Dt(ie, [J, H]), ui(() => {
      ot(J, R ? c : o), qe(J, R ? h : l), ai(ie) || fi(J, s, k, H);
    });
  };
  return ne(t, {
    onBeforeEnter(R) {
      Dt(q, [R]), qe(R, o), qe(R, i);
    },
    onBeforeAppear(R) {
      Dt(V, [R]), qe(R, c), qe(R, a);
    },
    onEnter: B(!1),
    onAppear: B(!0),
    onLeave(R, J) {
      R._isLeaving = !0;
      const re = () => I(R, J);
      qe(R, d), mc(), qe(R, m), ui(() => {
        R._isLeaving && (ot(R, d), qe(R, v), ai(E) || fi(R, s, W, re));
      }), Dt(E, [R, re]);
    },
    onEnterCancelled(R) {
      M(R, !1), Dt(g, [R]);
    },
    onAppearCancelled(R) {
      M(R, !0), Dt(x, [R]);
    },
    onLeaveCancelled(R) {
      I(R), Dt(y, [R]);
    }
  });
}
function pd(e) {
  if (e == null)
    return null;
  if (ee(e))
    return [or(e.enter), or(e.leave)];
  {
    const t = or(e);
    return [t, t];
  }
}
function or(e) {
  const t = hs(e);
  return process.env.NODE_ENV !== "production" && Xr(t, "<transition> explicit duration"), t;
}
function qe(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[on] || (e[on] = /* @__PURE__ */ new Set())).add(t);
}
function ot(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[on];
  n && (n.delete(t), n.size || (e[on] = void 0));
}
function ui(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let hd = 0;
function fi(e, t, n, s) {
  const r = e._endId = ++hd, o = () => {
    r === e._endId && s();
  };
  if (n)
    return setTimeout(o, n);
  const { type: i, timeout: l, propCount: c } = hc(e, t);
  if (!i)
    return s();
  const a = i + "end";
  let h = 0;
  const d = () => {
    e.removeEventListener(a, m), o();
  }, m = (v) => {
    v.target === e && ++h >= c && d();
  };
  setTimeout(() => {
    h < c && d();
  }, l + 1), e.addEventListener(a, m);
}
function hc(e, t) {
  const n = window.getComputedStyle(e), s = (b) => (n[b] || "").split(", "), r = s(`${rt}Delay`), o = s(`${rt}Duration`), i = di(r, o), l = s(`${_n}Delay`), c = s(`${_n}Duration`), a = di(l, c);
  let h = null, d = 0, m = 0;
  t === rt ? i > 0 && (h = rt, d = i, m = o.length) : t === _n ? a > 0 && (h = _n, d = a, m = c.length) : (d = Math.max(i, a), h = d > 0 ? i > a ? rt : _n : null, m = h ? h === rt ? o.length : c.length : 0);
  const v = h === rt && /\b(transform|all)(,|$)/.test(
    s(`${rt}Property`).toString()
  );
  return {
    type: h,
    timeout: d,
    propCount: m,
    hasTransform: v
  };
}
function di(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => pi(n) + pi(e[s])));
}
function pi(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function mc() {
  return document.body.offsetHeight;
}
function md(e, t, n) {
  const s = e[on];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Wn = Symbol("_vod"), bo = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[Wn] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : yn(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: s }) {
    !t == !n && (e.style.display === e[Wn] || !t) || (s ? t ? (s.beforeEnter(e), yn(e, !0), s.enter(e)) : s.leave(e, () => {
      yn(e, !1);
    }) : yn(e, t));
  },
  beforeUnmount(e, { value: t }) {
    yn(e, t);
  }
};
process.env.NODE_ENV !== "production" && (bo.name = "show");
function yn(e, t) {
  e.style.display = t ? e[Wn] : "none";
}
function gd() {
  bo.getSSRProps = ({ value: e }) => {
    if (!e)
      return { style: { display: "none" } };
  };
}
const gc = Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : "");
function Ed(e) {
  const t = tt();
  if (!t) {
    process.env.NODE_ENV !== "production" && Ne("useCssVars is called without current active component instance.");
    return;
  }
  const n = t.ut = (r = e(t.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
    ).forEach((o) => Mr(o, r));
  };
  process.env.NODE_ENV !== "production" && (t.getCssVars = () => e(t.proxy));
  const s = () => {
    const r = e(t.proxy);
    Ar(t.subTree, r), n(r);
  };
  El(s), Jn(() => {
    const r = new MutationObserver(s);
    r.observe(t.subTree.el.parentNode, { childList: !0 }), Hs(() => r.disconnect());
  });
}
function Ar(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense;
    e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
      Ar(n.activeBranch, t);
    });
  }
  for (; e.component; )
    e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el)
    Mr(e.el, t);
  else if (e.type === me)
    e.children.forEach((n) => Ar(n, t));
  else if (e.type === Et) {
    let { el: n, anchor: s } = e;
    for (; n && (Mr(n, t), n !== s); )
      n = n.nextSibling;
  }
}
function Mr(e, t) {
  if (e.nodeType === 1) {
    const n = e.style;
    let s = "";
    for (const r in t)
      n.setProperty(`--${r}`, t[r]), s += `--${r}: ${t[r]};`;
    n[gc] = s;
  }
}
const _d = /(^|;)\s*display\s*:/;
function yd(e, t, n) {
  const s = e.style, r = se(n), o = s.display;
  let i = !1;
  if (n && !r) {
    if (t && !se(t))
      for (const l in t)
        n[l] == null && Rr(s, l, "");
    for (const l in n)
      l === "display" && (i = !0), Rr(s, l, n[l]);
  } else if (r) {
    if (t !== n) {
      const l = s[gc];
      l && (n += ";" + l), s.cssText = n, i = _d.test(n);
    }
  } else
    t && e.removeAttribute("style");
  Wn in e && (e[Wn] = i ? s.display : "", s.display = o);
}
const vd = /[^\\];\s*$/, hi = /\s*!important$/;
function Rr(e, t, n) {
  if (F(n))
    n.forEach((s) => Rr(e, t, s));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && vd.test(n) && Ne(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = Nd(e, t);
    hi.test(n) ? e.setProperty(
      ye(s),
      n.replace(hi, ""),
      "important"
    ) : e[s] = n;
  }
}
const mi = ["Webkit", "Moz", "ms"], ir = {};
function Nd(e, t) {
  const n = ir[t];
  if (n)
    return n;
  let s = $e(t);
  if (s !== "filter" && s in e)
    return ir[t] = s;
  s = yt(s);
  for (let r = 0; r < mi.length; r++) {
    const o = mi[r] + s;
    if (o in e)
      return ir[t] = o;
  }
  return t;
}
const gi = "http://www.w3.org/1999/xlink";
function bd(e, t, n, s, r) {
  if (s && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(gi, t.slice(6, t.length)) : e.setAttributeNS(gi, t, n);
  else {
    const o = ia(t);
    n == null || o && !Hr(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : n);
  }
}
function Od(e, t, n, s, r, o, i) {
  if (t === "innerHTML" || t === "textContent") {
    s && i(s, r, o), e[t] = n ?? "";
    return;
  }
  const l = e.tagName;
  if (t === "value" && l !== "PROGRESS" && // custom elements may use _value internally
  !l.includes("-")) {
    e._value = n;
    const a = l === "OPTION" ? e.getAttribute("value") : e.value, h = n ?? "";
    a !== h && (e.value = h), n == null && e.removeAttribute(t);
    return;
  }
  let c = !1;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean" ? n = Hr(n) : n == null && a === "string" ? (n = "", c = !0) : a === "number" && (n = 0, c = !0);
  }
  try {
    e[t] = n;
  } catch (a) {
    process.env.NODE_ENV !== "production" && !c && Ne(
      `Failed setting prop "${t}" on <${l.toLowerCase()}>: value ${n} is invalid.`,
      a
    );
  }
  c && e.removeAttribute(t);
}
function Ze(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function $d(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Ei = Symbol("_vei");
function Cd(e, t, n, s, r = null) {
  const o = e[Ei] || (e[Ei] = {}), i = o[t];
  if (s && i)
    i.value = s;
  else {
    const [l, c] = wd(t);
    if (s) {
      const a = o[t] = xd(s, r);
      Ze(e, l, a, c);
    } else
      i && ($d(e, l, i, c), o[t] = void 0);
  }
}
const _i = /(?:Once|Passive|Capture)$/;
function wd(e) {
  let t;
  if (_i.test(e)) {
    t = {};
    let s;
    for (; s = e.match(_i); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : ye(e.slice(2)), t];
}
let lr = 0;
const Dd = /* @__PURE__ */ Promise.resolve(), Vd = () => lr || (Dd.then(() => lr = 0), lr = Date.now());
function xd(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    Te(
      Td(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = Vd(), n;
}
function Td(e, t) {
  if (F(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((s) => (r) => !r._stopped && s && s(r));
  } else
    return t;
}
const yi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Sd = (e, t, n, s, r, o, i, l, c) => {
  const a = r === "svg";
  t === "class" ? md(e, s, a) : t === "style" ? yd(e, n, s) : cn(t) ? ds(t) || Cd(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Ad(e, t, s, a)) ? Od(
    e,
    t,
    s,
    o,
    i,
    l,
    c
  ) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), bd(e, t, s, a));
};
function Ad(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && yi(t) && K(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return yi(t) && se(n) ? !1 : t in e;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ec(e, t) {
  const n = /* @__PURE__ */ uo(e);
  class s extends Ws {
    constructor(o) {
      super(n, o, t);
    }
  }
  return s.def = n, s;
}
/*! #__NO_SIDE_EFFECTS__ */
const Md = /* @__NO_SIDE_EFFECTS__ */ (e) => /* @__PURE__ */ Ec(e, Vc), Rd = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Ws extends Rd {
  constructor(t, n = {}, s) {
    super(), this._def = t, this._props = n, this._instance = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this._ob = null, this.shadowRoot && s ? s(this._createVNode(), this.shadowRoot) : (process.env.NODE_ENV !== "production" && this.shadowRoot && Ne(
      "Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."
    ), this.attachShadow({ mode: "open" }), this._def.__asyncLoader || this._resolveProps(this._def));
  }
  connectedCallback() {
    this._connected = !0, this._instance || (this._resolved ? this._update() : this._resolveDef());
  }
  disconnectedCallback() {
    this._connected = !1, this._ob && (this._ob.disconnect(), this._ob = null), Ms(() => {
      this._connected || (Ir(null, this.shadowRoot), this._instance = null);
    });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    this._resolved = !0;
    for (let s = 0; s < this.attributes.length; s++)
      this._setAttr(this.attributes[s].name);
    this._ob = new MutationObserver((s) => {
      for (const r of s)
        this._setAttr(r.attributeName);
    }), this._ob.observe(this, { attributes: !0 });
    const t = (s, r = !1) => {
      const { props: o, styles: i } = s;
      let l;
      if (o && !F(o))
        for (const c in o) {
          const a = o[c];
          (a === Number || a && a.type === Number) && (c in this._props && (this._props[c] = hs(this._props[c])), (l || (l = /* @__PURE__ */ Object.create(null)))[$e(c)] = !0);
        }
      this._numberProps = l, r && this._resolveProps(s), this._applyStyles(i), this._update();
    }, n = this._def.__asyncLoader;
    n ? n().then((s) => t(s, !0)) : t(this._def);
  }
  _resolveProps(t) {
    const { props: n } = t, s = F(n) ? n : Object.keys(n || {});
    for (const r of Object.keys(this))
      r[0] !== "_" && s.includes(r) && this._setProp(r, this[r], !0, !1);
    for (const r of s.map($e))
      Object.defineProperty(this, r, {
        get() {
          return this._getProp(r);
        },
        set(o) {
          this._setProp(r, o);
        }
      });
  }
  _setAttr(t) {
    let n = this.getAttribute(t);
    const s = $e(t);
    this._numberProps && this._numberProps[s] && (n = hs(n)), this._setProp(s, n, !1);
  }
  /**
   * @internal
   */
  _getProp(t) {
    return this._props[t];
  }
  /**
   * @internal
   */
  _setProp(t, n, s = !0, r = !0) {
    n !== this._props[t] && (this._props[t] = n, r && this._instance && this._update(), s && (n === !0 ? this.setAttribute(ye(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(ye(t), n + "") : n || this.removeAttribute(ye(t))));
  }
  _update() {
    Ir(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const t = ce(this._def, ne({}, this._props));
    return this._instance || (t.ce = (n) => {
      this._instance = n, n.isCE = !0, process.env.NODE_ENV !== "production" && (n.ceReload = (o) => {
        this._styles && (this._styles.forEach((i) => this.shadowRoot.removeChild(i)), this._styles.length = 0), this._applyStyles(o), this._instance = null, this._update();
      });
      const s = (o, i) => {
        this.dispatchEvent(
          new CustomEvent(o, {
            detail: i
          })
        );
      };
      n.emit = (o, ...i) => {
        s(o, i), ye(o) !== o && s(ye(o), i);
      };
      let r = this;
      for (; r = r && (r.parentNode || r.host); )
        if (r instanceof Ws) {
          n.parent = r._instance, n.provides = r._instance.provides;
          break;
        }
    }), t;
  }
  _applyStyles(t) {
    t && t.forEach((n) => {
      const s = document.createElement("style");
      s.textContent = n, this.shadowRoot.appendChild(s), process.env.NODE_ENV !== "production" && (this._styles || (this._styles = [])).push(s);
    });
  }
}
function Id(e = "$style") {
  {
    const t = tt();
    if (!t)
      return process.env.NODE_ENV !== "production" && Ne("useCssModule must be called inside setup()"), te;
    const n = t.type.__cssModules;
    if (!n)
      return process.env.NODE_ENV !== "production" && Ne("Current instance does not have CSS modules injected."), te;
    const s = n[e];
    return s || (process.env.NODE_ENV !== "production" && Ne(`Current instance does not have CSS module named "${e}".`), te);
  }
}
const _c = /* @__PURE__ */ new WeakMap(), yc = /* @__PURE__ */ new WeakMap(), Os = Symbol("_moveCb"), vi = Symbol("_enterCb"), vc = {
  name: "TransitionGroup",
  props: /* @__PURE__ */ ne({}, dd, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const n = tt(), s = co();
    let r, o;
    return Fs(() => {
      if (!r.length)
        return;
      const i = e.moveClass || `${e.name || "v"}-move`;
      if (!Hd(
        r[0].el,
        n.vnode.el,
        i
      ))
        return;
      r.forEach(Ld), r.forEach(Fd);
      const l = r.filter(jd);
      mc(), l.forEach((c) => {
        const a = c.el, h = a.style;
        qe(a, i), h.transform = h.webkitTransform = h.transitionDuration = "";
        const d = a[Os] = (m) => {
          m && m.target !== a || (!m || /transform$/.test(m.propertyName)) && (a.removeEventListener("transitionend", d), a[Os] = null, ot(a, i));
        };
        a.addEventListener("transitionend", d);
      });
    }), () => {
      const i = Y(e), l = pc(i);
      let c = i.tag || me;
      r = o, o = t.default ? Ps(t.default()) : [];
      for (let a = 0; a < o.length; a++) {
        const h = o[a];
        h.key != null ? Lt(
          h,
          rn(h, l, s, n)
        ) : process.env.NODE_ENV !== "production" && Ne("<TransitionGroup> children must be keyed.");
      }
      if (r)
        for (let a = 0; a < r.length; a++) {
          const h = r[a];
          Lt(
            h,
            rn(h, l, s, n)
          ), _c.set(h, h.el.getBoundingClientRect());
        }
      return ce(c, null, o);
    };
  }
}, kd = (e) => delete e.mode;
vc.props;
const Pd = vc;
function Ld(e) {
  const t = e.el;
  t[Os] && t[Os](), t[vi] && t[vi]();
}
function Fd(e) {
  yc.set(e, e.el.getBoundingClientRect());
}
function jd(e) {
  const t = _c.get(e), n = yc.get(e), s = t.left - n.left, r = t.top - n.top;
  if (s || r) {
    const o = e.el.style;
    return o.transform = o.webkitTransform = `translate(${s}px,${r}px)`, o.transitionDuration = "0s", e;
  }
}
function Hd(e, t, n) {
  const s = e.cloneNode(), r = e[on];
  r && r.forEach((l) => {
    l.split(/\s+/).forEach((c) => c && s.classList.remove(c));
  }), n.split(/\s+/).forEach((l) => l && s.classList.add(l)), s.style.display = "none";
  const o = t.nodeType === 1 ? t : t.parentNode;
  o.appendChild(s);
  const { hasTransform: i } = hc(s);
  return o.removeChild(s), i;
}
const bt = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return F(t) ? (n) => ut(t, n) : t;
};
function Bd(e) {
  e.target.composing = !0;
}
function Ni(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Me = Symbol("_assign"), $s = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, r) {
    e[Me] = bt(r);
    const o = s || r.props && r.props.type === "number";
    Ze(e, t ? "change" : "input", (i) => {
      if (i.target.composing)
        return;
      let l = e.value;
      n && (l = l.trim()), o && (l = kn(l)), e[Me](l);
    }), n && Ze(e, "change", () => {
      e.value = e.value.trim();
    }), t || (Ze(e, "compositionstart", Bd), Ze(e, "compositionend", Ni), Ze(e, "change", Ni));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, modifiers: { lazy: n, trim: s, number: r } }, o) {
    if (e[Me] = bt(o), e.composing)
      return;
    const i = r || e.type === "number" ? kn(e.value) : e.value, l = t ?? "";
    i !== l && (document.activeElement === e && e.type !== "range" && (n || s && e.value.trim() === l) || (e.value = l));
  }
}, Oo = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e[Me] = bt(n), Ze(e, "change", () => {
      const s = e._modelValue, r = ln(e), o = e.checked, i = e[Me];
      if (F(s)) {
        const l = Ds(s, r), c = l !== -1;
        if (o && !c)
          i(s.concat(r));
        else if (!o && c) {
          const a = [...s];
          a.splice(l, 1), i(a);
        }
      } else if (Ht(s)) {
        const l = new Set(s);
        o ? l.add(r) : l.delete(r), i(l);
      } else
        i(bc(e, o));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: bi,
  beforeUpdate(e, t, n) {
    e[Me] = bt(n), bi(e, t, n);
  }
};
function bi(e, { value: t, oldValue: n }, s) {
  e._modelValue = t, F(t) ? e.checked = Ds(t, s.props.value) > -1 : Ht(t) ? e.checked = t.has(s.props.value) : t !== n && (e.checked = vt(t, bc(e, !0)));
}
const $o = {
  created(e, { value: t }, n) {
    e.checked = vt(t, n.props.value), e[Me] = bt(n), Ze(e, "change", () => {
      e[Me](ln(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: n }, s) {
    e[Me] = bt(s), t !== n && (e.checked = vt(t, s.props.value));
  }
}, Nc = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    const r = Ht(t);
    Ze(e, "change", () => {
      const o = Array.prototype.filter.call(e.options, (i) => i.selected).map(
        (i) => n ? kn(ln(i)) : ln(i)
      );
      e[Me](
        e.multiple ? r ? new Set(o) : o : o[0]
      ), e._assigning = !0, Ms(() => {
        e._assigning = !1;
      });
    }), e[Me] = bt(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t, oldValue: n, modifiers: { number: s } }) {
    Oi(e, t, n, s);
  },
  beforeUpdate(e, t, n) {
    e[Me] = bt(n);
  },
  updated(e, { value: t, oldValue: n, modifiers: { number: s } }) {
    e._assigning || Oi(e, t, n, s);
  }
};
function Oi(e, t, n, s) {
  const r = e.multiple, o = F(t);
  if (r && !o && !Ht(t)) {
    process.env.NODE_ENV !== "production" && Ne(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`
    );
    return;
  }
  for (let i = 0, l = e.options.length; i < l; i++) {
    const c = e.options[i], a = ln(c);
    if (r)
      if (o) {
        const h = typeof a;
        h === "string" || h === "number" ? c.selected = t.includes(
          s ? kn(a) : a
        ) : c.selected = Ds(t, a) > -1;
      } else
        c.selected = t.has(a);
    else if (vt(ln(c), t)) {
      e.selectedIndex !== i && (e.selectedIndex = i);
      return;
    }
  }
  !r && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function ln(e) {
  return "_value" in e ? e._value : e.value;
}
function bc(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const Oc = {
  created(e, t, n) {
    cs(e, t, n, null, "created");
  },
  mounted(e, t, n) {
    cs(e, t, n, null, "mounted");
  },
  beforeUpdate(e, t, n, s) {
    cs(e, t, n, s, "beforeUpdate");
  },
  updated(e, t, n, s) {
    cs(e, t, n, s, "updated");
  }
};
function $c(e, t) {
  switch (e) {
    case "SELECT":
      return Nc;
    case "TEXTAREA":
      return $s;
    default:
      switch (t) {
        case "checkbox":
          return Oo;
        case "radio":
          return $o;
        default:
          return $s;
      }
  }
}
function cs(e, t, n, s, r) {
  const i = $c(
    e.tagName,
    n.props && n.props.type
  )[r];
  i && i(e, t, n, s);
}
function Ud() {
  $s.getSSRProps = ({ value: e }) => ({ value: e }), $o.getSSRProps = ({ value: e }, t) => {
    if (t.props && vt(t.props.value, e))
      return { checked: !0 };
  }, Oo.getSSRProps = ({ value: e }, t) => {
    if (F(e)) {
      if (t.props && Ds(e, t.props.value) > -1)
        return { checked: !0 };
    } else if (Ht(e)) {
      if (t.props && e.has(t.props.value))
        return { checked: !0 };
    } else if (e)
      return { checked: !0 };
  }, Oc.getSSRProps = (e, t) => {
    if (typeof t.type != "string")
      return;
    const n = $c(
      // resolveDynamicModel expects an uppercase tag name, but vnode.type is lowercase
      t.type.toUpperCase(),
      t.props && t.props.type
    );
    if (n.getSSRProps)
      return n.getSSRProps(e, t);
  };
}
const Kd = ["ctrl", "shift", "alt", "meta"], Gd = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => Kd.some((n) => e[`${n}Key`] && !t.includes(n))
}, Wd = (e, t) => {
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = (r, ...o) => {
    for (let i = 0; i < t.length; i++) {
      const l = Gd[t[i]];
      if (l && l(r, t))
        return;
    }
    return e(r, ...o);
  });
}, zd = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, qd = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), s = t.join(".");
  return n[s] || (n[s] = (r) => {
    if (!("key" in r))
      return;
    const o = ye(r.key);
    if (t.some((i) => i === o || zd[i] === o))
      return e(r);
  });
}, Cc = /* @__PURE__ */ ne({ patchProp: Sd }, fd);
let Rn, $i = !1;
function wc() {
  return Rn || (Rn = Gl(Cc));
}
function Dc() {
  return Rn = $i ? Rn : Wl(Cc), $i = !0, Rn;
}
const Ir = (...e) => {
  wc().render(...e);
}, Vc = (...e) => {
  Dc().hydrate(...e);
}, Yd = (...e) => {
  const t = wc().createApp(...e);
  process.env.NODE_ENV !== "production" && (Tc(t), Sc(t));
  const { mount: n } = t;
  return t.mount = (s) => {
    const r = Ac(s);
    if (!r)
      return;
    const o = t._component;
    !K(o) && !o.render && !o.template && (o.template = r.innerHTML), r.innerHTML = "";
    const i = n(r, !1, xc(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), i;
  }, t;
}, Jd = (...e) => {
  const t = Dc().createApp(...e);
  process.env.NODE_ENV !== "production" && (Tc(t), Sc(t));
  const { mount: n } = t;
  return t.mount = (s) => {
    const r = Ac(s);
    if (r)
      return n(r, !0, xc(r));
  }, t;
};
function xc(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Tc(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => sa(t) || ra(t) || oa(t),
    writable: !1
  });
}
function Sc(e) {
  if (yo()) {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        Ne(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, s = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return Ne(s), n;
      },
      set() {
        Ne(s);
      }
    });
  }
}
function Ac(e) {
  if (se(e)) {
    const t = document.querySelector(e);
    return process.env.NODE_ENV !== "production" && !t && Ne(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && Ne(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
let Ci = !1;
const Zd = () => {
  Ci || (Ci = !0, Ud(), gd());
};
/**
* vue v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Xd() {
  uc();
}
process.env.NODE_ENV !== "production" && Xd();
const Qd = () => {
  process.env.NODE_ENV !== "production" && Ne(
    'Runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  );
}, dp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BaseTransition: Nl,
  BaseTransitionPropsValidators: ao,
  Comment: pe,
  DeprecationTypes: cd,
  EffectScope: Br,
  ErrorCodes: Qa,
  ErrorTypeStrings: td,
  Fragment: me,
  KeepAlive: ju,
  ReactiveEffect: sn,
  Static: Et,
  Suspense: Vu,
  Teleport: Ff,
  Text: Nt,
  TrackOpTypes: za,
  Transition: No,
  TransitionGroup: Pd,
  TriggerOpTypes: qa,
  VueElement: Ws,
  assertNumber: Xr,
  callWithAsyncErrorHandling: Te,
  callWithErrorHandling: Ue,
  camelize: $e,
  capitalize: yt,
  cloneVNode: Re,
  compatUtils: ld,
  compile: Qd,
  computed: zt,
  createApp: Yd,
  createBlock: mo,
  createCommentVNode: Kf,
  createElementBlock: jf,
  createElementVNode: go,
  createHydrationRenderer: Wl,
  createPropsRestProxy: of,
  createRenderer: Gl,
  createSSRApp: Jd,
  createSlots: Uu,
  createStaticVNode: Uf,
  createTextVNode: Eo,
  createVNode: ce,
  customRef: tl,
  defineAsyncComponent: Lu,
  defineComponent: uo,
  defineCustomElement: Ec,
  defineEmits: Zu,
  defineExpose: Xu,
  defineModel: tf,
  defineOptions: Qu,
  defineProps: Ju,
  defineSSRCustomElement: Md,
  defineSlots: ef,
  devtools: nd,
  effect: ma,
  effectScope: da,
  getCurrentInstance: tt,
  getCurrentScope: Pi,
  getTransitionRawChildren: Ps,
  guardReactiveProps: tc,
  h: vo,
  handleError: Ct,
  hasInjectionContext: gf,
  hydrate: Vc,
  initCustomFormatter: uc,
  initDirectivesForSSR: Zd,
  inject: Tn,
  isMemoSame: fc,
  isProxy: Pn,
  isReactive: pt,
  isReadonly: Xe,
  isRef: he,
  isRuntimeOnly: yo,
  isShallow: ht,
  isVNode: Qe,
  markRaw: zr,
  mergeDefaults: sf,
  mergeModels: rf,
  mergeProps: sc,
  nextTick: Ms,
  normalizeClass: fn,
  normalizeProps: Qc,
  normalizeStyle: un,
  onActivated: Ol,
  onBeforeMount: wl,
  onBeforeUnmount: js,
  onBeforeUpdate: Dl,
  onDeactivated: $l,
  onErrorCaptured: Sl,
  onMounted: Jn,
  onRenderTracked: Tl,
  onRenderTriggered: xl,
  onScopeDispose: pa,
  onServerPrefetch: Vl,
  onUnmounted: Hs,
  onUpdated: Fs,
  openBlock: Bs,
  popScopeId: _u,
  provide: Ll,
  proxyRefs: Zr,
  pushScopeId: Eu,
  queuePostFlushCb: jn,
  reactive: Ts,
  readonly: Wr,
  ref: mt,
  registerRuntimeCompiler: Yf,
  render: Ir,
  renderList: Bu,
  renderSlot: Ku,
  resolveComponent: $u,
  resolveDirective: wu,
  resolveDynamicComponent: Cu,
  resolveFilter: id,
  resolveTransitionHooks: rn,
  setBlockTracking: $r,
  setDevtoolsHook: sd,
  setTransitionHooks: Lt,
  shallowReactive: Xi,
  shallowReadonly: xt,
  shallowRef: La,
  ssrContextKey: ml,
  ssrUtils: od,
  stop: ga,
  toDisplayString: fa,
  toHandlerKey: Je,
  toHandlers: Gu,
  toRaw: Y,
  toRef: Wa,
  toRefs: nl,
  toValue: Ha,
  transformVNodeArgs: Hf,
  triggerRef: ja,
  unref: Jr,
  useAttrs: Rl,
  useCssModule: Id,
  useCssVars: Ed,
  useModel: Qf,
  useSSRContext: gl,
  useSlots: Ml,
  useTransitionState: co,
  vModelCheckbox: Oo,
  vModelDynamic: Oc,
  vModelRadio: $o,
  vModelSelect: Nc,
  vModelText: $s,
  vShow: bo,
  version: Sr,
  warn: Ne,
  watch: Vn,
  watchEffect: Ru,
  watchPostEffect: El,
  watchSyncEffect: _l,
  withAsyncContext: lf,
  withCtx: so,
  withDefaults: nf,
  withDirectives: ku,
  withKeys: qd,
  withMemo: ed,
  withModifiers: Wd,
  withScopeId: yu
}, Symbol.toStringTag, { value: "Module" }));
function wi(e) {
  return he(e) ? e.value : e;
}
function ep(e) {
  return e && "class" in e && typeof e.class == "string" ? e.class : void 0;
}
function tp(e, t, n) {
  const s = ep(t);
  return n && s ? `${n}.${s}` : n || s || e;
}
function np(e, t, n, s) {
  const r = tp(e, t, s);
  return vo(e, { key: r, ...t }, n);
}
function sp(e) {
  return e.toString().trim().replace(/[^\w- ]+/g, "").replace(/ +/g, "-").replace(new RegExp("(?<=[A-Z])([A-Z])", "g"), (t) => `${t.toLowerCase()}`).replace(/-+([a-zA-Z0-9])/g, (...t) => `${t[1].toUpperCase()}`).replace(/^([A-Z])/, (t) => `${t.toLowerCase()}`);
}
function vn(e) {
  if (e instanceof Date)
    return e;
  if (Vi(e))
    return /* @__PURE__ */ new Date();
  if (typeof e == "number")
    return new Date(e);
  let t = e, n = "";
  e.replace(/^([\s\S]+)([-+]\d{2}:?\d{2})$/, (r, o, i) => (t = o, n = i, r));
  const s = (/^\d{4}\d{2}\d{2}$/.exec(t) && `${t.replace(/^(\d{4})(\d{2})(\d{2})$/, "$1-$2-$3")}T00:00:00`) ?? (/^\d{4}\d{2}$/.exec(t) && `${t.replace(/^(\d{4})(\d{2})$/, "$1-$2")}-01T00:00:00`) ?? (/^\d{4}-\d{2}-\d{2}$/.exec(t) && `${t}T00:00:00`) ?? (/^\d{4}-\d{2}$/.exec(t) && `${t}-01T00:00:00`) ?? (/^\d{4}$/.exec(t) && `${t}-01-01T00:00:00`) ?? (/^\d{2}:\d{2}$/.exec(t) && `2000-01-01T${t}:00`) ?? (/^\d{2}:\d{2}:\d{2}$/.exec(t) && `2000-01-01T${t}`) ?? t.replace(" ", "T");
  return /* @__PURE__ */ new Date(`${s}${n}`);
}
function cr(e) {
  if (typeof e == "number")
    return e;
  let t = e.replace(/[^\d., ]+/ig, "");
  return t.match(/( [0-9]{3}[ ,.]|[0-9] [0-9])/ig) ? t = t.replace(/ /ig, "").replace(/,/ig, ".") : t.match(/,[0-9]{3}[,.]/ig) ? t = t.replace(/,/ig, "") : t.match(/[.][0-9]{3}[,.]/ig) ? t = t.replace(/[.]/ig, "").replace(/,/ig, ".") : t = t.replace(/,/ig, "."), parseFloat(t);
}
class pp {
  /**
   * Constructor
   * @param callback function for the cache /<br>функция для кэша
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t) {
    le(this, "cache");
    le(this, "comparisons", []);
    this.callback = t;
  }
  /**
   * Getting data for the cache, and if there is no cache, it performs a function to save the cache.<br>
   * Получение данных для кэша, и если нет кэша, выполняет функцию для сохранения кэша.
   * @param comparison additional data for comparison /<br>дополнительные данные для сравнения
   */
  getCache(t) {
    return this.isUpdate(t) && this.setCache(), this.cache;
  }
  /**
   * Getting data for the cache, and if there is no cache, it performs a function to save the cache (Async).<br>
   * Получение данных для кэша, и если нет кэша, выполняет функцию для сохранения кэша (Async).
   * @param comparison additional data for comparison /<br>дополнительные данные для сравнения
   */
  async getCacheAsync(t) {
    return this.isUpdate(t) && await this.setCacheAsync(), this.cache;
  }
  /**
   * Overwrites or adds new values for the cache.<br>
   * Перезаписывает или добавляет новые значения для кэша.
   */
  setCache() {
    this.cache = this.callback();
  }
  /**
   * Overwrites or adds new values for the cache (Async).<br>
   * Перезаписывает или добавляет новые значения для кэша (Async).
   */
  async setCacheAsync() {
    this.cache = await this.callback();
  }
  /**
   * Checking additional data.<br>
   * Проверка дополнительных данных.
   * @param comparison additional data for comparison /<br>дополнительные данные для сравнения
   */
  isUpdate(t) {
    return this.cache === void 0 || this.comparisons.length !== t.length || this.comparisons.findIndex((n, s) => n !== t[s]) >= 0 ? (this.comparisons = [...t], !0) : !1;
  }
}
class rp {
  /**
   * Constructor
   * @param code country code, full form language-country or one of them /<br>
   * код страны, полный вид язык-страна или один из них
   */
  constructor(t = fs.getLocation()) {
    le(this, "geo");
    this.geo = fs.find(t);
    const n = this.getLocation();
    if (n in ar)
      return ar[n];
    ar[n] = this;
  }
  /**
   * Returns country code and language.<br>
   * Возвращает код страны и языка.
   */
  getLocation() {
    return this.geo.standard;
  }
  /**
   * Returns the first day of the week.<br>
   * Возвращает первый день недели.
   */
  getFirstDay() {
    return this.geo.firstDay;
  }
  /**
   * The consistent translation of language, region and script display names.<br>
   * Последовательный перевод отображаемых названий языка, региона и скрипта.
   * @param value the code to provide depends on the type /<br>предоставляемый код зависит от типа
   * @param typeOptions an object with some or all of the following properties /<br>
   * объект с некоторыми или всеми из следующих свойств
   */
  display(t, n) {
    let s = { type: "language" }, r;
    n && (typeof n == "string" ? s.type = n : s = {
      ...s,
      ...n
    });
    try {
      t ? r = new Intl.DisplayNames(this.getLocation(), s).of(t) : s.type === "language" ? r = new Intl.DisplayNames(this.getLocation(), s).of(this.geo.language) : s.type === "region" && (r = new Intl.DisplayNames(this.getLocation(), s).of(this.geo.country));
    } catch {
    }
    return r ?? t ?? "";
  }
  /**
   * Get display names of language.<br>
   * Получить отображаемые имена языка.
   * @param value the code to provide depends on the type /<br>предоставляемый код зависит от типа
   * @param style the formatting style to use /<br>используемый стиль форматирования
   */
  languageName(t, n) {
    const s = {
      type: "language",
      style: n
    };
    return this.display(t, s);
  }
  /**
   * Get display names of region.<br>
   * Получить отображаемые имена региона.
   * @param value the code to provide depends on the type /<br>предоставляемый код зависит от типа
   * @param style the formatting style to use /<br>используемый стиль форматирования
   */
  countryName(t, n) {
    const s = {
      type: "region",
      style: n
    };
    return this.display(t, s);
  }
  /**
   * In basic use without specifying a locale, a formatted string.<br>
   * При обычном использовании без указания локали форматированная строка<br>
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param options an object with some or all properties /<br>объект с некоторыми
   * или всеми свойствами
   */
  number(t, n) {
    var s, r;
    return ((r = (s = this.numberObject(n)) == null ? void 0 : s.format) == null ? void 0 : r.call(s, cr(t))) || t.toString();
  }
  /**
   * Decimal point symbol.<br>
   * Символ десятичной точки.
   */
  decimal() {
    var t, n, s, r, o;
    return ((o = (r = (s = (n = (t = this.numberObject()) == null ? void 0 : t.formatToParts) == null ? void 0 : n.call(t, 1.2)) == null ? void 0 : s.find) == null ? void 0 : r.call(s, (i) => i.type === "decimal")) == null ? void 0 : o.value) || ".";
  }
  /**
   * Currency formatting.<br>
   * Форматирование валюты.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param currencyOptions the currency to use in currency formatting /<br>
   * валюта для использования в форматировании валюты
   * @param numberOnly do not display the currency symbol /<br>не выводить значок валюты
   */
  currency(t, n, s = !1) {
    const r = {
      style: "currency",
      currencyDisplay: "symbol",
      ...typeof n == "string" ? { currency: n } : n || {}
    }, o = t.toString().replace(/^([\S\s]+[\d ])([a-zA-Z]{3})$/i, (...i) => (r.currency = i[2].toUpperCase(), i[1]));
    if (s) {
      const i = this.numberObject(r);
      return i ? i.formatToParts(cr(t)).filter((l) => ["literal", "currency"].indexOf(l.type) === -1).join("") : t.toString();
    } else
      return this.number(o, r);
  }
  /**
   * Unit formatting.
   * If the style is 'unit', a unit property must be provided.<br>
   * Форматирование юнитов.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param unitOptions the unit to use in unit formatting /<br>блок для использования
   * в форматировании блока
   */
  unit(t, n) {
    const s = {
      style: "unit",
      ...typeof n == "string" ? { unit: n } : n || {}
    }, r = t.toString().replace(/^([\S\s]+[\d ])([a-zA-Z]+)$/i, (...o) => (s.unit = o[2].toLowerCase(), o[1]));
    return this.number(r, s);
  }
  /**
   * Number as a percentage.<br>
   * Число в виде процента.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param options an object with some or all properties /<br>объект с некоторыми или всеми свойствами
   */
  percent(t, n) {
    return this.number(t, {
      style: "percent",
      ...n || {}
    });
  }
  /**
   * Number as a percentage (unit).<br>
   * Число в виде процента (единица).
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param options an object with some or all properties /<br>
   * объект с некоторыми или всеми свойствами
   */
  percentBy100(t, n) {
    return this.percent(cr(t) / 100, n);
  }
  /**
   * Enables language-sensitive date and time formatting.<br>
   * Конструктором объектов, включающих языка-зависимое форматирование даты и времени.
   * @param value the date to format /<br>дата для форматирования
   * @param type type of data format /<br>тип формата data
   * @param styleOptions the representation of the month /<br>представление месяца
   * @param hour24 whether to use 12-hour time /<br>использовать ли 12-часовое время
   */
  date(t, n, s, r) {
    const o = vn(t), i = typeof s == "string", l = this.dateOptions(n, i ? s : "short");
    return r && (l.hour12 = !1), i || Object.assign(l, s), o.toLocaleString(this.getLocation(), l);
  }
  /**
   * Enables language-sensitive relative time formatting.<br>
   * Включает форматирование относительного времени с учетом языка.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param styleOptions the length of the internationalized message /<br>
   * длина интернационализированного сообщения
   * @param todayValue current day /<br>текущий день
   */
  relative(t, n, s) {
    const r = vn(t), o = s || /* @__PURE__ */ new Date(), i = {
      numeric: "auto",
      ...typeof n == "string" ? { style: n } : n || {}
    };
    let l = "second", c = (r.getTime() - o.getTime()) / 1e3;
    Math.abs(c) >= 60 && (l = "minute", c /= 60, Math.abs(c) >= 60 && (l = "hour", c /= 60, Math.abs(c) >= 24 && (l = "day", c /= 24, Math.abs(c) >= 30 && (l = "month", c /= 30, Math.abs(c) >= 12 && (l = "year", c /= 12)))));
    try {
      return new Intl.RelativeTimeFormat(this.getLocation(), i).format(Math.round(c), l);
    } catch {
    }
    return "";
  }
  /**
   * Enables language-sensitive relative time formatting
   * Including the ability to add a limit to output the standard time format if the value
   * exceeds the allowable limit.<br>
   * Включает форматирование относительного времени с учетом языка.
   * Включая возможность добавления лимита, чтобы выводить уже стандартный формат времени,
   * если значение вышло за пределы допустимого.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param limit values that determine the output limit (values per day) /<br>
   * значения, по которым определяем предел вывода (значения в день)
   * @param todayValue current day /<br>текущий день
   * @param relativeOptions the length of the internationalized message /<br>
   * длина интернационализированного сообщения
   * @param dateOptions the representation of the month /<br>представление месяца
   * @param type type of data format /<br>тип формата data
   * @param hour24 whether to use 12-hour time /<br>использовать ли 12-часовое время
   */
  relativeLimit(t, n, s, r, o, i, l) {
    const c = vn(t), a = s || /* @__PURE__ */ new Date(), h = new Date(a), d = new Date(a);
    return h.setDate(a.getDate() - n), d.setDate(a.getDate() + n), c >= h && c <= d ? this.relative(
      c,
      r,
      a
    ) : this.date(
      c,
      i,
      o,
      l
    );
  }
  /**
   * Names of months.<br>
   * Названия месяцев.
   * @param value the date to format /<br>дата для форматирования
   * @param style the representation of the month /<br>представление месяца
   */
  month(t, n) {
    try {
      return Intl.DateTimeFormat(this.getLocation(), { month: n || "long" }).format(vn(t));
    } catch {
    }
    return "";
  }
  /**
   * Array to list of months.<br>
   * Массив в список месяцев.
   * @param style the representation of the month /<br>представление месяца
   */
  months(t) {
    const n = [{
      label: "",
      value: void 0
    }];
    try {
      const s = /* @__PURE__ */ new Date(), r = Intl.DateTimeFormat(this.getLocation(), { month: t || "long" });
      for (let o = 0; o < 12; o++)
        s.setMonth(o), n.push({
          label: r.format(s).replace(/^./, (i) => i.toUpperCase()),
          value: o + 1
        });
    } catch {
    }
    return n;
  }
  /**
   * Returns names of days of the week.<br>
   * Возвращает названия дней недели.
   * @param value the date to format /<br>дата для форматирования
   * @param style the representation of the weekday /<br>представление о дне недели
   */
  weekday(t, n) {
    try {
      return Intl.DateTimeFormat(this.getLocation(), { weekday: n || "long" }).format(vn(t));
    } catch {
    }
    return "";
  }
  /**
   * An array of the list of names of the days of the week.<br>
   * Массив из списка названий дней недели.
   * @param style the representation of the weekday /<br>представление о дне недели
   */
  weekdays(t) {
    const n = [{
      label: "",
      value: void 0
    }];
    try {
      const s = /* @__PURE__ */ new Date(), r = Intl.DateTimeFormat(this.getLocation(), { weekday: t || "long" }), o = s.getDay() + (this.geo.firstDay === "Mo" ? -1 : 1);
      s.setDate(s.getDate() - o);
      for (let i = 0; i < 7; i++)
        n.push({
          label: r.format(s).replace(/^./, (l) => l.toUpperCase()),
          value: s.getDay()
        }), s.setDate(s.getDate() + 1);
    } catch {
    }
    return n;
  }
  /**
   * Time.<br>
   * Время.
   * @param value the date to format /<br>дата для форматирования
   */
  time(t) {
    return this.date(t, "time");
  }
  /**
   * Sorts strings taking into account the characteristics of countries.<br>
   * Сортирует строки с учетом особенностей стран.
   * @param data an array with data /<br>массив с данными
   * @param compareFn a function for sorting /<br>функция для сортировки
   */
  sort(t, n = (s, r) => [s, r]) {
    const s = new Intl.Collator(this.getLocation());
    return t.sort((r, o) => s.compare(...n(r, o)));
  }
  /**
   * The object enables language-sensitive number formatting.<br>
   * Объект включает форматирование чисел с учетом языка.
   * @param options an object with some or all properties /<br>
   * объект с некоторыми или всеми свойствами
   */
  numberObject(t) {
    try {
      return new Intl.NumberFormat(this.getLocation(), t);
    } catch {
    }
  }
  /**
   * Returns options for data according to its type.<br>
   * Возвращает options для data по его типу.
   * @param type type of data format /<br>тип формата data
   * @param display the representation of the month /<br>представление месяца
   */
  dateOptions(t, n = "short") {
    const s = {};
    return ["full", "datetime", "date", void 0, "year-month", "year"].indexOf(t) !== -1 && (s.year = "numeric"), ["full", "datetime", "date", void 0, "year-month", "month"].indexOf(t) !== -1 && (s.month = n), ["full", "datetime", "date", void 0, "day"].indexOf(t) !== -1 && (s.day = "2-digit"), t !== void 0 && (["full", "datetime", "time", "hour-minute", "hour"].indexOf(t) !== -1 && (s.hour = "2-digit"), ["full", "datetime", "time", "hour-minute", "minute"].indexOf(t) !== -1 && (s.minute = "2-digit"), ["full", "time", "second"].indexOf(t) !== -1 && (s.second = "2-digit")), s;
  }
}
const ar = {};
class hp {
  /**
   * Classes Constructor
   * @param elementSelector element /<br>элемент
   * @param type type /<br>тип
   * @param listener the object that receives a notification (an object that implements the
   * Event interface) when an event of the specified type occurs /<br>объект, который принимает
   * уведомление, когда событие указанного типа произошло
   * @param options object that specifies characteristics /<br>объект options
   * @param detail an event-dependent value associated with the event /<br>зависимое от события
   * значение, связанное с событием
   */
  constructor(t, n = ["click"], s, r, o) {
    /**
     * Element.<br>
     * Элемент.
     * @protected
     */
    le(this, "element");
    /**
     * Element for checking. If the element is missing in the DOM, the event is turned off.<br>
     * Элемент для проверки. Если элемент отсутствует в DOM, событие выключается.
     * @protected
     */
    le(this, "elementControl");
    le(this, "elementControlEdit");
    /**
     * A case-sensitive string representing the event type to listen for.<br>
     * Чувствительная к регистру строка, представляющая тип обрабатываемого события.
     * @protected
     */
    le(this, "type");
    /**
     * The object that receives a notification (an object that implements the Event interface)
     * when an event of the specified type occurs. This must be null, an object with a
     * handleEvent() method, or a JavaScript function.<br>
     * Объект, который принимает уведомление, когда событие указанного типа произошло.
     * Это должен быть объект, реализующий интерфейс EventListener или просто функция JavaScript.
     * @protected
     */
    le(this, "listenerRecent", (t) => {
      var n, s;
      jc(this.elementControl) ? ((n = this.listener) == null || n.call(this.element, t, this.detail), kr(this.options) && ((s = this.options) != null && s.once) && this.stop()) : this.stop();
    });
    /**
     * Event states.<br>
     * Состояния события.
     * @protected
     */
    le(this, "activity", !1);
    le(this, "activityItems", []);
    this.listener = s, this.options = r, this.detail = o, this.element = To(t), this.elementControl = Vt(t), this.type = $n(n);
  }
  /**
   * Checks whether event listening is currently enabled.<br>
   * Проверяет, включено ли сейчас прослушивание события.
   */
  isActive() {
    return this.activity;
  }
  /**
   * Change of an element for tracking.<br>
   * Изменение элемента для прослеживания.
   * @param elementSelector element /<br>элемент
   */
  setElement(t) {
    const n = To(t);
    return this.elementControlEdit || (this.elementControl = Vt(t)), this.element = n, this.reset(), this;
  }
  /**
   * Modifies the object that receives the notification.<br>
   * Модифицирует объект, который получает уведомление.
   * @param elementSelector element /<br>элемент
   */
  setElementControl(t) {
    return this.elementControl = Vt(t), this.elementControlEdit = !Vi(this.elementControl), this.elementControlEdit || (this.elementControl = Vt(this.element)), this;
  }
  /**
   * Changes the type of the handled event.<br>
   * Изменяет тип обрабатываемого события.
   * @param type type /<br>тип
   */
  setType(t) {
    return this.type = $n(t), this.reset(), this;
  }
  /**
   * Modifies the object that receives the notification.<br>
   * Модифицирует объект, который получает уведомление.
   * @param listener
   */
  setListener(t) {
    return this.listener = t, this;
  }
  /**
   * Modifying the options object that defines the characteristics of an object.<br>
   * Изменение объекта options, который определяет характеристики объекта.
   * @param options
   */
  setOptions(t) {
    return this.options = t, this.reset(), this;
  }
  /**
   * Modifying a dependent value for the dispatch method.<br>
   * Изменение зависимого значения для метода dispatch.
   * @param detail
   */
  setDetail(t) {
    return this.detail = t, this;
  }
  /**
   * The method of the EventTarget sends an Event to the object, (synchronously) invoking
   * the affected EventListeners in the appropriate order.<br>
   * Отправляет событие в общую систему событий. Это событие подчиняется тем же правилам
   * поведения "Захвата" и "Всплывания" как и непосредственно инициированные события.
   * @param detail an event-dependent value associated with the event /<br>зависимое от события
   * значение, связанное с событием
   */
  dispatch(t = this.detail) {
    return this.type.forEach(
      (n) => {
        var s;
        return (s = this.element) == null ? void 0 : s.dispatchEvent(new CustomEvent(n, { detail: t }));
      }
    ), this;
  }
  /**
   * Starting event listening.<br>
   * Запуск прослушивания события.
   */
  start() {
    return this.activity || (this.activity = !0, this.activityItems = [], this.type.forEach((t) => {
      this.element && !(t === "resize" && this.makeResize()) && !(t === "scroll-sync" && this.makeScroll()) && (this.element.addEventListener(t, this.listenerRecent, this.options), this.activityItems.push({
        element: this.element,
        type: t
      }));
    })), this;
  }
  /**
   * Stopping event listening.<br>
   * Остановка прослушивания события.
   */
  stop() {
    return this.activity && (this.activity = !1, this.activityItems.forEach(({
      element: t,
      type: n,
      listener: s,
      observer: r
    }) => {
      r ? r.disconnect() : s ? t == null || t.removeEventListener(n, s) : t == null || t.removeEventListener(n, this.listenerRecent);
    })), this;
  }
  /**
   * Toggling event handler state.<br>
   * Переключение состояния работы события.
   * @param activity event activation /<br>активация события
   */
  toggle(t) {
    return t ? this.start() : this.stop();
  }
  /**
   * Overloads the listening events.<br>
   * Перегружает события прослушивания.
   */
  reset() {
    return this.activity && (this.stop(), this.start()), this;
  }
  /**
   * Checks if the ResizeObserver object exists.<br>
   * Проверяет, существует ли объект ResizeObserver.
   */
  isObserver() {
    return "ResizeObserver" in window;
  }
  /**
   * The implementation of the resize event for an element.<br>
   * Реализация события изменения размера для элемента.
   * @protected
   */
  makeResize() {
    if (this.element && this.element instanceof HTMLElement && this.element !== document.body && this.isObserver()) {
      const t = new ResizeObserver(
        (n) => this.listenerRecent(n == null ? void 0 : n[0])
      );
      return t.observe(this.element), this.activityItems.push({
        element: this.element,
        type: "resize",
        observer: t
      }), !0;
    }
    return !1;
  }
  /**
   * Implementation of the scroll event for an element.<br>
   * Реализация события изменения положения скролла для элемента.
   * @protected
   */
  makeScroll() {
    if (this.element) {
      let t = !1;
      const n = (s) => {
        t || (t = !0, requestAnimationFrame(() => {
          this.listenerRecent(s), t = !1;
        }));
      };
      return this.element.addEventListener("scroll", n, this.options), this.element.addEventListener("resize", n, this.options), this.activityItems.push(
        {
          element: this.element,
          type: "scroll",
          listener: n
        },
        {
          element: this.element,
          type: "resize",
          listener: n
        }
      ), !0;
    }
    return !1;
  }
}
const f = "@flag", qt = class qt {
  /**
   * Constructor
   * @param code country and language code /<br>код страны и языка
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t = fs.getLocation()) {
    this.code = t;
  }
  /**
   * Returns information about the country and its flag.<br>
   * Возвращает информацию о стране и её флаге.
   * @param code country code /<br>код страны
   */
  get(t = this.code) {
    var s;
    const n = fs.find(t);
    if (n) {
      const r = this.getCountry(n);
      return {
        language: this.getLanguage(n),
        country: r,
        standard: n.standard,
        icon: (s = qt.flags) == null ? void 0 : s[n.country],
        label: r,
        value: n.country
      };
    }
  }
  /**
   * Getting a link to the flag.<br>
   * Получение ссылки на флаг.
   * @param code country code /<br>код страны
   */
  getFlag(t = this.code) {
    var n;
    return (n = this.get(t)) == null ? void 0 : n.icon;
  }
  /**
   * Getting a list of countries by an array of codes.<br>
   * Получение списка стран по массиву с кодами.
   * @param codes country code /<br>код страны
   */
  getList(t) {
    return In(this.getCodes(t), (n) => this.get(n));
  }
  /**
   * Getting a list of countries by an array of codes in national language.<br>
   * Получение списка стран по массиву с кодами на национальный язык.
   * @param codes country code /<br>код страны.
   */
  getNational(t) {
    return In(this.getList(t), (n) => {
      const s = new qt(n.language).get(n.standard);
      return {
        ...n,
        nationalLanguage: s == null ? void 0 : s.language,
        nationalCountry: s == null ? void 0 : s.country
      };
    });
  }
  /**
   * To change the location.<br>
   * Изменить местоположение.
   * @param code country and language code /<br>код страны и языка
   */
  setCode(t) {
    return this.code = t, this;
  }
  /**
   * Returns a special object for formatting.<br>
   * Возвращает специальный объект для работы с форматированием.
   */
  getLocation() {
    return new rp(this.code);
  }
  /**
   * Returns a list of countries to retrieve data from.<br>
   * Возвращает список стран для получения данных.
   * @param codes country code /<br>код страны
   */
  getCodes(t) {
    return t ?? Object.keys(qt.flags);
  }
  /**
   * Getting the name of the language.<br>
   * Получение названия языка.
   * @param data object with information of data /<br>объект с информацией данных
   */
  getLanguage(t) {
    return this.getLocation().languageName(t.language);
  }
  /**
   * Getting the name of the country.<br>
   * Получение названия страны.
   * @param data object with information of data /<br>объект с информацией данных
   */
  getCountry(t) {
    return this.getLocation().countryName(t.country);
  }
};
le(qt, "flags", {
  AD: `${f}-ad`,
  AE: `${f}-ae`,
  AF: `${f}-af`,
  AG: `${f}-ag`,
  AI: `${f}-ai`,
  AL: `${f}-al`,
  AM: `${f}-am`,
  AN: `${f}-an`,
  AO: `${f}-ao`,
  AQ: `${f}-aq`,
  AR: `${f}-ar`,
  AS: `${f}-as`,
  AT: `${f}-at`,
  AU: `${f}-au`,
  AW: `${f}-aw`,
  AX: `${f}-ax`,
  AZ: `${f}-az`,
  BA: `${f}-ba`,
  BB: `${f}-bb`,
  BD: `${f}-bd`,
  BE: `${f}-be`,
  BF: `${f}-bf`,
  BG: `${f}-bg`,
  BH: `${f}-bh`,
  BI: `${f}-bi`,
  BJ: `${f}-bj`,
  BL: `${f}-bl`,
  BM: `${f}-bm`,
  BN: `${f}-bn`,
  BO: `${f}-bo`,
  BQ: `${f}-bq`,
  BR: `${f}-br`,
  BS: `${f}-bs`,
  BT: `${f}-bt`,
  BV: `${f}-bv`,
  BW: `${f}-bw`,
  BY: `${f}-by`,
  BZ: `${f}-bz`,
  CA: `${f}-ca`,
  CC: `${f}-cc`,
  CD: `${f}-cd`,
  CF: `${f}-cf`,
  CG: `${f}-cg`,
  CH: `${f}-ch`,
  CI: `${f}-ci`,
  CK: `${f}-ck`,
  CL: `${f}-cl`,
  CM: `${f}-cm`,
  CN: `${f}-cn`,
  CO: `${f}-co`,
  CR: `${f}-cr`,
  CU: `${f}-cu`,
  CV: `${f}-cv`,
  CW: `${f}-cw`,
  CX: `${f}-cx`,
  CY: `${f}-cy`,
  CZ: `${f}-cz`,
  DE: `${f}-de`,
  DJ: `${f}-dj`,
  DK: `${f}-dk`,
  DM: `${f}-dm`,
  DO: `${f}-do`,
  DZ: `${f}-dz`,
  EC: `${f}-ec`,
  EE: `${f}-ee`,
  EG: `${f}-eg`,
  EH: `${f}-eh`,
  ER: `${f}-er`,
  ES: `${f}-es`,
  ET: `${f}-et`,
  FI: `${f}-fi`,
  FJ: `${f}-fj`,
  FK: `${f}-fk`,
  FM: `${f}-fm`,
  FO: `${f}-fo`,
  FR: `${f}-fr`,
  GA: `${f}-ga`,
  GB: `${f}-gb`,
  GD: `${f}-gd`,
  GE: `${f}-ge`,
  GF: `${f}-gf`,
  GG: `${f}-gg`,
  GH: `${f}-gh`,
  GI: `${f}-gi`,
  GL: `${f}-gl`,
  GM: `${f}-gm`,
  GN: `${f}-gn`,
  GP: `${f}-gp`,
  GQ: `${f}-gq`,
  GR: `${f}-gr`,
  GT: `${f}-gt`,
  GU: `${f}-gu`,
  GW: `${f}-gw`,
  GY: `${f}-gy`,
  HK: `${f}-hk`,
  HM: `${f}-hm`,
  HN: `${f}-hn`,
  HR: `${f}-hr`,
  HT: `${f}-ht`,
  HU: `${f}-hu`,
  ID: `${f}-id`,
  IE: `${f}-ie`,
  IL: `${f}-il`,
  IM: `${f}-im`,
  IN: `${f}-in`,
  IO: `${f}-io`,
  IQ: `${f}-iq`,
  IR: `${f}-ir`,
  IS: `${f}-is`,
  IT: `${f}-it`,
  JE: `${f}-je`,
  JM: `${f}-jm`,
  JO: `${f}-jo`,
  JP: `${f}-jp`,
  KE: `${f}-ke`,
  KG: `${f}-kg`,
  KH: `${f}-kh`,
  KI: `${f}-ki`,
  KM: `${f}-km`,
  KN: `${f}-kn`,
  KP: `${f}-kp`,
  KR: `${f}-kr`,
  KW: `${f}-kw`,
  KY: `${f}-ky`,
  KZ: `${f}-kz`,
  LA: `${f}-la`,
  LB: `${f}-lb`,
  LC: `${f}-lc`,
  LI: `${f}-li`,
  LK: `${f}-lk`,
  LR: `${f}-lr`,
  LS: `${f}-ls`,
  LT: `${f}-lt`,
  LU: `${f}-lu`,
  LV: `${f}-lv`,
  LY: `${f}-ly`,
  MA: `${f}-ma`,
  MC: `${f}-mc`,
  MD: `${f}-md`,
  ME: `${f}-me`,
  MF: `${f}-mf`,
  MG: `${f}-mg`,
  MH: `${f}-mh`,
  MK: `${f}-mk`,
  ML: `${f}-ml`,
  MM: `${f}-mm`,
  MN: `${f}-mn`,
  MO: `${f}-mo`,
  MP: `${f}-mp`,
  MQ: `${f}-mq`,
  MR: `${f}-mr`,
  MS: `${f}-ms`,
  MT: `${f}-mt`,
  MU: `${f}-mu`,
  MV: `${f}-mv`,
  MW: `${f}-mw`,
  MX: `${f}-mx`,
  MY: `${f}-my`,
  MZ: `${f}-mz`,
  NA: `${f}-na`,
  NC: `${f}-nc`,
  NE: `${f}-ne`,
  NF: `${f}-nf`,
  NG: `${f}-ng`,
  NI: `${f}-ni`,
  NL: `${f}-nl`,
  NO: `${f}-no`,
  NP: `${f}-np`,
  NR: `${f}-nr`,
  NU: `${f}-nu`,
  NZ: `${f}-nz`,
  OM: `${f}-om`,
  PA: `${f}-pa`,
  PE: `${f}-pe`,
  PF: `${f}-pf`,
  PG: `${f}-pg`,
  PH: `${f}-ph`,
  PK: `${f}-pk`,
  PL: `${f}-pl`,
  PM: `${f}-pm`,
  PN: `${f}-pn`,
  PR: `${f}-pr`,
  PS: `${f}-ps`,
  PT: `${f}-pt`,
  PW: `${f}-pw`,
  PY: `${f}-py`,
  QA: `${f}-qa`,
  RE: `${f}-re`,
  RO: `${f}-ro`,
  RS: `${f}-rs`,
  RU: `${f}-ru`,
  RW: `${f}-rw`,
  SA: `${f}-sa`,
  SB: `${f}-sb`,
  SC: `${f}-sc`,
  SD: `${f}-sd`,
  SE: `${f}-se`,
  SG: `${f}-sg`,
  SH: `${f}-sh`,
  SI: `${f}-si`,
  SJ: `${f}-sj`,
  SK: `${f}-sk`,
  SL: `${f}-sl`,
  SM: `${f}-sm`,
  SN: `${f}-sn`,
  SO: `${f}-so`,
  SR: `${f}-sr`,
  SS: `${f}-ss`,
  ST: `${f}-st`,
  SV: `${f}-sv`,
  SX: `${f}-sx`,
  SY: `${f}-sy`,
  SZ: `${f}-sz`,
  TC: `${f}-tc`,
  TD: `${f}-td`,
  TG: `${f}-tg`,
  TH: `${f}-th`,
  TJ: `${f}-tj`,
  TK: `${f}-tk`,
  TL: `${f}-tl`,
  TM: `${f}-tm`,
  TN: `${f}-tn`,
  TO: `${f}-to`,
  TR: `${f}-tr`,
  TT: `${f}-tt`,
  TV: `${f}-tv`,
  TW: `${f}-tw`,
  TZ: `${f}-tz`,
  UA: `${f}-ua`,
  UG: `${f}-ug`,
  US: `${f}-us`,
  UY: `${f}-uy`,
  UZ: `${f}-uz`,
  VA: `${f}-va`,
  VC: `${f}-vc`,
  VE: `${f}-ve`,
  VG: `${f}-vg`,
  VI: `${f}-vi`,
  VN: `${f}-vn`,
  VU: `${f}-vu`,
  WF: `${f}-wf`,
  WS: `${f}-ws`,
  YE: `${f}-ye`,
  YT: `${f}-yt`,
  ZA: `${f}-za`,
  ZM: `${f}-zm`,
  ZW: `${f}-zw`
});
let Di = qt;
class op {
  /**
   * Constructor
   * @param props base data /<br>базовые данные
   * @param watch data for tracking /<br>данные для слежения
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, n = Object.keys(t)) {
    le(this, "cache", {});
    this.props = t, this.watch = n;
  }
  /**
   * Checks if the value has been updated.<br>
   * Проверяет, обновлено ли значение.
   * @param name property name /<br>название свойства
   */
  is(t) {
    return Fc(t) ? !!t.find((n) => this.isDifferent(n)) : this.isDifferent(t);
  }
  /**
   * Checks if there are changes in the data.<br>
   * Проверяет, есть ли изменения в данных.
   */
  isChanged() {
    const t = this.props;
    return !!this.watch.find((n) => n in t && this.isDifferent(n));
  }
  /**
   * Updates all values.<br>
   * Обновляет все значения.
   */
  update() {
    const t = this.props;
    this.watch.forEach((n) => {
      n in t && this.isDifferent(n) && (this.cache[n] = t[n]);
    });
  }
  /**
   * Checking additional data.<br>
   * Проверка дополнительных данных.
   * @param name property name /<br>название свойства
   */
  isDifferent(t) {
    var n, s;
    return ((n = this.cache) == null ? void 0 : n[t]) !== ((s = this.props) == null ? void 0 : s[t]);
  }
}
class ip {
  /**
   * Constructor
   * @param props base data /<br>базовые данные
   * @param callback callback function when the value changes /<br>
   * функция обратного вызова при изменении значения
   * @param changed base data /<br>данный для слежения
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, n, s) {
    le(this, "event", {});
    le(this, "changed");
    this.props = t, this.callback = n, this.changed = new op(t, s);
  }
  /**
   * Calls the callback function.<br>
   * Вызывает функцию обратного вызова.
   * @param compelled forces data to update /<br>вынуждает обновлять данные
   */
  make(t) {
    return this.makeCallback(t), this;
  }
  /**
   * Checks if there are values in the property.<br>
   * Проверяет, есть ли значения в свойстве.
   * @param name property names /<br>названия свойств
   */
  is(t) {
    return t in this.props;
  }
  /**
   * Checks if the value has been changed by the property name.<br>
   * Проверяет, было ли изменено значение по названию свойства.
   * @param name property names /<br>названия свойств
   * @param nameProp names of properties of the input variable /<br>названия свойств входной переменной
   */
  isChanged(t, n) {
    return !(t in this.event) || this.changed.is(n || t);
  }
  /**
   * Calls the callback function.<br>
   * Вызывает функцию обратного вызова.
   * @param compelled forces data to update /<br>вынуждает обновлять данные
   */
  makeCallback(t = !1) {
    (t || this.changed.isChanged()) && (this.initEvent(), this.makeCallbackItem(), this.changed.update());
  }
  /**
   * The function calls an image call.<br>
   * Функция вызывает образный вызов.
   */
  makeCallbackItem() {
    this.callback && this.callback(this.event);
  }
}
class mp extends ip {
  /**
   * Calls the callback function.<br>
   * Вызывает функцию обратного вызова.
   * @param compelled forces data to update /<br>вынуждает обновлять данные
   */
  make(t) {
    return this.makeCallback(t).then(), this;
  }
  /**
   * Calls the callback function.<br>
   * Вызывает функцию обратного вызова.
   * @param compelled forces data to update /<br>вынуждает обновлять данные
   */
  async makeCallback(t) {
    (t || this.changed.isChanged()) && (await this.initEvent(), this.makeCallbackItem(), this.changed.update());
  }
}
class lp {
  /**
   * Constructor
   * @param components list of connected components /<br>список подключенных компонентов
   * @param modification data for modification /<br>данные для модификации
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t = {}, n) {
    this.components = t, this.modification = n;
  }
  /**
   * Check the presence of the component.<br>
   * Проверить наличие компонента.
   * @param name name of the component /<br>названия компонента
   */
  is(t) {
    return t in this.components;
  }
  /**
   * Getting the object of the component.<br>
   * Получение объекта компонента.
   * @param name name of the component /<br>названия компонента
   */
  get(t) {
    var n;
    return (n = this.components) == null ? void 0 : n[t];
  }
  /**
   * Returns the modified input data of the connected components.<br>
   * Возвращает модифицированные входные данные у подключенных компонентов.
   * @param index the name of this /<br>название данного
   * @param props basic data /<br>базовые данные
   */
  getModification(t, n) {
    var s;
    if (t) {
      const r = wi((s = this.modification) == null ? void 0 : s[t]);
      if (r && xi(r)) {
        const o = {};
        return In(r, (i, l) => {
          o[l] = wi(i);
        }), n && Object.assign(o, n), o;
      }
    }
    return n;
  }
  /**
   * Rendering a component by its name and returning an array with one component.<br>
   * Рендеринг компонента по его имени и возвращение массива с одним компонентом.
   * @param name name of the component /<br>названия компонента
   * @param props property of the component /<br>свойство компонента
   * @param children sub-elements of the component /<br>под элементы компонента
   * @param index the name of the key /<br>названия ключа
   */
  render(t, n, s, r) {
    const o = this.renderOne(
      t,
      n,
      s,
      r
    );
    return o ? [o] : [];
  }
  /**
   * Rendering a component by its name.<br>
   * Рендеринг компонента по его имени.
   * @param name name of the component /<br>названия компонента
   * @param props property of the component /<br>свойство компонента
   * @param children sub-elements of the component /<br>под элементы компонента
   * @param index the name of the key /<br>названия ключа
   */
  renderOne(t, n, s, r) {
    if (this.is(t)) {
      const o = r ?? t;
      return np(
        this.get(t),
        this.getModification(o, n),
        s,
        o
      );
    }
  }
  /**
   * Rendering the component by its name.<br>
   * Рендеринг компонента по его имени.
   * @param item an array to which the rendered object will be added /<br>
   * массив, по которому будет добавлять объект
   * @param name name of the component /<br>названия компонента
   * @param props property of the component /<br>свойство компонента
   * @param children sub-elements of the component /<br>под элементы компонента
   * @param index the name of the key /<br>названия ключа
   */
  renderAdd(t, n, s, r, o) {
    return t.push(...this.render(n, s, r, o)), this;
  }
}
class gp {
  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor(t, n, s) {
    le(this, "name");
    le(this, "element", mt());
    le(this, "refs");
    le(this, "components");
    le(this, "emits");
    le(this, "classes");
    le(this, "classesSub");
    le(this, "styles");
    le(this, "stylesSub");
    le(this, "attrs");
    le(this, "slots");
    le(this, "data");
    le(this, "dataExpose");
    this.props = n, this.name = this.initName(t), this.refs = this.props ? nl(this.props) : {}, this.components = new lp(s == null ? void 0 : s.components, s == null ? void 0 : s.compMod), this.emits = s == null ? void 0 : s.emits, this.classes = s == null ? void 0 : s.classes, this.styles = s == null ? void 0 : s.styles, this.attrs = Rl(), this.slots = Ml();
  }
  init() {
    return this.makeOptions(), this.classesSub = zt(() => this.initClasses()), this.stylesSub = zt(() => this.initStyles()), this.data = {
      name: this.getName(),
      element: this.element,
      classes: zt(() => this.updateClasses()),
      styles: zt(() => this.updateStyles()),
      ...this.initSetup()
    }, this.dataExpose = this.initExpose(), this;
  }
  /**
   * Getting the class name.<br>
   * Получение названия класса.
   */
  getName() {
    return this.name.join("-");
  }
  /**
   * Getting the class name.<br>
   * Получение названия класса.
   * @param name list of class names by levels /<br>список названий классов по уровням
   */
  getSubClass(t) {
    return `${this.getName()}__${$n(t).join("__")}`;
  }
  /**
   * Getting the class name for the status.<br>
   * Получение названия класса для статуса.
   * @param name list of class names by levels /<br>список названий классов по уровням
   */
  getStatusClass(t) {
    return `${this.getName()}--${$n(t).join("--")}`;
  }
  /**
   * Getting the property name for the style.<br>
   * Получение названия свойства для стиля.
   * @param name list of class names by levels /<br>список названий классов по уровням
   */
  getStyle(t) {
    return `--${this.getName()}-sys-${$n(t).join("-")}`;
  }
  /**
   * Getting additional parameters.<br>
   * Получение дополнительных параметров.
   */
  getAttrs() {
    const t = { ...this.attrs ?? {} };
    return "class" in t && delete t.class, "style" in t && delete t.style, t;
  }
  /**
   * Execution method to replace setup in Vue.<br>
   * Метод выполнения, для замены setup в Vue.
   */
  setup() {
    return this.data ?? {};
  }
  /**
   * List of available external variables.<br>
   * Список доступных переменных извне.
   */
  expose() {
    return this.dataExpose ?? {};
  }
  /**
   * The rendering method for the setup method.<br>
   * Метод рендеринга для метода настройки.
   */
  render() {
    return () => this.initRender();
  }
  /**
   * Initializes the slot.<br>
   * Инициализирует слот.
   * @param name slot name /<br>название слота
   * @param children if you pass this element, the slot will be added to it /<br>
   * если передать этот элемент, то слот добавится в него
   * @param props property for the slot /<br>свойство для слота
   */
  initSlot(t, n, s = {}) {
    var r;
    if (this.slots && ((r = this.slots) != null && r[t]) && typeof this.slots[t] == "function") {
      const o = this.slots[t](s);
      return n && n.push(o), o;
    }
  }
  /**
   * Converts the class name to standard for the current component.<br>
   * Преобразовывает название класса в стандартное для текущего компонента.
   * @param classes list of classes /<br>список классов
   */
  toClassName(t) {
    if (kr(t)) {
      const n = {};
      return In(t, (s, r) => {
        r.match(/\?\?/) ? n[r.replace(/\?\?/, this.getName())] = s : r.match(/\?/) ? n[r.replace(/\?/, this.name[0])] = s : n[r] = s;
      }), n;
    }
    return {};
  }
  /**
   * Getting component names as an array.<br>
   * Получение названий компонентов в виде массива.
   * @param name component name for transformation /<br>название компонента для преобразования
   */
  initName(t) {
    return In(t.split(".", 2), (n) => sp(n));
  }
  /**
   * Updating data about the class.<br>
   * Обновление данных об классе.
   */
  updateClasses() {
    var s, r;
    const t = (s = this.classesSub) == null ? void 0 : s.value, n = (r = this.classes) == null ? void 0 : r.value;
    return t && n ? {
      ...t,
      ...n,
      main: {
        ...this.toClass(t == null ? void 0 : t.main),
        ...this.toClass(n == null ? void 0 : n.main)
      }
    } : n ?? {
      main: {}
    };
  }
  /**
   * Refinement of the received list of styles.<br>
   * Доработка полученного списка стилей.
   */
  updateStyles() {
    var s, r;
    const t = (s = this.stylesSub) == null ? void 0 : s.value, n = (r = this.styles) == null ? void 0 : r.value;
    return t && n ? {
      ...t,
      ...n
    } : n ?? {};
  }
  /**
   * Transformation of the class value into an object.<br>
   * Преобразование значения класса в объект.
   * @param classes list of classes for transformation /<br>список классов для преобразования
   */
  toClass(t) {
    return xi(t) ? t : Array.isArray(t) ? { [t.filter((s) => typeof s == "string" && s.trim() !== "").join(" ")]: !0 } : typeof t == "string" ? { [t]: !0 } : {};
  }
}
export {
  Tn as A,
  Ru as B,
  pp as C,
  ip as D,
  hp as E,
  La as F,
  f as G,
  Hs as H,
  $l as I,
  Ol as J,
  Jr as K,
  uo as L,
  Ts as M,
  vo as N,
  Ll as O,
  Vn as P,
  Xi as Q,
  Ms as R,
  da as S,
  Yd as T,
  ja as U,
  Bs as V,
  mo as W,
  fp as a,
  To as b,
  jc as c,
  xi as d,
  Ti as e,
  wi as f,
  Vt as g,
  np as h,
  Fc as i,
  ep as j,
  tp as k,
  vn as l,
  cr as m,
  Di as n,
  rp as o,
  mp as p,
  op as q,
  Lc as r,
  lp as s,
  sp as t,
  gp as u,
  dp as v,
  zt as w,
  he as x,
  mt as y,
  tt as z
};
