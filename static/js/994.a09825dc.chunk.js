"use strict";(self.webpackChunkformula1=self.webpackChunkformula1||[]).push([[994],{2749:function(e,r,n){n.d(r,{Z:function(){return i}});n(2791);var a="form_form__YNLZd",s="form_heading__hr62F",t=n(184);var i=function(e){var r=e.children,n=e.submitHandler,i=e.heading;return(0,t.jsxs)("form",{onSubmit:n,className:a,children:[(0,t.jsx)("h2",{className:s,children:i}),r]})}},1022:function(e,r,n){n.d(r,{Z:function(){return o}});var a=n(2791),s="input_input__DBzVF",t="input_label__rNDlu",i=n(184);var o=function(e){var r=e.type,n=e.id,o=e.value,l=e.labelContent,u=e.onChange,c=e.readonly,d=void 0!==c&&c;return(0,i.jsxs)(a.Fragment,{children:[(0,i.jsx)("label",{className:t,htmlFor:n,children:l}),(0,i.jsx)("input",{className:s,type:r,id:n,placeholder:n,value:o,onChange:u,readOnly:d})]})}},9803:function(e,r,n){n.d(r,{Z:function(){return i}});var a=n(2791),s="submitButton_submitBtn__3PbiN",t=n(184),i=a.forwardRef((function(e,r){return(0,t.jsx)("button",{className:s,type:"submit",ref:r,children:e.text})}))},3994:function(e,r,n){n.r(r),n.d(r,{default:function(){return b}});var a=n(5861),s=n(4942),t=n(1413),i=n(885),o=n(7757),l=n.n(o),u=n(2791),c=n(6562),d=n(6871),m="register_error__FuITU",f=n(1022),h=n(2749),p=n(9803),x=n(184);var b=function(){var e=(0,u.useContext)(c.Z),r=(0,d.s0)(),n=(0,u.useState)({username:"",email:"",password:"",confirmPassword:"",errorMessage:""}),o=(0,i.Z)(n,2),b=o[0],g=o[1],v=u.createRef();function w(e){var r;g((0,t.Z)((0,t.Z)({},b),{},(r={},(0,s.Z)(r,e.target.id,e.target.value),(0,s.Z)(r,"errorMessage",""),r)))}function j(){return(j=(0,a.Z)(l().mark((function n(a){var s;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a.preventDefault(),v.current.disabled=!0,n.prev=2,n.next=5,e.register(b);case 5:if((s=n.sent).acknowledged&&s.insertedId&&r("/auth/login"),!s.error){n.next=10;break}throw v.current.disabled=!1,new Error(s.error.message);case 10:if(!s.message){n.next=13;break}throw v.current.disabled=!1,new Error(s.message);case 13:n.next=19;break;case 15:n.prev=15,n.t0=n.catch(2),v.current.disabled=!1,g((0,t.Z)((0,t.Z)({},b),{},{errorMessage:n.t0.message}));case 19:case"end":return n.stop()}}),n,null,[[2,15]])})))).apply(this,arguments)}return(0,x.jsxs)(h.Z,{submitHandler:function(e){return j.apply(this,arguments)},heading:"CREATE ACCOUNT",children:[(0,x.jsx)(f.Z,{type:"text",onChange:w,labelContent:"Username",id:"username",value:b.username}),(0,x.jsx)(f.Z,{type:"text",onChange:w,labelContent:"Email address",id:"email",value:b.email}),(0,x.jsx)(f.Z,{type:"password",onChange:w,labelContent:"Password",id:"password",value:b.password}),(0,x.jsx)(f.Z,{type:"password",onChange:w,labelContent:"Confirm password",id:"confirmPassword",value:b.confirmPassword}),(0,x.jsxs)("section",{children:[(0,x.jsx)("p",{className:m,children:b.errorMessage}),(0,x.jsx)("p",{children:"Password must contain"}),(0,x.jsxs)("ul",{children:[(0,x.jsx)("li",{children:"Uppercase"}),(0,x.jsx)("li",{children:"Lowercase (at least 2)"}),(0,x.jsx)("li",{children:"8 or more characters"}),(0,x.jsx)("li",{children:"Number"})]})]}),(0,x.jsx)(p.Z,{text:"REGISTER",ref:v})]})}}}]);
//# sourceMappingURL=994.a09825dc.chunk.js.map