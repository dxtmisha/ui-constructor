import './registration-c1.css';
import { uiC1ComponentsPlugin as e } from "./components-c1.js";
import { makeUiIcons as m, makeUiFlags as t } from "./media.js";
import { registrationUiTranslate as f } from "./translate.js";
const u = async (a, r = {}) => (m(), r != null && r.flag && t(), r != null && r.translate && await f(r.translate), a.use(e), a);
export {
  u as registrationUiC1
};
