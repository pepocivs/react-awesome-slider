!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("prop-types")):"function"==typeof define&&define.amd?define(["react","prop-types"],t):"object"==typeof exports?exports["react-awesome-button"]=t(require("react"),require("prop-types")):e["react-awesome-button"]=t(e.React,e.PropTypes)}("undefined"!=typeof self?self:this,function(__WEBPACK_EXTERNAL_MODULE_0__,__WEBPACK_EXTERNAL_MODULE_1__){return function(e){function t(s){if(n[s])return n[s].exports;var r=n[s]={i:s,l:!1,exports:{}};return e[s].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,s){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:s})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(e,t){e.exports=__WEBPACK_EXTERNAL_MODULE_0__},function(e,t){e.exports=__WEBPACK_EXTERNAL_MODULE_1__},function(e,t,n){"use strict";function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"&";return Object.entries(e).map(function(e){var t=i(e,2);return t[0]+"="+t[1]}).join(t)}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];if(!t)return e.join(" ").trim();for(var n=[],s=e.length;s--;)t[e[s]]&&n.push(t[e[s]]);return n}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];return t?t[e]||e:e}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){var n=[],s=!0,r=!1,o=void 0;try{for(var a,i=e[Symbol.iterator]();!(s=(a=i.next()).done)&&(n.push(a.value),!t||n.length!==t);s=!0);}catch(e){r=!0,o=e}finally{try{!s&&i.return&&i.return()}finally{if(r)throw o}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}();t.serialize=r,t.classToModules=o,t.getClassName=a;t.MediaLoader=function(){function e(){s(this,e),"undefined"!=typeof window&&(this.image=new Image,this.resolve=null,this.video=document.createElement("video"),this.events())}return l(e,[{key:"events",value:function(){var e=this;this.video.addEventListener("loadeddata",function(){return e.resolve&&e.resolve(!0)}),this.video.addEventListener("loadeddata",function(){return e.resolve&&e.resolve(!1)}),this.image.onload=function(){return e.resolve&&e.resolve(!0)},this.image.onerror=function(){return e.resolve&&e.resolve(!1)}}},{key:"load",value:function(e){var t=this;return new Promise(function(n){e||n(!0),t.resolve=n,t.loading=!0,t.ended=!1,e.toLowerCase().match(/\.(mp4|webm)/i)&&t.video.setAttribute("src",e),e.toLowerCase().match(/\.(png|jp(e)?g|gif|webp)/i)&&(t.image.src=e,(t.image.width>0||t.image.height>0)&&n(!0))})}}]),e}()},function(e,t,n){e.exports=n(4)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(5),r=function(e){return e&&e.__esModule?e:{default:e}}(s);t.default=r.default},function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}(),c=n(0),u=s(c),d=n(1),f=s(d),m=n(6),p=n(2),h=n(7),v=n(8),b=s(v),_=n(9),y=s(_),x=n(10),g=s(x),N="aws-sld",w=new p.MediaLoader,E=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.clickNext=function(){n.goTo({index:n.index+1,direction:!0})},n.clickPrev=function(){n.goTo({index:n.index-1,direction:!1})},n.touchStart=function(e){if(!n.animating&&null!==n.index){var t=e.nativeEvent;n.touchStartPoint=t.touches[0].clientX}},n.touchMove=function(e){if(!n.animating&&n.touchStartPoint){var t=e.nativeEvent,s=t.touches[0].clientX-n.touchStartPoint,r=n[n.active],o=n[n.loader],a=!(s>0),i=Math.abs(s);if(!1===n.touchEnabled)return void(i>20&&(n.touchEnabled=!0,n.touchStartPoint=t.touches[0].clientX));i>=10&&(!1===n.loading?n.goTo({index:a?n.index+1:n.index-1,direction:a,touch:!0}):!0===n.direction?(s+=10,Math.abs(s)>r.offsetWidth?s=-r.offsetWidth:s>0&&(s=0),r.style.transform="translate3d("+s+"px, 0, 0)",o.style.transform="translate3d(calc(100% + "+s+"px), 0, 0)"):(s-=10,Math.abs(s)>r.offsetWidth?s=r.offsetWidth:s<0&&(s=0),r.style.transform="translate3d("+s+"px, 0, 0)",o.style.transform="translate3d(calc(-100% + "+s+"px), 0, 0)"))}},n.touchEnd=function(){!n.animating&&n.touchStartPoint&&n.loading&&(n.touchStartPoint=null,n.animating=!0,n.touchEnabled=!1,n.animateMobileEnd(function(){n.index=n.nextIndex,n.setState({index:n.index}),n.props.onTransitionEnd&&n.props.onTransitionEnd({currentIndex:n.index,currentSlide:n[n.active],element:n.slider}),n.animating=!1,n.loading=!1,n.unchargeIndex()}))},n.bulletClick=function(e){var t=e.currentTarget,s=parseInt(t.getAttribute("data-index"),10);n.goTo({index:s,direction:!(n.index>s)},function(){(0,m.onceNextCssLayout)().then(function(){t.classList.add(n.classNames.bulletsLoading)})})},n.rootElement=e.rootElement||N,n.boxA=null,n.boxB=null,n.loaded=[],n.active="boxA",n.loader="boxB",n.nextIndex=null,n.loading=!1,n.media=null,n.started=!1,n.touchEnabled=!1,n.checkChildren(e),n.setupClassNames(e.cssModule),e.startupScreen&&!e.selected?(n.index=null,n.state={index:null,boxA:{className:n.classNames.startUp,children:e.startupScreen},boxB:null}):(n.started=!0,n.index=n.props.selected,n.state={index:n.index,boxA:n.media[n.index]||null,boxB:null}),n}return a(t,e),l(t,[{key:"componentDidMount",value:function(){this.boxA.classList.add(this.classNames.active),this.props.startupScreen&&!this.props.selected&&(this.buttons.element.classList.add(this.classNames.controlsActive),!0===this.props.startup&&this.startup()),this.props.onFirstMount&&this.props.onFirstMount({currentIndex:this.index,currentSlide:this[this.active],element:this.slider})}},{key:"componentWillReceiveProps",value:function(e){if(this.checkChildren(e),this.setupClassNames(e.cssModule),e.name!==this.props.name)return void this.resetSlider(e.selected);if(!0===e.startup&&!1===this.started)return void this.startup();if(e.selected!==this.props.selected){var t=e.selected;this.goTo({index:t,direction:!(this.index>t)})}}},{key:"getRootClassName",value:function(){var e=this.props,t=e.fillParent,n=e.infinite,s=e.className,r=e.organicArrows,o=e.disabled,a=e.cssModule;return(0,h.getRootClassName)({cssModule:a,disabled:o,organicArrows:r,className:s,infinite:n,fillParent:t,rootElement:this.rootElement,current:this.state.index,total:this.media.length})}},{key:"getBar",value:function(){var e=document.createElement("div");return e.className=this.classNames.bar,e}},{key:"setupClassNames",value:function(e){this.classNames=(0,h.setupClassNames)(this.rootElement,e)}},{key:"startup",value:function(){var e=this;this.started=!0,setTimeout(function(){(0,m.onceNextCssLayout)().then(function(){e.goTo({index:0,direction:!0,touch:!1})})},125)}},{key:"resetSlider",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.index=t,this.setState({index:t,boxA:this.media[t],boxB:this.media[t]},function(){e.props.onResetSlider&&e.props.onResetSlider({currentIndex:e.index,currentSlide:e[e.active],element:e.slider})})}},{key:"checkChildren",value:function(e){e.children?e.children===this.props.children&&this.media||(this.media=(0,h.transformChildren)(e.children)):e.media!==this.props.media&&(this.media=e.media)}},{key:"loadContent",value:function(e,t){var n=this;return new Promise(function(s){if(n.loaded.includes(t)||!t)return void s(null);var r=n.getBar();e.appendChild(r),(0,m.onceNextCssLayout)().then(function(){(0,m.onceNextCssLayout)().then(function(){r.classList.add(n.classNames.barActive)}),w.load(t).then(function(){n.loaded.push(t),(0,m.onceNextCssLayout)().then(function(){(0,m.onceTransitionEnd)(r).then(function(){s(r)}),r.classList.add(n.classNames.barEnd)})})})})}},{key:"startAnimationMobile",value:function(){var e=this.direction,t=this[this.active],n=this[this.loader],s=e?this.classNames.contentMoveRight:this.classNames.contentMoveLeft,r=e?this.classNames.contentMoveLeft:this.classNames.contentMoveRight;this.props.onTransitionStart&&this.props.onTransitionStart({currentIndex:this.index,currentSlide:this[this.active],nextSlide:this[this.loader],nextIndex:this.nextIndex,element:this.slider});var o=t.querySelector("."+this.classNames.content);o.classList.add(r),o.classList.add(this.classNames.contentExit);var a=n.querySelector("."+this.classNames.content);a.classList.add(s),a.classList.add(this.classNames.contentStatic)}},{key:"animateMobileEnd",value:function(e){var t=this,n=this.direction,s=this[this.active],r=this[this.loader],o=n?this.classNames.moveLeft:this.classNames.moveRight,a=n?this.classNames.contentMoveRight:this.classNames.contentMoveLeft,i=n?this.classNames.contentMoveLeft:this.classNames.contentMoveRight,l=r.querySelector("."+this.classNames.content),c=s.querySelector("."+this.classNames.content);l.classList.remove(this.classNames.contentStatic),r.classList.add(this.classNames.animatedMobile),s.classList.add(this.classNames.animatedMobile),(0,m.onceNextCssLayout)().then(function(){r.style.transform="translate3d(0, 0, 0)",s.style.transform="translate3d("+(t.direction?"-":"")+"100%, 0, 0)",(0,m.onceTransitionEnd)(s).then(function(){t.loading&&(r.classList.add(t.classNames.active),s.classList.remove(t.classNames.active),s.classList.remove(o),r.classList.remove(t.classNames.animatedMobile),s.classList.remove(t.classNames.animatedMobile),c.classList.remove(i),c.classList.remove(t.classNames.contentExit),l.classList.remove(a),setTimeout(function(){(0,m.onceNextCssLayout)().then(function(){t.buttons.element.classList.remove(t.classNames.controlsActive)})},t.props.controlsReturnDelay),t.activeArrow&&(t.activeArrow.classList.remove(t.activeArrowClass),t.activeArrow=null,t.activeArrowClass=null),t.active="boxA"===t.active?"boxB":"boxA",t.loader="boxA"===t.active?"boxB":"boxA",e&&e())})})}},{key:"startAnimation",value:function(e,t,n){var s=this,r=this.props.transitionDelay,o=this[this.active],a=this[this.loader],i=e?this.classNames.moveRight:this.classNames.moveLeft,l=e?this.classNames.moveLeft:this.classNames.moveRight,c=e?this.classNames.contentMoveRight:this.classNames.contentMoveLeft,u=e?this.classNames.contentMoveLeft:this.classNames.contentMoveRight,d=o.querySelector("."+this.classNames.content),f=a.querySelector("."+this.classNames.content);o.style.removeProperty("transform"),a.style.removeProperty("transform"),this.props.onTransitionStart&&this.props.onTransitionStart({currentIndex:this.index,currentSlide:this[this.active],nextSlide:this[this.loader],nextIndex:this.nextIndex,element:this.slider}),this.loadContent(o,t.url).then(function(e){d.classList.add(u),d.classList.add(s.classNames.contentExit),f.classList.add(c),f.classList.add(s.classNames.contentStatic),setTimeout(function(){(0,m.onceNextCssLayout)().then(function(){a.classList.add(i),(0,m.onceNextCssLayout)().then(function(){a.classList.add(s.classNames.animated),o.classList.add(s.classNames.animated),f.classList.remove(s.classNames.contentStatic),(0,m.onceNextCssLayout)().then(function(){a.classList.remove(i),o.classList.add(s.classNames.exit),o.classList.add(l),(0,m.onceTransitionEnd)(o).then(function(){a.classList.add(s.classNames.active),o.classList.remove(s.classNames.active),o.classList.remove(l),o.classList.remove(s.classNames.exit),a.classList.remove(s.classNames.animated),o.classList.remove(s.classNames.animated),d.classList.remove(u),d.classList.remove(s.classNames.contentExit),f.classList.remove(c),e&&o.removeChild(e),setTimeout(function(){(0,m.onceNextCssLayout)().then(function(){s.buttons.element.classList.remove(s.classNames.controlsActive)})},s.props.controlsReturnDelay),s.activeArrow&&(0,m.onceNextCssLayout)().then(function(){s.activeArrow.classList.remove(s.activeArrowClass),s.activeArrow=null,s.activeArrowClass=null}),s.active="boxA"===s.active?"boxB":"boxA",s.loader="boxA"===s.active?"boxB":"boxA",n&&n()})})})})},r)})}},{key:"goTo",value:function(e){var t=this,n=e.index,s=e.direction,r=e.touch,o=void 0!==r&&r;!0!==this.loading&&n!==this.index&&(this.loading=!0,this.direction=s,!1===o?this.activateArrows(s,function(){t.chargeIndex(n,function(e){t.renderedLoader=!0,t.startAnimation(s,e,function(){t.index=t.nextIndex,t.setState({index:t.index}),t.props.onTransitionEnd&&t.props.onTransitionEnd({currentIndex:t.index,currentSlide:t[t.active],element:t.slider}),(0,m.onceNextCssLayout)().then(function(){t.loading=!1})})})}):this.chargeIndex(n,function(){t.activateArrows(s),t.startAnimationMobile()}))}},{key:"chargeIndex",value:function(e,t){this.nextIndex=e>this.media.length-1?0:e<0?this.media.length-1:e;var n={},s=this.media[this.nextIndex];n[this.loader]=i({loader:!0},s),this.setState(n,function(){t(s)})}},{key:"unchargeIndex",value:function(){var e={};e[this.loader]=null,this.setState(e,function(){})}},{key:"activateArrows",value:function(e,t){var n=e?this.buttons.next:this.buttons.prev,s=e?"right":"left";if(this.activeArrow=n.querySelector("span"),!this.activeArrow)return void t();this.activeArrowClass=(0,p.getClassName)(this.rootElement+"__controls__arrow-"+s+"--active",this.props.cssModule),(0,m.onceTransitionEnd)(this.activeArrow,{tolerance:null===this.index?0:2}).then(function(){t&&t()}),this.buttons.element.classList.add(this.classNames.controlsActive),this.activeArrow.classList.add(this.activeArrowClass)}},{key:"renderBox",value:function(e){var t=this;return u.default.createElement("div",{ref:function(n){t["box"+e]=n},className:this.classNames.box,onTouchStart:this.touchStart,onTouchMove:this.touchMove,onTouchEnd:this.touchEnd},this.state["box"+e]&&u.default.createElement(g.default,{media:this.state["box"+e],className:this.classNames.content}))}},{key:"render",value:function(){var e=this,t=this.props,n=t.cssModule,s=t.organicArrows,r=t.bullets,o=t.style,a=this.rootElement;return u.default.createElement("div",{ref:function(t){e.slider=t},className:this.getRootClassName(),style:o},u.default.createElement("div",{ref:function(t){e.wrapper=t},className:this.classNames.wrapper},u.default.createElement("div",{ref:function(t){e.container=t},className:this.classNames.container},this.renderBox("A"),this.renderBox("B")),u.default.createElement(y.default,{rootElement:a,cssModule:n,onMount:function(t){e.buttons=t},onNext:this.clickNext,onPrev:this.clickPrev,organicArrows:s})),r&&u.default.createElement(b.default,{cssModule:n,rootElement:a,media:this.media,selected:this.state.index,onClick:function(t){e.goTo(t)}}))}}]),t}(u.default.Component);E.propTypes={startup:f.default.bool,children:f.default.node,className:f.default.string,controlsReturnDelay:f.default.number,cssModule:f.default.object,disabled:f.default.bool,bullets:f.default.bool,fillParent:f.default.bool,media:f.default.array,name:f.default.string,onFirstMount:f.default.func,onResetSlider:f.default.func,onTransitionEnd:f.default.func,onTransitionStart:f.default.func,organicArrows:f.default.bool,rootElement:f.default.string,selected:f.default.number,infinite:f.default.bool,startupScreen:f.default.object,style:f.default.object,transitionDelay:f.default.number},E.defaultProps={startup:!0,children:null,className:null,controlsReturnDelay:0,cssModule:null,disabled:!1,infinite:!0,media:[],bullets:!0,fillParent:!1,name:"awesome-slider",onFirstMount:null,onResetSlider:null,onTransitionEnd:null,onTransitionStart:null,organicArrows:!0,rootElement:N,selected:0,startupScreen:null,style:{},transitionDelay:0},t.default=E},function(module,exports,__webpack_require__){!function(e,t){module.exports=t()}(window,function(){return function(e){function t(s){if(n[s])return n[s].exports;var r=n[s]={i:s,l:!1,exports:{}};return e[s].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,s){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:s})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(t.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(s,r,function(t){return e[t]}.bind(null,r));return s},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s="./src/index.js")}({"./src/index.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCssEndEvent", function() { return setCssEndEvent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beforeCssLayout", function() { return beforeCssLayout; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beforeNextCssLayout", function() { return beforeNextCssLayout; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beforeFutureCssLayout", function() { return beforeFutureCssLayout; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onceNextCssLayout", function() { return onceNextCssLayout; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onceTransitionEnd", function() { return onceTransitionEnd; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onceAnimationEnd", function() { return onceAnimationEnd; });\nfunction recursiveAnimationFrame(frames, callback) {\n  if (frames && Number.isInteger(frames) && frames > 0) {\n    window.requestAnimationFrame(() => {\n      recursiveAnimationFrame(frames - 1, callback);\n    });\n    return;\n  }\n  callback();\n}\n\nfunction setCssEndEvent(element, type, { tolerance = 0, propertyName } = {}) {\n  return new Promise(resolve => {\n    if (!element) {\n      resolve(false);\n      return;\n    }\n    let eventName = null;\n    const capitalized = type.charAt(0).toUpperCase() + type.slice(1);\n    let run = 0;\n    function end(event) {\n      const target = event.srcElement || event.target;\n      if (target === element) {\n        if (run >= tolerance) {\n          if (propertyName && propertyName !== event.propertyName) {\n            return;\n          }\n          element.removeEventListener(eventName, end);\n          resolve(event);\n        }\n        run += 1;\n      }\n    }\n    if (element.style[`Webkit${capitalized}`] !== undefined) {\n      eventName = `webkit${capitalized}End`;\n    }\n    if (element.style.OTransition !== undefined) {\n      eventName = `o${type}End`;\n    }\n    if (element.style[type] !== undefined) {\n      eventName = `${type}end`;\n    }\n    element.addEventListener(eventName, end);\n  });\n}\n\nfunction beforeCssLayout(callback) {\n  window.requestAnimationFrame(callback);\n}\n\nfunction beforeNextCssLayout(callback) {\n  window.requestAnimationFrame(() => {\n    window.requestAnimationFrame(callback);\n  });\n}\n\nfunction beforeFutureCssLayout(frames, callback) {\n  recursiveAnimationFrame(frames + 1, callback);\n}\n\nfunction onceNextCssLayout() {\n  return new Promise(resolve => {\n    beforeNextCssLayout(resolve);\n  });\n}\n\nfunction onceTransitionEnd(element, options = {}) {\n  return new Promise(resolve => {\n    setCssEndEvent(element, \'transition\', options).then(resolve);\n  });\n}\n\nfunction onceAnimationEnd(element, options = {}) {\n  return new Promise(resolve => {\n    setCssEndEvent(element, \'animation\', options).then(resolve);\n  });\n}\n\n//# sourceURL=webpack://wac/./src/index.js?')}})})},function(e,t,n){"use strict";function s(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function r(e){var t=e.rootElement,n=e.cssModule,r=e.disabled,o=e.organicArrows,a=e.className,i=e.total,c=e.current,u=e.infinite,d=e.fillParent,f=[t];if(!0===o&&f.push(t+"--organic-arrows"),!0===r&&f.push(t+"--disabled"),d&&f.push(t+"--fill-parent"),!1===u&&(0===c&&f.push(t+"--first"),c===i-1&&f.push(t+"--last")),n&&n[t]&&(f=(0,l.classToModules)(f,n)),a){var m;(m=f).push.apply(m,s(a.split(" ")))}return f.join(" ").trim().replace(/[\s]+/gi," ")}function o(e){var t=[];return e.forEach(function(e){var n=i({},e.props);e.props["data-src"]&&(n.url=e.props["data-src"]),t.push(n)}),t}function a(e,t){return{boxA:(0,l.getClassName)(e+"__boxA",t),boxB:(0,l.getClassName)(e+"__boxB",t),box:(0,l.getClassName)(e+"__box",t),container:(0,l.getClassName)(e+"__container",t),wrapper:(0,l.getClassName)(e+"__wrapper",t),bar:(0,l.getClassName)(e+"__bar",t),barActive:(0,l.getClassName)(e+"__bar--active",t),barEnd:(0,l.getClassName)(e+"__bar--end",t),content:(0,l.getClassName)(e+"__content",t),contentStatic:(0,l.getClassName)(e+"__content--static",t),contentMoveLeft:(0,l.getClassName)(e+"__content--moveLeft",t),contentMoveRight:(0,l.getClassName)(e+"__content--moveRight",t),controlsActive:(0,l.getClassName)(e+"__controls--active",t),animated:(0,l.getClassName)(e+"--animated",t),animatedMobile:(0,l.getClassName)(e+"--animated-mobile",t),contentExit:(0,l.getClassName)(e+"__content--exit",t),exit:(0,l.getClassName)(e+"--exit",t),active:(0,l.getClassName)(e+"--active",t),moveLeft:(0,l.getClassName)(e+"--moveLeft",t),moveRight:(0,l.getClassName)(e+"--moveRight",t),startUp:(0,l.getClassName)(e+"__startUp",t),bulletsLoading:(0,l.getClassName)(e+"__bullets--loading",t)}}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e};t.getRootClassName=r,t.transformChildren=o,t.setupClassNames=a;var l=n(2)},function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}(),l=n(0),c=s(l),u=n(1),d=s(u),f=n(2),m=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.bulletClick=function(e){var t=e.currentTarget;t.classList.add((0,f.getClassName)(n.rootElement+"__bullets--loading",n.props.cssModule));var s=parseInt(t.getAttribute("data-index"),10),r=!(n.props.selected>s);n.props.onClick({index:s,direction:r})},n.rootElement=e.rootElement,n}return a(t,e),i(t,[{key:"renderBullets",value:function(){var e=this,t=this.props,n=t.cssModule,s=t.selected;return this.props.media.map(function(t,r){var o=r===s?(0,f.getClassName)(e.rootElement+"__bullets--active",n):null;return c.default.createElement("button",{key:"bullet-"+r,"data-index":r,onClick:e.bulletClick,className:o},r)})}},{key:"render",value:function(){var e=this.props,t=e.cssModule,n=e.rootElement;return c.default.createElement("nav",{className:(0,f.getClassName)(n+"__bullets",t)},this.renderBullets())}}]),t}(c.default.Component);m.propTypes={cssModule:d.default.object,rootElement:d.default.string.isRequired,media:d.default.array.isRequired,onClick:d.default.func.isRequired,selected:d.default.number},m.defaultProps={cssModule:null,selected:0},t.default=m},function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}(),l=n(0),c=s(l),u=n(1),d=s(u),f=n(2),m=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"componentDidMount",value:function(){this.props.onMount({element:this.controls,next:this.next,prev:this.prev})}},{key:"render",value:function(){var e=this,t=this.props,n=t.rootElement,s=t.cssModule,r=t.organicArrows,o=t.onNext,a=t.onPrev;return c.default.createElement("div",{ref:function(t){e.controls=t},className:(0,f.getClassName)(n+"__controls",s)},c.default.createElement("button",{ref:function(t){e.next=t},className:(0,f.getClassName)(n+"__next",s),onClick:o},r&&c.default.createElement("span",{className:(0,f.getClassName)(n+"__controls__arrow-right",s)})),c.default.createElement("button",{ref:function(t){e.prev=t},className:(0,f.getClassName)(n+"__prev",s),onClick:a},r&&c.default.createElement("span",{className:(0,f.getClassName)(n+"__controls__arrow-left",s)})))}}]),t}(c.default.Component);m.propTypes={cssModule:d.default.object,rootElement:d.default.string.isRequired,onMount:d.default.func.isRequired,onNext:d.default.func.isRequired,onPrev:d.default.func.isRequired,organicArrows:d.default.bool},m.defaultProps={cssModule:null,organicArrows:!0},t.default=m},function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}(),l=n(0),c=s(l),u=n(1),d=s(u),f=function(e){function t(){var e,n,s,a;r(this,t);for(var i=arguments.length,l=Array(i),c=0;c<i;c++)l[c]=arguments[c];return n=s=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),s.state={},a=n,o(s,a)}return a(t,e),i(t,[{key:"render",value:function(){var e=this.props,t=e.media,n=e.className,s=null,r=null;return t.url&&(t.url.toLowerCase().match(/gif|jp(e)?g|png|webp/)&&(s=c.default.createElement("img",{alt:t.alt||t.title||null,src:t.url}),r=c.default.createElement("img",{className:"blured",alt:t.alt||t.title||null,src:t.url})),t.url.toLowerCase().match(/mp4/)&&(s=c.default.createElement("video",{title:t.title,src:t.url,type:"video/mp4",controls:!0}))),c.default.createElement("div",{className:n,style:t.style||null},r,s,t.children&&c.default.createElement("div",{className:t.className||null},t.children))}}]),t}(c.default.Component);f.propTypes={media:d.default.object.isRequired,className:d.default.string.isRequired},t.default=f}])});