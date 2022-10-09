import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import { setDataTodoBegin } from '../bootstrap/action';

export const Todo = (props) => {
  const dispatch = useDispatch();
  const [todos, setTodos] = useState({});
  const { todoData } = useSelector((state) => state);
  console.log(todoData, 'phew');

  // const todoData = useSelector((state) => state.reducers.todoData);
  // console.log(todoData);
  useEffect(() => {
    if (todoData) {
      dispatch(setDataTodoBegin({ data: todoData?.data }));
    }
  }, [dispatch, todos]);

  return (
    <>
      <div className="container">
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <ul class="list-group col-lg-6 mx-auto py-3">
          <li class="list-group-item mt-2 d-flex justify-content-between align-items-center">yak</li>
        </ul>
      </div>
    </>
  );
};

// const mapDispatchToProps = (dispatch) => ({ setDataTodoBegin: () => dispatch(setDataTodoBegin()) });
// export default connect(mapDispatchToProps)(Todo);
