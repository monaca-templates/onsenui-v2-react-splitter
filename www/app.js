(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{15:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=l(n(0)),u=(l(n(1)),n(14));function l(e){return e&&e.__esModule?e:{default:e}}var a=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={isOpen:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.default.Component),o(t,[{key:"show",value:function(){this.setState({isOpen:!0})}},{key:"hide",value:function(){this.setState({isOpen:!1})}},{key:"render",value:function(){return r.default.createElement(u.Splitter,null,r.default.createElement(u.SplitterSide,{side:"left",collapse:!0,isOpen:this.state.isOpen,onClose:this.hide.bind(this),swipeable:!0},r.default.createElement(u.Page,null,"Menu content")),r.default.createElement(u.SplitterContent,null,r.default.createElement(u.Page,null,r.default.createElement(u.Button,{onClick:this.show.bind(this)},"Open"))))}}]),t}();t.default=a},31:function(e,t,n){"use strict";n(30);var o=n(28),r=i(n(0)),u=i(n(1)),l=i(n(4)),a=i(n(15));function i(e){return e&&e.__esModule?e:{default:e}}n(10),n(8),l.default.platform.isIPhoneX()&&(document.documentElement.setAttribute("onsflag-iphonex-portrait",""),document.documentElement.setAttribute("onsflag-iphonex-landscape",""));var c=document.getElementById("app");u.default.render(r.default.createElement(o.AppContainer,null,r.default.createElement(a.default,null)),c)},32:function(e,t,n){e.exports=n(31)}},[[32,0,1]]]);