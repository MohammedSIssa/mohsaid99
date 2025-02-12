(()=>{"use strict";var n={171:(n,t,c)=>{c.d(t,{A:()=>_});var o=c(601),e=c.n(o),i=c(314),s=c.n(i)()(e());s.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap);"]),s.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap);"]),s.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap);"]),s.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@100;200;300;400;500;600;700&display=swap);"]),s.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400;1,700&display=swap);"]),s.push([n.id,':root {\n  --nav-bg-color: #000;\n  --nav-font-color: #ffffff;\n  --nav-btn-hover-color: #000;\n  --root-bg-color: var(--nav-bg-color);\n  --root-font-color: var(--nav-font-color);\n  --logo-en-font: "Dancing Script", sans-serif, system-ui;\n  --arabic-font: "IBM Plex Sans Arabic", sans-serif, system-ui;\n  --english-font: Roboto, sans-serif, system-ui;\n  --post-count-font: Montserrat, sans-serif, system-ui;\n  --quote-font: Amiri, sans-serif, system-ui;\n}\nbody {\n  background-color: var(--root-bg-color);\n}\nbody * {\n  font-family: var(--arabic-font), sans-serif;\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  /* border: 1px dashed red; */\n}\nbutton {\n  background-color: transparent;\n  border: none;\n  transition: all 0.3s;\n  color: #ddd;\n  font-weight: 600;\n  padding: 5px 10px;\n  font-size: 16px;\n  color: #e0e0e0;\n}\nbutton:hover {\n  cursor: pointer;\n  font-size: 16px;\n  font-weight: 600;\n  color: #fff;\n}\nnav {\n  background-color: var(--nav-bg-color);\n  padding: 10px 30px;\n  color: var(--nav-font-color);\n}\nnav .logo {\n  font-size: 24px;\n  font-weight: bold;\n}\n.logo {\n  color: var(--nav-font-color);\n  font-family: var(--logo-en-font) !important;\n  font-weight: bolder;\n  font-size: 30px;\n}\nnav ul {\n  list-style-type: none;\n}\n.posts {\n  padding: 30px;\n  display: flex;\n  gap: 20px;\n  background-color: var(--nav-btn-hover-color);\n  overflow-x: auto;\n  border-bottom: 1px solid #555;\n  width: 100%;\n}\nbody.Arabic .posts {\n  flex-direction: row-reverse;\n}\n.post {\n  color: white;\n  border-image: linear-gradient(45deg, #f6bd00 0%, #e82243 60%, #c200b5 100%) 1;\n  border-radius: 12px;\n  border-width: 3px;\n  border-style: solid;\n  transition: all 0.3s;\n  position: relative;\n  padding: 10px 20px;\n  width: 240px;\n  min-width: 240px;\n  height: 90px;\n  max-height: 90px;\n  background-color: black;\n}\n.post:hover {\n  background-color: #111;\n  cursor: pointer;\n}\n.post .post-year {\n  position: absolute;\n  top: -15px;\n  right: 15px;\n  background: linear-gradient(to top, #f7000c, #ff6068);\n  padding: 2px 10px;\n  font-size: 16px;\n  font-weight: bold;\n  transform: skewX(-5deg);\n  border-radius: 7px;\n  font-family: Roboto !important;\n}\n.post .post-count {\n  position: absolute;\n  top: -10px;\n  left: -15px;\n  transform: skewX(-2deg);\n  background-color: #0068b5;\n  font-family: var(--post-count-font) !important;\n  font-weight: bolder;\n  font-style: italic;\n  padding: 5px;\n  font-size: 16px;\n}\n.post .post-duration {\n  font-weight: bold;\n  color: var(--nav-font-color);\n  font-size: 18px;\n}\n.post .post-summary {\n  font-weight: thin;\n  font-size: 12px;\n}\nbody.Arabic .post * {\n  text-align: right;\n}\n#root {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: var(--root-font-color);\n}\n#root .counter {\n  font-size: 20px;\n  position: relative;\n  font-weight: bold;\n}\nbody.Arabic #root {\n  text-align: right;\n}\n#root .content .text-box {\n  margin-bottom: 100px;\n}\n#root .content .text-box div {\n  width: 100%;\n  text-align: center;\n}\n#root .content .text-box p {\n  font-weight: 450;\n}\n#root .content .text-box img {\n  margin-bottom: 80px;\n}\n#root .content .text-box .quote-box {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 8px double #e3e3e3;\n  margin: 50px 0;\n  background-color: #29334d;\n  padding: 20px 0px;\n  width: 80%;\n  /* width: min(80%, 500px); */\n  text-align: center !important;\n}\n#root .content .text-box .quote-box p.post-quote q {\n  text-wrap: pretty;\n  font-size: 24px;\n  font-family: var(--quote-font) !important;\n}\n#root .content .text-box {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.small-img {\n  margin-top: 10px;\n}\np.post-quote {\n  /* font-style: italic; */\n  text-wrap: pretty;\n  font-size: clamp(1rem, calc(7vw + 2rem), 2rem) !important;\n  quotes: "“" "”";\n  \n}\np.count {\n  font-weight: 240;\n  font-size: 12px !important;\n  font-style: italic;\n  color: #e3e3e3;\n  text-align: center;\n}\n.goals {\n  padding: 20px 0;\n  color: white;\n  width: min(80%, 600px);\n  background-color: black;\n  display: flex;\n  flex-direction: column;\n}\n.goal {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  margin: 15px 0;\n}\n.loading {\n  width: 90%;\n  position: relative;\n  height: 20px;\n  background-color: #f2f2f2;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  border-radius: 8px;\n  margin: 10px 0;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.45) inset;\n}\n.progress-bar {\n  height: 100%;\n  background: linear-gradient(200deg, #f6bd00 0%, #e82243 60%, #c200b5 100%);\n  border-radius: 8px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.45) inset;\n}\n.progress-value {\n  position: absolute;\n  top: 23px;\n  font-weight: 450;\n}',""]);const _=s},29:(n,t,c)=>{c.d(t,{A:()=>_});var o=c(601),e=c.n(o),i=c(314),s=c.n(i)()(e());s.push([n.id,"@media (min-width: 1000px) {\n  .container {\n    display: flex;\n    flex-direction: row-reverse;\n  }\n  .btn {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 5px;\n    padding: 10px;\n  }\n  nav .nav-items img {\n    width: 30px;\n    height: 30px;\n  }\n  nav {\n    width: 250px;\n    min-width: 200px;\n    max-width: 200px;\n    text-align: right;\n    border-left: 1px solid #555;\n    min-height: 100dvh;\n    position: fixed;\n    right: 0;\n  }\n  main {\n    margin-right: 200px;\n    width: calc(100dvw - 200px);\n  }\n  nav .logo {\n    position: absolute;\n  }\n  nav .nav-items {\n    position: absolute;\n    right: 10px;\n    top: 100px;\n  }\n  nav ul li span {\n    margin: 0 20px;\n  }\n  nav ul {\n    display: flex;\n    gap: 20px;\n    flex-direction: column;\n  }\n  .hidden-l {\n    display: none;\n  }\n  #root {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n  }\n  .text-box {\n    width: 100%;\n  }\n  .quote-box {\n    width: 80%;\n  }\n  p.post-quote, p.post-quote q {\n    width: 100%;\n  }\n  #root .content {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  #root .content .text-box {\n    padding: 10px 40px;\n    font-size: 18px;\n  }\n  #root .content .text-box div {\n    margin-top: 50px;\n    margin-bottom: 20px;\n  }\n  #root .content .text-box img{\n    width: 100%;\n  }\n  #root .content .text-box img.small-img {\n    width: min(80%, 550px);\n  }\n}",""]);const _=s},244:(n,t,c)=>{c.d(t,{A:()=>_});var o=c(601),e=c.n(o),i=c(314),s=c.n(i)()(e());s.push([n.id,"@media (max-width: 1000px) {\n  .logo {\n    position: absolute;\n    top: 0;\n    left: 0;\n    border-bottom: 1px solid #555;\n    width: 100%;\n    padding: 10px 20px;\n    text-align: center;\n  }\n  .hidden-m {\n    display: none;\n  }\n  nav {\n    position: fixed;\n    bottom: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    min-height: 60px;\n    height: 60px;\n    max-height: 60px;\n    border-top: 1px solid #555;\n    z-index: 999;\n  }\n  nav ul {\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n  }\n  nav .nav-items {\n    width: 100%;\n    justify-content: space-around;\n    align-items: center;\n  }\n  nav .nav-items img {\n    width: 25px;\n    height: 25px;\n  }\n  body.Arabic nav {\n    flex-direction: row-reverse;\n    text-align: right;\n  }\n  body.Arabic nav ul {\n    flex-direction: row-reverse;\n  }\n  .posts {\n    margin-top: 80px;\n  }\n  .posts .post {\n    text-align: right;\n  }\n  #root {\n    width: 100dvw;\n    margin-bottom: 100px;\n  }\n  #root .content {\n    width: 100%;\n  }\n  #root .content .text-box .quote-box p.post-quote{ \n    margin-bottom: 10px;\n    font-size: 18px;\n    font-weight: bold;\n  }\n  #root .content .text-box p {\n    padding: 10px 20px;\n    margin: 10px 0;\n    font-size: 18px;\n    font-weight: 400;\n    text-wrap: pretty;\n  }\n  #root .content .text-box img{\n    width: 100%; \n  }\n  main {\n    width: 100%;\n  }\n}",""]);const _=s},422:(n,t,c)=>{c.d(t,{A:()=>_});var o=c(601),e=c.n(o),i=c(314),s=c.n(i)()(e());s.push([n.id,"::-webkit-scrollbar {\n  width: 6px; \n  height: 6px; \n}\n::-webkit-scrollbar-track {\n  background: var(--root-bg-color);\n}\n::-webkit-scrollbar-thumb {\n  background: #999;\n  border-radius: 12px;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #333; \n}\n::-webkit-scrollbar-corner {\n  background: #f1f1f1;\n}",""]);const _=s},314:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var c="",o=void 0!==t[5];return t[4]&&(c+="@supports (".concat(t[4],") {")),t[2]&&(c+="@media ".concat(t[2]," {")),o&&(c+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),c+=n(t),o&&(c+="}"),t[2]&&(c+="}"),t[4]&&(c+="}"),c})).join("")},t.i=function(n,c,o,e,i){"string"==typeof n&&(n=[[null,n,void 0]]);var s={};if(o)for(var _=0;_<this.length;_++){var a=this[_][0];null!=a&&(s[a]=!0)}for(var r=0;r<n.length;r++){var d=[].concat(n[r]);o&&s[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),c&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=c):d[2]=c),e&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=e):d[4]="".concat(e)),t.push(d))}},t}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var t=[];function c(n){for(var c=-1,o=0;o<t.length;o++)if(t[o].identifier===n){c=o;break}return c}function o(n,o){for(var i={},s=[],_=0;_<n.length;_++){var a=n[_],r=o.base?a[0]+o.base:a[0],d=i[r]||0,l="".concat(r," ").concat(d);i[r]=d+1;var p=c(l),g={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==p)t[p].references++,t[p].updater(g);else{var x=e(g,o);o.byIndex=_,t.splice(_,0,{identifier:l,updater:x,references:1})}s.push(l)}return s}function e(n,t){var c=t.domAPI(t);return c.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;c.update(n=t)}else c.remove()}}n.exports=function(n,e){var i=o(n=n||[],e=e||{});return function(n){n=n||[];for(var s=0;s<i.length;s++){var _=c(i[s]);t[_].references--}for(var a=o(n,e),r=0;r<i.length;r++){var d=c(i[r]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=a}}},659:n=>{var t={};n.exports=function(n,c){var o=function(n){if(void 0===t[n]){var c=document.querySelector(n);if(window.HTMLIFrameElement&&c instanceof window.HTMLIFrameElement)try{c=c.contentDocument.head}catch(n){c=null}t[n]=c}return t[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(c)}},540:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},56:(n,t,c)=>{n.exports=function(n){var t=c.nc;t&&n.setAttribute("nonce",t)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(c){!function(n,t,c){var o="";c.supports&&(o+="@supports (".concat(c.supports,") {")),c.media&&(o+="@media ".concat(c.media," {"));var e=void 0!==c.layer;e&&(o+="@layer".concat(c.layer.length>0?" ".concat(c.layer):""," {")),o+=c.css,e&&(o+="}"),c.media&&(o+="}"),c.supports&&(o+="}");var i=c.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,n,t.options)}(t,n,c)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},113:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function c(o){var e=t[o];if(void 0!==e)return e.exports;var i=t[o]={id:o,exports:{}};return n[o](i,i.exports,c),i.exports}c.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return c.d(t,{a:t}),t},c.d=(n,t)=>{for(var o in t)c.o(t,o)&&!c.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})},c.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),c.nc=void 0;var o=c(72),e=c.n(o),i=c(825),s=c.n(i),_=c(659),a=c.n(_),r=c(56),d=c.n(r),l=c(540),p=c.n(l),g=c(113),x=c.n(g),v=c(171),f={};f.styleTagTransform=x(),f.setAttributes=d(),f.insert=a().bind(null,"head"),f.domAPI=s(),f.insertStyleElement=p(),e()(v.A,f),v.A&&v.A.locals&&v.A.locals;var h=c(29),m={};m.styleTagTransform=x(),m.setAttributes=d(),m.insert=a().bind(null,"head"),m.domAPI=s(),m.insertStyleElement=p(),e()(h.A,m),h.A&&h.A.locals&&h.A.locals;var b=c(244),u={};u.styleTagTransform=x(),u.setAttributes=d(),u.insert=a().bind(null,"head"),u.domAPI=s(),u.insertStyleElement=p(),e()(b.A,u),b.A&&b.A.locals&&b.A.locals;var y=c(422),Q={};Q.styleTagTransform=x(),Q.setAttributes=d(),Q.insert=a().bind(null,"head"),Q.domAPI=s(),Q.insertStyleElement=p(),e()(y.A,Q),y.A&&y.A.locals&&y.A.locals;const z=document.getElementById("root");function w(n){const t=document.querySelector(".posts");if(0===n.length){const n=document.getElementById("root");t.innerHTML='\n    <div class="post">\n      لسا ما في اشي :)\n    </div>\n   ',n.innerHTML=""}else{t.innerHTML="";for(let c=n.length-1;c>=0;c--)t.innerHTML+=`\n        <div class="post" data-id="${n[c].id}">\n          <div class="post-count">#${n[c].id}</div>\n          <div class="post-year">${n[c].year}</div>\n          <div class="post-duration">${n[c].durationAr}</div>\n          <div class="post-summary">${n[c].overallAr}</div>\n        </div>\n      `;!function(n,t){let c=n.length-1;z.innerHTML=n[c]["content-ar"],t.forEach((t=>{let c=t.getAttribute("data-id");t.addEventListener("click",(()=>{z.innerHTML=n[c-1]["content-ar"],A(document.querySelectorAll(".progress-bar"))}))}))}(n,document.querySelectorAll(".post"))}}function A(n){let t=document.querySelectorAll(".progress-value");n.forEach(((n,c)=>{let o=+n.getAttribute("goal"),e=+n.getAttribute("value"),i=Math.round(100*e/o);t[c].textContent=`${i}%`,t[c].style.left=i>=6?i-6+"%":`${i}%`,n.style.width=`${i}%`}))}const k=[{id:1,durationAr:"من 1 يناير إلى 7 يناير",overallAr:"حل أسئلة برمجة",year:"2025","content-ar":'\n        <div class="content">\n          <div class="text-box">\n            <div class="quote-box">\n              <p class="post-quote">\n                <q>\n                  الإيمان بالنفس هو أساس النجاح\n                </q>\n              </p>\n            </div>\n\n            <div>\n              <p class="count">\n                الأسبوع رقم 1\n              </p>\n            </div>\n            \n            <div>\n              <p>\n                - Project Eular - بديت بحل أسئلة موقع بروجكت أولر\n              </p>\n            </div>\n            \n            <img class="small-img" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/472952301_1622255235096672_2625751805603823917_n.png?_nc_cat=103&ccb=1-7&_nc_sid=0024fc&_nc_ohc=QZbGSSJ4NiIQ7kNvgHHO2rM&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gHCYagm4L_LTHRicUepCL5JGiH0RksiR_8xMun4K7Amyg&oe=67B031D5">\n            \n            <div>\n              <p>\n                حليت 16 سؤال، من أصل 50 سؤال بدي أحلهم بهاد السنة\n              </p>\n            </div>\n            <img class="small-img" alt="project eular pic" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/473064594_1072389231308335_1461982118862557067_n.png?_nc_cat=100&ccb=1-7&_nc_sid=0024fc&_nc_ohc=Tj2DvdF893QQ7kNvgEjI3Td&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gGC9da_Labfg6QQMPCjLKZGdciU9qrJ5eWLuIgM54ehhQ&oe=67B04DE3">\n            \n            <div>\n              <p>\n                حلهم كان ممتع، هاد الأسئلة هدفها تخليك مش تبرمج كود وخلص، كمان مفروض تفكر بافضل وأسرع كود للحل\n              </p>\n            </div>\n           </div>\n        </div>\n      '},{id:2,durationAr:"من 8 يناير إلى 14 يناير",overallAr:"برمجة هاد الموقع",year:"2025","content-ar":'\n        <div class="content">\n          <div class="text-box">\n            \n            <div class="quote-box">\n              <p class="post-quote">\n                <q>\n                  لا يهم كم أنت بطيئ طالما أنك لن تتوقف\n                </q>\n              </p>\n            </div> \x3c!-- end of quote-box --\x3e\n  \n            <div>\n              <p class="count">\n                الأسبوع رقم 2\n              </p>\n            </div>\n\n            <div>\n              <p>\n                برمجة هاد الموقع\n              </p>\n            </div>\n  \n            <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/473185305_1124854055460184_5402093845210325637_n.png?_nc_cat=111&ccb=1-7&_nc_sid=0024fc&_nc_ohc=qY8_pr9yNmcQ7kNvgHoIB1b&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gHRX_Yqz7aN9-nt94x31s8qsugxDI3Kj4hvYMwwiUUbIA&oe=67ADE4AE">\n            <div>\n              <p>\n                الشكل الأولي للموقع\n              </p>\n            </div>\n  \n            <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/472719468_1103342567920564_2910878705705666284_n.png?_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=Qk9eFFVN0QoQ7kNvgHYUqZL&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gEQULOz_u3XaA_oyMX8RcG-57UQGsk0fbcxO77hZHFmDg&oe=67ADC676">\n            \n            <div>\n              <p>\n                تصميم جديد خالص، مسروق من الانستا :) بعد هيك ضفت اقتباس في كل اسبوع، وعملت كمان تعديلات على التصميم، الشكل على الجوال هيك\n              </p>\n            </div>\n  \n            <img class="small-img" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/473649156_576764025254955_5902855516072431880_n.png?_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_ohc=Doz5lsOXTyoQ7kNvgH5WXtT&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gE-w72JVBF24NQpaz2GNDrzbs-I5Ut5O53uqfDrDeaFLg&oe=67ADCCEA">\n            \n            <div>\n              <p>\n                الشكل على الشاشات الأكبر هيك\n              </p>\n              <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/473504323_1268831614398764_5613916280664234189_n.png?_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_ohc=ro7IiyvOozEQ7kNvgE6I5Ww&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gGDSkqGeFGNfeIOM4tsa1Gp8H2NXKE6qpQ4pGVYgoqUWQ&oe=67ADCDFC">\n            </div>\n  \n            <div>\n              <p>\n                اليوم 14 يناير بكون تممت 142 يوم متوالي على تعلم اللغة العبرية\n              </p>\n            </div>\n            \n            <img class="small-img" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/473098376_1107212037751648_5625160027593154118_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=0024fc&_nc_ohc=V8PlobIAZAIQ7kNvgEYf4YB&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gHx9uaHR0rZCHXXzUGhM9VdPuCx99fOOiBecrPZbfi9Qg&oe=67AF2818">\n          \n          </div> \x3c!-- End of text-box div --\x3e\n        </div> \x3c!-- End of content div --\x3e\n      '},{id:3,durationAr:"من 15 يناير إلى 21 يناير",overallAr:"todolist برنامج",year:"2025","content-ar":'\n      <div class="content">\n        <div class="text-box">\n          <div class="quote-box">\n            <p class="post-quote">\n              <q>\n                لا يوجد طريق مختصر إلى مكان يستحق الذهاب إليه\n              </q>\n            </p>\n          </div>\n\n          <div>\n            <p class="count">\n              الأسبوع رقم 3\n            </p>\n          </div>\n\n          <div>\n            <p>\n              مشروع جديد، برنامج تودو ليست\n            </p>\n          </div>\n\n          <div>\n            <p>\n              Project Tech Stack: HTML, CSS, ES6 JavaScript, Webpack\n            </p>\n          </div>\n        \n          <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/473580584_1589517811681307_6742146940368943388_n.png?_nc_cat=100&ccb=1-7&_nc_sid=0024fc&_nc_ohc=BIWQB6HWnc8Q7kNvgEKugi8&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gEQEmKkakbn6Cgy5MBhSqHnFO33_YlYvRvrbhyKbc3hBQ&oe=67B5A735">\n  \n          <div>\n            <p>\n              وهي اللي مطلوب من المشروع اعمله\n            </p>\n          </div>\n\n          <img class="small-img" src="https://instagram.fgza2-5.fna.fbcdn.net/v/t1.15752-9/473056195_1592299984983956_4773092253594252725_n.png?_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=jlOUE6LVpu8Q7kNvgFBapZ9&_nc_zt=23&_nc_ht=instagram.fgza2-5.fna&oh=03_Q7cD1gHyc3nITXaHiPmHOhL-Mut34fYr2KoQKYmvVGT7ix46mw&oe=67B59269">\n        \n          <div>\n            <p>\n              شكله الحالي، لسا بده شغل، وكمان بدي اضيف البرمجة عشان يشتغل كل المطلوب من المشروع\n            </p>\n          </div>\n\n          <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/473579497_835027215379550_7090660851038192190_n.png?_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=zX51oBF20c0Q7kNvgHfbSZt&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gGlpudKF2K4R4HGzQaPSleLMTU1D4-3GwbTgddkhe2lNg&oe=67B5A4C9">\n\n          <img class="small-img" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/473598694_627153623137677_3419785326934642955_n.png?_nc_cat=102&ccb=1-7&_nc_sid=0024fc&_nc_ohc=5oYnkaTS504Q7kNvgHMPtws&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gF2dVOd1M-wLWZyhruCuCX0ru8ufDLCvjJ0PJK-TDohMQ&oe=67B5D294">\n        \n          <div>\n            <p>\n              المشروع خلص برمجة وتصميم وجهز بعد يومين شغل\n            </p>\n          </div>\n          <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/474054834_1293871188589623_5493088919307718504_n.png?_nc_cat=101&ccb=1-7&_nc_sid=0024fc&_nc_ohc=sg-Btp3D5V4Q7kNvgG69qu5&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gGMyDZpir_le7BYbB0sYQV-fA2TzgqRMbCobxBxVVuMLQ&oe=67B6FB37">\n\n          <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/473183937_2325259884515528_1270149524624042991_n.png?_nc_cat=100&ccb=1-7&_nc_sid=0024fc&_nc_ohc=r81H_VkVGj0Q7kNvgEMdKb_&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gGqzP8qyplSd4i67rJ9lqSQmxDPcdK6tMqBGogrdyIKPQ&oe=67B7011F">\n\n          <img class="small-img" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/473821352_1158452332324931_704962921524850772_n.png?_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=VlBTXTNlmLgQ7kNvgEt5HRx&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gEU6tsijMQCTtQaSDjx4xApFxasFKKNtb78lncRF8Il3w&oe=67B72253">\n\n          <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/474061658_1032990445245368_5481644340204430928_n.png?_nc_cat=111&ccb=1-7&_nc_sid=0024fc&_nc_ohc=YrXYlRB822QQ7kNvgFesGrf&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gE3tMYEcqYTb-L0Y_2mKWpyWvo19tFvkSbqyfGOstTmdA&oe=67B71E9C">\n\n        </div> \x3c!-- end of .text-box --\x3e\n      </div> \x3c!-- end of .content --\x3e\n      '},{id:4,durationAr:"من 22 يناير إلى 28 يناير",overallAr:"تحديث: اضافة زر الاهداف وبرمجتها بالموقع",year:"2025","content-ar":'\n        <div class="content">\n          <div class="text-box">\n            <div class="quote-box">\n              <p class="post-quote">\n                <q>\n                  الأهداف الكبيرة تحتاج إلى خطوات صغيرة\n                </q>\n              </p>\n            </div>\n\n            <div>\n            <p class="count">\n              الأسبوع رقم 4\n            </p>\n          </div>\n\n          <div>\n            <p>\n              تحديث جديد على الموقع، ضفت زر خاص بالاهداف اللي راح احاولها احققها لكل سنة\n            </p>\n          </div>\n\n          <img class="small-img" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/474073667_468636946130342_2259590288086221166_n.png?_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_ohc=sIgvhDyM-iQQ7kNvgEXELsB&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gFTIrQSWWt_XRWpfLdyyzObsrPBSglVLUJIc3E2ABOzeg&oe=67BC1760">\n\n          <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/472831080_649413734416799_6033805500391952736_n.png?_nc_cat=102&ccb=1-7&_nc_sid=0024fc&_nc_ohc=sdVTDZ1M-B8Q7kNvgEqkIr-&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gEN8QuzT_GP6nsXlee-LuF3k1H_C_vBNl-nV8wkCE96EQ&oe=67BC2428">\n\n          <img class="small-img" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/472831080_1560584481258438_1001751137291446491_n.png?_nc_cat=111&ccb=1-7&_nc_sid=0024fc&_nc_ohc=Zzvb6zO9Ue0Q7kNvgGnqu1L&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gGmdnCh1xIs89YFlgI7hVo25cx0xLY5awre3cBQLpOAhg&oe=67BC0047">\n\n          <img class="small-img" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/474455709_896029809097223_2334009604449952129_n.png?_nc_cat=110&ccb=1-7&_nc_sid=0024fc&_nc_ohc=l9ha8N065F4Q7kNvgEUUUna&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gHScUQMgWBfIMF-ok3upKa5jgVLdNcOWVPllxGSZBG74w&oe=67BC0AE3">\n\n          <img class="small-img" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/474063234_583727251203817_4913141970604426519_n.png?_nc_cat=105&ccb=1-7&_nc_sid=0024fc&_nc_ohc=IheNKSaOLVsQ7kNvgHaRUoB&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gFE-sjbDWrj_dGYLu1GkUU42nJ4rBdIPIrezyg3ko-Cwg&oe=67BBFAD0">\n\n          <img class="small-img" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/475038210_1951275948614506_4459232782963396948_n.png?_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=G0i671-UBx8Q7kNvgGLryay&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gHQDs-vq6lxUepc7VALL80751_HbNgQO9YFvO0ebJVGSg&oe=67BBF1F3">\n\n          <div>\n            <p>\n              عملت تحديث على الجيت هب تعت الموقع هاد وربطتها بالكود تاع التطوير\n              <br>\n              عملت فرع خاص للموقع الجاهز بعد كل تحديث وفرع خاص للكود اللي بيطور الموقع\n              <br>\n              عموما هيك بيكون أسهل للتحديث والتطوير ولقدام بيريحني اكتر\n            </p>\n          </div>\n\n          <img class="small-img" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/474177234_1674726356792840_8521125464609773872_n.png?_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=UwyzNODTw5sQ7kNvgEkse8t&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gGySwaooYJPfhAEvKIN9GCa3JIg8l2je99v_UWb9aYf8A&oe=67BD6F40">\n\n          <img class="small-img" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/474923639_1320811169059834_2756497527334045870_n.png?_nc_cat=103&ccb=1-7&_nc_sid=0024fc&_nc_ohc=QAP2TUc_QIUQ7kNvgGUUiYH&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gGkyzjKMasQcl4QRMt8pP_-C1oLWx_W6ecelXYtTncJHA&oe=67BD7EF0">\n          \n          <div>\n            <p>\n            الطريقة القديمة لتحديث الموقع كل مرة\n            </p>\n          </div>\n\n\n          <img class="small-img" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/474771748_900036532201265_841289598436129373_n.png?_nc_cat=105&ccb=1-7&_nc_sid=0024fc&_nc_ohc=aU49hW5NoI0Q7kNvgHsN5Jr&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gGNIWU5YMBp8jCbtCqmNPyzQeFwBxRHpM6YXiEvXeJ4OQ&oe=67BD9B03">\n\n          <div>\n            <p>\n              الطريقة الجديدة للتحديث، صرت بس مرة وحدة اسوي تحديث بطريقة أسهل\n            </p>\n          </div>\n\n          <img class="small-img" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/472479605_931530099131377_129277406917368155_n.png?_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=WIWT6obSThAQ7kNvgFLcKY0&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gHfJ1hIRyJx4t3_x_JPzMwtXvSlnEKQBlkJynv7oeJ08g&oe=67BD9443">\n          \n          <div>\n            <p>\n              الطريقة الجديدة بتسمحلي اسوي سكريبت يصير يعمل تحديث لحاله بعد هيك :)) الكسل بيعمل اكتر من هيك\n            </p>\n          </div>\n\n          <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/474355084_2354022718280983_2327790046152618455_n.png?_nc_cat=101&ccb=1-7&_nc_sid=0024fc&_nc_ohc=kb6v9XZd4GQQ7kNvgEMaWUE&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gEB44gBKy65G0iUNoieLF6qEHyGDll3RbC-xEDnSs8kcw&oe=67BD971A">\n          \n          </div>\n        </div>\n      '},{id:5,durationAr:"من 29 يناير إلى 4 فبراير",overallAr:"حل كمان اسئلة، مشاريع برمجة خفيفة",year:"2025","content-ar":'\n        <div class="content">\n          <div class="text-box">\n            \n            <div class="quote-box">\n              <p class="post-quote">\n                <q>\n                    سر الحياة هو أن تبذل في سبيل غاية\n                </q>\n              </p>\n            </div>\n\n            <div>\n              <p class="count">\n                الأسبوع رقم 5\n              </p>\n            </div>\n\n            <div>\n              <p>\n                عملت مشروع على موضوع اللينكد ليست، الموضوع اخدته بالجامعة ومن زمان فاهمه عشان هيك عملته بوقت سريع\n              </p>\n            </div>\n\n            <img class="small-img" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/475738577_2640142949509400_7726497277794726485_n.png?_nc_cat=108&ccb=1-7&_nc_sid=0024fc&_nc_ohc=dCnKtuMcAyAQ7kNvgEy1y3p&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gEbCyRHX6ys1ZllM2Xm974CJ5XFjIdBcqTfSSOjlR_hGg&oe=67C2DD73">\n\n            <img class="small-img" src="https://instagram.fgza2-5.fna.fbcdn.net/v/t1.15752-9/475444685_1589260115047779_179092329602943634_n.png?_nc_cat=100&ccb=1-7&_nc_sid=0024fc&_nc_ohc=AIQxtc44fTwQ7kNvgFkEdOF&_nc_zt=23&_nc_ht=instagram.fgza2-5.fna&oh=03_Q7cD1gExiWXmhvAotm83EmP8kJ4a-dzhQczdTx24v3S5ZOIMjQ&oe=67C2F566">\n\n            <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/474971775_1120093293209453_1204208754708328375_n.png?_nc_cat=100&ccb=1-7&_nc_sid=0024fc&_nc_ohc=JQrKvNa4OBAQ7kNvgF3kBAp&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gG6GbfVJIrFY6N4KJH9zhPz-xdlYVsoQSqkc4TM0kJtfQ&oe=67C2D8CF">\n\n            <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/474749504_1172393884511507_1568729987438083929_n.png?_nc_cat=103&ccb=1-7&_nc_sid=0024fc&_nc_ohc=LgZwejVZiCYQ7kNvgFai_CP&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gEPTVcYH1Ar-y4nRCm0nnyluBuX4rFwNRIT7il34H4Lvw&oe=67C2D576">\n\n            <div>\n              <p>\n                بعدين تعلمت كيف اسوي اختبارات على الكود، الاختبارات بتصير اوتوماتيك عشان اسرع، الاختبارات للكود بتخليني دايما متاكد انه اي تغيير بيصير مش هيعمل مشاكل\n              </p>\n            </div>\n\n            <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/474879084_620635786996365_6776726646353991806_n.png?_nc_cat=103&ccb=1-7&_nc_sid=0024fc&_nc_ohc=EJLwruqNLv4Q7kNvgGAiK5e&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gEFNcyX20BdoIix9wP0RLp1y3OiUNimmlNuilKkplB-dA&oe=67C44A5C">\n\n            <div>\n              <p>\n                حليت الأسئلة رقم 17 18 19 20 من بروجت اولر\n              </p>\n            </div>\n\n            <div><p>17</p></div>\n\n            <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/472321571_951310346709449_4034236862477589989_n.png?_nc_cat=103&ccb=1-7&_nc_sid=0024fc&_nc_ohc=EeM8R5yRCwkQ7kNvgEgk84S&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gG_Ib4KCWXs5MQWiOjD91W1M3xCXS7wVUTRYh_y5PB3zQ&oe=67C2F3D9">\n\n            <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/475549502_3067438160062356_4871348150315234470_n.png?_nc_cat=101&ccb=1-7&_nc_sid=0024fc&_nc_ohc=y2N-HTrRZ98Q7kNvgHn07Pd&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gGKkfcwkoxThiOvT5ePEDUHCJCNzkdeJ_xxrFQnBfv-nA&oe=67C4088F">\n\n            <div>\n              <p>\n                18\n              </p>\n            </div>\n            \n            <img class="small-img" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/474863896_4041063419464484_4785460043116615011_n.png?_nc_cat=111&ccb=1-7&_nc_sid=0024fc&_nc_ohc=VK43EYhTebgQ7kNvgHXCmps&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gG2YJ76dPEbgyrgwOKzKVhsH9EfZlDRrZ-sI2_GwhlA-A&oe=67C6E650">\n\n            <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/475834331_1007252274549438_1087318500629231050_n.png?_nc_cat=101&ccb=1-7&_nc_sid=0024fc&_nc_ohc=9ZNELNeOt_YQ7kNvgHTwGjS&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gFsF_rJ6NKpPP5fQCGAofybimLL3sXPfisImNtXl5Qf_w&oe=67C6BD33">\n            \n            <div>\n              <p>\n                19\n              </p>\n            </div>\n            \n            <img src="https://instagram.fgza2-5.fna.fbcdn.net/v/t1.15752-9/475510754_1355403605454726_5093542029576569861_n.png?_nc_cat=110&ccb=1-7&_nc_sid=0024fc&_nc_ohc=t0wxfb1-0xkQ7kNvgFIWDjB&_nc_zt=23&_nc_ht=instagram.fgza2-5.fna&oh=03_Q7cD1gFAZqyf6w6w6sTOuyT7Ijo3Y2kisIdYxYXMtn99fF6lfg&oe=67C6E856">\n\n            <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/474971213_8538434332924135_8206121960522336755_n.png?_nc_cat=111&ccb=1-7&_nc_sid=0024fc&_nc_ohc=Zdq3Yjy0Tc0Q7kNvgHf7oo5&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gHOCbFbSYzPj_KK6rR2Lks1EZda74ChMmrQImn1ku5DqA&oe=67C6E4A6">\n          \n            <div>\n              <p>\n                20\n              </p>\n            </div>\n\n            <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/475403879_1146500663593196_7318253083240476571_n.png?_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=4j7R4JbWgecQ7kNvgFhZg88&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gFr19tuEj0uPHThVMct06aeY8ijL_AWsm11gc1TaKnDSA&oe=67C95FD8">\n\n            <img class="small-img" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/475818046_4023093704685674_8378444377602333974_n.png?_nc_cat=104&ccb=1-7&_nc_sid=0024fc&_nc_ohc=vwIAeA9tsagQ7kNvgGRg8vY&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gGrfIVzo4p_BvBhEuV2b2vymNXZVGx-NMbfLKzHiRnC9w&oe=67C93645">\n\n          </div>\n        </div>\n      '},{id:6,durationAr:"من 5 فبراير إلى 11 فبراير",overallAr:"الأسبوع الحالي",year:"2025","content-ar":'\n        <div class="content">\n          <div class="text-box">\n            \n            <div class="quote-box">\n              <p class="post-quote">\n                <q>\n                    الأمر يستحق المحاولة\n                </q>\n              </p>\n            </div>\n\n            <div>\n              <p>\n                بطاريات\n              </p>\n            </div>\n            <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/476109362_1895309024543512_7132614035407411906_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_ohc=--qvUtYtfSkQ7kNvgHr2AQi&_nc_oc=Adj-ucZEv-VY-fslnbo9XFz6qTIz2D38cCezbkeMHPt3YigVcG87yA9qxmJvwXHJQMKsfGKVC1Zifwvpgvh_jGpV&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gGPk9da1QsFRcFgYtr31XGvpGkfidT3-TeUdBdcmk1OTA&oe=67D3F43B">\n            \n            <div>\n              <p>\n                مشروع عالسريع هيك الفكرة تعته\n              </p>\n            </div>\n            <img src="https://instagram.fgza2-5.fna.fbcdn.net/v/t1.15752-9/476575379_3399566283528973_8975973926137574907_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=0024fc&_nc_ohc=Wz4Fhof2GXMQ7kNvgGCHJe3&_nc_oc=AdiEWTelW4_-eGj6nAYuIKQUTbSAdWPKI6gw5cGfytiXGti6Pu84qDdMQ6Q5pqb52Vs&_nc_zt=23&_nc_ht=instagram.fgza2-5.fna&oh=03_Q7cD1gFc9PxRL-1_d2NpkChtL_YfPmX-YZMAu4dUi78pwJW9sA&oe=67D3F076">\n          </div>\n        </div>\n      '}],D=[],E=[{id:1,durationAr:"أهداف السنة",overallAr:"تعلم برمجة مواقع فل ستاك، قراءة كتب جديدة",year:"2025","content-ar":'\n        <div class="goals">\n        <div class="goal">\n          <p>Become a Full-Stack Web Developer</p>\n          <div class="loading">\n            <div class="progress-value"></div>\n            <div class="progress-bar" goal="600" value="174"></div>\n          </div>\n        </div>\n        <div class="goal">\n          <p>Solve 50 Project Euler Problems</p>\n          <div class="loading">\n            <div class="progress-value"></div>\n            <div class="progress-bar" goal="50" value="20"></div>\n          </div>\n        </div>\n        <div class="goal">\n          <p>Read 10 Books</p>\n          <div class="loading">\n            <div class="progress-value"></div>\n            <div class="progress-bar" goal="10" value="2"></div>\n          </div>\n        </div>\n        <div class="goal">\n          <p>Duolingo 500 Days Streak</p>\n          <div class="loading">\n            <div class="progress-value"></div>\n            <div class="progress-bar" goal="500" value="165"></div>\n          </div>\n        </div>\n      '}],N=document.querySelector("button.load-weeks"),q=document.querySelector("button.load-blogs"),B=document.querySelector("button.load-goals");N.addEventListener("click",(()=>{w(k)})),q.addEventListener("click",(()=>{w(D)})),B.addEventListener("click",(()=>{w(E),A(document.querySelectorAll(".progress-bar"))})),w(k)})();