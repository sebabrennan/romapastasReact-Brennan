
import { useState } from "react";

const ItemCount = ({ stock = 2, initial = 0, onAdd }) => {
  const [count, setCount] = useState(initial);
  const updateCount = (operator) => {
    if (operator === "remove" && count > 0) {
      setCount(count - 1);
    }
    if (operator === "add" && count < stock) {
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
          onClick={() => updateCount("remove")}
          className="btn btn-icon btn-warning"
          type="button"
        >
          -
        </button>
        <button
          onClick={() => updateCount("add")}
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
          Agregar al carrito
        </button>
      </div>
    </>
  );
};

export default ItemCount;