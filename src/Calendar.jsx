import React from 'react';
import CalendarTable from './CalendarTable';
import tableStyle from './style/tableStyle';

export default class Calendar extends React.Component {

    constructor(props) {
      super(props);
      this.setOptions();
      this.setDate();
      this.monthNames = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY',
                            'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
    }

    setOptions() {

      this.options = {
        callback: (typeof(this.props.options) == 'undefined' || typeof(this.props.options.callback) == 'undefined') ? () => {} : this.props.options.callback,
        defaultStyle: (typeof(this.props.options) == 'undefined' || typeof(this.props.options.defaultStyle) == 'undefined') ? true : false
      };

    }

    setDate() {
      if(typeof(this.props.date) == 'undefined' || 
          typeof(this.props.date.year) == 'undefined' || typeof(this.props.date.month) == 'undefined') {
        this.state = {
          year: new Date().getFullYear(),
          month: new Date().getMonth() + 1
        };
      }else{
        this.state = {
          year: this.props.date.year,
          month: this.props.date.month
        };
      }
    }

    prevMonth() {
      
      this.setState({
        year: this.state.month == 1 ? this.state.year - 1 : this.state.year,
        month: this.state.month == 1 ? 12 : this.state.month - 1
      });

    }

    nextMonth() {
      
      this.setState({
        year: this.state.month == 12 ? this.state.year + 1 : this.state.year,
        month: this.state.month == 12 ? 1 : this.state.month + 1
      });
    }

    render() {
        return(
          <div>
            <table style={this.options.defaultStyle ? tableStyle.table : {}}>
              <caption style={this.options.defaultStyle ? tableStyle.caption : {}}>
                <span style={this.options.defaultStyle ? tableStyle.prevBtn : {}} onClick={this.prevMonth.bind(this)}>‹</span>
                <p style={this.options.defaultStyle ? tableStyle.title : {}}>{this.monthNames[this.state.month - 1]} {this.state.year}</p>
                <span style={this.options.defaultStyle ? tableStyle.nextBtn : {}} onClick={this.nextMonth.bind(this)}>›</span>
              </caption>
              <CalendarTable date={this.state} options={this.options} />
            </table>
          </div>
        );
    }
}


