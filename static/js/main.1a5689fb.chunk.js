(this.webpackJsonpcronos=this.webpackJsonpcronos||[]).push([[0],{13:function(e,t,n){},28:function(e,t,n){},30:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(20),s=n.n(a),i=(n(28),n.p+"static/media/logo.27e338c4.svg"),o=n(0),j=function(){return Object(o.jsx)("header",{children:Object(o.jsx)("img",{src:i,alt:"logo"})})},l=n(2),u=n(9),d=n(4),b=n(14),h=n.n(b),O=(n(30),function(e){var t=e.back,n=e.text;return Object(o.jsx)("nav",{"data-testid":"navbar",children:Object(o.jsxs)("div",{className:t?"subtitle":"title",children:[t&&Object(o.jsx)("h1",{children:Object(o.jsx)(u.b,{"data-testid":"home-link",to:"/",children:"<"})}),Object(o.jsx)("h1",{children:n})]})})});O.defaultProps={back:!0};var x=O,f=n(17),m=n.n(f),p=n(22),v=n(23),w=n.n(v),g=function(e){var t=e.text,n=new w.a;n.init({volume:1,lang:"en-US",rate:1,pitch:1,splitSentences:!0});var c=function(){var e=Object(p.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.speak({text:t});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.jsx)(o.Fragment,{children:n.hasBrowserSupport()&&Object(o.jsx)("button",{onClick:c,children:"Listen"})})},N=function(e){return e?e.split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" "):""},F={1:"ones",10:"tens",100:"hundreds",1e3:"thousands",1e4:"ten thousands",1e5:"hundreds thousands",1e6:"millions",1e7:"ten millions",1e8:"hundred millions",1e9:"billions",1e12:"trillions"},y={c:"cardinal",o:"ordinal"},C={c:"correct",w:"wrong"},S=(n(40),function(e){var t=e.words,n=e.rows,r=Object(c.useState)(""),a=Object(d.a)(r,2),s=a[0],i=a[1],j=Object(c.useState)(""),l=Object(d.a)(j,2),u=l[0],b=l[1];return Object(c.useEffect)((function(){t||(b(""),i(""))}),[t]),Object(o.jsxs)(o.Fragment,{children:[!s&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"input-group",children:Object(o.jsx)("span",{children:"Write the date in words"})}),Object(o.jsx)("div",{className:"input-group",children:Object(o.jsx)("textarea",{name:"answer",id:"answer",onChange:function(e){b(e.target.value)},value:u,disabled:s,autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",rows:n})}),Object(o.jsx)("div",{className:"input-group",children:Object(o.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault();var n,c=(n=t,u.trim().toLowerCase()===n.trim().toLowerCase()?"c":"w");i(c)},disabled:!(u&&!s)||"",children:"Answer"})})]}),s&&Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"result result-".concat(C[s]),children:Object(o.jsxs)("span",{children:[N(C[s]),"!"]})}),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{children:"w"===s&&"Nop! the correct answer is "}),Object(o.jsxs)("div",{children:["c"===s&&"Yes! is ",Object(o.jsx)("strong",{children:t})]})]})]})]})});S.defaultProps={rows:1};var D=S,k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0,n=Math.random(),c=n*(t-e)+e/2;return Math.round(c)},T=function(e){var t=new Intl.NumberFormat("en-US").format(e);return t+={1:"st",2:"nd",3:"rd"}[e]||"th"},E=(n(13),function(e){e.history;var t,n=Object(c.useState)(1),r=Object(d.a)(n,2),a=r[0],s=r[1],i=Object(c.useState)("c"),j=Object(d.a)(i,2),l=j[0],u=j[1],b=Object(c.useState)(0),O=Object(d.a)(b,2),f=O[0],m=O[1],p=Object(c.useState)(""),v=Object(d.a)(p,2),w=v[0],C=v[1],S=function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return k(1===e?0:e,10*e-1)}(a);m(e),C("")};return Object(c.useEffect)((function(){S()}),[a,l]),Object(c.useEffect)((function(){var e="toWords";"o"===l&&(e+="Ordinal");var t=h.a[e](f);C(t)}),[f]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(x,{text:"Number to Words"}),Object(o.jsxs)("section",{children:[Object(o.jsxs)("div",{className:"input-group",children:[Object(o.jsx)("label",{htmlFor:"level",children:"Level"}),Object(o.jsx)("select",{name:"level",value:a,onChange:function(e){s(e.target.value)},children:Object.entries(F).map((function(e,t){return Object(o.jsx)("option",{value:e[0],children:"".concat(t+1," - ").concat(N(e[1]))},t)}))})]}),Object(o.jsxs)("div",{className:"input-group",children:[Object(o.jsx)("label",{htmlFor:"type",children:"Type"}),Object(o.jsx)("select",{name:"type",value:l,onChange:function(e){u(e.target.value)},children:Object.entries(y).map((function(e,t){return Object(o.jsx)("option",{value:e[0],children:"".concat(N(e[1]))},t)}))})]}),Object(o.jsxs)("div",{className:"challenge",children:["o"===l&&T(f),"c"===l&&(t=f,new Intl.NumberFormat("en-US").format(t))]}),Object(o.jsxs)("div",{className:"input-group",children:[Object(o.jsx)("button",{onClick:S,children:"Refresh"}),Object(o.jsx)(g,{text:w})]}),Object(o.jsx)(D,{words:w,rows:4})]})]})}),I=n(18),W=n.n(I),Y=function(e){return!!e&&!isNaN(e.valueOf())},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Date;if(!e||isNaN(e))throw new TypeError("Invalid amount parameters");if(!t||!Y(t))throw new TypeError("Invalid date parameters");var n=t.getFullYear()+e;return new Date(t.setFullYear(n))},P=function(e){if(!e||!Y(e))throw new TypeError("Invalid date parameters");return e.getFullYear()},U=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Date;if(!Y(e)||!Y(t))throw new TypeError("Invalid date parameters");var n=new Date(e.getTime()+Math.random()*(t.getTime()-e.getTime()));return n},M=[{path:"n2w",component:E,text:"Number to Words"},{path:"y2w",component:function(e){e.history;var t=Object(c.useState)(new Date),n=Object(d.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(""),i=Object(d.a)(s,2),j=i[0],l=i[1];return Object(c.useEffect)((function(){var e=function(e){if(!e||!Y(e))throw new TypeError("Invalid date parameters");return W()(e).split(",")[1].trim()}(r);l(e)}),[r]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(x,{text:"Year to Words"}),Object(o.jsxs)("section",{children:[Object(o.jsx)("div",{className:"challenge",children:P(r)}),Object(o.jsxs)("div",{className:"input-group",children:[Object(o.jsx)("button",{onClick:function(){var e=new Date(1800,0,1),t=L(100,new Date),n=U(e,t);a(n),l("")},children:"Refresh"}),Object(o.jsx)(g,{text:j})]}),Object(o.jsx)(D,{words:j})]})]})},text:"Year to Words"},{path:"d2w",component:function(e){e.history;var t,n=Object(c.useState)(new Date),r=Object(d.a)(n,2),a=r[0],s=r[1],i=Object(c.useState)(""),j=Object(d.a)(i,2),l=j[0],u=j[1];return Object(c.useEffect)((function(){var e=function(e){if(!e||!Y(e))throw new TypeError("Invalid date parameters");return W()(e)}(a);u(e)}),[a]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(x,{text:"Date to Words"}),Object(o.jsxs)("section",{children:[Object(o.jsx)("div",{className:"challenge",children:(t=a,new Intl.DateTimeFormat("en-US").format(t))}),Object(o.jsxs)("div",{className:"input-group",children:[Object(o.jsx)("button",{onClick:function(){var e=new Date(1800,0,1),t=L(100,new Date),n=U(e,t);s(n),u("")},children:"Refresh"}),Object(o.jsx)(g,{text:l})]}),Object(o.jsx)(D,{words:l,rows:2})]})]})},text:"Date to Words"}],A=(n(41),function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"main-menu","data-testid":"menu",children:M.map((function(e,t){return Object(o.jsx)(u.b,{"data-testid":"".concat(e.path,"-link"),to:"/".concat(e.path),children:e.text},t)}))})})}),B=function(e){e.history;return Object(o.jsxs)("div",{"data-testid":"home",children:[Object(o.jsx)(x,{back:!1,text:"What would you like to practice?"}),Object(o.jsx)(A,{})]})},R=function(e){e.history;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("span",{"data-testid":"not-found",children:"OPS! PAGE NOT FOUND"})})},q=function(){var e=Object(l.f)();return Object(o.jsx)(u.a,{children:Object(o.jsxs)(l.c,{history:e,children:[Object(o.jsx)(l.a,{exact:!0,path:"/",component:B}),M.map((function(e,t){return Object(o.jsx)(l.a,{exact:!0,path:"/".concat(e.path),component:e.component},t)})),Object(o.jsx)(l.a,{component:R})]})})},J=(n(42),function(){return Object(o.jsxs)("footer",{children:[Object(o.jsxs)("div",{children:["Created by ",Object(o.jsx)("a",{href:"https://github.com/equiman",children:"equiman"})]}),Object(o.jsxs)("div",{children:["2021 \xa9 ",(new Date).getFullYear()]})]})});n(43);var z=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(j,{}),Object(o.jsx)("main",{children:Object(o.jsx)(q,{})}),Object(o.jsx)(J,{})]})},G=(n(44),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))});s.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(z,{})}),document.getElementById("root")),G()}},[[45,1,2]]]);
//# sourceMappingURL=main.1a5689fb.chunk.js.map