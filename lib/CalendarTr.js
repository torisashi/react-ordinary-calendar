'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CalendarTh = require('./CalendarTh');

var _CalendarTh2 = _interopRequireDefault(_CalendarTh);

var _CalendarTd = require('./CalendarTd');

var _CalendarTd2 = _interopRequireDefault(_CalendarTd);

var CalendarTr = (function (_React$Component) {
  _inherits(CalendarTr, _React$Component);

  function CalendarTr(props) {
    _classCallCheck(this, CalendarTr);

    _get(Object.getPrototypeOf(CalendarTr.prototype), 'constructor', this).call(this, props);
    this.state = {
      vals: this.props.vals
    };
  }

  _createClass(CalendarTr, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      this.setState({
        vals: props.vals
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var cells = [];
      for (var col = 0; col < 7; col++) {
        if (this.props.row == 0) {
          cells.push(_react2['default'].createElement(_CalendarTh2['default'], { key: col, val: this.state.vals[col], options: this.props.options }));
        } else {
          cells.push(_react2['default'].createElement(_CalendarTd2['default'], { key: col, isThisMonth: this.props.isThisMonth, val: this.state.vals[col], options: this.props.options }));
        }
      }
      return _react2['default'].createElement(
        'tr',
        null,
        cells
      );
    }
  }]);

  return CalendarTr;
})(_react2['default'].Component);

exports['default'] = CalendarTr;
module.exports = exports['default'];