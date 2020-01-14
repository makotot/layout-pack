(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@styled-system/css')) :
  typeof define === 'function' && define.amd ? define(['exports', '@styled-system/css'], factory) :
  (global = global || self, factory(global.layoutPack = {}, global.css));
}(this, (function (exports, css) { 'use strict';

  css = css && css.hasOwnProperty('default') ? css['default'] : css;

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var stack = function stack(_ref) {
    var child = _ref.child,
        _ref$mt = _ref.mt,
        mt = _ref$mt === void 0 ? 0 : _ref$mt;
    return css(_defineProperty({
      display: 'flex',
      flexDirection: 'column'
    }, "".concat(child, " + ").concat(child), {
      marginTop: mt
    }))();
  };

  exports.stack = stack;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
