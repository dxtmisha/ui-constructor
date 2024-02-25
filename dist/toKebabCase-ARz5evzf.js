function a(r) {
  return r.toString().trim().replace(/[^\w- ]+/g, "").replace(/ +/g, "-").replace(new RegExp("(?<=[A-Z])([A-Z])", "g"), (e) => `${e.toLowerCase()}`).replace(/^[A-Z]/, (e) => e.toLowerCase()).replace(new RegExp("(?<=[\\w ])[A-Z]", "g"), (e) => `-${e.toLowerCase()}`).replace(/[A-Z]/g, (e) => e.toLowerCase());
}
export {
  a as t
};
