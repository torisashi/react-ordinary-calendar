import React from 'react';
import tableStyle from './style/tableStyle';

export default class CalendarTh extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      val: this.props.val
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      val: props.val,
    });
  }

  render() {
    return(
      <th style={this.props.options.defaultStyle ? tableStyle.th : ''}>{this.state.val}</th>
    )
  }

}
