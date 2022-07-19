import { useState, useEffect } from "react";
import database from "./helpers/database";
import ItemList from "./ItemList";

const ItemListContainer = () => {

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
            (res) => {
                setItems(res)
            }
        ).catch(
            (err) => console.error(err)
        )
    }, [])

    

    return (
        <>
           <ItemList items={items}/>
        </>
    )
}



 
export default ItemListContainer;