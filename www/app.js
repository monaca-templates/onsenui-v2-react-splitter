(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{20:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=l(n(0)),u=(l(n(1)),n(19));function l(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={isOpen:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"show",value:function(){this.setState({isOpen:!0})}},{key:"hide",value:function(){this.setState({isOpen:!1})}},{key:"render",value:function(){return o.default.createElement(u.Splitter,null,o.default.createElement(u.SplitterSide,{side:"left",collapse:!0,isOpen:this.state.isOpen,onClose:this.hide.bind(this),swipeable:!0},o.default.createElement(u.Page,null,"Menu content")),o.default.createElement(u.SplitterContent,null,o.default.createElement(u.Page,null,o.default.createElement(u.Button,{onClick:this.show.bind(this)},"Open"))))}}]),t}();t.default=i},31:function(e,t,n){"use strict";n(30);var r=n(28),o=i(n(0)),u=i(n(1)),l=i(n(20));function i(e){return e&&e.__esModule?e:{default:e}}n(12),n(10);var a=document.getElementById("app");u.default.render(o.default.createElement(r.AppContainer,null,o.default.createElement(l.default,null)),a)},32:function(e,t,n){e.exports=n(31)}},[[32,0,1]]]);