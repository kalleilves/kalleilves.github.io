(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[136],{1536:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/background",function(){return t(4312)}])},8418:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function o(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,a=[],u=!0,i=!1;try{for(t=t.call(e);!(u=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);u=!0);}catch(c){i=!0,o=c}finally{try{u||null==t.return||t.return()}finally{if(i)throw o}}return a}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.default=void 0;var a,u=(a=t(7294))&&a.__esModule?a:{default:a},i=t(6273),c=t(387),l=t(7190);var f={};function s(e,n,t,r){if(e&&i.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;f[n+"%"+t+(o?"%"+o:"")]=!0}}var p=function(e){var n,t=!1!==e.prefetch,r=c.useRouter(),a=u.default.useMemo((function(){var n=o(i.resolveHref(r,e.href,!0),2),t=n[0],a=n[1];return{href:t,as:e.as?i.resolveHref(r,e.as):a||t}}),[r,e.href,e.as]),p=a.href,d=a.as,y=e.children,v=e.replace,h=e.shallow,b=e.scroll,m=e.locale;"string"===typeof y&&(y=u.default.createElement("a",null,y));var g=(n=u.default.Children.only(y))&&"object"===typeof n&&n.ref,w=o(l.useIntersection({rootMargin:"200px"}),2),k=w[0],O=w[1],M=u.default.useCallback((function(e){k(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,k]);u.default.useEffect((function(){var e=O&&t&&i.isLocalURL(p),n="undefined"!==typeof m?m:r&&r.locale,o=f[p+"%"+d+(n?"%"+n:"")];e&&!o&&s(r,p,d,{locale:n})}),[d,p,O,m,t,r]);var E={ref:M,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,u,c){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(t))&&(e.preventDefault(),null==u&&r.indexOf("#")>=0&&(u=!1),n[o?"replace":"push"](t,r,{shallow:a,locale:c,scroll:u}))}(e,r,p,d,v,h,b,m)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),i.isLocalURL(p)&&s(r,p,d,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var I="undefined"!==typeof m?m:r&&r.locale,_=r&&r.isLocaleDomain&&i.getDomainLocale(d,I,r&&r.locales,r&&r.domainLocales);E.href=_||i.addBasePath(i.addLocale(d,I,r&&r.defaultLocale))}return u.default.cloneElement(n,E)};n.default=p},7190:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function o(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,a=[],u=!0,i=!1;try{for(t=t.call(e);!(u=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);u=!0);}catch(c){i=!0,o=c}finally{try{u||null==t.return||t.return()}finally{if(i)throw o}}return a}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!i,r=a.useRef(),l=o(a.useState(!1),2),f=l[0],s=l[1],p=a.useCallback((function(e){r.current&&(r.current(),r.current=void 0),t||f||e&&e.tagName&&(r.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=c.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return c.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,a=r.observer,u=r.elements;return u.set(e,n),a.observe(e),function(){u.delete(e),a.unobserve(e),0===u.size&&(a.disconnect(),c.delete(o))}}(e,(function(e){return e&&s(e)}),{rootMargin:n}))}),[t,n,f]);return a.useEffect((function(){if(!i&&!f){var e=u.requestIdleCallback((function(){return s(!0)}));return function(){return u.cancelIdleCallback(e)}}}),[f]),[p,f]};var a=t(7294),u=t(9311),i="undefined"!==typeof IntersectionObserver;var c=new Map},4312:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c}});t(7294);var r=t(3905),o=t(1874);function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u={},i=function(e){var n=e.children;return(0,r.kt)(o.Z,{title:"My background"},n)};function c(e){var n=e.components,t=a(e,["components"]);return(0,r.kt)(i,Object.assign({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",null,"My background"),(0,r.kt)("p",null,"I have a master's degree in computer science and over six years of experience working as a software developer. I have worked for varying organizations such as start-up companies, consultancy companies, research institutions, and universities. More details of my education and work experience can be found on my ",(0,r.kt)("a",Object.assign({parentName:"p"},{href:"https://www.linkedin.com/in/kalleilves/"}),"LinkedIn page"),"."))}c.isMDXComponent=!0},9008:function(e,n,t){e.exports=t(5443)},1664:function(e,n,t){e.exports=t(8418)},1163:function(e,n,t){e.exports=t(387)}},function(e){e.O(0,[874,774,888,179],(function(){return n=1536,e(e.s=n);var n}));var n=e.O();_N_E=n}]);