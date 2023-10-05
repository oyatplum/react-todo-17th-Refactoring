import React, { useState } from 'react';
import styled from 'styled-components';

const Form = ({ getTodo }) => {
  const [value, setValue] = useState('');

  const submitTodo = (e) => {
    e.preventDefault();

    if (value.trim()) {
      getTodo(value);
      setValue('');
    } else {
      alert('Enter your todo');
    }
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <Container>
      <NotDone></NotDone>
      <Enter>
        <form onSubmit={submitTodo}>
          <Put>
            <input
              type="text"
              value={value}
              placeholder=" Enter your to do"
              onChange={handleChange}
              id="input-todo"
            />
          </Put>
        </form>
      </Enter>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  align-items: center;
`;
const NotDone = styled.div`
  background-color: #dddddd;
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;
const Enter = styled.div`
  padding: 0px 20px 15px 10px;
  #input-todo {
    border: none;
    outline: none;
    height: 35px;
    font-size: 15px;
    width: 85%;
  }
`;
const Put = styled.div`
  border-bottom: 2.5px solid;
`;

export default Form;
