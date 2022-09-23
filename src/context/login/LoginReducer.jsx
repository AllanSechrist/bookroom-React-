const loginReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        token: action.payload,
				loading: false,
      };
    case "LOGOUT":
      return {
        ...state,
        token: null,
				loading: false,
      };
		case "LOADING":
			return {
				...state,
				loading: true,
			}
		default:
			return state;
  }
};

export default loginReducer;
