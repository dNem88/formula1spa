"use strict";(self.webpackChunkformula1=self.webpackChunkformula1||[]).push([[330],{8760:function(e,r,n){n.d(r,{Z:function(){return t}});n(2791);var a="commonHeader_wrapper__1CJfw",s="commonHeader_header__HCSD2",l="commonHeader_description__-F+l4",c=n(184);var t=function(e){var r=e.header,n=e.description;return(0,c.jsxs)("div",{className:a,children:[(0,c.jsx)("div",{className:s,children:(0,c.jsx)("h1",{children:r})}),(0,c.jsx)("div",{className:l,children:(0,c.jsx)("p",{children:n})})]})}},8330:function(e,r,n){n.r(r),n.d(r,{default:function(){return y}});var a=n(1413),s=n(5861),l=n(885),c=n(7757),t=n.n(c),i=n(2791),u="eventSchedule_main-container__rU9oD",d="eventSchedule_legend__fItjE",o="eventSchedule_date-container__nKrFt",h="eventSchedule_date-sub-container__ULHvr",m="eventSchedule_flag-container__+0hCy",f="eventSchedule_race-name-container__NedBd",v="eventSchedule_race-sub-container__nMZj5",_="eventSchedule_image-container__+H5Tb",p=n(184);var g=function(e){var r=[];return e.weekend&&(r=e.weekend.split("-").map((function(e){return e.trim().split(" ")[0]}))),(0,p.jsxs)("section",{className:u,children:[(0,p.jsxs)("p",{className:d,children:["ROUND ",e.round]}),(0,p.jsxs)("div",{className:o,children:[(0,p.jsxs)("div",{className:h,children:[(0,p.jsx)("span",{children:r.join("-")||""}),(0,p.jsx)("span",{children:e.month})]}),(0,p.jsx)("div",{className:m,children:(0,p.jsx)("img",{src:"https://rtiovelu.sirv.com/Images/formula1/flags/".concat(e.imageBase,".jpg"),alt:"national-flag",loading:"lazy"})})]}),(0,p.jsx)("div",{className:f,children:(0,p.jsxs)("div",{className:v,children:[(0,p.jsx)("span",{children:e.country}),(0,p.jsxs)("span",{children:["FORMULA 1 ",e.raceName.toUpperCase()," 2022"]})]})}),(0,p.jsx)("div",{className:_,children:(0,p.jsx)("img",{src:"https://rtiovelu.sirv.com/Images/formula1/circuits/".concat(e.imageBase,".jpg"),alt:"race-track-image",loading:"lazy"})})]})};var x=function(e){var r=e.fullSchedule;return(0,p.jsx)(i.Fragment,{children:r?r.map((function(e,r){return e.round=r+1,"italy"===e.imageBase&&"SEP"===e.month&&(e.imageBase="italy_sep"),(0,p.jsx)(g,(0,a.Z)({},e),e.raceStartUTC)})):null})},j="scheduleLayout_main-container__QgCw8",S=n(1125),N=n(6528),k=n(3545),w=n(8760),Z={header:"F1 Schedule 2022",description:"A record 23-race Formula 1 calendar for 2022, including the inaugural Miami Grand Prix."};var y=function(){var e=(0,i.useState)({fullSchedule:null,error:null,errorMessage:null}),r=(0,l.Z)(e,2),n=r[0],c=r[1];return(0,i.useEffect)((function(){function e(){return(e=(0,s.Z)(t().mark((function e(){var r,n,a;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.Z.getFullSchedule();case 3:if((r=e.sent).ok){e.next=6;break}throw new Error("Failed to fetch fullSchedule!");case 6:return e.next=8,r.json();case 8:if(!((n=e.sent).length<20)){e.next=11;break}throw new Error("Failed to get schedule! Some of the tracks are missing!");case 11:a=n.map(N.Z),c({error:null,errorMessage:null,fullSchedule:a}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),c({fullSchedule:null,error:!0,errorMessage:e.t0.message});case 18:case"end":return e.stop()}}),e,null,[[0,15]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,p.jsxs)("div",{className:j,children:[(0,p.jsx)(w.Z,(0,a.Z)({},Z)),n.error?(0,p.jsx)(S.Z,{errorMessage:n.errorMessage}):null,n.fullSchedule?(0,p.jsx)(x,{fullSchedule:n.fullSchedule}):null]})}}}]);
//# sourceMappingURL=330.ae388e52.chunk.js.map