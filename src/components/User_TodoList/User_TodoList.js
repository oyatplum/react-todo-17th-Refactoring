import React, { useState } from 'react';
import styled from 'styled-components';
import Form from './Todos/Form';
import Todo from './Todos/Todo';

const initialTodoData = localStorage.getItem('list')
  ? JSON.parse(localStorage.getItem('list'))
  : [];

function User_TodoList() {
  const [show, setShow] = useState(false);

  const [list, setList] = useState(initialTodoData);

  const clickBtn = () => {
    setShow(!show);
  };

  const getTodo = (todo) => {
    const newTodo = {
      id: Date.now(),
      title: todo,
    };
    setList([...list, newTodo]);
    localStorage.setItem('list', JSON.stringify([...list, newTodo]));
  };

  const deleteTodo = (id) => {
    let deletedTodo = list.filter((data) => data.id !== id);
    setList(deletedTodo);
    localStorage.setItem('list', JSON.stringify(deletedTodo));
  };

  return (
    <Container.Flex>
      <Container.TodoList>
        <Container.Section>
          <Todos.Title>Todo List</Todos.Title>
          <Todos.Btn onClick={() => clickBtn()}>+</Todos.Btn>

          <Todos.Section>
            {list.map((data) => (
              <Todo
                key={data.id}
                Todo={data}
                list={list}
                setList={setList}
                deleteTodo={deleteTodo}
              ></Todo>
            ))}
            {show && <Form getTodo={getTodo}></Form>}
          </Todos.Section>
        </Container.Section>
      </Container.TodoList>
    </Container.Flex>
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

export default User_TodoList;
