(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{115:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return a})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return p}));var r=t(1),i=t(6),o=(t(0),t(134)),c={id:"arrow-functions",title:"Arrow Functions",sidebar_label:"Arrow Functions"},a={id:"javascript/arrow-functions",title:"Arrow Functions",description:"## Simple return",source:"@site/docs/javascript/arrow-functions.md",permalink:"/swe5-notes/docs/javascript/arrow-functions",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/javascript/arrow-functions.md",sidebar_label:"Arrow Functions",sidebar:"defaultSidebar",next:{title:"Component Props",permalink:"/swe5-notes/docs/react/components/props"}},u=[{value:"Simple return",id:"simple-return",children:[{value:"Explicit return with body",id:"explicit-return-with-body",children:[]},{value:"Explicit single line return",id:"explicit-single-line-return",children:[]},{value:"Implicit return with body",id:"implicit-return-with-body",children:[]},{value:"Implicit return on single line",id:"implicit-return-on-single-line",children:[]}]}],l={rightToc:u};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"simple-return"},"Simple return"),Object(o.b)("h3",{id:"explicit-return-with-body"},"Explicit return with body"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const addNums = (numOne, numTwo) => {\n  return numOne + numTwo\n}\n")),Object(o.b)("h3",{id:"explicit-single-line-return"},"Explicit single line return"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const addNums = (numOne, numTwo) => { return numOne + numTwo }\n")),Object(o.b)("h3",{id:"implicit-return-with-body"},"Implicit return with body"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const addNums = (numOne, numTwo) => (\n  numOne + numTwo\n)\n")),Object(o.b)("h3",{id:"implicit-return-on-single-line"},"Implicit return on single line"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const addNums = (numOne, numTwo) => numOne + numTwo\n")))}p.isMDXComponent=!0},134:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return d}));var r=t(0),i=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),p=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a({},n,{},e)),t},s=function(e){var n=p(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=p(t),b=r,d=s["".concat(c,".").concat(b)]||s[b]||m[b]||o;return t?i.a.createElement(d,a({ref:n},l,{components:t})):i.a.createElement(d,a({ref:n},l))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=b;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var l=2;l<o;l++)c[l]=t[l];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);