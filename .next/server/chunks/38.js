"use strict";exports.id=38,exports.ids=[38],exports.modules={233:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(19510),a=r(15675),i=r(71289),o=r(55761),s=r(57441);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function c(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}var u=["a"],d=["autoOrient","size","format","brightness","saturation","removeAlpha"],h=["width","height"],f=function e(t,r){return t.length>r?[t.slice(0,r)].concat(e(t.slice(r),r)):[t]},g=function(e){var t=e.r,r=e.g,n=e.b,a=e.a;return"undefined"===typeof a?"rgb("+[t,r,n].join(",")+")":"rgba("+[t,r,n,a].join(",")+")"},p=function(e,t){var r=void 0===t?{}:t,n=r.autoOrient,a=void 0!==n&&n,i=r.size,o=void 0===i?4:i,p=r.format,m=void 0===p?["png"]:p,v=r.brightness,x=void 0===v?1:v,b=r.saturation,j=void 0===b?1.2:b,w=r.removeAlpha,y=void 0!==w&&w,N=c(r,d);try{return Promise.resolve(s(e).metadata().then((function(e){var t=e.width,r=e.height,n=c(e,h);if(!t||!r)throw Error("Could not get required image metadata");return l({width:t,height:r},n)}))).then((function(t){var r,n=4,i=64;!(n<=o&&o<=i)&&console.error(["Please enter a `size` value between",n,"and",i].join(" "));var d=(r=s(e).resize(o,o,{fit:"inside"})).toFormat.apply(r,m).modulate(l({brightness:x,saturation:j},null!=N&&N.hue?{hue:null==N?void 0:N.hue}:{},null!=N&&N.lightness?{lightness:null==N?void 0:N.lightness}:{})),h=!1===y?d:d.removeAlpha(),p=!1===a?h:h.rotate();return Promise.resolve(p.clone().stats().then((function(e){var t=e.dominant,r=t.r,n=t.g,a=t.b;return{r:r,g:n,b:a,hex:"#"+[r,n,a].map((function(e){return e.toString(16).padStart(2,"0")})).join("")}}))).then((function(e){return Promise.resolve(p.clone().normalise().toBuffer({resolveWithObject:!0}).then((function(e){var t=e.data;return"data:image/"+e.info.format+";base64,"+t.toString("base64")})).catch((function(e){throw console.error("base64 generation failed",e),e}))).then((function(r){return Promise.resolve(p.clone().raw().toBuffer({resolveWithObject:!0}).then((function(e){var t=e.data,r=e.info,n=function(e){var t,r=e.data,n=e.info,a=n.channels,i=n.width,o=(t=[]).concat.apply(t,r),s=f(o,a);return f(s,i).map((function(e){return e.map((function(e){var t=e[0],r=e[1],n=e[2],a=e[3];return l({r:t,g:r,b:n},"undefined"===typeof a?{}:{a:Math.round(a/255*1e3)/1e3})}))}))}({data:t,info:r}),a=function(e){var t=e.pixels,r=e.info,n=t.map((function(e){var t=e.map((function(e){return g(e)}));return"linear-gradient(90deg, "+t.map((function(e,r){return e+(0===r?"":" "+r/t.length*100+"%")+(r===t.length?"":" "+(r+1)/t.length*100+"%")})).join(",")+")"}));n.length!==r.height&&console.error("Woops! Something went wrong here and caused the color height to differ from the source height.");var a=n.map((function(e,t){return 0===t?"0 0 ":"0 "+t/(n.length-1)*100+"%"})).join(","),i="100% "+100/n.length+"%";return{backgroundImage:n.join(","),backgroundPosition:a,backgroundSize:i,backgroundRepeat:"no-repeat"}}({pixels:n,info:r}),i=function(e){var t,r=e.pixels,n=e.info,a=r.map((function(e,t){return e.map((function(e,r){var n=e.a,a=c(e,u);return["rect",l({},"undefined"!==typeof n?{fill:g(a),"fill-opacity":n}:{fill:g(a),"fill-opacity":1},{width:1,height:1,x:r,y:t})]}))}));a.length!==n.height&&console.error("Woops! Something went wrong here and caused the color height to differ from the source height.");var i=(t=[]).concat.apply(t,a);return["svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",shapeRendering:"crispEdges",preserveAspectRatio:"none",viewBox:"0 0 "+n.width+" "+n.height,style:{position:"absolute",top:"50%",left:"50%",transformOrigin:"top left",transform:"translate(-50%, -50%)",right:0,bottom:0}},i]}({pixels:n,info:r});return{pixels:n,css:a,svg:i}})).catch((function(e){throw console.error("pixel generation failed",e),e}))).then((function(n){var a=n.pixels,i=n.css,o=n.svg;return{color:e,css:i,base64:r,metadata:t,pixels:a,svg:o}}))}))}))}))}catch(k){return Promise.reject(k)}};async function m({field:e,className:t}){if(!a.BH(e))return n.jsx("div",{});const{base64:r}=await p(Buffer.from(await(await fetch(e.url)).arrayBuffer()));return n.jsx(i.Z,{field:e,placeholder:"blur",blurDataURL:r,className:(0,o.Z)("w-screen object-cover",t)})}},73038:(e,t,r)=>{r.r(t),r.d(t,{default:()=>u});var n=r(19510),a=r(88429),i=r(233),o=r(15089),s=r(15675),l=r(58023),c=r(57371);const u=({slice:e})=>(0,n.jsxs)(a.Z,{"data-slice-type":e.slice_type,"data-slice-variation":e.variation,className:"pb-14",children:[(0,n.jsxs)("div",{className:"relative",children:[n.jsx("h3",{className:"mx-auto w-max bg-gray-100 px-4 text-2xl uppercase",children:n.jsx(l.K,{field:e.primary.heading})}),n.jsx("hr",{className:"absolute left-0 right-0 top-1/2 -z-10 -translate-y-1/2"})]}),n.jsx("div",{className:"mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8",children:e.items.map((async e=>{if(!s.BI(e.card))return null;const t=(0,o.e)(),r=await t.getByID(e.card.id);return(0,n.jsxs)(c.default,{href:r.url?r.url:"service_page"==r.type?`/services/${r.uid}`:`/blog/${r.uid}`,className:"relative overflow-hidden rounded",children:[n.jsx("div",{children:(0,n.jsxs)("div",{className:"absolute bottom-0 left-0 right-0 top-0 flex flex-col justify-end gap-2 bg-gradient-to-b from-black/50 to-black/90 p-5 text-white",children:[n.jsx("h3",{className:"line-clamp-2 text-2xl",children:r.data.meta_title}),n.jsx("p",{className:"text-sm text-gray-200",children:r.data.meta_description}),(0,n.jsxs)("div",{className:"flex gap-1",children:[n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})}),n.jsx("span",{children:"Explore"})]})]})}),n.jsx(i.Z,{field:r.data.meta_image,className:"aspect-[547/439] object-cover"})]},r.id)}))})]})}};