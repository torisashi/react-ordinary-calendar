import React from 'react';
import tableStyle from './style/tableStyle';

export default class CalendarTd extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      val: this.props.val
    };
    this.today = (new Date()).getDate();
  }

  componentWillReceiveProps(props) {
    this.setState({
      val: props.val,
    });
  }

  callOtherComponent() {
    this.props.options.callback();
  }

  render() {
    if(this.props.isThisMonth && this.state.val == this.today) {
      return(
        <td style={this.props.options.defaultStyle ? tableStyle.today : ''} onClick={this.callOtherComponent.bind(this)}>{this.state.val}</td>
      )
    } else {
      return(
        <td style={this.props.options.defaultStyle ? tableStyle.td : ''} onClick={this.callOtherComponent.bind(this)}>{this.state.val}</td>
      )
    }
  }

}
