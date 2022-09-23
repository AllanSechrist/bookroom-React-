import React, {useState, useEffect} from "react";
import axiosInstance from "../api/axios";
import Book from "../components/books/Book";

const BOOKS_URL = "/v1/books/"

function Books() {
	const [booksList, setBooksList] = useState([])
	const getBooks = async () => {
		const data = await axiosInstance.get(BOOKS_URL)
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
