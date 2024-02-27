import './plugin-basic.css';
import { uiComponentsPlugin as t } from "./components.js";
import { registrationUiTranslate as i } from "./translate.js";
const l = {
  install: (a) => a.use(t)
}, s = async (a, r) => (r && r != null && r.translate && await i(r.translate), a.use(t), a);
export {
  s as registrationUiBasic,
  l as uiPlugin
};
