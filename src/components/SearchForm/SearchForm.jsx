import { useState} from 'react';
import { useNavigate } from "react-router-dom";
import {FaSearch} from "react-icons/fa";
import { useGlobalContext } from '../../context';
import "./SearchForm.css";


function SearchForm() {
  const [searchTerm, setSearchTerm] = useState('')

  const {setSearchResults, fetchBooks} = useGlobalContext();
  // const searchText = useRef('');
  const navigate = useNavigate();

  const handleSearch = async()=>{
    let tempSearchTerm = searchTerm.trim();
    if((tempSearchTerm).length === 0){
      navigate("/book");
      // setSearchTerm("the lost world");
      setSearchResults("Please Enter Something ...");

    } else {
     await fetchBooks(searchTerm)

    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch()
    navigate("/book");
  };

  const handleChange = (e)=>{
   return setSearchTerm(e.target.value)
  }



  return (
    <div className='search-form'>
    <div className='container'>
      <div className='search-form-content'>
        <form className='search-form' onSubmit={handleSubmit}>
          <div className='search-form-elem flex flex-sb bg-white'>
            <input type = "text" className='form-control' placeholder='The Lost World ...' value={searchTerm} onChange={handleChange}/>
            <button type = "submit" className='flex flex-c' onClick={handleSubmit}>
              <FaSearch className='text-purple' size = {32} />
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>  )
}

export default SearchForm