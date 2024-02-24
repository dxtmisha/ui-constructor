import './plugin-c1.css';
import { uiC1ComponentsPlugin as t } from "./components-c1.js";
import { registrationUiTranslate as e } from "./translate.js";
const n = async (r, a) => (await (await import("./media.js")).makeMedia(), a && a != null && a.translate && await e(a.translate), r.use(t), r);
export {
  n as registrationUiC1
};
