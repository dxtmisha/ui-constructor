"use strict";const n=require("./anyToString-B7q8y0hG.cjs"),c=require("./createElement-GrIoepsg.cjs"),s=require("./getElement-BELE3lVa.cjs"),u=require("./isFilled-BySHTEb1.cjs"),o=require("./toArray-h-YFi-Q9.cjs"),l=require("./Geo-VVc_JzGu.cjs");function a(t,i="check"){const e=c.createElement(void 0,"input",d(t));return{group:i,input:e,pattern:t,check(r){return e.type==="checkbox"||e.type==="radio"?e.checked=!!r:e.value=n.anyToString(r),{group:i,input:e,status:e.checkValidity(),validationMessage:e.validationMessage,validity:e.validity,pattern:t,value:r}}}}function d(t){if(u.isFilled(t)){const i=s.executeFunction(t);if(l.isString(t))return{pattern:t};if(o.isObjectNotArray(i))return i}return{}}exports.useInputCheck=a;
