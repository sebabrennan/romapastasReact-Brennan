import React, { useContext} from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Cart = () => {

    const {cartItems, removeProduct, clearCart, total, sendOrder} = useContext(CartContext);
    const totalPrice= total();
    const handleSubmit = (e) => {
        e.preventDefault();
        const inputs = document.getElementsByTagName("input");
        const data = Array.from(inputs).map((input, index) => input.value);
        sendOrder(totalPrice, {name: data[0], email: data[1], phone: data[2]})        
    }


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
                                <td><strong>{totalPrice}</strong></td>
                            </tr>
                        </tbody>
                    </table>
                    <form onSubmit={handleSubmit}>
                        <input type="text" />
                        <input type="email" />
                        <input type="tel" />
                        <button className="btn bg-info"
                                onClick={() => sendOrder(totalPrice)}
                                type="submit">Send order</button>
                    </form>

                    <button className="btn bg-danger" onClick={() => clearCart()}>Clean cart</button>
                    <button className="btn bg-warning"><Link to={"/"}>Seguir comprando</Link></button>
                </>
            )}
        </>
     );
}
 
export default Cart;