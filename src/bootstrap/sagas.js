import { all, call, put, takeLatest } from 'redux-saga/effects';
import * as API from './apis';
import * as ACTION from './action';
import * as CONST from './constans';

function* setDataTodoBegin() {
  try {
    const response = yield call(API.apiTodo);
    console.log('Masukkkk');
    console.log({ response });

    yield put(ACTION.setDataTodoSuccess(response));
  } catch (err) {
    console.log({ err });
    yield put(ACTION.setDataTodoFail({ err: 'internal server error' }));
  }
}

const bootstrap = [takeLatest(CONST.TODO_BEGIN, setDataTodoBegin)];

export function* bootstrapSaga() {
  yield all([...bootstrap]);
}
