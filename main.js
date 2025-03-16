(()=>{"use strict";var t={171:(t,e,n)=>{n.d(e,{A:()=>r});var a=n(601),o=n.n(a),i=n(314),s=n.n(i)()(o());s.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap);"]),s.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap);"]),s.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap);"]),s.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@100;200;300;400;500;600;700&display=swap);"]),s.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400;1,700&display=swap);"]),s.push([t.id,':root {\n  --background-color: #0e1217;\n  --story-background-color: #1c1f26;\n  --font-color: #e3e3e3;\n  --story-border-color: #424857;\n  --story-count-bg-color: #676c7a;\n  --paragraphs-font-color: #d4d4d4;\n  --nav-btn-hover-color: var(--background-color);\n  --root-bg-color: var(--background-color);\n  --root-font-color: var(--font-color);\n  --logo-en-font: "Dancing Script", sans-serif, system-ui;\n  --arabic-font: "IBM Plex Sans Arabic", sans-serif, system-ui;\n  --english-font: Roboto, sans-serif, system-ui;\n  --post-count-font: Montserrat, sans-serif, system-ui;\n  --quote-font: Amiri, sans-serif, system-ui;\n}\nbody {\n  background-color: var(--root-bg-color);\n  overflow-x: hidden;\n}\nbody * {\n  font-family: var(--arabic-font), sans-serif;\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbutton {\n  background-color: transparent;\n  border: none;\n  transition: all 0.3s;\n  font-weight: 600;\n  padding: 5px 10px;\n  font-size: 16px;\n  color: var(--font-color);\n}\n\nbutton:hover {\n  cursor: pointer;\n  font-size: 16px;\n  font-weight: 600;\n  color: #fff;\n}\nnav {\n  background-color: var(--background-color);\n  padding: 10px 30px;\n  color: var(--font-color);\n}\nnav .logo {\n  font-size: 24px;\n  font-weight: bold;\n}\n.logo {\n  color: var(font-color);\n  font-family: var(--logo-en-font) !important;\n  font-weight: bolder;\n  font-size: 30px;\n}\nnav ul {\n  list-style-type: none;\n}\n#posts {\n  padding: 30px;\n  display: flex;\n  flex-direction: row-reverse;\n  gap: 20px;\n  background-color: var(--nav-btn-hover-color);\n  overflow-x: auto;\n  border-bottom: 1px solid var(--story-border-color);\n  width: 100%;\n  text-align: right;\n}\n.post {\n  color: var(--font-color);\n  border: 1px solid var(--story-border-color);\n  border-radius: 8px;\n  transition: all 0.3s;\n  position: relative;\n  padding: 10px 20px;\n  width: 240px;\n  min-width: 240px;\n  height: 90px;\n  max-height: 90px;\n  background-color: var(--story-background-color);\n}\n.post:hover {\n  background-color: var(--root-bg-color);\n  cursor: pointer;\n}\n.post .post-year {\n  position: absolute;\n  top: -15px;\n  left: 10px;\n  background: linear-gradient(to top, #f7000c, #ff6068);\n  padding: 2px 10px;\n  font-size: 16px;\n  font-weight: bold;\n  transform: skewX(-5deg);\n  border-radius: 7px;\n  font-family: Roboto !important;\n}\n.post .post-count {\n  position: absolute;\n  bottom: 5px;\n  left: 5px;\n  transform: skewX(-5deg);\n  background-color: transparent;\n  color: var(--font-color);\n  font-family: var(--post-count-font) !important;\n  font-weight: bolder;\n  font-style: italic;\n  padding: 2px 5px;\n  font-size: 16px;\n}\n.post .post-duration {\n  font-weight: bold;\n  color: var(--font-color);\n  font-size: 18px;\n}\n.post .post-summary {\n  font-weight: thin;\n  font-size: 12px;\n}\n#root {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: var(--root-font-color);\n  margin-bottom: 50px;\n  padding-top: 50px;\n  position: relative;\n}\n\n#root section {\n  width: 100%;\n  padding: 20px 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px 30px;\n  font-size: 18px;\n  text-align: center;\n  border-top: 1px solid var(--story-border-color);\n}\n\n#root section:first-child {\n  border-top: none;\n  padding: 0 !important;\n  padding-bottom: 20px !important;\n  padding-top: 0 !important;\n}\n\n#root section * {\n  padding: 5px 0 !important;\n}\n\n#root p {\n  /* font-weight: 450; */\n  margin-top: 10px;\n  margin-bottom: 30px;\n  color: var(--paragraphs-font-color);\n}\n#root img {\n  max-width: 100%;\n  margin: 30px 0 !important;\n  max-height: calc(100dvh - 100px);\n  width: auto;\n  object-fit: contain;\n}\n\n.small-image {\n  margin-top: 10px;\n}\n\nimg.long-image {\n  max-height: unset !important;\n  height: unset !important;\n  width: 100%;\n  max-width: 1000px;\n}\n\np.count {\n  font-weight: 240;\n  font-size: 12px !important;\n  font-style: italic;\n  color: var(--font-color);\n  text-align: center;\n}\n.goals {\n  padding: 20px 0;\n  color: var(--font-color);\n  width: min(80%, 600px);\n  background-color: var(--background-color);\n  display: flex;\n  flex-direction: column;\n}\n.goal {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  margin: 27px 0;\n}\n.loading {\n  width: 100%;\n  position: relative;\n  height: 24px;\n  background-color: var(--story-count-bg-color);\n  padding: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  border-radius: 11px;\n  margin: 3px 0;\n  box-shadow: 0 -2px 6px rgba(0, 0, 0, 0.65) inset;\n}\n.progress-bar {\n  height: 100%;\n  background-color: var(--font-color);\n  border-radius: 8px;\n  box-shadow: 0 -3px 8px rgba(0, 0, 0, 0.45) inset;\n  filter: drop-shadow(0 0 10px var(--story-count-bg-color));\n}\n.progress-value {\n  position: absolute;\n  top: 25px;\n  font-weight: 450;\n}\n.goal > p {\n  margin: 0 !important;\n  width: 100%;\n  text-align: center;\n}\n\n.goal .progress-value {\n  font-family: var(--post-count-font) !important;\n  font-style: italic !important;\n  font-weight: bold;\n}\n\na#back-to-top {\n  text-decoration: none;\n  color: var(--font-color);\n  position: absolute;\n  bottom: 20px;\n  right: 20px;\n  text-decoration: underline;\n}\n\nimg.lazy {\n  opacity: 0;\n  transition: opacity 2s;\n}\n\nimg.loaded {\n  opacity: 1;\n}\n\niframe {\n  pointer-events: none;\n  cursor: none;\n  width: 100%;\n  height: auto;\n  aspect-ratio: 16 / 9;\n}\n\np, h1, h2, h3, h4, h5, h6 {\n  text-wrap: pretty;\n}',""]);const r=s},29:(t,e,n)=>{n.d(e,{A:()=>r});var a=n(601),o=n.n(a),i=n(314),s=n.n(i)()(o());s.push([t.id,"@media (min-width: 1000px) {\n  .container {\n    display: flex;\n    flex-direction: row-reverse;\n  }\n/* \n  * {\n    border: 1px dashed red;\n  } */\n  .btn {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 5px;\n    padding: 10px;\n  }\n  nav .nav-items img {\n    width: 30px;\n    height: 30px;\n  }\n  nav {\n    width: 250px;\n    min-width: 200px;\n    max-width: 200px;\n    text-align: right;\n    border-left: 1px solid var(--story-border-color);\n    min-height: 100dvh;\n    position: fixed;\n    right: 0;\n  }\n  main {\n    margin-right: 200px;\n    width: calc(100dvw - 200px);\n  }\n  nav .logo {\n    position: absolute;\n  }\n  nav .nav-items {\n    position: absolute;\n    right: 10px;\n    top: 100px;\n  }\n  nav ul li span {\n    margin: 0 20px;\n  }\n  nav ul {\n    display: flex;\n    gap: 20px;\n    flex-direction: column;\n  }\n  .hidden-l {\n    display: none;\n  }\n  #root {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n  }\n  #root {\n    font-size: 18px;\n  }\n  #root p {\n    max-width: 800px;\n  }\n  #root img{\n    margin: 20px 0;\n    width: 100%;\n    max-width: 1000px;\n  }\n  #root img.small-image {\n    width: min(80%, 650px);\n  }\n  #root img.extra-small-image {\n    width: min(60%, 450px);\n  }\n  iframe {\n    width: 100%;\n    max-width: 720px;\n  }\n}",""]);const r=s},244:(t,e,n)=>{n.d(e,{A:()=>r});var a=n(601),o=n.n(a),i=n(314),s=n.n(i)()(o());s.push([t.id,"@media (max-width: 1000px) {\n  .logo {\n    position: absolute;\n    top: 0;\n    left: 0;\n    border-bottom: 1px solid var(--story-border-color);\n    width: 100%;\n    padding: 10px 20px;\n    text-align: center;\n    color: var(--font-color);\n  }\n  .hidden-m {\n    display: none;\n  }\n  nav {\n    position: fixed;\n    bottom: -1px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    min-height: 60px;\n    height: 60px;\n    max-height: 60px;\n    border-top: 1px solid var(--story-border-color);\n    z-index: 999;\n  }\n  nav ul {\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    flex-direction: row-reverse;\n  }\n  nav .nav-items {\n    width: 100%;\n    justify-content: space-around;\n    align-items: center;\n  }\n  nav .nav-items img {\n    width: 25px;\n    height: 25px;\n  }\n  nav {\n    flex-direction: row-reverse;\n    text-align: right;\n  }\n  body.Arabic nav ul {\n    flex-direction: row-reverse;\n  }\n  #posts {\n    margin-top: 80px;\n  }\n  #posts .post {\n    text-align: right;\n  }\n  #root {\n    width: 100dvw;\n    padding: 20px 0 !important;\n    padding-top: 50px !important;\n  }\n\n  #root section {\n    width: 100%;\n    max-width: 100%;\n    padding: 20px 0 !important;\n  }\n\n  #root section :is(:not(img)) {\n    padding: 0 10px !important;\n  }\n\n  h1,h2,h3,h4,h5,h6 {\n    padding: 10px;\n  }\n\n  #root img.long-image {\n    width: 100% !important;\n  }\n  main {\n    width: 100%;\n  }\n  h1 {\n    font-size: 1.4em !important;\n  }\n  h2 {\n      font-size: 1.2em !important;\n  }\n  h3 {\n      font-size: 1em !important;\n  }\n  h4 {\n      font-size: 0.8em !important;\n  }\n  h5 {\n    font-size: 0.6em !important;\n  }\n  h6 {\n    font-size: 0.4em !important;\n  }\n  p {\n    font-size: 16px;\n    line-height: 1.75;\n  }\n}",""]);const r=s},422:(t,e,n)=>{n.d(e,{A:()=>r});var a=n(601),o=n.n(a),i=n(314),s=n.n(i)()(o());s.push([t.id,"::-webkit-scrollbar {\n  width: 10px; \n  height: 10px; \n}\n::-webkit-scrollbar-track {\n  background: var(--background-color);\n}\n::-webkit-scrollbar-thumb {\n  background: var(--story-border-color);\n  border-radius: 12px;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: var(--story-count-bg-color); \n}\n::-webkit-scrollbar-corner {\n  background: #f1f1f1;\n}",""]);const r=s},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",a=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),a&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),a&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,a,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(a)for(var r=0;r<this.length;r++){var g=this[r][0];null!=g&&(s[g]=!0)}for(var m=0;m<t.length;m++){var p=[].concat(t[m]);a&&s[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),n&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=n):p[2]=n),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),e.push(p))}},e}},601:t=>{t.exports=function(t){return t[1]}},72:t=>{var e=[];function n(t){for(var n=-1,a=0;a<e.length;a++)if(e[a].identifier===t){n=a;break}return n}function a(t,a){for(var i={},s=[],r=0;r<t.length;r++){var g=t[r],m=a.base?g[0]+a.base:g[0],p=i[m]||0,c="".concat(m," ").concat(p);i[m]=p+1;var l=n(c),d={css:g[1],media:g[2],sourceMap:g[3],supports:g[4],layer:g[5]};if(-1!==l)e[l].references++,e[l].updater(d);else{var u=o(d,a);a.byIndex=r,e.splice(r,0,{identifier:c,updater:u,references:1})}s.push(c)}return s}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var i=a(t=t||[],o=o||{});return function(t){t=t||[];for(var s=0;s<i.length;s++){var r=n(i[s]);e[r].references--}for(var g=a(t,o),m=0;m<i.length;m++){var p=n(i[m]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}i=g}}},659:t=>{var e={};t.exports=function(t,n){var a=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,o&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(a,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},209:t=>{t.exports=JSON.parse('[{"id":1,"duration":"أهدافي لعالم 2025","summary":"مبرمج مواقع فل ستاك","year":"2025","type":"goals","goals":[{"goal":"أنهي كورس الفل ستاك","max":600,"current":300},{"goal":"أنهي المرحلة الأولى من برجكت أولر","max":50,"current":25},{"goal":"أوصل ل 400 يوم متواصل على تعلم العبري","max":400,"current":199},{"goal":"أقرأ على الأقل 10 كتب","max":10,"current":3}]}]')},264:t=>{t.exports=JSON.parse('[{"id":1,"duration":"من 1 يناير إلى 7 يناير","summary":"حل أسئلة برمجة","year":"2025","type":"weeks","events":[{"event":[{"text":" بديت بحل أسئلة موقع بروجكت أولر","tag":"h2"}],"images":[{"src":"https://i.imgur.com/PK0BXVx.jpeg","className":"small-image"}]},{"event":[{"text":" حليت 16 سؤال من أصل 50 مقرر أحلهم خلال السنة","tag":"h4"}],"images":[{"src":"https://i.imgur.com/C3OM08R.jpeg","className":"small-image"}]},{"event":[{"text":"التحدي مش بس بكتابة الكود، الفكرة إنك تدور على الطريقة الأفضل والأسرع للحل، مش مجرد إنك تطلع النتيجة وخلاص. كل سؤال تجربة جديدة بتوسع طريقة التفكير وبتخليك تفكر خارج الصندوق","tag":"p"}]}]},{"id":2,"duration":"من 8 يناير إلى 14 يناير","summary":"برمجة هاد الموقع","year":"2025","type":"weeks","events":[{"event":[{"text":" برمجة هاد الموقع 💻🎨","tag":"h1"}],"images":[{"src":"https://i.imgur.com/a4QOAMo.jpeg","className":"small-image"}]},{"event":[{"text":"💡 التصميم الأولي: كان بسيط","tag":"h3"}],"images":[{"src":"https://i.imgur.com/FKy14XK.jpeg"}]},{"event":[{"text":"بعدين قررت أسرق شوية إلهام من الإنستا 🙂","tag":"h3"},{"text":"ضفت اقتباس جديد كل أسبوع، وعملت تعديلات على التصميم بحيث يكون متجاوب أكتر","tag":"p"},{"text":" 📱 الشكل على الجوال","tag":"h3"}],"images":[{"src":"https://i.imgur.com/irrN5sh.jpeg","className":"small-image"}]},{"event":[{"text":"الشكل على الشاشات الأكبر","tag":"h3"}],"images":[{"src":"https://i.imgur.com/mFnu2wz.jpeg"}]},{"event":[{"text":"🔥 اليوم 14 يناير: كملت 142 يوم متواصل في تعلم اللغة العبرية ","tag":"p"}],"images":[{"src":"https://i.imgur.com/nLRIDzc.jpeg","className":"small-image"}]}]},{"id":3,"duration":"من 15 يناير إلى 21 يناير","summary":"todolist برنامج","year":"2025","type":"weeks","events":[{"event":[{"text":"To-Do List مشروع جديد: تطبيق","tag":"h1"},{"text":"التقنيات المستخدمة 📌","tag":"h2"},{"text":"HTML 5, CSS 3, ES6 JavaScript, Webpack","tag":"h4"}],"images":[{"src":"https://i.imgur.com/tJ62dMa.png"},{"src":"https://i.imgur.com/w4iAX8i.png"},{"src":"https://i.imgur.com/49FbM1g.png"}]},{"event":[{"text":"✍️ الشكل الحالي للمشروع:  لسا بده شوية شغل وتحسينات","tag":"p"},{"text":"التحديثات الجاية: إضافة البرمجة عشان يشتغل كل المطلوب من المشروع 🛠","tag":"p"}],"images":[{"src":"https://i.imgur.com/DpJH25o.png"},{"src":"https://i.imgur.com/QG2bSCf.png","className":"small-image"}]},{"event":[{"text":"⏳ بعد يومين شغل، التصميم والبرمجة صاروا جاهزين","tag":"h3"}],"images":[{"src":"https://i.imgur.com/kBNLBC3.png"},{"src":"https://i.imgur.com/lAti3Mb.png","className":"small-image"},{"src":"https://i.imgur.com/GOzoRfv.png"},{"src":"https://i.imgur.com/P14lZeI.png"}]}]},{"id":4,"duration":"من 22 يناير إلى 28 يناير","summary":"تحديث جديد على الموقع – إضافة أهداف سنوية","year":"2025","type":"weeks","events":[{"event":[{"text":"تحديث جديد على الموقع 🆕","tag":"h1"},{"text":"🎯 إضافة زر خاص بالأهداف لكل سنة، عشان أوثق الإنجازات وأظلني متابع التطور 📌","tag":"h3"}],"images":[{"src":"https://i.imgur.com/tjP7X6Q.png","className":"small-image"},{"src":"https://i.imgur.com/LqwR8zt.png"},{"src":"https://i.imgur.com/RxEEsQp.jpeg","className":"small-image"},{"src":"https://i.imgur.com/IkzqJcg.png","className":"small-image"},{"src":"https://i.imgur.com/t4JAx08.png","className":"small-image"}]},{"event":[{"text":"GitHub تحديثات على 🛠","tag":"h1"},{"text":" ربط  جيت هب بالكود الخاص بالتطوير عشان كل تحديث يكون سلس","tag":"p"},{"text":"🔀 إنشاء فرعين منفصلين","tag":"h1"},{"text":"فرع للموقع الجاهز بعد كل تحديث","tag":"p"},{"text":"فرع خاص بالكود اللي بيطور الموقع","tag":"p"}],"images":[{"src":"https://i.imgur.com/lQigA2X.jpeg","className":"small-image"},{"src":"https://i.imgur.com/2hLI1jw.png","className":"small-image"}]},{"event":[{"text":"🔄 الطريقة القديمة: كل مرة كنت لازم أعدل التحديثات يدويا","tag":"h2"}],"images":[{"src":"https://i.imgur.com/qnIQgph.png","className":"small-image"}]},{"event":[{"text":"الطريقة الجديدة: تحديثات أسرع وأسهل، مرة واحدة وكل شيء يصير تلقائي","tag":"h2"}],"images":[{"src":"https://i.imgur.com/bDGJPVb.png","className":"small-image"}]},{"event":[{"text":"😎 النتيجة؟ الكود صار يسمح لي أعمل سكريبت يحدث الموقع لحاله بعد هيك! الكسل أحيانا بيخليك تبدع","tag":"p"}],"images":[{"src":"https://i.imgur.com/nLSJJ1e.png"}]}]},{"id":5,"duration":"من 29 يناير إلى 4 فبراير","summary":"حل كمان اسئلة، مشاريع برمجة خفيفة","type":"weeks","year":"2025","events":[{"event":[{"text":"🚀 Linked List : مشروع جديد 📌","tag":"h1"},{"text":"⚡ لينكد ليست؟ موضوع أخدته بالجامعة وفاهمه منيح من زمان، عشان هيك خلصته بسرعة","tag":"p"}],"images":[{"src":"https://i.imgur.com/zdpT84t.png","className":"small-image"},{"src":"https://i.imgur.com/XixYDKs.png","className":"small-image"},{"src":"https://i.imgur.com/Ef9w84c.png"},{"src":"https://i.imgur.com/ka2g2Vc.png"}]},{"event":[{"text":"✅ خطوة جديدة: تعلمت كيف أسوي اختبارات تلقائية للكود 🛠","tag":"h3"},{"text":"الهدف؟ كل ما أعدل على الكود أكون متأكد إنه التغييرات ما تخرب أي شيء","tag":"p"}],"images":[{"src":"https://i.imgur.com/W9siGTo.png"}]},{"event":[{"text":"Progress on Project Euler 🤓","tag":"h1"},{"text":"حليت الأسئلة 17، 18، 19، 20","tag":"p"}]}]},{"id":6,"duration":"من 5 فبراير إلى 11 فبراير","summary":"بطاريات، مشروع حساب سريع","type":"weeks","year":2025,"events":[{"event":[{"text":"اتسليت بالشغل على بطاريات ليثيوم كانو عندي من كم سنة وجبتهم معي من غزة","tag":"p"}],"images":[{"src":"https://i.imgur.com/BH9t49n.jpeg","className":"long-image"}]},{"event":[{"text":"وعملت مشروع حساب، بس لسا مش عارف كيف اطبقه باشي مفيد، لسا لقدام في براسي فكرة بحاول اطبقها منه","tag":"p"}],"images":[{"src":"https://i.imgur.com/s88Lbhy.jpeg","className":"long-image"}]}]},{"id":7,"duration":"من 12 فبراير إلى 18 فبراير","summary":"مشوار غزة","year":"2025","type":"weeks","events":[{"event":[{"text":"مشوار غزة 🚶🏻‍♂️","tag":"h1"},{"text":"الهدف: زيارة اختي ايمان وتفقد الوضع","tag":"p"},{"text":"بداية التوثيق كانت الساعة ٤:١٠ من شرق النصيرات، شارع صلاح الدين","tag":"p"}],"images":[{"src":"https://i.imgur.com/X2ZjXUu.jpeg","className":"small-image"},{"src":"https://i.imgur.com/m8VLAmF.jpeg"}]},{"event":[{"text":"مشينا لحد ما وصلنا الوادي، وكانت طوابير السيارات ممتدة من هناك لحد نتساريم","tag":"p"}],"images":[{"src":"https://i.imgur.com/sTXQdYe.jpeg","className":"small-image"}]},{"event":[{"text":"قررنا نكمل مشي، الوقت المتوقع للوصول لحد شقة إيمان، أختي، كان ساعتين حسب البرنامج","tag":"p"}],"images":[{"src":"https://i.imgur.com/VC9kcA9.jpeg","className":"small-image"}]},{"event":[{"text":"كنا متحيرين في البداية، هل نمشي مع طريق السيارات ولا نمشي عدل على شارع صلاح الدين؟ بالأخير قررنا نمشي بالطريق المباشر","tag":"p"},{"text":"التطبيق كان يبين الطريق أحمر فكنا مترددين شوي 🔴","tag":"h3"}],"images":[{"src":"https://i.imgur.com/HYmkDSY.jpeg","className":"small-image"},{"src":"https://i.imgur.com/20LxI4E.jpeg","className":"small-image"},{"src":"https://i.imgur.com/AD2KBFW.jpeg","className":"small-image"},{"src":"https://i.imgur.com/pDtNLP6.jpeg","className":"small-image"},{"src":"https://i.imgur.com/rdTULeW.jpeg","className":"small-image"}]},{"event":[{"text":"دخلنا المنطقة الحمرا، وضلينا ماشيين،  الطريق كان متدمر ومليان رمل، وما كان في ولا جزء من الأسفلت","tag":"p"},{"text":"هاي صور عن جنب الطريق، على موازاة الممر، عند تفتيش السيارات قبل دخولها للشمال","tag":"p"}],"images":[{"src":"https://i.imgur.com/fixdzRv.jpeg"},{"src":"https://i.imgur.com/nPzLUFn.jpeg"}]},{"event":[{"text":"ضل للطريق مسافة ساعة ونص مشي","tag":"h3"}],"images":[{"src":"https://i.imgur.com/BclUKTc.jpeg","className":"small-image"}]},{"event":[{"text":"الشمس كانت بتقرب تغرب","tag":"h4"}],"images":[{"src":"https://i.imgur.com/ZZGxpk2.jpeg"}]},{"event":[{"text":"طلعنا من المنطقة الحمرا وكان باقي حوالي ساعة مشي للوصول","tag":"p"}],"images":[{"src":"https://i.imgur.com/wygTMFc.jpeg","className":"small-image"}]},{"event":[{"text":"وصلنا دوار شارع رقم 10 في الزيتون، أخذنا بريك بسيط هناك، وبعديها أذن المغرب","tag":"p"}],"images":[{"src":"https://i.imgur.com/yBPuQLr.jpeg"},{"src":"https://i.imgur.com/tqpdTD7.jpeg"}]},{"event":[{"text":" دخلنا الزيتون، وبطريقنا للساحة، ومن هناك للجندي","tag":"p"}],"images":[{"src":"https://i.imgur.com/pN7nxZA.jpeg"},{"src":"https://i.imgur.com/gGq2s8b.jpeg"},{"src":"https://i.imgur.com/3gnHvkO.jpeg"},{"src":"https://i.imgur.com/84hpJ2F.jpeg"},{"src":"https://i.imgur.com/4oY1dKl.jpeg","className":"small-image"}]},{"event":[{"text":"وصلنا الساحة، لقينا كاظم فاتح والحياة منتعشة بالمنطقة","tag":"p"},{"text":"مش ضايل غير نص ساعة مشي عشان نوصل الشقة","tag":"p"}],"images":[{"src":"https://i.imgur.com/mVPbp5W.jpeg"}]},{"event":[{"text":"وصلنا عال7 العشا، اكلنا لقمة وارتحنا الليلة","tag":"p"},{"text":"لما صحينا افطرنا وبلشنا شغل بالشقة، رتبناها كلها وخلصنا منها العصر","tag":"p"},{"text":"بعد هيك روحنا على الدير","tag":"p"}],"images":[{"src":"https://i.imgur.com/YsaEeUF.jpeg"},{"src":"https://i.imgur.com/dSly3x0.jpeg"}]},{"event":[{"text":"لحقت تعملت اشي بهالاسبوع","tag":"h2"}],"images":[{"src":"https://i.imgur.com/jQO0hM4.jpeg"}]},{"event":[{"text":"🖼️✨ سويت سكريبت بيخلي تنزيل الأسابيع أسهل، هو بيكتب الكود لحاله، وأنا بس بدخل الكلام ورابط الصور","tag":"p"}],"images":[{"src":"https://i.imgur.com/S4ZbZT8.png","className":"small-image"},{"src":"https://i.imgur.com/fRHY5OE.png","className":"small-image"},{"src":"https://i.imgur.com/AKUl3Rk.png","className":"small-image"}]}]},{"id":8,"duration":"من 19 فبراير إلى 25 فبراير","summary":"خلصت كورس جافاسكريبت","type":"weeks","year":"2025","events":[{"event":[{"text":"🎉 إنجاز جديد","tag":"h1"},{"text":"✅ خلصت كورس الجافاسكريبت 💻🔥","tag":"p"}],"images":[{"src":"https://i.imgur.com/0mzRSaB.png","className":"small-image"}]},{"event":[{"text":"آخر مشروع كان  سويته بـ 3 ساعات لا كان سهل ولا كان صعب","tag":"p"},{"text":"Battleships ⚔️","tag":"h2"}],"images":[{"src":"https://i.imgur.com/vfLWKqB.png","className":"small-image"},{"src":"https://i.imgur.com/fwby6Tb.jpeg","className":"extra-small-image"},{"src":"https://i.imgur.com/G3sVAqb.png","className":"small-image"}]},{"event":[{"text":"✅ حليت سؤال رقم 22 من بروجكت أولر","tag":"h2"}],"images":[{"src":"https://i.imgur.com/zgKEirM.png","className":"small-image"}]},{"event":[{"text":"المطلوب؟","tag":"h2"},{"text":"عندك ملف نصي فيه آلاف الأسماء، مكتوبة بين علامات اقتباس ومفصولة بفواصل","tag":"p"},{"text":"بدك ترتب الأسماء أبجديا","tag":"p"},{"text":"لكل اسم، بتحسب السكور الخاص فيه، وهو عبارة عن مجموع القيم العددية لأحرف الاسم","tag":"p"},{"text":" A = 1, B = 2, ..., Z = 26","tag":"h4"},{"text":"ضرب المجموع بترتيب الاسم في القائمة بعد الفرز","tag":"p"},{"text":"مثال عملي 🔹","tag":"h2"},{"text":"\\"COLIN\\", \\"ALEX\\", \\"BOB\\"","tag":"p"},{"text":"بعد الترتيب","tag":"p"},{"text":"[ALEX, BOB, COLIN]","tag":"p"},{"text":"ALEX, 1","tag":"h3"},{"text":"1 x (1 + 12 + 5 + 24) = 42","tag":"h4"},{"text":"BOB, 2","tag":"h3"},{"text":"2 x (2 + 15 + 2) = 38","tag":"h4"},{"text":"COLIN, 3","tag":"h3"},{"text":"3 x (3 + 15 + 12 + 9 + 14) = 497","tag":"h4"},{"text":"النتيجة النهائية؟","tag":"h2"},{"text":"42 + 38 + 497 = 577","tag":"p"}],"images":[{"src":"https://i.imgur.com/1jK6AQZ.png","className":"small-image"}]},{"event":[{"text":"📊 برمجت رسمة بتخليني أوثق قديش تعلمت بكل يوم خلال الأسبوع","tag":"h3"},{"text":" 🔜 قريبا راح أدمجها بالموقع، بس لسا ما جربت أربطها مع الكود","tag":"p"},{"text":"🗓️ إذا مشي الحال، المفروض تجهز الأسبوع الجاي","tag":"p"}],"images":[{"src":"https://i.imgur.com/fsjAtLQ.png","className":"small-image"}]}]},{"id":9,"duration":"من 26 فبراير إلى 4 مارس","summary":"تحديثات على الموقع - اضافة الرسمة","year":2025,"type":"weeks","events":[{"event":[{"text":"برمجت رسمة بتوثق وقت التعلم لكل يوم في الأسبوع","tag":"h3"},{"text":"هالرسمة بتخليني أسجل قديش تعلمت بكل يوم، وراح أضيفها على الموقع من الاسبوع هاد وطالع","tag":"p"}],"images":[{"src":"https://i.imgur.com/jGAr4gf.png","className":"small-image"},{"src":"https://i.imgur.com/ipnctsO.png"}]},{"event":[{"text":"حليت سؤال رقم 23 من بروجكت اولر","tag":"h3"},{"text":"السؤال كان عبارة عن ايجاد مجموع الأعداد التي تعتبر ليست جمع لعددين حاصل مجموع عواملهم اكبر منهم","tag":"p"}],"images":[{"src":"https://i.imgur.com/ZLxeGL0.jpeg","tag":"small-image"},{"src":"https://i.imgur.com/LgsSBoe.png","tag":"small-image"}]},{"event":[{"text":"الصور cdn غيرت","tag":"h2"},{"text":"كنت زمان أرفع الصور عالإنستا وآخد الرابط وأحطه بالموقع، بس اكتشفت إنه كل شهر بيغيروا الروابط، وهالشي صار يسببلي مشاكل. فبدل ما أظل أعدل كل فترة، حولت لموقع ايمجر لأنه بيعطي روابط ثابتة وما بتتغير","tag":"p"},{"text":"وكمان سويت تحسينات على الصور","tag":"h2"},{"text":"زبطت حجم الصور وصارت أصغر بنسبة 90 بالمية، يعني الموقع صار أسرع، والتصفح أخف وأريح","tag":"p"}],"images":[{"src":"https://i.imgur.com/54F7Qnh.jpeg"}]},{"event":[{"text":" السؤال رقم 25 - أول عدد فيبوناتشي فيه 1000 رقم","tag":"h3"},{"text":" بمشي بسلسلة فيبوناتشي وحدة وحدة، كل مرة بحسب عدد الارقام بالعدد، لحد ما أوصل لعدد فيه 1000 رقم، بعد هيك بوقف اللوب وبطبع ترتيب العدد","tag":"p"}],"images":[{"src":"https://i.imgur.com/FhLBL3X.jpeg","className":"small-image"},{"src":"https://i.imgur.com/dMLOdZN.jpeg","className":"small-image"}]},{"event":[{"text":"المواضيع اللي تعملت عنها الأسبوع هاد","tag":"h3"},{"text":"Advanced HTML + CSS - Accessibility, ARIA, ARIA Attributes","tag":"p"},{"text":"هالجزء مهم لأنه بيعلمك كيف تخلي الموقع متجاوب مع كل المستخدمين، حتى اللي عندهم اجتياجات خاصة، باستخدام تقنيات زي التباين اللوني، الكلام السهل المفهوم والتنقل باستخدام الكيبورد بالموقع","tag":"p"},{"text":"بعد هيك هفوت على الرياكت، الحماس عالي والشغل مستمر","tag":"p"}],"images":[{"src":"https://i.imgur.com/Sn3VjvR.jpeg"},{"src":"https://i.imgur.com/NrjHuUZ.jpeg"}]}]},{"id":10,"duration":"من 5 مارس إلى 11 مارس","summary":"⭐ تغييرات كبيرة على الموقع","type":"weeks","year":2025,"events":[{"event":[{"text":" 🙂🔥 تحديث جديد","tag":"h2"},{"text":"غيرت كل الكلام وضفت عليه شوية   ✍️","tag":"p"},{"text":"✨ إيموجيات ✨","tag":"h2"},{"text":"😎 صار في روح وحياة بالموقع بدل الجو الرسمي","tag":"p"}]},{"event":[{"text":"تحديث على الصور","tag":"h2"},{"text":"خليت طول الصورة دايما اصغر من حجم الشاشة","tag":"p"},{"text":" يعني هيك صارت الصورة كلها ظاهرة عندي مرة وحدة","tag":"p"},{"text":"👇🏻 قبل","tag":"h2"}],"images":[{"src":"https://i.imgur.com/VLnejBf.jpeg"}]},{"event":[{"text":"👇🏻 بعد","tag":"h2"}],"images":[{"src":"https://i.imgur.com/iZWj8OM.jpeg"}]},{"event":[{"text":"✨ تحديث جديد","tag":"h1"},{"text":"إعادة برمجة الموقع من الصفر","tag":"h3"},{"text":"بسبب إن الملف الأساسي صار 1200 سطر، قررت أحوله لملف جيسون، لأنه هيك هيكون أفضل واسرع للمدى البعيد","tag":"p"},{"text":"التحديث خلاني أستغني عن سكريبتات خارجية، وصار تنزيل التحديثات أسهل وأسرع من نفس الكود. كمان رتّبت ملفات الموقع بشكل أحسن، فصار كل شي مقسّم بطريقة أفضل 🔥","tag":"p"},{"text":"وكمان سويت تحديث على الرسمة تعت التقدم الأسبوعي","tag":"h2"},{"text":"برضو ضفت ايموجي عليها 😌","tag":"p"}]},{"event":[{"text":"التغييرات في صور","tag":"h2"},{"text":"طريقة اضافة الأحداث القديمة","tag":"p"}],"images":[{"src":"https://i.imgur.com/U55XqtK.jpeg","className":"small-image"},{"src":"https://i.imgur.com/C3xjf9n.jpeg","className":"small-image"},{"src":"https://i.imgur.com/q9YTLk7.jpeg","className":"small-image"},{"src":"https://i.imgur.com/DaYQOrp.png"},{"src":"https://i.imgur.com/PTYE8bK.png","className":"small-image"},{"src":"https://i.imgur.com/40ZRyfn.jpeg","className":"small-image"}]},{"event":[{"text":"تحديث على الألوان، تغيير ستايلات الموقع","tag":"h2"}],"images":[{"src":"https://i.imgur.com/ajj81FN.jpeg"},{"src":"https://i.imgur.com/U3NBAN8.jpeg","className":"small-image"},{"src":"https://i.imgur.com/d1z5WUt.jpeg","className":"small-image"}]}]},{"id":11,"duration":"من 12 مارس إلى 18 مارس","summary":"الأسبوع الحالي","year":2025,"type":"weeks","events":[{"event":[{"text":"تعديلات بسيطة على الموقع","tag":"h2"}],"images":[{"src":"https://i.imgur.com/Twdx7oB.jpeg"},{"src":"https://i.imgur.com/3MH6zcZ.jpeg","className":"small-image"},{"src":"https://i.imgur.com/drQY1pY.png","className":"small-image"}]},{"event":[{"text":"بتاريخ 12 مارس 2025 الساعة 4 ونص الفجر","tag":"h3"},{"text":"صرت عم 🤗","tag":"h2"},{"text":" 💞 مرحبا زينة","tag":"h4"}],"images":[{"src":"https://i.imgur.com/veWwRQj.jpeg","className":"small-image"}]},{"event":[{"text":"طبقت حاجة اسمها","tag":"h1"},{"text":"✨ Lazy Loading ✨","tag":"h2"},{"text":"يعني ببساطة إنك ما بتجيب كل البيانات أو الصور مرة وحدة لما تفتح الموقع، لا.. بتخلي الحاجات تنزل بس لما تحتاجها، يعني لما توصللها وأنت بتتصفح","tag":"p"},{"text":"بدل ما أحمل كل الداتا دفعة وحدة، خليت البيانات تنزل بس لما أوصللها بالموقع، وهيك صار الموقع اسرع واخف","tag":"p"}],"images":[{"src":"https://i.imgur.com/QASpXyV.jpeg","className":"small-image"}]},{"event":[{"text":"سويت تصميم، بييجي يوم بسويه 🙂","tag":"h3"}],"images":[{"src":"https://i.imgur.com/YDEichW.jpeg"}]},{"event":[{"text":"إنجاز جديد 💫","tag":"h1"},{"text":"خلصت الكورس التالت في دورة الفل ستاك","tag":"h3"}],"images":[{"src":"https://i.imgur.com/WSNANmX.jpeg","className":"small-image"},{"src":"https://i.imgur.com/WkiEpbG.jpeg","className":"small-image"}]},{"event":[{"text":"المشروع الأخير","tag":"h1"},{"text":"كان مطلوب اصمم موقع بورتفوليو، يشتغل على كل اﻷجهزة ويكون مافي مشاكل بالعرض سواء كان على جوال او على لابتوب","tag":"p"},{"isVideo":"true","html":"<iframe src=\\"https://www.youtube.com/embed/-d3HiNIH1gU?autoplay=1&controls=0&loop=1&playlist=-d3HiNIH1gU&mute=1\\" title=\\"YouTube video player\\" frameborder=\\"0\\" allow=\\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\\" referrerpolicy=\\"strict-origin-when-cross-origin\\"></iframe>"}]}]}]')}},e={};function n(a){var o=e[a];if(void 0!==o)return o.exports;var i=e[a]={id:a,exports:{}};return t[a](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0;var a=n(72),o=n.n(a),i=n(825),s=n.n(i),r=n(659),g=n.n(r),m=n(56),p=n.n(m),c=n(540),l=n.n(c),d=n(113),u=n.n(d),h=n(171),x={};x.styleTagTransform=u(),x.setAttributes=p(),x.insert=g().bind(null,"head"),x.domAPI=s(),x.insertStyleElement=l(),o()(h.A,x),h.A&&h.A.locals&&h.A.locals;var v=n(29),f={};f.styleTagTransform=u(),f.setAttributes=p(),f.insert=g().bind(null,"head"),f.domAPI=s(),f.insertStyleElement=l(),o()(v.A,f),v.A&&v.A.locals&&v.A.locals;var y=n(244),b={};b.styleTagTransform=u(),b.setAttributes=p(),b.insert=g().bind(null,"head"),b.domAPI=s(),b.insertStyleElement=l(),o()(y.A,b),y.A&&y.A.locals&&y.A.locals;var w=n(422),j={};function N(){const t=document.querySelectorAll(".lazy"),e=new IntersectionObserver(((t,e)=>{t.forEach((t=>{if(t.isIntersecting){const n=t.target;n.src=n.dataset.src,n.classList.add("loaded"),e.unobserve(n)}}))}));t.forEach((t=>{e.observe(t)}))}function A(t,e){!function(t,e){e.innerHTML="";let n="";t.forEach((t=>{t.event&&(n+="<section>",t.event.forEach((t=>{t.isVideo?n+=`\n            ${t.html}\n          `:n+=`\n          <${t.tag}>\n            ${t.text}\n          </${t.tag}>\n        `}))),t.images&&t.images.forEach((t=>{n+=`\n          <img data-src="${t.src}" class="${t.className?t.className:"image"} lazy">\n        `})),n+="</section>"})),n+='<a id="back-to-top" href="#posts">الرجوع لأعلى</a>',e.innerHTML=n}(t,e),N()}function k(t,e){!function(t,e){e.innerHTML="";let n="<div class='goals'>";t.forEach((t=>{n+=`\n    <div class="goal">\n      <p>${t.goal}</p>\n      <div class="loading">\n        <div class="progress-value"></div>\n        <div class="progress-bar" goal="${t.max}" value="${t.current}"></div>\n      </div>\n    </div>\n    `})),e.innerHTML=n+"</div>",function(t){let e=document.querySelectorAll(".progress-value");t.forEach(((t,n)=>{let a=+t.getAttribute("goal"),o=+t.getAttribute("value"),i=Math.round(100*o/a);e[n].textContent=`${i}%`,e[n].style.left=i>=6?i-6+"%":`${i}%`,t.style.width=`${i}%`}))}(document.querySelectorAll(".progress-bar"))}(t,e)}j.styleTagTransform=u(),j.setAttributes=p(),j.insert=g().bind(null,"head"),j.domAPI=s(),j.insertStyleElement=l(),o()(w.A,j),w.A&&w.A.locals&&w.A.locals;const L=n(264),E=n(209);function S(t,e){!function(t,e){e.innerHTML="";let n="";for(let e=t.length-1;e>=0;e--)n+=`\n    <div class="post" data-id="${t[e].id}" data-type="${t[e].type}" tabindex="0">\n      <div class="post-count">#${t[e].id}</div>\n      <div class="post-year">${t[e].year}</div>\n      <div class="post-duration">${t[e].duration}</div>\n      <div class="post-summary">${t[e].summary}</div>\n    </div>\n    `;e.innerHTML=n}(t,e),document.querySelectorAll(".post").forEach((t=>{t.addEventListener("click",(()=>{switch(t.dataset.type){case"weeks":A(L[t.dataset.id-1].events,document.getElementById("root"));break;case"goals":k(E[t.dataset.id-1].goals,document.getElementById("root"))}}))}))}const T=n(264),z=n(209),B=document.querySelector("#weeksBtn"),I=document.querySelector("#goalsBtn");B.addEventListener("click",(()=>{S(T,document.getElementById("posts")),A(T[T.length-1].events,document.getElementById("root"))})),I.addEventListener("click",(()=>{S(z,document.getElementById("posts")),k(z[z.length-1].goals,document.getElementById("root"))})),S(T,document.getElementById("posts")),A(T[T.length-1].events,document.getElementById("root")),N()})();