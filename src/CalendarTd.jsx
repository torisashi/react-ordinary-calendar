import React from 'react';
import tableStyle from './style/tableStyle';

export default class CalendarTd extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      val: this.props.val
    };
  }

  isToday(data) {
    let today = new Date();
    if(this.state.val.year == today.getFullYear() && this.state.val.month == today.getMonth() + 1
        && this.state.val.date == today.getDate()) {
      return true;
    } else {
      return false;
    }
  }

  componentWillReceiveProps(props) {
    this.setState({
      val: props.val,
    });
  }

  callOtherComponent(ymd, e) {
    e.preventDefault();
    this.props.options.callback(ymd);
  }

  createYmd() {
    let date = this.state.val.date; 
    if(date < 10) {
      date = '0' + this.state.val.date;
    }
    let ymd = this.state.val.year + '-' + this.state.val.month + '-' + date;
    return ymd;
  }

  render() {
    let ymd = this.createYmd();
    if(this.isToday()) {
      return(
        <td style={this.props.options.defaultStyle ? tableStyle.today : {}} onClick={this.callOtherComponent.bind(this, ymd)}><a href={ymd} style={this.props.options.defaultStyle ? tableStyle.td__a : {}}>{this.state.val.date}</a></td>
      )
    } else {
      return(
        <td style={this.props.options.defaultStyle ? tableStyle.td : {}} onClick={this.callOtherComponent.bind(this, ymd)} ><a href={ymd} style={this.props.options.defaultStyle ? tableStyle.td__a : {}}>{this.state.val.date}</a></td>
      )
    }
  }

}
