import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './styles/GloalStyle';
import Contents from './components/Contents';

function App() {
  return (
    <Container.Form>
      <GlobalStyle />
      <Container.Title>todo mate</Container.Title>
      <Contents />
    </Container.Form>
  );
}

const Container = {
  Title: styled.div`
    font-family: 'Black Han Sans', sans-serif;
    font-size: 23px;
  `,
  Form: styled.div`
    height: 100vh;
    width: 850px;
  `,
};

export default App;
