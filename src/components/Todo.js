import React, { useState } from 'react';
import styled from 'styled-components';

const Todo = ({ Todo, toggleTodo, deleteTodo, title, list, setList }) => {
  const [isClicked, setIsClicked] = useState(false);

  const click = () => {
    setIsClicked(!isClicked);
  };
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);

  const editTodo = (e) => {
    setEditedTitle(e.target.value);
  };

  const submitEditedTodo = (event) => {
    event.preventDefault();

    let editedTodo = list.map((data) => {
      if (data.id === Todo.id) {
        data.title = editedTitle;
      }
      return data;
    });

    setList(editedTodo);
    setIsEditing(false);
    localStorage.setItem('list', JSON.stringify(editedTodo));
  };

  if (isEditing) {
    return (
      <TodoList>
        <div>
          <form onSubmit={submitEditedTodo}>
            <input value={editedTitle} onChange={editTodo} id="edit-todo" />
          </form>
        </div>
      </TodoList>
    );
  } else {
    return (
      <TodoList>
        <Btn onClick={() => click()}>
          {isClicked ? <Done></Done> : <NotDone></NotDone>}
        </Btn>
        <div>
          {Todo.title}

          <Button onClick={() => deleteTodo(Todo.id)}>✖</Button>
          <Button onClick={() => setIsEditing(true)}>🛠</Button>
        </div>
      </TodoList>
    );
  }
};

const Btn = styled.div``;
const Done = styled.div`
  background-color: #0069ffc4;
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;
const NotDone = styled.div`
  background-color: #dddddd;
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;
const TodoList = styled.div`
  display: flex;
  #edit-todo {
    height: 20px;
    font-size: 15px;
  }
`;

const Button = styled.button`
  border: none;
  background: none;
  color: rgb(104, 87, 134);
  font-size: 18px;
`;

export default Todo;
