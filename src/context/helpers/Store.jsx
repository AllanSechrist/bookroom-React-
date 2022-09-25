import axiosBooks from "../../api/axiosBooks";
import axiosAuth, { LOGIN_URL, LOGOUT_URL } from "../../api/axiosAuth";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: null,
      books: [],
    },
    actions: {
      syncTokenFromLocalStore: () => {
        const token = localStorage.getItem("access_token");
        if (token && token !== "" && token !== undefined) {
          setStore({ token: token });
        }
      },
      getBooks: async () => {
        const data = await axiosBooks.get("");
        const books = data.data;
        setStore({ books: books });
      },
      login: async (username, email, password) => {
        await axiosAuth
          .post(LOGIN_URL, {
            username: username,
            email: email,
            password: password,
          })
          .then((res) => {
            const token = res.data.key;
            localStorage.setItem("access_token", token);
            axiosAuth.defaults.headers["Authorization"] =
              "Token " + localStorage.getItem("access_token");
            setStore({ token: token });
          })
          .catch(function (error) {
            console.log(error);
          });
      },
			logout: () => {
				localStorage.removeItem("access_token");
				setStore({ token: null })
				axiosAuth.post(LOGOUT_URL)

			},
    },
  };
};

export default getState;
