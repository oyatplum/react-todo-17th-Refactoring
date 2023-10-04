import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import menu from './../images/menu.png';

const Todo = ({ Todo, toggleTodo, deleteTodo, title, list, setList }) => {
  console.log('todo');
  const [isClicked, setIsClicked] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const clickModal = () => setShowModal(!showModal);

  const click = () => {
    setIsClicked(!isClicked);
  };
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(Todo.title);

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
      <B>
        <NotDone></NotDone>
        <TodoList>
          <div>
            <form onSubmit={submitEditedTodo}>
              <C>
                <input value={editedTitle} onChange={editTodo} id="edit-todo" />
              </C>
            </form>
          </div>
        </TodoList>
      </B>
    );
  } else {
    return (
      <TodoList>
        <Btn onClick={() => click()}>
          {isClicked ? <Done></Done> : <NotDone></NotDone>}
        </Btn>
        <Contents>
          {Todo.title}

          <Menu onClick={() => clickModal()} src={menu} />
          {showModal && (
            <Modal
              clickModal={clickModal}
              Todo={Todo}
              deleteTodo={deleteTodo}
              setIsEditing={setIsEditing}
            />
          )}
        </Contents>
      </TodoList>
    );
  }
};

const B = styled.div`
  display: flex;
  align-items: center;
`;
const C = styled.div`
  border-bottom: 2.5px solid;
`;

const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 350px;
`;

const Menu = styled.img`
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

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
  cursor: pointer;
`;
const TodoList = styled.div`
  display: flex;
  // padding: 0px 20px 15px 10px;
  #edit-todo {
    border: none;
    outline: none;
    height: 35px;
    font-size: 15px;
    width: 85%;
  }
`;

export default React.memo(Todo);
