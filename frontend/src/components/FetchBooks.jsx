import React, { useEffect, useState } from 'react';

const FetchBooks = () => {
  const URL = 'http://openlibrary.org/search.json?author=tolkien';
  const [data, setData] = useState({});

  async function fetchData() {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setData(data);
      console.log(data); // log the data after it's been fetched
    } catch {
      console.log('error');
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (data.docs) {
    data.docs.map((book) => {
      //console.log(book.title);
    });

    const firstBook = data.docs.slice(0, 1)[0];
    console.log(firstBook.title);
  }

  return <div>FetchBooks</div>;
};

export default FetchBooks;
