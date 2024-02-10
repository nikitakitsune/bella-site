(()=>{"use strict";var n,e,t,o,r,i,a,c,s,d,l,p,u,f,h={596:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],d=o.base?s[0]+o.base:s[0],l=i[d]||0,p="".concat(d," ").concat(l);i[d]=l+1;var u=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var h=r(f,o);o.byIndex=c,e.splice(c,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=o(n,r),d=0;d<i.length;d++){var l=t(i[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=s}}},176:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},808:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},120:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},520:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},936:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},140:(n,e,t)=>{t.d(e,{c:()=>c});var o=t(424),r=t.n(o),i=t(764),a=t.n(i)()(r());a.push([n.id,".color__header {\n  height: 200px;\n  padding: 10px 15px 20px;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n",""]);const c=a},728:(n,e,t)=>{t.d(e,{c:()=>c});var o=t(424),r=t.n(o),i=t(764),a=t.n(i)()(r());a.push([n.id,".color__opacity {\n  box-sizing: border-box;\n  height: 75px;\n  margin: 0;\n  padding: 30px 0 0 15px;\n}\n",""]);const c=a},856:(n,e,t)=>{t.d(e,{c:()=>c});var o=t(424),r=t.n(o),i=t(764),a=t.n(i)()(r());a.push([n.id,".color__subtitle {\n  margin: 0;\n  text-transform: uppercase;\n  font-size: 12px;\n  letter-spacing: 0.2em;\n}\n",""]);const c=a},988:(n,e,t)=>{t.d(e,{c:()=>c});var o=t(424),r=t.n(o),i=t(764),a=t.n(i)()(r());a.push([n.id,".color__title {\n  margin: 0;\n  font-size: 33px;\n}\n",""]);const c=a},536:(n,e,t)=>{t.d(e,{c:()=>c});var o=t(424),r=t.n(o),i=t(764),a=t.n(i)()(r());a.push([n.id,".color {\n  box-sizing: border-box;\n  height: 425px;\n}\n",""]);const c=a},608:(n,e,t)=>{t.d(e,{c:()=>c});var o=t(424),r=t.n(o),i=t(764),a=t.n(i)()(r());a.push([n.id,".colors-section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n",""]);const c=a},752:(n,e,t)=>{t.d(e,{c:()=>c});var o=t(424),r=t.n(o),i=t(764),a=t.n(i)()(r());a.push([n.id,'.colors {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  display: grid;\n  font-family: "Albra Grotesk Regular-Traced-Web";\n  max-width: 100vw;\n}\n\n@media screen and (min-width: 1600px) {\n  .colors {\n    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n  }\n}\n\n@media screen and (max-width: 1599px) {\n  .colors {\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); \n  }\n}\n\n@media screen and (max-width: 1200px) {\n  .colors {\n    grid-template-columns: repeat(auto-fit, minmax(50vw, 1fr));\n    grid-template-rows: repeat(2, 425px);\n  }\n}\n\n@media screen and (max-width: 800px) {\n  .colors {\n    grid-template-columns: repeat(auto-fit, minmax(50vw, 1fr));\n    grid-template-rows: repeat(2, 425px);\n  }\n}\n\n@media screen and (max-width: 600px) {\n  .colors {\n    grid-template-columns: 100vw;\n    grid-template-rows: repeat(4, 425px);\n  }\n}\n',""]);const c=a},578:(n,e,t)=>{t.d(e,{c:()=>c});var o=t(424),r=t.n(o),i=t(764),a=t.n(i)()(r());a.push([n.id,".header__content {\n  position: absolute;\n  top: 5vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n",""]);const c=a},874:(n,e,t)=>{t.d(e,{c:()=>c});var o=t(424),r=t.n(o),i=t(764),a=t.n(i)()(r());a.push([n.id,'.header__subtitle {\n  color: white;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  font-family: "Albra Grotesk Regular-Traced-Web";\n  text-shadow: gray 1px 0 10px;\n}\n\n@media screen and (min-width: 1024px) {\n  .header__subtitle {\n    font-size: 32px;\n    margin: 34px 0 0;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .header__subtitle {\n    font-size: 30px;\n    margin: 28px 0 0;\n  }\n}\n\n@media screen and (max-width: 720px) {\n  .header__subtitle {\n    font-size: 18px;\n    margin: 25px 0 0;\n  }\n}\n',""]);const c=a},52:(n,e,t)=>{t.d(e,{c:()=>c});var o=t(424),r=t.n(o),i=t(764),a=t.n(i)()(r());a.push([n.id,"@media screen and (min-width: 1024px) {\n  .header__title {\n    width: 740px;\n    height: 350px;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .header__title {\n    width: 370px;\n    height: 175px;\n  }\n}\n\n@media screen and (max-width: 720px) {\n  .header__title {\n    width: 259px;\n    height: 122px;\n  }\n}\n",""]);const c=a},980:(n,e,t)=>{t.d(e,{c:()=>c});var o=t(424),r=t.n(o),i=t(764),a=t.n(i)()(r());a.push([n.id,".header {\n  display: flex;\n  position: relative;\n  flex-direction: column;\n  align-items: center;\n}\n",""]);const c=a},304:(n,e,t)=>{t.d(e,{c:()=>c});var o=t(424),r=t.n(o),i=t(764),a=t.n(i)()(r());a.push([n.id,".image {\n  width: 100vw;\n  max-width: 1280px;\n  margin: 0 auto;\n}\n",""]);const c=a},200:(n,e,t)=>{t.d(e,{c:()=>c});var o=t(424),r=t.n(o),i=t(764),a=t.n(i)()(r());a.push([n.id,".section {\n  display: flex;\n  justify-content: center;\n}\n",""]);const c=a},440:(n,e,t)=>{t.d(e,{c:()=>c});var o=t(424),r=t.n(o),i=t(764),a=t.n(i)()(r());a.push([n.id,".text-section__bold {\n  font-weight: 600;\n  margin-right: 8px;\n}\n",""]);const c=a},372:(n,e,t)=>{t.d(e,{c:()=>c});var o=t(424),r=t.n(o),i=t(764),a=t.n(i)()(r());a.push([n.id,'.text-section__header {\n  font-family: "Albra Grotesk Regular-Traced-Web";\n  line-height: 1.2em;\n  text-transform: uppercase;\n  max-width: 420px;\n  font-weight: 400;\n}\n\n@media screen and (min-width: 1024px) {\n  .text-section__header {\n    font-size: 40px;\n    margin: 0 0 50px;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .text-section__header {\n    font-size: 30px;\n    margin: 0 0 30px;\n  }\n}\n',""]);const c=a},472:(n,e,t)=>{t.d(e,{c:()=>c});var o=t(424),r=t.n(o),i=t(764),a=t.n(i)()(r());a.push([n.id,".text-section__link {\n  margin: 0 0 14px;\n}\n\n.text-section__link:last-of-type {\n  margin: 0;\n}\n",""]);const c=a},820:(n,e,t)=>{t.d(e,{c:()=>c});var o=t(424),r=t.n(o),i=t(764),a=t.n(i)()(r());a.push([n.id,'.text-section__links {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  font-family: "Albra Grotesk Regular-Traced-Web";\n}\n',""]);const c=a},524:(n,e,t)=>{t.d(e,{c:()=>c});var o=t(424),r=t.n(o),i=t(764),a=t.n(i)()(r());a.push([n.id,".text-section__subtitle {\n  font-size: 19px;\n  font-weight: 400;\n  line-height: 1.4em;\n}\n\n",""]);const c=a},88:(n,e,t)=>{t.d(e,{c:()=>c});var o=t(424),r=t.n(o),i=t(764),a=t.n(i)()(r());a.push([n.id,".text-section {\n  max-width: 800px;\n  margin: 0 auto;\n}\n\n@media screen and (min-width: 1024px) {\n  .text-section {\n    padding: 100px 20px 100px;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .text-section {\n    padding: 50px 20px 50px;\n  }\n}\n",""]);const c=a},340:(n,e,t)=>{t.d(e,{c:()=>A});var o=t(424),r=t.n(o),i=t(764),a=t.n(i),c=t(264),s=t(672),d=t(351),l=t(304),p=t(980),u=t(578),f=t(52),h=t(874),m=t(88),g=t(372),b=t(524),x=t(820),v=t(472),y=t(440),w=t(200),k=t(608),_=t(752),z=t(536),C=t(140),E=t(988),S=t(856),R=t(728),I=a()(r());I.i(c.c),I.i(s.c),I.i(d.c),I.i(l.c),I.i(p.c),I.i(u.c),I.i(f.c),I.i(h.c),I.i(m.c),I.i(g.c),I.i(b.c),I.i(x.c),I.i(v.c),I.i(y.c),I.i(w.c),I.i(k.c),I.i(_.c),I.i(z.c),I.i(C.c),I.i(E.c),I.i(S.c),I.i(R.c),I.push([n.id,"/* Vendor */\n/* Blocks */\n/* Header */\n/* Text-section */\n/* Section */\n/* Colors section */\n",""]);const A=I},264:(n,e,t)=>{t.d(e,{c:()=>c});var o=t(424),r=t.n(o),i=t(764),a=t.n(i)()(r());a.push([n.id,".white {\n  color: black;\n}\n\n.white-1 {\n  color: black;\n}\n\n.white-2 {\n  color: black;\n}\n\n.white-3 {\n  color: black;\n}\n\n\n.orange {\n  background-color: #f57523;\n  color: white;\n}\n\n.orange-2 {\n  background-color: #f57523;\n  opacity: 0.8;\n  color: white;\n}\n\n.orange-3 {\n  background-color: #f57523;\n  opacity: 0.5;\n  color: white;\n}\n\n.orange-4 {\n  background-color: #f57523;\n  opacity: 0.3;\n  color: white;\n}\n\n.black {\n  background-color: #0f0f0f;\n  color: white;\n}\n\n.black-2 {\n  background-color: #0f0f0f;\n  opacity: 0.8;\n  color: white;\n}\n\n.black-3 {\n  background-color: #0f0f0f;\n  opacity: 0.5;\n  color: white;\n}\n\n.black-4 {\n  background-color: #0f0f0f;\n  opacity: 0.3;\n  color: white;\n}\n\n.gray {\n  color: black;\n  background-color: #e1d8d3;\n}\n\n.gray-1 {\n  color: black;\n  opacity: 0.8;\n  background-color: #e1d8d3;\n}\n\n.gray-2 {\n  color: black;\n  opacity: 0.5;\n  background-color: #e1d8d3;\n}\n\n.gray-3 {\n  color: black;\n  opacity: 0.3;\n  background-color: #e1d8d3;\n}\n",""]);const c=a},351:(n,e,t)=>{t.d(e,{c:()=>g});var o=t(424),r=t.n(o),i=t(764),a=t.n(i),c=t(692),s=t.n(c),d=new URL(t(456),t.b),l=new URL(t(152),t.b),p=new URL(t(248),t.b),u=a()(r()),f=s()(d),h=s()(l),m=s()(p);u.push([n.id,`@font-face{\n  font-family: "Albra Grotesk Regular-Traced-Web";\n  src:url(${f})format("woff"),\n      url(${h})format("otf"),\n      url(${m})format("truetype");\n  font-weight:normal;\n  font-style:normal;\n  font-display:swap;\n}`,""]);const g=u},672:(n,e,t)=>{t.d(e,{c:()=>c});var o=t(424),r=t.n(o),i=t(764),a=t.n(i)()(r());a.push([n.id,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\n html {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',""]);const c=a},764:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},692:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},424:n=>{n.exports=function(n){return n[1]}},152:(n,e,t)=>{n.exports=t.p+"80225c22e9942362f41e.otf"},248:(n,e,t)=>{n.exports=t.p+"3f5b42a4fb838f6e5f1c.ttf"},456:(n,e,t)=>{n.exports=t.p+"9866b4b6cfe6a8f273bc.woff"}},m={};function g(n){var e=m[n];if(void 0!==e)return e.exports;var t=m[n]={id:n,exports:{}};return h[n](t,t.exports,g),t.exports}g.m=h,g.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return g.d(e,{a:e}),e},g.d=(n,e)=>{for(var t in e)g.o(e,t)&&!g.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},g.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),g.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;g.g.importScripts&&(n=g.g.location+"");var e=g.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");if(t.length)for(var o=t.length-1;o>-1&&!n;)n=t[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),g.p=n})(),g.b=document.baseURI||self.location.href,g.nc=void 0,n=g(596),e=g.n(n),t=g(520),o=g.n(t),r=g(176),i=g.n(r),a=g(120),c=g.n(a),s=g(808),d=g.n(s),l=g(936),p=g.n(l),u=g(340),(f={}).styleTagTransform=p(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=d(),e()(u.c,f),u.c&&u.c.locals&&u.c.locals})();