import './plugin.css';
import { f as i } from "./Icons-253BbGkD.js";
import { components as m } from "./components.js";
const p = {
  install: async (o) => {
    await (await import("./media.js")).makeMedia(), i(m, (a, t) => {
      o.component(t, a);
    });
  }
};
export {
  p as uiPlugin
};
