import React, { useEffect, useContext } from "react";
import Book from "../components/books/Book";
import { Context } from "../context/helpers/Context";

function Books() {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getBooks();
  }, []);

  return (
    <div>
      {store.books.map((book) => {
        return <Book key={book.id} book={book} />;
      })}
    </div>
  );
}

export default Books;
