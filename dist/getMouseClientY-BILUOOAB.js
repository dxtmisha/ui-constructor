function o(i, u, c) {
  requestAnimationFrame(() => {
    i(), u != null && u() ? o(i, u, c) : c == null || c();
  });
}
function s(i) {
  var u, c;
  return (i == null ? void 0 : i.clientX) || ((u = i == null ? void 0 : i.targetTouches) == null ? void 0 : u[0].clientX) || ((c = i == null ? void 0 : i.touches) == null ? void 0 : c[0].clientX) || 0;
}
function r(i) {
  var u, c;
  return (i == null ? void 0 : i.clientY) || ((u = i == null ? void 0 : i.targetTouches) == null ? void 0 : u[0].clientY) || ((c = i == null ? void 0 : i.touches) == null ? void 0 : c[0].clientY) || 0;
}
export {
  r as a,
  o as f,
  s as g
};
