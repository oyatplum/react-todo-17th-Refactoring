import React from 'react';
import styled from 'styled-components';
import Calendar from './calendar/Calendar';
import Profile from './Profile';

function User_Main() {
  return (
    <Container>
      <Profile />
      <Calendar />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 425px;
`;

export default User_Main;
