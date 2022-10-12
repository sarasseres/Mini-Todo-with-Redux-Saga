import * as PartTodo from '../Components/PartTodo';
import * as CreateTodo from '../Components/CreateTodo';
import { useDispatch, useSelector, connect } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { setDataTodoBegin } from '../bootstrap/action';

const Todos = (props) => {
  const dispatch = useDispatch();
  const [dataInput, setDataInput] = useState({});

  useEffect(() => {
    dispatch(setDataTodoBegin());
  }, [dispatch]);

  return (
    <>
      <div
        className="container  my-3"
        style={{
          backgroundImage: `url(${require('./../asset/hand-paint.jpg')})`,
        }}
      >
        <p className="h2 text-center text-dark fw-bold">Todo List</p>

        <PartTodo.Todo />
      </div>
    </>
  );
};
export default Todos;
