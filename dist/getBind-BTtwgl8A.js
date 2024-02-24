import { i as c } from "./DesignConstructorAbstract-ZQD6lBiI.js";
function e(t, i = {}, s = "value") {
  const r = typeof i == "string", n = r ? i : s, o = r ? {} : i;
  return t ? t && c(t) && n in t ? {
    ...o,
    ...t
  } : {
    ...o,
    [n]: t
  } : {};
}
export {
  e as g
};
