import Item from "./Item";

const ItemList = ({ items }) => {
    return (
        <div className="d-flex justify-content-around flex-wrap mt-3">
          {items.map((item) => (
            <div key={item.id}>
              <Item item={item} />
            </div>
          ))}
        </div>
    );
  };
 
export default ItemList;