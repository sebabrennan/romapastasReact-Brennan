import React, { useContext} from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import "./Cart.css"

const Cart = () => {

    const {cartItems, removeProduct, clearCart, total} = useContext(CartContext);
    const totalPrice= total();


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
                    <div className="contenedor-cart">    
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
                                    <td><strong>{totalPrice}</strong></td>
                                    <td>
                                        <button className="btn" onClick={() => clearCart()}>
                                            <i class="bi bi-trash3-fill"></i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                
                        <div className="d-flex justify-content-center gap-5">
                            <button className="btn btn-color"><Link to={"/"} className="linkUnstyled">
                                <i class="bi bi-house"></i>
                                Inicio</Link>
                            </button>
                            <Link to="/sendOrder">
                                <button className="btn bg-info">Confirmar compra</button>
                            </Link>
                        </div>
                    </div>
                </>
            )}
        </>
     );
}
 
export default Cart;