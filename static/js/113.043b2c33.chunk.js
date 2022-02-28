"use strict";(self.webpackChunkformula1=self.webpackChunkformula1||[]).push([[113],{125:function(e,r,n){n.d(r,{Z:function(){return s}});n(2791);var t="nameHeader_main-container__IbbgN",a=n(184);var s=function(e){var r=e.name;return(0,a.jsx)("div",{className:t,children:(0,a.jsx)("h1",{children:r})})}},5113:function(e,r,n){n.r(r),n.d(r,{default:function(){return b}});var t=n(1413),a=n(5861),s=n(885),c=n(7757),i=n.n(c),o=n(2791),l=n(6871),u=n(8895),d=n(1125),v=n(1092),p=n(125),m="driversPageLayout_main-container__rUeIv",f="driversPageLayout_content-container__YQoxT",h="driversPageLayout_drivers-container__gs73a",g=n(1320),x=n(8947),_=n(7617),j=n(184);var b=function(){var e=(0,o.useState)({error:null,errorMessage:null,driver:null}),r=(0,s.Z)(e,2),n=r[0],c=r[1],b=(0,l.UO)().id;return(0,o.useEffect)((function(){function e(){return(e=(0,a.Z)(i().mark((function e(){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.getDriverById(b);case 3:if((r=e.sent).ok){e.next=6;break}throw new Error("Failed to fetch driver!");case 6:return e.next=8,r.json();case 8:n=e.sent,c({error:null,errorMessage:null,driver:n}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),c({error:!0,errorMessage:e.t0.message,driver:null});case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.log(n),(0,j.jsxs)(o.Fragment,{children:[n.error?(0,j.jsx)(d.Z,{errorMessage:n.errorMessage}):null,n.error?null:n.driver?(0,j.jsxs)(o.Fragment,{children:[(0,j.jsx)(p.Z,{name:"".concat(n.driver.givenName," ").concat(n.driver.familyName)}),(0,j.jsxs)("section",{className:m,children:[(0,j.jsxs)("div",{className:f,children:[(0,j.jsx)(x.Z,{name:"".concat(n.driver.givenName," ").concat(n.driver.familyName),flag:n.driver.country.toLowerCase()}),(0,j.jsx)(g.Z,(0,t.Z)({},n.driver))]}),(0,j.jsx)("div",{className:h,children:(0,j.jsx)(_.Z,{image:"".concat(n.driver.givenName," ").concat(n.driver.familyName)})})]})]}):(0,j.jsx)(v.Z,{})]})}},1320:function(e,r,n){n.d(r,{Z:function(){return l}});n(2791);var t="tableRow_row__6dYX1",a="tableRow_title__VkWon",s="tableRow_content__ZbAgn",c=n(184);var i=function(e){return(0,c.jsxs)("tr",{className:t,children:[(0,c.jsx)("td",{className:a,children:e.title}),(0,c.jsx)("td",{className:s,children:e.content})]})},o="table_table__RqKN2";var l=function(e){var r=["_id","image","drivers","stats"],n=Object.entries(e).filter((function(e){return!r.includes(e[0])})),t=[];return e.stats&&(t=Object.entries(e.stats)),(0,c.jsx)("table",{className:o,children:(0,c.jsxs)("tbody",{children:[n.map((function(e,r){return console.log(e,r),(0,c.jsx)(i,{title:e[0],content:e[1]},"".concat(r).concat(e[0]))})),t?t.map((function(e,r){return(0,c.jsx)(i,{title:e[0],content:e[1]},"".concat(r).concat(e[0]))})):null]})})}},7617:function(e,r,n){n.d(r,{Z:function(){return g}});var t=n(5861),a=n(885),s=n(7757),c=n.n(s),i=n(2791),o="driverCard_main-container__TRf4H",l="driverCard_image-container__Us9YH",u="driverCard_content__hZT06",d="driverCard_driver__3ps-g",v="driverCard_team__ZeM+t",p=n(4635),m=n(8895),f=n(1125),h=n(184);var g=function(e){var r=e.image.split(" ")[1],n=(0,i.useState)({error:null,errorMessage:null,driver:null}),s=(0,a.Z)(n,2),g=s[0],x=s[1];return(0,i.useEffect)((function(){function e(){return(e=(0,t.Z)(c().mark((function e(){var n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.Z.getDriverByName(r);case 3:if((n=e.sent).ok){e.next=6;break}throw new Error("Failed to fetch!");case 6:return e.next=8,n.json();case 8:t=e.sent,x({error:null,errorMessage:null,driver:t}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),x({error:!0,errorMessage:e.t0.message,driver:null});case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,h.jsxs)("div",{className:o,children:[(0,h.jsx)("div",{className:l,children:(0,h.jsx)("img",{src:p.Z[r.toLowerCase()],alt:"driver-image",loading:"lazy"})}),g.error?(0,h.jsx)(f.Z,{errorMessage:g.errorMessage}):null,g.error?null:g.driver?(0,h.jsxs)("div",{className:u,children:[(0,h.jsx)("h1",{children:g.driver.permanentNumber}),(0,h.jsx)("p",{className:d,children:"".concat(g.driver.givenName," ").concat(g.driver.familyName)}),(0,h.jsx)("p",{className:v,children:g.driver.team})]}):(0,h.jsx)("div",{className:u})]})}},8947:function(e,r,n){n.d(r,{Z:function(){return u}});n(2791);var t=n(8304),a=n(5531),s="header_main-container__QRd0k",c="header_name__QVkTa",i="header_image-container__jWxSf",o="header_flag-container__k0K1r",l=n(184);var u=function(e){var r=e.image,n=e.name,u=e.flag;return(0,l.jsxs)("div",{className:s,children:[(0,l.jsx)("h2",{className:c,children:n}),r?(0,l.jsx)("div",{className:i,children:(0,l.jsx)("img",{src:t.Z[r],alt:"team-logo-image",loading:"lazy"})}):null,u?(0,l.jsx)("div",{className:o,children:(0,l.jsx)("img",{src:a.Z[u],alt:"flag-image",loading:"lazy"})}):null]})}},8895:function(e,r,n){var t=n(5861),a=n(7757),s=n.n(a);function c(){return(c=(0,t.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://boiling-brushlands-51072.herokuapp.com/drivers",{headers:{"Content-type":"application/json"},credentials:"include"});case 3:return r=e.sent,e.abrupt("return",r);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function i(){return(i=(0,t.Z)(s().mark((function e(r){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://boiling-brushlands-51072.herokuapp.com/drivers/".concat(r),{headers:{"Content-type":"application/json"},credentials:"include"});case 3:return n=e.sent,e.abrupt("return",n);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function o(){return(o=(0,t.Z)(s().mark((function e(r){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://boiling-brushlands-51072.herokuapp.com/drivers?name=".concat(encodeURI(r)),{headers:{"Content-type":"application/json"},credentials:"include"});case 3:return n=e.sent,e.abrupt("return",n);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var l={getDriverById:function(e){return i.apply(this,arguments)},getDrivers:function(){return c.apply(this,arguments)},getDriverByName:function(e){return o.apply(this,arguments)}};r.Z=l}}]);
//# sourceMappingURL=113.043b2c33.chunk.js.map