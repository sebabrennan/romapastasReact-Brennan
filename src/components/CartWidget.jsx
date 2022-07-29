import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './NavBar.css';

const CartWidget= () => {

  const { cartItems } = useContext(CartContext)

    return ( 
    <>
      <i className="bi bi-cart2" style={{width: 40}}></i>
      <span>{cartItems.length}</span>
    </>
      );
}
 
export default CartWidget;
