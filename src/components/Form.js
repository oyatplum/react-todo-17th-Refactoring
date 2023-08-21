import React from 'react';
import styled from 'styled-components';

const Form = ({ getTodo, value, setValue }) => {
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
    <div>
      <Enter>
        <form onSubmit={submitTodo}>
          <h2>Todo List ✔</h2>
          <input
            type="text"
            value={value}
            placeholder=" Enter your to do"
            onChange={handleChange}
            id="input-todo"
          />
          <button type="submit" id="button">
            ➕
          </button>
        </form>
      </Enter>
    </div>
  );
};
const Enter = styled.div`
  padding: 0px 20px 15px 20px;
  #input-todo {
    border: none;
    background-color: rgb(205, 222, 241);
    border-radius: 20px;
    height: 35px;
    font-size: 15px;
    width: 85%;
  }
  #button {
    border: none;
    background: none;
    font-size: 18px;
    width: 40px;
  }
`;

export default Form;
