import React, {useRef, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../../context';
import "./SearchForm.css"
import { FaSearch } from "react-icons/fa";


function SearchForm() {
  const {setSearchTerm, setResultTitle} = useGlobalContext();
  const searchText = useRef('');
  const navigate = useNavigate();

  useEffect(() => {searchText.current.focus()}, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    if ((tempSearchTerm.replace(/[^|w|s]/gi,"")).length === 0) {
      setSearchTerm('Are you sure you want to search for this?');
      setResultTitle('Please eneter a valid search term');
    } else {
      setSearchTerm(tempSearchTerm);
    }
    navigate("/book")
  }
  
  return (

    <div className = 'search-form'>
      <div className = 'container'>
        <div className='search-form-content'>
          <form className='search-form' onSubmit={handleSubmit}>
          <div className='search-form flex flex-sb bg-white'>
            <input type = "text" className='form-control' placeholder = "Search for books" ref = {searchText} />
            <button type = "submit" className='flex flex-c' onClick={handleSubmit}>
            <FaSearch className='text-brown' size = {32} />
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SearchForm