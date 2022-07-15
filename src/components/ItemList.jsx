import Item from "./Item";

const ItemList = ({items}) => {

    console.log("Render ItemList",items)
    
    return ( 
        <>
            <h1>ItemList</h1>
            <div className="d-flex justify-content-around align-items-center">
            {
                items.map(
                    cadaItem => <Item key={cadaItem.id} product={cadaItem.product} price={cadaItem.price} stock={cadaItem.stock} img={cadaItem.img}  />
                )
            }
            </div>
        </>
     );
}
 
export default ItemList;