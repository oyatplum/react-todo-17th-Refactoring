import React from 'react';
import styled from 'styled-components';

const Done = ({ Todo, toggleTodo, deleteTodo }) => {
  return (
    <DoneList>
      <div id="done-title">{Todo.title}</div>
      <Button onClick={() => toggleTodo(Todo.id)}>🔙</Button>
      <Button onClick={() => deleteTodo(Todo.id)}>✖</Button>
    </DoneList>
  );
};

const DoneList = styled.div`
  display: flex;
  #done-title {
    text-decoration: line-through;
    color: gray;
  }
`;
const Button = styled.button`
  border: none;
  background: none;
  color: rgb(104, 87, 134);
  font-size: 18px;
`;
export default Done;
