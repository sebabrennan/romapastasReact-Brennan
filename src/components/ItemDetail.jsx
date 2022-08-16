import ItemCount from './ItemCount';
import { useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import "./ItemDetail.css"

const ItemDetail = ({itemDetail}) => {
    const { setCartItems } = useContext(CartContext);
    const [amount, setAmount] = useState(0);
    const {product, img, description, rinde, stock} = itemDetail;
    const {addItem} = useContext(CartContext);
    
    const onAdd = (amount) => {
      addItem(itemDetail, amount);
    };
    
    return ( 
    <>
      <div className="card contenedor">
        <img src={img} alt='img' style={{ width: "40%", borderRadius: "20px" }}/>
        <div className='card-body d-flex flex-column'>
          <h3 className='card-title'>
            {product}
          </h3>
          <h6>Opiniones:</h6>
          <p>{description}</p>
          {/* <p className="card-text">{`${itemDetail.stock} units available!`}</p> */}
          <p><strong>Comen:</strong> {rinde}</p>
          
            {amount == 0 ? (
            <ItemCount stock={stock} initial={0} onAdd={onAdd} />) : (<h1>{amount} agregados al carrito</h1>)}
            <div className="d-flex justify-content-center my-3">
              <Link to="/cart/">
                <button className="btn btn-warning">Ver mi pedido</button>
              </Link>
            </div>
        </div>
      </div>
    </> 
    );
}
 
export default ItemDetail;