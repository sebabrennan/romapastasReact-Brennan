import React, { useState } from 'react';

const ItemCount = (props) => {

    const [count, setCount] = useState(props.initial);

    const handleAdd = () => {
        setCount(count + 1)
    }

    console.log ('CONTINUAR MIN. 19')

    const handleSubstract = () => {
        setCount(count - 1)
    }

    return ( 
        <>
            <div class="container px-5 py-8 mx-auto">
                <div class="flex flex-col text-center w-full mb-12">
                    <h1 class="sm:text-3x1 text-2x1 font-bold title-font mb">Comprar productos</h1>
                    <div class="card">
                        <div>
                        <button class="btn" onClick={handleSubstract}>-</button>
                            <span>{count}</span>
                            <button class="btn" onClick={handleAdd}>+</button>
                        </div>
                        <div>
                            <button class="btn">Agregar al carrito</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default ItemCount;