!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=15)}([function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n.d(e,"a",(function(){return o}));var o=function(){function t(e){var n=e.domElement,r=e.visibleClass,o=e.hiddenClass;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.domElement=n,this.visibleClass=r,this.hiddenClass=o,this.addEventListener=this.addEventListener.bind(this)}var e,n,o;return e=t,(n=[{key:"addEventListener",value:function(){var t;(t=this.domElement).addEventListener.apply(t,arguments)}},{key:"removeEventListener",value:function(){var t;(t=this.domElement).removeEventListener.apply(t,arguments)}},{key:"show",value:function(){this.visibleClass&&this.domElement.classList.add(this.visibleClass),this.hiddenClass&&this.domElement.classList.remove(this.hiddenClass)}},{key:"hide",value:function(){this.visibleClass&&this.domElement.classList.remove(this.visibleClass),this.hiddenClass&&this.domElement.classList.add(this.hiddenClass)}}])&&r(e.prototype,n),o&&r(e,o),t}()},function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}function s(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return a}));var a=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}(u,t);var e,n,r,s=c(u);function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=s.call(this,t)).disabledClass=t.disabledClass,e}return e=u,(n=[{key:"enable",value:function(){this.domElement.classList.remove(this.disabledClass),this.domElement.removeAttribute("disabled","disabled")}},{key:"disable",value:function(){this.domElement.classList.add(this.disabledClass),this.domElement.setAttribute("disabled","disabled")}}])&&o(e.prototype,n),r&&o(e,r),u}(n(0).a)},function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"d",(function(){return i})),n.d(e,"c",(function(){return c}));var r={baseUrl:"https://newsapi.org/v2/everything?q=",key:"f2b033a2d3804b5aaf33852777f3c31e",newsLang:"ru",searchPeriodDays:7,pageSize:100},o={baseUrl:"https://api.news-explorer.host"},i=3,c=/\S+/},function(t,e,n){"use strict";function r(t){var e=new Date(t);return"".concat(e.toLocaleString("ru",{day:"numeric",month:"long"}),", ").concat(e.getFullYear())}n.d(e,"a",(function(){return r}))},function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}function s(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return a}));var a=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}(u,t);var e,n,r,s=c(u);function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=s.call(this,t)).page=t.instances.page,e}return e=u,(n=[{key:"showAndNoScroll",value:function(){this.show(),this.page.stopScroll()}},{key:"hideAndScroll",value:function(){this.hide(),this.page.continueScroll()}}])&&o(e.prototype,n),r&&o(e,r),u}(n(0).a)},function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=a(t);if(e){var o=a(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}function s(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?u(t):e}function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return l}));var l=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}(a,t);var e,n,r,s=c(a);function a(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=s.call(this,t)).open=e.open.bind(u(e)),e.close=e.close.bind(u(e)),e._handelEscClose=e._handelEscClose.bind(u(e)),e.mobileOpenButton=t.instances.mobileOpenButton,e.mobileCloseButton=t.instances.mobileCloseButton,e.overlay=t.instances.overlay,e}return e=a,(n=[{key:"setListeners",value:function(){this.mobileOpenButton.addEventListener("click",this.open),this.mobileCloseButton.addEventListener("click",this.close),this.overlay.addEventListener("click",this.close),document.addEventListener("keydown",this._handelEscClose)}},{key:"_handelEscClose",value:function(t){"Escape"===t.code&&this.close()}},{key:"open",value:function(){this.show(),this.mobileCloseButton.show(),this.overlay.showAndNoScroll()}},{key:"close",value:function(){this.hide(),this.mobileCloseButton.hide(),this.overlay.hideAndScroll()}}])&&o(e.prototype,n),r&&o(e,r),a}(n(0).a)},function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=a(t);if(e){var o=a(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}function s(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?u(t):e}function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return l}));var l=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}(a,t);var e,n,r,s=c(a);function a(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=s.call(this,t)).pageNoScrollClass=t.pageNoScrollClass,e._handleOnload=e._handleOnload.bind(u(e)),e}return e=a,(n=[{key:"stopScroll",value:function(){this.domElement.classList.add(this.pageNoScrollClass)}},{key:"continueScroll",value:function(){this.domElement.classList.remove(this.pageNoScrollClass)}},{key:"_handleOnload",value:function(){this.domElement.removeAttribute("style","style")}},{key:"setListeners",value:function(){this.domElement.onload=this._handleOnload}}])&&o(e.prototype,n),r&&o(e,r),a}(n(0).a)},function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n.d(e,"a",(function(){return o}));var o=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.options=e}var e,n,o;return e=t,(n=[{key:"getUser",value:function(){return fetch("".concat(this.options.baseUrl,"/users/me"),{method:"GET",credentials:"include",headers:{"Content-Type":"application/json"}}).then((function(t){return t.json().then((function(e){return{status:t.status,data:e}}))})).catch((function(t){return Promise.reject(t)}))}},{key:"signup",value:function(t){var e=t.email,n=t.password,r=t.name;return fetch("".concat(this.options.baseUrl,"/signup"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:n,name:r})}).then((function(t){return t.json().then((function(e){return{status:t.status,data:e}}))})).catch((function(t){return Promise.reject(t)}))}},{key:"login",value:function(t){var e=t.email,n=t.password;return fetch("".concat(this.options.baseUrl,"/signin"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:n})}).then((function(t){return t.json().then((function(e){return{status:t.status,data:e}}))})).catch((function(t){return Promise.reject(t)}))}},{key:"logout",value:function(){return fetch("".concat(this.options.baseUrl,"/logout"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"}}).then((function(t){return t.json().then((function(e){return{status:t.status,data:e}}))})).catch((function(t){return Promise.reject(t)}))}},{key:"getArticles",value:function(){return fetch("".concat(this.options.baseUrl,"/articles"),{method:"GET",credentials:"include",headers:{"Content-Type":"application/json"}}).then((function(t){return t.json().then((function(e){return{status:t.status,data:e}}))})).catch((function(t){return Promise.reject(t)}))}},{key:"createArticle",value:function(t){return fetch("".concat(this.options.baseUrl,"/articles"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({keyword:t.keyword,title:t.title,text:t.text,date:t.date,source:t.source,link:t.link,image:t.image})}).then((function(t){return t.ok?t.json():t.json().then(Promise.reject.bind(Promise))})).catch((function(t){return Promise.reject(t)}))}},{key:"deleteArticle",value:function(t){return fetch("".concat(this.options.baseUrl,"/articles/").concat(t),{method:"DELETE",credentials:"include",headers:{"Content-Type":"application/json"}}).then((function(t){return t.ok?t.json():t.json().then(Promise.reject.bind(Promise))})).catch((function(t){return Promise.reject(t)}))}}])&&r(e.prototype,n),o&&r(e,o),t}()},function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}function s(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return a}));var a=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}(n,t);var e=c(n);function n(){return o(this,n),e.apply(this,arguments)}return n}(n(0).a)},function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=a(t);if(e){var o=a(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}function s(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?u(t):e}function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return l}));var l=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}(a,t);var e,n,r,s=c(a);function a(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=s.call(this,t)).mainApi=t.instances.mainApi,e.logoutButton=t.instances.logoutButton,e.navListElement=t.navListElement,e.logoutButtonTextElement=t.logoutButtonTextElement,e.isLoggedIn=!1,e.userName="",e._logout=e._logout.bind(u(e)),e}return e=a,(n=[{key:"setListeners",value:function(){this.logoutButton.addEventListener("click",this._logout)}},{key:"render",value:function(){var t=this;return this.mainApi.getUser().then((function(e){return 200===e.status?(t._renderLoggedIn(e.data.data.name),Promise.resolve(e.data.data)):("/"!==window.location.pathname&&window.location.replace("/"),t._renderLoggedOut())})).catch((function(t){throw alert("Ошибка: ".concat(t)),new Error(t)}))}},{key:"_renderLoggedIn",value:function(t){this.isLoggedIn=!0,this.navListElement.classList.remove("header__list_state_not-authorized"),this.navListElement.classList.add("header__list_state_authorized"),this.logoutButtonTextElement.textContent=t}},{key:"_renderLoggedOut",value:function(){this.isLoggedIn=!1,this.navListElement.classList.add("header__list_state_not-authorized"),this.navListElement.classList.remove("header__list_state_authorized")}},{key:"_logout",value:function(){var t=this;this.mainApi.logout().then((function(e){if(201===e.status){if("/"!==window.location.pathname)return void window.location.replace("/");t._renderLoggedOut(),window.location.reload()}})).catch((function(t){throw alert("Ошибка: ".concat(t)),new Error(t)}))}}])&&o(e.prototype,n),r&&o(e,r),a}(n(0).a)},function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n.d(e,"a",(function(){return o}));var o=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.domElement=e.domElement,this.mainApi=e.instances.mainApi,this.showMoreButton=e.instances.showMoreButton,this.newsCard=e.instances.newsCard,this.cardListeners=e.cardListeners,this.moreQuantity=e.moreQuantity,this.renderIndex=0,this.articles=[],this.renderedCards=[],this.keyword="",this.keywordArticles=[],this.savedArticles=[],this._renderMoreCards=this._renderMoreCards.bind(this)}var e,n,o;return e=t,(n=[{key:"setListeners",value:function(){this.showMoreButton&&this.showMoreButton.addEventListener("click",this._renderMoreCards)}},{key:"_setCardListeners",value:function(t,e){e.forEach((function(e){t.addEventListener(e.event,e.handler)}))}},{key:"_removeCardListeners",value:function(t,e){e.forEach((function(e){t.removeEventListener(e.event,e.handler)}))}},{key:"setArticles",value:function(t){var e=this,n=t.articles,r=t.keyword;this.clear();var o=n.map((function(t){return e.newsCard.formatNewsObject(t)}));this.articles=o.filter((function(t){return e.newsCard.isCorrectData(t)})),this.keyword=r}},{key:"clear",value:function(){var t=this;for(this.showMoreButton&&this.showMoreButton.hide(),this.renderedCards.length&&this.renderedCards.forEach((function(e){t._removeCardListeners(e,t.cardListeners)})),this.renderedCards=[],this.renderIndex=0;this.domElement.firstChild;)this.domElement.removeChild(this.domElement.lastChild)}},{key:"_renderMoreCards",value:function(){var t=this,e=this.renderIndex,n=this.moreQuantity;if(e+n>=this.articles.length)return this.articles.slice(e,this.articles.length).forEach((function(e){var n="";t.keywordArticles.forEach((function(t){t.link===e.link&&(n=t._id)})),t._renderCard(e,t.keyword,n)})),void this.showMoreButton.hide();this.renderIndex+=n,this.articles.slice(e,this.renderIndex).forEach((function(e){var n="";t.keywordArticles.forEach((function(t){t.link===e.link&&(n=t._id)})),t._renderCard(e,t.keyword,n)})),this.showMoreButton.show()}},{key:"_renderCard",value:function(t,e,n){var r=this.newsCard.getTemplate({data:t,keyword:e,isAuthorized:this.isAuthorized,id:n});this.domElement.append(r),this.isAuthorized&&(this._setCardListeners(r,this.cardListeners),this.renderedCards.push(r))}}])&&r(e.prototype,n),o&&r(e,o),t}()},function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n.d(e,"a",(function(){return o}));var o=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.mainApi=e.instances.mainApi,this.dateToString=e.dateToString}var e,n,o;return e=t,(n=[{key:"isCorrectData",value:function(t){return!!(t.link&&t.image&&t.title&&t.text&&t.date&&t.source)}},{key:"formatNewsObject",value:function(t){return{title:t.title,text:t.description,date:this.dateToString(t.publishedAt),source:t.source.name,link:t.url,image:t.urlToImage}}}])&&r(e.prototype,n),o&&r(e,o),t}()},,function(t,e,n){},,function(t,e,n){"use strict";n.r(e);n(13);var r=n(2),o=n(3),i=n(4),c=n(1),s=n(5),u=n(6),a=n(7),l=n(8),f=n(9);function d(t){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function y(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var c,s=t[Symbol.iterator]();!(r=(c=s.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function b(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=w(t);if(e){var o=w(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v(this,n)}}function v(t,e){return!e||"object"!==d(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function w(t){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var _=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}(i,t);var e,n,r,o=b(i);function i(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(e=o.call(this,t)).mainApi=t.instances.mainApi,e.logoutButtonTextElement=t.logoutButtonTextElement,e.titleElement=t.titleElement,e.subtitleElement=t.subtitleElement,e.subtitleIntroElement=t.subtitleIntroElement,e.firstKeywordElement=t.firstKeywordElement,e.firstKeywordAfterElement=t.firstKeywordAfterElement,e.secondKeywordElement=t.secondKeywordElement,e.secondKeywordAfterElement=t.secondKeywordAfterElement,e.thirdKeywordElement=t.thirdKeywordElement,e.subtitleHiddenClass=t.subtitleHiddenClass,e.userName="",e.savedArticles=[],e.uniqueKeywordsQuantity=0,e}return e=i,(n=[{key:"addUserName",value:function(t){this.userName=t}},{key:"reverseSavedArticles",value:function(){this.savedArticles=this.savedArticles.reverse()}},{key:"render",value:function(){var t=this;this.mainApi.getArticles().then((function(e){if(200===e.status){t._reset(),t.savedArticles=e.data.data,t.reverseSavedArticles();var n=t.savedArticles.map((function(t){return t.keyword})),r=t._getUniqueKeywords(n),o=n.length;t._renderGreeting(t.userName,o),r.length&&t._renderKeywords(r)}})).catch((function(t){throw alert("Ошибка: ".concat(t)),new Error(t)}))}},{key:"_reset",value:function(){this.subtitleElement.classList.remove(this.subtitleHiddenClass),this.titleElement.textContent="",this.firstKeywordElement.textContent="",this.firstKeywordAfterElement.textContent="",this.secondKeywordElement.textContent="",this.secondKeywordAfterElement.textContent="",this.thirdKeywordElement.textContent=""}},{key:"_renderGreeting",value:function(t,e){var n=e%100;if(0===e)return this.titleElement.textContent="".concat(t,", у вас нет сохранённых статей"),void this.subtitleElement.classList.add(this.subtitleHiddenClass);n>20&&(n%=10),0===n||n>=5?this.titleElement.textContent="".concat(t,", у вас ").concat(e," сохранённых статей"):1===n?this.titleElement.textContent="".concat(t,", у вас ").concat(e," сохранённая статья"):(n>1||n<5)&&(this.titleElement.textContent="".concat(t,", у вас ").concat(e," сохранённые статьи"))}},{key:"_renderKeywords",value:function(t){var e=t.length;if(1!==e){if(2===e){var n=y(t,2);return this.firstKeywordElement.textContent=n[0],this.secondKeywordElement.textContent=n[1],this.firstKeywordElement.textContent+=" ",this.firstKeywordAfterElement.textContent="и ",void(this.thirdKeywordElement.textContent="")}if(3===e){var r=y(t,3);this.firstKeywordElement.textContent=r[0],this.secondKeywordElement.textContent=r[1],this.thirdKeywordElement.textContent=r[2]}else{var o=y(t,2);this.firstKeywordElement.textContent=o[0],this.secondKeywordElement.textContent=o[1];var i=[this.firstKeywordElement.textContent,this.secondKeywordElement.textContent],c=e-i.length;i=y(t,1)[0],this.thirdKeywordElement.textContent="".concat(c," другим")}this.secondKeywordElement.textContent+=" ",this.firstKeywordAfterElement.textContent=", ",this.secondKeywordAfterElement.textContent="и "}else{this.subtitleIntroElement.textContent="По ключевому слову: ";var s=y(t,1);this.firstKeywordElement.textContent=s[0]}}},{key:"_getUniqueKeywords",value:function(t){return t.filter((function(t,e,n){return n.indexOf(t)===e}))}}])&&p(e.prototype,n),r&&p(e,r),i}(n(0).a);function g(t){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function E(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function S(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function C(t,e){return(C=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function O(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=k(t);if(e){var o=k(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return j(this,n)}}function j(t,e){return!e||"object"!==g(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function k(t){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var P=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&C(t,e)}(i,t);var e,n,r,o=O(i);function i(){return E(this,i),o.apply(this,arguments)}return e=i,(n=[{key:"renderSavedCards",value:function(){var t=this;this.clear(),this.mainApi.getArticles().then((function(e){200===e.status?(t.isAuthorized=!0,t.savedArticles=e.data.data,t.reverseSavedArticles(),t.savedArticles.forEach((function(e){t._renderCard(e,e.keyword,e._id)}))):console.log(e)})).catch((function(t){throw alert("Ошибка: ".concat(t)),new Error(t)}))}},{key:"reverseSavedArticles",value:function(){this.savedArticles=this.savedArticles.reverse()}}])&&S(e.prototype,n),r&&S(e,r),i}(n(10).a);function x(t){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function A(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function L(t,e){return(L=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function R(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=q(t);if(e){var o=q(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return T(this,n)}}function T(t,e){return!e||"object"!==x(e)&&"function"!=typeof e?K(t):e}function K(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function q(t){return(q=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var B=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&L(t,e)}(i,t);var e,n,r,o=R(i);function i(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(e=o.call(this,t)).savedNewsTitle=t.instances.savedNewsTitle,e.handleRemove=e.handleRemove.bind(K(e)),e}return e=i,(n=[{key:"getTemplate",value:function(t){var e=t.data,n=t.keyword,r=t.id,o=document.createElement("div");o.classList.add("card"),o.insertAdjacentHTML("afterbegin",'\n      <a href="" class="card__link" target="_blank"></a>\n      <img src="" alt="Иллюстрация к новости" class="card__image" />\n      <button class="card__icon card__icon_type_tag" type="button"></button>\n      <button class="card__icon card__icon_type_delete" type="button"></button>\n      <button class="card__icon card__icon_type_tip" type="button"></button>\n      <div class="card__content">\n        <time datetime="" class="card__date"></time>\n        <h3 class="card__title"></h3>\n        <p class="card__intro"></p>\n      </div>\n      <span class="card__source"></span>\n      ');var i=o.querySelector(".card__link"),c=o.querySelector(".card__image"),s=o.querySelector(".card__title"),u=o.querySelector(".card__date"),a=o.querySelector(".card__intro"),l=o.querySelector(".card__source"),f=o.querySelector(".card__icon_type_tip"),d=o.querySelector(".card__icon_type_tag");return i.setAttribute("href",e.link),c.setAttribute("src",e.image),s.textContent=e.title,u.setAttribute("datetime",e.date),u.textContent=e.date,a.textContent=e.text,l.textContent=e.source,f.textContent="Убрать из сохранённых",d.textContent=n,o.setAttribute("id",r),o}},{key:"handleRemove",value:function(t){var e=this;if(t.target.classList.contains("card__icon_type_delete")){var n=t.target.closest(".card");this.mainApi.deleteArticle(n.id).then((function(t){t&&(e.savedNewsTitle.render(),n.removeEventListener("click",e.handleRemove),n.remove())})).catch((function(t){throw alert("Ошибка: ".concat(t)),new Error(t)}))}}}])&&A(e.prototype,n),r&&A(e,r),i}(n(11).a),D=document.querySelector(".root"),N=document.querySelector(".overlay"),I=document.querySelector(".grid"),M=document.querySelector("#mobile-menu-nav"),U=document.querySelector("#mobile-open-button"),z=document.querySelector("#mobile-close-button"),H=document.querySelector(".header__list"),G=document.querySelector("#logout-header-button"),Q=G.querySelector(".header__button-text"),J=document.querySelector(".results"),F=document.querySelector(".articles-heading"),Y=F.querySelector(".articles-heading__title"),$=F.querySelector(".articles-heading__subtitle"),V=F.querySelector("#keyword-title-intro"),W=F.querySelector("#first-keyword"),X=F.querySelector("#first-keyword-after"),Z=F.querySelector("#second-keyword"),tt=F.querySelector("#second-keyword-after"),et=F.querySelector("#third-keyword"),nt=new c.a({domElement:U,hiddenClass:"header__burger_hidden"}),rt=new c.a({domElement:z,hiddenClass:"header__burger-close_hidden"}),ot=new c.a({domElement:G}),it=new l.a({domElement:J,visibleClass:"results_visible"}),ct=new a.a(r.a),st=new u.a({domElement:D,hiddenClass:"root_hidden",pageNoScrollClass:"root_no-scroll"}),ut=new i.a({domElement:N,visibleClass:"overlay_visible",instances:{page:st}}),at=new s.a({domElement:M,visibleClass:"header__nav_mobile-opened",instances:{overlay:ut,mobileCloseButton:rt,mobileOpenButton:nt}}),lt=new f.a({instances:{mainApi:ct,logoutButton:ot},navListElement:H,logoutButtonTextElement:Q}),ft=new _({instances:{domElement:F,mainApi:ct},titleElement:Y,subtitleElement:$,subtitleIntroElement:V,firstKeywordElement:W,firstKeywordAfterElement:X,secondKeywordElement:Z,secondKeywordAfterElement:tt,thirdKeywordElement:et,subtitleHiddenClass:"articles-heading__subtitle_hidden"}),dt=new B({instances:{mainApi:ct,savedNewsTitle:ft},dateToString:o.a}),yt=new P({domElement:I,instances:{mainApi:ct,newsCard:dt,savedNewsTitle:ft},cardListeners:[{event:"click",handler:dt.handleRemove}]});st.setListeners(),at.setListeners(),yt.setListeners(),lt.setListeners(),lt.render().then((function(t){ft.addUserName(t.name),ft.render(),it.show(),yt.renderSavedCards()})).catch((function(t){return alert(t)}))}]);