import { useState, useEffect } from "react";
import database from "./helpers/database";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom"

const ItemListContainer = () => {

    const { name } = useParams();
    console.log(name)
    const [items, setItems] = useState([]);
    
    const promise = new Promise ((resolve) => {
        setTimeout(() => resolve(database), 2000);
    });

    useEffect( () => {
        promise.then((res) => {
            const products = res;
            if (name) {
                setItems(products.filter((product) => product.category == name))
            } else {
                setItems(products);
            }
            });
    }, [name]);

    

    return (
        <>
           <ItemList items={items}/>
        </>
    )
}



 
export default ItemListContainer;