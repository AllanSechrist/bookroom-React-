import React from "react";

function Book({book : {id, title, series, publisher, author, isbn}}) {
  return <div>
    <h1 className="text-4xl">Title: {title}</h1>
    <h3 className="text-4xl py-5">Series: {series}</h3>
    <p className="pb-5">Publisher: {publisher}</p>
    <p className="pb-5">Author: {author}</p>
    <p className="pb-5">ISBN: {isbn}</p>

  </div>;
}

export default Book;
