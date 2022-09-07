"use strict";(self.webpackChunkformula1=self.webpackChunkformula1||[]).push([[113],{125:function(e,r,t){t.d(r,{Z:function(){return c}});t(2791);var n="nameHeader_main-container__IbbgN",a=t(184);var c=function(e){var r=e.name;return(0,a.jsx)("div",{className:n,children:(0,a.jsx)("h1",{children:r})})}},5113:function(e,r,t){t.r(r),t.d(r,{default:function(){return j}});var n=t(1413),a=t(5861),c=t(885),i=t(7757),s=t.n(i),o=t(2791),l=t(6871),u=t(8895),p=t(1125),d=t(1092),f=t(125),v="driversPageLayout_main-container__rUeIv",m="driversPageLayout_content-container__YQoxT",h="driversPageLayout_drivers-container__gs73a",g=t(9941),y=t(8947),x=t(7617),_=t(184);var j=function(){var e=(0,o.useState)({error:null,errorMessage:null,driver:null}),r=(0,c.Z)(e,2),t=r[0],i=r[1],j=(0,l.UO)().id;return(0,o.useEffect)((function(){function e(){return(e=(0,a.Z)(s().mark((function e(){var r,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.getDriverById(j);case 3:if((r=e.sent).ok){e.next=6;break}throw new Error("Failed to fetch driver!");case 6:return e.next=8,r.json();case 8:t=e.sent,i({error:null,errorMessage:null,driver:t}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),i({error:!0,errorMessage:e.t0.message,driver:null});case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.log(t),(0,_.jsxs)(o.Fragment,{children:[t.error?(0,_.jsx)(p.Z,{errorMessage:t.errorMessage}):null,t.error?null:t.driver?(0,_.jsxs)(o.Fragment,{children:[(0,_.jsx)(f.Z,{name:"".concat(t.driver.givenName," ").concat(t.driver.familyName)}),(0,_.jsxs)("section",{className:v,children:[(0,_.jsxs)("div",{className:m,children:[(0,_.jsx)(y.Z,{name:"".concat(t.driver.givenName," ").concat(t.driver.familyName),flag:t.driver.country.toLowerCase()}),(0,_.jsx)(g.Z,(0,n.Z)({},t.driver))]}),(0,_.jsx)("div",{className:h,children:(0,_.jsx)(x.Z,{image:"".concat(t.driver.givenName," ").concat(t.driver.familyName)})})]})]}):(0,_.jsx)(d.Z,{})]})}},9941:function(e,r,t){t.d(r,{Z:function(){return h}});var n=t(885),a=(t(2791),"tableRow_row__6dYX1"),c="tableRow_title__VkWon",i="tableRow_content__ZbAgn",s=t(184);var o=function(e){var r=e.title,t=e.content;return(0,s.jsxs)("tr",{className:a,children:[(0,s.jsx)("td",{className:c,children:r}),(0,s.jsx)("td",{className:i,children:t})]})},l="table_table__RqKN2",u=t(2982);function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function d(e,r){return d=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e},d(e,r)}function f(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),r&&d(e,r)}function v(){v=function(e,r){return new t(e,void 0,r)};var e=RegExp.prototype,r=new WeakMap;function t(e,n,a){var c=new RegExp(e,n);return r.set(c,a||r.get(e)),d(c,t.prototype)}function n(e,t){var n=r.get(t);return Object.keys(n).reduce((function(r,t){return r[t]=e[n[t]],r}),Object.create(null))}return f(t,RegExp),t.prototype.exec=function(r){var t=e.exec.call(this,r);return t&&(t.groups=n(t,this)),t},t.prototype[Symbol.replace]=function(t,a){if("string"==typeof a){var c=r.get(this);return e[Symbol.replace].call(this,t,a.replace(/\$<([^>]+)>/g,(function(e,r){return"$"+c[r]})))}if("function"==typeof a){var i=this;return e[Symbol.replace].call(this,t,(function(){var e=arguments;return"object"!=p(e[e.length-1])&&(e=[].slice.call(e)).push(n(e,i)),a.apply(this,e)}))}return e[Symbol.replace].call(this,t,a)},v.apply(this,arguments)}var m=function(e){if(e){var r=e.match(v(/^([a-z]+)/g,{small:1}))||[],t=e.match(v(/([A-Z]{1}[a-z]+)/g,{capital:1}))||[];return[].concat((0,u.Z)(r),(0,u.Z)(t)).map((function(e){return e.toLowerCase()})).join(" ")}};var h=function(e){var r=["_id","image","drivers","stats"],t=Object.entries(e).filter((function(e){return!r.includes(e[0])})),a=[];return e.stats&&(a=Object.entries(e.stats)),(0,s.jsx)("table",{className:l,children:(0,s.jsxs)("tbody",{children:[t.map((function(e,r){var t=(0,n.Z)(e,2),a=t[0],c=t[1],i=m(a);return(0,s.jsx)(o,{title:i,content:c},"".concat(r).concat(a))})),a?a.map((function(e,r){var t=(0,n.Z)(e,2),a=t[0],c=t[1],i=m(a);return(0,s.jsx)(o,{title:i,content:c},"".concat(r).concat(a))})):null]})})}},7617:function(e,r,t){t.d(r,{Z:function(){return h}});var n=t(5861),a=t(885),c=t(7757),i=t.n(c),s=t(2791),o="driverCard_main-container__TRf4H",l="driverCard_image-container__Us9YH",u="driverCard_content__hZT06",p="driverCard_driver__3ps-g",d="driverCard_team__ZeM+t",f=t(8895),v=t(1125),m=t(184);var h=function(e){var r=e.image.split(" ")[1],t=(0,s.useState)({error:null,errorMessage:null,driver:null}),c=(0,a.Z)(t,2),h=c[0],g=c[1];return(0,s.useEffect)((function(){function e(){return(e=(0,n.Z)(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.Z.getDriverByName(r);case 3:if((t=e.sent).ok){e.next=6;break}throw new Error("Failed to fetch!");case 6:return e.next=8,t.json();case 8:n=e.sent,g({error:null,errorMessage:null,driver:n}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),g({error:!0,errorMessage:e.t0.message,driver:null});case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,m.jsxs)("div",{className:o,children:[(0,m.jsx)("div",{className:l,children:(0,m.jsx)("img",{src:"https://rtiovelu.sirv.com/Images/formula1/drivers/".concat(r.toLowerCase(),".jpg"),alt:"driver-image",loading:"lazy"})}),h.error?(0,m.jsx)(v.Z,{errorMessage:h.errorMessage}):null,h.error?null:h.driver?(0,m.jsxs)("div",{className:u,children:[(0,m.jsx)("h1",{children:h.driver.permanentNumber}),(0,m.jsx)("p",{className:p,children:"".concat(h.driver.givenName," ").concat(h.driver.familyName)}),(0,m.jsx)("p",{className:d,children:h.driver.team})]}):(0,m.jsx)("div",{className:u})]})}},8947:function(e,r,t){t.d(r,{Z:function(){return o}});t(2791);var n="header_main-container__QRd0k",a="header_name__QVkTa",c="header_image-container__jWxSf",i="header_flag-container__k0K1r",s=t(184);var o=function(e){var r=e.image,t=e.name,o=e.flag;return(0,s.jsxs)("div",{className:n,children:[(0,s.jsx)("h2",{className:a,children:t}),r?(0,s.jsx)("div",{className:c,children:(0,s.jsx)("img",{src:"https://rtiovelu.sirv.com/Images/formula1/car_logos/".concat(r,".jpg"),alt:"team-logo-image",loading:"lazy"})}):null,o?(0,s.jsx)("div",{className:i,children:(0,s.jsx)("img",{src:"https://rtiovelu.sirv.com/Images/formula1/flags/".concat(o,".jpg"),alt:"flag-image",loading:"lazy"})}):null]})}},8895:function(e,r,t){var n=t(5861),a=t(7757),c=t.n(a);function i(){return(i=(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://calm-puce-kitten-fez.cyclic.app//drivers",{headers:{"Content-type":"application/json"},credentials:"include"});case 3:return r=e.sent,e.abrupt("return",r);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function s(){return(s=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://calm-puce-kitten-fez.cyclic.app//drivers/".concat(r),{headers:{"Content-type":"application/json"},credentials:"include"});case 3:return t=e.sent,e.abrupt("return",t);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function o(){return(o=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://calm-puce-kitten-fez.cyclic.app//drivers?name=".concat(encodeURI(r)),{headers:{"Content-type":"application/json"},credentials:"include"});case 3:return t=e.sent,e.abrupt("return",t);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var l={getDriverById:function(e){return s.apply(this,arguments)},getDrivers:function(){return i.apply(this,arguments)},getDriverByName:function(e){return o.apply(this,arguments)}};r.Z=l}}]);
//# sourceMappingURL=113.56eaa2c9.chunk.js.map