import React, { useState, useEffect } from "react";
import reactDom from "react-dom";
import Axios from "axios";
import './App.css';

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const { data } = await Axios.get(
      "http://www.mocky.io/v2/5cc008de310000440a035fdf"
    );
    const books = data.book_array;
    setBooks(books);
    console.log(books);
  };

  useEffect(() => {
    fetchBooks();
  }, []);



  function changeOnClick(book) {
    const element = (
      <div className="desc">
            <h1>{book.book_title}</h1>
            <img src={book.image}></img>
            <p>Author: {book.author}</p>
        </div>
    );
    reactDom.render(element, document.getElementById('root'));
  }
  return (
    <div className="index">
      <h>Books</h>
      <p>Click on the title to know more</p>
      <ul>
      {books.map((book) => (
        <li><a href="" onClick={(e) => {
            e.preventDefault();
            changeOnClick(book);
          }}>
            {book.book_title}</a></li>
      ))}
      </ul>
    </div>
  );
}

export default App;





