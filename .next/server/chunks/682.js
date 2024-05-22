"use strict";exports.id=682,exports.ids=[682],exports.modules={61682:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{Head:function(){return O},Html:function(){return x},Main:function(){return b},NextScript:function(){return P},default:function(){return N}});const r=n(20997),i=d(n(16689)),o=n(45104),s=n(75778),a=n(79630),c=p(n(80676)),u=n(3112),l=n(8584);function p(e){return e&&e.__esModule?e:{default:e}}function f(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}function d(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var s=i?Object.getOwnPropertyDescriptor(e,o):null;s&&(s.get||s.set)?Object.defineProperty(r,o,s):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}const h=new Set;function m(e,t,n){const r=(0,s.getPageFiles)(e,"/_app"),i=n?[]:(0,s.getPageFiles)(e,t);return{sharedFiles:r,pageFiles:i,allFiles:[...new Set([...r,...i])]}}function _(e,t){const{assetPrefix:n,buildManifest:i,assetQueryString:o,disableOptimizedLoading:s,crossOrigin:a}=e;return i.polyfillFiles.filter((e=>e.endsWith(".js")&&!e.endsWith(".module.js"))).map((e=>(0,r.jsx)("script",{defer:!s,nonce:t.nonce,crossOrigin:t.crossOrigin||a,noModule:!0,src:`${n}/_next/${(0,l.encodeURIPath)(e)}${o}`},e)))}function g({styles:e}){if(!e)return null;const t=Array.isArray(e)?e:[];if(e.props&&Array.isArray(e.props.children)){const n=e=>{var t,n;return null==e||null==(n=e.props)||null==(t=n.dangerouslySetInnerHTML)?void 0:t.__html};e.props.children.forEach((e=>{Array.isArray(e)?e.forEach((e=>n(e)&&t.push(e))):n(e)&&t.push(e)}))}return(0,r.jsx)("style",{"amp-custom":"",dangerouslySetInnerHTML:{__html:t.map((e=>e.props.dangerouslySetInnerHTML.__html)).join("").replace(/\/\*# sourceMappingURL=.*\*\//g,"").replace(/\/\*@ sourceURL=.*?\*\//g,"")}})}function E(e,t,n){const{dynamicImports:i,assetPrefix:o,isDevelopment:s,assetQueryString:a,disableOptimizedLoading:c,crossOrigin:u}=e;return i.map((e=>!e.endsWith(".js")||n.allFiles.includes(e)?null:(0,r.jsx)("script",{async:!s&&c,defer:!c,src:`${o}/_next/${(0,l.encodeURIPath)(e)}${a}`,nonce:t.nonce,crossOrigin:t.crossOrigin||u},e)))}function y(e,t,n){var i;const{assetPrefix:o,buildManifest:s,isDevelopment:a,assetQueryString:c,disableOptimizedLoading:u,crossOrigin:p}=e;return[...n.allFiles.filter((e=>e.endsWith(".js"))),...null==(i=s.lowPriorityFiles)?void 0:i.filter((e=>e.endsWith(".js")))].map((e=>(0,r.jsx)("script",{src:`${o}/_next/${(0,l.encodeURIPath)(e)}${c}`,nonce:t.nonce,async:!a&&u,defer:!u,crossOrigin:t.crossOrigin||p},e)))}function S(e,t){const{scriptLoader:n,disableOptimizedLoading:o,crossOrigin:s}=e,a=function(e,t){const{assetPrefix:n,scriptLoader:o,crossOrigin:s,nextScriptWorkers:a}=e;if(!a)return null;try{let{partytownSnippet:e}=require("@builder.io/partytown/integration");const a=(Array.isArray(t.children)?t.children:[t.children]).find((e=>{var t,n;return function(e){return!!e&&!!e.props}(e)&&(null==e||null==(n=e.props)||null==(t=n.dangerouslySetInnerHTML)?void 0:t.__html.length)&&"data-partytown-config"in e.props}));return(0,r.jsxs)(r.Fragment,{children:[!a&&(0,r.jsx)("script",{"data-partytown-config":"",dangerouslySetInnerHTML:{__html:`\n            partytown = {\n              lib: "${n}/_next/static/~partytown/"\n            };\n          `}}),(0,r.jsx)("script",{"data-partytown":"",dangerouslySetInnerHTML:{__html:e()}}),(o.worker||[]).map(((e,n)=>{const{strategy:r,src:o,children:a,dangerouslySetInnerHTML:c,...u}=e;let l={};if(o)l.src=o;else if(c&&c.__html)l.dangerouslySetInnerHTML={__html:c.__html};else{if(!a)throw new Error("Invalid usage of next/script. Did you forget to include a src attribute or an inline script? https://nextjs.org/docs/messages/invalid-script");l.dangerouslySetInnerHTML={__html:"string"===typeof a?a:Array.isArray(a)?a.join(""):""}}return(0,i.createElement)("script",{...l,...u,type:"text/partytown",key:o||n,nonce:t.nonce,"data-nscript":"worker",crossOrigin:t.crossOrigin||s})}))]})}catch(u){return(0,c.default)(u)&&"MODULE_NOT_FOUND"!==u.code&&console.warn(`Warning: ${u.message}`),null}}(e,t),u=(n.beforeInteractive||[]).filter((e=>e.src)).map(((e,n)=>{const{strategy:r,...a}=e;return(0,i.createElement)("script",{...a,key:a.src||n,defer:a.defer??!o,nonce:t.nonce,"data-nscript":"beforeInteractive",crossOrigin:t.crossOrigin||s})}));return(0,r.jsxs)(r.Fragment,{children:[a,u]})}function I(e){const{crossOrigin:t,nonce:n,...r}=e;return r}function T(e,t){return e||`${t}${t.includes("?")?"&":"?"}amp=1`}class O extends i.default.Component{static#e=this.contextType=u.HtmlContext;getCssLinks(e){const{assetPrefix:t,assetQueryString:n,dynamicImports:i,crossOrigin:o,optimizeCss:s,optimizeFonts:a}=this.context,c=e.allFiles.filter((e=>e.endsWith(".css"))),u=new Set(e.sharedFiles);let p=new Set([]),f=Array.from(new Set(i.filter((e=>e.endsWith(".css")))));if(f.length){const e=new Set(c);f=f.filter((t=>!(e.has(t)||u.has(t)))),p=new Set(f),c.push(...f)}let d=[];return c.forEach((e=>{const i=u.has(e);s||d.push((0,r.jsx)("link",{nonce:this.props.nonce,rel:"preload",href:`${t}/_next/${(0,l.encodeURIPath)(e)}${n}`,as:"style",crossOrigin:this.props.crossOrigin||o},`${e}-preload`));const a=p.has(e);d.push((0,r.jsx)("link",{nonce:this.props.nonce,rel:"stylesheet",href:`${t}/_next/${(0,l.encodeURIPath)(e)}${n}`,crossOrigin:this.props.crossOrigin||o,"data-n-g":a?void 0:i?"":void 0,"data-n-p":a||i?void 0:""},e))})),a&&(d=this.makeStylesheetInert(d)),0===d.length?null:d}getPreloadDynamicChunks(){const{dynamicImports:e,assetPrefix:t,assetQueryString:n,crossOrigin:i}=this.context;return e.map((e=>e.endsWith(".js")?(0,r.jsx)("link",{rel:"preload",href:`${t}/_next/${(0,l.encodeURIPath)(e)}${n}`,as:"script",nonce:this.props.nonce,crossOrigin:this.props.crossOrigin||i},e):null)).filter(Boolean)}getPreloadMainLinks(e){const{assetPrefix:t,assetQueryString:n,scriptLoader:i,crossOrigin:o}=this.context,s=e.allFiles.filter((e=>e.endsWith(".js")));return[...(i.beforeInteractive||[]).map((e=>(0,r.jsx)("link",{nonce:this.props.nonce,rel:"preload",href:e.src,as:"script",crossOrigin:this.props.crossOrigin||o},e.src))),...s.map((e=>(0,r.jsx)("link",{nonce:this.props.nonce,rel:"preload",href:`${t}/_next/${(0,l.encodeURIPath)(e)}${n}`,as:"script",crossOrigin:this.props.crossOrigin||o},e)))]}getBeforeInteractiveInlineScripts(){const{scriptLoader:e}=this.context,{nonce:t,crossOrigin:n}=this.props;return(e.beforeInteractive||[]).filter((e=>!e.src&&(e.dangerouslySetInnerHTML||e.children))).map(((e,r)=>{const{strategy:o,children:s,dangerouslySetInnerHTML:a,src:c,...u}=e;let l="";return a&&a.__html?l=a.__html:s&&(l="string"===typeof s?s:Array.isArray(s)?s.join(""):""),(0,i.createElement)("script",{...u,dangerouslySetInnerHTML:{__html:l},key:u.id||r,nonce:t,"data-nscript":"beforeInteractive",crossOrigin:n||void 0})}))}getDynamicChunks(e){return E(this.context,this.props,e)}getPreNextScripts(){return S(this.context,this.props)}getScripts(e){return y(this.context,this.props,e)}getPolyfillScripts(){return _(this.context,this.props)}makeStylesheetInert(e){return i.default.Children.map(e,(e=>{var t,n;if("link"===(null==e?void 0:e.type)&&(null==e||null==(t=e.props)?void 0:t.href)&&o.OPTIMIZED_FONT_PROVIDERS.some((({url:t})=>{var n,r;return null==e||null==(r=e.props)||null==(n=r.href)?void 0:n.startsWith(t)}))){const t={...e.props||{},"data-href":e.props.href,href:void 0};return i.default.cloneElement(e,t)}if(null==e||null==(n=e.props)?void 0:n.children){const t={...e.props||{},children:this.makeStylesheetInert(e.props.children)};return i.default.cloneElement(e,t)}return e})).filter(Boolean)}render(){const{styles:e,ampPath:t,inAmpMode:o,hybridAmp:s,canonicalBase:a,__NEXT_DATA__:c,dangerousAsPath:u,headTags:p,unstable_runtimeJS:f,unstable_JsPreload:d,disableOptimizedLoading:h,optimizeCss:_,optimizeFonts:E,assetPrefix:y,nextFontManifest:S}=this.context,O=!1===f,P=!1===d||!h;this.context.docComponentsRendered.Head=!0;let{head:x}=this.context,b=[],N=[];x&&(x.forEach((e=>{let t;this.context.strictNextHead&&(t=i.default.createElement("meta",{name:"next-head",content:"1"})),e&&"link"===e.type&&"preload"===e.props.rel&&"style"===e.props.as?(t&&b.push(t),b.push(e)):e&&(!t||"meta"===e.type&&e.props.charSet||N.push(t),N.push(e))})),x=b.concat(N));let j=i.default.Children.toArray(this.props.children).filter(Boolean);E&&!o&&(j=this.makeStylesheetInert(j));let v=!1,A=!1;x=i.default.Children.map(x||[],(e=>{if(!e)return e;const{type:t,props:n}=e;if(o){let r="";if("meta"===t&&"viewport"===n.name?r='name="viewport"':"link"===t&&"canonical"===n.rel?A=!0:"script"===t&&(n.src&&n.src.indexOf("ampproject")<-1||n.dangerouslySetInnerHTML&&(!n.type||"text/javascript"===n.type))&&(r="<script",Object.keys(n).forEach((e=>{r+=` ${e}="${n[e]}"`})),r+="/>"),r)return console.warn(`Found conflicting amp tag "${e.type}" with conflicting prop ${r} in ${c.page}. https://nextjs.org/docs/messages/conflicting-amp-tag`),null}else"link"===t&&"amphtml"===n.rel&&(v=!0);return e}));const R=m(this.context.buildManifest,this.context.__NEXT_DATA__.page,o),M=function(e,t,n=""){if(!e)return{preconnect:null,preload:null};const i=e.pages["/_app"],o=e.pages[t],s=Array.from(new Set([...i??[],...o??[]]));return{preconnect:0===s.length&&(i||o)?(0,r.jsx)("link",{"data-next-font":e.pagesUsingSizeAdjust?"size-adjust":"",rel:"preconnect",href:"/",crossOrigin:"anonymous"}):null,preload:s?s.map((e=>{const t=/\.(woff|woff2|eot|ttf|otf)$/.exec(e)[1];return(0,r.jsx)("link",{rel:"preload",href:`${n}/_next/${(0,l.encodeURIPath)(e)}`,as:"font",type:`font/${t}`,crossOrigin:"anonymous","data-next-font":e.includes("-s")?"size-adjust":""},e)})):null}}(S,u,y);return(0,r.jsxs)("head",{...I(this.props),children:[this.context.isDevelopment&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{"data-next-hide-fouc":!0,"data-ampdevmode":o?"true":void 0,dangerouslySetInnerHTML:{__html:"body{display:none}"}}),(0,r.jsx)("noscript",{"data-next-hide-fouc":!0,"data-ampdevmode":o?"true":void 0,children:(0,r.jsx)("style",{dangerouslySetInnerHTML:{__html:"body{display:block}"}})})]}),x,this.context.strictNextHead?null:(0,r.jsx)("meta",{name:"next-head-count",content:i.default.Children.count(x||[]).toString()}),j,E&&(0,r.jsx)("meta",{name:"next-font-preconnect"}),M.preconnect,M.preload,o&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("meta",{name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"}),!A&&(0,r.jsx)("link",{rel:"canonical",href:a+n(50733).cleanAmpPath(u)}),(0,r.jsx)("link",{rel:"preload",as:"script",href:"https://cdn.ampproject.org/v0.js"}),(0,r.jsx)(g,{styles:e}),(0,r.jsx)("style",{"amp-boilerplate":"",dangerouslySetInnerHTML:{__html:"body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}"}}),(0,r.jsx)("noscript",{children:(0,r.jsx)("style",{"amp-boilerplate":"",dangerouslySetInnerHTML:{__html:"body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}"}})}),(0,r.jsx)("script",{async:!0,src:"https://cdn.ampproject.org/v0.js"})]}),!o&&(0,r.jsxs)(r.Fragment,{children:[!v&&s&&(0,r.jsx)("link",{rel:"amphtml",href:a+T(t,u)}),this.getBeforeInteractiveInlineScripts(),!_&&this.getCssLinks(R),!_&&(0,r.jsx)("noscript",{"data-n-css":this.props.nonce??""}),!O&&!P&&this.getPreloadDynamicChunks(),!O&&!P&&this.getPreloadMainLinks(R),!h&&!O&&this.getPolyfillScripts(),!h&&!O&&this.getPreNextScripts(),!h&&!O&&this.getDynamicChunks(R),!h&&!O&&this.getScripts(R),_&&this.getCssLinks(R),_&&(0,r.jsx)("noscript",{"data-n-css":this.props.nonce??""}),this.context.isDevelopment&&(0,r.jsx)("noscript",{id:"__next_css__DO_NOT_USE__"}),e||null]}),i.default.createElement(i.default.Fragment,{},...p||[])]})}}class P extends i.default.Component{static#e=this.contextType=u.HtmlContext;getDynamicChunks(e){return E(this.context,this.props,e)}getPreNextScripts(){return S(this.context,this.props)}getScripts(e){return y(this.context,this.props,e)}getPolyfillScripts(){return _(this.context,this.props)}static getInlineScriptSource(e){const{__NEXT_DATA__:t,largePageDataBytes:r}=e;try{const i=JSON.stringify(t);if(h.has(t.page))return(0,a.htmlEscapeJsonString)(i);const o=Buffer.from(i).byteLength,s=n(95955).Z;return r&&o>r&&(h.add(t.page),console.warn(`Warning: data for page "${t.page}"${t.page===e.dangerousAsPath?"":` (path "${e.dangerousAsPath}")`} is ${s(o)} which exceeds the threshold of ${s(r)}, this amount of data can reduce performance.\nSee more info here: https://nextjs.org/docs/messages/large-page-data`)),(0,a.htmlEscapeJsonString)(i)}catch(i){if((0,c.default)(i)&&-1!==i.message.indexOf("circular structure"))throw new Error(`Circular structure in "getInitialProps" result of page "${t.page}". https://nextjs.org/docs/messages/circular-structure`);throw i}}render(){const{assetPrefix:e,inAmpMode:t,buildManifest:n,unstable_runtimeJS:i,docComponentsRendered:o,assetQueryString:s,disableOptimizedLoading:a,crossOrigin:c}=this.context,u=!1===i;if(o.NextScript=!0,t)return null;const p=m(this.context.buildManifest,this.context.__NEXT_DATA__.page,t);return(0,r.jsxs)(r.Fragment,{children:[!u&&n.devFiles?n.devFiles.map((t=>(0,r.jsx)("script",{src:`${e}/_next/${(0,l.encodeURIPath)(t)}${s}`,nonce:this.props.nonce,crossOrigin:this.props.crossOrigin||c},t))):null,u?null:(0,r.jsx)("script",{id:"__NEXT_DATA__",type:"application/json",nonce:this.props.nonce,crossOrigin:this.props.crossOrigin||c,dangerouslySetInnerHTML:{__html:P.getInlineScriptSource(this.context)}}),a&&!u&&this.getPolyfillScripts(),a&&!u&&this.getPreNextScripts(),a&&!u&&this.getDynamicChunks(p),a&&!u&&this.getScripts(p)]})}}function x(e){const{inAmpMode:t,docComponentsRendered:n,locale:o,scriptLoader:s,__NEXT_DATA__:a}=(0,u.useHtmlContext)();return n.Html=!0,function(e,t,n){var r,o,s,a;if(!n.children)return;const c=[],u=Array.isArray(n.children)?n.children:[n.children],l=null==(o=u.find((e=>e.type===O)))||null==(r=o.props)?void 0:r.children,p=null==(a=u.find((e=>"body"===e.type)))||null==(s=a.props)?void 0:s.children,f=[...Array.isArray(l)?l:[l],...Array.isArray(p)?p:[p]];i.default.Children.forEach(f,(t=>{var n;if(t&&(null==(n=t.type)?void 0:n.__nextScript)){if("beforeInteractive"===t.props.strategy)return void(e.beforeInteractive=(e.beforeInteractive||[]).concat([{...t.props}]));if(["lazyOnload","afterInteractive","worker"].includes(t.props.strategy))return void c.push(t.props)}})),t.scriptLoader=c}(s,a,e),(0,r.jsx)("html",{...e,lang:e.lang||o||void 0,amp:t?"":void 0,"data-ampdevmode":void 0})}function b(){const{docComponentsRendered:e}=(0,u.useHtmlContext)();return e.Main=!0,(0,r.jsx)("next-js-internal-body-render-target",{})}class N extends i.default.Component{static getInitialProps(e){return e.defaultGetInitialProps(e)}render(){return(0,r.jsxs)(x,{children:[(0,r.jsx)(O,{}),(0,r.jsxs)("body",{children:[(0,r.jsx)(b,{}),(0,r.jsx)(P,{})]})]})}}N[o.NEXT_BUILTIN_DOCUMENT]=function(){return(0,r.jsxs)(x,{children:[(0,r.jsx)(O,{}),(0,r.jsxs)("body",{children:[(0,r.jsx)(b,{}),(0,r.jsx)(P,{})]})]})}},45104:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{APP_BUILD_MANIFEST:function(){return y},APP_CLIENT_INTERNALS:function(){return K},APP_PATHS_MANIFEST:function(){return _},APP_PATH_ROUTES_MANIFEST:function(){return g},AUTOMATIC_FONT_OPTIMIZATION_MANIFEST:function(){return L},BARREL_OPTIMIZATION_PREFIX:function(){return W},BLOCKED_PAGES:function(){return F},BUILD_ID_FILE:function(){return D},BUILD_MANIFEST:function(){return E},CLIENT_PUBLIC_FILES_PATH:function(){return k},CLIENT_REFERENCE_MANIFEST:function(){return H},CLIENT_STATIC_FILES_PATH:function(){return U},CLIENT_STATIC_FILES_RUNTIME_AMP:function(){return Z},CLIENT_STATIC_FILES_RUNTIME_MAIN:function(){return V},CLIENT_STATIC_FILES_RUNTIME_MAIN_APP:function(){return J},CLIENT_STATIC_FILES_RUNTIME_POLYFILLS:function(){return ee},CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL:function(){return te},CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH:function(){return Q},CLIENT_STATIC_FILES_RUNTIME_WEBPACK:function(){return q},COMPILER_INDEXES:function(){return s},COMPILER_NAMES:function(){return i},CONFIG_FILES:function(){return C},DEFAULT_RUNTIME_WEBPACK:function(){return ne},DEFAULT_SANS_SERIF_FONT:function(){return ue},DEFAULT_SERIF_FONT:function(){return ce},DEV_CLIENT_PAGES_MANIFEST:function(){return v},DEV_MIDDLEWARE_MANIFEST:function(){return R},EDGE_RUNTIME_WEBPACK:function(){return re},EDGE_UNSUPPORTED_NODE_APIS:function(){return he},EXPORT_DETAIL:function(){return P},EXPORT_MARKER:function(){return O},FUNCTIONS_CONFIG_MANIFEST:function(){return S},GOOGLE_FONT_PROVIDER:function(){return se},IMAGES_MANIFEST:function(){return N},INTERCEPTION_ROUTE_REWRITE_MANIFEST:function(){return X},INTERNAL_HEADERS:function(){return o},MIDDLEWARE_BUILD_MANIFEST:function(){return G},MIDDLEWARE_MANIFEST:function(){return A},MIDDLEWARE_REACT_LOADABLE_MANIFEST:function(){return Y},MODERN_BROWSERSLIST_TARGET:function(){return r.default},NEXT_BUILTIN_DOCUMENT:function(){return B},NEXT_FONT_MANIFEST:function(){return T},OPTIMIZED_FONT_PROVIDERS:function(){return ae},PAGES_MANIFEST:function(){return m},PHASE_DEVELOPMENT_SERVER:function(){return f},PHASE_EXPORT:function(){return u},PHASE_INFO:function(){return h},PHASE_PRODUCTION_BUILD:function(){return l},PHASE_PRODUCTION_SERVER:function(){return p},PHASE_TEST:function(){return d},PRERENDER_MANIFEST:function(){return x},REACT_LOADABLE_MANIFEST:function(){return M},ROUTES_MANIFEST:function(){return b},RSC_MODULE_TYPES:function(){return de},SERVER_DIRECTORY:function(){return w},SERVER_FILES_MANIFEST:function(){return j},SERVER_PROPS_ID:function(){return oe},SERVER_REFERENCE_MANIFEST:function(){return z},STATIC_PROPS_ID:function(){return ie},STATIC_STATUS_PAGES:function(){return le},STRING_LITERAL_DROP_BUNDLE:function(){return $},SUBRESOURCE_INTEGRITY_MANIFEST:function(){return I},SYSTEM_ENTRYPOINTS:function(){return me},TRACE_OUTPUT_VERSION:function(){return pe},TURBO_TRACE_DEFAULT_MEMORY_LIMIT:function(){return fe},UNDERSCORE_NOT_FOUND_ROUTE:function(){return a},UNDERSCORE_NOT_FOUND_ROUTE_ENTRY:function(){return c}});const r=n(50167)._(n(60979)),i={client:"client",server:"server",edgeServer:"edge-server"},o=["x-invoke-error","x-invoke-output","x-invoke-path","x-invoke-query","x-invoke-status","x-middleware-invoke"],s={[i.client]:0,[i.server]:1,[i.edgeServer]:2},a="/_not-found",c=a+"/page",u="phase-export",l="phase-production-build",p="phase-production-server",f="phase-development-server",d="phase-test",h="phase-info",m="pages-manifest.json",_="app-paths-manifest.json",g="app-path-routes-manifest.json",E="build-manifest.json",y="app-build-manifest.json",S="functions-config-manifest.json",I="subresource-integrity-manifest",T="next-font-manifest",O="export-marker.json",P="export-detail.json",x="prerender-manifest.json",b="routes-manifest.json",N="images-manifest.json",j="required-server-files.json",v="_devPagesManifest.json",A="middleware-manifest.json",R="_devMiddlewareManifest.json",M="react-loadable-manifest.json",L="font-manifest.json",w="server",C=["next.config.js","next.config.mjs"],D="BUILD_ID",F=["/_document","/_app","/_error"],k="public",U="static",$="__NEXT_DROP_CLIENT_FILE__",B="__NEXT_BUILTIN_DOCUMENT__",W="__barrel_optimize__",H="client-reference-manifest",z="server-reference-manifest",G="middleware-build-manifest",Y="middleware-react-loadable-manifest",X="interception-route-rewrite-manifest",V="main",J=V+"-app",K="app-pages-internals",Q="react-refresh",Z="amp",q="webpack",ee="polyfills",te=Symbol(ee),ne="webpack-runtime",re="edge-runtime-webpack",ie="__N_SSG",oe="__N_SSP",se="https://fonts.googleapis.com/",ae=[{url:se,preconnect:"https://fonts.gstatic.com"},{url:"https://use.typekit.net",preconnect:"https://use.typekit.net"}],ce={name:"Times New Roman",xAvgCharWidth:821,azAvgWidth:854.3953488372093,unitsPerEm:2048},ue={name:"Arial",xAvgCharWidth:904,azAvgWidth:934.5116279069767,unitsPerEm:2048},le=["/500"],pe=1,fe=6e3,de={client:"client",server:"server"},he=["clearImmediate","setImmediate","BroadcastChannel","ByteLengthQueuingStrategy","CompressionStream","CountQueuingStrategy","DecompressionStream","DomException","MessageChannel","MessageEvent","MessagePort","ReadableByteStreamController","ReadableStreamBYOBRequest","ReadableStreamDefaultController","TransformStreamDefaultController","WritableStreamDefaultController"],me=new Set([V,Q,Z,J]);("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8584:(e,t)=>{function n(e){return e.split("/").map((e=>encodeURIComponent(e))).join("/")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"encodeURIPath",{enumerable:!0,get:function(){return n}})},58299:(e,t)=>{function n(e){return Object.prototype.toString.call(e)}function r(e){if("[object Object]"!==n(e))return!1;const t=Object.getPrototypeOf(e);return null===t||t.hasOwnProperty("isPrototypeOf")}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{getObjectClassLabel:function(){return n},isPlainObject:function(){return r}})},60979:e=>{e.exports=["chrome 64","edge 79","firefox 67","opera 51","safari 12"]},75876:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"denormalizePagePath",{enumerable:!0,get:function(){return o}});const r=n(72189),i=n(24212);function o(e){let t=(0,i.normalizePathSep)(e);return t.startsWith("/index/")&&!(0,r.isDynamicRoute)(t)?t.slice(6):"/index"!==t?t:"/"}},75078:(e,t)=>{function n(e){return e.startsWith("/")?e:"/"+e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ensureLeadingSlash",{enumerable:!0,get:function(){return n}})},49431:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"normalizePagePath",{enumerable:!0,get:function(){return s}});const r=n(75078),i=n(72189),o=n(45782);function s(e){const t=/^\/index(\/|$)/.test(e)&&!(0,i.isDynamicRoute)(e)?"/index"+e:"/"===e?"/index":(0,r.ensureLeadingSlash)(e);{const{posix:e}=n(71017),r=e.normalize(t);if(r!==t)throw new o.NormalizeError("Requested and resolved page mismatch: "+t+" "+r)}return t}},24212:(e,t)=>{function n(e){return e.replace(/\\/g,"/")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"normalizePathSep",{enumerable:!0,get:function(){return n}})},42340:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{normalizeAppPath:function(){return o},normalizeRscURL:function(){return s}});const r=n(75078),i=n(73737);function o(e){return(0,r.ensureLeadingSlash)(e.split("/").reduce(((e,t,n,r)=>t?(0,i.isGroupSegment)(t)||"@"===t[0]?e:"page"!==t&&"route"!==t||n!==r.length-1?e+"/"+t:e:e),""))}function s(e){return e.replace(/\.rsc($|\?)/,"$1")}},72189:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{getSortedRoutes:function(){return r.getSortedRoutes},isDynamicRoute:function(){return i.isDynamicRoute}});const r=n(317),i=n(31735)},31735:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isDynamicRoute",{enumerable:!0,get:function(){return o}});const r=n(92407),i=/\/\[[^/]+?\](?=\/|$)/;function o(e){return(0,r.isInterceptionRouteAppPath)(e)&&(e=(0,r.extractInterceptionRouteInformation)(e).interceptedRoute),i.test(e)}},317:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSortedRoutes",{enumerable:!0,get:function(){return r}});class n{insert(e){this._insert(e.split("/").filter(Boolean),[],!1)}smoosh(){return this._smoosh()}_smoosh(e){void 0===e&&(e="/");const t=[...this.children.keys()].sort();null!==this.slugName&&t.splice(t.indexOf("[]"),1),null!==this.restSlugName&&t.splice(t.indexOf("[...]"),1),null!==this.optionalRestSlugName&&t.splice(t.indexOf("[[...]]"),1);const n=t.map((t=>this.children.get(t)._smoosh(""+e+t+"/"))).reduce(((e,t)=>[...e,...t]),[]);if(null!==this.slugName&&n.push(...this.children.get("[]")._smoosh(e+"["+this.slugName+"]/")),!this.placeholder){const t="/"===e?"/":e.slice(0,-1);if(null!=this.optionalRestSlugName)throw new Error('You cannot define a route with the same specificity as a optional catch-all route ("'+t+'" and "'+t+"[[..."+this.optionalRestSlugName+']]").');n.unshift(t)}return null!==this.restSlugName&&n.push(...this.children.get("[...]")._smoosh(e+"[..."+this.restSlugName+"]/")),null!==this.optionalRestSlugName&&n.push(...this.children.get("[[...]]")._smoosh(e+"[[..."+this.optionalRestSlugName+"]]/")),n}_insert(e,t,r){if(0===e.length)return void(this.placeholder=!1);if(r)throw new Error("Catch-all must be the last part of the URL.");let i=e[0];if(i.startsWith("[")&&i.endsWith("]")){let o=i.slice(1,-1),s=!1;if(o.startsWith("[")&&o.endsWith("]")&&(o=o.slice(1,-1),s=!0),o.startsWith("...")&&(o=o.substring(3),r=!0),o.startsWith("[")||o.endsWith("]"))throw new Error("Segment names may not start or end with extra brackets ('"+o+"').");if(o.startsWith("."))throw new Error("Segment names may not start with erroneous periods ('"+o+"').");function a(e,n){if(null!==e&&e!==n)throw new Error("You cannot use different slug names for the same dynamic path ('"+e+"' !== '"+n+"').");t.forEach((e=>{if(e===n)throw new Error('You cannot have the same slug name "'+n+'" repeat within a single dynamic path');if(e.replace(/\W/g,"")===i.replace(/\W/g,""))throw new Error('You cannot have the slug names "'+e+'" and "'+n+'" differ only by non-word symbols within a single dynamic path')})),t.push(n)}if(r)if(s){if(null!=this.restSlugName)throw new Error('You cannot use both an required and optional catch-all route at the same level ("[...'+this.restSlugName+']" and "'+e[0]+'" ).');a(this.optionalRestSlugName,o),this.optionalRestSlugName=o,i="[[...]]"}else{if(null!=this.optionalRestSlugName)throw new Error('You cannot use both an optional and required catch-all route at the same level ("[[...'+this.optionalRestSlugName+']]" and "'+e[0]+'").');a(this.restSlugName,o),this.restSlugName=o,i="[...]"}else{if(s)throw new Error('Optional route parameters are not yet supported ("'+e[0]+'").');a(this.slugName,o),this.slugName=o,i="[]"}}this.children.has(i)||this.children.set(i,new n),this.children.get(i)._insert(e.slice(1),t,r)}constructor(){this.placeholder=!0,this.children=new Map,this.slugName=null,this.restSlugName=null,this.optionalRestSlugName=null}}function r(e){const t=new n;return e.forEach((e=>t.insert(e))),t.smoosh()}},73737:(e,t)=>{function n(e){return"("===e[0]&&e.endsWith(")")}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DEFAULT_SEGMENT_KEY:function(){return i},PAGE_SEGMENT_KEY:function(){return r},isGroupSegment:function(){return n}});const r="__PAGE__",i="__DEFAULT__"},45782:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DecodeError:function(){return h},MiddlewareNotFoundError:function(){return E},MissingStaticPage:function(){return g},NormalizeError:function(){return m},PageNotFoundError:function(){return _},SP:function(){return f},ST:function(){return d},WEB_VITALS:function(){return n},execOnce:function(){return r},getDisplayName:function(){return c},getLocationOrigin:function(){return s},getURL:function(){return a},isAbsoluteUrl:function(){return o},isResSent:function(){return u},loadGetInitialProps:function(){return p},normalizeRepeatedSlashes:function(){return l},stringifyError:function(){return y}});const n=["CLS","FCP","FID","INP","LCP","TTFB"];function r(e){let t,n=!1;return function(){for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return n||(n=!0,t=e(...i)),t}}const i=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,o=e=>i.test(e);function s(){const{protocol:e,hostname:t,port:n}=window.location;return e+"//"+t+(n?":"+n:"")}function a(){const{href:e}=window.location,t=s();return e.substring(t.length)}function c(e){return"string"===typeof e?e:e.displayName||e.name||"Unknown"}function u(e){return e.finished||e.headersSent}function l(e){const t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function p(e,t){const n=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await p(t.Component,t.ctx)}:{};const r=await e.getInitialProps(t);if(n&&u(n))return r;if(!r){const t='"'+c(e)+'.getInitialProps()" should resolve to an object. But found "'+r+'" instead.';throw new Error(t)}return r}const f="undefined"!==typeof performance,d=f&&["mark","measure","getEntriesByName"].every((e=>"function"===typeof performance[e]));class h extends Error{}class m extends Error{}class _ extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class g extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class E extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function y(e){return JSON.stringify({message:e.message,stack:e.stack})}},80676:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return i},getProperError:function(){return o}});const r=n(58299);function i(e){return"object"===typeof e&&null!==e&&"name"in e&&"message"in e}function o(e){return i(e)?e:new Error((0,r.isPlainObject)(e)?JSON.stringify(e):e+"")}},95955:(e,t)=>{Object.defineProperty(t,"Z",{enumerable:!0,get:function(){return i}});const n=["B","kB","MB","GB","TB","PB","EB","ZB","YB"],r=(e,t)=>{let n=e;return"string"===typeof t?n=e.toLocaleString(t):!0===t&&(n=e.toLocaleString()),n};function i(e,t){if(!Number.isFinite(e))throw new TypeError(`Expected a finite number, got ${typeof e}: ${e}`);if((t=Object.assign({},t)).signed&&0===e)return" 0 B";const i=e<0,o=i?"-":t.signed?"+":"";if(i&&(e=-e),e<1){return o+r(e,t.locale)+" B"}const s=Math.min(Math.floor(Math.log10(e)/3),n.length-1);e=Number((e/Math.pow(1e3,s)).toPrecision(3));return o+r(e,t.locale)+" "+n[s]}},92407:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{INTERCEPTION_ROUTE_MARKERS:function(){return i},extractInterceptionRouteInformation:function(){return s},isInterceptionRouteAppPath:function(){return o}});const r=n(42340),i=["(..)(..)","(.)","(..)","(...)"];function o(e){return void 0!==e.split("/").find((e=>i.find((t=>e.startsWith(t)))))}function s(e){let t,n,o;for(const r of e.split("/"))if(n=i.find((e=>r.startsWith(e))),n){[t,o]=e.split(n,2);break}if(!t||!n||!o)throw new Error(`Invalid interception route: ${e}. Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>`);switch(t=(0,r.normalizeAppPath)(t),n){case"(.)":o="/"===t?`/${o}`:t+"/"+o;break;case"(..)":if("/"===t)throw new Error(`Invalid interception route: ${e}. Cannot use (..) marker at the root level, use (.) instead.`);o=t.split("/").slice(0,-1).concat(o).join("/");break;case"(...)":o="/"+o;break;case"(..)(..)":const n=t.split("/");if(n.length<=2)throw new Error(`Invalid interception route: ${e}. Cannot use (..)(..) marker at the root level or one level up.`);o=n.slice(0,-2).concat(o).join("/");break;default:throw new Error("Invariant: unexpected marker")}return{interceptingRoute:t,interceptedRoute:o}}},87093:(e,t,n)=>{e.exports=n(62785)},3112:(e,t,n)=>{e.exports=n(87093).vendored.contexts.HtmlContext},75778:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getPageFiles",{enumerable:!0,get:function(){return o}});const r=n(75876),i=n(49431);function o(e,t){const n=(0,r.denormalizePagePath)((0,i.normalizePagePath)(t));let o=e.pages[n];return o||(console.warn(`Could not find files for ${n} in .next/build-manifest.json`),[])}},79630:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{ESCAPE_REGEX:function(){return r},htmlEscapeJsonString:function(){return i}});const n={"&":"\\u0026",">":"\\u003e","<":"\\u003c","\u2028":"\\u2028","\u2029":"\\u2029"},r=/[&><\u2028\u2029]/g;function i(e){return e.replace(r,(e=>n[e]))}},50733:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{cleanAmpPath:function(){return o},debounce:function(){return s},isBlockedPage:function(){return i}});const r=n(45104);function i(e){return r.BLOCKED_PAGES.includes(e)}function o(e){return e.match(/\?amp=(y|yes|true|1)/)&&(e=e.replace(/\?amp=(y|yes|true|1)&?/,"?")),e.match(/&amp=(y|yes|true|1)/)&&(e=e.replace(/&amp=(y|yes|true|1)/,"")),e=e.replace(/\?$/,"")}function s(e,t,n=1/0){let r,i,o,s=0,a=0;function c(){const u=Date.now(),l=a+t-u;l<=0||s+n>=u?(r=void 0,e.apply(o,i)):r=setTimeout(c,l)}return function(...e){i=e,o=this,a=Date.now(),void 0===r&&(s=a,r=setTimeout(c,t))}}},50167:(e,t)=>{t._=t._interop_require_default=function(e){return e&&e.__esModule?e:{default:e}}}};