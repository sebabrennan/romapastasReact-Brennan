import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {

    const [totalPrice, setTotalPrice] = useState(0)
    const {cartItems} = useContext(CartContext);

    useEffect ( () => {
        let total = 0;
        cartItems.forEach(item => {
            total+= item.price;
        });
        setTotalPrice(total);
    }, [cartItems])

    return ( 
        <>
            <ul>
                {cartItems.map (item => (
                    <>
                        <li>{item.product}</li>
                        <li>{item.price}</li>
                        <li>{item.quantity}</li>
                    </>
                    )
                )}
            </ul>
            <h1 className="bg-primary">{`Your total is ARS ${totalPrice}`}</h1>
        </>
     );
}
 
export default Cart;