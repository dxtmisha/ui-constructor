import { d as f } from "./EventItem-BvpvW_U2.js";
function e(n, r) {
  return n.indexOf(r) !== -1;
}
function d(n, r = {}, s = "value") {
  const t = typeof r == "string", i = t ? r : s, o = t ? {} : r;
  return n ? n && f(n) && i in n ? {
    ...o,
    ...n
  } : {
    ...o,
    [i]: n
  } : {};
}
export {
  d as g,
  e as i
};
