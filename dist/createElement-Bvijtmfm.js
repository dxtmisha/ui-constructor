import { a as o, f as m, i as a } from "./toArray-J4lAhJG7.js";
import { g as u, e as n } from "./getElement-uQ-JTFk-.js";
function g(c, s, t) {
  var e;
  return ((e = u(c)) == null ? void 0 : e[s]) ?? t;
}
function l(c, s, t) {
  const e = u(c);
  if (e) {
    const r = g(e, s);
    if (o(r) && o(t))
      m(t, (f, i) => {
        r[i] = n(f);
      });
    else {
      const f = n(t);
      !(s in e) && typeof f == "string" ? e.setAttribute(s.toString(), f) : e[s] = n(t);
    }
  }
  return e;
}
function j(c, s = "div", t, e) {
  const r = document.createElement(s);
  return typeof t == "function" ? t(r) : a(t) && m(t, (f, i) => {
    l(r, i, f);
  }), c == null || c.insertBefore(r, e ?? null), r;
}
export {
  j as c,
  g,
  l as s
};
