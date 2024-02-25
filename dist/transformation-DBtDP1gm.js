function t(e) {
  return e == null;
}
function i(e) {
  if (e)
    switch (typeof e) {
      case "bigint":
      case "number":
        return e !== 0;
      case "boolean":
        return e;
      case "function":
      case "symbol":
        return !0;
      case "object":
        return Array.isArray(e) ? e.length > 0 : Object.values(e).some((r) => !t(r));
      case "string":
        return !["", "undefined", "null", "0", "false", "[]"].includes(e);
      case "undefined":
        return !1;
      default:
        return !!e;
    }
  return !1;
}
function u(e, r = !1) {
  if (typeof e == "string") {
    const n = e.trim();
    switch (n) {
      case "undefined":
        return;
      case "null":
        return null;
      case "true":
        return !0;
      case "false":
        return !1;
      default:
        if (/^[{[]/.exec(n))
          try {
            return JSON.parse(n);
          } catch {
          }
        else {
          if (/^[0-9]+\.[0-9.]+$/.exec(n))
            return parseFloat(n);
          if (/^[0-9]+$/.exec(n))
            return parseInt(n, 10);
          if (r && window && n in window && typeof window[n] == "function")
            return window[n];
        }
    }
  }
  return e;
}
export {
  t as a,
  i,
  u as t
};
