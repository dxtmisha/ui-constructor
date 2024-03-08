import './registration.css';
import { uiComponentsPlugin as e } from "./components.js";
import { makeMedia as t } from "./media.js";
import { registrationUiTranslate as i } from "./translate.js";
const l = async (a, r) => (t(), r && r != null && r.translate && await i(r.translate), a.use(e), a);
export {
  l as registrationUi
};
