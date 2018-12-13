import * as React from 'react';
import { SingleDatePicker, DateRangePicker } from 'react-dates';
import moment from 'moment';

import { Segment } from 'semantic-ui-react';
import { storiesOf } from '@storybook/react';

import 'react-dates/lib/css/_datepicker.css';

interface IState {
  date: any;
  focused: boolean | null;
  startDate: any;
  endDate: any | null;
  focusedInput: any | null;
}

class Datepicker extends React.Component<{}, IState> {
  state = {
    date: moment(),
    focused: false,
    startDate: moment(),
    endDate: moment(),
    focusedInput: null
  }

  render = () => {
    return (
      <>
      <SingleDatePicker 
        date={this.state.date} 
        onDateChange={date => {console.log(date, 'date change'); this.setState({ date })}} 
        focused={this.state.focused} 
        onFocusChange={({ focused }) => this.setState({ focused })} 
        id='date-picker'
        numberOfMonths={1} 
        hideKeyboardShortcutsPanel
      />
      <DateRangePicker
        startDate={this.state.startDate} 
        startDateId="your_unique_start_date_id" 
        endDate={this.state.endDate} 
        endDateId="your_unique_end_date_id" 
        onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} 
        focusedInput={this.state.focusedInput} 
        onFocusChange={focusedInput => this.setState({ focusedInput })} 
      />
      </>
    )
  }
}

storiesOf('Datepicker', module)
  .addDecorator(story => <Segment>{story()}</Segment>)
  .addWithJSX('Basic', () => {
    return (
      <>
        <Segment style={{border: '1px solid black'}}>
          <h3>Datepicker</h3>
          <Datepicker />
        </Segment>
      </>
    )
  });