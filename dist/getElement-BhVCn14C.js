function t(r) {
  return r === window;
}
function n(r) {
  if (t(r))
    return document.body;
  if (typeof r == "string")
    try {
      return document.querySelector(r) ?? void 0;
    } catch {
      return;
    }
  return r;
}
export {
  n as g,
  t as i
};
