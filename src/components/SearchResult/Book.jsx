import { Link } from "react-router-dom";
import "./SearchResult.css";
import { Button } from "antd";
import { useState } from "react";
import { useCartContext } from "../../cartContext";

const Book = (book) => {
  const [isInCart, setIsInCart] = useState(false);
  const { addToCart } = useCartContext();

  const handleAddToCart = () => {
    addToCart(book);
    setIsInCart(true);
  };

  return (
      <div className="book-item flex flex-column flex-sb">
        <Link to={`/book/${book.id}`}>
        <div className="book-item-img">
          <img src={book.imageLinks?.thumbnail} alt="cover" />
        </div>
        </Link>

        <div className="book-item-info text-center">
          <Link to={`/book/${book.id}`} {...book}>
            <div className="book-item-info-item title fw-7 fs-18">
              <span>{book.title}</span>
            </div>
          </Link>

          <div className="book-item-info-item author fs-15">
            <span className="text-capitalize fw-7">Author: </span>
            <span>{book.authors?.join(", ")}</span>
          </div>

          <div className="book-item-info-item edition-count fs-15">
            <span className="text-capitalize fw-7">Published Date: </span>
            <span>{book.publishedDate}</span>
          </div>

          <div className="book-item-info-item publish-year fs-15">
            <span className="text-capitalize fw-7">categories: </span>
            <span>{book.categories}</span>
          </div>

          <div className="book-item-info-item publish-year fs-15">
            <span className="text-capitalize fw-7">Price: </span>
            <span>{book.price}</span>
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
  );
};

export default Book;
