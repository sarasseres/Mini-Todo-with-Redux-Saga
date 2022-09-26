import inisialState from "./initialState";

function reducer (state = inisialState, action) {
  switch (action.type) {
    case "SET_AUTH":
      return {
        ...state,
        access_token: action.payload.access_token,
      }
    
    default:
      return state;
  }
}

export default reducer;