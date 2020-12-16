'use strict';

var _classCallCheck = require('@babel/runtime/helpers/esm/classCallCheck');
var _createClass = require('@babel/runtime/helpers/esm/createClass');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _classCallCheck__default = /*#__PURE__*/_interopDefaultLegacy(_classCallCheck);
var _createClass__default = /*#__PURE__*/_interopDefaultLegacy(_createClass);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Foo(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React__default['default'].createElement("div", null, children);
}

Promise.resolve(1).then(function (a) {
  return console.log(a);
});

var CA = /*#__PURE__*/function () {
  function CA() {
    _classCallCheck__default['default'](this, CA);
  }

  _createClass__default['default'](CA, [{
    key: "fun",
    value: function fun() {
      console.log(11);
    }
  }]);

  return CA;
}();

function main () {
  new CA().fun();
  return /*#__PURE__*/React__default['default'].createElement(Foo, null, "hello, rollup");
}

module.exports = main;
