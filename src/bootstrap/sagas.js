import { all, call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import * as API from './apis';
import * as ACTION from './action';
import * as CONST from './constans';

function* setDataTodoBegin() {
  try {
    const todoData = yield call(API.apiTodo);
    console.log('masukkk');
    console.log(todoData.data);
    yield put(ACTION.setDataTodoSuccess(todoData?.data));
    // success
    //     yield put(ACTION.TODO_SUCCESS(response));
  } catch (error) {
    //
    console.log({ error });
    yield put(ACTION.setDataTodoFail({ error: 'Internal Server Error' }));
  }
  // }
}

const bootstrap = [takeLatest(CONST.TODO_BEGIN, setDataTodoBegin)];

function* mySaga() {
  yield all([...bootstrap]);
}

export default mySaga;
