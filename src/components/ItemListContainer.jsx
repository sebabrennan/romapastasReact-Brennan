import database from "./helpers/database";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";

const ItemListContainer = (props) => {

    let [items, setItems] = useState([]);

    console.log("%c Render ItemListContainer", "color: green");
    console.log(items)

    useEffect( () => {
        let promiseItems = new Promise ( (resolve, reject) => {
            setTimeout(
                () => {
                    resolve(database)
                },
                2000);
        })
    
        promiseItems.then(
            (respuesta) => {
                setItems(database)
            }
        ).catch(
            (errorMsg) => console.error(errorMsg)
        )
    }, [])

    

    return (
        <>
           <ItemList items={items}/>
        </>
    )
}



 
export default ItemListContainer;