import { i as n, f as m } from "./forEach-B1ZDH1yu.js";
import { i as a } from "./DesignConstructorAbstract-ZQD6lBiI.js";
import { e as c } from "./executeFunction-B6By_8Og.js";
import { g as u } from "./getElement-BhVCn14C.js";
function g(i, r, t) {
  var e;
  return ((e = u(i)) == null ? void 0 : e[r]) ?? t;
}
function l(i, r, t) {
  const e = u(i);
  if (e) {
    const o = g(e, r);
    if (n(o) && n(t))
      m(t, (s, f) => {
        o[f] = c(s);
      });
    else {
      const s = c(t);
      !(r in e) && typeof s == "string" ? e.setAttribute(r.toString(), s) : e[r] = c(t);
    }
  }
  return e;
}
function E(i, r = "div", t, e) {
  const o = document.createElement(r);
  return typeof t == "function" ? t(o) : a(t) && m(t, (s, f) => {
    l(o, f, s);
  }), i == null || i.insertBefore(o, e ?? null), o;
}
export {
  E as c,
  g,
  l as s
};
