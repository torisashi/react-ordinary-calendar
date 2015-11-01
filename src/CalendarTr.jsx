import React from 'react';
import CalendarTh from './CalendarTh';
import CalendarTd from './CalendarTd';
import tableStyle from './style/tableStyle';

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
        cells.push(<CalendarTh key={col} val={this.state.vals.date[col]} options={this.props.options} />);
      }else{
        let data = {
          date: this.state.vals.date[col],
          month: this.state.vals.month,
          year: this.state.vals.year
        };
        cells.push(<CalendarTd key={col} val={data} options={this.props.options} />);
      }
    }
    return(
      <tr style={this.props.options.defaultStyle ? tableStyle.tr : {}}>{cells}</tr>
    );
  }

}
