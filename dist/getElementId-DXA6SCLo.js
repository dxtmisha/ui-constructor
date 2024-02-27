import { g as d } from "./getElement-BhVCn14C.js";
import { i as n } from "./isFilled-Bk7ZeS55.js";
function o(i, r) {
  return Math.floor(Math.random() * (r - i + 1) + i);
}
let e = o(1e5, 9e5);
function f(i, r) {
  const t = d(i);
  return t ? (n(t.id) || t.setAttribute("id", `id-${e++}`), r ? `#${t.id}${r}`.trim() : t.id) : `id-${e++}`;
}
export {
  f as g,
  o as r
};
