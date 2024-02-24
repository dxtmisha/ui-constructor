import { a as c } from "./toNumber-DcwTJxn8.js";
function e(t, r = {}, s = "value") {
  const i = typeof r == "string", n = i ? r : s, o = i ? {} : r;
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
