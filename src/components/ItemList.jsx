import Item from "./Item";
import "./ItemList.css";

const ItemList = ({ items }) => {
    return (
        <div className="contenedor">
          {items.map((item) => (
            <div key={item.id}>
              <Item item={item} />
            </div>
          ))}
        </div>
    );
  };
 
export default ItemList;