import React, { useState } from 'react';
import styled from 'styled-components';

function Modal({ clickModal, deleteTodo, Todo, setIsEditing }) {
  const click = (e) => {
    e.stopPropagation();
  };

  return (
    <Container.ModalBox onClick={clickModal}>
      <Container.Modals>
        <Content.Container>
          <Content.Title>{Todo.title}</Content.Title>
          <Content.Buttons>
            <Content.Button onClick={() => setIsEditing(true)}>
              수정하기 🛠
            </Content.Button>
            <Content.Button onClick={() => deleteTodo(Todo.id)}>
              삭제하기 ✖
            </Content.Button>
          </Content.Buttons>
        </Content.Container>
      </Container.Modals>
    </Container.ModalBox>
  );
}

export default Modal;

const Container = {
  ModalBox: styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 10;
  `,
  Modals: styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
  `,
};
const Content = {
  Container: styled.div`
    padding: 1.5rem 3rem;
    width: 280px;
    height: 250px;
    border-radius: 15px 15px 0 0;
    display: flex;
    flex-direction: column;
    background-color: rgb(255 255 255);
    align-items: center;
  `,
  Title: styled.div`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
  `,
  Buttons: styled.div`
    display: flex;
    justify-content: space-between;
    width: 320px;
  `,
  Button: styled.div`
    background-color: rgb(232 232 232 / 82%);
    border-radius: 10px;
    border: none;
    font-weight: bold;
    font-size: 13px;
    padding: 30px 45px;
    cursor: pointer;
  `,
};
