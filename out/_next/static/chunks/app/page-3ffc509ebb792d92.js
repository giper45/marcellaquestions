(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{1551:function(e,t,n){Promise.resolve().then(n.bind(n,1528))},1528:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var s=n(9268);let l=e=>Math.floor(Math.random()*e),r=e=>{let t=e.slice(0,e.length),n=e.length;for(let e=Math.min(n,5)-1;e>=0;e--){let n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t},o=e=>e?e.slice(2):"";function i(e){let{children:t,question:n,a:l,b:i,c:a,d:c,e:u}=e,f=r([l,i,a,c,u]);return(0,s.jsxs)("div",{className:"mx-10",children:[" ",n," ",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsxs)("div",{className:"text-left text-xs my-1",children:["A ",o(f[0])]}),(0,s.jsxs)("div",{className:"text-left text-xs my-1",children:["B ",o(f[1])," "]}),(0,s.jsxs)("div",{className:"text-left text-xs my-1",children:["C ",o(f[2])]}),(0,s.jsxs)("div",{className:"text-left text-xs my-1",children:["D ",o(f[3])]}),(0,s.jsxs)("div",{className:"text-left text-xs my-1",children:["E ",o(f[4])]}),(0,s.jsx)("br",{})]})}var a=n(6006);function c(){let[e,t]=(0,a.useState)([]),[n,r]=(0,a.useState)({});return(0,a.useEffect)(()=>{fetch("/questions.json").then(e=>e.json()).then(e=>{let n=e.root;t(n),r(n[l(n.length)])})},[]),(0,s.jsxs)("main",{className:"text-center",children:[(0,s.jsx)(i,{question:null==n?void 0:n.domanda,a:null==n?void 0:n.a,b:null==n?void 0:n.b,c:null==n?void 0:n.c,d:null==n?void 0:n.d,e:null==n?void 0:n.e,children:" "}),(0,s.jsx)("button",{className:"bg-slate-500 text-sm hover:bg-slate-800 text-black hover:text-white font-bold py-2 px-4 rounded-full",onClick:function(){r(e[l(e.length)])},children:"Next question"})]})}},3177:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s=n(6006),l=Symbol.for("react.element"),r=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,n){var s,a={},c=null,u=null;for(s in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)r.call(t,s)&&!i.hasOwnProperty(s)&&(a[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===a[s]&&(a[s]=t[s]);return{$$typeof:l,type:e,key:c,ref:u,props:a,_owner:o.current}}t.jsx=a,t.jsxs=a},9268:function(e,t,n){"use strict";e.exports=n(3177)}},function(e){e.O(0,[667,139,744],function(){return e(e.s=1551)}),_N_E=e.O()}]);