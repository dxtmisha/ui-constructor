"use strict";var D=Object.defineProperty;var v=(e,t,r)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var u=(e,t,r)=>(v(e,typeof t!="symbol"?t+"":t,r),r);const i=require("./toArray-h-YFi-Q9.cjs"),h=require("./Geo-CEQqVODa.cjs"),l=require("./GeoIntl-Cb6lVNV0.cjs");function f(e){return h.isString(e)?e:i.isObject(e)?JSON.stringify(e):(e==null?void 0:e.toString())??""}function M(e,t="ig",r=":value"){const s=e.replace(/([[\]\\^$.?*+()])/g,"\\$1");return new RegExp(r.replaceAll(":value",s),t)}function y(e,t){return Array(t).fill(e)}function p(e,t){return y(e,t).join("")}class c{constructor(t,r="date",s=h.Geo.getLocation()){u(this,"date");u(this,"hour24",!1);u(this,"watch");this.type=r,this.code=s,this.date=l.toDate(t)}getIntl(){return new l.GeoIntl(this.code)}getDate(){return this.date}getType(){return this.type}getHoursType(){const t=this.clone();return t.setHours(23),t.toLocaleTimeString(this.getIntl().getLocation(),{hour:"2-digit"}).match(/23/ig)?"24":"12"}getHour24(){return this.hour24}getTimeZoneOffset(){return this.date.getTimezoneOffset()}getTimeZone(t){const r=this.getTimeZoneOffset();if(t==="minute")return r.toString();const s=r/60*-1;if(t==="hour")return this.getIntl().number(Math.trunc(s),{signDisplay:"always"});const n=this.getIntl().number(Math.trunc(s),{signDisplay:"always",minimumIntegerDigits:2}),o=s.toString().match(/.\d+/)?"30":"00";return t==="RFC"?`${n}${o}`:`${n}:${o}`}getFirstDayCode(){const t=this.getIntl().getFirstDay();return t==="Sa"?6:t==="Su"?0:1}getYear(){return this.date.getFullYear()}getMonth(){return this.date.getMonth()+1}getDay(){return this.date.getDate()}getHour(){return this.date.getHours()}getMinute(){return this.date.getMinutes()}getSecond(){return this.date.getSeconds()}getMaxDay(){return this.getMonth()>0?this.cloneDayLast().getDay():0}locale(t=this.type,r){return this.getIntl().date(this.date,t,r,this.hour24)}localeYear(t="numeric"){return this.locale("year",{year:t})}localeMonth(t="long"){return this.locale("month",{month:t})}localeDay(t="numeric"){return this.locale("day",{day:t})}localeHour(t="numeric"){return this.locale("hour",{hour:t})}localeMinute(t="numeric"){return this.locale("minute",{minute:t})}localeSecond(t="numeric"){return this.locale("second",{second:t})}standard(t=!0){const r=new c(this.date,this.type,"en-GB"),s=[];let n;return r.setHour24(!0),this.type==="hour-minute"?n=r.locale(this.type,{year:"numeric",month:"2-digit",hour12:!1}):(["full","datetime","date","year-month","year","month","day"].indexOf(this.type)!==-1&&(s.push(r.localeYear()),s.push(r.localeMonth("2-digit"))),["full","datetime","date","year","month","day"].indexOf(this.type)!==-1&&s.push(r.localeDay("2-digit")),["full","datetime","time","hour","minute","second"].indexOf(this.type)!==-1&&(n=r.locale("time"))),`${s.join("-")}${n?`T${n}${t?r.getTimeZone():""}`:""}`}setDate(t){return this.date=l.toDate(t),this.update(),this}setType(t){return this.type=t,this.update(),this}setHour24(t){return this.hour24=t,this.update(),this}setCode(t){return this.code=t,this}setWatch(t){return this.watch=t,this}setYear(t){return this.date.setFullYear(t),this.update(),this}setMonth(t){return this.date.setMonth(t-1),this.update(),this}setDay(t){return this.date.setDate(t),this.update(),this}setHour(t){return this.date.setHours(t),this.update(),this}setMinute(t){return this.date.setMinutes(t),this.update(),this}setSecond(t){return this.date.setSeconds(t),this.update(),this}moveByYear(t){return this.setYear(this.date.getFullYear()+t),this}moveByMonth(t){return this.setMonth(this.date.getMonth()+1+t),this}moveByDay(t){return this.setDay(this.date.getDate()+t),this}moveByHour(t){return this.setHour(this.date.getHours()+t),this}moveByMinute(t){return this.setMinute(this.date.getMinutes()+t),this}moveBySecond(t){return this.setSecond(this.date.getSeconds()+t),this}moveMonthFirst(){return this.setMonth(1),this}moveMonthLast(){return this.setMonth(12),this}moveMonthNext(){return this.setDay(1).moveByMonth(1),this}moveMonthPrevious(){return this.setDay(1).moveByMonth(-1),this}moveWeekdayFirst(){const t=this.date.getDay(),r=this.getFirstDayCode();return this.moveByDay((r===6?-1:r)-t),this}moveWeekdayLast(){return this.moveWeekdayFirst().moveByDay(6),this}moveWeekdayFirstByMonth(){return this.moveDayFirst().moveWeekdayFirst(),this}moveWeekdayLastByMonth(){return this.moveDayLast().moveWeekdayLast(),this}moveWeekdayNext(){return this.moveWeekdayFirst().moveByDay(7),this}moveWeekdayPrevious(){return this.moveWeekdayFirst().moveByDay(-7),this}moveDayFirst(){return this.setDay(1),this}moveDayLast(){return this.setDay(1).moveByMonth(1).moveByDay(-1),this}moveDayNext(){return this.moveByDay(1),this}moveDayPrevious(){return this.moveByDay(-1),this}clone(){return new Date(this.date)}cloneClass(){return new this.constructor(this.clone(),this.type,this.code)}cloneMonthFirst(){return this.cloneClass().moveMonthFirst()}cloneMonthLast(){return this.cloneClass().moveMonthLast()}cloneMonthNext(){return this.cloneClass().moveMonthNext()}cloneMonthPrevious(){return this.cloneClass().moveMonthPrevious()}cloneWeekdayFirst(){return this.cloneClass().moveWeekdayFirst()}cloneWeekdayLast(){return this.cloneClass().moveWeekdayLast()}cloneWeekdayFirstByMonth(){return this.cloneClass().moveWeekdayFirstByMonth()}cloneWeekdayLastByMonth(){return this.cloneClass().moveWeekdayLastByMonth()}cloneWeekdayNext(){return this.cloneClass().moveWeekdayNext()}cloneWeekdayPrevious(){return this.cloneClass().moveWeekdayPrevious()}cloneDayFirst(){return this.cloneClass().moveDayFirst()}cloneDayLast(){return this.cloneClass().moveDayLast()}cloneDayNext(){return this.cloneClass().moveDayNext()}cloneDayPrevious(){return this.cloneClass().moveDayPrevious()}update(){var t;return(t=this.watch)==null||t.call(this,this.date,this.type,this.hour24),this}}function F(e,t){return i.forEach(e,r=>r==null?void 0:r[t])}function d(e){return[...new Set(e)]}function m(e,t,r=!0){const s=h.copyObject(e);return i.isObject(e)&&i.isObject(t)&&i.forEach(t,(n,o)=>{const a=e==null?void 0:e[o];i.isObject(a)&&i.isObject(n)?r&&Array.isArray(a)&&Array.isArray(n)?s[o]=h.copyObject(d([...a,...n])):s[o]=m(Array.isArray(a)?{...a}:a,n,r):s[o]=i.isObject(n)?h.copyObject(n):n}),s}function g(e){return i.forEach(e,t=>t.length)}function k(e){return Math.max(...g(e))}async function W(e){var t;return((t=e==null?void 0:e.clipboardData)==null?void 0:t.getData("text"))??(await navigator.clipboard.readText()||"")}exports.Datetime=c;exports.anyToString=f;exports.arrFill=y;exports.getClipboardData=W;exports.getColumn=F;exports.getExp=M;exports.getLengthOfAllArray=g;exports.getMaxLengthAllArray=k;exports.replaceRecursive=m;exports.strFill=p;exports.uniqueArray=d;