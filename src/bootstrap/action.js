import * as CONST from './constans';

export const setAuth = (payload) => {
  return {
    type: 'SET_AUTH',
    payload,
  };
};

export const setMOdalBegin = () => {
  return {
    type: CONST.PUT_UPDATE_MODAL_BEGIN,
  };
};

export const setMOdalSuccess = () => {
  return {
    type: CONST.PUT_UPDATE_MODAL_SUCCESS,
  };
};

export const setMOdalFail = () => {
  return {
    type: CONST.PUT_UPDATE_MODAL_FAIL,
  };
};
