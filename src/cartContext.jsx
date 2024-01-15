import { useState, useContext, createContext } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // useEffect(() => {
  //   setCartItems([]);
  // }, []);

  const addToCart = (book) => {
    // Check if the book already exists in the cart
    const existingItem = cartItems.find((item) => item.id === book.id);

    if (existingItem) {
      // If it exists, update the quantity
      const updatedCartItems = cartItems.map((item) =>
      item.id === book.id ? { ...item, qty: item.qty + 1 } : item
      );
      setCartItems(updatedCartItems);
    } else {
      // If it doesn't exist, add it to the cart with a quantity of 1
      setCartItems([...cartItems, { ...book, qty: 1 }]);
    }
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  

  const value = {
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,

  };
  
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};

export { CartContext, CartProvider };
