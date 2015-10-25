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

var _CalendarTable = require('./CalendarTable');

var _CalendarTable2 = _interopRequireDefault(_CalendarTable);

var _styleTableStyle = require('./style/tableStyle');

var _styleTableStyle2 = _interopRequireDefault(_styleTableStyle);

var Calendar = (function (_React$Component) {
  _inherits(Calendar, _React$Component);

  function Calendar(props) {
    _classCallCheck(this, Calendar);

    _get(Object.getPrototypeOf(Calendar.prototype), 'constructor', this).call(this, props);
    this.setOptions();
    this.setDate();
    this.monthNames = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
  }

  _createClass(Calendar, [{
    key: 'setOptions',
    value: function setOptions() {

      this.options = {
        callback: typeof this.props.options == 'undefined' || typeof this.props.options.callback == 'undefined' ? function () {} : this.props.options.callback,
        defaultStyle: typeof this.props.options == 'undefined' || typeof this.props.options.defaultStyle == 'undefined' ? true : false
      };
    }
  }, {
    key: 'setDate',
    value: function setDate() {
      if (typeof this.props.date == 'undefined' || typeof this.props.date.year == 'undefined' || typeof this.props.date.month == 'undefined') {
        this.state = {
          year: new Date().getFullYear(),
          month: new Date().getMonth() + 1
        };
      } else {
        this.state = {
          year: this.props.date.year,
          month: this.props.date.month
        };
      }
    }
  }, {
    key: 'prevMonth',
    value: function prevMonth() {

      this.setState({
        year: this.state.month == 1 ? this.state.year - 1 : this.state.year,
        month: this.state.month == 1 ? 12 : this.state.month - 1
      });
    }
  }, {
    key: 'nextMonth',
    value: function nextMonth() {

      this.setState({
        year: this.state.month == 12 ? this.state.year + 1 : this.state.year,
        month: this.state.month == 12 ? 1 : this.state.month + 1
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'table',
          { style: this.options.defaultStyle ? _styleTableStyle2['default'].table : {} },
          _react2['default'].createElement(
            'caption',
            { style: this.options.defaultStyle ? _styleTableStyle2['default'].caption : {} },
            _react2['default'].createElement(
              'span',
              { style: this.options.defaultStyle ? _styleTableStyle2['default'].prevBtn : {}, onClick: this.prevMonth.bind(this) },
              '‹'
            ),
            _react2['default'].createElement(
              'p',
              { style: this.options.defaultStyle ? _styleTableStyle2['default'].title : {} },
              this.monthNames[this.state.month - 1],
              ' ',
              this.state.year
            ),
            _react2['default'].createElement(
              'span',
              { style: this.options.defaultStyle ? _styleTableStyle2['default'].nextBtn : {}, onClick: this.nextMonth.bind(this) },
              '›'
            )
          ),
          _react2['default'].createElement(_CalendarTable2['default'], { date: this.state, options: this.options })
        )
      );
    }
  }]);

  return Calendar;
})(_react2['default'].Component);

exports['default'] = Calendar;
module.exports = exports['default'];