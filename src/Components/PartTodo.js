import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import { setDataTodoBegin } from '../bootstrap/action';

export const Todo = (props) => {
  const [todos, setTodos] = useState({});

  return (
    <>
      <div className="container">
        <div>
          <ul class="list-group col-lg-6 mx-auto py-3">
            <li class="list-group-item mt-2 d-flex justify-content-between align-items-center">
              {props.userID} {props.title}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
