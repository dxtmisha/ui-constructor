function i(r) {
  return !!(r && typeof r == "object");
}
function s(r, n) {
  if (i(r)) {
    const f = [];
    return r instanceof Map ? r.forEach((e, o) => f.push(n(e, o, r))) : Array.isArray(r) ? r.forEach((e, o) => f.push(n(e, o, r))) : Object.entries(r).forEach(
      ([e, o]) => f.push(n(o, e, r))
    ), f.filter((e) => e !== void 0);
  }
  return [];
}
export {
  s as f,
  i
};
