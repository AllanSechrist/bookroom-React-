import axiosBooks from "../../api/axiosBooks";
import axiosRooms from "../../api/axiosRooms";
import axiosAuth, { LOGIN_URL, LOGOUT_URL } from "../../api/axiosAuth";
import axios from "axios";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: null,
      books: [],
      rooms: [],
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
      getRooms: async () => {
        const data = await axiosRooms.get("");
        const rooms = data.data;
        setStore({ rooms: rooms})
      },
      // LOGIN
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
