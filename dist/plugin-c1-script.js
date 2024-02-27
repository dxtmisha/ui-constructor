import { uiC1ComponentsPlugin as e } from "./components-c1.js";
import { makeMedia as t } from "./media.js";
import { registrationUiTranslate as i } from "./translate.js";
const l = async (a, r) => (t(), r && r != null && r.translate && await i(r.translate), a.use(e), a);
export {
  l as registrationUiC1
};
