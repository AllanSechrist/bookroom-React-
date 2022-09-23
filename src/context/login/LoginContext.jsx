import { createContext, useReducer, useEffect } from "react";
import loginReducer from "./LoginReducer";

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const initialState = {
    token: null,
		loading: false,
  };

  const [state, dispatch] = useReducer(loginReducer, initialState);

  const syncTokenfromLocalStorage = () => {
    const token = localStorage.getItem("access_token");
    if(token && token !== "" && token !== undefined) {
      initialState.token = token
    }
  }

  useEffect(() => {
    syncTokenfromLocalStorage()
  }, [])

  return (
    <LoginContext.Provider value={{ ...state, dispatch }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
