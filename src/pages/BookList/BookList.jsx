import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Book from '../../components/SearchResult/Book';
import { useCartContext } from '../../cartContext';
import { useGlobalContext } from '../../context';

function BookList() {
  const { category } = useParams();
  // const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const { books, setBooks } = useGlobalContext();

  const { addToCart } = useCartContext();

  useEffect(() => {
    // let apiUrl = `https://www.googleapis.com/books/v1/volumes?q=subject:${category}&maxResults=5`;
    let apiUrl = 'http://localhost:8000/api/books/';


    const fetchBooks = async () => {
      try {
        const response = await axios.get(apiUrl);
        const data = response.data;

        if(data.items){
          const newBooks = data.items.map((bookSingle) => {
              const {id, volumeInfo} = bookSingle;

              const {
                  authors,
                  categories,
                  imageLinks,
                  publishedDate,
                  title,
                } = volumeInfo;
                
                const price = (Math.random() * (100 - 10) + 10).toFixed(2);

              return {
                  id: id,
                  authors: authors,
                  categories: categories,
                  imageLinks: imageLinks,
                  publishedDate: publishedDate,
                  title: title,
                  price:price
              }
          });

          setBooks(newBooks);
        } else {
          setBooks([]);
        }

        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchBooks();
  }, [category]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return ( 
    <>
        <h2>Books in Category: {category}</h2>
    <div className='container category'>
      {books.map((book, index) => {
        return (
          <Book key = {index} {...book} addToCart={addToCart}/>
              )})}
    </div>
    </> 
  
  );
}

export default BookList;
