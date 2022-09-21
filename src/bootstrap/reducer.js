import initialState from "./initialState"

function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_ISLOGIN":
      return {
        ...state.users,
        isLogin: action.payload.isLogin
      }

    default:
      return state
  }
}

export default reducer;