"use strict";(self.webpackChunkformula1=self.webpackChunkformula1||[]).push([[92],{2092:function(e,t,n){n.r(t),n.d(t,{default:function(){return V}});var r=n(1413),a=n(885),c=n(2791),s={"main-container":"schedule_main-container__p11IS","active-main-container":"schedule_active-main-container__4EbVX",country:"schedule_country__ahDI0",day:"schedule_day__cAkq-",month:"schedule_month__PZn5U"},i={"image-container":"flag_image-container__Hgy6E","left-flag":"flag_left-flag__YWM2P"},o=n(5531),u=n(184);var l=function(e){return(0,u.jsx)("div",{className:i[e.classname],children:(0,u.jsx)("img",{src:o.Z[e.imageBase],alt:"".concat(e.imageBase,"-flag"),loading:"lazy"})})},d=n(6137),h="activeSchedule_wrapper__GdwKw",m="activeSchedule_content-container__DtuVf",f="activeSchedule_country__9PPS8",p="activeSchedule_gp-name__K6iF+",v="activeSchedule_weekend-duration__bDCij",_=n(3653),g="clock_clock-banner-container__BhX3u",x="clock_clock__tnFbD",j="clock_time-container__mTmsC",y="clock_thicking__0KbCz";var b=function(){var e=(new Date).getHours(),t=(new Date).getMinutes();+e<10&&(e="0".concat(e)),+t<10&&(t="0".concat(t));var n="".concat(e," : ").concat(t),r=(0,c.useState)(n),s=(0,a.Z)(r,2),i=s[0],o=s[1];return(0,c.useEffect)((function(){var e=setTimeout((function(){var e=(new Date).getHours(),t=(new Date).getMinutes();+e<10&&(e="0".concat(e)),+t<10&&(t="0".concat(t));var n="".concat(e," : ").concat(t);o(n)}),6e4);return function(){clearTimeout(e)}}),[i]),(0,u.jsxs)("div",{className:g,children:[(0,u.jsx)("div",{className:x,children:(0,u.jsx)("img",{src:_,alt:"clock"})}),(0,u.jsxs)("div",{className:j,children:[(0,u.jsx)("p",{children:"Your Time"}),(0,u.jsx)("p",{className:y,children:i})]})]})},w="raceTime_race-time-container__kOR0l",k="raceTime_left-td__5+hi9",N="raceTime_right-td__rXC6f";var C=function(e){if(null!==e){var t=new Date(e).getUTCHours(),n=new Date(e).getHours(),r=new Date(e).getUTCMinutes(),a=new Date(e).getMinutes();return t=t<10?"0".concat(t):t,n=n<10?"0".concat(n):n,r=r<10?"0".concat(r):r,a=a<10?"0".concat(a):a,["".concat(t,":").concat(r),"".concat(n,":").concat(a)]}return["",""]};var Z=function(e){var t=C(e.raceStartUTC),n=(0,a.Z)(t,2),r=n[0],c=n[1];return(0,u.jsx)("table",{className:w,children:(0,u.jsxs)("tbody",{children:[(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{className:k,children:"Race"}),(0,u.jsx)("td",{className:N})]}),(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{className:k,children:"Your Local Time"}),(0,u.jsx)("td",{className:N,children:c})]}),(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{className:k,children:"GMT Time"}),(0,u.jsx)("td",{className:N,children:r})]})]})})};var D=function(e){var t="formula 1 ".concat(e.raceName," ").concat(e.season).toUpperCase();return(0,u.jsxs)("div",{className:h,children:[(0,u.jsxs)("div",{className:m,children:[(0,u.jsx)(l,{classname:e.classname,imageBase:e.imageBase}),(0,u.jsx)("h5",{className:f,children:e.country}),(0,u.jsx)("h2",{className:p,children:t}),(0,u.jsx)("h6",{className:v,children:e.weekend})]}),(0,u.jsx)(b,{}),(0,u.jsx)(Z,{raceStartUTC:e.raceStartUTC})]})};var S=function(e){var t=(0,d.Z)(e),n="main-container";return n=e._id===e.activeId?"active-main-container":"main-container",(0,u.jsx)("div",{id:e._id,className:s[n],onClick:e.clickHandler,children:"main-container"===n?(0,u.jsxs)(c.Fragment,{children:[(0,u.jsx)(l,{classname:"image-container",imageBase:t.imageBase}),(0,u.jsx)("h3",{className:s.country,children:t.country}),(0,u.jsx)("h1",{className:s.day,children:t.day}),(0,u.jsx)("h3",{className:s.month,children:t.month})]}):(0,u.jsx)(D,(0,r.Z)((0,r.Z)({},t),{},{classname:"left-flag"}))})},T="slider_slider__kkUeU";var E=function(e){return(0,u.jsx)("div",{className:T,children:e.children})},U=n(1092),I=n(1125),B=n(5861),F=n(7757),M=n.n(F),H=n(3545);var A=function(){var e=(0,c.useState)({schedule:null,error:null,hasError:null}),t=(0,a.Z)(e,2),n=t[0],r=t[1];return(0,c.useEffect)((function(){function e(){return(e=(0,B.Z)(M().mark((function e(){var t,n;return M().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H.Z.getFullSchedule();case 3:if((t=e.sent).ok){e.next=6;break}throw new Error("Failed to fetch schedule!!!");case 6:return e.next=8,t.json();case 8:if(!((n=e.sent).length<15)){e.next=11;break}throw new Error("Could not get full schedule!!!");case 11:r({schedule:n,error:null,hasError:null}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),r({schedule:null,error:e.t0.message,hasError:!0});case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),n};var L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=(new Date).getTime();if(e.length>0){var n=e.find((function(e){return new Date(e.date).getTime()>t}));return n._id}return[]},P="scheduleWrapper_schedule__V5VbI";var V=function(){var e,t=A(),n=(0,c.useState)({activeId:"",fetch:!1}),s=(0,a.Z)(n,2),i=s[0],o=s[1];function l(e){o((0,r.Z)((0,r.Z)({},i),{},{activeId:e.target.id}))}return t.schedule&&!1===i.fetch&&(e=L(t.schedule)),(0,c.useEffect)((function(){e&&o({activeId:e,fetch:!0})}),[e]),t.error&&t.hasError?(0,u.jsx)(I.Z,{errorMessage:t.error}):t.schedule&&!t.hasError?(0,u.jsx)("section",{className:P,children:(0,u.jsx)(E,{children:t.schedule?t.schedule.map((function(e,t){return(0,u.jsx)(S,(0,r.Z)((0,r.Z)({clickHandler:l},e),{},{activeId:i.activeId}),e._id)})):(0,u.jsx)(U.Z,{})})}):t.schedule||t.hasError?void 0:(0,u.jsx)(U.Z,{})}},3545:function(e,t,n){var r=n(5861),a=n(7757),c=n.n(a),s="https://boiling-brushlands-51072.herokuapp.com";function i(){return(i=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(s,"/schedule"),{headers:{"Content-type":"application/json"},credentials:"include"});case 3:return t=e.sent,e.abrupt("return",t);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function o(){return(o=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(s,"/schedule/").concat(t),{headers:{"Content-type":"application/json"},credentials:"include"});case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",{error:{message:"Failed to get current race schedule!"}});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}t.Z={getFullSchedule:function(){return i.apply(this,arguments)},getScheduleById:function(e){return o.apply(this,arguments)}}},6137:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(907);var a=n(181);function c(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,a.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var s=function(e){var t={},n=["january","february","march","april","may","june","july","august","september","october","november","december"];if(null!==e&void 0!==e){var r=e.date.split("-"),a=[r[0],Number(r[1])-1,Number(r[2])].concat(c(e.time.split(":").slice(0,2))),s=Date.UTC.apply(Date,c(a));t.raceStartUTC=s;var i=new Date(e.date);i.setDate(i.getDate()-2);var o="".concat(i.getDate()," ").concat(n[i.getMonth()].substring(0,3).toUpperCase()," ").concat(i.getFullYear());t.country=e.Circuit.Location.country.toUpperCase();var u=e.date.split("-");return t.date=e.date,t.month=n[Number(u[1])-1].substring(0,3).toUpperCase(),t.day=Number(u[2]),t.imageBase=e.Circuit.Location.country.toLowerCase().split(" ").join("_"),t.raceName=e.raceName,t.season=Number(e.season),t.weekend="".concat(o," - ").concat(t.day," ").concat(t.month," ").concat(e.season),t}return e}},3653:function(e,t,n){e.exports=n.p+"static/media/clock.4103ddb25d602609f226.png"}}]);
//# sourceMappingURL=92.c5590a72.chunk.js.map