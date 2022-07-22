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
            <div className="">
                <div className=" ">
                    <div className="">
                        <div>
                            <button className="btn" onClick={handleSubstract}>-</button>
                            <button className="btn" onClick={handleAdd}>+</button>
                            <span>{count}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default ItemCount;