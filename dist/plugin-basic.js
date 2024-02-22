import './plugin-basic.css';
import { uiComponentsPlugin as n } from "./components.js";
const s = {
  install: (i) => {
    i.use(n);
  }
};
export {
  s as uiBasicPlugin
};
