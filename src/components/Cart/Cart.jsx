import React, { useContext, /* useState, useEffect */ } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Cart = () => {

    const {cartItems, removeProduct, clearCart, total} = useContext(CartContext);
    const tot= total();

    return ( 
        <>
            {cartItems.length === 0 ? (
                <> 
                    <div className="mt-4">
                        <div>
                            No hay productos en el carrito, agrega algunos
                        </div>
                        <button className="btn bg-warning"><Link to={"/"}>Volver</Link></button>
                    </div>
                </>
                ) : (
                <>
                    <h1>Su pedido</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Nombre producto</th>
                                <th scope="col">Precio unitario</th>
                                <th scope="col">Unidades</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((element) => (
                                <CartItem item={element.item} quantity={element.quantity} removeProduct={removeProduct} clearCart={clearCart}/>
                                ))
                            }
                            
                            <tr>
                                <th scope="row">TOTAL</th>
                                <td></td>
                                <td></td>
                                <td><strong>{tot}</strong></td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="btn bg-danger" onClick={() => clearCart()}>Vaciar carrito</button>
                    <button className="btn bg-warning"><Link to={"/"}>Seguir comprando</Link></button>
                    <button className="btn bg-success">Terminar compra</button>
                </>
            )}
        </>
     );
}
 
export default Cart;