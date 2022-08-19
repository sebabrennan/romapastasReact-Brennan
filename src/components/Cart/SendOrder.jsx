import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./Cart.css"

const SendOrder = () => {

    const {sendOrder, total} = useContext(CartContext)
    const totalPrice= total();
    const handleSubmit = (e) => {
        e.preventDefault();
        const inputs = document.getElementsByTagName("input");
        const data = Array.from(inputs).map((input) => input.value);
        sendOrder(totalPrice, {name: data[0], email: data[1], phone: data[2]})        
    }

    return ( 
        <>
            <div className="d-flex justify-content-center">
                <form onSubmit={handleSubmit} className="form-contenedor">
                    <h5 className="tituloForm">Datos para confirmar su orden de compra:</h5>
                    <div>
                        <div className="formulario">
                            <label htmlFor="name">Nombre y apellido:</label>
                            <input type="text" required />
                        </div>
                        <div className="formulario">
                            <label htmlFor="email">E-mail:</label>
                            <input type="email" required />
                        </div>
                        <div className="formulario">  
                            <label htmlFor="contact">Celular:</label>
                            <input type="tel" required/>
                        </div>
                    </div>
                    <button className="btn bg-info"
                                    onClick={() => sendOrder(totalPrice)}
                                    type="submit"
                                    >Enviar pedido
                    </button>
                </form>
            </div>
        </>
     );
}
 
export default SendOrder;