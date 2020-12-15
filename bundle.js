'use strict';

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Foo(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React__default['default'].createElement("div", null, children);
}

function main () {
  return /*#__PURE__*/React__default['default'].createElement(Foo, null, "hello, rollup");
}

module.exports = main;
