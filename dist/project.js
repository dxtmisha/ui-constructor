#!/usr/bin/env ts-node
var ht = Object.defineProperty;
var ut = (o, t, e) => t in o ? ht(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[t] = e;
var V = (o, t, e) => (ut(o, typeof t != "symbol" ? t + "" : t, e), e);
import { i as lt, t as ct } from "./transformation-DBtDP1gm.js";
import { t as I } from "./toArray-rswbj5Xf.js";
import { t as mt } from "./toKebabCase-ARz5evzf.js";
function dt(o) {
  if (o.__esModule)
    return o;
  var t = o.default;
  if (typeof t == "function") {
    var e = function i() {
      return this instanceof i ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    e.prototype = t.prototype;
  } else
    e = {};
  return Object.defineProperty(e, "__esModule", { value: !0 }), Object.keys(o).forEach(function(i) {
    var n = Object.getOwnPropertyDescriptor(o, i);
    Object.defineProperty(e, i, n.get ? n : {
      enumerable: !0,
      get: function() {
        return o[i];
      }
    });
  }), e;
}
var O = {}, H = {}, S = {};
let z = class extends Error {
  /**
   * Constructs the CommanderError class
   * @param {number} exitCode suggested exit code which could be used with process.exit
   * @param {string} code an id string representing the error
   * @param {string} message human-readable description of the error
   * @constructor
   */
  constructor(t, e, i) {
    super(i), Error.captureStackTrace(this, this.constructor), this.name = this.constructor.name, this.code = e, this.exitCode = t, this.nestedError = void 0;
  }
}, pt = class extends z {
  /**
   * Constructs the InvalidArgumentError class
   * @param {string} [message] explanation of why argument is invalid
   * @constructor
   */
  constructor(t) {
    super(1, "commander.invalidArgument", t), Error.captureStackTrace(this, this.constructor), this.name = this.constructor.name;
  }
};
S.CommanderError = z;
S.InvalidArgumentError = pt;
const { InvalidArgumentError: ft } = S;
let gt = class {
  /**
   * Initialize a new command argument with the given name and description.
   * The default is that the argument is required, and you can explicitly
   * indicate this with <> around the name. Put [] around the name for an optional argument.
   *
   * @param {string} name
   * @param {string} [description]
   */
  constructor(t, e) {
    switch (this.description = e || "", this.variadic = !1, this.parseArg = void 0, this.defaultValue = void 0, this.defaultValueDescription = void 0, this.argChoices = void 0, t[0]) {
      case "<":
        this.required = !0, this._name = t.slice(1, -1);
        break;
      case "[":
        this.required = !1, this._name = t.slice(1, -1);
        break;
      default:
        this.required = !0, this._name = t;
        break;
    }
    this._name.length > 3 && this._name.slice(-3) === "..." && (this.variadic = !0, this._name = this._name.slice(0, -3));
  }
  /**
   * Return argument name.
   *
   * @return {string}
   */
  name() {
    return this._name;
  }
  /**
   * @package internal use only
   */
  _concatValue(t, e) {
    return e === this.defaultValue || !Array.isArray(e) ? [t] : e.concat(t);
  }
  /**
   * Set the default value, and optionally supply the description to be displayed in the help.
   *
   * @param {*} value
   * @param {string} [description]
   * @return {Argument}
   */
  default(t, e) {
    return this.defaultValue = t, this.defaultValueDescription = e, this;
  }
  /**
   * Set the custom handler for processing CLI command arguments into argument values.
   *
   * @param {Function} [fn]
   * @return {Argument}
   */
  argParser(t) {
    return this.parseArg = t, this;
  }
  /**
   * Only allow argument value to be one of choices.
   *
   * @param {string[]} values
   * @return {Argument}
   */
  choices(t) {
    return this.argChoices = t.slice(), this.parseArg = (e, i) => {
      if (!this.argChoices.includes(e))
        throw new ft(`Allowed choices are ${this.argChoices.join(", ")}.`);
      return this.variadic ? this._concatValue(e, i) : e;
    }, this;
  }
  /**
   * Make argument required.
   */
  argRequired() {
    return this.required = !0, this;
  }
  /**
   * Make argument optional.
   */
  argOptional() {
    return this.required = !1, this;
  }
};
function _t(o) {
  const t = o.name() + (o.variadic === !0 ? "..." : "");
  return o.required ? "<" + t + ">" : "[" + t + "]";
}
H.Argument = gt;
H.humanReadableArgName = _t;
var Y = {};
const g = {}, Ot = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: g
}, Symbol.toStringTag, { value: "Module" })), T = /* @__PURE__ */ dt(Ot);
var Q = { exports: {} }, p = Q.exports = {}, C, A;
function W() {
  throw new Error("setTimeout has not been defined");
}
function U() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? C = setTimeout : C = W;
  } catch {
    C = W;
  }
  try {
    typeof clearTimeout == "function" ? A = clearTimeout : A = U;
  } catch {
    A = U;
  }
})();
function X(o) {
  if (C === setTimeout)
    return setTimeout(o, 0);
  if ((C === W || !C) && setTimeout)
    return C = setTimeout, setTimeout(o, 0);
  try {
    return C(o, 0);
  } catch {
    try {
      return C.call(null, o, 0);
    } catch {
      return C.call(this, o, 0);
    }
  }
}
function Ct(o) {
  if (A === clearTimeout)
    return clearTimeout(o);
  if ((A === U || !A) && clearTimeout)
    return A = clearTimeout, clearTimeout(o);
  try {
    return A(o);
  } catch {
    try {
      return A.call(null, o);
    } catch {
      return A.call(this, o);
    }
  }
}
var w = [], P = !1, x, k = -1;
function At() {
  !P || !x || (P = !1, x.length ? w = x.concat(w) : k = -1, w.length && Z());
}
function Z() {
  if (!P) {
    var o = X(At);
    P = !0;
    for (var t = w.length; t; ) {
      for (x = w, w = []; ++k < t; )
        x && x[k].run();
      k = -1, t = w.length;
    }
    x = null, P = !1, Ct(o);
  }
}
p.nextTick = function(o) {
  var t = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var e = 1; e < arguments.length; e++)
      t[e - 1] = arguments[e];
  w.push(new tt(o, t)), w.length === 1 && !P && X(Z);
};
function tt(o, t) {
  this.fun = o, this.array = t;
}
tt.prototype.run = function() {
  this.fun.apply(null, this.array);
};
p.title = "browser";
p.browser = !0;
p.env = {};
p.argv = [];
p.version = "";
p.versions = {};
function E() {
}
p.on = E;
p.addListener = E;
p.once = E;
p.off = E;
p.removeListener = E;
p.removeAllListeners = E;
p.emit = E;
p.prependListener = E;
p.prependOnceListener = E;
p.listeners = function(o) {
  return [];
};
p.binding = function(o) {
  throw new Error("process.binding is not supported");
};
p.cwd = function() {
  return "/";
};
p.chdir = function(o) {
  throw new Error("process.chdir is not supported");
};
p.umask = function() {
  return 0;
};
var bt = Q.exports, L = {};
const { humanReadableArgName: wt } = H;
let Et = class {
  constructor() {
    this.helpWidth = void 0, this.sortSubcommands = !1, this.sortOptions = !1, this.showGlobalOptions = !1;
  }
  /**
   * Get an array of the visible subcommands. Includes a placeholder for the implicit help command, if there is one.
   *
   * @param {Command} cmd
   * @returns {Command[]}
   */
  visibleCommands(t) {
    const e = t.commands.filter((n) => !n._hidden), i = t._getHelpCommand();
    return i && !i._hidden && e.push(i), this.sortSubcommands && e.sort((n, r) => n.name().localeCompare(r.name())), e;
  }
  /**
   * Compare options for sort.
   *
   * @param {Option} a
   * @param {Option} b
   * @returns number
   */
  compareOptions(t, e) {
    const i = (n) => n.short ? n.short.replace(/^-/, "") : n.long.replace(/^--/, "");
    return i(t).localeCompare(i(e));
  }
  /**
   * Get an array of the visible options. Includes a placeholder for the implicit help option, if there is one.
   *
   * @param {Command} cmd
   * @returns {Option[]}
   */
  visibleOptions(t) {
    const e = t.options.filter((n) => !n.hidden), i = t._getHelpOption();
    if (i && !i.hidden) {
      const n = i.short && t._findOption(i.short), r = i.long && t._findOption(i.long);
      !n && !r ? e.push(i) : i.long && !r ? e.push(t.createOption(i.long, i.description)) : i.short && !n && e.push(t.createOption(i.short, i.description));
    }
    return this.sortOptions && e.sort(this.compareOptions), e;
  }
  /**
   * Get an array of the visible global options. (Not including help.)
   *
   * @param {Command} cmd
   * @returns {Option[]}
   */
  visibleGlobalOptions(t) {
    if (!this.showGlobalOptions)
      return [];
    const e = [];
    for (let i = t.parent; i; i = i.parent) {
      const n = i.options.filter((r) => !r.hidden);
      e.push(...n);
    }
    return this.sortOptions && e.sort(this.compareOptions), e;
  }
  /**
   * Get an array of the arguments if any have a description.
   *
   * @param {Command} cmd
   * @returns {Argument[]}
   */
  visibleArguments(t) {
    return t._argsDescription && t.registeredArguments.forEach((e) => {
      e.description = e.description || t._argsDescription[e.name()] || "";
    }), t.registeredArguments.find((e) => e.description) ? t.registeredArguments : [];
  }
  /**
   * Get the command term to show in the list of subcommands.
   *
   * @param {Command} cmd
   * @returns {string}
   */
  subcommandTerm(t) {
    const e = t.registeredArguments.map((i) => wt(i)).join(" ");
    return t._name + (t._aliases[0] ? "|" + t._aliases[0] : "") + (t.options.length ? " [options]" : "") + // simplistic check for non-help option
    (e ? " " + e : "");
  }
  /**
   * Get the option term to show in the list of options.
   *
   * @param {Option} option
   * @returns {string}
   */
  optionTerm(t) {
    return t.flags;
  }
  /**
   * Get the argument term to show in the list of arguments.
   *
   * @param {Argument} argument
   * @returns {string}
   */
  argumentTerm(t) {
    return t.name();
  }
  /**
   * Get the longest command term length.
   *
   * @param {Command} cmd
   * @param {Help} helper
   * @returns {number}
   */
  longestSubcommandTermLength(t, e) {
    return e.visibleCommands(t).reduce((i, n) => Math.max(i, e.subcommandTerm(n).length), 0);
  }
  /**
   * Get the longest option term length.
   *
   * @param {Command} cmd
   * @param {Help} helper
   * @returns {number}
   */
  longestOptionTermLength(t, e) {
    return e.visibleOptions(t).reduce((i, n) => Math.max(i, e.optionTerm(n).length), 0);
  }
  /**
   * Get the longest global option term length.
   *
   * @param {Command} cmd
   * @param {Help} helper
   * @returns {number}
   */
  longestGlobalOptionTermLength(t, e) {
    return e.visibleGlobalOptions(t).reduce((i, n) => Math.max(i, e.optionTerm(n).length), 0);
  }
  /**
   * Get the longest argument term length.
   *
   * @param {Command} cmd
   * @param {Help} helper
   * @returns {number}
   */
  longestArgumentTermLength(t, e) {
    return e.visibleArguments(t).reduce((i, n) => Math.max(i, e.argumentTerm(n).length), 0);
  }
  /**
   * Get the command usage to be displayed at the top of the built-in help.
   *
   * @param {Command} cmd
   * @returns {string}
   */
  commandUsage(t) {
    let e = t._name;
    t._aliases[0] && (e = e + "|" + t._aliases[0]);
    let i = "";
    for (let n = t.parent; n; n = n.parent)
      i = n.name() + " " + i;
    return i + e + " " + t.usage();
  }
  /**
   * Get the description for the command.
   *
   * @param {Command} cmd
   * @returns {string}
   */
  commandDescription(t) {
    return t.description();
  }
  /**
   * Get the subcommand summary to show in the list of subcommands.
   * (Fallback to description for backwards compatibility.)
   *
   * @param {Command} cmd
   * @returns {string}
   */
  subcommandDescription(t) {
    return t.summary() || t.description();
  }
  /**
   * Get the option description to show in the list of options.
   *
   * @param {Option} option
   * @return {string}
   */
  optionDescription(t) {
    const e = [];
    return t.argChoices && e.push(
      // use stringify to match the display of the default value
      `choices: ${t.argChoices.map((i) => JSON.stringify(i)).join(", ")}`
    ), t.defaultValue !== void 0 && (t.required || t.optional || t.isBoolean() && typeof t.defaultValue == "boolean") && e.push(`default: ${t.defaultValueDescription || JSON.stringify(t.defaultValue)}`), t.presetArg !== void 0 && t.optional && e.push(`preset: ${JSON.stringify(t.presetArg)}`), t.envVar !== void 0 && e.push(`env: ${t.envVar}`), e.length > 0 ? `${t.description} (${e.join(", ")})` : t.description;
  }
  /**
   * Get the argument description to show in the list of arguments.
   *
   * @param {Argument} argument
   * @return {string}
   */
  argumentDescription(t) {
    const e = [];
    if (t.argChoices && e.push(
      // use stringify to match the display of the default value
      `choices: ${t.argChoices.map((i) => JSON.stringify(i)).join(", ")}`
    ), t.defaultValue !== void 0 && e.push(`default: ${t.defaultValueDescription || JSON.stringify(t.defaultValue)}`), e.length > 0) {
      const i = `(${e.join(", ")})`;
      return t.description ? `${t.description} ${i}` : i;
    }
    return t.description;
  }
  /**
   * Generate the built-in help text.
   *
   * @param {Command} cmd
   * @param {Help} helper
   * @returns {string}
   */
  formatHelp(t, e) {
    const i = e.padWidth(t, e), n = e.helpWidth || 80, r = 2, s = 2;
    function h(f, v) {
      if (v) {
        const D = `${f.padEnd(i + s)}${v}`;
        return e.wrap(D, n - r, i + s);
      }
      return f;
    }
    function a(f) {
      return f.join(`
`).replace(/^/gm, " ".repeat(r));
    }
    let u = [`Usage: ${e.commandUsage(t)}`, ""];
    const l = e.commandDescription(t);
    l.length > 0 && (u = u.concat([e.wrap(l, n, 0), ""]));
    const c = e.visibleArguments(t).map((f) => h(e.argumentTerm(f), e.argumentDescription(f)));
    c.length > 0 && (u = u.concat(["Arguments:", a(c), ""]));
    const _ = e.visibleOptions(t).map((f) => h(e.optionTerm(f), e.optionDescription(f)));
    if (_.length > 0 && (u = u.concat(["Options:", a(_), ""])), this.showGlobalOptions) {
      const f = e.visibleGlobalOptions(t).map((v) => h(e.optionTerm(v), e.optionDescription(v)));
      f.length > 0 && (u = u.concat(["Global Options:", a(f), ""]));
    }
    const y = e.visibleCommands(t).map((f) => h(e.subcommandTerm(f), e.subcommandDescription(f)));
    return y.length > 0 && (u = u.concat(["Commands:", a(y), ""])), u.join(`
`);
  }
  /**
   * Calculate the pad width from the maximum term length.
   *
   * @param {Command} cmd
   * @param {Help} helper
   * @returns {number}
   */
  padWidth(t, e) {
    return Math.max(
      e.longestOptionTermLength(t, e),
      e.longestGlobalOptionTermLength(t, e),
      e.longestSubcommandTermLength(t, e),
      e.longestArgumentTermLength(t, e)
    );
  }
  /**
   * Wrap the given string to width characters per line, with lines after the first indented.
   * Do not wrap if insufficient room for wrapping (minColumnWidth), or string is manually formatted.
   *
   * @param {string} str
   * @param {number} width
   * @param {number} indent
   * @param {number} [minColumnWidth=40]
   * @return {string}
   *
   */
  wrap(t, e, i, n = 40) {
    const r = " \\f\\t\\v   -   　\uFEFF", s = new RegExp(`[\\n][${r}]+`);
    if (t.match(s))
      return t;
    const h = e - i;
    if (h < n)
      return t;
    const a = t.slice(0, i), u = t.slice(i).replace(`\r
`, `
`), l = " ".repeat(i), _ = "\\s​", y = new RegExp(`
|.{1,${h - 1}}([${_}]|$)|[^${_}]+?([${_}]|$)`, "g"), f = u.match(y) || [];
    return a + f.map((v, D) => v === `
` ? "" : (D > 0 ? l : "") + v.trimEnd()).join(`
`);
  }
};
L.Help = Et;
var j = {};
const { InvalidArgumentError: vt } = S;
let $t = class {
  /**
   * Initialize a new `Option` with the given `flags` and `description`.
   *
   * @param {string} flags
   * @param {string} [description]
   */
  constructor(t, e) {
    this.flags = t, this.description = e || "", this.required = t.includes("<"), this.optional = t.includes("["), this.variadic = /\w\.\.\.[>\]]$/.test(t), this.mandatory = !1;
    const i = Pt(t);
    this.short = i.shortFlag, this.long = i.longFlag, this.negate = !1, this.long && (this.negate = this.long.startsWith("--no-")), this.defaultValue = void 0, this.defaultValueDescription = void 0, this.presetArg = void 0, this.envVar = void 0, this.parseArg = void 0, this.hidden = !1, this.argChoices = void 0, this.conflictsWith = [], this.implied = void 0;
  }
  /**
   * Set the default value, and optionally supply the description to be displayed in the help.
   *
   * @param {*} value
   * @param {string} [description]
   * @return {Option}
   */
  default(t, e) {
    return this.defaultValue = t, this.defaultValueDescription = e, this;
  }
  /**
   * Preset to use when option used without option-argument, especially optional but also boolean and negated.
   * The custom processing (parseArg) is called.
   *
   * @example
   * new Option('--color').default('GREYSCALE').preset('RGB');
   * new Option('--donate [amount]').preset('20').argParser(parseFloat);
   *
   * @param {*} arg
   * @return {Option}
   */
  preset(t) {
    return this.presetArg = t, this;
  }
  /**
   * Add option name(s) that conflict with this option.
   * An error will be displayed if conflicting options are found during parsing.
   *
   * @example
   * new Option('--rgb').conflicts('cmyk');
   * new Option('--js').conflicts(['ts', 'jsx']);
   *
   * @param {(string | string[])} names
   * @return {Option}
   */
  conflicts(t) {
    return this.conflictsWith = this.conflictsWith.concat(t), this;
  }
  /**
   * Specify implied option values for when this option is set and the implied options are not.
   *
   * The custom processing (parseArg) is not called on the implied values.
   *
   * @example
   * program
   *   .addOption(new Option('--log', 'write logging information to file'))
   *   .addOption(new Option('--trace', 'log extra details').implies({ log: 'trace.txt' }));
   *
   * @param {Object} impliedOptionValues
   * @return {Option}
   */
  implies(t) {
    let e = t;
    return typeof t == "string" && (e = { [t]: !0 }), this.implied = Object.assign(this.implied || {}, e), this;
  }
  /**
   * Set environment variable to check for option value.
   *
   * An environment variable is only used if when processed the current option value is
   * undefined, or the source of the current value is 'default' or 'config' or 'env'.
   *
   * @param {string} name
   * @return {Option}
   */
  env(t) {
    return this.envVar = t, this;
  }
  /**
   * Set the custom handler for processing CLI option arguments into option values.
   *
   * @param {Function} [fn]
   * @return {Option}
   */
  argParser(t) {
    return this.parseArg = t, this;
  }
  /**
   * Whether the option is mandatory and must have a value after parsing.
   *
   * @param {boolean} [mandatory=true]
   * @return {Option}
   */
  makeOptionMandatory(t = !0) {
    return this.mandatory = !!t, this;
  }
  /**
   * Hide option in help.
   *
   * @param {boolean} [hide=true]
   * @return {Option}
   */
  hideHelp(t = !0) {
    return this.hidden = !!t, this;
  }
  /**
   * @package internal use only
   */
  _concatValue(t, e) {
    return e === this.defaultValue || !Array.isArray(e) ? [t] : e.concat(t);
  }
  /**
   * Only allow option value to be one of choices.
   *
   * @param {string[]} values
   * @return {Option}
   */
  choices(t) {
    return this.argChoices = t.slice(), this.parseArg = (e, i) => {
      if (!this.argChoices.includes(e))
        throw new vt(`Allowed choices are ${this.argChoices.join(", ")}.`);
      return this.variadic ? this._concatValue(e, i) : e;
    }, this;
  }
  /**
   * Return option name.
   *
   * @return {string}
   */
  name() {
    return this.long ? this.long.replace(/^--/, "") : this.short.replace(/^-/, "");
  }
  /**
   * Return option name, in a camelcase format that can be used
   * as a object attribute key.
   *
   * @return {string}
   */
  attributeName() {
    return xt(this.name().replace(/^no-/, ""));
  }
  /**
   * Check if `arg` matches the short or long flag.
   *
   * @param {string} arg
   * @return {boolean}
   * @package internal use only
   */
  is(t) {
    return this.short === t || this.long === t;
  }
  /**
   * Return whether a boolean option.
   *
   * Options are one of boolean, negated, required argument, or optional argument.
   *
   * @return {boolean}
   * @package internal use only
   */
  isBoolean() {
    return !this.required && !this.optional && !this.negate;
  }
}, yt = class {
  /**
   * @param {Option[]} options
   */
  constructor(t) {
    this.positiveOptions = /* @__PURE__ */ new Map(), this.negativeOptions = /* @__PURE__ */ new Map(), this.dualOptions = /* @__PURE__ */ new Set(), t.forEach((e) => {
      e.negate ? this.negativeOptions.set(e.attributeName(), e) : this.positiveOptions.set(e.attributeName(), e);
    }), this.negativeOptions.forEach((e, i) => {
      this.positiveOptions.has(i) && this.dualOptions.add(i);
    });
  }
  /**
   * Did the value come from the option, and not from possible matching dual option?
   *
   * @param {*} value
   * @param {Option} option
   * @returns {boolean}
   */
  valueFromOption(t, e) {
    const i = e.attributeName();
    if (!this.dualOptions.has(i))
      return !0;
    const n = this.negativeOptions.get(i).presetArg, r = n !== void 0 ? n : !1;
    return e.negate === (r === t);
  }
};
function xt(o) {
  return o.split("-").reduce((t, e) => t + e[0].toUpperCase() + e.slice(1));
}
function Pt(o) {
  let t, e;
  const i = o.split(/[ |,]+/);
  return i.length > 1 && !/^[[<]/.test(i[1]) && (t = i.shift()), e = i.shift(), !t && /^-[^-]$/.test(e) && (t = e, e = void 0), { shortFlag: t, longFlag: e };
}
j.Option = $t;
j.DualOptions = yt;
var et = {};
const it = 3;
function St(o, t) {
  if (Math.abs(o.length - t.length) > it)
    return Math.max(o.length, t.length);
  const e = [];
  for (let i = 0; i <= o.length; i++)
    e[i] = [i];
  for (let i = 0; i <= t.length; i++)
    e[0][i] = i;
  for (let i = 1; i <= t.length; i++)
    for (let n = 1; n <= o.length; n++) {
      let r = 1;
      o[n - 1] === t[i - 1] ? r = 0 : r = 1, e[n][i] = Math.min(
        e[n - 1][i] + 1,
        // deletion
        e[n][i - 1] + 1,
        // insertion
        e[n - 1][i - 1] + r
        // substitution
      ), n > 1 && i > 1 && o[n - 1] === t[i - 2] && o[n - 2] === t[i - 1] && (e[n][i] = Math.min(e[n][i], e[n - 2][i - 2] + 1));
    }
  return e[o.length][t.length];
}
function Ht(o, t) {
  if (!t || t.length === 0)
    return "";
  t = Array.from(new Set(t));
  const e = o.startsWith("--");
  e && (o = o.slice(2), t = t.map((s) => s.slice(2)));
  let i = [], n = it;
  const r = 0.4;
  return t.forEach((s) => {
    if (s.length <= 1)
      return;
    const h = St(o, s), a = Math.max(o.length, s.length);
    (a - h) / a > r && (h < n ? (n = h, i = [s]) : h === n && i.push(s));
  }), i.sort((s, h) => s.localeCompare(h)), e && (i = i.map((s) => `--${s}`)), i.length > 1 ? `
(Did you mean one of ${i.join(", ")}?)` : i.length === 1 ? `
(Did you mean ${i[0]}?)` : "";
}
et.suggestSimilar = Ht;
const Vt = T.EventEmitter, F = T, b = T, N = T, d = bt, { Argument: kt, humanReadableArgName: Tt } = H, { CommanderError: R } = S, { Help: jt } = L, { Option: G, DualOptions: Dt } = j, { suggestSimilar: J } = et;
let It = class nt extends Vt {
  /**
   * Initialize a new `Command`.
   *
   * @param {string} [name]
   */
  constructor(t) {
    super(), this.commands = [], this.options = [], this.parent = null, this._allowUnknownOption = !1, this._allowExcessArguments = !0, this.registeredArguments = [], this._args = this.registeredArguments, this.args = [], this.rawArgs = [], this.processedArgs = [], this._scriptPath = null, this._name = t || "", this._optionValues = {}, this._optionValueSources = {}, this._storeOptionsAsProperties = !1, this._actionHandler = null, this._executableHandler = !1, this._executableFile = null, this._executableDir = null, this._defaultCommandName = null, this._exitCallback = null, this._aliases = [], this._combineFlagAndOptionalValue = !0, this._description = "", this._summary = "", this._argsDescription = void 0, this._enablePositionalOptions = !1, this._passThroughOptions = !1, this._lifeCycleHooks = {}, this._showHelpAfterError = !1, this._showSuggestionAfterError = !0, this._outputConfiguration = {
      writeOut: (e) => d.stdout.write(e),
      writeErr: (e) => d.stderr.write(e),
      getOutHelpWidth: () => d.stdout.isTTY ? d.stdout.columns : void 0,
      getErrHelpWidth: () => d.stderr.isTTY ? d.stderr.columns : void 0,
      outputError: (e, i) => i(e)
    }, this._hidden = !1, this._helpOption = void 0, this._addImplicitHelpCommand = void 0, this._helpCommand = void 0, this._helpConfiguration = {};
  }
  /**
   * Copy settings that are useful to have in common across root command and subcommands.
   *
   * (Used internally when adding a command using `.command()` so subcommands inherit parent settings.)
   *
   * @param {Command} sourceCommand
   * @return {Command} `this` command for chaining
   */
  copyInheritedSettings(t) {
    return this._outputConfiguration = t._outputConfiguration, this._helpOption = t._helpOption, this._helpCommand = t._helpCommand, this._helpConfiguration = t._helpConfiguration, this._exitCallback = t._exitCallback, this._storeOptionsAsProperties = t._storeOptionsAsProperties, this._combineFlagAndOptionalValue = t._combineFlagAndOptionalValue, this._allowExcessArguments = t._allowExcessArguments, this._enablePositionalOptions = t._enablePositionalOptions, this._showHelpAfterError = t._showHelpAfterError, this._showSuggestionAfterError = t._showSuggestionAfterError, this;
  }
  /**
   * @returns {Command[]}
   * @private
   */
  _getCommandAndAncestors() {
    const t = [];
    for (let e = this; e; e = e.parent)
      t.push(e);
    return t;
  }
  /**
   * Define a command.
   *
   * There are two styles of command: pay attention to where to put the description.
   *
   * @example
   * // Command implemented using action handler (description is supplied separately to `.command`)
   * program
   *   .command('clone <source> [destination]')
   *   .description('clone a repository into a newly created directory')
   *   .action((source, destination) => {
   *     console.log('clone command called');
   *   });
   *
   * // Command implemented using separate executable file (description is second parameter to `.command`)
   * program
   *   .command('start <service>', 'start named service')
   *   .command('stop [service]', 'stop named service, or all if no name supplied');
   *
   * @param {string} nameAndArgs - command name and arguments, args are `<required>` or `[optional]` and last may also be `variadic...`
   * @param {(Object|string)} [actionOptsOrExecDesc] - configuration options (for action), or description (for executable)
   * @param {Object} [execOpts] - configuration options (for executable)
   * @return {Command} returns new command for action handler, or `this` for executable command
   */
  command(t, e, i) {
    let n = e, r = i;
    typeof n == "object" && n !== null && (r = n, n = null), r = r || {};
    const [, s, h] = t.match(/([^ ]+) *(.*)/), a = this.createCommand(s);
    return n && (a.description(n), a._executableHandler = !0), r.isDefault && (this._defaultCommandName = a._name), a._hidden = !!(r.noHelp || r.hidden), a._executableFile = r.executableFile || null, h && a.arguments(h), this._registerCommand(a), a.parent = this, a.copyInheritedSettings(this), n ? this : a;
  }
  /**
   * Factory routine to create a new unattached command.
   *
   * See .command() for creating an attached subcommand, which uses this routine to
   * create the command. You can override createCommand to customise subcommands.
   *
   * @param {string} [name]
   * @return {Command} new command
   */
  createCommand(t) {
    return new nt(t);
  }
  /**
   * You can customise the help with a subclass of Help by overriding createHelp,
   * or by overriding Help properties using configureHelp().
   *
   * @return {Help}
   */
  createHelp() {
    return Object.assign(new jt(), this.configureHelp());
  }
  /**
   * You can customise the help by overriding Help properties using configureHelp(),
   * or with a subclass of Help by overriding createHelp().
   *
   * @param {Object} [configuration] - configuration options
   * @return {(Command|Object)} `this` command for chaining, or stored configuration
   */
  configureHelp(t) {
    return t === void 0 ? this._helpConfiguration : (this._helpConfiguration = t, this);
  }
  /**
   * The default output goes to stdout and stderr. You can customise this for special
   * applications. You can also customise the display of errors by overriding outputError.
   *
   * The configuration properties are all functions:
   *
   *     // functions to change where being written, stdout and stderr
   *     writeOut(str)
   *     writeErr(str)
   *     // matching functions to specify width for wrapping help
   *     getOutHelpWidth()
   *     getErrHelpWidth()
   *     // functions based on what is being written out
   *     outputError(str, write) // used for displaying errors, and not used for displaying help
   *
   * @param {Object} [configuration] - configuration options
   * @return {(Command|Object)} `this` command for chaining, or stored configuration
   */
  configureOutput(t) {
    return t === void 0 ? this._outputConfiguration : (Object.assign(this._outputConfiguration, t), this);
  }
  /**
   * Display the help or a custom message after an error occurs.
   *
   * @param {(boolean|string)} [displayHelp]
   * @return {Command} `this` command for chaining
   */
  showHelpAfterError(t = !0) {
    return typeof t != "string" && (t = !!t), this._showHelpAfterError = t, this;
  }
  /**
   * Display suggestion of similar commands for unknown commands, or options for unknown options.
   *
   * @param {boolean} [displaySuggestion]
   * @return {Command} `this` command for chaining
   */
  showSuggestionAfterError(t = !0) {
    return this._showSuggestionAfterError = !!t, this;
  }
  /**
   * Add a prepared subcommand.
   *
   * See .command() for creating an attached subcommand which inherits settings from its parent.
   *
   * @param {Command} cmd - new subcommand
   * @param {Object} [opts] - configuration options
   * @return {Command} `this` command for chaining
   */
  addCommand(t, e) {
    if (!t._name)
      throw new Error(`Command passed to .addCommand() must have a name
- specify the name in Command constructor or using .name()`);
    return e = e || {}, e.isDefault && (this._defaultCommandName = t._name), (e.noHelp || e.hidden) && (t._hidden = !0), this._registerCommand(t), t.parent = this, t._checkForBrokenPassThrough(), this;
  }
  /**
   * Factory routine to create a new unattached argument.
   *
   * See .argument() for creating an attached argument, which uses this routine to
   * create the argument. You can override createArgument to return a custom argument.
   *
   * @param {string} name
   * @param {string} [description]
   * @return {Argument} new argument
   */
  createArgument(t, e) {
    return new kt(t, e);
  }
  /**
   * Define argument syntax for command.
   *
   * The default is that the argument is required, and you can explicitly
   * indicate this with <> around the name. Put [] around the name for an optional argument.
   *
   * @example
   * program.argument('<input-file>');
   * program.argument('[output-file]');
   *
   * @param {string} name
   * @param {string} [description]
   * @param {(Function|*)} [fn] - custom argument processing function
   * @param {*} [defaultValue]
   * @return {Command} `this` command for chaining
   */
  argument(t, e, i, n) {
    const r = this.createArgument(t, e);
    return typeof i == "function" ? r.default(n).argParser(i) : r.default(i), this.addArgument(r), this;
  }
  /**
   * Define argument syntax for command, adding multiple at once (without descriptions).
   *
   * See also .argument().
   *
   * @example
   * program.arguments('<cmd> [env]');
   *
   * @param {string} names
   * @return {Command} `this` command for chaining
   */
  arguments(t) {
    return t.trim().split(/ +/).forEach((e) => {
      this.argument(e);
    }), this;
  }
  /**
   * Define argument syntax for command, adding a prepared argument.
   *
   * @param {Argument} argument
   * @return {Command} `this` command for chaining
   */
  addArgument(t) {
    const e = this.registeredArguments.slice(-1)[0];
    if (e && e.variadic)
      throw new Error(`only the last argument can be variadic '${e.name()}'`);
    if (t.required && t.defaultValue !== void 0 && t.parseArg === void 0)
      throw new Error(`a default value for a required argument is never used: '${t.name()}'`);
    return this.registeredArguments.push(t), this;
  }
  /**
   * Customise or override default help command. By default a help command is automatically added if your command has subcommands.
   *
   *    program.helpCommand('help [cmd]');
   *    program.helpCommand('help [cmd]', 'show help');
   *    program.helpCommand(false); // suppress default help command
   *    program.helpCommand(true); // add help command even if no subcommands
   *
   * @param {string|boolean} enableOrNameAndArgs - enable with custom name and/or arguments, or boolean to override whether added
   * @param {string} [description] - custom description
   * @return {Command} `this` command for chaining
   */
  helpCommand(t, e) {
    if (typeof t == "boolean")
      return this._addImplicitHelpCommand = t, this;
    t = t ?? "help [command]";
    const [, i, n] = t.match(/([^ ]+) *(.*)/), r = e ?? "display help for command", s = this.createCommand(i);
    return s.helpOption(!1), n && s.arguments(n), r && s.description(r), this._addImplicitHelpCommand = !0, this._helpCommand = s, this;
  }
  /**
   * Add prepared custom help command.
   *
   * @param {(Command|string|boolean)} helpCommand - custom help command, or deprecated enableOrNameAndArgs as for `.helpCommand()`
   * @param {string} [deprecatedDescription] - deprecated custom description used with custom name only
   * @return {Command} `this` command for chaining
   */
  addHelpCommand(t, e) {
    return typeof t != "object" ? (this.helpCommand(t, e), this) : (this._addImplicitHelpCommand = !0, this._helpCommand = t, this);
  }
  /**
   * Lazy create help command.
   *
   * @return {(Command|null)}
   * @package
   */
  _getHelpCommand() {
    return this._addImplicitHelpCommand ?? (this.commands.length && !this._actionHandler && !this._findCommand("help")) ? (this._helpCommand === void 0 && this.helpCommand(void 0, void 0), this._helpCommand) : null;
  }
  /**
   * Add hook for life cycle event.
   *
   * @param {string} event
   * @param {Function} listener
   * @return {Command} `this` command for chaining
   */
  hook(t, e) {
    const i = ["preSubcommand", "preAction", "postAction"];
    if (!i.includes(t))
      throw new Error(`Unexpected value for event passed to hook : '${t}'.
Expecting one of '${i.join("', '")}'`);
    return this._lifeCycleHooks[t] ? this._lifeCycleHooks[t].push(e) : this._lifeCycleHooks[t] = [e], this;
  }
  /**
   * Register callback to use as replacement for calling process.exit.
   *
   * @param {Function} [fn] optional callback which will be passed a CommanderError, defaults to throwing
   * @return {Command} `this` command for chaining
   */
  exitOverride(t) {
    return t ? this._exitCallback = t : this._exitCallback = (e) => {
      if (e.code !== "commander.executeSubCommandAsync")
        throw e;
    }, this;
  }
  /**
   * Call process.exit, and _exitCallback if defined.
   *
   * @param {number} exitCode exit code for using with process.exit
   * @param {string} code an id string representing the error
   * @param {string} message human-readable description of the error
   * @return never
   * @private
   */
  _exit(t, e, i) {
    this._exitCallback && this._exitCallback(new R(t, e, i)), d.exit(t);
  }
  /**
   * Register callback `fn` for the command.
   *
   * @example
   * program
   *   .command('serve')
   *   .description('start service')
   *   .action(function() {
   *      // do work here
   *   });
   *
   * @param {Function} fn
   * @return {Command} `this` command for chaining
   */
  action(t) {
    const e = (i) => {
      const n = this.registeredArguments.length, r = i.slice(0, n);
      return this._storeOptionsAsProperties ? r[n] = this : r[n] = this.opts(), r.push(this), t.apply(this, r);
    };
    return this._actionHandler = e, this;
  }
  /**
   * Factory routine to create a new unattached option.
   *
   * See .option() for creating an attached option, which uses this routine to
   * create the option. You can override createOption to return a custom option.
   *
   * @param {string} flags
   * @param {string} [description]
   * @return {Option} new option
   */
  createOption(t, e) {
    return new G(t, e);
  }
  /**
   * Wrap parseArgs to catch 'commander.invalidArgument'.
   *
   * @param {(Option | Argument)} target
   * @param {string} value
   * @param {*} previous
   * @param {string} invalidArgumentMessage
   * @private
   */
  _callParseArg(t, e, i, n) {
    try {
      return t.parseArg(e, i);
    } catch (r) {
      if (r.code === "commander.invalidArgument") {
        const s = `${n} ${r.message}`;
        this.error(s, { exitCode: r.exitCode, code: r.code });
      }
      throw r;
    }
  }
  /**
   * Check for option flag conflicts.
   * Register option if no conflicts found, or throw on conflict.
   *
   * @param {Option} option
   * @api private
   */
  _registerOption(t) {
    const e = t.short && this._findOption(t.short) || t.long && this._findOption(t.long);
    if (e) {
      const i = t.long && this._findOption(t.long) ? t.long : t.short;
      throw new Error(`Cannot add option '${t.flags}'${this._name && ` to command '${this._name}'`} due to conflicting flag '${i}'
-  already used by option '${e.flags}'`);
    }
    this.options.push(t);
  }
  /**
   * Check for command name and alias conflicts with existing commands.
   * Register command if no conflicts found, or throw on conflict.
   *
   * @param {Command} command
   * @api private
   */
  _registerCommand(t) {
    const e = (n) => [n.name()].concat(n.aliases()), i = e(t).find((n) => this._findCommand(n));
    if (i) {
      const n = e(this._findCommand(i)).join("|"), r = e(t).join("|");
      throw new Error(`cannot add command '${r}' as already have command '${n}'`);
    }
    this.commands.push(t);
  }
  /**
   * Add an option.
   *
   * @param {Option} option
   * @return {Command} `this` command for chaining
   */
  addOption(t) {
    this._registerOption(t);
    const e = t.name(), i = t.attributeName();
    if (t.negate) {
      const r = t.long.replace(/^--no-/, "--");
      this._findOption(r) || this.setOptionValueWithSource(i, t.defaultValue === void 0 ? !0 : t.defaultValue, "default");
    } else
      t.defaultValue !== void 0 && this.setOptionValueWithSource(i, t.defaultValue, "default");
    const n = (r, s, h) => {
      r == null && t.presetArg !== void 0 && (r = t.presetArg);
      const a = this.getOptionValue(i);
      r !== null && t.parseArg ? r = this._callParseArg(t, r, a, s) : r !== null && t.variadic && (r = t._concatValue(r, a)), r == null && (t.negate ? r = !1 : t.isBoolean() || t.optional ? r = !0 : r = ""), this.setOptionValueWithSource(i, r, h);
    };
    return this.on("option:" + e, (r) => {
      const s = `error: option '${t.flags}' argument '${r}' is invalid.`;
      n(r, s, "cli");
    }), t.envVar && this.on("optionEnv:" + e, (r) => {
      const s = `error: option '${t.flags}' value '${r}' from env '${t.envVar}' is invalid.`;
      n(r, s, "env");
    }), this;
  }
  /**
   * Internal implementation shared by .option() and .requiredOption()
   *
   * @private
   */
  _optionEx(t, e, i, n, r) {
    if (typeof e == "object" && e instanceof G)
      throw new Error("To add an Option object use addOption() instead of option() or requiredOption()");
    const s = this.createOption(e, i);
    if (s.makeOptionMandatory(!!t.mandatory), typeof n == "function")
      s.default(r).argParser(n);
    else if (n instanceof RegExp) {
      const h = n;
      n = (a, u) => {
        const l = h.exec(a);
        return l ? l[0] : u;
      }, s.default(r).argParser(n);
    } else
      s.default(n);
    return this.addOption(s);
  }
  /**
   * Define option with `flags`, `description`, and optional argument parsing function or `defaultValue` or both.
   *
   * The `flags` string contains the short and/or long flags, separated by comma, a pipe or space. A required
   * option-argument is indicated by `<>` and an optional option-argument by `[]`.
   *
   * See the README for more details, and see also addOption() and requiredOption().
   *
   * @example
   * program
   *     .option('-p, --pepper', 'add pepper')
   *     .option('-p, --pizza-type <TYPE>', 'type of pizza') // required option-argument
   *     .option('-c, --cheese [CHEESE]', 'add extra cheese', 'mozzarella') // optional option-argument with default
   *     .option('-t, --tip <VALUE>', 'add tip to purchase cost', parseFloat) // custom parse function
   *
   * @param {string} flags
   * @param {string} [description]
   * @param {(Function|*)} [parseArg] - custom option processing function or default value
   * @param {*} [defaultValue]
   * @return {Command} `this` command for chaining
   */
  option(t, e, i, n) {
    return this._optionEx({}, t, e, i, n);
  }
  /**
  * Add a required option which must have a value after parsing. This usually means
  * the option must be specified on the command line. (Otherwise the same as .option().)
  *
  * The `flags` string contains the short and/or long flags, separated by comma, a pipe or space.
  *
  * @param {string} flags
  * @param {string} [description]
  * @param {(Function|*)} [parseArg] - custom option processing function or default value
  * @param {*} [defaultValue]
  * @return {Command} `this` command for chaining
  */
  requiredOption(t, e, i, n) {
    return this._optionEx({ mandatory: !0 }, t, e, i, n);
  }
  /**
   * Alter parsing of short flags with optional values.
   *
   * @example
   * // for `.option('-f,--flag [value]'):
   * program.combineFlagAndOptionalValue(true);  // `-f80` is treated like `--flag=80`, this is the default behaviour
   * program.combineFlagAndOptionalValue(false) // `-fb` is treated like `-f -b`
   *
   * @param {boolean} [combine=true] - if `true` or omitted, an optional value can be specified directly after the flag.
   */
  combineFlagAndOptionalValue(t = !0) {
    return this._combineFlagAndOptionalValue = !!t, this;
  }
  /**
   * Allow unknown options on the command line.
   *
   * @param {boolean} [allowUnknown=true] - if `true` or omitted, no error will be thrown
   * for unknown options.
   */
  allowUnknownOption(t = !0) {
    return this._allowUnknownOption = !!t, this;
  }
  /**
   * Allow excess command-arguments on the command line. Pass false to make excess arguments an error.
   *
   * @param {boolean} [allowExcess=true] - if `true` or omitted, no error will be thrown
   * for excess arguments.
   */
  allowExcessArguments(t = !0) {
    return this._allowExcessArguments = !!t, this;
  }
  /**
   * Enable positional options. Positional means global options are specified before subcommands which lets
   * subcommands reuse the same option names, and also enables subcommands to turn on passThroughOptions.
   * The default behaviour is non-positional and global options may appear anywhere on the command line.
   *
   * @param {boolean} [positional=true]
   */
  enablePositionalOptions(t = !0) {
    return this._enablePositionalOptions = !!t, this;
  }
  /**
   * Pass through options that come after command-arguments rather than treat them as command-options,
   * so actual command-options come before command-arguments. Turning this on for a subcommand requires
   * positional options to have been enabled on the program (parent commands).
   * The default behaviour is non-positional and options may appear before or after command-arguments.
   *
   * @param {boolean} [passThrough=true]
   * for unknown options.
   */
  passThroughOptions(t = !0) {
    return this._passThroughOptions = !!t, this._checkForBrokenPassThrough(), this;
  }
  /**
   * @private
   */
  _checkForBrokenPassThrough() {
    if (this.parent && this._passThroughOptions && !this.parent._enablePositionalOptions)
      throw new Error(`passThroughOptions cannot be used for '${this._name}' without turning on enablePositionalOptions for parent command(s)`);
  }
  /**
    * Whether to store option values as properties on command object,
    * or store separately (specify false). In both cases the option values can be accessed using .opts().
    *
    * @param {boolean} [storeAsProperties=true]
    * @return {Command} `this` command for chaining
    */
  storeOptionsAsProperties(t = !0) {
    if (this.options.length)
      throw new Error("call .storeOptionsAsProperties() before adding options");
    if (Object.keys(this._optionValues).length)
      throw new Error("call .storeOptionsAsProperties() before setting option values");
    return this._storeOptionsAsProperties = !!t, this;
  }
  /**
   * Retrieve option value.
   *
   * @param {string} key
   * @return {Object} value
   */
  getOptionValue(t) {
    return this._storeOptionsAsProperties ? this[t] : this._optionValues[t];
  }
  /**
   * Store option value.
   *
   * @param {string} key
   * @param {Object} value
   * @return {Command} `this` command for chaining
   */
  setOptionValue(t, e) {
    return this.setOptionValueWithSource(t, e, void 0);
  }
  /**
    * Store option value and where the value came from.
    *
    * @param {string} key
    * @param {Object} value
    * @param {string} source - expected values are default/config/env/cli/implied
    * @return {Command} `this` command for chaining
    */
  setOptionValueWithSource(t, e, i) {
    return this._storeOptionsAsProperties ? this[t] = e : this._optionValues[t] = e, this._optionValueSources[t] = i, this;
  }
  /**
    * Get source of option value.
    * Expected values are default | config | env | cli | implied
    *
    * @param {string} key
    * @return {string}
    */
  getOptionValueSource(t) {
    return this._optionValueSources[t];
  }
  /**
    * Get source of option value. See also .optsWithGlobals().
    * Expected values are default | config | env | cli | implied
    *
    * @param {string} key
    * @return {string}
    */
  getOptionValueSourceWithGlobals(t) {
    let e;
    return this._getCommandAndAncestors().forEach((i) => {
      i.getOptionValueSource(t) !== void 0 && (e = i.getOptionValueSource(t));
    }), e;
  }
  /**
   * Get user arguments from implied or explicit arguments.
   * Side-effects: set _scriptPath if args included script. Used for default program name, and subcommand searches.
   *
   * @private
   */
  _prepareUserArgs(t, e) {
    if (t !== void 0 && !Array.isArray(t))
      throw new Error("first parameter to parse must be array or undefined");
    e = e || {}, t === void 0 && (t = d.argv, d.versions && d.versions.electron && (e.from = "electron")), this.rawArgs = t.slice();
    let i;
    switch (e.from) {
      case void 0:
      case "node":
        this._scriptPath = t[1], i = t.slice(2);
        break;
      case "electron":
        d.defaultApp ? (this._scriptPath = t[1], i = t.slice(2)) : i = t.slice(1);
        break;
      case "user":
        i = t.slice(0);
        break;
      default:
        throw new Error(`unexpected parse option { from: '${e.from}' }`);
    }
    return !this._name && this._scriptPath && this.nameFromFilename(this._scriptPath), this._name = this._name || "program", i;
  }
  /**
   * Parse `argv`, setting options and invoking commands when defined.
   *
   * The default expectation is that the arguments are from node and have the application as argv[0]
   * and the script being run in argv[1], with user parameters after that.
   *
   * @example
   * program.parse(process.argv);
   * program.parse(); // implicitly use process.argv and auto-detect node vs electron conventions
   * program.parse(my-args, { from: 'user' }); // just user supplied arguments, nothing special about argv[0]
   *
   * @param {string[]} [argv] - optional, defaults to process.argv
   * @param {Object} [parseOptions] - optionally specify style of options with from: node/user/electron
   * @param {string} [parseOptions.from] - where the args are from: 'node', 'user', 'electron'
   * @return {Command} `this` command for chaining
   */
  parse(t, e) {
    const i = this._prepareUserArgs(t, e);
    return this._parseCommand([], i), this;
  }
  /**
   * Parse `argv`, setting options and invoking commands when defined.
   *
   * Use parseAsync instead of parse if any of your action handlers are async. Returns a Promise.
   *
   * The default expectation is that the arguments are from node and have the application as argv[0]
   * and the script being run in argv[1], with user parameters after that.
   *
   * @example
   * await program.parseAsync(process.argv);
   * await program.parseAsync(); // implicitly use process.argv and auto-detect node vs electron conventions
   * await program.parseAsync(my-args, { from: 'user' }); // just user supplied arguments, nothing special about argv[0]
   *
   * @param {string[]} [argv]
   * @param {Object} [parseOptions]
   * @param {string} parseOptions.from - where the args are from: 'node', 'user', 'electron'
   * @return {Promise}
   */
  async parseAsync(t, e) {
    const i = this._prepareUserArgs(t, e);
    return await this._parseCommand([], i), this;
  }
  /**
   * Execute a sub-command executable.
   *
   * @private
   */
  _executeSubCommand(t, e) {
    e = e.slice();
    let i = !1;
    const n = [".js", ".ts", ".tsx", ".mjs", ".cjs"];
    function r(l, c) {
      const _ = b.resolve(l, c);
      if (N.existsSync(_))
        return _;
      if (n.includes(b.extname(c)))
        return;
      const y = n.find((f) => N.existsSync(`${_}${f}`));
      if (y)
        return `${_}${y}`;
    }
    this._checkForMissingMandatoryOptions(), this._checkForConflictingOptions();
    let s = t._executableFile || `${this._name}-${t._name}`, h = this._executableDir || "";
    if (this._scriptPath) {
      let l;
      try {
        l = N.realpathSync(this._scriptPath);
      } catch {
        l = this._scriptPath;
      }
      h = b.resolve(b.dirname(l), h);
    }
    if (h) {
      let l = r(h, s);
      if (!l && !t._executableFile && this._scriptPath) {
        const c = b.basename(this._scriptPath, b.extname(this._scriptPath));
        c !== this._name && (l = r(h, `${c}-${t._name}`));
      }
      s = l || s;
    }
    i = n.includes(b.extname(s));
    let a;
    d.platform !== "win32" ? i ? (e.unshift(s), e = K(d.execArgv).concat(e), a = F.spawn(d.argv[0], e, { stdio: "inherit" })) : a = F.spawn(s, e, { stdio: "inherit" }) : (e.unshift(s), e = K(d.execArgv).concat(e), a = F.spawn(d.execPath, e, { stdio: "inherit" })), a.killed || ["SIGUSR1", "SIGUSR2", "SIGTERM", "SIGINT", "SIGHUP"].forEach((c) => {
      d.on(c, () => {
        a.killed === !1 && a.exitCode === null && a.kill(c);
      });
    });
    const u = this._exitCallback;
    a.on("close", (l, c) => {
      l = l ?? 1, u ? u(new R(l, "commander.executeSubCommandAsync", "(close)")) : d.exit(l);
    }), a.on("error", (l) => {
      if (l.code === "ENOENT") {
        const c = h ? `searched for local subcommand relative to directory '${h}'` : "no directory for search for local subcommand, use .executableDir() to supply a custom directory", _ = `'${s}' does not exist
 - if '${t._name}' is not meant to be an executable command, remove description parameter from '.command()' and use '.description()' instead
 - if the default executable name is not suitable, use the executableFile option to supply a custom name or path
 - ${c}`;
        throw new Error(_);
      } else if (l.code === "EACCES")
        throw new Error(`'${s}' not executable`);
      if (!u)
        d.exit(1);
      else {
        const c = new R(1, "commander.executeSubCommandAsync", "(error)");
        c.nestedError = l, u(c);
      }
    }), this.runningCommand = a;
  }
  /**
   * @private
   */
  _dispatchSubcommand(t, e, i) {
    const n = this._findCommand(t);
    n || this.help({ error: !0 });
    let r;
    return r = this._chainOrCallSubCommandHook(r, n, "preSubcommand"), r = this._chainOrCall(r, () => {
      if (n._executableHandler)
        this._executeSubCommand(n, e.concat(i));
      else
        return n._parseCommand(e, i);
    }), r;
  }
  /**
   * Invoke help directly if possible, or dispatch if necessary.
   * e.g. help foo
   *
   * @private
   */
  _dispatchHelpCommand(t) {
    var i, n;
    t || this.help();
    const e = this._findCommand(t);
    return e && !e._executableHandler && e.help(), this._dispatchSubcommand(t, [], [
      ((i = this._getHelpOption()) == null ? void 0 : i.long) ?? ((n = this._getHelpOption()) == null ? void 0 : n.short) ?? "--help"
    ]);
  }
  /**
   * Check this.args against expected this.registeredArguments.
   *
   * @private
   */
  _checkNumberOfArguments() {
    this.registeredArguments.forEach((t, e) => {
      t.required && this.args[e] == null && this.missingArgument(t.name());
    }), !(this.registeredArguments.length > 0 && this.registeredArguments[this.registeredArguments.length - 1].variadic) && this.args.length > this.registeredArguments.length && this._excessArguments(this.args);
  }
  /**
   * Process this.args using this.registeredArguments and save as this.processedArgs!
   *
   * @private
   */
  _processArguments() {
    const t = (i, n, r) => {
      let s = n;
      if (n !== null && i.parseArg) {
        const h = `error: command-argument value '${n}' is invalid for argument '${i.name()}'.`;
        s = this._callParseArg(i, n, r, h);
      }
      return s;
    };
    this._checkNumberOfArguments();
    const e = [];
    this.registeredArguments.forEach((i, n) => {
      let r = i.defaultValue;
      i.variadic ? n < this.args.length ? (r = this.args.slice(n), i.parseArg && (r = r.reduce((s, h) => t(i, h, s), i.defaultValue))) : r === void 0 && (r = []) : n < this.args.length && (r = this.args[n], i.parseArg && (r = t(i, r, i.defaultValue))), e[n] = r;
    }), this.processedArgs = e;
  }
  /**
   * Once we have a promise we chain, but call synchronously until then.
   *
   * @param {(Promise|undefined)} promise
   * @param {Function} fn
   * @return {(Promise|undefined)}
   * @private
   */
  _chainOrCall(t, e) {
    return t && t.then && typeof t.then == "function" ? t.then(() => e()) : e();
  }
  /**
   *
   * @param {(Promise|undefined)} promise
   * @param {string} event
   * @return {(Promise|undefined)}
   * @private
   */
  _chainOrCallHooks(t, e) {
    let i = t;
    const n = [];
    return this._getCommandAndAncestors().reverse().filter((r) => r._lifeCycleHooks[e] !== void 0).forEach((r) => {
      r._lifeCycleHooks[e].forEach((s) => {
        n.push({ hookedCommand: r, callback: s });
      });
    }), e === "postAction" && n.reverse(), n.forEach((r) => {
      i = this._chainOrCall(i, () => r.callback(r.hookedCommand, this));
    }), i;
  }
  /**
   *
   * @param {(Promise|undefined)} promise
   * @param {Command} subCommand
   * @param {string} event
   * @return {(Promise|undefined)}
   * @private
   */
  _chainOrCallSubCommandHook(t, e, i) {
    let n = t;
    return this._lifeCycleHooks[i] !== void 0 && this._lifeCycleHooks[i].forEach((r) => {
      n = this._chainOrCall(n, () => r(this, e));
    }), n;
  }
  /**
   * Process arguments in context of this command.
   * Returns action result, in case it is a promise.
   *
   * @private
   */
  _parseCommand(t, e) {
    const i = this.parseOptions(e);
    if (this._parseOptionsEnv(), this._parseOptionsImplied(), t = t.concat(i.operands), e = i.unknown, this.args = t.concat(e), t && this._findCommand(t[0]))
      return this._dispatchSubcommand(t[0], t.slice(1), e);
    if (this._getHelpCommand() && t[0] === this._getHelpCommand().name())
      return this._dispatchHelpCommand(t[1]);
    if (this._defaultCommandName)
      return this._outputHelpIfRequested(e), this._dispatchSubcommand(this._defaultCommandName, t, e);
    this.commands.length && this.args.length === 0 && !this._actionHandler && !this._defaultCommandName && this.help({ error: !0 }), this._outputHelpIfRequested(i.unknown), this._checkForMissingMandatoryOptions(), this._checkForConflictingOptions();
    const n = () => {
      i.unknown.length > 0 && this.unknownOption(i.unknown[0]);
    }, r = `command:${this.name()}`;
    if (this._actionHandler) {
      n(), this._processArguments();
      let s;
      return s = this._chainOrCallHooks(s, "preAction"), s = this._chainOrCall(s, () => this._actionHandler(this.processedArgs)), this.parent && (s = this._chainOrCall(s, () => {
        this.parent.emit(r, t, e);
      })), s = this._chainOrCallHooks(s, "postAction"), s;
    }
    if (this.parent && this.parent.listenerCount(r))
      n(), this._processArguments(), this.parent.emit(r, t, e);
    else if (t.length) {
      if (this._findCommand("*"))
        return this._dispatchSubcommand("*", t, e);
      this.listenerCount("command:*") ? this.emit("command:*", t, e) : this.commands.length ? this.unknownCommand() : (n(), this._processArguments());
    } else
      this.commands.length ? (n(), this.help({ error: !0 })) : (n(), this._processArguments());
  }
  /**
   * Find matching command.
   *
   * @private
   */
  _findCommand(t) {
    if (t)
      return this.commands.find((e) => e._name === t || e._aliases.includes(t));
  }
  /**
   * Return an option matching `arg` if any.
   *
   * @param {string} arg
   * @return {Option}
   * @package internal use only
   */
  _findOption(t) {
    return this.options.find((e) => e.is(t));
  }
  /**
   * Display an error message if a mandatory option does not have a value.
   * Called after checking for help flags in leaf subcommand.
   *
   * @private
   */
  _checkForMissingMandatoryOptions() {
    this._getCommandAndAncestors().forEach((t) => {
      t.options.forEach((e) => {
        e.mandatory && t.getOptionValue(e.attributeName()) === void 0 && t.missingMandatoryOptionValue(e);
      });
    });
  }
  /**
   * Display an error message if conflicting options are used together in this.
   *
   * @private
   */
  _checkForConflictingLocalOptions() {
    const t = this.options.filter(
      (i) => {
        const n = i.attributeName();
        return this.getOptionValue(n) === void 0 ? !1 : this.getOptionValueSource(n) !== "default";
      }
    );
    t.filter(
      (i) => i.conflictsWith.length > 0
    ).forEach((i) => {
      const n = t.find(
        (r) => i.conflictsWith.includes(r.attributeName())
      );
      n && this._conflictingOption(i, n);
    });
  }
  /**
   * Display an error message if conflicting options are used together.
   * Called after checking for help flags in leaf subcommand.
   *
   * @private
   */
  _checkForConflictingOptions() {
    this._getCommandAndAncestors().forEach((t) => {
      t._checkForConflictingLocalOptions();
    });
  }
  /**
   * Parse options from `argv` removing known options,
   * and return argv split into operands and unknown arguments.
   *
   * Examples:
   *
   *     argv => operands, unknown
   *     --known kkk op => [op], []
   *     op --known kkk => [op], []
   *     sub --unknown uuu op => [sub], [--unknown uuu op]
   *     sub -- --unknown uuu op => [sub --unknown uuu op], []
   *
   * @param {string[]} argv
   * @return {{operands: string[], unknown: string[]}}
   */
  parseOptions(t) {
    const e = [], i = [];
    let n = e;
    const r = t.slice();
    function s(a) {
      return a.length > 1 && a[0] === "-";
    }
    let h = null;
    for (; r.length; ) {
      const a = r.shift();
      if (a === "--") {
        n === i && n.push(a), n.push(...r);
        break;
      }
      if (h && !s(a)) {
        this.emit(`option:${h.name()}`, a);
        continue;
      }
      if (h = null, s(a)) {
        const u = this._findOption(a);
        if (u) {
          if (u.required) {
            const l = r.shift();
            l === void 0 && this.optionMissingArgument(u), this.emit(`option:${u.name()}`, l);
          } else if (u.optional) {
            let l = null;
            r.length > 0 && !s(r[0]) && (l = r.shift()), this.emit(`option:${u.name()}`, l);
          } else
            this.emit(`option:${u.name()}`);
          h = u.variadic ? u : null;
          continue;
        }
      }
      if (a.length > 2 && a[0] === "-" && a[1] !== "-") {
        const u = this._findOption(`-${a[1]}`);
        if (u) {
          u.required || u.optional && this._combineFlagAndOptionalValue ? this.emit(`option:${u.name()}`, a.slice(2)) : (this.emit(`option:${u.name()}`), r.unshift(`-${a.slice(2)}`));
          continue;
        }
      }
      if (/^--[^=]+=/.test(a)) {
        const u = a.indexOf("="), l = this._findOption(a.slice(0, u));
        if (l && (l.required || l.optional)) {
          this.emit(`option:${l.name()}`, a.slice(u + 1));
          continue;
        }
      }
      if (s(a) && (n = i), (this._enablePositionalOptions || this._passThroughOptions) && e.length === 0 && i.length === 0) {
        if (this._findCommand(a)) {
          e.push(a), r.length > 0 && i.push(...r);
          break;
        } else if (this._getHelpCommand() && a === this._getHelpCommand().name()) {
          e.push(a), r.length > 0 && e.push(...r);
          break;
        } else if (this._defaultCommandName) {
          i.push(a), r.length > 0 && i.push(...r);
          break;
        }
      }
      if (this._passThroughOptions) {
        n.push(a), r.length > 0 && n.push(...r);
        break;
      }
      n.push(a);
    }
    return { operands: e, unknown: i };
  }
  /**
   * Return an object containing local option values as key-value pairs.
   *
   * @return {Object}
   */
  opts() {
    if (this._storeOptionsAsProperties) {
      const t = {}, e = this.options.length;
      for (let i = 0; i < e; i++) {
        const n = this.options[i].attributeName();
        t[n] = n === this._versionOptionName ? this._version : this[n];
      }
      return t;
    }
    return this._optionValues;
  }
  /**
   * Return an object containing merged local and global option values as key-value pairs.
   *
   * @return {Object}
   */
  optsWithGlobals() {
    return this._getCommandAndAncestors().reduce(
      (t, e) => Object.assign(t, e.opts()),
      {}
    );
  }
  /**
   * Display error message and exit (or call exitOverride).
   *
   * @param {string} message
   * @param {Object} [errorOptions]
   * @param {string} [errorOptions.code] - an id string representing the error
   * @param {number} [errorOptions.exitCode] - used with process.exit
   */
  error(t, e) {
    this._outputConfiguration.outputError(`${t}
`, this._outputConfiguration.writeErr), typeof this._showHelpAfterError == "string" ? this._outputConfiguration.writeErr(`${this._showHelpAfterError}
`) : this._showHelpAfterError && (this._outputConfiguration.writeErr(`
`), this.outputHelp({ error: !0 }));
    const i = e || {}, n = i.exitCode || 1, r = i.code || "commander.error";
    this._exit(n, r, t);
  }
  /**
   * Apply any option related environment variables, if option does
   * not have a value from cli or client code.
   *
   * @private
   */
  _parseOptionsEnv() {
    this.options.forEach((t) => {
      if (t.envVar && t.envVar in d.env) {
        const e = t.attributeName();
        (this.getOptionValue(e) === void 0 || ["default", "config", "env"].includes(this.getOptionValueSource(e))) && (t.required || t.optional ? this.emit(`optionEnv:${t.name()}`, d.env[t.envVar]) : this.emit(`optionEnv:${t.name()}`));
      }
    });
  }
  /**
   * Apply any implied option values, if option is undefined or default value.
   *
   * @private
   */
  _parseOptionsImplied() {
    const t = new Dt(this.options), e = (i) => this.getOptionValue(i) !== void 0 && !["default", "implied"].includes(this.getOptionValueSource(i));
    this.options.filter((i) => i.implied !== void 0 && e(i.attributeName()) && t.valueFromOption(this.getOptionValue(i.attributeName()), i)).forEach((i) => {
      Object.keys(i.implied).filter((n) => !e(n)).forEach((n) => {
        this.setOptionValueWithSource(n, i.implied[n], "implied");
      });
    });
  }
  /**
   * Argument `name` is missing.
   *
   * @param {string} name
   * @private
   */
  missingArgument(t) {
    const e = `error: missing required argument '${t}'`;
    this.error(e, { code: "commander.missingArgument" });
  }
  /**
   * `Option` is missing an argument.
   *
   * @param {Option} option
   * @private
   */
  optionMissingArgument(t) {
    const e = `error: option '${t.flags}' argument missing`;
    this.error(e, { code: "commander.optionMissingArgument" });
  }
  /**
   * `Option` does not have a value, and is a mandatory option.
   *
   * @param {Option} option
   * @private
   */
  missingMandatoryOptionValue(t) {
    const e = `error: required option '${t.flags}' not specified`;
    this.error(e, { code: "commander.missingMandatoryOptionValue" });
  }
  /**
   * `Option` conflicts with another option.
   *
   * @param {Option} option
   * @param {Option} conflictingOption
   * @private
   */
  _conflictingOption(t, e) {
    const i = (s) => {
      const h = s.attributeName(), a = this.getOptionValue(h), u = this.options.find((c) => c.negate && h === c.attributeName()), l = this.options.find((c) => !c.negate && h === c.attributeName());
      return u && (u.presetArg === void 0 && a === !1 || u.presetArg !== void 0 && a === u.presetArg) ? u : l || s;
    }, n = (s) => {
      const h = i(s), a = h.attributeName();
      return this.getOptionValueSource(a) === "env" ? `environment variable '${h.envVar}'` : `option '${h.flags}'`;
    }, r = `error: ${n(t)} cannot be used with ${n(e)}`;
    this.error(r, { code: "commander.conflictingOption" });
  }
  /**
   * Unknown option `flag`.
   *
   * @param {string} flag
   * @private
   */
  unknownOption(t) {
    if (this._allowUnknownOption)
      return;
    let e = "";
    if (t.startsWith("--") && this._showSuggestionAfterError) {
      let n = [], r = this;
      do {
        const s = r.createHelp().visibleOptions(r).filter((h) => h.long).map((h) => h.long);
        n = n.concat(s), r = r.parent;
      } while (r && !r._enablePositionalOptions);
      e = J(t, n);
    }
    const i = `error: unknown option '${t}'${e}`;
    this.error(i, { code: "commander.unknownOption" });
  }
  /**
   * Excess arguments, more than expected.
   *
   * @param {string[]} receivedArgs
   * @private
   */
  _excessArguments(t) {
    if (this._allowExcessArguments)
      return;
    const e = this.registeredArguments.length, i = e === 1 ? "" : "s", r = `error: too many arguments${this.parent ? ` for '${this.name()}'` : ""}. Expected ${e} argument${i} but got ${t.length}.`;
    this.error(r, { code: "commander.excessArguments" });
  }
  /**
   * Unknown command.
   *
   * @private
   */
  unknownCommand() {
    const t = this.args[0];
    let e = "";
    if (this._showSuggestionAfterError) {
      const n = [];
      this.createHelp().visibleCommands(this).forEach((r) => {
        n.push(r.name()), r.alias() && n.push(r.alias());
      }), e = J(t, n);
    }
    const i = `error: unknown command '${t}'${e}`;
    this.error(i, { code: "commander.unknownCommand" });
  }
  /**
   * Get or set the program version.
   *
   * This method auto-registers the "-V, --version" option which will print the version number.
   *
   * You can optionally supply the flags and description to override the defaults.
   *
   * @param {string} [str]
   * @param {string} [flags]
   * @param {string} [description]
   * @return {(this | string | undefined)} `this` command for chaining, or version string if no arguments
   */
  version(t, e, i) {
    if (t === void 0)
      return this._version;
    this._version = t, e = e || "-V, --version", i = i || "output the version number";
    const n = this.createOption(e, i);
    return this._versionOptionName = n.attributeName(), this._registerOption(n), this.on("option:" + n.name(), () => {
      this._outputConfiguration.writeOut(`${t}
`), this._exit(0, "commander.version", t);
    }), this;
  }
  /**
   * Set the description.
   *
   * @param {string} [str]
   * @param {Object} [argsDescription]
   * @return {(string|Command)}
   */
  description(t, e) {
    return t === void 0 && e === void 0 ? this._description : (this._description = t, e && (this._argsDescription = e), this);
  }
  /**
   * Set the summary. Used when listed as subcommand of parent.
   *
   * @param {string} [str]
   * @return {(string|Command)}
   */
  summary(t) {
    return t === void 0 ? this._summary : (this._summary = t, this);
  }
  /**
   * Set an alias for the command.
   *
   * You may call more than once to add multiple aliases. Only the first alias is shown in the auto-generated help.
   *
   * @param {string} [alias]
   * @return {(string|Command)}
   */
  alias(t) {
    var n;
    if (t === void 0)
      return this._aliases[0];
    let e = this;
    if (this.commands.length !== 0 && this.commands[this.commands.length - 1]._executableHandler && (e = this.commands[this.commands.length - 1]), t === e._name)
      throw new Error("Command alias can't be the same as its name");
    const i = (n = this.parent) == null ? void 0 : n._findCommand(t);
    if (i) {
      const r = [i.name()].concat(i.aliases()).join("|");
      throw new Error(`cannot add alias '${t}' to command '${this.name()}' as already have command '${r}'`);
    }
    return e._aliases.push(t), this;
  }
  /**
   * Set aliases for the command.
   *
   * Only the first alias is shown in the auto-generated help.
   *
   * @param {string[]} [aliases]
   * @return {(string[]|Command)}
   */
  aliases(t) {
    return t === void 0 ? this._aliases : (t.forEach((e) => this.alias(e)), this);
  }
  /**
   * Set / get the command usage `str`.
   *
   * @param {string} [str]
   * @return {(string|Command)}
   */
  usage(t) {
    if (t === void 0) {
      if (this._usage)
        return this._usage;
      const e = this.registeredArguments.map((i) => Tt(i));
      return [].concat(
        this.options.length || this._helpOption !== null ? "[options]" : [],
        this.commands.length ? "[command]" : [],
        this.registeredArguments.length ? e : []
      ).join(" ");
    }
    return this._usage = t, this;
  }
  /**
   * Get or set the name of the command.
   *
   * @param {string} [str]
   * @return {(string|Command)}
   */
  name(t) {
    return t === void 0 ? this._name : (this._name = t, this);
  }
  /**
   * Set the name of the command from script filename, such as process.argv[1],
   * or require.main.filename, or __filename.
   *
   * (Used internally and public although not documented in README.)
   *
   * @example
   * program.nameFromFilename(require.main.filename);
   *
   * @param {string} filename
   * @return {Command}
   */
  nameFromFilename(t) {
    return this._name = b.basename(t, b.extname(t)), this;
  }
  /**
   * Get or set the directory for searching for executable subcommands of this command.
   *
   * @example
   * program.executableDir(__dirname);
   * // or
   * program.executableDir('subcommands');
   *
   * @param {string} [path]
   * @return {(string|null|Command)}
   */
  executableDir(t) {
    return t === void 0 ? this._executableDir : (this._executableDir = t, this);
  }
  /**
   * Return program help documentation.
   *
   * @param {{ error: boolean }} [contextOptions] - pass {error:true} to wrap for stderr instead of stdout
   * @return {string}
   */
  helpInformation(t) {
    const e = this.createHelp();
    return e.helpWidth === void 0 && (e.helpWidth = t && t.error ? this._outputConfiguration.getErrHelpWidth() : this._outputConfiguration.getOutHelpWidth()), e.formatHelp(this, e);
  }
  /**
   * @private
   */
  _getHelpContext(t) {
    t = t || {};
    const e = { error: !!t.error };
    let i;
    return e.error ? i = (n) => this._outputConfiguration.writeErr(n) : i = (n) => this._outputConfiguration.writeOut(n), e.write = t.write || i, e.command = this, e;
  }
  /**
   * Output help information for this command.
   *
   * Outputs built-in help, and custom text added using `.addHelpText()`.
   *
   * @param {{ error: boolean } | Function} [contextOptions] - pass {error:true} to write to stderr instead of stdout
   */
  outputHelp(t) {
    var r;
    let e;
    typeof t == "function" && (e = t, t = void 0);
    const i = this._getHelpContext(t);
    this._getCommandAndAncestors().reverse().forEach((s) => s.emit("beforeAllHelp", i)), this.emit("beforeHelp", i);
    let n = this.helpInformation(i);
    if (e && (n = e(n), typeof n != "string" && !Buffer.isBuffer(n)))
      throw new Error("outputHelp callback must return a string or a Buffer");
    i.write(n), (r = this._getHelpOption()) != null && r.long && this.emit(this._getHelpOption().long), this.emit("afterHelp", i), this._getCommandAndAncestors().forEach((s) => s.emit("afterAllHelp", i));
  }
  /**
   * You can pass in flags and a description to customise the built-in help option.
   * Pass in false to disable the built-in help option.
   *
   * @example
   * program.helpOption('-?, --help' 'show help'); // customise
   * program.helpOption(false); // disable
   *
   * @param {(string | boolean)} flags
   * @param {string} [description]
   * @return {Command} `this` command for chaining
   */
  helpOption(t, e) {
    return typeof t == "boolean" ? (t ? this._helpOption = this._helpOption ?? void 0 : this._helpOption = null, this) : (t = t ?? "-h, --help", e = e ?? "display help for command", this._helpOption = this.createOption(t, e), this);
  }
  /**
   * Lazy create help option.
   * Returns null if has been disabled with .helpOption(false).
   *
   * @returns {(Option | null)} the help option
   * @package internal use only
   */
  _getHelpOption() {
    return this._helpOption === void 0 && this.helpOption(void 0, void 0), this._helpOption;
  }
  /**
   * Supply your own option to use for the built-in help option.
   * This is an alternative to using helpOption() to customise the flags and description etc.
   *
   * @param {Option} option
   * @return {Command} `this` command for chaining
   */
  addHelpOption(t) {
    return this._helpOption = t, this;
  }
  /**
   * Output help information and exit.
   *
   * Outputs built-in help, and custom text added using `.addHelpText()`.
   *
   * @param {{ error: boolean }} [contextOptions] - pass {error:true} to write to stderr instead of stdout
   */
  help(t) {
    this.outputHelp(t);
    let e = d.exitCode || 0;
    e === 0 && t && typeof t != "function" && t.error && (e = 1), this._exit(e, "commander.help", "(outputHelp)");
  }
  /**
   * Add additional text to be displayed with the built-in help.
   *
   * Position is 'before' or 'after' to affect just this command,
   * and 'beforeAll' or 'afterAll' to affect this command and all its subcommands.
   *
   * @param {string} position - before or after built-in help
   * @param {(string | Function)} text - string to add, or a function returning a string
   * @return {Command} `this` command for chaining
   */
  addHelpText(t, e) {
    const i = ["beforeAll", "before", "after", "afterAll"];
    if (!i.includes(t))
      throw new Error(`Unexpected value for position to addHelpText.
Expecting one of '${i.join("', '")}'`);
    const n = `${t}Help`;
    return this.on(n, (r) => {
      let s;
      typeof e == "function" ? s = e({ error: r.error, command: r.command }) : s = e, s && r.write(`${s}
`);
    }), this;
  }
  /**
   * Output help information if help flags specified
   *
   * @param {Array} args - array of options to search for help flags
   * @private
   */
  _outputHelpIfRequested(t) {
    const e = this._getHelpOption();
    e && t.find((n) => e.is(n)) && (this.outputHelp(), this._exit(0, "commander.helpDisplayed", "(outputHelp)"));
  }
};
function K(o) {
  return o.map((t) => {
    if (!t.startsWith("--inspect"))
      return t;
    let e, i = "127.0.0.1", n = "9229", r;
    return (r = t.match(/^(--inspect(-brk)?)$/)) !== null ? e = r[1] : (r = t.match(/^(--inspect(-brk|-port)?)=([^:]+)$/)) !== null ? (e = r[1], /^\d+$/.test(r[3]) ? n = r[3] : i = r[3]) : (r = t.match(/^(--inspect(-brk|-port)?)=([^:]+):(\d+)$/)) !== null && (e = r[1], i = r[3], n = r[4]), e && n !== "0" ? `${e}=${i}:${parseInt(n) + 1}` : t;
  });
}
Y.Command = It;
const { Argument: rt } = H, { Command: q } = Y, { CommanderError: Ft, InvalidArgumentError: st } = S, { Help: Nt } = L, { Option: ot } = j;
O.program = new q();
O.createCommand = (o) => new q(o);
O.createOption = (o, t) => new ot(o, t);
O.createArgument = (o, t) => new rt(o, t);
O.Command = q;
O.Option = ot;
O.Argument = rt;
O.Help = Nt;
O.CommanderError = Ft;
O.InvalidArgumentError = st;
O.InvalidOptionArgumentError = st;
const {
  program: B,
  createCommand: Zt,
  createArgument: te,
  createOption: ee,
  CommanderError: ie,
  InvalidArgumentError: ne,
  InvalidOptionArgumentError: re,
  // deprecated old name
  Command: se,
  Argument: oe,
  Option: ae,
  Help: he
} = O, $ = class $ {
  /**
   * The fs.existsSync() method is used to synchronously check if a file already
   * exists in the given path or not. It returns a boolean value which indicates
   * the presence of a file.<br>
   * Метод fs.existsSync() используется для синхронной проверки наличия файла в
   * указанном пути. Он возвращает логическое значение, которое указывает на
   * наличие файла.
   * @param path it holds the path of the file that has to be checked /<br>
   * это содержит путь к файлу, который необходимо проверить
   */
  static is(t) {
    return g.existsSync(this.joinPath(t));
  }
  /**
   * Checks whether it is a directory.<br>
   * Проверяет, является ли это директорией.
   * @param path name of the element being checked /<br>название проверяемого элемента
   */
  static isDir(t) {
    var e;
    return this.is(t) ? ((e = g.statSync(this.joinPath(t))) == null ? void 0 : e.isDirectory()) ?? !1 : !this.joinPath(t).match(/\.\w+$/);
  }
  /**
   * Determines whether the package is connected as a module.<br>
   * Определяет, является ли пакет подключенным как модуль.
   */
  static isModule() {
    return this.module;
  }
  /**
   * The path.joinPath() method joins all given path segments together using the
   * platform-specific separator as a delimiter, then normalizes the resulting path.<br>
   * Метод path.joinPath() объединяет все указанные сегменты пути с использованием
   * специфического для платформы разделителя в качестве разделителя,
   * а затем нормализует полученный путь.
   * @param path a sequence of path segments /<br>последовательность сегментов пути
   */
  static joinPath(t) {
    return g.join(...I(t));
  }
  /**
   * Getting the path to the file by its name and the path to the directory.<br>
   * Получение пути к файлу по его названию и пути к директории.
   * @param path path to the file /<br>путь к файлу
   * @param name file name /<br>название файла
   * @param extension file extension by default is json /<br>расширение файла по умолчанию - json
   */
  static joinPathByName(t, e, i = "json") {
    return this.joinPath([...I(t), this.getFileName(e, i)]);
  }
  /**
   * Returns the root path.<br>
   * Возвращает корневой путь.
   */
  static getRoot() {
    return this.root;
  }
  /**
   * Returns the file name.<br>
   * Возвращает имя файла.
   * @param name element name /<br>название элемента
   * @param extension file extension by default is json /<br>расширение файла по умолчанию - json
   */
  static getFileName(t, e = "json") {
    return lt(e) ? `${mt(t)}.${e}` : t;
  }
  /**
   * Returns the path to the directory, removing the file name from the path.<br>
   * Возвращает путь к директории, убрав название файла из пути.
   * @param path path to the file /<br>путь к файлу
   */
  static getPathDir(t) {
    return this.isDir(t) ? this.joinPath(t) : g.dirname(this.joinPath(t));
  }
  /**
   * Returns the path to the file.<br>
   * Возвращает путь к файлу.
   * @param path path to the file /<br>путь к файлу
   * @param name element name /<br>название элемента
   * @param extension file extension by default is json /<br>расширение файла по умолчанию - json
   */
  static getPathFile(t, e, i = "json") {
    return [...I(t), this.getFileName(e, i)];
  }
  /**
   * The method splits the path into an array of components.<br>
   * Метод разбивает путь на массив компонентов.
   * @param path path to the directory /<br>путь к директории
   */
  static splitForDir(t) {
    var i;
    const e = this.isDir(t) ? t : (i = this.parse(t)) == null ? void 0 : i.dir;
    return this.joinPath(e || "").split(g.sep);
  }
  /**
   * Method returns an object whose properties represent significant elements of the path.<br>
   * Метод возвращает объект, свойства которого представляют существенные элементы пути.
   * @param path filename /<br>имя файла
   */
  static parse(t) {
    return g.parse(this.joinPath(t));
  }
  /**
   * Returns the directory separator symbol.<br>
   * Возвращает символ разделителя директории.
   */
  static sep() {
    return g.sep;
  }
  /**
   * Getting information about the file.<br>
   * Получение информации о файле.
   * @param path path to the file /<br>путь к файлу
   */
  static stat(t) {
    if (this.is(t))
      return { ...g.statSync(this.joinPath(t)) };
  }
  /**
   * Reads the contents of the directory.<br>
   * Читает содержимое директории.
   * @param path path to the directory /<br>путь к директории
   */
  static readDir(t) {
    return this.is(t) ? g.readdirSync(this.joinPath(t)) : [];
  }
  /**
   * Reads the contents of the directory recursively.<br>
   * Читает содержимое директории рекурсивно.
   * @param path path to the directory /<br>путь к директории
   * @param fullPath recursive directory /<br>рекурсивная директория
   */
  static readDirRecursive(t, e = []) {
    const i = this.readDir(t), n = [];
    return i.forEach((r) => {
      const s = [...t, r];
      this.isDir(s) ? n.push(...this.readDirRecursive(
        s,
        [...e, r]
      )) : n.push(this.joinPath([...e, r]));
    }), n;
  }
  /**
   * Returns the contents of the path.<br>
   * Возвращает содержимое пути.
   * @param path filename /<br>имя файла
   */
  static readFile(t) {
    if (this.is(t))
      return ct(
        g.readFileSync(this.joinPath(t)).toString()
      );
  }
  /**
   * Returns the content of the file, without converting the value.<br>
   * Возвращает содержимое файла, без преобразования значения.
   * @param path filename /<br>имя файла
   */
  static readFileOnly(t) {
    if (this.is(t))
      return g.readFileSync(this.joinPath(t)).toString();
  }
  /**
   * Synchronously creates a directory.<br>
   * Синхронно создает директорию.
   * @param path path to the directory /<br>путь к директории
   */
  static createDir(t) {
    const e = [this.root];
    this.splitForDir(this.removeRootInPath(t)).forEach((i) => {
      e.push(i), this.is(e) || g.mkdirSync(this.joinPath(e));
    });
  }
  /**
   * Writing data to a file.<br>
   * Запись данных в файл.
   * @param path path to the file /<br>путь к файлу
   * @param name file name /<br>название файла
   * @param value values for storage /<br>значения для хранения
   * @param extension file extension by default is json /<br>расширение файла по умолчанию - json
   */
  static write(t, e, i, n = "json") {
    this.writeByPath(
      this.joinPathByName(t, e, n),
      i
    );
  }
  /**
   * Writes to the selected path.<br>
   * Записывает по выбранному пути.
   * @param path path to the file /<br>путь к файлу
   * @param value values for storage /<br>значения для хранения
   */
  static writeByPath(t, e) {
    this.createDir(t), g.writeFileSync(
      this.joinPath(t),
      typeof e == "object" ? JSON.stringify(e) : e
    );
  }
  /**
   * Directory deletion.<br>
   * Удаление директории.
   * @param path path to the directory /<br>путь к директории
   */
  static removeDir(t) {
    this.isDir(t) && g.rmSync(this.joinPath(t), {
      recursive: !0,
      force: !0
    });
  }
  /**
   * File deletion.<br>
   * Удаление файла.
   * @param path path to the file /<br>путь к файлу
   */
  static removeFile(t) {
    this.is(t) && g.unlinkSync(this.joinPath(t));
  }
  static rename(t, e) {
    g.renameSync(
      this.joinPath(t),
      this.joinPath(e)
    );
  }
  /**
   * Removing root from the path.<br>
   * Удаление root из пути.
   * @param path path to the directory /<br>путь к директории
   */
  static removeRootInPath(t) {
    return this.joinPath(t).replace(`${this.root}${g.sep}`, "").replace(`${this.root}`, "");
  }
};
V($, "root"), V($, "module"), $.module = !!__dirname.match("node_modules"), $.root = $.module ? __dirname.replace(/node_modules.*?$/, "") : $.joinPath([__dirname, "..", "..", ".."]);
let m = $;
const M = {
  vue: "UI_CORE_VUE",
  "vue-router": "UI_CORE_VUE_ROUTER",
  vuex: "UI_CORE_VUEX",
  ui: "UI_CORE_UI"
};
class Rt {
  /**
   * Constructor
   * @param dirs path to the file /<br>путь к файлу
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t) {
    this.dirs = t;
  }
  make() {
    return m.readDirRecursive(this.dirs).forEach((e) => {
      const i = [...this.dirs, e], n = m.readFile(i);
      n && n.match(this.getRegMatch()) && m.writeByPath(
        i,
        n.replace(
          this.getRegReplace(),
          (r, s, h) => `const{${s.replace(/([^ ]+) as ([^, ]+)/ig, "$1: $2")}}=${this.getModule(h)}`
        )
      );
    }), this;
  }
  /**
   * Returns the module code by its code.<br>
   * Возвращает код модуля по его коду.
   * @param name module name /<br>название модуля
   */
  getModule(t) {
    const e = t.trim();
    return e in M ? `window.${M[e]}` : e;
  }
  /**
   * Returns a list of links for export.<br>
   * Возвращает список ссылок для экспорта.
   */
  getRegList() {
    return Object.keys(M).join("|");
  }
  /**
   * Returns a regular expression to check if the data exists.<br>
   * Возвращает регулярное выражение для проверки наличия данных.
   */
  getRegMatch() {
    return new RegExp(`from ?"(${this.getRegList()})"`);
  }
  /**
   * Returns a regular expression to change the data.<br>
   * Возвращает регулярное выражение для изменения данных.
   */
  getRegReplace() {
    return new RegExp(`import ?{ ?([^}]+) ?} ?from ?"(${this.getRegList()})"`, "ig");
  }
}
const Mt = [__dirname, "..", "packages"], Wt = [".."], Ut = "temp";
class at {
  /**
   * Constructor
   * @param template template name /<br>название шаблона
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t) {
    V(this, "paths");
    this.template = t, this.paths = this.initTemplatePaths();
  }
  /**
   * Initialization of files for the project.<br>
   * Инициализация файлов для проекта.
   */
  make() {
    console.log("__dirname", __dirname), this.paths.length > 0 && (this.paths.forEach((t) => {
      const e = this.read(t);
      if (e) {
        const i = this.getProjectPath(t);
        m.is(i) || m.writeByPath(i, e);
      }
    }), this.makeUpdateLink(), this.removeTempDir());
  }
  makeBuild() {
    if (this.getTemplateDir() === "vue") {
      const t = [".", "production", "dist"], e = [".", ".."];
      new Rt(t).make(), this.copyBuild(t, e);
    }
  }
  /**
   * Returns the name of the template directory.<br>
   * Возвращает название шаблонной директории.
   */
  getTemplateDir() {
    return this.template;
  }
  /**
   * Returns the path to the template file.<br>
   * Возвращает путь к файлу шаблона.
   */
  getTemplatePath() {
    return [...Mt, `project-${this.getTemplateDir()}`];
  }
  /**
   * Returns the path to the project.<br>
   * Возвращает путь к проекту.
   * @param path name of the element being checked /<br>название проверяемого элемента
   */
  getProjectPath(t) {
    const e = [
      ...Wt,
      ...Array.isArray(t) ? t : [t]
    ], i = e.length - 1;
    return e[i].match("gitignore.txt") && (e[i] = e[i].replace("gitignore.txt", ".gitignore")), e;
  }
  /**
   * Returns the project name.<br>
   * Возвращает название проекта.
   */
  getProjectName() {
    const t = m.splitForDir(__dirname), e = [];
    let i = !1;
    for (; t.length > 0 && (i ? e.unshift(t.pop()) : m.is([m.sep(), ...t, "index.php"]) ? (i = !0, e.unshift(t.pop())) : t.pop(), !m.is([m.sep(), ...t, "ui", "index.html"])); )
      ;
    return `/${e.join("/")}/`;
  }
  /**
   * Reads the file from the template.<br>
   * Читает файл из шаблона.
   * @param path name of the element being checked /<br>название проверяемого элемента
   */
  read(t) {
    return m.readFileOnly([
      ...this.getTemplatePath(),
      ...Array.isArray(t) ? t : [t]
    ]);
  }
  /**
   * Reads the selected files in the project.<br>
   * Читает выбранные файлы в проекте.
   * @param path name of the element being checked /<br>название проверяемого элемента
   */
  // private readProject (path: PropertiesFilePath): string | undefined {
  //   return PropertiesFile.readFile(this.getProjectPath(path))
  // }
  /**
   * Copying the collected data.<br>
   * Копирование собранных данных.
   * @param dist link to the compiled script /<br>ссылка на собранный скрипт
   * @param build link to the relocation site /<br>ссылка на место перемещения
   */
  copyBuild(t, e) {
    m.readDir(t).forEach((n) => {
      const r = [...e, n], s = [...t, n];
      m.isDir(r) ? m.removeDir(r) : m.removeFile(r), m.rename(
        s,
        r
      );
    });
  }
  /**
   * Updating the version of dependent files.<br>
   * Обновление версии зависимых файлов.
   */
  /*
    private makeUpdatePackage (): void {
      const pathProject = ['package.json']
      const packageUi = PropertiesFile.readFile<Record<string, any>>(['node_modules', 'ui', 'package.json'])
      const packageProject = PropertiesFile.readFile<Record<string, any>>(pathProject)
  
      if (
        packageUi &&
        packageProject
      ) {
        [
          'dependencies',
          'devDependencies'
        ].forEach(group => {
          if (
            group in packageUi &&
            group in packageProject
          ) {
            forEach(packageProject[group], (_, key) => {
              if (key in packageUi[group]) {
                packageProject[group][key] = packageUi[group][key]
              }
            })
          }
        })
  
        PropertiesFile.writeByPath(pathProject, packageProject)
      }
    }
     */
  /**
   * Updating the script links.<br>
   * Обновление ссылок на скрипт.
   */
  makeUpdateLink() {
    const t = this.getProjectName(), e = this.getProjectPath(["index.php"]), i = m.readFile(e);
    i && m.writeByPath(
      e,
      i.replace(/componentName = '[^']+'/, `componentName = '${t}'`)
    );
    const n = this.getProjectPath(["vue", "vite.config.ts"]), r = m.readFile(n);
    r && m.writeByPath(
      n,
      r.replace(/BASE_URL = '[^']+'/, `BASE_URL = '${t}'`)
    );
  }
  /**
   * We get a list of links to files.<br>
   * Получаем список ссылок на файлы.
   */
  initTemplatePaths() {
    return m.readDirRecursive(this.getTemplatePath());
  }
  /**
   * Deleting temporary files, if they exist.<br>
   * Удаление временных файлов, если они есть.
   */
  removeTempDir() {
    const t = this.getProjectPath([Ut]);
    return m.is(t) && m.removeDir(t), this;
  }
}
B.command("project").argument("[template]").description(`Initializes the file for working with Vue\r
Инициализирует файл для работы с Vue`).action((o = "vue") => {
  new at(o).make();
});
B.command("build").argument("[template]").description(`Transfer the compiled files to another location\r
Перенести скомпилированные файлы в другое место`).action((o = "vue") => {
  new at(o).makeBuild();
});
B.parse(process.argv);
