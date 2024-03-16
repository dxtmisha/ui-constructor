import { a as r } from "./anyToString-CIkiJNFY.js";
import { c as s } from "./createElement-Bvijtmfm.js";
import { e as c } from "./getElement-uQ-JTFk-.js";
import { i as n } from "./isFilled-ClO-1E4U.js";
import { i as a } from "./toArray-J4lAhJG7.js";
import { i as u } from "./Geo-BOuiw8Eo.js";
function h(t, e = "check") {
  const i = s(void 0, "input", f(t));
  return {
    group: e,
    input: i,
    pattern: t,
    check(o) {
      return i.type === "checkbox" || i.type === "radio" ? i.checked = !!o : i.value = r(o), {
        group: e,
        input: i,
        status: i.checkValidity(),
        validationMessage: i.validationMessage,
        validity: i.validity,
        pattern: t,
        value: o
      };
    }
  };
}
function f(t) {
  if (n(t)) {
    const e = c(t);
    if (u(t))
      return { pattern: t };
    if (a(e))
      return e;
  }
  return {};
}
export {
  h as u
};
