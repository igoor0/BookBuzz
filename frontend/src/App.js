import React, { useEffect, useState } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(`https://openlibrary.org/search.json?title=${searchTerm}`)
      .then(response => response.json())
      .then(data => setBooks(data.docs));
  }, [searchTerm]);

  return (
    <div className="app">
      <h1>BOOKRATE</h1>

      <div className="search">
        <input
          placeholder="Search for books"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />

        <div className="container">
          {books.map(book => (
            <div className="book" title={book.title}>
              
              <div>
                <p>{book.title}</p>
              </div>

              <div>
                <img src={book.cover_i ? book.cover_i : 'https://via.placeholder.com/400'} alt={book.title} />
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
