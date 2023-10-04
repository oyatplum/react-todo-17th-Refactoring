import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './styles/GloalStyle';
import Contents from './components/Contents';

function App() {
  console.log('app');

  return (
    <Container.Form>
      <GlobalStyle />
      <Container.Title>todo mate</Container.Title>
      <Contents />
    </Container.Form>
  );
}

const Todos = {
  Title: styled.div`
    font-family: 'Black Han Sans', sans-serif;
    font-size: 23px;
  `,
  Btn: styled.div`
    cursor: pointer;
  `,
  Section: styled.div`
    flex: 0.5;
    overflow: auto;
    padding-left: 10px;
    padding: 0px 20px 15px 20px;
  `,
};
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

const Profile = {
  Container: styled.div`
    display: flex;
    align-items: center;
  `,
  Image: styled.img`
    width: 55px;
    height: 55px;
    border-radius: 50%;
  `,
  Section: styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 8px;
  `,
  Name: styled.div`
    font-weight: bold;
    font-size: 15px;
  `,
  Intro: styled.div`
    font-size: 12px;
  `,
};

export default App;
