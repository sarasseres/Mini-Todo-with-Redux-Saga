import * as CONST from './constans';

export const setDataTodoBegin = (payload) => {
  return {
    type: CONST.TODO_BEGIN,
    payload,
  };
};

export const setDataTodoSuccess = (payload) => {
  return {
    type: CONST.TODO_SUCCESS,
    payload,
  };
};
export const setDataTodoFail = (payload) => {
  return {
    type: CONST.TODO_FAIL,
    payload,
  };
};
