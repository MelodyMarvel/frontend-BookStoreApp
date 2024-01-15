import { useCartContext } from '../../cartContext';
import { useEffect, useState } from 'react';
import './AddToCart.css';

function AddCart() {
  const { cartItems,setCartItems, removeFromCart } = useCartContext();
const [total, setTotal] = useState()

  useEffect(() => {
    getTotal(cartItems);
  }, [cartItems]); 

   const reduction = (id) => {
    const updatedCart = cartItems.map((book) =>
      book.id === id && book.qty > 1 ? { ...book, qty: book.qty - 1 } : book
    );
    setCartItems(updatedCart);
    // getTotal(updatedCart);
  };

  const increase = (id) => {
    console.log(id)
    const updatedCart = cartItems.map((book) =>
      book.id === id ? { ...book, qty: book.qty + 1 } : book
      
    );
    console.log(updatedCart)
    

    setCartItems(updatedCart);

    // getTotal(updatedCart);
    console.log(updatedCart)
  };

  const getTotal = (cartItems) => {
    const res = cartItems.reduce((prev, item) => {
      console.log(item.qty)

      console.log (typeof(item.price))
      return (prev + item.price * item.qty.toFixed(2));
    }, 0);
    setTotal(res);
    console.log(res)

  };


  if (cartItems.length === 0) {
    return <h2 style={{ textAlign: "center" }}>No products in the cart</h2>;
  } else {
    return (
      <>
        {cartItems.map((item) => {
          // Find the corresponding book in the global context based on item.id
          
          console.log(item)

          console.log(cartItems)

        
            return (
              <div className="container details cart" key={item.id}>
                <img src={item.imageLinks?.smallThumbnail} alt={item.title} />
                <div className="box">
                  <div className="row">
                    <h2>{item.title}</h2>
                    <span>total:${item.price * item.qty}</span>
                  {/* <span>total:${total}</span> */}

                  </div>
                  <p>Authors: {item.authors}</p>
                  <p>Categories: {item.categories}</p>
                  <p style={{color:"crimson"}}>Price: ${item.price}</p>
                  <div className="amount">
                  <button className="count" type='button' onClick={() => increase(item.id)}> + </button>
                    <span>qty:{item.qty}</span>
                  <button className="count" onClick={() => reduction(item.id)}> - </button>

                  </div>
                </div>
                <div className="delete" onClick={() => removeFromCart(item.id)}>X</div>
              </div>
            );
          
          
        })}
        <div className="total">
          {/* <Link to="/payment">Payment</Link> */}
          <h3>Total: ${total}</h3>
        </div>
      </>
    );
  }
}

export default AddCart;
