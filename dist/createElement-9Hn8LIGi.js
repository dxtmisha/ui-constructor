import { a as n, f as m, i as a } from "./toArray-J4lAhJG7.js";
import { e as o } from "./executeFunction-B6By_8Og.js";
import { g as u } from "./getElement-BhVCn14C.js";
function g(s, r, t) {
  var e;
  return ((e = u(s)) == null ? void 0 : e[r]) ?? t;
}
function l(s, r, t) {
  const e = u(s);
  if (e) {
    const c = g(e, r);
    if (n(c) && n(t))
      m(t, (f, i) => {
        c[i] = o(f);
      });
    else {
      const f = o(t);
      !(r in e) && typeof f == "string" ? e.setAttribute(r.toString(), f) : e[r] = o(t);
    }
  }
  return e;
}
function A(s, r = "div", t, e) {
  const c = document.createElement(r);
  return typeof t == "function" ? t(c) : a(t) && m(t, (f, i) => {
    l(c, i, f);
  }), s == null || s.insertBefore(c, e ?? null), c;
}
export {
  A as c,
  g,
  l as s
};
