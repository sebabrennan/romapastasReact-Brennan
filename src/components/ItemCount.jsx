/* import React, { useState } from 'react';

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
 
export default ItemCount; */

import { useState } from "react";
// Ponemos valores default a las props, ya que no funcionaría si nos olvidamos de enviarlas.
const ItemCount = ({ stock = 2, initial = 0, onAdd }) => {
  const [count, setCount] = useState(initial);
  const updateCount = (op) => {
    if (op === "-" && count > 0) {
      setCount(count - 1);
    }
    if (op === "+" && count < stock) {
      setCount(count + 1);
    }
  };
  const updateCountInput = (e) => {
    const { value } = e.target;
    if (value <= stock) {
      setCount(isNaN(value) ? 0 : parseInt(value));
    }
  };
  return (
    <>
      <div className="input-group input-spinner mb-3 d-flex justify-content-center">
        <input
          onChange={(e) => updateCountInput(e)}
          className="border-warning"
          placeholder=""
          value={count}
          type="number"
        />
        <button
          onClick={() => updateCount("-")}
          className="btn btn-icon btn-warning"
          type="button"
        >
          -
        </button>
        <button
          onClick={() => updateCount("+")}
          className="btn btn-icon btn-warning"
          type="button"
        >
          +
        </button>
      </div>
      <div className="d-flex justify-content-center">
        <button
          onClick={() => onAdd(count)}
          type="button"
          className="btn btn-info"
          disabled={count === "" || count === 0}
        >
          Comprar
        </button>
      </div>
    </>
  );
};

export default ItemCount;