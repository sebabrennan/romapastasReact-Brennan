import { useState, useEffect } from "react";
import database from "./helpers/database";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom"
import Spinner from "./helpers/spinner"

const ItemListContainer = () => {

    const { name } = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false)
    
    const promise = new Promise ((resolve) => {
        setTimeout(() => resolve(database), 2000);
    });

    useEffect( () => {
        setLoading(true);
        promise.then((res) => {
            const products = res;
            if (name) {
                setItems(products.filter((product) => product.category == name))
            } else {
                setItems(products);
            }
            setLoading(false);
            });
    }, [name]);


    return (
        <> 
            {loading ? (<Spinner />) : (<ItemList items={items}/>)}
        </>
    )
}



 
export default ItemListContainer;