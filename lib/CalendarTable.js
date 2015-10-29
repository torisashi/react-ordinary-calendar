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

var _CalendarTr = require('./CalendarTr');

var _CalendarTr2 = _interopRequireDefault(_CalendarTr);

var _styleTableStyle = require('./style/tableStyle');

var _styleTableStyle2 = _interopRequireDefault(_styleTableStyle);

var CalendarTable = (function (_React$Component) {
  _inherits(CalendarTable, _React$Component);

  function CalendarTable(props) {
    _classCallCheck(this, CalendarTable);

    _get(Object.getPrototypeOf(CalendarTable.prototype), 'constructor', this).call(this, props);
    this.state = {
      year: this.props.date.year,
      month: this.props.date.month
    };
  }

  _createClass(CalendarTable, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      this.setState({
        year: props.date.year,
        month: props.date.month
      });
    }
  }, {
    key: 'isThisMonth',
    value: function isThisMonth(data) {
      var today = new Date();
      if (data.year == today.getFullYear() && data.month == today.getMonth() + 1) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var firstDay = new Date(this.state.year, this.state.month - 1, 1).getDay(),
          lastDate = new Date(this.state.year, this.state.month, 0).getDate(),
          date = 1,
          skip = true,
          trs = [],
          isThisMonth = this.isThisMonth(this.state);

      for (var row = 0; row < 7; row++) {

        var valArray = {};
        valArray = {
          date: [],
          month: this.state.month,
          year: this.state.year
        };

        for (var col = 0; col < 7; col++) {

          if (row == 1 && firstDay == col) {
            skip = false;
          }
          if (date > lastDate) {
            skip = true;
          }

          if (!skip) {
            valArray.date.push(date);
            date++;
          } else {
            valArray.date.push(' ');
          }
        }

        if (row == 0) {
          valArray.date = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        }
        trs.push(_react2['default'].createElement(_CalendarTr2['default'], { key: row, row: row, isThisMonth: isThisMonth, vals: valArray, options: this.props.options }));
      }

      return _react2['default'].createElement(
        'tbody',
        null,
        trs
      );
    }
  }]);

  return CalendarTable;
})(_react2['default'].Component);

exports['default'] = CalendarTable;
module.exports = exports['default'];