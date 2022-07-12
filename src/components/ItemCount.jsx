import React, { useState } from 'react';

const ItemCount = ({initial, stock}) => {

    const [count, setCount] = useState(initial);

    const handleAdd = () => {
        if (count < stock) setCount(prev => prev + 1)
    }

    const handleSubstract = () => {		
        if (count > 1  && stock > 1) setCount(prev => prev - 1)
    }

    return ( 
        <>
            <div className="container px-5 py-8 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3x1 text-2x1 font-bold title-font mb">Comprar productos</h1>
                    <div className="card">
                        <div>
                        <button className="btn" onClick={handleSubstract}>-</button>
                            <span>{count}</span>
                            <button className="btn" onClick={handleAdd}>+</button>
                        </div>
                        <div>
                            <button className="btn">Agregar al carrito</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default ItemCount;