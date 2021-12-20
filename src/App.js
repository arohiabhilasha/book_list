import React, { useState, useEffect } from "react";
import reactDom from "react-dom";
import Axios from "axios";



function App() {
  const [books, setbooks] = useState([]);

  const fetchbooks = async () => {
    const { data } = await Axios.get(
      "http://www.mocky.io/v2/5cc008de310000440a035fdf"
    );
    const books = data.book_array;
    setbooks(books);
    console.log(books);
  };

  useEffect(() => {
    fetchbooks();
  }, []);



  function tick(book) {
    const element = (
      <div>
            <h1>{book.book_title}</h1>
            <img src={book.image}></img>
            <p>Author: {book.author}</p>
        </div>
    );
    reactDom.render(element, document.getElementById('root'));
  }
  return (
    <div>
      <h>Books</h>
      <ul>
      {books.map((book) => (
        <li><a href="" onClick={(e) => {
            e.preventDefault();
            tick(book);
          }}>
            {book.book_title}</a></li>
      ))}
      </ul>
    </div>
  );
}

export default App;





