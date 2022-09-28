import React, { useEffect, useContext } from "react";
import Book from "../components/books/Book";
import { Context } from "../context/helpers/Context";
import { useParams } from "react-router-dom";

function ReqBook() {
  let { bookId } = useParams();
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getBook(bookId);
  }, []);

  return (
    <div>
      <Book book={store.book} />
      <div className="btn-group btn-group-vertical lg:btn-group-horizontal">
        <button className="btn btn-active px-7">Edit</button>
        <button className="btn">Delete</button>
      </div>
    </div>
  );
}

export default ReqBook;
