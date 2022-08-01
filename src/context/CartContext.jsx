import React, { createContext, useState } from "react";

export const CartContext = createContext();


const CartProvider = ({children}) => {
  const [cartItems, setCartItems] = useState([]);

  /* Sumar un producto al carrito */
  const addItem = (item, quantity) => {
    const newItem = isInCart(item);
    if (newItem){
      quantity = quantity + newItem.quantity;
      setCartItems(
        cartItems.splice(
          cartItems.findIndex((element) => element.item.id === item.id),
          1
        )
      )
    };

    setCartItems([...cartItems, {item, quantity}]);
  };
  
  /* Verificar si ya está el producto en el carrito */  
  const isInCart = (item) => {
    return cartItems.find(element => element.item === item);
  }
  
  /* Limpiar todo el carrito */
  const clearCart = () => setCartItems([]);

  
  /* Borrar un producto del carrito */
  const removeProduct = (itemId) => setCartItems(cartItems.filter(element => element.item.id !== itemId));

  const total = () => {
    return cartItems.reduce(
      (valorAnterior, valorActual) => valorAnterior + valorActual.item.price * valorActual.quantity,
      0);
  };
  
  return (
    <CartContext.Provider value={{ cartItems, addItem, clearCart, removeProduct, total}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;