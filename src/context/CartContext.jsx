import React, { createContext, useState } from "react";
/* import { useContext } from "react"; */

export const CartContext = createContext();

/* const useCartContext = () => useContext(CartContext); */

const CartProvider = ({children}) => {
  const [cartItems, setCartItems] = useState([]);
  
  /* Carrito */
  const [cart, setCart] = useState([]);

  /* Sumar un producto al carrito */
  const addProduct = (item, quantity) => {
    let newCart;
    let product = cart.find(product => product.id === item.id);
    if (product) {
      product.quantity += quantity;
      newCart = [...cart];
    } else {
      product = {...item, quantity: quantity};
      newCart = [...cart, product];
    }
    setCart(newCart)
  }

  /* Limpiar todo el carrito */
  const clearCart = () => setCart([]);

  /* Verificar si ya está el producto en el carrito */  
  const isInCart = (id) => {
    return cart.find(product => product.id === id) ? true : false;
  }
  
  /* Borrar un producto del carrito */
  const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));
  
  return (
    <CartContext.Provider value={{ cartItems, setCartItems, addProduct, clearCart, isInCart, removeProduct}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;