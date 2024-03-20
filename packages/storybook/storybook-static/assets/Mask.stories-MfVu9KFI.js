import{g as dt,c as $,j as pt,k as gt,l as mt,u as vt,h as b,s as C,a as yt}from"./vue.esm-bundler-DKn_-kmd.js";import{i as bt}from"./inArray-BLmbg9f_-Da-N6vMw.js";import{t as k,s as f,Z as ft,f as E,c as kt}from"./DesignConstructorAbstract-pm1V7i1G-DKYGky5W.js";import{f as O,h as R}from"./useInputCheck-DS0d910p-eprLVnsr.js";import{h as P,s as xt,I as nt,c as T,x as m,f as at,z as ut}from"./GeoIntl-DH3GBVnO-Ba8p-fOD.js";import{a as F}from"./isArray-QlWcxgml-TsNjkBGN.js";import{t as Mt}from"./isFilled-ClO-1E4U-BUdjZhTW.js";import{t as Ct}from"./eventStopPropagation-fHm2p5BF-D53V-aZD.js";import{S as o,a as c}from"./category-CNhBE4DO.js";import"./createElement-Bvijtmfm-DCzadBt_.js";import"./getElement-uQ-JTFk--VVvc7s1q.js";import"./isNull-CjWwlQS3-GxMmF9sj.js";import"./toNumber-eA5ODeva-B35HWKKW.js";import"./DataStorage-BS0mwKb9-CnrN-7_f.js";function wt(n,t){return Array(t).fill(n)}function A(n,t){return wt(n,t).join("")}var Bt=Object.defineProperty,St=(n,t,e)=>t in n?Bt(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,N=(n,t,e)=>(St(n,typeof t!="symbol"?t+"":t,e),e);function Dt(n,t="ig",e=":value"){const s=n.replace(/([[\]\\^$.?*+()])/g,"\\$1");return new RegExp(e.replaceAll(":value",s),t)}class V{constructor(t,e="date",s=xt.getLocation()){N(this,"date"),N(this,"hour24",!1),N(this,"watch"),this.type=e,this.code=s,this.date=P(t)}getIntl(){return new nt(this.code)}getDate(){return this.date}getType(){return this.type}getHoursType(){const t=this.clone();return t.setHours(23),t.toLocaleTimeString(this.getIntl().getLocation(),{hour:"2-digit"}).match(/23/ig)?"24":"12"}getHour24(){return this.hour24}getTimeZoneOffset(){return this.date.getTimezoneOffset()}getTimeZone(t){const e=this.getTimeZoneOffset();if(t==="minute")return e.toString();const s=e/60*-1;if(t==="hour")return this.getIntl().number(Math.trunc(s),{signDisplay:"always"});const i=this.getIntl().number(Math.trunc(s),{signDisplay:"always",minimumIntegerDigits:2}),r=s.toString().match(/.\d+/)?"30":"00";return t==="RFC"?`${i}${r}`:`${i}:${r}`}getFirstDayCode(){const t=this.getIntl().getFirstDay();return t==="Sa"?6:t==="Su"?0:1}getYear(){return this.date.getFullYear()}getMonth(){return this.date.getMonth()+1}getDay(){return this.date.getDate()}getHour(){return this.date.getHours()}getMinute(){return this.date.getMinutes()}getSecond(){return this.date.getSeconds()}getMaxDay(){return this.getMonth()>0?this.cloneDayLast().getDay():0}locale(t=this.type,e){return this.getIntl().date(this.date,t,e,this.hour24)}localeYear(t="numeric"){return this.locale("year",{year:t})}localeMonth(t="long"){return this.locale("month",{month:t})}localeDay(t="numeric"){return this.locale("day",{day:t})}localeHour(t="numeric"){return this.locale("hour",{hour:t})}localeMinute(t="numeric"){return this.locale("minute",{minute:t})}localeSecond(t="numeric"){return this.locale("second",{second:t})}standard(t=!0){const e=new V(this.date,this.type,"en-GB"),s=[];let i;return e.setHour24(!0),this.type==="hour-minute"?i=e.locale(this.type,{year:"numeric",month:"2-digit",hour12:!1}):(["full","datetime","date","year-month","year","month","day"].indexOf(this.type)!==-1&&(s.push(e.localeYear()),s.push(e.localeMonth("2-digit"))),["full","datetime","date","year","month","day"].indexOf(this.type)!==-1&&s.push(e.localeDay("2-digit")),["full","datetime","time","hour","minute","second"].indexOf(this.type)!==-1&&(i=e.locale("time"))),`${s.join("-")}${i?`T${i}${t?e.getTimeZone():""}`:""}`}setDate(t){return this.date=P(t),this.update(),this}setType(t){return this.type=t,this.update(),this}setHour24(t){return this.hour24=t,this.update(),this}setCode(t){return this.code=t,this}setWatch(t){return this.watch=t,this}setYear(t){return this.date.setFullYear(t),this.update(),this}setMonth(t){return this.date.setMonth(t-1),this.update(),this}setDay(t){return this.date.setDate(t),this.update(),this}setHour(t){return this.date.setHours(t),this.update(),this}setMinute(t){return this.date.setMinutes(t),this.update(),this}setSecond(t){return this.date.setSeconds(t),this.update(),this}moveByYear(t){return this.setYear(this.date.getFullYear()+t),this}moveByMonth(t){return this.setMonth(this.date.getMonth()+1+t),this}moveByDay(t){return this.setDay(this.date.getDate()+t),this}moveByHour(t){return this.setHour(this.date.getHours()+t),this}moveByMinute(t){return this.setMinute(this.date.getMinutes()+t),this}moveBySecond(t){return this.setSecond(this.date.getSeconds()+t),this}moveMonthFirst(){return this.setMonth(1),this}moveMonthLast(){return this.setMonth(12),this}moveMonthNext(){return this.setDay(1).moveByMonth(1),this}moveMonthPrevious(){return this.setDay(1).moveByMonth(-1),this}moveWeekdayFirst(){const t=this.date.getDay(),e=this.getFirstDayCode();return this.moveByDay((e===6?-1:e)-t),this}moveWeekdayLast(){return this.moveWeekdayFirst().moveByDay(6),this}moveWeekdayFirstByMonth(){return this.moveDayFirst().moveWeekdayFirst(),this}moveWeekdayLastByMonth(){return this.moveDayLast().moveWeekdayLast(),this}moveWeekdayNext(){return this.moveWeekdayFirst().moveByDay(7),this}moveWeekdayPrevious(){return this.moveWeekdayFirst().moveByDay(-7),this}moveDayFirst(){return this.setDay(1),this}moveDayLast(){return this.setDay(1).moveByMonth(1).moveByDay(-1),this}moveDayNext(){return this.moveByDay(1),this}moveDayPrevious(){return this.moveByDay(-1),this}clone(){return new Date(this.date)}cloneClass(){return new this.constructor(this.clone(),this.type,this.code)}cloneMonthFirst(){return this.cloneClass().moveMonthFirst()}cloneMonthLast(){return this.cloneClass().moveMonthLast()}cloneMonthNext(){return this.cloneClass().moveMonthNext()}cloneMonthPrevious(){return this.cloneClass().moveMonthPrevious()}cloneWeekdayFirst(){return this.cloneClass().moveWeekdayFirst()}cloneWeekdayLast(){return this.cloneClass().moveWeekdayLast()}cloneWeekdayFirstByMonth(){return this.cloneClass().moveWeekdayFirstByMonth()}cloneWeekdayLastByMonth(){return this.cloneClass().moveWeekdayLastByMonth()}cloneWeekdayNext(){return this.cloneClass().moveWeekdayNext()}cloneWeekdayPrevious(){return this.cloneClass().moveWeekdayPrevious()}cloneDayFirst(){return this.cloneClass().moveDayFirst()}cloneDayLast(){return this.cloneClass().moveDayLast()}cloneDayNext(){return this.cloneClass().moveDayNext()}cloneDayPrevious(){return this.cloneClass().moveDayPrevious()}update(){var t;return(t=this.watch)==null||t.call(this,this.date,this.type,this.hour24),this}}function It(n,t){return k(n,e=>e==null?void 0:e[t])}function Lt(n){return[...new Set(n)]}function ht(n,t,e=!0){const s=T(n);return f(n)&&f(t)&&k(t,(i,r)=>{const u=n==null?void 0:n[r];f(u)&&f(i)?e&&Array.isArray(u)&&Array.isArray(i)?s[r]=T(Lt([...u,...i])):s[r]=ht(Array.isArray(u)?{...u}:u,i,e):s[r]=f(i)?T(i):i}),s}function Et(n){return k(n,t=>t.length)}function Ft(n){return Math.max(...Et(n))}async function Vt(n){var t;return((t=n==null?void 0:n.clipboardData)==null?void 0:t.getData("text"))??(await navigator.clipboard.readText()||"")}var Tt=Object.defineProperty,Nt=(n,t,e)=>t in n?Tt(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,a=(n,t,e)=>(Nt(n,typeof t!="symbol"?t+"":t,e),e);class At{constructor(t){this.props=t}isNumber(){return this.get()==="number"}isCurrency(){return this.get()==="currency"}isCurrencyOrNumber(){return this.isNumber()||this.isCurrency()}isEmail(){return this.get()==="email"}isTime(){return["full","datetime","time","hour-minute","hour","minute","second"].indexOf(this.get())!==-1}isDate(){return this.isTime()||["date","year-month","month","day"].indexOf(this.get())!==-1}get(){var t;return((t=this.props)==null?void 0:t.type)??"text"}getByDate(){return this.isDate()?this.get():"date"}}class $t{constructor(){a(this,"chars",[]),a(this,"start",!1)}is(){return this.chars.length>0}get(){return this.chars}add(t){return this.chars.push(t),this}go(t){return this.start?(this.add(t),!1):(this.goStart(),!0)}goStart(){return this.start=!0,this}reset(){return this.resetChars(),this.start=!1,this}resetChars(){return this.chars=[],this}}class Ot{constructor(t){a(this,"value",!1),this.buffer=t}is(){return this.value}in(){this.value=!0,this.buffer.reset()}out(){this.value=!1,this.buffer.reset()}}class Rt{constructor(){a(this,"value",{})}is(t){return t in this.value}get(){return this.value}getCode(){return[...Object.keys(this.value),...Object.values(this.value)]}getByIndex(t){var e;return((e=this.value)==null?void 0:e[t])??0}add(t){return this.value[t]=this.getByIndex(t)+1,this}pop(t){return this.is(t)?(--this.value[t]<=0&&delete this.value[t],!0):!1}reset(){return this.value={},this}expandMask(t){let e=t;return k(this.value,(s,i)=>{e=e.replace(Dt(i,"g","([:value]+)"),r=>`${r}${A(i,s)}`)}),e}}class Pt{constructor(){a(this,"char","")}is(){return this.char!==""}isChar(t){return this.char===t}get(){return this.char}set(t){return this.char=t,this}reset(){return this.set("")}}class Wt{constructor(){a(this,"length",0)}is(){return this.get()>0}get(){return this.length}set(t){return this.length=t,this}}const Kt={Y:"[0-9]{4}",M:{type:"number",min:"1",max:"12"},D:n=>{var t,e;return{type:"number",min:"1",max:new V(`${((t=n==null?void 0:n.Y)==null?void 0:t.value)??"2000"}-${((e=n==null?void 0:n.M)==null?void 0:e.value)??"01"}-01`).getMaxDay().toString()}},h:{type:"number",min:"0",max:"23"},m:{type:"number",min:"0",max:"59"},s:{type:"number",min:"0",max:"59"}};class jt{constructor(t,e){this.props=t,this.type=e}getDatetime(t){var e;return new V(t??"1987-12-18T10:20:30",this.type.getByDate(),(e=this.props)==null?void 0:e.language)}getMask(){return this.getDatetime().setHour24(!0).locale(void 0,"2-digit").replace("1987","YYYY").replace("12","MM").replace("18","DD").replace("10","hh").replace("20","mm").replace("30","ss").split("")}getValue(t){return this.getDatetime(t).locale(void 0,"2-digit")}getValueStandard(t){var e,s,i,r,u,h;const l=`${((e=t==null?void 0:t.Y)==null?void 0:e.value)||"2000"}-${((s=t==null?void 0:t.M)==null?void 0:s.value)||"01"}-${((i=t==null?void 0:t.D)==null?void 0:i.value)||"01"}T${((r=t==null?void 0:t.h)==null?void 0:r.value)||"00"}:${((u=t==null?void 0:t.m)==null?void 0:u.value)||"00"}:${((h=t==null?void 0:t.s)==null?void 0:h.value)||"00"}`;return isNaN(Date.parse(l))?"":this.getDatetime(l).standard(!1)}getPattern(){return Kt}getView(t){var e;return(e=this.getViewList())==null?void 0:e[t]}getViewList(){return{Y:"y",M:"m",D:"d",h:"h",m:"m",s:"s"}}}class Ut{constructor(t,e,s){this.props=t,this.type=e,this.rubberItem=s}isFractionRubber(){return this.props.fraction===!0}getIntl(){var t;return new nt((t=this.props)==null?void 0:t.language)}getFraction(){var t;if(this.type.isCurrency())return 2;const e=(t=this.props)==null?void 0:t.fraction;return typeof e=="number"?e:typeof e=="string"&&e.match(/[0-9]+/)?Number(e):this.rubberItem.is("f")?this.rubberItem.getByIndex("f")+1:e===!0?1:0}getMask(){return(this.type.isCurrency()?this.getCurrency():this.getNumber()).replace(/9/ig,"n").replace(/3/ig,"f").split("")}getSpecial(){return{n:{},f:{defaultValue:"0"}}}getRubber(){return{n:{rubber:!0,transitionChar:this.getDecimal(),maxLength:10},f:{rubber:this.isFractionRubber(),maxLength:4}}}getValueStandard(t){var e,s;return`${((e=t==null?void 0:t.n)==null?void 0:e.value)||"0"}.${((s=t==null?void 0:t.f)==null?void 0:s.value)||"0"}`}getNumber(){return this.getIntl().number(this.getNumberForString(),{maximumFractionDigits:9})}getCurrency(){return this.getIntl().currency(this.getNumberForString())}getDecimal(){return[this.getIntl().decimal(),"."]}getView(){return"0"}getNumberForString(){var t;const e=this.getFraction(),s=A("9",this.rubberItem.getByIndex("n")+1),i=e?`.${A("3",e)}`:"",r=this.type.isCurrency()&&(t=this.props)!=null&&t.currency?` ${this.props.currency}`:"";return`${s}${i}${r}`}}class Yt extends m{constructor(t,e,s){super(()=>this.initValue()),this.props=t,this.type=e,this.format=s}isSpecial(t){return this.get().indexOf(t)!==-1}isTransitionChar(t,e){const s=this.getTransitionChar(t);return s?at(e,s):!1}isString(){return this.get().length<=1}isDefault(t){return!!this.getDefault(t)}get(){var t,e;return this.getCache([(t=this.props)==null?void 0:t.type,(e=this.props)==null?void 0:e.special])}getFirst(){var t;return((t=this.get())==null?void 0:t[0])??"*"}getDefault(t){var e;return(e=this.getSpecialItem(t))==null?void 0:e.defaultValue}getTransitionChar(t){var e;return(e=this.getSpecialItem(t))==null?void 0:e.transitionChar}getMatch(t){var e;return(e=this.getSpecialItem(t))==null?void 0:e.match}getPattern(t){var e;return(e=this.getSpecialItem(t))==null?void 0:e.pattern}getView(t){var e;return(e=this.getSpecialItem(t))==null?void 0:e.view}getRubberList(){const t={},e=this.getSpecial();return E(e)&&k(e,(s,i)=>{s!=null&&s.rubber&&(t[i]=s)}),t}getSpecial(){var t;return this.type.isCurrencyOrNumber()?this.format.getSpecial():((t=this.props)==null?void 0:t.special)??"*"}getSpecialItem(t){const e=this.getSpecial();if(E(e)&&t in e)return e[t]}initValue(){if(this.type.isCurrencyOrNumber())return["n","f"];if(this.type.isTime())return["Y","M","D","h","m","s"];if(this.type.isDate())return["Y","M","D"];const t=this.getSpecial();return F(t)?t:f(t)?Object.keys(t):[t]}}const W=/[0-9]/;class Ht{constructor(t,e){this.props=t,this.special=e}is(t,e){const s=this.get(e);return s instanceof RegExp?!!t.match(s):ut(s)?!!t.match(new RegExp(s)):!!t.match(W)}get(t){var e;return(t&&this.special.getMatch(t))??((e=this.props)==null?void 0:e.match)??W}filter(t){const e=this.special.get();return t.split("").filter(s=>e.find(i=>this.is(s,i)))}}class _t{constructor(t,e,s,i){a(this,"inputs"),this.props=t,this.type=e,this.date=s,this.special=i,this.inputs=new m(()=>this.initInput())}isCheck(){var t;return!!((t=this.props)!=null&&t.check)}get(t){var e;return t==="check"?this.getCheck():(e=this.getList())==null?void 0:e[t]}getList(){const t=this.getByType();for(const e in t){const s=this.getPattern(e);E(s)&&E(t[e])&&Object.assign(t[e],s)}return t}getPattern(t){var e;return(t&&this.special.getPattern(t))??((e=this.props)==null?void 0:e.pattern)}getCheck(){var t;return(t=this.props)==null?void 0:t.check}getInput(t="check"){var e;return(e=this.getInputList())==null?void 0:e[t]}getInputList(){var t,e;return this.inputs.getCache([(t=this.props)==null?void 0:t.pattern,(e=this.props)==null?void 0:e.check])}getByType(){if(this.type.isDate())return this.date.getPattern();const t={};return this.special.get().forEach(e=>{t[e]={}}),t}initInput(){const t={},e=this.getCheck();return k(this.getList(),(s,i)=>{t[i]=R(s,i)}),e&&(t.check=R(e)),t}}class Zt{constructor(t,e){this.props=t,this.type=e}isEnd(){var t;return this.type.isCurrencyOrNumber()||((t=this.props)==null?void 0:t.dir)==="rtl"||!1}isRight(){var t;return((t=this.props)==null?void 0:t.right)||this.isEnd()}}class Gt extends m{constructor(t,e,s,i,r,u,h){super(()=>this.initList()),this.props=t,this.type=e,this.rubberItem=s,this.rubberTransition=i,this.special=r,this.match=u,this.format=h}is(t){return t in this.getList()}isTransition(t){return this.getTransitionList().indexOf(t)>=0}isValue(t,e){return e in t&&this.is(e)}get(t){var e;return(e=this.getList())==null?void 0:e[t]}getList(){var t,e;return this.getCache([(t=this.props)==null?void 0:t.type,(e=this.props)==null?void 0:e.special])}getTransitionList(){return It(Object.values(this.getList()).filter(t=>"transitionChar"in t&&(ut(t.transitionChar)||F(t.transitionChar))),"transitionChar").flat()}update(t,e,s){const i=this.get(e),r=t==null?void 0:t[e];return i&&r?at(s,i==null?void 0:i.transitionChar)||i!=null&&i.maxLength&&(i==null?void 0:i.maxLength)<=(r==null?void 0:r.maxLength)?(this.rubberTransition.set(e),!1):(r.end&&this.match.is(s,e)&&!this.rubberTransition.isChar(e)&&(this.rubberItem.add(e),this.rubberTransition.reset()),!0):!1}pop(t){return this.rubberItem.pop(t)}reset(){return this.rubberItem.reset(),this.rubberTransition.reset(),this}initList(){const t=this.special.getRubberList();return this.type.isCurrencyOrNumber()?ht(this.format.getRubber(),t):t}}class zt extends m{constructor(t,e,s,i,r,u,h){super(()=>this.initMask()),a(this,"info"),this.props=t,this.type=e,this.rubberItem=s,this.characterLength=i,this.date=r,this.format=u,this.special=h,this.info=new m(()=>this.initInfo())}get(t){var e;return((e=this.getList())==null?void 0:e[t])??""}getInfo(){return this.info.getCache(this.getComparison())}getInfoBySelection(t){const e=this.getInfo();return e.find(s=>s.key>=t)??e[e.length-1]}getList(){return this.getCache(this.getComparison())}getByChar(t,e=-1){let s=e;return this.getList().forEach((i,r)=>{i===t&&r>=e&&(s=r)}),s}getLength(){return this.getList().length}getMaxLength(){const t=this.getMask();return F(t)?Ft(t):this.getList().length}getLengthBySpecial(){return this.getInfo().length}getQuantity(t,e){if(t===e)return 1;let s=0;for(let i=t;i<e;i++)this.special.isSpecial(this.get(i))&&s++;return s}getComparison(){var t,e,s,i,r,u;return[this.characterLength.get(),...this.rubberItem.getCode(),(t=this.props)==null?void 0:t.mask,(e=this.props)==null?void 0:e.special,(s=this.props)==null?void 0:s.fraction,(i=this.props)==null?void 0:i.currency,(r=this.props)==null?void 0:r.type,(u=this.props)==null?void 0:u.language]}getMask(){var t;return((t=this.props)==null?void 0:t.mask)??""}getMaskActive(){const t=this.getMask();return F(t)?t.find(e=>this.getSpecialLength(e)>=this.characterLength.get())||(t==null?void 0:t[t.length-1])||"":t}getBasic(){return this.rubberItem.expandMask(this.getMaskActive()).split("")}getSpecialLength(t){return t.split("").filter(e=>this.special.isSpecial(e)).length}initMask(){return this.type.isCurrencyOrNumber()?this.format.getMask():this.type.isDate()?this.date.getMask():this.getBasic()}initInfo(){const t=[];let e=0;return this.getList().forEach((s,i)=>{this.special.isSpecial(s)&&(t.push({index:e,key:i,char:s}),e++)}),t}}class qt{constructor(t,e){a(this,"value",0),a(this,"immediate",0),a(this,"shift",!1),this.special=t,this.mask=e}get(){return this.value}getFirst(){var t,e;return(e=(t=this.mask.getInfo())==null?void 0:t[0])==null?void 0:e.key}getFocus(){return this.getCharacter(this.value)}getNext(){return this.getCharacter(this.value+1)}getPrevious(){return this.getCharacter(this.value-1)}getImmediate(){return this.getCharacter(this.immediate)}getShift(){return this.shift?this.value>0?this.getCharacter(this.value-1)+1:0:this.getFocus()}set(t){return this.value=t,this}setByMask(t,e=!0){if(e){let s,i;this.mask.getInfo().forEach(r=>{s===void 0&&r.key>=t&&(s=r.index),r.key<=t&&(i=r.index)}),this.set(s!==void 0?s:this.mask.getLengthBySpecial()),this.setImmediate(i!==void 0?i:this.mask.getLengthBySpecial())}return this}setImmediate(t){return this.immediate=t,this}setShift(t){return this.shift=t,this}resetImmediate(){return this.immediate=this.value<=0?0:this.value-1,this}goBack(){return this.value>0&&this.value--,this}goNext(){return this.value<=this.mask.getLength()&&this.value++,this}getCharacter(t){for(const e of this.mask.getInfo())if(e.index>=t)return e.key;return this.mask.getLength()}}const x="~";class Qt{constructor(t,e,s,i,r,u){a(this,"value",[]),this.rubberItem=t,this.characterLength=e,this.special=s,this.rubber=i,this.mask=r,this.selection=u}is(){return this.value.length>0}isCharDelete(){const t=this.selection.get();return t in this.value&&this.value[t]===x}get(){return this.value}getFocus(){return this.mask.get(this.selection.getFocus())}getImmediate(){return this.mask.get(this.selection.getImmediate())}getNext(){return this.mask.get(this.selection.getNext())}add(t){return this.value.splice(this.selection.get(),this.isCharDelete()?1:0,t),this.selection.goNext().resetImmediate(),this.updateLength(),this}pop(){const t=this.selection.get()-1;return this.isSpecialNextAnother()?this.value[t]=x:(this.value.splice(t,1),this.updateLength()),this.selection.goBack().resetImmediate(),this}reset(){return this.value=[],this.selection.set(0).resetImmediate(),this.updateLength(),this}shift(t=1){return this.characterLength.set(this.value.length+t),this}isSpecialNextAnother(){const t=this.selection.get()-1,e=this.value.length;if(t>=0&&t<=e){const s=this.mask.getInfo(),i=s[t].char;if(!this.rubberItem.is(i)){for(let r=t;r<e;r++)if(r in s){const u=s[r].char;if(this.special.isSpecial(u)&&i!==u)return!0}}}return!1}updateLength(){return this.characterLength.set(this.value.length),this}}class Jt extends m{constructor(t,e,s,i){super(()=>this.initValue()),this.rubberTransition=t,this.mask=e,this.special=s,this.character=i}is(){return this.getLength()>0}get(){return this.getCache([...this.mask.getList(),...this.character.get()])}getChar(t){var e;return(e=this.get())==null?void 0:e[t]}getLength(){return this.get().length}initValue(){const t=this.character.get(),e=[];let s=0;for(const i of this.mask.getList())if(!this.special.isSpecial(i))e.push(i);else if(s in t){if(e.push(t[s++]),s>t.length&&this.rubberTransition.is()&&!this.rubberTransition.isChar(i))break}else break;return e.join("")}}class Xt{constructor(t,e,s,i,r,u){a(this,"info"),a(this,"valueFinal"),this.type=t,this.date=e,this.format=s,this.mask=i,this.special=r,this.valueBasic=u,this.info=new m(()=>this.initInfo()),this.valueFinal=new m(()=>this.initValue())}isFull(){for(const t of Object.values(this.getInfo()))if(!t.full)return!1;return!0}isEnd(){for(const t of Object.values(this.getInfo()))if(!t.end)return!1;return!0}isFullByGroup(t){var e;return((e=this.getInfoItem(t))==null?void 0:e.full)??!1}get(){return this.type.isCurrencyOrNumber()?this.format.getValueStandard(this.getInfo()):this.type.isDate()?this.isFull()?this.date.getValueStandard(this.getInfo()):"":this.valueFinal.getCache([...this.valueBasic.get()])}getForCheck(){const t=this.get();return{group:"check",value:t,maxLength:t.length,full:this.isFull(),end:this.isEnd(),chars:t.split("")}}getInfo(){return this.info.getCache([this.valueBasic.get(),...this.mask.getList()])}getInfoItem(t){var e;return(e=this.getInfo())==null?void 0:e[t]}isStandard(t){return!!this.valueBasic.getChar(t)}add(t,e){return e in t||(t[e]={group:e,value:"",maxLength:0,full:!1,end:!1,chars:[]}),t[e]}initInfo(){const t=this.valueBasic.get(),e={};return this.mask.getList().forEach((s,i)=>{if(this.special.isSpecial(s)){const r=this.add(e,s);this.isStandard(i)&&t[i]!==x&&r.chars.push(t[i]),r.maxLength++,r.value=r.full?r.chars.join(""):"",r.full=this.special.isDefault(s)||r.maxLength===r.chars.length,r.end=r.maxLength===r.chars.length}}),e}initValue(){const t=this.valueBasic.get().split(""),e=this.mask.getList();let s="";for(const i in e)if(i in t)s+=t[i];else{const r=this.special.getDefault(e[i]);r&&(s+=r)}return s}}class te{constructor(t,e){this.pattern=t,this.value=e}isError(t){var e;const s=(e=this.get())==null?void 0:e.group;return!!(s&&(s===t||s==="check"))}checkValidity(){return this.get()===void 0}get(){for(const t of Object.values(this.pattern.getInputList())){const e=this.value.getInfoItem(t.group);if(e&&e.full){const s=t.check(e.value);if(s&&!s.status)return s}}return this.getValidationCheck()}getMessage(){var t;return((t=this.get())==null?void 0:t.validationMessage)??""}getValidationCheck(){var t;if(this.value.isFull()){const e=this.value.getForCheck();if(this.pattern.isCheck()){const s=(t=this.pattern.getInput(e.group))==null?void 0:t.check(e.value);if(s&&!s.status)return s}return{value:e.value,required:!0}}return{value:this.value.get(),required:!1}}}const ee="_";class se{constructor(t,e,s,i,r,u,h,l,d,p="is-character"){this.props=t,this.type=e,this.date=s,this.format=i,this.special=r,this.rubber=u,this.mask=h,this.valueBasic=l,this.validation=d,this.className=p}get(){const t=[],e=this.valueBasic.get();return this.mask.getList().forEach((s,i)=>{const r=e==null?void 0:e[i];t.push({className:`${this.className} ${this.className}--${this.getStatus(s,r)}`,value:this.getValue(s,r)})}),t}getInput(){const t=[],e=this.mask.getList();return this.valueBasic.get().split("").forEach((s,i)=>{s===x?t.push(this.getSpecialToView((e==null?void 0:e[i])??"")??s):t.push(s)}),t.join("")}isValue(t){return!!(t&&t!==x)}getStatus(t,e){return this.isValue(e)?this.special.isSpecial(t)?this.validation.isError(t)?"error":"special":"standard":this.rubber.isTransition(t)?"transition":"placeholder"}getValue(t,e){return this.isValue(e)?e:this.getSpecialToView(t)}getSpecialToView(t){var e;return this.special.isSpecial(t)?this.getViewChar(t)??this.special.getView(t)??((e=this.props)==null?void 0:e.view)??ee:t}getViewChar(t){if(this.type.isDate())return this.date.getView(t);if(this.type.isCurrencyOrNumber())return this.format.getView()}}class ie{constructor(t,e){a(this,"type"),a(this,"event"),this.validation=t,this.callbackEvent=e}isValue(){return!!(this.type&&["input","change"].indexOf(this.type)>=0)}go(){if(this.type&&this.event){const t=this.isValue()?this.validation.get():void 0;this.callbackEvent(this.type,this.event,t)}return this}set(t,e){return this.setType(t),this.setEvent(e),this}setType(t){return this.type=t,this}setEvent(t){return this.event=t,this}reset(){return this.resetType(),this.resetEvent(),this}resetType(){return this.type=void 0,this}resetEvent(){return this.event=void 0,this}}class re{constructor(t,e,s,i,r,u,h,l,d,p,y,M,ot,lt,ct){this.type=t,this.buffer=e,this.focus=s,this.rubberTransition=i,this.date=r,this.special=u,this.match=h,this.rubber=l,this.mask=d,this.selection=p,this.character=y,this.valueBasic=M,this.value=ot,this.emit=lt,this.element=ct}add(t,e,s=!0){let i=!1;return this.selection.setByMask(t,s),this.rubberTransition.reset(),kt(e).forEach(r=>{const u=this.character.getFocus(),h=this.character.getImmediate();this.selection.setShift(this.rubber.update(this.value.getInfo(),h,r)),this.rubberTransition.is()?this.selection.setByMask(this.mask.getByChar(this.rubberTransition.get(),this.selection.getImmediate())+1,s):this.match.is(r,u)&&(this.character.shift(),this.character.getFocus()&&(this.mask.getMaxLength()>this.valueBasic.getLength()||this.character.isCharDelete())&&(this.character.add(r),i=!0))}),this.goSelection(),i}pop(t,e=t,s=!0){if(t>=0&&e<=this.mask.getMaxLength()){let i=this.mask.getQuantity(t,e);for(s&&this.selection.setByMask(e);i--;)this.rubberTransition.reset(),this.character.pop(),this.character.shift(0),this.selection.setShift(this.rubber.pop(this.character.getFocus()));this.goSelection()}return this}reset(t=""){if(this.character.reset(),this.rubber.reset(),Mt(t)){const e=this.type.isDate()?this.date.getValue(t):t;this.add(0,this.extra(e.split("")))}return this}extra(t){var e,s;if(this.character.is())return t;const i=this.mask.getList(),r=[...t];let u=this.match.get((s=(e=this.mask.getInfo())==null?void 0:e[0])==null?void 0:s.char),h=0;if(u)for(const l in i){const d=i[l];if(this.special.isSpecial(d)){for(let p=h;p<r.length&&(h++,!r[p].match(u));p++);u=this.match.get(d)}else if(d.match(u)){let p=!1;for(let y=h;y<r.length;y++){const M=r[y];if(h++,M.match(u)){d===M?(r.splice(y,1),h--):p=!0;break}}if(p)break}}return r}goSelection(t=!0){return this.focus.is()&&requestAnimationFrame(()=>{if(this.element.value&&(!t||!this.goBuffer())){const e=this.valueBasic.getLength(),s=this.selection.getShift(),i=e<s?e:s;this.element.value.selectionEnd=i,this.element.value.selectionStart=i}}),this}goBuffer(){return this.buffer.is()?(this.add(this.selection.getShift(),this.buffer.get()),this.buffer.resetChars(),!0):(this.buffer.reset(),this.emit.go(),!1)}}class ne{constructor(t,e,s,i,r,u,h,l,d){a(this,"change",!1),a(this,"unidentified"),this.buffer=t,this.focus=e,this.characterLength=s,this.right=i,this.selection=r,this.valueBasic=u,this.validation=h,this.emit=l,this.data=d}onFocus(t){this.change=!1,this.focus.in(),this.emit.set("focus",t).go()}onBlur(t){this.change&&this.emit.setType("change").go(),this.focus.out(),this.emit.set("blur",t).go()}onKeydown(t){const e=this.getSelectionInfo(t),{start:s,end:i}=e;this.emit.set("keydown",t).go(),!this.isMetaKey(t)&&(this.isKey(t)?t.key==="Backspace"?(s>0||s!==i)&&this.data.pop(s,i):t.key.length<=1&&(s===i?this.buffer.go(t.key)&&this.data.add(s,t.key):(this.buffer.goStart(),this.data.pop(s,i).add(this.selection.getShift(),t.key))):this.unidentified=e)}onKeyup(t){this.emit.set("keyup",t).go(),!this.isMetaKey(t)&&this.isKey(t)&&["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"].indexOf(t.key)>=0&&(this.makeToEnd(t),this.makeToStart(t))}onBeforeinput(t){this.emit.set("beforeinput",t).go(),this.unidentified||(this.makeChange(t),Ct(t))}onInput(t){if(this.unidentified){const e=t.target;(this.unidentified.length>e.value.length||this.unidentified.start!==this.unidentified.end)&&this.data.pop(this.unidentified.start,this.unidentified.end),"data"in t?t.data&&this.buffer.go(t.data)&&this.data.add(this.unidentified.start,t.data):this.data.reset(e.value),this.makeChange(t),this.unidentified=void 0}}onPaste(t){const{start:e,end:s}=this.getSelectionInfo(t);Vt(t).then(i=>{const r=i.split("");e===s?this.data.add(e,this.data.extra(r)):this.data.pop(e,s).add(this.selection.getShift(),this.data.extra(r)),this.change=!0,this.emit.set("paste",t).go()}).catch(i=>console.error("getClipboardData",i))}onChange(t){const e=t.target;this.data.reset(e.value),this.emit.set("change",t).go()}onClick(t){this.makeToEnd(t),this.makeToStart(t)}isMetaKey(t){return t.metaKey||t.altKey||t.ctrlKey}isKey(t){return"key"in t&&t.key!=="Unidentified"}getSelectionInfo(t){const e=t.target;return{target:e,start:e.selectionStart??0,end:e.selectionEnd??0,length:e.value.length}}makeChange(t){this.change=!0,this.emit.set("input",t),!this.buffer.is()&&(this.emit.go(),this.emit.resetType())}makeToEnd(t){if(this.right.isRight()){const e=this.valueBasic.getLength(),{target:s,start:i,end:r}=this.getSelectionInfo(t);i>e&&(s.selectionStart=e),r>e&&(s.selectionEnd=e)}}makeToStart(t){const e=this.selection.getFirst(),{target:s,start:i}=this.getSelectionInfo(t);i<e&&(s.selectionStart=e,s.selectionEnd=e)}}class ae{constructor(t,e,s,i="is-character"){a(this,"type"),a(this,"buffer"),a(this,"focus"),a(this,"rubberItem"),a(this,"rubberTransition"),a(this,"characterLength"),a(this,"date"),a(this,"format"),a(this,"special"),a(this,"match"),a(this,"pattern"),a(this,"right"),a(this,"rubber"),a(this,"item"),a(this,"selection"),a(this,"character"),a(this,"valueBasic"),a(this,"value"),a(this,"validation"),a(this,"view"),a(this,"emit"),a(this,"data"),a(this,"event"),a(this,"oldValue",""),this.type=new At(t),this.buffer=new $t,this.focus=new Ot(this.buffer),this.rubberItem=new Rt,this.rubberTransition=new Pt,this.characterLength=new Wt,this.date=new jt(t,this.type),this.format=new Ut(t,this.type,this.rubberItem),this.special=new Yt(t,this.type,this.format),this.match=new Ht(t,this.special),this.pattern=new _t(t,this.type,this.date,this.special),this.right=new Zt(t,this.type),this.rubber=new Gt(t,this.type,this.rubberItem,this.rubberTransition,this.special,this.match,this.format),this.item=new zt(t,this.type,this.rubberItem,this.characterLength,this.date,this.format,this.special),this.selection=new qt(this.special,this.item),this.character=new Qt(this.rubberItem,this.characterLength,this.special,this.rubber,this.item,this.selection),this.valueBasic=new Jt(this.rubberTransition,this.item,this.special,this.character),this.value=new Xt(this.type,this.date,this.format,this.item,this.special,this.valueBasic),this.validation=new te(this.pattern,this.value),this.view=new se(t,this.type,this.date,this.format,this.special,this.rubber,this.item,this.valueBasic,this.validation,i),this.emit=new ie(this.validation,s),this.data=new re(this.type,this.buffer,this.focus,this.rubberTransition,this.date,this.special,this.match,this.rubber,this.item,this.selection,this.character,this.valueBasic,this.value,this.emit,e),this.event=new ne(this.buffer,this.focus,this.characterLength,this.right,this.selection,this.valueBasic,this.validation,this.emit,this.data),t!=null&&t.value&&(this.oldValue=O(t==null?void 0:t.value),this.data.reset(this.oldValue))}getValueBasic(){if(this.right.isRight()){let t="";return this.view.get().forEach(e=>{t+=e.value}),t}return this.view.getInput()}getClasses(){return{"??--value":this.characterLength.is(),"??--end":this.right.isEnd()}}goSelection(){return this.data.goSelection(!1),this}reset(t){const e=O(t);return this.oldValue!==e?(this.oldValue=e,this.data.reset(e),this.emit.set("reset",{}).go(),!0):!1}}class ue{constructor(t,e,s,i="is-character"){a(this,"mask"),a(this,"valueBasic",C("")),a(this,"value",C("")),a(this,"view",C([])),a(this,"classes",C({})),a(this,"onFocus",r=>this.mask.event.onFocus(r)),a(this,"onBlur",r=>this.mask.event.onBlur(r)),a(this,"onKeydown",r=>this.mask.event.onKeydown(r)),a(this,"onKeyup",r=>this.mask.event.onKeyup(r)),a(this,"onBeforeinput",r=>this.mask.event.onBeforeinput(r)),a(this,"onInput",r=>this.mask.event.onInput(r)),a(this,"onChange",r=>this.mask.event.onChange(r)),a(this,"onPaste",r=>this.mask.event.onPaste(r)),a(this,"onClick",r=>this.mask.event.onClick(r)),this.mask=new ae(t,e,(r,u,h)=>{r==="input"&&this.updateValue(),s(r,u,h)},i),yt(()=>{this.mask.reset(t==null?void 0:t.value),this.updateValue()})}updateValue(){const t=this.mask.getValueBasic(),e=t!==this.valueBasic.value;return this.valueBasic.value=t,this.value.value=this.mask.value.get(),this.view.value=this.mask.view.get(),e&&this.mask.goSelection(),this.classes.value=this.mask.getClasses(),this}}class he extends ft{constructor(t,e,s){super(t,e,s),a(this,"mask"),this.mask=new ue(e,this.element,(i,r,u)=>{var h;(h=this.emits)==null||h.call(this,i,r,u)},this.getSubClass(["character","item"])),this.init()}renderData(){var t;const e=this.setup();if((t=this.props)!=null&&t.name)return b("input",{type:"hidden",name:this.props.name,value:e.value.value})}renderInput(){const t=this.setup();return b("input",{ref:this.element,class:t.classes.value.input,value:t.valueBasic.value,onFocus:t.onFocus,onBlur:t.onBlur,onKeydown:t.onKeydown,onKeyup:t.onKeyup,onBeforeinput:t.onBeforeinput,onInput:t.onInput,onChange:t.onChange,onPaste:t.onPaste,onClick:t.onClick})}renderView(){const t=this.setup(),e=t.view.value;if(e.length>0){const s=[];return e.forEach((i,r)=>{s.push(b("span",{key:r,class:i.className},i.value))}),b("span",{class:t.classes.value.character},s)}return b("span",{class:t.classes.value.character,innerHTML:"&nbsp;"})}makeOptions(){return this}initSetup(){return{valueBasic:this.mask.valueBasic,value:this.mask.value,view:this.mask.view,onFocus:this.mask.onFocus,onBlur:this.mask.onBlur,onKeydown:this.mask.onKeydown,onKeyup:this.mask.onKeyup,onBeforeinput:this.mask.onBeforeinput,onInput:this.mask.onInput,onChange:this.mask.onChange,onPaste:this.mask.onPaste,onClick:this.mask.onClick}}initExpose(){return{}}initClasses(){return{main:{...this.toClassName(this.mask.classes.value)},input:this.getSubClass("input"),character:this.getSubClass("character"),characterItem:this.getSubClass("character__item")}}initStyles(){return{}}initRender(){const t=this.setup(),e=[this.renderData(),this.renderInput(),this.renderView()];return b("label",{...this.getAttrs(),class:t.classes.value.main},e)}}const g={special:"*",match:/[0-9]/,type:"text",view:"_"},oe={type:{type:String,default:g==null?void 0:g.type},name:String,value:[String,Number],mask:[String,Array],special:{type:[String,Array,Object],default:g==null?void 0:g.special},match:{type:[String,RegExp],default:g==null?void 0:g.match},pattern:Object,check:Object,fraction:[String,Boolean,Number],currency:String,language:String,view:{type:String,default:g==null?void 0:g.view},visible:Boolean,right:Boolean,dir:String},le={dir:["ltr","rtl"]},ce={...oe,visible:Boolean,right:Boolean,dir:String},de=dt({name:"M3Mask",__name:"M3Mask",props:{...ce},emits:["focus","blur","keydown","keyup","beforeinput","input","change","paste","reset"],setup(n,{expose:t,emit:e}){const s=e,i=n,r=$(()=>({main:{"m3-mask":!0,"m3-mask--visible":i.visible,"m3-mask--right":i.right,[`m3-mask--dir--${i.dir}`]:bt(le.dir,i.dir)}})),u=$(()=>({})),h=new he("m3.mask",i,{emits:s,classes:r,styles:u}),l=h.render();return t(h.expose()),(d,p)=>(pt(),gt(mt(vt(l))))}}),v=de,pe="Это готовая маска для ввода числа. Через свойство fraction можно указывать количество остатков. Если fraction равно true, остаток будет резервным.",ge={type:{control:o.select,options:["text","number","currency","datetime","date","year-month","time","hour-minute"],table:{category:c.value,defaultValue:{summary:"text"},type:{summary:"string"}}},name:{control:o.text,table:{category:c.value,type:{summary:"string"}}},value:{control:o.text,table:{category:c.value,type:{summary:"string"}}},mask:{control:o.text,table:{category:c.value,type:{summary:"string"}}},special:{control:o.text,table:{category:c.value,defaultValue:{summary:"*"},type:{summary:"string"}},description:"Символ, который определяет символ для замены"},match:{control:o.text,table:{category:c.value,defaultValue:{summary:"/[0-9]/"},type:{summary:"string"}},description:"Регулярное выражение, проверяющее вводимый символ. Если вводимый символ соответствует условию, символ пропускается"},pattern:{control:o.object,table:{category:c.value,type:{summary:"string | object"}},description:"Объект со свойством значения из HTMLInputElement. Используется для проверки правильности вводимых данных. Если входные данные - это строка, вставляется в поле pattern у input"},check:{control:o.text,table:{category:c.value,type:{summary:"string"}},description:"Регулярное выражение для проверки полных вводимых данных"},fraction:{control:o.number,table:{category:"Number",type:{summary:"number"}},description:"Указывает количество символов остатка у числа. Работает только для типа число"},currency:{control:o.text,table:{category:"Number",type:{summary:"string"}},description:"Тип валюты. Работает только для типа валюты"},language:{control:o.text,table:{category:c.style,type:{summary:"string"}},description:"[<b>Только для теста</b>] Язык форматирования. По умолчанию форматирование маски будет ориентироваться по полю lang в теге html"},view:{control:o.text,table:{category:c.style,defaultValue:{summary:"_"},type:{summary:"string"}},description:"Символ замены для тех мест, где пользователь еще не ввел данные"},visible:{control:o.boolean,table:{category:c.style,type:{summary:"boolean"}},description:"Скрывает часть маски, где пользователь еще не ввел данные"},right:{control:o.boolean,table:{category:c.style,type:{summary:"boolean"}},description:"Выравнивает текст направо"}},me={type:"text",name:void 0,value:void 0,mask:"+7 (***) **-**-**"},ve=pe,ye=ge,be=me,Te={title:"M3/Mask",component:v,tags:["autodocs"],parameters:{design:"m3",docs:{description:{component:ve}}},argTypes:ye,args:be},w={render:n=>({components:{M3Mask:v},setup(){return{args:n}},template:`
      <m3-mask v-bind="args" style="border: 1px solid rgba(0, 0, 0, .12); padding: 4px 8px;"/>
    `})},B={name:"Number",parameters:{docs:{description:{story:"<p>Это готовая маска для ввода числа. Через свойство fraction можно указывать количество остатков. Если fraction равно true, остаток будет резервным."}}},render:n=>({components:{M3Mask:v},setup(){return{args:n}},template:`
      <div>
        <div>
          <div class="m3-font--bodyMedium">EN</div>
          <m3-mask
            v-bind="args"
            type="number"
            language="en"
            style="border: 1px solid rgba(0, 0, 0, .12); padding: 4px 8px; width: 160px;"
          />
        </div>
        <div style="padding-top: 16px;">
          <div class="m3-font--bodyMedium">RU</div>
          <m3-mask
            v-bind="args"
            type="number"
            language="ru"
            style="border: 1px solid rgba(0, 0, 0, .12); padding: 4px 8px; width: 160px;"
          />
        </div>
        <div style="padding-top: 16px;">
          <div class="m3-font--bodyMedium">VN</div>
          <m3-mask
            v-bind="args"
            type="number"
            language="vn"
            style="border: 1px solid rgba(0, 0, 0, .12); padding: 4px 8px; width: 160px;"
          />
        </div>
      </div>
    `})},S={name:"Currency",parameters:{docs:{description:{story:"Это готовая маска для ввода цены. Через свойство currency можно указывать валюту. Если не указать currency, то будет вести как тип number"}}},render:n=>({components:{M3Mask:v},setup(){return{args:n}},template:`
      <div>
        <div>
          <div class="m3-font--bodyMedium">USD</div>
          <m3-mask
            v-bind="args"
            type="currency"
            currency="USD"
            style="border: 1px solid rgba(0, 0, 0, .12); padding: 4px 8px; width: 160px;"
          />
        </div>
        <div style="padding-top: 16px;">
          <div class="m3-font--bodyMedium">RUB</div>
          <m3-mask
            v-bind="args"
            type="currency"
            currency="RUB"
            style="border: 1px solid rgba(0, 0, 0, .12); padding: 4px 8px; width: 160px;"
          />
        </div>
        <div style="padding-top: 16px;">
          <div class="m3-font--bodyMedium">VND</div>
          <m3-mask
            v-bind="args"
            type="currency"
            currency="VND"
            style="border: 1px solid rgba(0, 0, 0, .12); padding: 4px 8px; width: 160px;"
          />
        </div>
      </div>
    `})},D={name:"Datetime",parameters:{docs:{description:{story:"Есть несколько типов для ввода даты: datetime, date, year-month, time, hour-minute."}}},render:n=>({components:{M3Mask:v},setup(){return{args:n}},template:`
      <div style="display: flex; gap: 16px;">
        <div>
          <div>
            <div class="m3-font--bodyMedium">datetime</div>
            <m3-mask
              v-bind="args"
              type="datetime"
              style="border: 1px solid rgba(0, 0, 0, .12); padding: 4px 8px; width: 200px;"
            />
          </div>
          <div style="padding-top: 16px;">
            <div class="m3-font--bodyMedium">date</div>
            <m3-mask
              v-bind="args"
              type="date"
              style="border: 1px solid rgba(0, 0, 0, .12); padding: 4px 8px; width: 200px;"
            />
          </div>
          <div style="padding-top: 16px;">
            <div class="m3-font--bodyMedium">year-month</div>
            <m3-mask
              v-bind="args"
              type="year-month"
              style="border: 1px solid rgba(0, 0, 0, .12); padding: 4px 8px; width: 200px;"
            />
          </div>
          <div style="padding-top: 16px;">
            <div class="m3-font--bodyMedium">time</div>
            <m3-mask
              v-bind="args"
              type="time"
              style="border: 1px solid rgba(0, 0, 0, .12); padding: 4px 8px; width: 200px;"
            />
          </div>
          <div style="padding-top: 16px;">
            <div class="m3-font--bodyMedium">hour-minute</div>
            <m3-mask
              v-bind="args"
              type="hour-minute"
              style="border: 1px solid rgba(0, 0, 0, .12); padding: 4px 8px; width: 200px;"
            />
          </div>
        </div>
        <div>
          <div>
            <div class="m3-font--bodyMedium">US</div>
            <m3-mask
              v-bind="args"
              type="date"
              language="US"
              style="border: 1px solid rgba(0, 0, 0, .12); padding: 4px 8px; width: 160px;"
            />
          </div>
          <div style="padding-top: 16px;">
            <div class="m3-font--bodyMedium">RU</div>
            <m3-mask
              v-bind="args"
              type="date"
              language="RU"
              style="border: 1px solid rgba(0, 0, 0, .12); padding: 4px 8px; width: 160px;"
            />
          </div>
          <div style="padding-top: 16px;">
            <div class="m3-font--bodyMedium">VN</div>
            <m3-mask
              v-bind="args"
              type="date"
              language="VN"
              style="border: 1px solid rgba(0, 0, 0, .12); padding: 4px 8px; width: 160px;"
            />
          </div>
        </div>
      </div>
    `})},I={name:"Multi mask",parameters:{docs:{description:{story:"Свойство mask можно передавать несколько масок в виде массива. Маска будет меняться между ними в зависимости от количества вводимых символов."}}},render:n=>({components:{M3Mask:v},setup(){return{args:n}},template:`
      <m3-mask
        v-bind="args"
        :mask="['+7 (***) **-**-**', '+84 *** ***-****', '+84 *** ***-***-**']"
        style="border: 1px solid rgba(0, 0, 0, .12); padding: 4px 8px; width: 200px;"
      />
    `})},L={name:"Group",parameters:{docs:{description:{story:"Можно передать в свойство special объект для настройки маски с разными группами вводимых символов. Например, нужно сделать маску, где первые 4 символа - это буквы, а последние 6 - числа."}}},render:n=>({components:{M3Mask:v},setup(){return{args:n}},template:`
      <m3-mask
        v-bind="args"
        mask="####-******"
        :special="{
          '#': {
            match: /[a-z]/,
            view: 'A'
          },
          '*': {
            match: /[0-9]/,
            view: '0'
          }
        }"
        style="border: 1px solid rgba(0, 0, 0, .12); padding: 4px 8px; width: 200px;"
      />
    `})};var K,j,U;w.parameters={...w.parameters,docs:{...(K=w.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      M3Mask
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <m3-mask v-bind="args" style="border: 1px solid rgba(0, 0, 0, .12); padding: 4px 8px;"/>
    \`
  })
}`,...(U=(j=w.parameters)==null?void 0:j.docs)==null?void 0:U.source}}};var Y,H,_;B.parameters={...B.parameters,docs:{...(Y=B.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'Number',
  parameters: {
    docs: {
      description: {
        story: '<p>Это готовая маска для ввода числа. ' + 'Через свойство fraction можно указывать количество остатков. ' + 'Если fraction равно true, остаток будет резервным.'
      }
    }
  },
  render: (args: any) => ({
    components: {
      M3Mask
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div>
        <div>
          <div class="m3-font--bodyMedium">EN</div>
          <m3-mask
            v-bind="args"
            type="number"
            language="en"
            style="border: 1px solid rgba(0, 0, 0, .12); padding: 4px 8px; width: 160px;"
          />
        </div>
        <div style="padding-top: 16px;">
          <div class="m3-font--bodyMedium">RU</div>
          <m3-mask
            v-bind="args"
            type="number"
            language="ru"
            style="border: 1px solid rgba(0, 0, 0, .12); padding: 4px 8px; width: 160px;"
          />
        </div>
        <div style="padding-top: 16px;">
          <div class="m3-font--bodyMedium">VN</div>
          <m3-mask
            v-bind="args"
            type="number"
            language="vn"
            style="border: 1px solid rgba(0, 0, 0, .12); padding: 4px 8px; width: 160px;"
          />
        </div>
      </div>
    \`
  })
}`,...(_=(H=B.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};var Z,G,z;S.parameters={...S.parameters,docs:{...(Z=S.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'Currency',
  parameters: {
    docs: {
      description: {
        story: 'Это готовая маска для ввода цены. ' + 'Через свойство currency можно указывать валюту. ' + 'Если не указать currency, то будет вести как тип number'
      }
    }
  },
  render: (args: any) => ({
    components: {
      M3Mask
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div>
        <div>
          <div class="m3-font--bodyMedium">USD</div>
          <m3-mask
            v-bind="args"
            type="currency"
            currency="USD"
            style="border: 1px solid rgba(0, 0, 0, .12); padding: 4px 8px; width: 160px;"
          />
        </div>
        <div style="padding-top: 16px;">
          <div class="m3-font--bodyMedium">RUB</div>
          <m3-mask
            v-bind="args"
            type="currency"
            currency="RUB"
            style="border: 1px solid rgba(0, 0, 0, .12); padding: 4px 8px; width: 160px;"
          />
        </div>
        <div style="padding-top: 16px;">
          <div class="m3-font--bodyMedium">VND</div>
          <m3-mask
            v-bind="args"
            type="currency"
            currency="VND"
            style="border: 1px solid rgba(0, 0, 0, .12); padding: 4px 8px; width: 160px;"
          />
        </div>
      </div>
    \`
  })
}`,...(z=(G=S.parameters)==null?void 0:G.docs)==null?void 0:z.source}}};var q,Q,J;D.parameters={...D.parameters,docs:{...(q=D.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Datetime',
  parameters: {
    docs: {
      description: {
        story: 'Есть несколько типов для ввода даты: datetime, date, year-month, time, hour-minute.'
      }
    }
  },
  render: (args: any) => ({
    components: {
      M3Mask
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="display: flex; gap: 16px;">
        <div>
          <div>
            <div class="m3-font--bodyMedium">datetime</div>
            <m3-mask
              v-bind="args"
              type="datetime"
              style="border: 1px solid rgba(0, 0, 0, .12); padding: 4px 8px; width: 200px;"
            />
          </div>
          <div style="padding-top: 16px;">
            <div class="m3-font--bodyMedium">date</div>
            <m3-mask
              v-bind="args"
              type="date"
              style="border: 1px solid rgba(0, 0, 0, .12); padding: 4px 8px; width: 200px;"
            />
          </div>
          <div style="padding-top: 16px;">
            <div class="m3-font--bodyMedium">year-month</div>
            <m3-mask
              v-bind="args"
              type="year-month"
              style="border: 1px solid rgba(0, 0, 0, .12); padding: 4px 8px; width: 200px;"
            />
          </div>
          <div style="padding-top: 16px;">
            <div class="m3-font--bodyMedium">time</div>
            <m3-mask
              v-bind="args"
              type="time"
              style="border: 1px solid rgba(0, 0, 0, .12); padding: 4px 8px; width: 200px;"
            />
          </div>
          <div style="padding-top: 16px;">
            <div class="m3-font--bodyMedium">hour-minute</div>
            <m3-mask
              v-bind="args"
              type="hour-minute"
              style="border: 1px solid rgba(0, 0, 0, .12); padding: 4px 8px; width: 200px;"
            />
          </div>
        </div>
        <div>
          <div>
            <div class="m3-font--bodyMedium">US</div>
            <m3-mask
              v-bind="args"
              type="date"
              language="US"
              style="border: 1px solid rgba(0, 0, 0, .12); padding: 4px 8px; width: 160px;"
            />
          </div>
          <div style="padding-top: 16px;">
            <div class="m3-font--bodyMedium">RU</div>
            <m3-mask
              v-bind="args"
              type="date"
              language="RU"
              style="border: 1px solid rgba(0, 0, 0, .12); padding: 4px 8px; width: 160px;"
            />
          </div>
          <div style="padding-top: 16px;">
            <div class="m3-font--bodyMedium">VN</div>
            <m3-mask
              v-bind="args"
              type="date"
              language="VN"
              style="border: 1px solid rgba(0, 0, 0, .12); padding: 4px 8px; width: 160px;"
            />
          </div>
        </div>
      </div>
    \`
  })
}`,...(J=(Q=D.parameters)==null?void 0:Q.docs)==null?void 0:J.source}}};var X,tt,et;I.parameters={...I.parameters,docs:{...(X=I.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'Multi mask',
  parameters: {
    docs: {
      description: {
        story: 'Свойство mask можно передавать несколько масок в виде массива. Маска будет меняться между ними в зависимости от количества вводимых символов.'
      }
    }
  },
  render: (args: any) => ({
    components: {
      M3Mask
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <m3-mask
        v-bind="args"
        :mask="['+7 (***) **-**-**', '+84 *** ***-****', '+84 *** ***-***-**']"
        style="border: 1px solid rgba(0, 0, 0, .12); padding: 4px 8px; width: 200px;"
      />
    \`
  })
}`,...(et=(tt=I.parameters)==null?void 0:tt.docs)==null?void 0:et.source}}};var st,it,rt;L.parameters={...L.parameters,docs:{...(st=L.parameters)==null?void 0:st.docs,source:{originalSource:`{
  name: 'Group',
  parameters: {
    docs: {
      description: {
        story: 'Можно передать в свойство special объект для настройки маски с разными группами вводимых символов. ' + 'Например, нужно сделать маску, где первые 4 символа - это буквы, а последние 6 - числа.'
      }
    }
  },
  render: (args: any) => ({
    components: {
      M3Mask
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <m3-mask
        v-bind="args"
        mask="####-******"
        :special="{
          '#': {
            match: /[a-z]/,
            view: 'A'
          },
          '*': {
            match: /[0-9]/,
            view: '0'
          }
        }"
        style="border: 1px solid rgba(0, 0, 0, .12); padding: 4px 8px; width: 200px;"
      />
    \`
  })
}`,...(rt=(it=L.parameters)==null?void 0:it.docs)==null?void 0:rt.source}}};const Ne=["Mask","MaskNumber","MaskCurrency","MaskDatetime","MaskMultiMask","MaskGroup"];export{w as Mask,S as MaskCurrency,D as MaskDatetime,L as MaskGroup,I as MaskMultiMask,B as MaskNumber,Ne as __namedExportsOrder,Te as default};
