"use strict";const n=require("./isNull-BADIopx6.cjs");function s(e){if(e)switch(typeof e){case"bigint":case"number":return e!==0;case"boolean":return e;case"function":case"symbol":return!0;case"object":return Array.isArray(e)?e.length>0:Object.values(e).some(r=>!n.isNull(r));case"string":return!["","undefined","null","0","false","[]"].includes(e);case"undefined":return!1;default:return!!e}return!1}exports.isFilled=s;
