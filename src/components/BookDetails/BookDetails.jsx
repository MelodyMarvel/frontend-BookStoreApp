import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loader/Loader";
import { Button } from "antd";
import "./BookDetails.css";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context";
import { useCartContext } from "../../cartContext";


const BookDetails = () => {
  const { books, loading } = useGlobalContext();
  const { addToCart } = useCartContext();

  const navigate = useNavigate();
  const { id } = useParams();

  const [bookDetails, setBookDetails] = useState(null);
  const [error, setError] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  const handleAddToCart = () => {
    addToCart(bookDetails);
    setIsInCart(true);
  };

  useEffect(() => {
    const findBook = books.find(book => book.id === id);
    console.log("ID Parameter:", id);

    if (findBook) {
      setBookDetails(findBook);
    } else {
      setError(true);
    }
  }, [books, id]);

  if (loading) return <Loading />;

  return (
    <section className="details">
      <div className="">
        <button
          type="button"
          className="flex flex-c back-btn"
          onClick={() => navigate("/")}
        >
          <FaArrowLeft size={22} />
          <span className="fs-18 fw-6">Go Back</span>
        </button>

        {error ? ( // Conditionally render error message
          <div className="error-message">
            <p>Book not found.</p>
          </div>
        ) : (
          <div className="book-details">
            <div className="book-details-img">
              <img src={bookDetails?.imageLinks?.thumbnail} alt="cover" />
            </div>
            <div className="book-details-info">
              <div className="book-details-item title">
                <span className="fw-6 fs-24">{bookDetails?.title}</span>
              </div>
              <div className="book-details-item authors">
                <span>{bookDetails?.authors}</span>
              </div>
              <div className="book-details-item description">
                <span>{bookDetails?.description}</span>
              </div>
              <div className="book-details-item">
                <span className="fw-6">Categories: </span>
                <span className="text-italic">{bookDetails?.categories}</span>
              </div>
              <div className="book-details-item">
                <span className="fw-6">Published Date: </span>
                <span className="text-italic">{bookDetails?.publishedDate}</span>
              </div>
              <div>
              <Button
                type={isInCart ? "danger" : "primary"}
                className={isInCart ? "red-text" : ""}
                onClick={handleAddToCart}
                >
                {isInCart ? "In cart" : "Add to cart"}
              </Button>
          </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BookDetails;
