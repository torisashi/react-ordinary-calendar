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

var _styleTableStyle = require('./style/tableStyle');

var _styleTableStyle2 = _interopRequireDefault(_styleTableStyle);

var CalendarTd = (function (_React$Component) {
  _inherits(CalendarTd, _React$Component);

  function CalendarTd(props) {
    _classCallCheck(this, CalendarTd);

    _get(Object.getPrototypeOf(CalendarTd.prototype), 'constructor', this).call(this, props);
    this.state = {
      val: this.props.val
    };
  }

  _createClass(CalendarTd, [{
    key: 'isToday',
    value: function isToday(data) {
      var today = new Date();
      if (this.state.val.year == today.getFullYear() && this.state.val.month == today.getMonth() + 1 && this.state.val.date == today.getDate()) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      this.setState({
        val: props.val
      });
    }
  }, {
    key: 'callOtherComponent',
    value: function callOtherComponent(ymd, e) {
      e.preventDefault();
      this.props.options.callback(ymd);
    }
  }, {
    key: 'createYmd',
    value: function createYmd() {
      var date = this.state.val.date;
      if (date < 10) {
        date = '0' + this.state.val.date;
      }
      var ymd = this.state.val.year + '-' + this.state.val.month + '-' + date;
      return ymd;
    }
  }, {
    key: 'render',
    value: function render() {
      var ymd = this.createYmd();
      if (this.isToday()) {
        return _react2['default'].createElement(
          'td',
          { style: this.props.options.defaultStyle ? _styleTableStyle2['default'].today : {}, onClick: this.callOtherComponent.bind(this, ymd) },
          _react2['default'].createElement(
            'a',
            { href: ymd, style: this.props.options.defaultStyle ? _styleTableStyle2['default'].td__a : {} },
            this.state.val.date
          )
        );
      } else {
        return _react2['default'].createElement(
          'td',
          { style: this.props.options.defaultStyle ? _styleTableStyle2['default'].td : {}, onClick: this.callOtherComponent.bind(this, ymd) },
          _react2['default'].createElement(
            'a',
            { href: ymd, style: this.props.options.defaultStyle ? _styleTableStyle2['default'].td__a : {} },
            this.state.val.date
          )
        );
      }
    }
  }]);

  return CalendarTd;
})(_react2['default'].Component);

exports['default'] = CalendarTd;
module.exports = exports['default'];