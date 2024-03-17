import { u as t, a as n, b as a } from "./useEnabled-BTR3ciPG.js";
const e = {
  type: "text",
  autocomplete: "off"
}, o = {
  ...t,
  ...n,
  ...a,
  // Values
  name: String,
  value: String,
  valueVariant: String,
  modelValue: String,
  detail: Object,
  // Input
  type: {
    type: String,
    default: e.type
  },
  inputmode: String,
  spellcheck: Boolean,
  required: Boolean,
  pattern: String,
  match: [String, Object],
  arrow: Boolean,
  step: [String, Number],
  min: [String, Number],
  max: [String, Number],
  minlength: [String, Number],
  maxlength: [String, Number],
  autofocus: Boolean,
  autocomplete: {
    type: String,
    default: e.autocomplete
  },
  input: Object,
  // Messages & Validation
  placeholder: String,
  helperMessage: String,
  validationMessage: String,
  validationCode: [String, Object],
  // On
  on: Object,
  "onUpdate:value": Function,
  "onUpdate:modelValue": Function
}, i = {
  ...o
};
export {
  o as a,
  i as p
};
