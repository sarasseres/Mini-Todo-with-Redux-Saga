import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import { setDataTodoBegin } from '../bootstrap/action';

export const Todo = (props) => {
  const [todos, setTodos] = useState({});
  const todoData = useSelector((state) => state.todoData);
  console.log(todoData, 'yes');

  return (
    <>
      <div className="container">
        <div className="card-body p-0 ">
          {todoData.map((item, index) => {
            return (
              <ul class="list-group col-lg-6 mx-auto py-3">
                <div
                  className=" border-none shadow-lg p-0 "
                  style={{
                    backgroundImage: `url(${require('./../asset/carousel3.jpg')})`,
                  }}
                  key={index}
                >
                  <li class=" list-group-item mt-2 d-flex justify-content-between align-items-center text-center">{item.title}</li>
                </div>
              </ul>
            );
          })}
        </div>
      </div>
    </>
  );
};
