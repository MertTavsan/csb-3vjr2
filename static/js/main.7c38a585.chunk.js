(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{38:function(t,e,c){},40:function(t,e,c){"use strict";c.r(e);var n=c(2),s=c(6),a=c.n(s),o=c(7),r=c.n(o),j=(c(38),c(1));const i=()=>{const[t,e]=Object(n.useState)(null),[c,s]=Object(n.useState)(1);return Object(n.useEffect)((()=>{(async()=>await r.a.get("https://jsonplaceholder.typicode.com/users/"+c))().then((t=>e(t.data)))}),[]),t?(console.log(t),Object(j.jsxs)("div",{children:["Butona Ba\u015fta 2 kez t\u0131klay\u0131n",Object(j.jsx)("br",{}),Object(j.jsx)("button",{onClick:function(){s((t=>t+1)),(async()=>await r.a.get("https://jsonplaceholder.typicode.com/users/"+c))().then((t=>e(t.data)))},children:"+"}),Object(j.jsx)("br",{}),t.id,Object(j.jsx)("br",{}),t.name]})):Object(j.jsx)("div",{children:"loading..."})},d=document.getElementById("root");a.a.render(Object(j.jsx)(n.StrictMode,{children:Object(j.jsx)(i,{})}),d)}},[[40,1,2]]]);
//# sourceMappingURL=main.7c38a585.chunk.js.map