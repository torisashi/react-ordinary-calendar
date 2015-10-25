import React from 'react';
import CalendarTh from './CalendarTh';
import CalendarTd from './CalendarTd';

export default class CalendarTr extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      vals: this.props.vals
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      vals: props.vals,
    });
  }

  render() {
    let cells = [];
    for (let col = 0; col < 7; col++){
      if(this.props.row == 0) {
        cells.push(<CalendarTh key={col} val={this.state.vals[col]} options={this.props.options} />);
      }else{
        cells.push(<CalendarTd key={col} val={this.state.vals[col]} options={this.props.options} />);
      }
    }
    return(
      <tr>{cells}</tr>
    );
  }

}
