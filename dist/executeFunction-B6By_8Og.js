function t(n) {
  return n instanceof Function || typeof n == "function";
}
function e(n) {
  return t(n) ? n() : n;
}
export {
  e,
  t as i
};
