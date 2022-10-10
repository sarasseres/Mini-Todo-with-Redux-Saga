import * as PartTodo from '../Components/PartTodo';
import * as CreateTodo from '../Components/CreateTodo';
import { useDispatch, useSelector, connect } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { setDataTodoBegin } from '../bootstrap/action';

const Todos = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDataTodoBegin());
  }, [dispatch]);
  const todoData = useSelector((state) => state.todoData);
  console.log(todoData, 'ini');

  return (
    <>
      <div className="container  my-3">
        <p className="h2 text-center text-dark fw-bold">Todo List</p>
        <CreateTodo.CreateTodo />
      </div>
      <div>
        {todoData.map((item, index) => (
          <PartTodo.Todo key={index} title={item.title} userID={item.userId} status={item.completed.toString()} />
        ))}
      </div>
    </>
  );
};
export default Todos;
