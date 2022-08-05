import { addDoc, collection, getFirestore, writeBatch, doc, updateDoc } from "firebase/firestore";
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

  /* Firebase */
  const sendOrder = (totalPrice, buyerData) => {
    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    const order = {
      items: cartItems,
      total: totalPrice,
      buyer: buyerData
    }
    addDoc(orderCollection, order)
      .then(res => {
        alert (`Orden de compra realizada. Su id de compra es: ${res.id}`)
        /* const {items} = order;
        const {item} = items; */
      }) 
      .catch(err => alert (`Orden de compra rechazada: ${err}`))
  }

  /* const updateOrder = () => {
    const db = getFirestore();
    const docRef = doc(db,"orders", cartItems.id)
    updateDoc(docRef, {stock: item.stock - quantity: item.quantity})
  } */

  const total = () => {
    return cartItems.reduce(
      (valorAnterior, valorActual) => valorAnterior + valorActual.item.price * valorActual.quantity,
      0);
  };
  
  return (
    <CartContext.Provider value={{ cartItems, addItem, clearCart, removeProduct, total, sendOrder}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;