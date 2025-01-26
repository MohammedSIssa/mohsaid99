(()=>{"use strict";var n={171:(n,t,o)=>{o.d(t,{A:()=>r});var c=o(601),e=o.n(c),i=o(314),s=o.n(i)()(e());s.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap);"]),s.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap);"]),s.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap);"]),s.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@100;200;300;400;500;600;700&display=swap);"]),s.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400;1,700&display=swap);"]),s.push([n.id,':root {\n  --nav-bg-color: #000;\n  --nav-font-color: #ffffff;\n  --nav-btn-hover-color: #000;\n  --root-bg-color: var(--nav-bg-color);\n  --root-font-color: var(--nav-font-color);\n  --logo-en-font: "Dancing Script", sans-serif, system-ui;\n  --arabic-font: "IBM Plex Sans Arabic", sans-serif, system-ui;\n  --english-font: Roboto, sans-serif, system-ui;\n  --post-count-font: Montserrat, sans-serif, system-ui;\n  --quote-font: Amiri, sans-serif, system-ui;\n}\nbody {\n  background-color: var(--root-bg-color);\n}\nbody * {\n  font-family: var(--arabic-font), sans-serif;\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  /* border: 1px dashed red; */\n}\nbutton {\n  background-color: transparent;\n  border: none;\n  transition: all 0.3s;\n  color: #ddd;\n  font-weight: 600;\n  padding: 5px 10px;\n  font-size: 16px;\n  color: #e0e0e0;\n}\nbutton:hover {\n  cursor: pointer;\n  font-size: 16px;\n  font-weight: 600;\n  color: #fff;\n}\nnav {\n  background-color: var(--nav-bg-color);\n  padding: 10px 30px;\n  color: var(--nav-font-color);\n}\nnav .logo {\n  font-size: 24px;\n  font-weight: bold;\n}\n.logo {\n  color: var(--nav-font-color);\n  font-family: var(--logo-en-font) !important;\n  font-weight: bolder;\n  font-size: 30px;\n}\nnav ul {\n  list-style-type: none;\n}\n.posts {\n  padding: 30px;\n  display: flex;\n  gap: 20px;\n  background-color: var(--nav-btn-hover-color);\n  overflow-x: auto;\n  border-bottom: 1px solid #555;\n  width: 100%;\n}\nbody.Arabic .posts {\n  flex-direction: row-reverse;\n}\n.post {\n  color: white;\n  border-image: linear-gradient(45deg, #f6bd00 0%, #e82243 60%, #c200b5 100%) 1;\n  border-radius: 12px;\n  border-width: 3px;\n  border-style: solid;\n  transition: all 0.3s;\n  position: relative;\n  padding: 10px 20px;\n  width: 240px;\n  min-width: 240px;\n  height: 90px;\n  max-height: 90px;\n  background-color: black;\n}\n.post:hover {\n  background-color: #111;\n  cursor: pointer;\n}\n.post .post-year {\n  position: absolute;\n  top: -15px;\n  right: 15px;\n  background: linear-gradient(to top, #f7000c, #ff6068);\n  padding: 2px 10px;\n  font-size: 16px;\n  font-weight: bold;\n  transform: skewX(-5deg);\n  border-radius: 7px;\n  font-family: Roboto !important;\n}\n.post .post-count {\n  position: absolute;\n  top: -10px;\n  left: -15px;\n  transform: skewX(-2deg);\n  background-color: #0068b5;\n  font-family: var(--post-count-font) !important;\n  font-weight: bolder;\n  font-style: italic;\n  padding: 5px;\n  font-size: 16px;\n}\n.post .post-duration {\n  font-weight: bold;\n  color: var(--nav-font-color);\n  font-size: 18px;\n}\n.post .post-summary {\n  font-weight: thin;\n  font-size: 12px;\n}\nbody.Arabic .post * {\n  text-align: right;\n}\n#root {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: var(--root-font-color);\n}\n#root .counter {\n  font-size: 20px;\n  position: relative;\n  font-weight: bold;\n}\nbody.Arabic #root {\n  text-align: right;\n}\n#root .content .text-box {\n  margin-bottom: 100px;\n}\n#root .content .text-box div {\n  width: 100%;\n  text-align: center;\n}\n#root .content .text-box p {\n  font-weight: 450;\n}\n#root .content .text-box img {\n  margin-bottom: 80px;\n}\n#root .content .text-box .quote-box {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 8px double #e3e3e3;\n  margin: 50px 0;\n  background-color: #29334d;\n  padding: 20px 0px;\n  width: 80%;\n  /* width: min(80%, 500px); */\n  text-align: center !important;\n}\n#root .content .text-box .quote-box p.post-quote q {\n  text-wrap: pretty;\n  font-size: 24px;\n  font-family: var(--quote-font) !important;\n}\n#root .content .text-box {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.small-img {\n  margin-top: 10px;\n}\np.post-quote {\n  /* font-style: italic; */\n  text-wrap: pretty;\n  font-size: clamp(1rem, calc(7vw + 2rem), 2rem) !important;\n  quotes: "“" "”";\n  \n}\np.count {\n  font-weight: 240;\n  font-size: 12px !important;\n  font-style: italic;\n  color: #e3e3e3;\n  text-align: center;\n}\n.goals {\n  padding: 20px 0;\n  color: white;\n  width: min(80%, 600px);\n  background-color: black;\n  display: flex;\n  flex-direction: column;\n}\n.goal {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  margin: 15px 0;\n}\n.loading {\n  width: 90%;\n  position: relative;\n  height: 20px;\n  background-color: #f2f2f2;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  border-radius: 8px;\n  margin: 10px 0;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.45) inset;\n}\n.progress-bar {\n  height: 100%;\n  background: linear-gradient(90deg, #f6bd00 0%, #e82243 60%, #c200b5 100%);\n  border-radius: 8px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.45) inset;\n}\n.progress-value {\n  position: absolute;\n  top: 23px;\n  font-weight: 450;\n}',""]);const r=s},29:(n,t,o)=>{o.d(t,{A:()=>r});var c=o(601),e=o.n(c),i=o(314),s=o.n(i)()(e());s.push([n.id,"@media (min-width: 1000px) {\n  .container {\n    display: flex;\n    flex-direction: row-reverse;\n  }\n  .btn {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 5px;\n    padding: 10px;\n  }\n  nav .nav-items img {\n    width: 30px;\n    height: 30px;\n  }\n  nav {\n    width: 250px;\n    min-width: 200px;\n    max-width: 200px;\n    text-align: right;\n    border-left: 1px solid #555;\n    min-height: 100dvh;\n    position: fixed;\n    right: 0;\n  }\n  main {\n    margin-right: 200px;\n    width: calc(100dvw - 200px);\n  }\n  nav .logo {\n    position: absolute;\n  }\n  nav .nav-items {\n    position: absolute;\n    right: 10px;\n    top: 100px;\n  }\n  nav ul li span {\n    margin: 0 20px;\n  }\n  nav ul {\n    display: flex;\n    gap: 20px;\n    flex-direction: column;\n  }\n  .hidden-l {\n    display: none;\n  }\n  #root {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n  }\n  .text-box {\n    width: 100%;\n  }\n  .quote-box {\n    width: 80%;\n  }\n  p.post-quote, p.post-quote q {\n    width: 100%;\n  }\n  #root .content {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  #root .content .text-box {\n    padding: 10px 40px;\n    font-size: 18px;\n  }\n  #root .content .text-box div {\n    margin-top: 50px;\n    margin-bottom: 20px;\n  }\n  #root .content .text-box img{\n    width: 100%;\n  }\n  #root .content .text-box img.small-img {\n    width: min(80%, 550px);\n  }\n}",""]);const r=s},244:(n,t,o)=>{o.d(t,{A:()=>r});var c=o(601),e=o.n(c),i=o(314),s=o.n(i)()(e());s.push([n.id,"@media (max-width: 1000px) {\n  .logo {\n    position: absolute;\n    top: 0;\n    left: 0;\n    border-bottom: 1px solid #555;\n    width: 100%;\n    padding: 10px 20px;\n    text-align: center;\n  }\n  .hidden-m {\n    display: none;\n  }\n  nav {\n    position: fixed;\n    bottom: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    min-height: 60px;\n    height: 60px;\n    max-height: 60px;\n    border-top: 1px solid #555;\n    z-index: 999;\n  }\n  nav ul {\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n  }\n  nav .nav-items {\n    width: 100%;\n    justify-content: space-around;\n    align-items: center;\n  }\n  nav .nav-items img {\n    width: 25px;\n    height: 25px;\n  }\n  body.Arabic nav {\n    flex-direction: row-reverse;\n    text-align: right;\n  }\n  body.Arabic nav ul {\n    flex-direction: row-reverse;\n  }\n  .posts {\n    margin-top: 80px;\n  }\n  .posts .post {\n    text-align: right;\n  }\n  #root {\n    width: 100dvw;\n    margin-bottom: 100px;\n  }\n  #root .content {\n    width: 100%;\n  }\n  #root .content .text-box .quote-box p.post-quote{ \n    margin-bottom: 10px;\n    font-size: 18px;\n    font-weight: bold;\n  }\n  #root .content .text-box p {\n    padding: 10px 20px;\n    margin: 10px 0;\n    font-size: 18px;\n    font-weight: 400;\n    text-wrap: pretty;\n  }\n  #root .content .text-box img{\n    width: 100%; \n  }\n  main {\n    width: 100%;\n  }\n}",""]);const r=s},422:(n,t,o)=>{o.d(t,{A:()=>r});var c=o(601),e=o.n(c),i=o(314),s=o.n(i)()(e());s.push([n.id,"::-webkit-scrollbar {\n  width: 6px; \n  height: 6px; \n}\n::-webkit-scrollbar-track {\n  background: var(--root-bg-color);\n}\n::-webkit-scrollbar-thumb {\n  background: #999;\n  border-radius: 12px;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #333; \n}\n::-webkit-scrollbar-corner {\n  background: #f1f1f1;\n}",""]);const r=s},314:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var o="",c=void 0!==t[5];return t[4]&&(o+="@supports (".concat(t[4],") {")),t[2]&&(o+="@media ".concat(t[2]," {")),c&&(o+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),o+=n(t),c&&(o+="}"),t[2]&&(o+="}"),t[4]&&(o+="}"),o})).join("")},t.i=function(n,o,c,e,i){"string"==typeof n&&(n=[[null,n,void 0]]);var s={};if(c)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(s[a]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);c&&s[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),o&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=o):l[2]=o),e&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=e):l[4]="".concat(e)),t.push(l))}},t}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var t=[];function o(n){for(var o=-1,c=0;c<t.length;c++)if(t[c].identifier===n){o=c;break}return o}function c(n,c){for(var i={},s=[],r=0;r<n.length;r++){var a=n[r],d=c.base?a[0]+c.base:a[0],l=i[d]||0,_="".concat(d," ").concat(l);i[d]=l+1;var p=o(_),g={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==p)t[p].references++,t[p].updater(g);else{var x=e(g,c);c.byIndex=r,t.splice(r,0,{identifier:_,updater:x,references:1})}s.push(_)}return s}function e(n,t){var o=t.domAPI(t);return o.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;o.update(n=t)}else o.remove()}}n.exports=function(n,e){var i=c(n=n||[],e=e||{});return function(n){n=n||[];for(var s=0;s<i.length;s++){var r=o(i[s]);t[r].references--}for(var a=c(n,e),d=0;d<i.length;d++){var l=o(i[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=a}}},659:n=>{var t={};n.exports=function(n,o){var c=function(n){if(void 0===t[n]){var o=document.querySelector(n);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(n){o=null}t[n]=o}return t[n]}(n);if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(o)}},540:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},56:(n,t,o)=>{n.exports=function(n){var t=o.nc;t&&n.setAttribute("nonce",t)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(o){!function(n,t,o){var c="";o.supports&&(c+="@supports (".concat(o.supports,") {")),o.media&&(c+="@media ".concat(o.media," {"));var e=void 0!==o.layer;e&&(c+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),c+=o.css,e&&(c+="}"),o.media&&(c+="}"),o.supports&&(c+="}");var i=o.sourceMap;i&&"undefined"!=typeof btoa&&(c+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(c,n,t.options)}(t,n,o)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},113:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function o(c){var e=t[c];if(void 0!==e)return e.exports;var i=t[c]={id:c,exports:{}};return n[c](i,i.exports,o),i.exports}o.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return o.d(t,{a:t}),t},o.d=(n,t)=>{for(var c in t)o.o(t,c)&&!o.o(n,c)&&Object.defineProperty(n,c,{enumerable:!0,get:t[c]})},o.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),o.nc=void 0;var c=o(72),e=o.n(c),i=o(825),s=o.n(i),r=o(659),a=o.n(r),d=o(56),l=o.n(d),_=o(540),p=o.n(_),g=o(113),x=o.n(g),v=o(171),f={};f.styleTagTransform=x(),f.setAttributes=l(),f.insert=a().bind(null,"head"),f.domAPI=s(),f.insertStyleElement=p(),e()(v.A,f),v.A&&v.A.locals&&v.A.locals;var h=o(29),u={};u.styleTagTransform=x(),u.setAttributes=l(),u.insert=a().bind(null,"head"),u.domAPI=s(),u.insertStyleElement=p(),e()(h.A,u),h.A&&h.A.locals&&h.A.locals;var m=o(244),b={};b.styleTagTransform=x(),b.setAttributes=l(),b.insert=a().bind(null,"head"),b.domAPI=s(),b.insertStyleElement=p(),e()(m.A,b),m.A&&m.A.locals&&m.A.locals;var y=o(422),w={};w.styleTagTransform=x(),w.setAttributes=l(),w.insert=a().bind(null,"head"),w.domAPI=s(),w.insertStyleElement=p(),e()(y.A,w),y.A&&y.A.locals&&y.A.locals;const Q=document.getElementById("root");function z(n){const t=document.querySelector(".posts");if(0===n.length){const n=document.getElementById("root");t.innerHTML='\n    <div class="post">\n      لسا ما في اشي :)\n    </div>\n   ',n.innerHTML=""}else{t.innerHTML="";for(let o=n.length-1;o>=0;o--)t.innerHTML+=`\n        <div class="post" data-id="${n[o].id}">\n          <div class="post-count">#${n[o].id}</div>\n          <div class="post-year">${n[o].year}</div>\n          <div class="post-duration">${n[o].durationAr}</div>\n          <div class="post-summary">${n[o].overallAr}</div>\n        </div>\n      `;!function(n,t){let o=n.length-1;Q.innerHTML=n[o]["content-ar"],t.forEach((t=>{let o=t.getAttribute("data-id");t.addEventListener("click",(()=>{Q.innerHTML=n[o-1]["content-ar"],A(document.querySelectorAll(".progress-bar"))}))}))}(n,document.querySelectorAll(".post"))}}function A(n){let t=document.querySelectorAll(".progress-value");n.forEach(((n,o)=>{let c=+n.getAttribute("goal"),e=+n.getAttribute("value"),i=Math.round(100*e/c);t[o].textContent=`${i}%`,t[o].style.left=i>10?i-6+"%":`${i}%`,n.style.width=`${i}%`}))}const k=[{id:1,durationAr:"من 1 يناير إلى 7 يناير",overallAr:"حل أسئلة برمجة",year:"2025","content-ar":'\n        <div class="content">\n          <div class="text-box">\n            <div class="quote-box">\n              <p class="post-quote">\n                <q>\n                  الإيمان بالنفس هو أساس النجاح\n                </q>\n              </p>\n            </div>\n\n            <div>\n              <p class="count">\n                الأسبوع رقم 1\n              </p>\n            </div>\n            \n            <div>\n              <p>\n                - Project Eular - بديت بحل أسئلة موقع بروجكت أولر\n              </p>\n            </div>\n            \n            <img class="small-img" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/472952301_1622255235096672_2625751805603823917_n.png?_nc_cat=103&ccb=1-7&_nc_sid=0024fc&_nc_ohc=QZbGSSJ4NiIQ7kNvgHHO2rM&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gHCYagm4L_LTHRicUepCL5JGiH0RksiR_8xMun4K7Amyg&oe=67B031D5">\n            \n            <div>\n              <p>\n                حليت 16 سؤال، من أصل 50 سؤال بدي أحلهم بهاد السنة\n              </p>\n            </div>\n            <img class="small-img" alt="project eular pic" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/473064594_1072389231308335_1461982118862557067_n.png?_nc_cat=100&ccb=1-7&_nc_sid=0024fc&_nc_ohc=Tj2DvdF893QQ7kNvgEjI3Td&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gGC9da_Labfg6QQMPCjLKZGdciU9qrJ5eWLuIgM54ehhQ&oe=67B04DE3">\n            \n            <div>\n              <p>\n                حلهم كان ممتع، هاد الأسئلة هدفها تخليك مش تبرمج كود وخلص، كمان مفروض تفكر بافضل وأسرع كود للحل\n              </p>\n            </div>\n           </div>\n        </div>\n      '},{id:2,durationAr:"من 8 يناير إلى 14 يناير",overallAr:"برمجة هاد الموقع",year:"2025","content-ar":'\n        <div class="content">\n          <div class="text-box">\n            \n            <div class="quote-box">\n              <p class="post-quote">\n                <q>\n                  لا يهم كم أنت بطيئ طالما أنك لن تتوقف\n                </q>\n              </p>\n            </div> \x3c!-- end of quote-box --\x3e\n  \n            <div>\n              <p class="count">\n                الأسبوع رقم 2\n              </p>\n            </div>\n\n            <div>\n              <p>\n                برمجة هاد الموقع\n              </p>\n            </div>\n  \n            <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/473185305_1124854055460184_5402093845210325637_n.png?_nc_cat=111&ccb=1-7&_nc_sid=0024fc&_nc_ohc=qY8_pr9yNmcQ7kNvgHoIB1b&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gHRX_Yqz7aN9-nt94x31s8qsugxDI3Kj4hvYMwwiUUbIA&oe=67ADE4AE">\n            <div>\n              <p>\n                الشكل الأولي للموقع\n              </p>\n            </div>\n  \n            <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/472719468_1103342567920564_2910878705705666284_n.png?_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=Qk9eFFVN0QoQ7kNvgHYUqZL&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gEQULOz_u3XaA_oyMX8RcG-57UQGsk0fbcxO77hZHFmDg&oe=67ADC676">\n            \n            <div>\n              <p>\n                تصميم جديد خالص، مسروق من الانستا :) بعد هيك ضفت اقتباس في كل اسبوع، وعملت كمان تعديلات على التصميم، الشكل على الجوال هيك\n              </p>\n            </div>\n  \n            <img class="small-img" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/473649156_576764025254955_5902855516072431880_n.png?_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_ohc=Doz5lsOXTyoQ7kNvgH5WXtT&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gE-w72JVBF24NQpaz2GNDrzbs-I5Ut5O53uqfDrDeaFLg&oe=67ADCCEA">\n            \n            <div>\n              <p>\n                الشكل على الشاشات الأكبر هيك\n              </p>\n              <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/473504323_1268831614398764_5613916280664234189_n.png?_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_ohc=ro7IiyvOozEQ7kNvgE6I5Ww&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gGDSkqGeFGNfeIOM4tsa1Gp8H2NXKE6qpQ4pGVYgoqUWQ&oe=67ADCDFC">\n            </div>\n  \n            <div>\n              <p>\n                اليوم 14 يناير بكون تممت 142 يوم متوالي على تعلم اللغة العبرية\n              </p>\n            </div>\n            \n            <img class="small-img" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/473098376_1107212037751648_5625160027593154118_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=0024fc&_nc_ohc=V8PlobIAZAIQ7kNvgEYf4YB&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gHx9uaHR0rZCHXXzUGhM9VdPuCx99fOOiBecrPZbfi9Qg&oe=67AF2818">\n          \n          </div> \x3c!-- End of text-box div --\x3e\n        </div> \x3c!-- End of content div --\x3e\n      '},{id:3,durationAr:"من 15 يناير إلى 21 يناير",overallAr:"todolist برنامج",year:"2025","content-ar":'\n      <div class="content">\n        <div class="text-box">\n          <div class="quote-box">\n            <p class="post-quote">\n              <q>\n                لا يوجد طريق مختصر إلى مكان يستحق الذهاب إليه\n              </q>\n            </p>\n          </div>\n\n          <div>\n            <p class="count">\n              الأسبوع رقم 3\n            </p>\n          </div>\n\n          <div>\n            <p>\n              مشروع جديد، برنامج تودو ليست\n            </p>\n          </div>\n\n          <div>\n            <p>\n              Project Tech Stack: HTML, CSS, ES6 JavaScript, Webpack\n            </p>\n          </div>\n        \n          <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/473580584_1589517811681307_6742146940368943388_n.png?_nc_cat=100&ccb=1-7&_nc_sid=0024fc&_nc_ohc=BIWQB6HWnc8Q7kNvgEKugi8&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gEQEmKkakbn6Cgy5MBhSqHnFO33_YlYvRvrbhyKbc3hBQ&oe=67B5A735">\n  \n          <div>\n            <p>\n              وهي اللي مطلوب من المشروع اعمله\n            </p>\n          </div>\n\n          <img class="small-img" src="https://instagram.fgza2-5.fna.fbcdn.net/v/t1.15752-9/473056195_1592299984983956_4773092253594252725_n.png?_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=jlOUE6LVpu8Q7kNvgFBapZ9&_nc_zt=23&_nc_ht=instagram.fgza2-5.fna&oh=03_Q7cD1gHyc3nITXaHiPmHOhL-Mut34fYr2KoQKYmvVGT7ix46mw&oe=67B59269">\n        \n          <div>\n            <p>\n              شكله الحالي، لسا بده شغل، وكمان بدي اضيف البرمجة عشان يشتغل كل المطلوب من المشروع\n            </p>\n          </div>\n\n          <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/473579497_835027215379550_7090660851038192190_n.png?_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=zX51oBF20c0Q7kNvgHfbSZt&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gGlpudKF2K4R4HGzQaPSleLMTU1D4-3GwbTgddkhe2lNg&oe=67B5A4C9">\n\n          <img class="small-img" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/473598694_627153623137677_3419785326934642955_n.png?_nc_cat=102&ccb=1-7&_nc_sid=0024fc&_nc_ohc=5oYnkaTS504Q7kNvgHMPtws&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gF2dVOd1M-wLWZyhruCuCX0ru8ufDLCvjJ0PJK-TDohMQ&oe=67B5D294">\n        \n          <div>\n            <p>\n              المشروع خلص برمجة وتصميم وجهز بعد يومين شغل\n            </p>\n          </div>\n          <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/474054834_1293871188589623_5493088919307718504_n.png?_nc_cat=101&ccb=1-7&_nc_sid=0024fc&_nc_ohc=sg-Btp3D5V4Q7kNvgG69qu5&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gGMyDZpir_le7BYbB0sYQV-fA2TzgqRMbCobxBxVVuMLQ&oe=67B6FB37">\n\n          <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/473183937_2325259884515528_1270149524624042991_n.png?_nc_cat=100&ccb=1-7&_nc_sid=0024fc&_nc_ohc=r81H_VkVGj0Q7kNvgEMdKb_&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gGqzP8qyplSd4i67rJ9lqSQmxDPcdK6tMqBGogrdyIKPQ&oe=67B7011F">\n\n          <img class="small-img" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/473821352_1158452332324931_704962921524850772_n.png?_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=VlBTXTNlmLgQ7kNvgEt5HRx&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gEU6tsijMQCTtQaSDjx4xApFxasFKKNtb78lncRF8Il3w&oe=67B72253">\n\n          <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/474061658_1032990445245368_5481644340204430928_n.png?_nc_cat=111&ccb=1-7&_nc_sid=0024fc&_nc_ohc=YrXYlRB822QQ7kNvgFesGrf&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gE3tMYEcqYTb-L0Y_2mKWpyWvo19tFvkSbqyfGOstTmdA&oe=67B71E9C">\n\n        </div> \x3c!-- end of .text-box --\x3e\n      </div> \x3c!-- end of .content --\x3e\n      '},{id:4,durationAr:"من 22 يناير إلى 28 يناير",overallAr:"تحديث: اضافة زر الاهداف وبرمجتها بالموقع",year:"2025","content-ar":'\n        <div class="content">\n          <div class="text-box">\n            <div class="quote-box">\n              <p class="post-quote">\n                <q>\n                  الأهداف الكبيرة تحتاج إلى خطوات صغيرة\n                </q>\n              </p>\n            </div>\n\n            <div>\n            <p class="count">\n              الأسبوع رقم 4\n            </p>\n          </div>\n\n          <div>\n            <p>\n              تحديث جديد على الموقع، ضفت زر خاص بالاهداف اللي راح احاولها احققها لكل سنة\n            </p>\n          </div>\n\n          <img class="small-img" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/474073667_468636946130342_2259590288086221166_n.png?_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_ohc=sIgvhDyM-iQQ7kNvgEXELsB&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gFTIrQSWWt_XRWpfLdyyzObsrPBSglVLUJIc3E2ABOzeg&oe=67BC1760">\n\n          <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/472831080_649413734416799_6033805500391952736_n.png?_nc_cat=102&ccb=1-7&_nc_sid=0024fc&_nc_ohc=sdVTDZ1M-B8Q7kNvgEqkIr-&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gEN8QuzT_GP6nsXlee-LuF3k1H_C_vBNl-nV8wkCE96EQ&oe=67BC2428">\n\n          <img class="small-img" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/472831080_1560584481258438_1001751137291446491_n.png?_nc_cat=111&ccb=1-7&_nc_sid=0024fc&_nc_ohc=Zzvb6zO9Ue0Q7kNvgGnqu1L&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gGmdnCh1xIs89YFlgI7hVo25cx0xLY5awre3cBQLpOAhg&oe=67BC0047">\n\n          <img class="small-img" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/474455709_896029809097223_2334009604449952129_n.png?_nc_cat=110&ccb=1-7&_nc_sid=0024fc&_nc_ohc=l9ha8N065F4Q7kNvgEUUUna&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gHScUQMgWBfIMF-ok3upKa5jgVLdNcOWVPllxGSZBG74w&oe=67BC0AE3">\n\n          <img class="small-img" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/474063234_583727251203817_4913141970604426519_n.png?_nc_cat=105&ccb=1-7&_nc_sid=0024fc&_nc_ohc=IheNKSaOLVsQ7kNvgHaRUoB&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gFE-sjbDWrj_dGYLu1GkUU42nJ4rBdIPIrezyg3ko-Cwg&oe=67BBFAD0">\n\n          <img class="small-img" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/475038210_1951275948614506_4459232782963396948_n.png?_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=G0i671-UBx8Q7kNvgGLryay&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gHQDs-vq6lxUepc7VALL80751_HbNgQO9YFvO0ebJVGSg&oe=67BBF1F3">\n\n          <div>\n            <p>\n              عملت تحديث على الجيت هب تعت الموقع هاد وربطتها بالكود تاع التطوير\n              <br>\n              عملت فرع خاص للموقع الجاهز بعد كل تحديث وفرع خاص للكود اللي بيطور الموقع\n              <br>\n              عموما هيك بيكون أسهل للتحديث والتطوير ولقدام بيريحني اكتر\n            </p>\n          </div>\n\n          <img class="small-img" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/474177234_1674726356792840_8521125464609773872_n.png?_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=UwyzNODTw5sQ7kNvgEkse8t&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gGySwaooYJPfhAEvKIN9GCa3JIg8l2je99v_UWb9aYf8A&oe=67BD6F40">\n\n          <img class="small-img" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/474923639_1320811169059834_2756497527334045870_n.png?_nc_cat=103&ccb=1-7&_nc_sid=0024fc&_nc_ohc=QAP2TUc_QIUQ7kNvgGUUiYH&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gGkyzjKMasQcl4QRMt8pP_-C1oLWx_W6ecelXYtTncJHA&oe=67BD7EF0">\n          \n          <div>\n            <p>\n            الطريقة القديمة لتحديث الموقع كل مرة\n            </p>\n          </div>\n\n\n          <img class="small-img" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/474771748_900036532201265_841289598436129373_n.png?_nc_cat=105&ccb=1-7&_nc_sid=0024fc&_nc_ohc=aU49hW5NoI0Q7kNvgHsN5Jr&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gGNIWU5YMBp8jCbtCqmNPyzQeFwBxRHpM6YXiEvXeJ4OQ&oe=67BD9B03">\n\n          <div>\n            <p>\n              الطريقة الجديدة للتحديث، صرت بس مرة وحدة اسوي تحديث بطريقة أسهل\n            </p>\n          </div>\n\n          <img class="small-img" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/472479605_931530099131377_129277406917368155_n.png?_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=WIWT6obSThAQ7kNvgFLcKY0&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gHfJ1hIRyJx4t3_x_JPzMwtXvSlnEKQBlkJynv7oeJ08g&oe=67BD9443">\n          \n          </div>\n        </div>\n      '}],D=[],q=[{id:1,durationAr:"أهداف السنة",overallAr:"تعلم برمجة مواقع فل ستاك، قراءة كتب جديدة",year:"2025","content-ar":'\n        <div class="goals">\n        <div class="goal">\n          <p>Become a Full-Stack Web Developer</p>\n          <div class="loading">\n            <div class="progress-value"></div>\n            <div class="progress-bar" goal="600" value="167"></div>\n          </div>\n        </div>\n        <div class="goal">\n          <p>Solve 50 Project Euler Problems</p>\n          <div class="loading">\n            <div class="progress-value"></div>\n            <div class="progress-bar" goal="50" value="16"></div>\n          </div>\n        </div>\n        <div class="goal">\n          <p>Read 10 Books</p>\n          <div class="loading">\n            <div class="progress-value"></div>\n            <div class="progress-bar" goal="10" value="0"></div>\n          </div>\n        </div>\n        <div class="goal">\n          <p>Duolingo 500 Days Streak</p>\n          <div class="loading">\n            <div class="progress-value"></div>\n            <div class="progress-bar" goal="500" value="152"></div>\n          </div>\n        </div>\n      '}],B=document.querySelector("button.load-weeks"),E=document.querySelector("button.load-blogs"),N=document.querySelector("button.load-goals");B.addEventListener("click",(()=>{z(k)})),E.addEventListener("click",(()=>{z(D)})),N.addEventListener("click",(()=>{z(q),A(document.querySelectorAll(".progress-bar"))})),z(k)})();