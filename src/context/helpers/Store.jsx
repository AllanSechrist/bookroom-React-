import axiosBooks from "../../api/axiosBooks";
import axiosRooms from "../../api/axiosRooms";
import axiosAuth, { LOGIN_URL, LOGOUT_URL } from "../../api/axiosAuth";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: null,
      books: [],
      book: {},
      rooms: [],
      room: {},
    },
    actions: {
      syncTokenFromLocalStore: () => {
        const token = localStorage.getItem("access_token");
        if (token && token !== "" && token !== undefined) {
          setStore({ token: token });
        }
      },
      // BOOK FUNCTIONS ////////////////////////////////////////////////
      getBooks: async () => {
        const data = await axiosBooks.get("");
        const books = data.data;
        setStore({ books: books });
      },
      getBook: async (bookId) => {
        const data = await axiosBooks.get(`${bookId}/`);
        const book = data.data;
        setStore({ book: book });
      },
      newBook: async (title, series, publisher, author, isbn) => {
        await axiosBooks
          .post(``, {
            title: title,
            series: series,
            publisher: publisher,
            author: author,
            isbn: isbn,
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      editBook: async (title, series, publisher, author, isbn, bookId) => {
        await axiosBooks
          .patch(`${bookId}/`, {
            title: title,
            series: series,
            publisher: publisher,
            author: author,
            isbn: isbn,
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      // ROOM FUNCTIONS ///////////////////////////////////////////////
      getRooms: async () => {
        const data = await axiosRooms.get("");
        const rooms = data.data;
        setStore({ rooms: rooms });
      },
      getRoom: async (roomId) => {
        console.log(roomId);
        const data = await axiosRooms.get(`${roomId}/`);
        const room = data.data;

        setStore({ room: room });
      },
      newRoom: async (name, subtitle) => {
        await axiosRooms
          .post(``, {
            name: name,
            subtitle: subtitle,
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      editRoom: async (name, subtitle, books, roomId) => {
        await axiosRooms
          .patch(`${roomId}/`, {
            name: name,
            subtitle: subtitle,
            books: books,
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      // LOGIN ////////////////////////////////////////////////////////
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
        setStore({ token: null });
        axiosAuth.post(LOGOUT_URL);
      },
    },
  };
};

export default getState;
