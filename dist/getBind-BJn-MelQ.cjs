"use strict";const o=require("./toNumber-q6DhEJLz.cjs");function c(t,i={},e="value"){const n=typeof i=="string",r=n?i:e,s=n?{}:i;return t?t&&o.isObjectNotArray(t)&&r in t?{...s,...t}:{...s,[r]:t}:{}}exports.getBind=c;
