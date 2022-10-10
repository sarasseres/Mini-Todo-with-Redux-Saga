import { all, call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import * as API from './apis';
import * as ACTION from './action';

function* setDataTodoBegin() {
  const todoData = yield call(API.apiTodo);

  yield put({ type: ACTION.TODO_SUCCESS, todoData });
}

function* mySaga() {
  yield takeEvery(ACTION.TODO_BEGIN, setDataTodoBegin);
}

export default mySaga;
