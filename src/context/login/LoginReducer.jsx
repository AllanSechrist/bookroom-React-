const loginReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        hasToken: true,
				loading: false,
      };
    case "LOGOUT":
      return {
        ...state,
        hasToken: false,
				loading: false,
      };
		default:
			return state;
  }
};

export default loginReducer;
