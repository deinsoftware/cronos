(this.webpackJsonpcronos=this.webpackJsonpcronos||[]).push([[0],{17:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},35:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(18),a=n.n(s),i=(n(28),n(29),n.p+"static/media/logo.3ee66775.svg"),o=n(0),j=function(){return Object(o.jsx)("header",{children:Object(o.jsx)("img",{src:i,alt:"logo"})})},l=n(2),u=n(23),d=(n(31),function(e){var t=e.history,n=function(e){var n=e.target.dataset.id;t.push("/".concat(n))};return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"content",children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{"data-id":"n2w",onClick:n,children:"Number to Words"}),Object(o.jsx)("li",{"data-id":"d2w",onClick:n,children:"Date to Words"})]})})})}),b=(n(32),function(e){var t=e.history,n=e.back,c=e.text;return Object(o.jsx)("nav",{children:Object(o.jsxs)("div",{className:n?"subtitle":"title",children:[n&&Object(o.jsx)("h1",{children:Object(o.jsx)("a",{onClick:function(e){t.goBack()},children:"<"})}),Object(o.jsx)("h1",{children:c})]})})});b.defaultProps={back:!1};var h=b,O=function(e){var t=e.history;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(h,{history:t,text:"What would you like to practice?"}),Object(o.jsx)(d,{history:t})]})},x=n(7),f=n(12),v=n.n(f),m=n(13),p=n.n(m),g=n(19),w=n(20),y=n.n(w),C=function(e){var t=e.text,n=new y.a;n.init({volume:1,lang:"en-US",rate:1,pitch:1,splitSentences:!0});var c=function(){var e=Object(g.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.speak({text:t});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.jsx)(o.Fragment,{children:n.hasBrowserSupport()&&Object(o.jsx)("button",{onClick:c,children:"Listen"})})},N=function(e){return e?e.split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" "):""},F={1:"ones",10:"tens",100:"hundreds",1e3:"thousands",1e4:"ten thousands",1e5:"hundreds thousands",1e6:"millions",1e7:"ten millions",1e8:"hundred millions",1e9:"billions",1e12:"trillions"},k={c:"cardinal",o:"ordinal"},S={c:"correct",w:"wrong"},D=(n(35),function(e){var t=e.words,n=Object(c.useState)(""),r=Object(x.a)(n,2),s=r[0],a=r[1],i=Object(c.useState)(""),j=Object(x.a)(i,2),l=j[0],u=j[1];return Object(c.useEffect)((function(){t||(u(""),a(""))}),[t]),Object(o.jsxs)(o.Fragment,{children:[!s&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"input-group",children:Object(o.jsx)("span",{children:"Write the date in words"})}),Object(o.jsx)("div",{className:"input-group",children:Object(o.jsx)("textarea",{name:"answer",id:"answer",onChange:function(e){u(e.target.value)},value:l,disabled:s,autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",rows:"4"})}),Object(o.jsx)("div",{className:"input-group",children:Object(o.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault();var n,c=(n=t,l.trim().toLowerCase()===n.trim().toLowerCase()?"c":"w");a(c)},disabled:!(l&&!s)||"",children:"Answer"})})]}),s&&Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"result result-".concat(S[s]),children:Object(o.jsxs)("span",{children:[N(S[s]),"!"]})}),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{children:"w"===s&&"Nop! the correct answer is "}),Object(o.jsxs)("div",{children:["c"===s&&"Yes! is ",Object(o.jsx)("strong",{children:t})]})]})]})]})}),T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0,n=Math.random(),c=n*(t-e+1)+e/2;return Math.round(c)},E=function(e){var t=new Intl.NumberFormat("en-US").format(e);return t+={1:"st",2:"nd",3:"rd"}[e]||"th"},I=(n(17),function(e){var t,n=e.history,r=Object(c.useState)(1),s=Object(x.a)(r,2),a=s[0],i=s[1],j=Object(c.useState)("c"),l=Object(x.a)(j,2),u=l[0],d=l[1],b=Object(c.useState)(0),O=Object(x.a)(b,2),f=O[0],m=O[1],p=Object(c.useState)(""),g=Object(x.a)(p,2),w=g[0],y=g[1],S=function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return T(1===e?0:e,10*e-1)}(a);m(e),y("")};return Object(c.useEffect)((function(){S()}),[a,u]),Object(c.useEffect)((function(){var e="toWords";"o"===u&&(e+="Ordinal");var t=v.a[e](f);y(t)}),[f]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(h,{history:n,back:!0,text:"Number to Words"}),Object(o.jsxs)("section",{children:[Object(o.jsxs)("div",{className:"input-group",children:[Object(o.jsx)("label",{htmlFor:"level",children:"Level"}),Object(o.jsx)("select",{name:"level",value:a,onChange:function(e){i(e.target.value)},children:Object.entries(F).map((function(e,t){return Object(o.jsx)("option",{value:e[0],children:"".concat(t+1," - ").concat(N(e[1]))},t)}))})]}),Object(o.jsxs)("div",{className:"input-group",children:[Object(o.jsx)("label",{htmlFor:"type",children:"Type"}),Object(o.jsx)("select",{name:"type",value:u,onChange:function(e){d(e.target.value)},children:Object.entries(k).map((function(e,t){return Object(o.jsx)("option",{value:e[0],children:"".concat(N(e[1]))},t)}))})]}),Object(o.jsxs)("div",{className:"challenge",children:["o"===u&&E(f),"c"===u&&(t=f,new Intl.NumberFormat("en-US").format(t))]}),Object(o.jsxs)("div",{className:"input-group",children:[Object(o.jsx)("button",{onClick:S,children:"Refresh"}),Object(o.jsx)(C,{text:w})]}),Object(o.jsx)(D,{words:w})]})]})}),W=n(21),L=n.n(W),U=function(e){return!!e&&!isNaN(e.valueOf())},B=function(e){var t,n=e.history,r=Object(c.useState)(new Date),s=Object(x.a)(r,2),a=s[0],i=s[1],j=Object(c.useState)(""),l=Object(x.a)(j,2),u=l[0],d=l[1];return Object(c.useEffect)((function(){var e=L()(a);d(e)}),[a]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(h,{history:n,back:!0,text:"Date to Words"}),Object(o.jsxs)("section",{children:[Object(o.jsx)("div",{className:"challenge",children:(t=a,new Intl.DateTimeFormat("en-US").format(t))}),Object(o.jsxs)("div",{className:"input-group",children:[Object(o.jsx)("button",{onClick:function(){var e=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Date;if(!U(e)||!U(t))throw new TypeError("Invalid date parameters");return new Date(e.getTime()+Math.random()*(t.getTime()-e.getTime()))}(new Date(1800,0,1),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Date;if(!e||isNaN(e))throw new TypeError("Invalid amount parameters");if(!t||!U(t))throw new TypeError("Invalid date parameters");var n=t.getFullYear()+e;return new Date(t.setFullYear(n))}(100,new Date));i(e),d("")},children:"Refresh"}),Object(o.jsx)(C,{text:u})]}),Object(o.jsx)(D,{words:u})]})]})},M=function(){var e=Object(l.f)();return Object(o.jsx)(u.a,{children:Object(o.jsxs)(l.c,{history:e,children:[Object(o.jsx)(l.a,{exact:!0,path:"/",component:O}),Object(o.jsx)(l.a,{exact:!0,path:"/n2w",component:I}),Object(o.jsx)(l.a,{exact:!0,path:"/d2w",component:B})]})})},Y=(n(43),function(){return Object(o.jsxs)("footer",{children:[Object(o.jsxs)("div",{children:["Created by ",Object(o.jsx)("a",{href:"https://github.com/equiman",children:"equiman"})]}),Object(o.jsxs)("div",{children:["2021 \xa9 ",(new Date).getFullYear()]})]})}),P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};a.a.render(Object(o.jsxs)(r.a.StrictMode,{children:[Object(o.jsx)(j,{}),Object(o.jsx)("main",{children:Object(o.jsx)(M,{})}),Object(o.jsx)(Y,{})]}),document.getElementById("root")),P()}},[[44,1,2]]]);
//# sourceMappingURL=main.94899abb.chunk.js.map