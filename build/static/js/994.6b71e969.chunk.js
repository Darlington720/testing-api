"use strict";(self.webpackChunkelstar=self.webpackChunkelstar||[]).push([[994],{3273:function(e,n,t){t(2791);var r=t(1694),i=t.n(r),a=t(8669),s=t(3329);n.Z=function(e){var n=e.headerStart,t=e.headerEnd,r=e.headerMiddle,c=e.className,o=e.container;return(0,s.jsx)("header",{className:i()("header",c),children:(0,s.jsxs)("div",{className:i()("header-wrapper",a.Gx,o&&"container mx-auto"),children:[(0,s.jsx)("div",{className:"header-action header-action-start",children:n}),r&&(0,s.jsx)("div",{className:"header-action header-action-middle",children:r}),(0,s.jsx)("div",{className:"header-action header-action-end",children:t})]})})}},873:function(e,n,t){t(2791);var r=t(6235),i=t(6030),a=t(3329);n.Z=function(){var e=(0,i.v9)((function(e){return e.theme.mode}));return(0,a.jsx)(r.Z,{mode:e,className:"hidden md:block"})}},2189:function(e,n,t){t.d(n,{Z:function(){return p}});t(2791);var r=t(543),i=t(8109),a=t(1453),s=t(7634),c=t(1087),o=t(3329),u=function(e){var n=e.path,t=e.children;return(0,o.jsx)(c.rU,{className:"h-full w-full flex items-center",to:n,children:(0,o.jsx)("span",{children:t})})},l=t(2020),d=function(e){var n=e.nav,t=e.isLink,r=e.manuVariant,a=n.title,c=n.translateKey,d=n.icon,f=n.path,h=(0,(0,l.$)().t)(c,a),p=d&&(0,o.jsx)("span",{className:"text-2xl",children:s.Z[d]});return(0,o.jsx)(o.Fragment,{children:f&&t?(0,o.jsx)(u,{path:f,children:(0,o.jsx)(i.sN,{variant:r,children:(0,o.jsxs)("span",{className:"flex items-center gap-2",children:[p,h]})})}):(0,o.jsxs)(i.sN,{variant:r,children:[p,(0,o.jsx)("span",{children:h})]})})},f=function(e){var n=e.nav,t=n.title,r=n.translateKey,a=n.path,s=n.key,c=(0,(0,l.$)().t)(r,t);return(0,o.jsx)(i.Lt.Item,{eventKey:s,children:a?(0,o.jsx)(u,{path:a,children:c}):(0,o.jsx)("span",{children:c})})},h=t(350),p=function(e){var n=e.manuVariant,t=e.userAuthority,s=void 0===t?[]:t,c=(0,l.$)().t;return(0,o.jsx)("span",{className:"flex items-center",children:r.Z.map((function(e){return e.type===h.ZH||e.type===h.hX?(0,o.jsx)(a.XW,{authority:e.authority,userAuthority:s,children:(0,o.jsx)(i.Lt,{trigger:"hover",renderTitle:(0,o.jsx)(d,{manuVariant:n,nav:e}),children:e.subMenu.map((function(e){return(0,o.jsx)(a.XW,{authority:e.authority,userAuthority:s,children:e.subMenu.length>0?(0,o.jsx)(i.Lt.Menu,{title:c(e.translateKey,e.title),children:e.subMenu.map((function(e){return(0,o.jsx)(a.XW,{authority:e.authority,userAuthority:s,children:(0,o.jsx)(f,{nav:e})},e.key)}))}):(0,o.jsx)(f,{nav:e},e.key)},e.key)}))})},e.key):e.type===h.vS?(0,o.jsx)(a.XW,{authority:e.authority,userAuthority:s,children:(0,o.jsx)(d,{isLink:!0,nav:e,manuVariant:n})},e.key):(0,o.jsx)(o.Fragment,{})}))})}},6235:function(e,n,t){var r=t(1413),i=(t(2791),t(1694)),a=t.n(i),s=t(2639),c=t(3329),o=function(e){var n=e.type,t=e.mode,i=e.gutter,o=e.className,u=e.imgClass,l=e.style,d=e.logoWidth;return(0,c.jsx)("div",{className:a()("logo",o,i),style:(0,r.Z)((0,r.Z)({},l),{width:d}),children:(0,c.jsx)("img",{className:u,src:"".concat("/img/logo/","logo-").concat(t,"-").concat(n,".png"),alt:"".concat(s.iC," logo")})})};o.defaultProps={mode:"light",type:"full",logoWidth:"auto"},n.Z=o},8874:function(e,n,t){var r=t(9439),i=t(2791),a=t(1694),s=t.n(a),c=t(8109),o=t(8669),u=t(8585),l=t(1453),d=t(543),f=t(7584),h=t(6030),p=t(3329),v=(0,i.lazy)((function(){return t.e(761).then(t.bind(t,761))})),m=(0,u.Z)(l.uI);n.Z=function(){var e=(0,i.useState)(!1),n=(0,r.Z)(e,2),t=n[0],a=n[1],u=function(e){a(!1)},l=(0,h.v9)((function(e){return e.theme.themeColor})),x=(0,h.v9)((function(e){return e.theme.primaryColorLevel})),g=(0,h.v9)((function(e){return e.theme.navMode})),j=(0,h.v9)((function(e){return e.theme.mode})),y=(0,h.v9)((function(e){return e.theme.direction})),b=(0,h.v9)((function(e){return e.base.common.currentRouteKey})),N=(0,h.v9)((function(e){return e.theme.layout.sideNavCollapse})),w=(0,h.v9)((function(e){return e.auth.user.authority})),k=(0,f.Z)().smaller;return(0,p.jsx)(p.Fragment,{children:k.md&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("div",{className:"text-2xl",onClick:function(){a(!0)},children:(0,p.jsx)(m,{toggled:t})}),(0,p.jsx)(c.dy,{title:"Navigation",isOpen:t,onClose:u,onRequestClose:u,bodyClass:s()(g===o.Xc?"bg-".concat(l,"-").concat(x," side-nav-").concat(g):g===o.d0?"side-nav-".concat(j):"side-nav-".concat(g),"p-0"),width:330,placement:y===o.hn?"right":"left",children:(0,p.jsx)(i.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:t&&(0,p.jsx)(v,{navMode:g,collapsed:N,navigationTree:d.Z,routeKey:b,userAuthority:w,onMenuItemClick:u,direction:y})})})]})})}},9126:function(e,n,t){t(2791);var r=t(8109),i=t(8585),a=t(3110),s=t(1087),c=t(1694),o=t.n(c),u=t(8617),l=t(3329),d=[];n.Z=(0,i.Z)((function(e){var n=e.className,t=(0,a.Z)().signOut,i=(0,l.jsxs)("div",{className:o()(n,"flex items-center gap-2"),children:[(0,l.jsx)(r.qE,{size:32,shape:"circle",icon:(0,l.jsx)(u.HHH,{})}),(0,l.jsxs)("div",{className:"hidden md:block",children:[(0,l.jsx)("div",{className:"text-xs capitalize",children:"admin"}),(0,l.jsx)("div",{className:"font-bold",children:"User01"})]})]});return(0,l.jsx)("div",{children:(0,l.jsxs)(r.Lt,{menuStyle:{minWidth:240},renderTitle:i,placement:"bottom-end",children:[(0,l.jsx)(r.Lt.Item,{variant:"header",children:(0,l.jsxs)("div",{className:"py-2 px-3 flex items-center gap-2",children:[(0,l.jsx)(r.qE,{shape:"circle",icon:(0,l.jsx)(u.HHH,{})}),(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"font-bold text-gray-900 dark:text-gray-100",children:"User01"}),(0,l.jsx)("div",{className:"text-xs",children:"user01@mail.com"})]})]})}),(0,l.jsx)(r.Lt.Item,{variant:"divider"}),d.map((function(e){return(0,l.jsx)(r.Lt.Item,{eventKey:e.label,className:"mb-1 px-0",children:(0,l.jsx)(s.rU,{className:"flex h-full w-full px-2",to:e.path,children:(0,l.jsxs)("span",{className:"flex gap-2 items-center w-full",children:[(0,l.jsx)("span",{className:"text-xl opacity-50",children:e.icon}),(0,l.jsx)("span",{children:e.label})]})})},e.label)})),(0,l.jsxs)(r.Lt.Item,{onClick:t,eventKey:"Sign Out",className:"gap-2",children:[(0,l.jsx)("span",{className:"text-xl opacity-50",children:(0,l.jsx)(u.cKt,{})}),(0,l.jsx)("span",{children:"Sign Out"})]})]})})}))},7634:function(e,n,t){t(2791);var r=t(8617),i=t(3329),a={home:(0,i.jsx)(r.VRM,{}),singleMenu:(0,i.jsx)(r.gvM,{}),collapseMenu:(0,i.jsx)(r.s7k,{}),groupSingleMenu:(0,i.jsx)(r.$Fr,{}),groupCollapseMenu:(0,i.jsx)(r.Wdx,{})};n.Z=a},543:function(e,n,t){var r=[{key:"home",path:"/home",title:"Transcripts",translateKey:"nav.transcripts",icon:"singleMenu",type:t(350).vS,authority:[],subMenu:[]}];n.Z=r},350:function(e,n,t){t.d(n,{ZH:function(){return r},hX:function(){return i},vS:function(){return a}});var r="title",i="collapse",a="item"},7584:function(e,n,t){var r=t(9439),i=t(2791),a="576",s="640px",c="768px",o="1024px",u="1280px",l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return parseInt(e.replace("px",""))},d={"2xl":l("1536px"),xl:l(u),lg:l(o),md:l(c),sm:l(s),xs:l(a)};n.Z=function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"smaller",n=window.innerWidth;return Object.fromEntries(Object.entries(d).map((function(t){var i=(0,r.Z)(t,2),a=i[0],s=i[1];return[a,"larger"===e?n>s:n<s]})))},n=function(){return{windowWidth:window.innerWidth,larger:e("larger"),smaller:e("smaller")}},t=(0,i.useState)(n()),a=(0,r.Z)(t,2),s=a[0],c=a[1],o=function(){var e=n();c(e)};return(0,i.useEffect)((function(){return window.addEventListener("resize",o),function(){return window.removeEventListener("resize",o)}}),[s.windowWidth]),s}},2020:function(e,n,t){t.d(n,{$:function(){return d}});var r=t(9439),i=t(4942),a=t(2791),s=t(8589),c=t(1426);function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var l=function(e,n){var t=(0,a.useRef)();return(0,a.useEffect)((function(){t.current=n?t.current:e}),[e,n]),t.current};function d(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.i18n,i=(0,a.useContext)(s.OO)||{},o=i.i18n,d=i.defaultNS,f=t||o||(0,s.nI)();if(f&&!f.reportNamespaces&&(f.reportNamespaces=new s.zv),!f){(0,c.O4)("You will need to pass in an i18next instance by using initReactI18next");var h=function(e){return Array.isArray(e)?e[e.length-1]:e},p=[h,{},!1];return p.t=h,p.i18n={},p.ready=!1,p}f.options.react&&void 0!==f.options.react.wait&&(0,c.O4)("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var v=u(u(u({},(0,s.JP)()),f.options.react),n),m=v.useSuspense,x=v.keyPrefix,g=e||d||f.options&&f.options.defaultNS;g="string"===typeof g?[g]:g||["translation"],f.reportNamespaces.addUsedNamespaces&&f.reportNamespaces.addUsedNamespaces(g);var j=(f.isInitialized||f.initializedStoreOnce)&&g.every((function(e){return(0,c.F0)(e,f,v)}));function y(){return f.getFixedT(null,"fallback"===v.nsMode?g:g[0],x)}var b=(0,a.useState)(y),N=(0,r.Z)(b,2),w=N[0],k=N[1],O=g.join(),C=l(O),Z=(0,a.useRef)(!0);(0,a.useEffect)((function(){var e=v.bindI18n,n=v.bindI18nStore;function t(){Z.current&&k(y)}return Z.current=!0,j||m||(0,c.DC)(f,g,(function(){Z.current&&k(y)})),j&&C&&C!==O&&Z.current&&k(y),e&&f&&f.on(e,t),n&&f&&f.store.on(n,t),function(){Z.current=!1,e&&f&&e.split(" ").forEach((function(e){return f.off(e,t)})),n&&f&&n.split(" ").forEach((function(e){return f.store.off(e,t)}))}}),[f,O]);var S=(0,a.useRef)(!0);(0,a.useEffect)((function(){Z.current&&!S.current&&k(y),S.current=!1}),[f,x]);var L=[w,f,j];if(L.t=w,L.i18n=f,L.ready=j,j)return L;if(!j&&!m)return L;throw new Promise((function(e){(0,c.DC)(f,g,(function(){e()}))}))}},1426:function(e,n,t){function r(){if(console&&console.warn){for(var e,n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];"string"===typeof t[0]&&(t[0]="react-i18next:: ".concat(t[0])),(e=console).warn.apply(e,t)}}t.d(n,{DC:function(){return s},F0:function(){return o},O4:function(){return a},ZK:function(){return r}});var i={};function a(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];"string"===typeof n[0]&&i[n[0]]||("string"===typeof n[0]&&(i[n[0]]=new Date),r.apply(void 0,n))}function s(e,n,t){e.loadNamespaces(n,(function(){if(e.isInitialized)t();else{e.on("initialized",(function n(){setTimeout((function(){e.off("initialized",n)}),0),t()}))}}))}function c(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.languages[0],i=!!n.options&&n.options.fallbackLng,a=n.languages[n.languages.length-1];if("cimode"===r.toLowerCase())return!0;var s=function(e,t){var r=n.services.backendConnector.state["".concat(e,"|").concat(t)];return-1===r||2===r};return!(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!s(n.isLanguageChangingTo,e))&&(!!n.hasResourceBundle(r,e)||(!(n.services.backendConnector.backend&&(!n.options.resources||n.options.partialBundledLanguages))||!(!s(r,e)||i&&!s(a,e))))}function o(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n.languages||!n.languages.length)return a("i18n.languages were undefined or empty",n.languages),!0;var r=void 0!==n.options.ignoreJSONStructure;return r?n.hasLoadedNamespace(e,{precheck:function(n,r){if(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!r(n.isLanguageChangingTo,e))return!1}}):c(e,n,t)}}}]);
//# sourceMappingURL=994.6b71e969.chunk.js.map