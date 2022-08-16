import React from 'react';

const CartItem = ({item, quantity, removeProduct}) => {
    return ( 
        <>
            <tr>
                <td>{item.product}</td>
                <td>{item.price}</td>
                <td>{quantity}</td>
                <button className='btn' onClick={() => removeProduct(item.id)}>
                    <i class="bi bi-trash3-fill"></i>
                </button>
            </tr>
           {/*  <div className='d-flex'> */}
           {/*  </div> */}
        </>
    );
}
 
export default CartItem;