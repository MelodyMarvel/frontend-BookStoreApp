import { useGlobalContext } from '../../context';
import Book from "./Book";
import Loading from "../Loader/Loader";
import "./SearchResult.css";


const SearchResult = () => {
  const {books, loading, searchTerm} = useGlobalContext();
  
  const bookList = books.map((singleBook) => {
    return {
      ...singleBook,

    }
  });


  if(loading) return <Loading />;

  return (
    <section className='booklist'>
      <div className='container'>
        <div className='section-title'>
        {searchTerm ? <h2>Your Search Result</h2> : <h2>Available Books</h2>}
        </div>
        <div className='booklist-content grid'>
          {
            bookList.map((book, index) => {
              return (
                <Book key = {index} {...book} />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default SearchResult