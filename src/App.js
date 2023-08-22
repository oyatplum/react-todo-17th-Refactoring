import React, { useState } from 'react';
import styled from 'styled-components';
import Form from './components/Form';
import Todo from './components/Todo';
import Done from './components/Done';
import Calendar from './calendar/Calendar';
import GlobalStyle from './styles/GloalStyle';
import Me from './images/me.jpg';

const initialTodoData = localStorage.getItem('list')
  ? JSON.parse(localStorage.getItem('list'))
  : [];

function App() {
  const [list, setList] = useState(initialTodoData);
  const [value, setValue] = useState('');

  const getTodo = (todo) => {
    const newTodo = {
      id: Date.now(),
      title: todo,
      completed: false,
    };
    setList([...list, newTodo]);
    localStorage.setItem('list', JSON.stringify([...list, newTodo]));
  };

  const toggleTodo = (id) => {
    let toggledTodo = list.map((data) =>
      data.id === id ? { ...data, completed: !data.completed } : data
    );
    setList(toggledTodo);
    localStorage.setItem('list', JSON.stringify(toggledTodo));
  };

  const deleteTodo = (id) => {
    let deletedTodo = list.filter((data) => data.id !== id);
    setList(deletedTodo);
    localStorage.setItem('list', JSON.stringify(deletedTodo));
  };

  let countTodo = 0;
  list.map((data) => (data.completed ? data : countTodo++));

  return (
    <C>
      <GlobalStyle />
      <Title>todo mate</Title>
      <Flex>
        <Con>
          <Profile.Container>
            <Profile.Image src={Me} />
            <Profile.Section>
              <Profile.Name>예지</Profile.Name>
              <Profile.Intro>열심히 살자</Profile.Intro>
            </Profile.Section>
          </Profile.Container>
          <Calendar />
        </Con>
        <Conatiner>
          <Form getTodo={getTodo} value={value} setValue={setValue}></Form>
          <Section>
            <h3>To do...😿{countTodo}</h3>
            {list.map((data) =>
              data.completed ? (
                <></>
              ) : (
                <Todo
                  Todo={data}
                  list={list}
                  setList={setList}
                  toggleTodo={toggleTodo}
                  deleteTodo={deleteTodo}
                ></Todo>
              )
            )}
          </Section>
          <Section>
            <h3>Done..!😻{list.length - countTodo}</h3>
            {list.map((data) =>
              data.completed ? (
                <Done
                  Todo={data}
                  toggleTodo={toggleTodo}
                  deleteTodo={deleteTodo}
                ></Done>
              ) : (
                <></>
              )
            )}
          </Section>
        </Conatiner>
      </Flex>
    </C>
  );
}

const C = styled.div`
  height: 100vh;
  width: 850px;
`;
const Flex = styled.div`
  display: flex;
  margin-top: 18px;
`;
const Section = styled.div`
  flex: 0.5;
  border-top: 2px solid rgb(177, 171, 171);
  overflow: auto;
  padding-left: 10px;
  padding: 0px 20px 15px 20px;
`;
const Conatiner = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 425px;
`;
const Con = styled.div`
  height: 100vh;
  width: 425px;
`;
const Title = styled.div`
  font-family: 'Black Han Sans', sans-serif;
  font-size: 23px;
`;
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
