"use strict";(self.webpackChunkonsenui_v2_react_splitter=self.webpackChunkonsenui_v2_react_splitter||[]).push([[524],{531:(e,t,n)=>{var r=n(645),o=n(540),i=n(961),u=n(713),c=n.n(u),l=n(182);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,s(r.key),r)}}function s(e){var t=function(e,t){if("object"!=a(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==a(t)?t:String(t)}function p(e,t,n){return t=b(t),function(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,y()?Reflect.construct(t,n||[],b(e).constructor):t.apply(e,n))}function y(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(y=function(){return!!e})()}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}function m(e,t){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},m(e,t)}var h=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=p(this,t,[e])).state={isOpen:!1},n}var n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(t,e),n=t,(r=[{key:"show",value:function(){this.setState({isOpen:!0})}},{key:"hide",value:function(){this.setState({isOpen:!1})}},{key:"render",value:function(){return o.createElement(l.Splitter,null,o.createElement(l.SplitterSide,{side:"left",collapse:!0,isOpen:this.state.isOpen,onClose:this.hide.bind(this),swipeable:!0},o.createElement(l.Page,null,"Menu content")),o.createElement(l.SplitterContent,null,o.createElement(l.Page,null,o.createElement(l.Button,{onClick:this.show.bind(this)},"Open"))))}}])&&f(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}(o.Component);n(343),n(220),c().platform.isIPhoneX()&&(document.documentElement.setAttribute("onsflag-iphonex-portrait",""),document.documentElement.setAttribute("onsflag-iphonex-landscape",""));var d=document.getElementById("app");i.render(o.createElement(r.RT,null,o.createElement(h,null)),d)}},e=>{e.O(0,[939],(()=>(531,e(e.s=531)))),e.O()}]);