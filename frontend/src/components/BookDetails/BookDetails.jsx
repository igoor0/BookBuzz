import React from 'react'
import { useGlobalContext } from '../../context'
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover.jpg";
import Book from "../BookList/Book";
import "./BookDetails.css";


function BookDetails() {

    const {book, loading, resultTitle} = useGlobalContext();
    const booksWithCover = book.map((singleBook) => {
        return {
            ...singleBook,

            id: (singleBook.id).replace("/works/", ""),
            cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg,
        }
    });

    if(loading) return <Loading />
  return (
    <section className='bookList'>
        <div className='container'>
            <div className='section-title'>
                <h2>{resultTitle}</h2>
            </div>
            <div className='bookList-content grid'>
                {
                booksWithCover.slice(0,30).map((item, index) => {
                    return (
                    <Book key = {index} {...item} />
                    )
                })
            }
            </div>
        </div>
    </section>
  )
}

export default BookDetails