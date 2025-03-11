(()=>{"use strict";var t={171:(t,e,n)=>{n.d(e,{A:()=>r});var a=n(601),s=n.n(a),i=n(314),o=n.n(i)()(s());o.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap);"]),o.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap);"]),o.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap);"]),o.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@100;200;300;400;500;600;700&display=swap);"]),o.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400;1,700&display=swap);"]),o.push([t.id,':root {\n  --nav-bg-color: #080808;\n  --nav-font-color: #CCCCCC;\n  --nav-btn-hover-color: var(--nav-bg-color);\n  --root-bg-color: var(--nav-bg-color);\n  --root-font-color: var(--nav-font-color);\n  --logo-en-font: "Dancing Script", sans-serif, system-ui;\n  --arabic-font: "IBM Plex Sans Arabic", sans-serif, system-ui;\n  --english-font: Roboto, sans-serif, system-ui;\n  --post-count-font: Montserrat, sans-serif, system-ui;\n  --quote-font: Amiri, sans-serif, system-ui;\n}\nbody {\n  background-color: var(--root-bg-color);\n}\nbody * {\n  font-family: var(--arabic-font), sans-serif;\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  /* border: 1px dashed red; */\n}\nbutton {\n  background-color: transparent;\n  border: none;\n  transition: all 0.3s;\n  font-weight: 600;\n  padding: 5px 10px;\n  font-size: 16px;\n  color: var(--nav-font-color);\n}\n\nbutton:hover {\n  cursor: pointer;\n  font-size: 16px;\n  font-weight: 600;\n  color: #fff;\n}\nnav {\n  background-color: var(--nav-bg-color);\n  padding: 10px 30px;\n  color: var(--nav-font-color);\n}\nnav .logo {\n  font-size: 24px;\n  font-weight: bold;\n}\n.logo {\n  color: var(--nav-font-color);\n  font-family: var(--logo-en-font) !important;\n  font-weight: bolder;\n  font-size: 30px;\n}\nnav ul {\n  list-style-type: none;\n}\n#posts {\n  padding: 30px;\n  display: flex;\n  flex-direction: row-reverse;\n  gap: 20px;\n  background-color: var(--nav-btn-hover-color);\n  overflow-x: auto;\n  border-bottom: 1px solid #333;\n  width: 100%;\n  text-align: right;\n}\n.post {\n  color: white;\n  border-image: linear-gradient(45deg, #f6bd00 0%, #e82243 60%, #c200b5 100%) 1;\n  border-radius: 12px;\n  border-width: 3px;\n  border-style: solid;\n  transition: all 0.3s;\n  position: relative;\n  padding: 10px 20px;\n  width: 240px;\n  min-width: 240px;\n  height: 90px;\n  max-height: 90px;\n  background-color: var(--root-bg-color);\n}\n.post:hover {\n  background-color: var(--root-bg-color);\n  cursor: pointer;\n}\n.post .post-year {\n  position: absolute;\n  top: -15px;\n  right: 15px;\n  background: linear-gradient(to top, #f7000c, #ff6068);\n  padding: 2px 10px;\n  font-size: 16px;\n  font-weight: bold;\n  transform: skewX(-5deg);\n  border-radius: 7px;\n  font-family: Roboto !important;\n}\n.post .post-count {\n  position: absolute;\n  top: -10px;\n  left: -15px;\n  transform: skewX(-2deg);\n  background-color: #0068b5;\n  font-family: var(--post-count-font) !important;\n  font-weight: bolder;\n  font-style: italic;\n  padding: 5px;\n  font-size: 16px;\n}\n.post .post-duration {\n  font-weight: bold;\n  color: var(--nav-font-color);\n  font-size: 18px;\n}\n.post .post-summary {\n  font-weight: thin;\n  font-size: 12px;\n}\n#root {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: var(--root-font-color);\n}\n#root .counter {\n  font-size: 20px;\n  position: relative;\n  font-weight: bold;\n}\n\n#root {\n  padding: 60px 10px;\n  margin-bottom: 100px;\n  font-size: 18px;\n}\n#root {\n  text-align: center;\n}\n\n#root p {\n  font-weight: 450;\n  margin-top: 10px;\n  margin-bottom: 30px;\n}\n#root h1, h2, h3, h4, h5, h6 {\n  color: #e4e4e4;\n}\n#root img {\n  max-width: 100%;\n  margin: 30px 0 !important;\n}\n\n.small-image {\n  margin-top: 10px;\n}\n\nimg {\n  max-height: 90dvh;\n  width: auto;\n  object-fit: contain;\n}\n\nimg.long-image{\n  max-height: unset !important;\n  height: unset !important;\n  width: 100%;\n  max-width: 1000px;\n}\n\np.count {\n  font-weight: 240;\n  font-size: 12px !important;\n  font-style: italic;\n  color: #e3e3e3;\n  text-align: center;\n}\n.goals {\n  padding: 20px 0;\n  color: white;\n  width: min(80%, 600px);\n  background-color: var(--nav-bg-color);\n  display: flex;\n  flex-direction: column;\n}\n.goal {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  margin: 15px 0;\n}\n.loading {\n  width: 90%;\n  position: relative;\n  height: 20px;\n  background-color: #f2f2f2;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  border-radius: 8px;\n  margin: 10px 0;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.45) inset;\n}\n.progress-bar {\n  height: 100%;\n  background: linear-gradient(200deg, #f6bd00 0%, #e82243 60%, #c200b5 100%);\n  border-radius: 8px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.45) inset;\n}\n.progress-value {\n  position: absolute;\n  top: 23px;\n  font-weight: 450;\n}\n.goal p {\n  margin: 0 !important;\n}',""]);const r=o},29:(t,e,n)=>{n.d(e,{A:()=>r});var a=n(601),s=n.n(a),i=n(314),o=n.n(i)()(s());o.push([t.id,"@media (min-width: 1000px) {\n  .container {\n    display: flex;\n    flex-direction: row-reverse;\n  }\n/* \n  * {\n    border: 1px dashed red;\n  } */\n  .btn {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 5px;\n    padding: 10px;\n  }\n  nav .nav-items img {\n    width: 30px;\n    height: 30px;\n  }\n  nav {\n    width: 250px;\n    min-width: 200px;\n    max-width: 200px;\n    text-align: right;\n    border-left: 1px solid #555;\n    min-height: 100dvh;\n    position: fixed;\n    right: 0;\n  }\n  main {\n    margin-right: 200px;\n    width: calc(100dvw - 200px);\n  }\n  nav .logo {\n    position: absolute;\n  }\n  nav .nav-items {\n    position: absolute;\n    right: 10px;\n    top: 100px;\n  }\n  nav ul li span {\n    margin: 0 20px;\n  }\n  nav ul {\n    display: flex;\n    gap: 20px;\n    flex-direction: column;\n  }\n  .hidden-l {\n    display: none;\n  }\n  #root {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n  }\n  #root {\n    font-size: 18px;\n  }\n  #root p {\n    max-width: 800px;\n  }\n  #root img{\n    margin: 20px 0;\n    width: 100%;\n    max-width: 1000px;\n  }\n  #root img.small-image {\n    width: min(80%, 650px);\n  }\n  #root img.extra-small-image {\n    width: min(60%, 450px);\n  }\n}",""]);const r=o},244:(t,e,n)=>{n.d(e,{A:()=>r});var a=n(601),s=n.n(a),i=n(314),o=n.n(i)()(s());o.push([t.id,"@media (max-width: 1000px) {\n  .logo {\n    position: absolute;\n    top: 0;\n    left: 0;\n    border-bottom: 1px solid #555;\n    width: 100%;\n    padding: 10px 20px;\n    text-align: center;\n  }\n  .hidden-m {\n    display: none;\n  }\n  nav {\n    position: fixed;\n    bottom: -1px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    min-height: 60px;\n    height: 60px;\n    max-height: 60px;\n    border-top: 1px solid #555;\n    z-index: 999;\n  }\n  nav ul {\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n  }\n  nav .nav-items {\n    width: 100%;\n    justify-content: space-around;\n    align-items: center;\n  }\n  nav .nav-items img {\n    width: 25px;\n    height: 25px;\n  }\n  nav {\n    flex-direction: row-reverse;\n    text-align: right;\n  }\n  body.Arabic nav ul {\n    flex-direction: row-reverse;\n  }\n  #posts {\n    margin-top: 80px;\n  }\n  #posts .post {\n    text-align: right;\n  }\n  #root {\n    width: 100dvw;\n    margin-bottom: 100px;\n  }\n\n  h1,h2,h3,h4,h5,h6 {\n    padding: 10px;\n    text-wrap: pretty;\n  }\n\n  #root img.long-image {\n    width: 100% !important;\n  }\n  main {\n    width: 100%;\n  }\n}",""]);const r=o},422:(t,e,n)=>{n.d(e,{A:()=>r});var a=n(601),s=n.n(a),i=n(314),o=n.n(i)()(s());o.push([t.id,"::-webkit-scrollbar {\n  width: 6px; \n  height: 6px; \n}\n::-webkit-scrollbar-track {\n  background: var(--root-bg-color);\n}\n::-webkit-scrollbar-thumb {\n  background: #999;\n  border-radius: 12px;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #333; \n}\n::-webkit-scrollbar-corner {\n  background: #f1f1f1;\n}",""]);const r=o},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",a=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),a&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),a&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,a,s,i){"string"==typeof t&&(t=[[null,t,void 0]]);var o={};if(a)for(var r=0;r<this.length;r++){var m=this[r][0];null!=m&&(o[m]=!0)}for(var g=0;g<t.length;g++){var c=[].concat(t[g]);a&&o[c[0]]||(void 0!==i&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),s&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=s):c[4]="".concat(s)),e.push(c))}},e}},601:t=>{t.exports=function(t){return t[1]}},72:t=>{var e=[];function n(t){for(var n=-1,a=0;a<e.length;a++)if(e[a].identifier===t){n=a;break}return n}function a(t,a){for(var i={},o=[],r=0;r<t.length;r++){var m=t[r],g=a.base?m[0]+a.base:m[0],c=i[g]||0,p="".concat(g," ").concat(c);i[g]=c+1;var l=n(p),d={css:m[1],media:m[2],sourceMap:m[3],supports:m[4],layer:m[5]};if(-1!==l)e[l].references++,e[l].updater(d);else{var u=s(d,a);a.byIndex=r,e.splice(r,0,{identifier:p,updater:u,references:1})}o.push(p)}return o}function s(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,s){var i=a(t=t||[],s=s||{});return function(t){t=t||[];for(var o=0;o<i.length;o++){var r=n(i[o]);e[r].references--}for(var m=a(t,s),g=0;g<i.length;g++){var c=n(i[g]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}i=m}}},659:t=>{var e={};t.exports=function(t,n){var a=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,s&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(a,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},209:t=>{t.exports=JSON.parse('[{"id":1,"duration":"Goals for 2025","summary":"Become a Full Stack Web Developer","year":"2025","type":"goals","goals":[{"goal":"Become a Full Stack Web Developer","max":600,"current":300},{"goal":"Finish Project Euler Level 1","max":50,"current":25},{"goal":"Duolingo 400 Days Streak","max":400,"current":195},{"goal":"Read at least 10 Books","max":10,"current":3}]}]')},264:t=>{t.exports=JSON.parse('[{"id":1,"duration":"من 1 يناير إلى 7 يناير","summary":"حل أسئلة برمجة","year":"2025","type":"weeks","events":[{"event":[{"text":" بديت بحل أسئلة موقع بروجكت أولر","tag":"h2"}],"images":[{"src":"https://i.imgur.com/PK0BXVx.jpeg","className":"small-image"}]},{"event":[{"text":" حليت 16 سؤال من أصل 50 مقرر أحلهم خلال السنة","tag":"h4"}],"images":[{"src":"https://i.imgur.com/C3OM08R.jpeg","className":"small-image"}]},{"event":[{"text":"التحدي مش بس بكتابة الكود، الفكرة إنك تدور على الطريقة الأفضل والأسرع للحل، مش مجرد إنك تطلع النتيجة وخلاص. كل سؤال تجربة جديدة بتوسع طريقة التفكير وبتخليك تفكر خارج الصندوق","tag":"p"}]}]},{"id":2,"duration":"من 8 يناير إلى 14 يناير","summary":"برمجة هاد الموقع","year":"2025","type":"weeks","events":[{"event":[{"text":" برمجة هاد الموقع 💻🎨","tag":"h1"}],"images":[{"src":"https://i.imgur.com/a4QOAMo.jpeg","className":"small-image"}]},{"event":[{"text":"💡 التصميم الأولي: كان بسيط","tag":"h3"}],"images":[{"src":"https://i.imgur.com/FKy14XK.jpeg","className":"image"}]},{"event":[{"text":"بعدين قررت أسرق شوية إلهام من الإنستا 🙂","tag":"h3"},{"text":"ضفت اقتباس جديد كل أسبوع، وعملت تعديلات على التصميم بحيث يكون متجاوب أكتر","tag":"p"},{"text":" 📱 الشكل على الجوال","tag":"h3"}],"images":[{"src":"https://i.imgur.com/irrN5sh.jpeg","className":"small-image"}]},{"event":[{"text":"الشكل على الشاشات الأكبر","tag":"h3"}],"images":[{"src":"https://i.imgur.com/mFnu2wz.jpeg","className":"image"}]},{"event":[{"text":"🔥 اليوم 14 يناير: كملت 142 يوم متواصل في تعلم اللغة العبرية ","tag":"p"}],"images":[{"src":"https://i.imgur.com/nLRIDzc.jpeg","className":"small-image"}]}]},{"id":3,"duration":"من 15 يناير إلى 21 يناير","summary":"todolist برنامج","year":"2025","type":"weeks","events":[{"event":[{"text":"To-Do List مشروع جديد: تطبيق","tag":"h1"},{"text":"التقنيات المستخدمة 📌","tag":"h2"},{"text":"HTML 5, CSS 3, ES6 JavaScript, Webpack","tag":"h4"}],"images":[{"src":"https://i.imgur.com/tJ62dMa.png","className":"image"},{"src":"https://i.imgur.com/w4iAX8i.png","className":"image"},{"src":"https://i.imgur.com/49FbM1g.png","className":"image"}]},{"event":[{"text":"✍️ الشكل الحالي للمشروع:  لسا بده شوية شغل وتحسينات","tag":"p"},{"text":"التحديثات الجاية: إضافة البرمجة عشان يشتغل كل المطلوب من المشروع 🛠","tag":"p"}],"images":[{"src":"https://i.imgur.com/DpJH25o.png","className":"image"},{"src":"https://i.imgur.com/QG2bSCf.png","className":"small-image"}]},{"event":[{"text":"⏳ بعد يومين شغل، التصميم والبرمجة صاروا جاهزين","tag":"h3"}],"images":[{"src":"https://i.imgur.com/kBNLBC3.png","className":"image"},{"src":"https://i.imgur.com/lAti3Mb.png","className":"small-image"},{"src":"https://i.imgur.com/GOzoRfv.png","className":"image"},{"src":"https://i.imgur.com/P14lZeI.png","className":"image"}]}]},{"id":4,"duration":"من 22 يناير إلى 28 يناير","summary":"تحديث جديد على الموقع – إضافة أهداف سنوية","year":"2025","type":"weeks","events":[{"event":[{"text":"تحديث جديد على الموقع 🆕","tag":"h1"},{"text":"🎯 إضافة زر خاص بالأهداف لكل سنة، عشان أوثق الإنجازات وأظلني متابع التطور 📌","tag":"h3"}],"images":[{"src":"https://i.imgur.com/tjP7X6Q.png","className":"small-image"},{"src":"https://i.imgur.com/LqwR8zt.png","className":"image"},{"src":"https://i.imgur.com/RxEEsQp.jpeg","className":"small-image"},{"src":"https://i.imgur.com/IkzqJcg.png","className":"small-image"},{"src":"https://i.imgur.com/t4JAx08.png","className":"small-image"}]},{"event":[{"text":"GitHub تحديثات على 🛠","tag":"h1"},{"text":" ربط  جيت هب بالكود الخاص بالتطوير عشان كل تحديث يكون سلس","tag":"p"},{"text":"🔀 إنشاء فرعين منفصلين","tag":"h1"},{"text":"فرع للموقع الجاهز بعد كل تحديث","tag":"p"},{"text":"فرع خاص بالكود اللي بيطور الموقع","tag":"p"}],"images":[{"src":"https://i.imgur.com/lQigA2X.jpeg","className":"small-image"},{"src":"https://i.imgur.com/2hLI1jw.png","className":"small-image"}]},{"event":[{"text":"🔄 الطريقة القديمة: كل مرة كنت لازم أعدل التحديثات يدويا","tag":"h2"}],"images":[{"src":"https://i.imgur.com/qnIQgph.png","className":"small-image"}]},{"event":[{"text":"الطريقة الجديدة: تحديثات أسرع وأسهل، مرة واحدة وكل شيء يصير تلقائي","tag":"h2"}],"images":[{"src":"https://i.imgur.com/bDGJPVb.png","className":"small-image"}]},{"event":[{"text":"😎 النتيجة؟ الكود صار يسمح لي أعمل سكريبت يحدث الموقع لحاله بعد هيك! الكسل أحيانا بيخليك تبدع","tag":"p"}],"images":[{"src":"https://i.imgur.com/nLSJJ1e.png","className":"image"}]}]},{"id":5,"duration":"من 29 يناير إلى 4 فبراير","summary":"حل كمان اسئلة، مشاريع برمجة خفيفة","type":"weeks","year":"2025","events":[{"event":[{"text":"🚀 Linked List : مشروع جديد 📌","tag":"h1"},{"text":"⚡ لينكد ليست؟ موضوع أخدته بالجامعة وفاهمه منيح من زمان، عشان هيك خلصته بسرعة","tag":"p"}],"images":[{"src":"https://i.imgur.com/zdpT84t.png","className":"small-image"},{"src":"https://i.imgur.com/XixYDKs.png","className":"small-image"},{"src":"https://i.imgur.com/Ef9w84c.png","className":"image"},{"src":"https://i.imgur.com/ka2g2Vc.png","className":"image"}]},{"event":[{"text":"✅ خطوة جديدة: تعلمت كيف أسوي اختبارات تلقائية للكود 🛠","tag":"h3"},{"text":"الهدف؟ كل ما أعدل على الكود أكون متأكد إنه التغييرات ما تخرب أي شيء","tag":"p"}],"images":[{"src":"https://i.imgur.com/W9siGTo.png","className":"image"}]},{"event":[{"text":"Progress on Project Euler 🤓","tag":"h1"},{"text":"حليت الأسئلة 17، 18، 19، 20","tag":"p"}]}]},{"id":6,"duration":"من 5 فبراير إلى 11 فبراير","summary":"بطاريات، مشروع حساب سريع","type":"weeks","year":2025,"events":[{"event":[{"text":"اتسليت بالشغل على بطاريات ليثيوم كانو عندي من كم سنة وجبتهم معي من غزة","tag":"p"}],"images":[{"src":"https://i.imgur.com/BH9t49n.jpeg","className":"long-image"}]},{"event":[{"text":"وعملت مشروع حساب، بس لسا مش عارف كيف اطبقه باشي مفيد، لسا لقدام في براسي فكرة بحاول اطبقها منه","tag":"p"}],"images":[{"src":"https://i.imgur.com/s88Lbhy.jpeg","className":"long-image"}]}]},{"id":7,"duration":"من 12 فبراير إلى 18 فبراير","summary":"مشوار غزة","year":"2025","type":"weeks","events":[{"event":[{"text":"مشوار غزة 🚶🏻‍♂️","tag":"h1"},{"text":"الهدف: زيارة اختي ايمان وتفقد الوضع","tag":"p"},{"text":"بداية التوثيق كانت الساعة ٤:١٠ من شرق النصيرات، شارع صلاح الدين","tag":"p"}],"images":[{"src":"https://i.imgur.com/X2ZjXUu.jpeg","className":"small-image"},{"src":"https://i.imgur.com/m8VLAmF.jpeg","className":"image"}]},{"event":[{"text":"مشينا لحد ما وصلنا الوادي، وكانت طوابير السيارات ممتدة من هناك لحد نتساريم","tag":"p"}],"images":[{"src":"https://i.imgur.com/sTXQdYe.jpeg","className":"small-image"}]},{"event":[{"text":"قررنا نكمل مشي، الوقت المتوقع للوصول لحد شقة إيمان، أختي، كان ساعتين حسب البرنامج","tag":"p"}],"images":[{"src":"https://i.imgur.com/VC9kcA9.jpeg","className":"small-image"}]},{"event":[{"text":"كنا متحيرين في البداية، هل نمشي مع طريق السيارات ولا نمشي عدل على شارع صلاح الدين؟ بالأخير قررنا نمشي بالطريق المباشر","tag":"p"},{"text":"التطبيق كان يبين الطريق أحمر فكنا مترددين شوي 🔴","tag":"h3"}],"images":[{"src":"https://i.imgur.com/HYmkDSY.jpeg","className":"small-image"},{"src":"https://i.imgur.com/20LxI4E.jpeg","className":"small-image"},{"src":"https://i.imgur.com/AD2KBFW.jpeg","className":"small-image"},{"src":"https://i.imgur.com/pDtNLP6.jpeg","className":"small-image"},{"src":"https://i.imgur.com/rdTULeW.jpeg","className":"small-image"}]},{"event":[{"text":"دخلنا المنطقة الحمرا، وضلينا ماشيين،  الطريق كان متدمر ومليان رمل، وما كان في ولا جزء من الأسفلت","tag":"p"},{"text":"هاي صور عن جنب الطريق، على موازاة الممر، عند تفتيش السيارات قبل دخولها للشمال","tag":"p"}],"images":[{"src":"https://i.imgur.com/fixdzRv.jpeg","className":"image"},{"src":"https://i.imgur.com/nPzLUFn.jpeg","className":"image"}]},{"event":[{"text":"ضل للطريق مسافة ساعة ونص مشي","tag":"h3"}],"images":[{"src":"https://i.imgur.com/BclUKTc.jpeg","className":"small-image"}]},{"event":[{"text":"الشمس كانت بتقرب تغرب","tag":"h4"}],"images":[{"src":"https://i.imgur.com/ZZGxpk2.jpeg","className":"image"}]},{"event":[{"text":"طلعنا من المنطقة الحمرا وكان باقي حوالي ساعة مشي للوصول","tag":"p"}],"images":[{"src":"https://i.imgur.com/wygTMFc.jpeg","className":"small-image"}]},{"event":[{"text":"وصلنا دوار شارع رقم 10 في الزيتون، أخذنا بريك بسيط هناك، وبعديها أذن المغرب","tag":"p"}],"images":[{"src":"https://i.imgur.com/yBPuQLr.jpeg","className":"image"},{"src":"https://i.imgur.com/tqpdTD7.jpeg","className":"image"}]},{"event":[{"text":" دخلنا الزيتون، وبطريقنا للساحة، ومن هناك للجندي","tag":"p"}],"images":[{"src":"https://i.imgur.com/pN7nxZA.jpeg","className":"image"},{"src":"https://i.imgur.com/gGq2s8b.jpeg","className":"image"},{"src":"https://i.imgur.com/3gnHvkO.jpeg","className":"image"},{"src":"https://i.imgur.com/84hpJ2F.jpeg","className":"image"},{"src":"https://i.imgur.com/4oY1dKl.jpeg","className":"small-image"}]},{"event":[{"text":"وصلنا الساحة، لقينا كاظم فاتح والحياة منتعشة بالمنطقة","tag":"p"},{"text":"مش ضايل غير نص ساعة مشي عشان نوصل الشقة","tag":"p"}],"images":[{"src":"https://i.imgur.com/mVPbp5W.jpeg","className":"image"}]},{"event":[{"text":"وصلنا عال7 العشا، اكلنا لقمة وارتحنا الليلة","tag":"p"},{"text":"لما صحينا افطرنا وبلشنا شغل بالشقة، رتبناها كلها وخلصنا منها العصر","tag":"p"},{"text":"بعد هيك روحنا على الدير","tag":"p"}],"images":[{"src":"https://i.imgur.com/YsaEeUF.jpeg","className":"image"},{"src":"https://i.imgur.com/dSly3x0.jpeg","className":"image"}]},{"event":[{"text":"لحقت تعملت اشي بهالاسبوع","tag":"h2"}],"images":[{"src":"https://i.imgur.com/jQO0hM4.jpeg","className":"image"}]},{"event":[{"text":"🖼️✨ سويت سكريبت بيخلي تنزيل الأسابيع أسهل، هو بيكتب الكود لحاله، وأنا بس بدخل الكلام ورابط الصور","tag":"p"}],"images":[{"src":"https://i.imgur.com/S4ZbZT8.png","className":"small-image"},{"src":"https://i.imgur.com/fRHY5OE.png","className":"small-image"},{"src":"https://i.imgur.com/AKUl3Rk.png","className":"small-image"}]},{"event":[{"text":""}]}]},{"id":8,"duration":"من 19 فبراير إلى 25 فبراير","summary":"خلصت كورس جافاسكريبت","type":"weeks","year":"2025","events":[{"event":[{"text":"🎉 إنجاز جديد","tag":"h1"},{"text":"✅ خلصت كورس الجافاسكريبت 💻🔥","tag":"p"}],"images":[{"src":"https://i.imgur.com/0mzRSaB.png","className":"small-image"}]},{"event":[{"text":"آخر مشروع كان  سويته بـ 3 ساعات لا كان سهل ولا كان صعب","tag":"p"},{"text":"Battleships ⚔️","tag":"h2"}],"images":[{"src":"https://i.imgur.com/vfLWKqB.png","className":"small-image"},{"src":"https://i.imgur.com/fwby6Tb.jpeg","className":"extra-small-image"},{"src":"https://i.imgur.com/G3sVAqb.png","className":"small-image"}]},{"event":[{"text":"✅ حليت سؤال رقم 22 من بروجكت أولر","tag":"h2"}],"images":[{"src":"https://i.imgur.com/zgKEirM.png","className":"small-image"}]},{"event":[{"text":"المطلوب؟","tag":"h2"},{"text":"عندك ملف نصي فيه آلاف الأسماء، مكتوبة بين علامات اقتباس ومفصولة بفواصل","tag":"p"},{"text":"بدك ترتب الأسماء أبجديا","tag":"p"},{"text":"لكل اسم، بتحسب السكور الخاص فيه، وهو عبارة عن مجموع القيم العددية لأحرف الاسم","tag":"p"},{"text":" A = 1, B = 2, ..., Z = 26","tag":"h4"},{"text":"ضرب المجموع بترتيب الاسم في القائمة بعد الفرز","tag":"p"},{"text":"مثال عملي 🔹","tag":"h2"},{"text":"\\"COLIN\\", \\"ALEX\\", \\"BOB\\"","tag":"p"},{"text":"بعد الترتيب","tag":"p"},{"text":"[ALEX, BOB, COLIN]","tag":"p"},{"text":"ALEX, 1","tag":"h3"},{"text":"1 x (1 + 12 + 5 + 24) = 42","tag":"h4"},{"text":"BOB, 2","tag":"h3"},{"text":"2 x (2 + 15 + 2) = 38","tag":"h4"},{"text":"COLIN, 3","tag":"h3"},{"text":"3 x (3 + 15 + 12 + 9 + 14) = 497","tag":"h4"},{"text":"النتيجة النهائية؟","tag":"h2"},{"text":"42 + 38 + 497 = 577","tag":"p"}],"images":[{"src":"https://i.imgur.com/1jK6AQZ.png","className":"small-image"}]},{"event":[{"text":"📊 برمجت رسمة بتخليني أوثق قديش تعلمت بكل يوم خلال الأسبوع","tag":"h3"},{"text":" 🔜 قريبا راح أدمجها بالموقع، بس لسا ما جربت أربطها مع الكود","tag":"p"},{"text":"🗓️ إذا مشي الحال، المفروض تجهز الأسبوع الجاي","tag":"p"}],"images":[{"src":"https://i.imgur.com/fsjAtLQ.png","className":"small-image"}]}]},{"id":9,"duration":"من 26 فبراير إلى 4 مارس","summary":"تحديثات على الموقع - اضافة الرسمة","year":2025,"type":"weeks","events":[{"event":[{"text":"برمجت رسمة بتوثق وقت التعلم لكل يوم في الأسبوع","tag":"h3"},{"text":"هالرسمة بتخليني أسجل قديش تعلمت بكل يوم، وراح أضيفها على الموقع من الاسبوع هاد وطالع","tag":"p"}],"images":[{"src":"https://i.imgur.com/jGAr4gf.png","className":"small-image"},{"src":"https://i.imgur.com/ipnctsO.png","className":"image"}]},{"event":[{"text":"حليت سؤال رقم 23 من بروجكت اولر","tag":"h3"},{"text":"السؤال كان عبارة عن ايجاد مجموع الأعداد التي تعتبر ليست جمع لعددين حاصل مجموع عواملهم اكبر منهم","tag":"p"}],"images":[{"src":"https://i.imgur.com/ZLxeGL0.jpeg","tag":"small-image"},{"src":"https://i.imgur.com/LgsSBoe.png","tag":"small-image"}]},{"event":[{"text":"الصور cdn غيرت","tag":"h2"},{"text":"كنت زمان أرفع الصور عالإنستا وآخد الرابط وأحطه بالموقع، بس اكتشفت إنه كل شهر بيغيروا الروابط، وهالشي صار يسببلي مشاكل. فبدل ما أظل أعدل كل فترة، حولت لموقع ايمجر لأنه بيعطي روابط ثابتة وما بتتغير","tag":"p"},{"text":"وكمان سويت تحسينات على الصور","tag":"h2"},{"text":"زبطت حجم الصور وصارت أصغر بنسبة 90 بالمية، يعني الموقع صار أسرع، والتصفح أخف وأريح","tag":"p"}],"images":[{"src":"https://i.imgur.com/54F7Qnh.jpeg","className":"image"}]},{"event":[{"text":" السؤال رقم 25 - أول عدد فيبوناتشي فيه 1000 رقم","tag":"h3"},{"text":" بمشي بسلسلة فيبوناتشي وحدة وحدة، كل مرة بحسب عدد الارقام بالعدد، لحد ما أوصل لعدد فيه 1000 رقم، بعد هيك بوقف اللوب وبطبع ترتيب العدد","tag":"p"}],"images":[{"src":"https://i.imgur.com/FhLBL3X.jpeg","className":"small-image"},{"src":"https://i.imgur.com/dMLOdZN.jpeg","className":"small-image"}]},{"event":[{"text":"المواضيع اللي تعملت عنها الأسبوع هاد","tag":"h3"},{"text":"Advanced HTML + CSS - Accessibility, ARIA, ARIA Attributes","tag":"p"},{"text":"هالجزء مهم لأنه بيعلمك كيف تخلي الموقع متجاوب مع كل المستخدمين، حتى اللي عندهم اجتياجات خاصة، باستخدام تقنيات زي التباين اللوني، الكلام السهل المفهوم والتنقل باستخدام الكيبورد بالموقع","tag":"p"},{"text":"بعد هيك هفوت على الرياكت، الحماس عالي والشغل مستمر","tag":"p"}],"images":[{"src":"https://i.imgur.com/Sn3VjvR.jpeg","className":"image"},{"src":"https://i.imgur.com/NrjHuUZ.jpeg","className":"image"}]}]},{"id":10,"duration":"من 5 مارس إلى 11 مارس","summary":"","type":"weeks","year":2025,"events":[{"event":[{"text":" 🙂🔥 تحديث جديد على الموقع","tag":"h3"},{"text":"غيرت كل الكلام وضفت عليه شوية   ✍️","tag":"p"},{"text":"✨ إيموجيات ✨","tag":"h2"},{"text":"😎 صار في روح وحياة بالموقع بدل الجو الرسمي","tag":"h3"}],"images":[{"src":"https://i.imgur.com/JLupY5L.png","className":"extra-small-image"}]},{"event":[{"text":"تحديث على الصور","tag":"h2"},{"text":"خليت طول الصورة دايما اصغر من حجم الشاشة","tag":"p"},{"text":" يعني هيك صارت الصورة كلها ظاهرة عندي مرة وحدة","tag":"p"},{"text":"👇🏻 قبل","tag":"h2"}],"images":[{"src":"https://i.imgur.com/VLnejBf.jpeg","className":"image"}]},{"event":[{"text":"👇🏻 بعد","tag":"h2"}],"images":[{"src":"https://i.imgur.com/iZWj8OM.jpeg","className":"image"}]},{"event":[{"text":"✨ تحديث جديد","tag":"h1"},{"text":"إعادة برمجة الموقع من الصفر","tag":"h3"},{"text":"بسبب إن الملف الأساسي صار 1200 سطر، قررت أحوله لملف جيسون، لأنه هيك هيكون أفضل واسرع للمدى البعيد","tag":"p"},{"text":"التحديث خلاني أستغني عن سكريبتات خارجية، وصار تنزيل التحديثات أسهل وأسرع من نفس الكود. كمان رتّبت ملفات الموقع بشكل أحسن، فصار كل شي مقسّم بطريقة أفضل 🔥","tag":"p"},{"text":"وكمان سويت تحديث على الرسمة تعت التقدم الأسبوعي","tag":"h2"},{"text":"برضو ضفت ايموجي عليها 😌","tag":"p"}]},{"event":[{"text":"التغييرات في صور","tag":"h2"},{"text":"طريقة اضافة الأحداث الجديدة القديمة","tag":"p"}],"images":[{"src":"https://i.imgur.com/U55XqtK.jpeg","className":"small-image"},{"src":"https://i.imgur.com/C3xjf9n.jpeg","className":"small-image"},{"src":"https://i.imgur.com/q9YTLk7.jpeg","className":"small-image"},{"src":"https://i.imgur.com/DaYQOrp.png","className":"image"}]}]}]')}},e={};function n(a){var s=e[a];if(void 0!==s)return s.exports;var i=e[a]={id:a,exports:{}};return t[a](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0;var a=n(72),s=n.n(a),i=n(825),o=n.n(i),r=n(659),m=n.n(r),g=n(56),c=n.n(g),p=n(540),l=n.n(p),d=n(113),u=n.n(d),h=n(171),x={};x.styleTagTransform=u(),x.setAttributes=c(),x.insert=m().bind(null,"head"),x.domAPI=o(),x.insertStyleElement=l(),s()(h.A,x),h.A&&h.A.locals&&h.A.locals;var v=n(29),f={};f.styleTagTransform=u(),f.setAttributes=c(),f.insert=m().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),s()(v.A,f),v.A&&v.A.locals&&v.A.locals;var y=n(244),b={};b.styleTagTransform=u(),b.setAttributes=c(),b.insert=m().bind(null,"head"),b.domAPI=o(),b.insertStyleElement=l(),s()(y.A,b),y.A&&y.A.locals&&y.A.locals;var w=n(422),N={};function j(t,e){!function(t,e){e.innerHTML="";let n="";t.forEach((t=>{t.event&&t.event.forEach((t=>{n+=`\n          <${t.tag}>\n            ${t.text}\n          </${t.tag}>\n        `})),t.images&&t.images.forEach((t=>{n+=`\n          <img src="${t.src}" class="${t.className}">\n        `}))})),e.innerHTML=n}(t,e)}function A(t,e){!function(t,e){e.innerHTML="";let n="<div class='goals'>";t.forEach((t=>{n+=`\n    <div class="goal">\n      <p>${t.goal}</p>\n      <div class="loading">\n        <div class="progress-value"></div>\n        <div class="progress-bar" goal="${t.max}" value="${t.current}"></div>\n      </div>\n    </div>\n    `})),e.innerHTML=n+"</div>",function(t){let e=document.querySelectorAll(".progress-value");t.forEach(((t,n)=>{let a=+t.getAttribute("goal"),s=+t.getAttribute("value"),i=Math.round(100*s/a);e[n].textContent=`${i}%`,e[n].style.left=i>=6?i-6+"%":`${i}%`,t.style.width=`${i}%`}))}(document.querySelectorAll(".progress-bar"))}(t,e)}N.styleTagTransform=u(),N.setAttributes=c(),N.insert=m().bind(null,"head"),N.domAPI=o(),N.insertStyleElement=l(),s()(w.A,N),w.A&&w.A.locals&&w.A.locals;const k=n(264),L=n(209);function E(t,e){!function(t,e){e.innerHTML="";let n="";for(let e=t.length-1;e>=0;e--)n+=`\n    <div class="post" data-id="${t[e].id}" data-type="${t[e].type}">\n      <div class="post-count">#${t[e].id}</div>\n      <div class="post-year">${t[e].year}</div>\n      <div class="post-duration">${t[e].duration}</div>\n      <div class="post-summary">${t[e].summary}</div>\n    </div>\n    `;e.innerHTML=n}(t,e),document.querySelectorAll(".post").forEach((t=>{t.addEventListener("click",(()=>{switch(t.dataset.type){case"weeks":j(k[t.dataset.id-1].events,document.getElementById("root")),console.log("Loading week "+t.dataset.id);break;case"goals":A(L[t.dataset.id-1].goals,document.getElementById("root"))}}))}))}const S=n(264),B=n(209),T=document.querySelector("#weeksBtn"),M=document.querySelector("#goalsBtn");T.addEventListener("click",(()=>{E(S,document.getElementById("posts")),j(S[S.length-1].events,document.getElementById("root"))})),M.addEventListener("click",(()=>{E(B,document.getElementById("posts")),A(B[B.length-1].goals,document.getElementById("root"))})),E(S,document.getElementById("posts")),j(S[S.length-1].events,document.getElementById("root"))})();