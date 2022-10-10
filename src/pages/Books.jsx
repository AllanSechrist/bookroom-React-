import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
// import Book from "../components/books/Book";
import { Context } from "../context/helpers/Context";

function Books() {
  const { store, actions } = useContext(Context);

  const handleDelete = (bookId) => {
    actions.deleteBook(bookId);
    window.location.reload(false)
  }

  useEffect(() => {
    actions.getBooks();
  }, []);


  return (
    <div>
      {/* {store.books.map((book) => {
        return <Book key={book.id} book={book} />;
      })} */}
      <table>
        <tr>
          <th>Title</th>
          <th>Series</th>
          <th>publisher</th>
          <th>author</th>
          <th>isbn</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        {store.books.map((book) => {
          return (
            <tr>
              <th>{book.title}</th>
              <th>{book.series}</th>
              <th>{book.publisher}</th>
              <th>{book.author}</th>
              <th>{book.isbn}</th>
              <th>
                <Link
                  to={`/books/${book.id}/edit/`}
                  className="btn btn-sm btn-info"
                >
                  Edit
                </Link>
              </th>
              <th>
                <button
                  className="btn btn-sm btn-error"
                  onClick={() => {
                    handleDelete(book.id)
                  }}
                >
                  Delete
                </button>
              </th>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Books;
