import { g as m } from "./getElement-uQ-JTFk-.js";
import { i as d } from "./isFilled-ClO-1E4U.js";
import { r as o } from "./random-Bem8L1UP.js";
let e = o(1e5, 9e5);
function f(r, t) {
  const i = m(r);
  return i ? (d(i.id) || i.setAttribute("id", `id-${e++}`), t ? `#${i.id}${t}`.trim() : i.id) : `id-${e++}`;
}
export {
  f as g
};
