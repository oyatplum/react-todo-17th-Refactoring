import React from 'react';
import Header from './Header';
import Weeks from './Weeks';

export default function Calendar({ currentMonth, preMonth, nextMonth }) {
  console.log('caldendar');
  return (
    <div>
      <Header
        currentMonth={currentMonth}
        preMonth={preMonth}
        nextMonth={nextMonth}
      />
      <Weeks currentMonth={currentMonth} />
    </div>
  );
}
