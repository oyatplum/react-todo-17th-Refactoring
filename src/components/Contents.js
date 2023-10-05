import React from 'react';
import styled from 'styled-components';
import User_Main from './User_Calendar/User_Main';
import User_TodoList from './User_TodoList/User_TodoList';

function Contents() {
  return (
    <Container>
      <User_Main />
      <User_TodoList />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  margin-top: 18px;
`;

export default Contents;
