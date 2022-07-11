import React, { useState } from 'react';

const ItemCount = (props) => {

    const [count, setCount] = useState(props.initial);

    const handleAdd = () => {
        if (count<props.stock)
        setCount(count + 1)
    }

    const handleSubstract = () => {
        if (count>1)
        setCount(count - 1)
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