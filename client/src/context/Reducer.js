const Reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
    case "UPDATE_START":
      return {
        ...state,
        user: null,
        isFetching: true,
        error: false,
      }
    case "LOGIN_SUCCESS":
    case "UPDATE_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      }
    case "LOGIN_FAILURE":
    case "UPDATE_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      }
    case "LOGOUT":
      return {
        user: null,
        isFetching: false,
        error: false,
      }
    default:
      return state
  }
}

export default Reducer
