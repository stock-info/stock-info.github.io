(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[675],{9361:function(e,t){"use strict";t.Z=function(e,t,i){t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i;return e}},8045:function(e,t,i){"use strict";var n=i(9361).Z,o=i(4941).Z,r=i(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,i=e.sizes,a=e.unoptimized,f=void 0!==a&&a,p=e.priority,m=void 0!==p&&p,z=e.loading,x=e.lazyRoot,O=void 0===x?null:x,I=e.lazyBoundary,_=e.className,R=e.quality,L=e.width,P=e.height,q=e.style,C=e.objectFit,N=e.objectPosition,M=e.onLoadingComplete,W=e.placeholder,B=void 0===W?"empty":W,D=e.blurDataURL,U=h(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),F=l.useContext(d.ImageConfigContext),H=l.useMemo((function(){var e=b||F||s.imageConfigDefault,t=r(e.deviceSizes).concat(r(e.imageSizes)).sort((function(e,t){return e-t})),i=e.deviceSizes.sort((function(e,t){return e-t}));return g({},e,{allSizes:t,deviceSizes:i})}),[F]),V=U,Z=i?"responsive":"intrinsic";"layout"in V&&(V.layout&&(Z=V.layout),delete V.layout);var T=k;if("loader"in V){if(V.loader){var G=V.loader;T=function(e){e.config;var t=h(e,["config"]);return G(t)}}delete V.loader}var J="";if(function(e){return"object"===typeof e&&(S(e)||function(e){return void 0!==e.src}(e))}(t)){var Q=S(t)?t.default:t;if(!Q.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(Q)));if(D=D||Q.blurDataURL,J=Q.src,(!Z||"fill"!==Z)&&(P=P||Q.height,L=L||Q.width,!Q.height||!Q.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(Q)))}t="string"===typeof t?t:J;var K=j(L),X=j(P),Y=j(R),$=!m&&("lazy"===z||"undefined"===typeof z);(t.startsWith("data:")||t.startsWith("blob:"))&&(f=!0,$=!1);v.has(t)&&($=!1);y&&(f=!0);var ee,te=o(l.useState(!1),2),ie=te[0],ne=te[1],oe=o(u.useIntersection({rootRef:O,rootMargin:I||"200px",disabled:!$}),3),re=oe[0],ae=oe[1],le=oe[2],ce=!$||ae,se={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ue={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},de=!1,fe={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:C,objectPosition:N};0;var ge=Object.assign({},q,fe),pe="blur"!==B||ie?{}:{backgroundSize:C||"cover",backgroundPosition:N||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(D,'")')};if("fill"===Z)se.display="block",se.position="absolute",se.top=0,se.left=0,se.bottom=0,se.right=0;else if("undefined"!==typeof K&&"undefined"!==typeof X){var he=X/K,me=isNaN(he)?"100%":"".concat(100*he,"%");"responsive"===Z?(se.display="block",se.position="relative",de=!0,ue.paddingTop=me):"intrinsic"===Z?(se.display="inline-block",se.position="relative",se.maxWidth="100%",de=!0,ue.maxWidth="100%",ee="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(K,"%27%20height=%27").concat(X,"%27/%3e")):"fixed"===Z&&(se.display="inline-block",se.position="relative",se.width=K,se.height=X)}else 0;var ye={src:w,srcSet:void 0,sizes:void 0};ce&&(ye=A({config:H,src:t,unoptimized:f,layout:Z,width:K,quality:Y,sizes:i,loader:T}));var be=t;0;var ve,we="imagesrcset",ze="imagesizes";we="imageSrcSet",ze="imageSizes";var Se=(n(ve={},we,ye.srcSet),n(ve,ze,ye.sizes),ve),Ae=l.default.useLayoutEffect,je=l.useRef(M),ke=l.useRef(t);l.useEffect((function(){je.current=M}),[M]),Ae((function(){ke.current!==t&&(le(),ke.current=t)}),[le,t]);var xe=g({isLazy:$,imgAttributes:ye,heightInt:X,widthInt:K,qualityInt:Y,layout:Z,className:_,imgStyle:ge,blurStyle:pe,loading:z,config:H,unoptimized:f,placeholder:B,loader:T,srcString:be,onLoadingCompleteRef:je,setBlurComplete:ne,setIntersection:re,isVisible:ce,noscriptSizes:i},V);return l.default.createElement(l.default.Fragment,null,l.default.createElement("span",{style:se},de?l.default.createElement("span",{style:ue},ee?l.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:ee}):null):null,l.default.createElement(E,Object.assign({},xe))),m?l.default.createElement(c.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+ye.src+ye.srcSet+ye.sizes,rel:"preload",as:"image",href:ye.srcSet?void 0:ye.src},Se))):null)};var a,l=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=p();if(t&&t.has(e))return t.get(e);var i={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var r=n?Object.getOwnPropertyDescriptor(e,o):null;r&&(r.get||r.set)?Object.defineProperty(i,o,r):i[o]=e[o]}i.default=e,t&&t.set(e,i);return i}(i(7294)),c=(a=i(5443))&&a.__esModule?a:{default:a},s=i(9309),u=i(7190),d=i(9977),f=(i(3794),i(2392));function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},g.apply(this,arguments)}function p(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return p=function(){return e},e}function h(e,t){if(null==e)return{};var i,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}var m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"https://stock-info.github.io/assets/",loader:"imgix"}||{},y=m.experimentalUnoptimized,b={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"https://stock-info.github.io/assets/",loader:"imgix"},v=new Set,w=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var z=new Map([["default",function(e){var t=e.config,i=e.src,n=e.width,o=e.quality;0;if(i.endsWith(".svg")&&!t.dangerouslyAllowSVG)return i;return"".concat(f.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(o||75)}],["imgix",function(e){var t=e.config,i=e.src,n=e.width,o=e.quality,r=new URL("".concat(t.path).concat(O(i))),a=r.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||n.toString()),o&&a.set("q",o.toString());return r.href}],["cloudinary",function(e){var t=e.config,i=e.src,n=e.width,o=e.quality,r=["f_auto","c_limit","w_"+n,"q_"+(o||"auto")].join(",")+"/";return"".concat(t.path).concat(r).concat(O(i))}],["akamai",function(e){var t=e.config,i=e.src,n=e.width;return"".concat(t.path).concat(O(i),"?imwidth=").concat(n)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function S(e){return void 0!==e.default}function A(e){var t=e.config,i=e.src,n=e.unoptimized,o=e.layout,a=e.width,l=e.quality,c=e.sizes,s=e.loader;if(n)return{src:i,srcSet:void 0,sizes:void 0};var u=function(e,t,i,n){var o=e.deviceSizes,a=e.allSizes;if(n&&("fill"===i||"responsive"===i)){for(var l,c=/(^|\s)(1?\d?\d)vw/g,s=[];l=c.exec(n);l)s.push(parseInt(l[2]));if(s.length){var u,d=.01*(u=Math).min.apply(u,r(s));return{widths:a.filter((function(e){return e>=o[0]*d})),kind:"w"}}return{widths:a,kind:"w"}}return"number"!==typeof t||"fill"===i||"responsive"===i?{widths:o,kind:"w"}:{widths:r(new Set([t,2*t].map((function(e){return a.find((function(t){return t>=e}))||a[a.length-1]})))),kind:"x"}}(t,a,o,c),d=u.widths,f=u.kind,g=d.length-1;return{sizes:c||"w"!==f?c:"100vw",srcSet:d.map((function(e,n){return"".concat(s({config:t,src:i,quality:l,width:e})," ").concat("w"===f?e:n+1).concat(f)})).join(", "),src:s({config:t,src:i,quality:l,width:d[g]})}}function j(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function k(e){var t,i=(null==(t=e.config)?void 0:t.loader)||"default",n=z.get(i);if(n)return n(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(s.VALID_LOADERS.join(", "),". Received: ").concat(i))}function x(e,t,i,n,o,r){e&&e.src!==w&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(v.add(t),"blur"===n&&r(!0),null==o?void 0:o.current)){var i=e.naturalWidth,a=e.naturalHeight;o.current({naturalWidth:i,naturalHeight:a})}})))}var E=function(e){var t=e.imgAttributes,i=(e.heightInt,e.widthInt),n=e.qualityInt,o=e.layout,r=e.className,a=e.imgStyle,c=e.blurStyle,s=e.isLazy,u=e.placeholder,d=e.loading,f=e.srcString,p=e.config,m=e.unoptimized,y=e.loader,b=e.onLoadingCompleteRef,v=e.setBlurComplete,w=e.setIntersection,z=e.onLoad,S=e.onError,j=(e.isVisible,e.noscriptSizes),k=h(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return d=s?"lazy":d,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},k,t,{decoding:"async","data-nimg":o,className:r,style:g({},a,c),ref:l.useCallback((function(e){w(e),(null==e?void 0:e.complete)&&x(e,f,0,u,b,v)}),[w,f,o,u,b,v]),onLoad:function(e){x(e.currentTarget,f,0,u,b,v),z&&z(e)},onError:function(e){"blur"===u&&v(!0),S&&S(e)}})),(s||"blur"===u)&&l.default.createElement("noscript",null,l.default.createElement("img",Object.assign({},k,A({config:p,src:f,unoptimized:m,layout:o,width:i,quality:n,sizes:j,loader:y}),{decoding:"async","data-nimg":o,style:a,className:r,loading:d}))))};function O(e){return"/"===e[0]?e.slice(1):e}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5675:function(e,t,i){e.exports=i(8045)}}]);