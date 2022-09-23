const loginReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        token: action.payload,
      };
		case "LOGOUT":
			return {
				...state,
				token: null,
			} 
  }
};
