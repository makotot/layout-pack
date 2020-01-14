import css from '@styled-system/css';

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

export { stack };
