import React from 'react';
import styled from 'styled-components';

export default function Days() {
  const days = ['일', '월', '화', '수', '목', '금', '토'];

  return (
    <Date.Container>
      <Date.Days>
        {days.map((day, idx) => (
          <Date.Day key={idx}>{day}</Date.Day>
        ))}
      </Date.Days>
    </Date.Container>
  );
}

const Date = {
  Container: styled.div``,
  Days: styled.div`
    display: flex;
    justify-content: space-around;
    margin: 20px 0;
    font-size: 13px;
    font-weight: 600;
  `,
  Day: styled.div``,
};
