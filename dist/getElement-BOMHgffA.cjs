"use strict";function r(t){return t===window}function n(t){if(r(t))return document.body;if(typeof t=="string")try{return document.querySelector(t)??void 0}catch{return}return t}exports.getElement=n;exports.isWindow=r;
