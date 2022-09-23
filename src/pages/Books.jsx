import React, {useState, useEffect} from "react";
import axiosBooks from "../api/axiosBooks";
import Book from "../components/books/Book";

const BOOKS_URL = ""

function Books() {
	const [booksList, setBooksList] = useState([])
	const getBooks = async () => {
		const data = await axiosBooks.get(BOOKS_URL)
		const books = data.data
		setBooksList(books)
	}
	
	useEffect(() => {
		getBooks()
	}, [])

  return <div>
		{booksList.map((book) => {
			return <Book key={book.id} book={book} />;
		})}
	</div>;
}

export default Books;
