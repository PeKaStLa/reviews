import{S as t,i as e,s,j as a,m as l,o as n,K as r,v as o,r as f,w as c,e as h,t as i,k as u,c as g,a as m,g as p,d,n as $,b as v,f as b,G as j,u as w,N as D,B as k}from"../chunks/vendor-6dadcfe7.js";import x from"./nested.svelte-bfc71e11.js";function B(t,e,s){const a=t.slice();return a[1]=e[s],a}function E(t){let e,s;return e=new x({props:{item:t[1]}}),{c(){a(e.$$.fragment)},l(t){l(e.$$.fragment,t)},m(t,a){n(e,t,a),s=!0},p:r,i(t){s||(o(e.$$.fragment,t),s=!0)},o(t){f(e.$$.fragment,t),s=!1},d(t){c(e,t)}}}function T(t){let e,s,a,l,n,r=t[0],c=[];for(let o=0;o<r.length;o+=1)c[o]=E(B(t,r,o));const x=t=>f(c[t],1,1,(()=>{c[t]=null}));return{c(){e=h("div"),s=h("h2"),a=i("ToDo:"),l=u();for(let t=0;t<c.length;t+=1)c[t].c();this.h()},l(t){e=g(t,"DIV",{class:!0});var n=m(e);s=g(n,"H2",{});var r=m(s);a=p(r,"ToDo:"),r.forEach(d),l=$(n);for(let e=0;e<c.length;e+=1)c[e].l(n);n.forEach(d),this.h()},h(){v(e,"class","pt-72 md:pt-20 h-full w-full bg-cover \t")},m(t,r){b(t,e,r),j(e,s),j(s,a),j(e,l);for(let s=0;s<c.length;s+=1)c[s].m(e,null);n=!0},p(t,[s]){if(1&s){let a;for(r=t[0],a=0;a<r.length;a+=1){const l=B(t,r,a);c[a]?(c[a].p(l,s),o(c[a],1)):(c[a]=E(l),c[a].c(),o(c[a],1),c[a].m(e,null))}for(k(),a=r.length;a<c.length;a+=1)x(a);w()}},i(t){if(!n){for(let t=0;t<r.length;t+=1)o(c[t]);n=!0}},o(t){c=c.filter(Boolean);for(let e=0;e<c.length;e+=1)f(c[e]);n=!1},d(t){t&&d(e),D(c,t)}}}function G(t){return[["code","eat","sleep","repeat"]]}export default class extends t{constructor(t){super(),e(this,t,G,T,s,{})}}
