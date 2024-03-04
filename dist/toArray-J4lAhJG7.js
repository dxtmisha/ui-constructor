function s(r) {
  return !!(r && typeof r == "object");
}
function t(r, i) {
  if (s(r)) {
    const e = [];
    return r instanceof Map ? r.forEach((n, o) => e.push(i(n, o, r))) : Array.isArray(r) ? r.forEach((n, o) => e.push(i(n, o, r))) : Object.entries(r).forEach(
      ([n, o]) => e.push(i(o, n, r))
    ), e.filter((n) => n !== void 0);
  }
  return [];
}
function f(r) {
  return s(r) && !Array.isArray(r);
}
function c(r) {
  return Array.isArray(r) ? r : [r];
}
export {
  s as a,
  t as f,
  f as i,
  c as t
};
