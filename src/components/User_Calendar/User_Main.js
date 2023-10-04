import React from 'react';
import styled from 'styled-components';
import Calendar from './../../calendar/Calendar';
import Profile from './Profile';

function User_Main() {
  console.log('user_main');
  return (
    <Container.User>
      <Profile />
      <Calendar />
    </Container.User>
  );
}

const Container = {
  Flex: styled.div`
    display: flex;
    margin-top: 18px;
  `,
  Title: styled.div`
    font-family: 'Black Han Sans', sans-serif;
    font-size: 23px;
  `,
  User: styled.div`
    height: 100vh;
    width: 425px;
  `,
  Form: styled.div`
    height: 100vh;
    width: 850px;
  `,
  TodoList: styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 425px;
  `,

  Section: styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
  `,
};

export default User_Main;
