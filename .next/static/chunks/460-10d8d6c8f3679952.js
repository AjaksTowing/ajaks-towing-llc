(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[460],{2431:function(){},3797:function(e,t,a){"use strict";a.d(t,{cn:function(){return r}});var i=a(30),s=a(6164);const r=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,s.m6)((0,i.Z)(...t))}},703:function(e,t,a){"use strict";a.d(t,{default:function(){return d}});var i=a(7437),s=a(3797),r=a(2265),n=a(3038),l=a(7138);function c(e){let{meta_image:t,last_publication_date:a,meta_title:r,meta_description:c,uid:d,className:o}=e;return(0,i.jsx)(l.default,{href:"/blog/".concat(d),className:"flex gap-1",children:(0,i.jsxs)("div",{className:(0,s.cn)("bg-white",o),children:[(0,i.jsx)(n.PrismicNextImage,{field:t}),(0,i.jsxs)("div",{className:"flex flex-col gap-4 p-5",children:[(0,i.jsx)("span",{className:"text-sm font-medium text-[#DD841C]",children:new Date(a).toDateString().replace(/(\w+) (\w+) (\w+) (\w+)/gm,"$3 $2 $4")}),(0,i.jsx)("h2",{className:"line-clamp-2 text-2xl",children:r}),(0,i.jsx)("p",{className:"line-clamp-4 text-sm md:text-base",children:c}),(0,i.jsxs)("div",{className:"flex gap-2",children:[(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})}),(0,i.jsx)("span",{children:"Explore"})]})]})]})})}function d(e){const[t,a]=(0,r.useState)(!0),[n,l]=(0,r.useState)(!1),[d,o]=(0,r.useState)([]),m=async function(e){a(!0);const t=await fetch("/api/posts",{method:"POST",cache:"force-cache",body:JSON.stringify({postCount:e}),next:{tags:["prismic"]}});try{const i=await t.json();e>i.length&&l(!0),o(i),a(!1)}catch(i){console.log(i)}};return(0,r.useEffect)((function(){m(e.initialCount)}),[e.initialCount]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:(0,s.cn)("grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8"),children:d.map((e=>(0,i.jsx)(c,{last_publication_date:e.last_publication_date,meta_description:e.data.meta_description,meta_image:e.data.meta_image,meta_title:e.data.meta_title,uid:e.uid},e.id)))}),t&&"Loading...",(0,i.jsx)("div",{className:"flex w-full items-center justify-center py-16",children:n?(0,i.jsx)("span",{children:"You have reached the end!"}):(0,i.jsx)("button",{onClick:()=>{const t=e.initialCount+d.length+3;return m(t)},className:"border-2 border-current bg-transparent p-4 text-[#DD841C]",children:"LOAD MORE"})})]})}},9495:function(e,t,a){"use strict";a.d(t,{default:function(){return n}});var i=a(7437);a(4590);var s=(0,a(8064).$)("b744917a7513a668b5d0e6f767dec41616048ffd"),r=a(2265);function n(){const e=(0,r.useRef)(null),[t,a]=(0,r.useState)("");return(0,r.useEffect)((function(){setTimeout((function(){a("")}),500)}),[t]),(0,i.jsxs)("form",{ref:e,className:"flex w-full flex-col gap-3",action:s,children:[(0,i.jsx)("input",{type:"text",placeholder:"Full Name",className:"[#FFDDB5] w-full rounded border p-3 text-gray-700 outline-none ring-[#FFDDB5] focus:ring-2",name:"name"}),(0,i.jsx)("input",{type:"email",placeholder:"Email",className:"[#FFDDB5] w-full rounded border p-3 text-gray-700 outline-none ring-[#FFDDB5] focus:ring-2",name:"email"}),(0,i.jsx)("input",{type:"number",placeholder:"Phone",className:"[#FFDDB5] w-full rounded border p-3 text-gray-700 outline-none ring-[#FFDDB5] focus:ring-2",name:"phone"}),(0,i.jsx)("input",{type:"text",name:"message",placeholder:"Message",className:"[#FFDDB5] min-h-32 w-full rounded border p-3 text-gray-700 outline-none ring-[#FFDDB5] focus:ring-2 "}),(0,i.jsx)("p",{children:t}),(0,i.jsx)("button",{onClick:async t=>{var i;null===(i=e.current)||void 0===i||i.reset(),setTimeout((function(){a("Email Sent!")}),500)},disabled:!!t,tabIndex:0,className:"w-max min-w-36 rounded bg-[#DD841C] p-3 uppercase outline-none ring-[#FFDDB5] focus:ring-2 disabled:bg-[#DD841C80]",children:"SEND"})]})}},2890:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return n}});var i=a(7437),s=a(3797),r=a(2265);function n(e){let{id:t,count:a,skip:n}=e;const[l,c]=(0,r.useState)(0),d=()=>{const e=t.substring(0,t.length-1),i=Array.from({length:a},((t,a)=>"trigger_"+e+a)).map((e=>document.getElementById(e))).filter((e=>e));i.forEach((e=>{e.classList.remove("trigger-active"),e.classList.remove("trigger-outline"),e.getAttribute("id")==="trigger_".concat(t)?e.classList.add("trigger-active"):e.classList.add("trigger-outline")}))};return(0,r.useEffect)((()=>{c(window.innerWidth),window.addEventListener("resize",(()=>{c(window.innerWidth)}))}),[]),(0,r.useEffect)((function(){let e=n,i=!1;const s=t.substring(0,t.length-1);l<768&&(e=1);for(let t=0;t<a;t++){const a=document.getElementById("trigger_"+s+t);a&&(a.classList.add("hidden"),t%e===0&&a.classList.remove("hidden"),i||(a.classList.add("trigger-active"),i=!0))}}),[l,n,a,t]),(0,i.jsx)("div",{id:"trigger_"+t,className:(0,s.cn)("trigger-outline size-4 cursor-pointer rounded-full"),onClick:()=>{const e=document.getElementById(t);e&&e.scrollIntoView({inline:"end",block:"nearest",behavior:"smooth"}),d()}})}},7414:function(e,t,a){"use strict";a.d(t,{default:function(){return l}});var i=a(7437),s=a(4392),r=a(4960),n=a(2265);function l(e){let{slice:t}=e;const a=(0,n.useRef)(null),l=(0,n.useRef)(null),c=(0,n.useRef)(null);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("video",{loop:!0,ref:a,src:t.primary.videourl,className:"hidden h-auto w-auto md:block"}),(0,i.jsx)("video",{loop:!0,ref:l,src:t.primary.mobile_videourl,className:"absolute bottom-0 left-0 right-0 top-0 h-full w-full object-cover md:hidden"}),(0,i.jsx)("div",{className:"relative overflow-hidden bg-black/60 md:absolute md:bottom-0 md:left-0 md:right-0 md:top-0",children:(0,i.jsxs)("div",{className:"ml-[8%] max-w-96 py-16 text-white md:translate-y-1/2 md:py-0",children:[s.qO(t.primary.heading)&&(0,i.jsx)("h2",{className:"text-6xl",children:(0,i.jsx)(r.K,{field:t.primary.heading})}),s.qO(t.primary.body)&&(0,i.jsx)("p",{className:"mt-3",children:(0,i.jsx)(r.K,{field:t.primary.body})})]})}),(0,i.jsx)("div",{className:"absolute left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2",children:(0,i.jsx)("button",{onClick:()=>{a.current&&a.current.play(),l.current&&l.current.play(),c.current.classList.add("hidden")},ref:c,children:(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"92",height:"92",fill:"none",viewBox:"0 0 92 92",children:[(0,i.jsx)("circle",{cx:"46",cy:"46",r:"46",fill:"#fff"}),(0,i.jsx)("g",{clipPath:"url(#clip0_2152_22)",children:(0,i.jsx)("path",{fill:"#DD841C",d:"M35.688 25.944a1.27 1.27 0 00-.562.322.7.7 0 00-.211.483v38.5c0 .173.073.342.21.485.138.144.333.256.563.323.23.067.482.086.727.054.245-.032.47-.113.65-.233L65.7 46.628a.946.946 0 00.284-.287.65.65 0 00.1-.34.65.65 0 00-.1-.34.947.947 0 00-.284-.288l-28.638-19.25a1.52 1.52 0 00-.649-.232 1.794 1.794 0 00-.726.054v-.001z"})}),(0,i.jsx)("defs",{children:(0,i.jsx)("clipPath",{id:"clip0_2152_22",children:(0,i.jsx)("path",{fill:"#fff",d:"M0 0H56V81H0z",transform:"rotate(-90 42 32)"})})})]})})})]})}},7843:function(e,t,a){"use strict";a.d(t,{Z:function(){return r}});var i=a(7437),s=a(3797);function r(e){let{as:t="section",className:a,children:r,...n}=e;return(0,i.jsx)(t,{className:(0,s.cn)("mx-auto mt-16 max-w-[106rem] px-4 md:mt-36",a),...n,children:r})}},9733:function(e,t,a){"use strict";a.d(t,{z:function(){return d}});var i=a(7437),s=a(2265),r=a(1538),n=a(2218),l=a(9354);const c=(0,n.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-secondary/90 hover:text-secondary-foreground",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),d=s.forwardRef(((e,t)=>{let{className:a,variant:s,size:n,asChild:d=!1,...o}=e;const m=d?r.g7:"button";return(0,i.jsx)(m,{className:(0,l.cn)(c({variant:s,size:n,className:a})),ref:t,...o})}));d.displayName="Button"},9354:function(e,t,a){"use strict";a.d(t,{cn:function(){return r}});var i=a(30),s=a(6164);function r(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,s.m6)((0,i.W)(t))}},4699:function(e,t,a){"use strict";a.r(t);var i=a(7437),s=a(7843),r=a(4392),n=a(3038),l=a(4960),c=a(30),d=a(1827);t.default=e=>{let{slice:t}=e;return(0,i.jsx)(s.Z,{"data-slice-type":t.slice_type,"data-slice-variation":t.variation,children:(0,i.jsxs)("div",{className:"grid grid-cols-1 grid-rows-2 place-items-center gap-6 md:grid-cols-2 md:grid-rows-1",children:[(0,i.jsxs)(d.E.div,{initial:{opacity:0,x:-100},whileInView:{opacity:1,x:0,transition:{type:"spring",bounce:.4,duration:1}},viewport:{amount:.5},className:"md:prose",children:[r.qO(t.primary.heading)&&(0,i.jsx)("h3",{className:"text-2xl font-medium md:text-4xl 2xl:text-5xl",children:(0,i.jsx)(l.K,{field:t.primary.heading})}),r.qO(t.primary.body)&&(0,i.jsx)("p",{className:"line-clamp-4 text-balance md:line-clamp-none",children:(0,i.jsx)(l.K,{field:t.primary.body})})]}),(0,i.jsxs)(d.E.div,{initial:{opacity:0,x:100},whileInView:{opacity:1,x:0,transition:{type:"spring",bounce:.4,duration:1}},viewport:{amount:.5},className:(0,c.Z)("-order-1","reverse"===t.variation?"":"md:order-1"),children:[r.BH(t.primary.image)&&(0,i.jsx)(n.PrismicNextImage,{className:(0,c.Z)(r.BH(t.primary.mobile_image)&&"hidden md:inline-block"),field:t.primary.image}),r.BH(t.primary.mobile_image)&&(0,i.jsx)(n.PrismicNextImage,{className:"rounded md:hidden",field:t.primary.mobile_image})]})]})})}},2699:function(e,t,a){"use strict";a.r(t);var i=a(7437),s=(a(966),a(7818));const r=(0,s.default)((async()=>(await Promise.all([a.e(212),a.e(143)]).then(a.bind(a,143))).MapContainer),{loadableGenerated:{webpack:()=>[143]},ssr:!1}),n=(0,s.default)((async()=>(await Promise.all([a.e(212),a.e(143)]).then(a.bind(a,143))).TileLayer),{loadableGenerated:{webpack:()=>[143]},ssr:!1}),l=(0,s.default)((async()=>(await Promise.all([a.e(212),a.e(143)]).then(a.bind(a,143))).Marker),{loadableGenerated:{webpack:()=>[143]},ssr:!1}),c=(0,s.default)((async()=>(await Promise.all([a.e(212),a.e(143)]).then(a.bind(a,143))).Tooltip),{loadableGenerated:{webpack:()=>[143]},ssr:!1});t.default=e=>{let{slice:t}=e;return(0,i.jsx)("section",{suppressHydrationWarning:!0,"data-slice-type":t.slice_type,"data-slice-variation":t.variation,className:"mt-16 md:mt-36",children:(0,i.jsxs)(r,{style:{height:"50vh"},zoom:13,dragging:!0,scrollWheelZoom:!1,center:[t.primary.coordinates.latitude,t.primary.coordinates.longitude],children:[(0,i.jsx)(n,{attribution:'\xa9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),(0,i.jsx)(l,{position:[t.primary.coordinates.latitude,t.primary.coordinates.longitude],children:(0,i.jsx)(c,{children:t.primary.marker_label})})]})})}},2869:function(e,t,a){"use strict";a.r(t);var i=a(7437),s=a(9733),r=a(5271),n=a(2400),l=a(7138),c=a(1827);t.default=e=>{let{slice:t}=e;return(0,i.jsx)("section",{"data-slice-type":t.slice_type,"data-slice-variation":t.variation,children:(0,i.jsx)("section",{children:(0,i.jsxs)("div",{className:"rc-container flex flex-col gap-10 duration-300 md:flex-row",children:[(0,i.jsxs)("div",{className:"flex flex-col gap-5 md:w-1/2",children:[(0,i.jsx)("h6",{className:"font-bold text-primary",children:"OUR TEAM"}),(0,i.jsx)("h2",{className:"text-5xl font-bold",children:(0,r.S)(t.primary.heading)}),(0,i.jsx)("p",{className:"",children:(0,r.S)(t.primary.tagline)}),(0,i.jsx)(l.default,{href:(0,n.s)(t.primary.button_navigates_to)||"#",children:(0,i.jsx)(s.z,{className:"w-fit rounded-none",children:"DISCOVER MORE"})})]}),(0,i.jsx)("div",{className:"flex flex-col gap-5",children:t.items.map(((e,t)=>(0,i.jsxs)(c.E.div,{initial:{opacity:0,x:100},whileInView:{opacity:1,x:0,transition:{type:"spring",bounce:.4,duration:1,delay:.2*t}},viewport:{amount:.5},className:"relative ml-7 bg-[#111827] p-5",children:[(0,i.jsx)("div",{className:"absolute -left-7 top-1/2 h-14 w-14 -translate-y-1/2 bg-[#DD841F]",children:e.icon.url&&(0,i.jsx)("img",{src:e.icon.url})}),(0,i.jsxs)("div",{className:"ml-7",children:[(0,i.jsx)("h6",{className:"text-md font-bold text-[#DD841F]",children:(0,r.S)(e.heading)}),(0,i.jsx)("p",{className:"text-white",children:(0,r.S)(e.content)})]})]},t)))})]})})})}},5581:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return h}});var i=a(7437),s=a(2265),r=a(9532),n=a(9354);const l=r.fC,c=s.forwardRef(((e,t)=>{let{className:a,...s}=e;return(0,i.jsx)(r.ck,{ref:t,className:(0,n.cn)("border-b border-white/20",a),...s})}));c.displayName="AccordionItem";const d=s.forwardRef(((e,t)=>{let{className:a,children:s,...l}=e;return(0,i.jsx)(r.h4,{className:"flex",children:(0,i.jsxs)(r.xz,{ref:t,className:(0,n.cn)("flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",a),...l,children:[s,(0,i.jsx)("span",{children:"+"})]})})}));d.displayName=r.xz.displayName;const o=s.forwardRef(((e,t)=>{let{className:a,children:s,...l}=e;return(0,i.jsx)(r.VY,{ref:t,className:"overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...l,children:(0,i.jsx)("div",{className:(0,n.cn)("pb-4 pt-0",a),children:s})})}));o.displayName=r.VY.displayName;var m=a(5271),x=a(5275),u=a(1827);var h=e=>{let{slice:t}=e;return(0,i.jsx)("section",{"data-slice-type":t.slice_type,"data-slice-variation":t.variation,className:"mb-12",children:(0,i.jsxs)("section",{children:[(0,i.jsx)("div",{className:"bg-[url('https://kit.creativemox.com/stockytow/wp-content/uploads/sites/6/2023/10/white-arrow-on-asphalt-road-traffic-sign-e1697705634143.jpg')] bg-cover bg-no-repeat",children:(0,i.jsx)("div",{className:"bg-[blue-950/70]",children:(0,i.jsx)("div",{className:"rc-container flex w-full justify-center",children:(0,i.jsxs)("div",{className:"mb-10 flex max-w-xl flex-col items-center justify-center gap-4 text-center",children:[(0,i.jsx)("h6",{className:"font-bold text-[#DD841F]",children:"OUR VALUE"}),(0,i.jsx)("h3",{className:"text-4xl font-bold text-[#111827]",children:(0,m.S)(t.primary.heading)}),(0,i.jsx)("p",{className:"font-bold text-[#111827]",children:(0,m.S)(t.primary.tagline)})]})})})}),(0,i.jsx)("div",{className:"rc-container -mt-20 !py-0",children:(0,i.jsxs)(u.E.div,{initial:{opacity:0,y:100},whileInView:{opacity:1,y:0,transition:{type:"spring",bounce:.4,duration:.8}},viewport:{amount:.5},className:"flex flex-col items-center bg-[#111827] text-white/90 duration-300 md:flex-row",children:[(0,i.jsxs)("div",{className:"flex flex-col gap-4 p-10",children:[(0,i.jsx)("h4",{className:"text-3xl",children:(0,m.S)(t.primary.featured_heading)}),(0,i.jsx)("p",{className:"text-white/70",children:(0,m.S)(t.primary.featured_tagline)}),(0,i.jsx)(l,{type:"single",collapsible:!0,children:t.items.map(((e,t)=>(0,i.jsxs)(c,{value:"item-".concat(t),children:[(0,i.jsx)(d,{className:"text-[#DD841F]",children:e.heading}),(0,i.jsx)(o,{children:(0,m.S)(e.content)})]},t)))})]}),(0,i.jsx)("div",{className:"w-full duration-300 md:w-1/2",children:(0,i.jsx)(x.P,{field:t.primary.featured_image})})]})})]})})}},4536:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return o}});var i=a(7437),s=a(8059),r=a.n(s),n=a(5275),l=a(3267),c=(a(3034),a(4885),a(6341));a(2265);function d(e){let{content:t}=e;return(0,i.jsxs)("div",{className:"jsx-eec06ed92dc87d74",children:[(0,i.jsx)("div",{className:"jsx-eec06ed92dc87d74 flex flex-row gap-1",children:new Array(5).fill(null).map(((e,t)=>(0,i.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"jsx-eec06ed92dc87d74",children:(0,i.jsx)("path",{d:"M7.22303 0.665992C7.32551 0.419604 7.67454 0.419604 7.77702 0.665992L9.41343 4.60039C9.45663 4.70426 9.55432 4.77523 9.66645 4.78422L13.914 5.12475C14.18 5.14607 14.2878 5.47802 14.0852 5.65162L10.849 8.42374C10.7636 8.49692 10.7263 8.61176 10.7524 8.72118L11.7411 12.866C11.803 13.1256 11.5206 13.3308 11.2929 13.1917L7.6564 10.9705C7.5604 10.9119 7.43965 10.9119 7.34365 10.9705L3.70718 13.1917C3.47945 13.3308 3.19708 13.1256 3.25899 12.866L4.24769 8.72118C4.2738 8.61176 4.23648 8.49692 4.15105 8.42374L0.914889 5.65162C0.712228 5.47802 0.820086 5.14607 1.08608 5.12475L5.3336 4.78422C5.44573 4.77523 5.54342 4.70426 5.58662 4.60039L7.22303 0.665992Z",fill:"#DD841F",className:"jsx-eec06ed92dc87d74"})},t)))}),(0,i.jsxs)("p",{className:"jsx-eec06ed92dc87d74 my-4 h-[4.8rem] overflow-auto text-left",children:["\u201c",t,"\u201d"]}),(0,i.jsx)(r(),{id:"eec06ed92dc87d74",children:".jsx-eec06ed92dc87d74::-webkit-scrollbar{width:8px}.jsx-eec06ed92dc87d74::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 5px grey;-moz-box-shadow:inset 0 0 5px grey;box-shadow:inset 0 0 5px grey;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px}.jsx-eec06ed92dc87d74::-webkit-scrollbar-thumb{background:#ccc;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px}.jsx-eec06ed92dc87d74::-webkit-scrollbar-thumb::hover{background:#bbb}@media screen and (max-width:600px){.jsx-eec06ed92dc87d74::-webkit-scrollbar{width:2px}.jsx-eec06ed92dc87d74::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 5px white;-moz-box-shadow:inset 0 0 5px white;box-shadow:inset 0 0 5px white;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px}.jsx-eec06ed92dc87d74::-webkit-scrollbar-thumb{background:#ccc;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px}.jsx-eec06ed92dc87d74::-webkit-scrollbar-thumb::hover{background:#bbb}}"})]})}var o=e=>{let{slice:t}=e;return(0,i.jsxs)("section",{"data-slice-type":t.slice_type,"data-slice-variation":t.variation,className:"jsx-e7d633481a1d206c bg-white",children:[(0,i.jsxs)("div",{className:"jsx-e7d633481a1d206c mx-auto max-w-screen-2xl px-4 py-8 text-center lg:px-6 lg:py-16",children:[(0,i.jsxs)("div",{className:"jsx-e7d633481a1d206c mx-auto max-w-screen-sm",children:[(0,i.jsx)("h2",{className:"jsx-e7d633481a1d206c mb-4 text-4xl font-extrabold tracking-tight text-gray-900",children:"Testimonials"}),(0,i.jsx)("p",{className:"jsx-e7d633481a1d206c mb-8 font-light text-gray-500 sm:text-xl lg:mb-16",children:t.primary.tagline})]}),(0,i.jsx)(l.tq,{navigation:!0,modules:[c.W_],className:"mySwiper",breakpoints:{640:{slidesPerView:1},768:{slidesPerView:1},1024:{slidesPerView:3}},children:t.items.map(((e,t)=>(0,i.jsx)(l.o5,{children:(0,i.jsxs)("div",{className:"jsx-e7d633481a1d206c relative w-full py-1 ",children:[(0,i.jsxs)("figure",{className:"jsx-e7d633481a1d206c flex max-w-[98%] flex-col items-start justify-center overflow-hidden border-b border-gray-200 bg-gray-50 p-8 text-center md:p-12 lg:border-r",children:[(0,i.jsxs)("blockquote",{className:"jsx-e7d633481a1d206c mx-auto mb-8 max-w-[96%] text-gray-500",children:[(0,i.jsx)("h3",{className:"jsx-e7d633481a1d206c line-clamp-[1] max-w-[96%] truncate text-wrap text-left text-lg font-semibold text-gray-900 ",children:e.heading}),(0,i.jsx)(d,{content:e.content})]}),(0,i.jsxs)("figcaption",{className:"jsx-e7d633481a1d206c flex max-w-[96%] items-center justify-center space-x-3",children:[(0,i.jsx)(n.P,{className:"size-12 rounded-full object-cover",field:e.author_image}),(0,i.jsxs)("div",{className:"jsx-e7d633481a1d206c  z-10 space-y-0.5 overflow-hidden text-left font-medium ",children:[(0,i.jsx)("div",{className:"jsx-e7d633481a1d206c truncate",children:e.author_name}),(0,i.jsx)("div",{className:"jsx-e7d633481a1d206c truncate text-sm font-light text-gray-500",children:e.author_tagline})]})]})]}),(0,i.jsx)("div",{className:"jsx-e7d633481a1d206c absolute bottom-10 right-12 ",children:(0,i.jsx)("svg",{width:"70",height:"70",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"jsx-e7d633481a1d206c",children:(0,i.jsx)("path",{d:"M9.42503 3.44136C10.0561 3.23654 10.7837 3.2402 11.3792 3.54623C12.7532 4.25224 13.3477 6.07191 12.7946 8C12.5465 8.8649 12.1102 9.70472 11.1861 10.5524C10.262 11.4 8.98034 11.9 8.38571 11.9C8.17269 11.9 8 11.7321 8 11.525C8 11.3179 8.17644 11.15 8.38571 11.15C9.06497 11.15 9.67189 10.7804 10.3906 10.236C10.9406 9.8193 11.3701 9.28633 11.608 8.82191C12.0628 7.93367 12.0782 6.68174 11.3433 6.34901C10.9904 6.73455 10.5295 6.95946 9.97725 6.95946C8.7773 6.95946 8.0701 5.99412 8.10051 5.12009C8.12957 4.28474 8.66032 3.68954 9.42503 3.44136ZM3.42503 3.44136C4.05614 3.23654 4.78366 3.2402 5.37923 3.54623C6.7532 4.25224 7.34766 6.07191 6.79462 8C6.54654 8.8649 6.11019 9.70472 5.1861 10.5524C4.26201 11.4 2.98034 11.9 2.38571 11.9C2.17269 11.9 2 11.7321 2 11.525C2 11.3179 2.17644 11.15 2.38571 11.15C3.06497 11.15 3.67189 10.7804 4.39058 10.236C4.94065 9.8193 5.37014 9.28633 5.60797 8.82191C6.06282 7.93367 6.07821 6.68174 5.3433 6.34901C4.99037 6.73455 4.52948 6.95946 3.97725 6.95946C2.7773 6.95946 2.0701 5.99412 2.10051 5.12009C2.12957 4.28474 2.66032 3.68954 3.42503 3.44136Z",fill:"#E2EDFC",fillRule:"evenodd",clipRule:"evenodd",className:"jsx-e7d633481a1d206c"})})})]})},t)))})]}),(0,i.jsx)(r(),{id:"e7d633481a1d206c",children:"body{--swiper-navigation-color:#DD841F}"})]})}},4726:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return x}});var i=a(7437),s=a(2265),r=a(8484),n=a(9354);const l=s.forwardRef(((e,t)=>{let{className:a,orientation:s="horizontal",decorative:l=!0,...c}=e;return(0,i.jsx)(r.f,{ref:t,decorative:l,orientation:s,className:(0,n.cn)("shrink-0 bg-border","horizontal"===s?"h-[1px] w-full":"h-full w-[1px]",a),...c})}));l.displayName=r.f.displayName;var c=a(5271),d=a(5275),o=a(6648),m=a(1827);var x=e=>{let{slice:t}=e;return(0,i.jsx)("section",{"data-slice-type":t.slice_type,"data-slice-variation":t.variation,children:(0,i.jsx)("section",{children:(0,i.jsxs)("div",{className:"rc-container flex flex-col gap-10 duration-300 md:flex-row",children:[(0,i.jsxs)(m.E.div,{initial:{opacity:0,x:-100},whileInView:{opacity:1,x:0,transition:{type:"spring",bounce:.4,duration:1}},viewport:{amount:.5},className:"flex flex-col gap-5 md:w-1/2",children:[(0,i.jsx)("h6",{className:"text-[#DD841F] font-bold",children:"WHO WE ARE"}),(0,i.jsx)("h2",{className:"text-5xl font-bold",children:(0,c.S)(t.primary.heading)}),(0,i.jsx)("p",{className:"",children:(0,c.S)(t.primary.tagline)}),(0,i.jsx)("div",{className:"grid grid-cols-2",children:t.items.map(((e,t)=>(0,i.jsxs)("div",{className:"flex items-center gap-3",children:[(0,i.jsx)("span",{className:"bg-primary h-4 w-4 rounded-full"}),(0,i.jsx)("span",{children:e.item})]},t)))}),(0,i.jsx)(l,{}),(0,i.jsxs)("div",{className:"flex items-center gap-3",children:[(0,i.jsx)("span",{className:"bg-primary grid h-14 w-14 place-items-center",children:(0,i.jsx)(o.default,{src:"/contact-icon.png",alt:"Contact Icon",width:70,height:70})}),(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:"font-semibold text-black/50",children:"24/7 Emergency Towing"}),(0,i.jsx)("h3",{className:"text-2xl text-[#111827]",children:t.primary.contact_phone_number})]})]})]}),(0,i.jsxs)(m.E.div,{initial:{opacity:0,x:100},whileInView:{opacity:1,x:0,transition:{type:"spring",bounce:.4,duration:1}},viewport:{amount:.5},className:"relative ml-4 mt-4 w-full duration-300 md:w-1/2",children:[(0,i.jsx)("div",{className:"absolute -left-5 -top-5 bg-white p-1",children:(0,i.jsxs)("div",{className:"bg-[#111827] w-fit p-5 text-center",children:[(0,i.jsx)("h2",{className:"text-primary text-3xl font-bold",children:t.primary.featured_image_lable}),(0,i.jsx)("p",{className:"text-white",children:"YEARS OF EXPERIENCE"})]})}),(0,i.jsx)(d.P,{field:t.primary.featured_image})]})]})})})}},2560:function(e,t,a){"use strict";a.r(t);var i=a(7437),s=a(9733),r=a(9354),n=a(5271),l=a(2400),c=a(5275),d=a(7138),o=a(1827);t.default=e=>{let{slice:t}=e;var a,m;return(0,i.jsx)("section",{"data-slice-type":t.slice_type,"data-slice-variation":t.variation,children:(0,i.jsx)("section",{className:(0,r.cn)("h-full bg-cover bg-no-repeat"),style:{minHeight:null===(a=t.primary.background_image.dimensions)||void 0===a?void 0:a.height,backgroundImage:'url("'.concat(t.primary.background_image.url||void 0,'")')},children:(0,i.jsx)("div",{className:"h-full bg-blue-950/70",style:{minHeight:null===(m=t.primary.background_image.dimensions)||void 0===m?void 0:m.height},children:(0,i.jsxs)("div",{className:"rc-container flex flex-col gap-10 duration-300 xl:flex-row xl:items-center xl:justify-between",children:[(0,i.jsxs)("div",{className:"flex flex-1 flex-col gap-5",children:[(0,i.jsx)("h6",{className:"font-bold text-[#DD841F]",children:"WHY CHOOSE US"}),(0,i.jsx)("h2",{className:"text-5xl font-bold text-white",children:(0,n.S)(t.primary.heading)}),(0,i.jsx)("p",{className:"text-white",children:(0,n.S)(t.primary.tagline)}),(0,i.jsx)(d.default,{href:(0,l.s)(t.primary.button_navigates_to)||"#",children:(0,i.jsx)(s.z,{className:"w-fit rounded-none",children:t.primary.button_label})})]}),(0,i.jsx)("div",{className:"grid grid-cols-2 gap-8",children:t.items.map(((e,t)=>(0,i.jsxs)(o.E.div,{initial:{opacity:0,y:10},whileInView:{opacity:1,y:0,transition:{type:"spring",bounce:.4,duration:1,delay:.2*t}},viewport:{once:!1,amount:.2},className:"group flex w-full flex-col items-center gap-2 bg-[#111827] px-4 py-10 duration-300 hover:bg-[#DD841F] xl:max-w-xs",children:[(0,i.jsx)("div",{className:"grid h-14 w-14 place-items-center overflow-hidden bg-primary duration-300 group-hover:bg-white",children:(0,i.jsx)(c.P,{field:e.icon,className:"h-full w-full object-cover"})}),(0,i.jsx)("h4",{className:"font-bold text-[#DD841F] duration-300 group-hover:text-white",children:(0,n.S)(e.heading)}),(0,i.jsx)("p",{className:"text-center text-white",children:(0,n.S)(e.tagline)})]},t)))})]})})})})}},8831:function(e,t){"use strict";t.default={src:"/_next/static/media/print.087d8b99.png",height:60,width:60,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAG1BMVEUiKC4sLCzZgxsuLSzzyQ1MaXHbghrZgRvXgBzYfkvPAAAACXRSTlMfGjAoBQAmaFsLR8UaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nDWLQQrAQBCDzCSZ7f9fXBbakyBKZbCKaHLhzszU0Mk+BXJNwN1ztkb64n9/ARoKAL5oqsw9AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},1998:function(e,t){"use strict";t.default={src:"/_next/static/media/share.07421528.png",height:60,width:60,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAFVBMVEUsLCssLCxMaXEpKSvZgRvaghvLeRaS1YzYAAAAB3RSTlMlGgAeLVAOt/xY0gAAAAlwSFlzAAALEwAACxMBAJqcGAAAAC1JREFUeJw9i1EKACAMhXxu6/5HjoL6E1QMQCSlWgF1WsCeXhfmgeuqH5+9iBsSMwCFKrnnqAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}}}]);