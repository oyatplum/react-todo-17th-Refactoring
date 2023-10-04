import React, { useState } from 'react';
import { addMonths, subMonths, format } from 'date-fns';
import Days from './Days';
import Weeks from './Weeks';
import styled from 'styled-components';

export default function Header() {
  console.log('header');
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [currentDate, setCurrentDate] = useState(new Date());

  const preMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  return (
    <Container>
      <Section>
        <DateFormat>
          {format(currentMonth, 'yyyy')}년 {format(currentMonth, 'M')}월
        </DateFormat>
        <MoveMonth.Container>
          <MoveMonth.Left onClick={preMonth}>{'<'}</MoveMonth.Left>
          <MoveMonth.Right onClick={nextMonth}>{'>'}</MoveMonth.Right>
        </MoveMonth.Container>
      </Section>
      <Dates>
        <Days />
        <Weeks currentMonth={currentMonth} currentDate={currentDate} />
      </Dates>
    </Container>
  );
}

const Container = styled.div`
  width: 400px;
  margin-top: 20px;
`;
const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Dates = styled.div`
  width: 380px;
`;
const DateFormat = styled.div`
  font-size: 16px;
  font-weight: 600;
`;
const MoveMonth = {
  Container: styled.div`
    display: flex;
    font-size: 24px;
    font-weight: 600;
    width: 55px;
    justify-content: space-between;
    cursor: pointer;
  `,
  Left: styled.div``,
  Right: styled.div``,
};
