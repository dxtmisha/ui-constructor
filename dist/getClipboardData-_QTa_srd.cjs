"use strict";var g=Object.defineProperty;var v=(s,t,e)=>t in s?g(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var h=(s,t,e)=>(v(s,typeof t!="symbol"?t+"":t,e),e);const l=require("./GeoIntl-bAPmWQn7.cjs"),u=require("./Geo-VVc_JzGu.cjs"),i=require("./toArray-h-YFi-Q9.cjs");function D(s,t="ig",e=":value"){const r=s.replace(/([[\]\\^$.?*+()])/g,"\\$1");return new RegExp(e.replaceAll(":value",r),t)}class c{constructor(t,e="date",r=u.Geo.getLocation()){h(this,"date");h(this,"hour24",!1);h(this,"watch");this.type=e,this.code=r,this.date=l.toDate(t)}getIntl(){return new l.GeoIntl(this.code)}getDate(){return this.date}getType(){return this.type}getHoursType(){const t=this.clone();return t.setHours(23),t.toLocaleTimeString(this.getIntl().getLocation(),{hour:"2-digit"}).match(/23/ig)?"24":"12"}getHour24(){return this.hour24}getTimeZoneOffset(){return this.date.getTimezoneOffset()}getTimeZone(t){const e=this.getTimeZoneOffset();if(t==="minute")return e.toString();const r=e/60*-1;if(t==="hour")return this.getIntl().number(Math.trunc(r),{signDisplay:"always"});const n=this.getIntl().number(Math.trunc(r),{signDisplay:"always",minimumIntegerDigits:2}),o=r.toString().match(/.\d+/)?"30":"00";return t==="RFC"?`${n}${o}`:`${n}:${o}`}getFirstDayCode(){const t=this.getIntl().getFirstDay();return t==="Sa"?6:t==="Su"?0:1}getYear(){return this.date.getFullYear()}getMonth(){return this.date.getMonth()+1}getDay(){return this.date.getDate()}getHour(){return this.date.getHours()}getMinute(){return this.date.getMinutes()}getSecond(){return this.date.getSeconds()}getMaxDay(){return this.getMonth()>0?this.cloneDayLast().getDay():0}locale(t=this.type,e){return this.getIntl().date(this.date,t,e,this.hour24)}localeYear(t="numeric"){return this.locale("year",{year:t})}localeMonth(t="long"){return this.locale("month",{month:t})}localeDay(t="numeric"){return this.locale("day",{day:t})}localeHour(t="numeric"){return this.locale("hour",{hour:t})}localeMinute(t="numeric"){return this.locale("minute",{minute:t})}localeSecond(t="numeric"){return this.locale("second",{second:t})}standard(t=!0){const e=new c(this.date,this.type,"en-GB"),r=[];let n;return e.setHour24(!0),this.type==="hour-minute"?n=e.locale(this.type,{year:"numeric",month:"2-digit",hour12:!1}):(["full","datetime","date","year-month","year","month","day"].indexOf(this.type)!==-1&&(r.push(e.localeYear()),r.push(e.localeMonth("2-digit"))),["full","datetime","date","year","month","day"].indexOf(this.type)!==-1&&r.push(e.localeDay("2-digit")),["full","datetime","time","hour","minute","second"].indexOf(this.type)!==-1&&(n=e.locale("time"))),`${r.join("-")}${n?`T${n}${t?e.getTimeZone():""}`:""}`}setDate(t){return this.date=l.toDate(t),this.update(),this}setType(t){return this.type=t,this.update(),this}setHour24(t){return this.hour24=t,this.update(),this}setCode(t){return this.code=t,this}setWatch(t){return this.watch=t,this}setYear(t){return this.date.setFullYear(t),this.update(),this}setMonth(t){return this.date.setMonth(t-1),this.update(),this}setDay(t){return this.date.setDate(t),this.update(),this}setHour(t){return this.date.setHours(t),this.update(),this}setMinute(t){return this.date.setMinutes(t),this.update(),this}setSecond(t){return this.date.setSeconds(t),this.update(),this}moveByYear(t){return this.setYear(this.date.getFullYear()+t),this}moveByMonth(t){return this.setMonth(this.date.getMonth()+1+t),this}moveByDay(t){return this.setDay(this.date.getDate()+t),this}moveByHour(t){return this.setHour(this.date.getHours()+t),this}moveByMinute(t){return this.setMinute(this.date.getMinutes()+t),this}moveBySecond(t){return this.setSecond(this.date.getSeconds()+t),this}moveMonthFirst(){return this.setMonth(1),this}moveMonthLast(){return this.setMonth(12),this}moveMonthNext(){return this.setDay(1).moveByMonth(1),this}moveMonthPrevious(){return this.setDay(1).moveByMonth(-1),this}moveWeekdayFirst(){const t=this.date.getDay(),e=this.getFirstDayCode();return this.moveByDay((e===6?-1:e)-t),this}moveWeekdayLast(){return this.moveWeekdayFirst().moveByDay(6),this}moveWeekdayFirstByMonth(){return this.moveDayFirst().moveWeekdayFirst(),this}moveWeekdayLastByMonth(){return this.moveDayLast().moveWeekdayLast(),this}moveWeekdayNext(){return this.moveWeekdayFirst().moveByDay(7),this}moveWeekdayPrevious(){return this.moveWeekdayFirst().moveByDay(-7),this}moveDayFirst(){return this.setDay(1),this}moveDayLast(){return this.setDay(1).moveByMonth(1).moveByDay(-1),this}moveDayNext(){return this.moveByDay(1),this}moveDayPrevious(){return this.moveByDay(-1),this}clone(){return new Date(this.date)}cloneClass(){return new this.constructor(this.clone(),this.type,this.code)}cloneMonthFirst(){return this.cloneClass().moveMonthFirst()}cloneMonthLast(){return this.cloneClass().moveMonthLast()}cloneMonthNext(){return this.cloneClass().moveMonthNext()}cloneMonthPrevious(){return this.cloneClass().moveMonthPrevious()}cloneWeekdayFirst(){return this.cloneClass().moveWeekdayFirst()}cloneWeekdayLast(){return this.cloneClass().moveWeekdayLast()}cloneWeekdayFirstByMonth(){return this.cloneClass().moveWeekdayFirstByMonth()}cloneWeekdayLastByMonth(){return this.cloneClass().moveWeekdayLastByMonth()}cloneWeekdayNext(){return this.cloneClass().moveWeekdayNext()}cloneWeekdayPrevious(){return this.cloneClass().moveWeekdayPrevious()}cloneDayFirst(){return this.cloneClass().moveDayFirst()}cloneDayLast(){return this.cloneClass().moveDayLast()}cloneDayNext(){return this.cloneClass().moveDayNext()}cloneDayPrevious(){return this.cloneClass().moveDayPrevious()}update(){var t;return(t=this.watch)==null||t.call(this,this.date,this.type,this.hour24),this}}function M(s,t){return i.forEach(s,e=>e==null?void 0:e[t])}function y(s){return[...new Set(s)]}function d(s,t,e=!0){const r=u.copyObject(s);return i.isObject(s)&&i.isObject(t)&&i.forEach(t,(n,o)=>{const a=s==null?void 0:s[o];i.isObject(a)&&i.isObject(n)?e&&Array.isArray(a)&&Array.isArray(n)?r[o]=u.copyObject(y([...a,...n])):r[o]=d(Array.isArray(a)?{...a}:a,n,e):r[o]=i.isObject(n)?u.copyObject(n):n}),r}function m(s){return i.forEach(s,t=>t.length)}function p(s){return Math.max(...m(s))}async function f(s){var t;return((t=s==null?void 0:s.clipboardData)==null?void 0:t.getData("text"))??(await navigator.clipboard.readText()||"")}exports.Datetime=c;exports.getClipboardData=f;exports.getColumn=M;exports.getExp=D;exports.getLengthOfAllArray=m;exports.getMaxLengthAllArray=p;exports.replaceRecursive=d;exports.uniqueArray=y;