import './registration-m2.css';
import { uiM2ComponentsPlugin as e } from "./components-m2.js";
import { makeUiIcons as m, makeUiFlags as t } from "./media.js";
import { registrationUiTranslate as f } from "./translate.js";
const u = async (a, r = {}) => (m(), r != null && r.flag && t(), r != null && r.translate && await f(r.translate), a.use(e), a);
export {
  u as registrationUiM2
};
