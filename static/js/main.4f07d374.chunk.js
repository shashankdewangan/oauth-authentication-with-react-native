(this["webpackJsonpgoogle-login"]=this["webpackJsonpgoogle-login"]||[]).push([[0],{10:function(e,o,n){},12:function(e,o,n){"use strict";n.r(o);var t=n(1),c=n.n(t),i=n(5),s=n.n(i),l=(n(10),n(4)),u=n(3),g=n(0),r="956376274559-8473n7uuqn48rfhm4h4u02f5bpbbp69k.apps.googleusercontent.com";var a=function(){var e=Object(t.useState)(!0),o=Object(l.a)(e,2),n=o[0],c=o[1],i=Object(t.useState)(!1),s=Object(l.a)(i,2),a=s[0],b=s[1];return Object(g.jsxs)("div",{children:[n?Object(g.jsx)(u.GoogleLogin,{clientId:r,buttonText:"Sign In",onSuccess:function(e){console.log("Login Success:",e.profileObj),c(!1),b(!0)},onFailure:function(e){console.log("Login Failed:",e)},cookiePolicy:"single_host_origin",isSignedIn:!0}):null,a?Object(g.jsx)(u.GoogleLogout,{clientId:r,buttonText:"Sign Out",onLogoutSuccess:function(){alert("You have been logged out successfully"),console.clear(),c(!0),b(!1)}}):null]})};s.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)("div",{className:"g-signin",children:Object(g.jsx)(a,{})})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.4f07d374.chunk.js.map