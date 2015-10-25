import React from 'react';
import CalendarTr from './CalendarTr';
import tableStyle from './style/tableStyle';

export default class CalendarTable extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
          year: this.props.date.year,
          month: this.props.date.month 
        };

    }

    componentWillReceiveProps(props) {
      this.setState({
        year: props.date.year,
        month: props.date.month 
      });
    }

    render() {
        let firstDay = (new Date(this.state.year, this.state.month - 1, 1)).getDay(),
            lastDate = (new Date(this.state.year, this.state.month, 0)).getDate(),
            date = 1,
            skip = true,
            trs = [];

        for(let row = 0; row < 7; row++) {

          let valArray = [];

          for(let col = 0; col < 7; col++) {

            if(row == 1 && firstDay == col) {
              skip = false;
            }
            if(date > lastDate) {
              skip = true;
            }

            if(!skip) {
              valArray.push(date);
              date++;
            }else{
              valArray.push('\u00a0');
            }
          }

          if(row == 0) {
            valArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
          }
          trs.push(<CalendarTr key={row} row={row} vals={valArray} options={this.props.options} />);
        }

        return(
            <tbody>
              {trs}
            </tbody>
        )
    }

}
