import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector, connect } from 'react-redux';
// import { setDataTodoBegin } from '../bootstrap/action';

export const CreateTodo = (props) => {
  const dispatch = useDispatch();
  const [todos, setTodos] = useState({});
  return (
    <form
      className=" row justify-content-center m-5 "
      onSubmit={(e) => {
        e.preventDefault();
        // dispatch(setDataTodoBegin(todos));
      }}
    >
      <div class="col-lg-3 col-sm-8 p-0 ">
        <label for="" class=""></label>
        <input className="form-control search-input rounded-0 text-primary2 text-center shadow-none" type="text" class="" id="" placeholder="" />
        {/* <button type="submit" className="btn btn-outline-secondary rounded-0 fw-medium search-btn text-center my-4 p-1">
          Add
        </button> */}
        <button type="submit" className="btn  btn-secondary btn-light shadow-none rounded-0 text-primary2">
          Add Todo
        </button>
      </div>
    </form>
  );
};
