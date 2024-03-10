function t(n) {
  return n instanceof Function || typeof n == "function";
}
function i(n) {
  return t(n) ? n() : n;
}
function o(n) {
  return n === window;
}
function r(n) {
  if (o(n))
    return document.body;
  if (typeof n == "string")
    try {
      return document.querySelector(n) ?? void 0;
    } catch {
      return;
    }
  return n;
}
export {
  t as a,
  i as e,
  r as g,
  o as i
};
