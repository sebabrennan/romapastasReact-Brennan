import React from 'react';

const CartItem = ({item, quantity, removeProduct}) => {
    return ( 
        <>
            <tr>
                <td>{item.product}</td>
                <td>{item.price}</td>
                <td>{quantity}</td>
                <button className='btn bg-danger' onClick={() => removeProduct(item.id)}>
                    Eliminar
                </button>
            </tr>
           {/*  <div className='d-flex'> */}
           {/*  </div> */}
        </>
    );
}
 
export default CartItem;