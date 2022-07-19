import { useEffect, useState } from "react";
import database from "./helpers/database";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    /* function getItem() {
        return new Promise ( (resolve, reject) => {
            setTimeout(() => {
                resolve(database);
            }, 2000);
        });
    }

    function ItemDetailContainer () {
        const [itemDetail, setItemDetails] = useState([])

        useEffect ( () => {
            getItem().then( res => {
                setItemDetails(res);
            });
        }, []);

    } */

    const [itemDetail, setItemDetails] = useState([])

    console.log("%c Render ItemDetailContainer", "color: blue");
    console.log(itemDetail)


    useEffect( () => {
        let getItem = new Promise ( (resolve, reject) => {
            setTimeout(
                () => {
                    resolve(database)
                },
                2000);
        })
    
        getItem.then(
            (res) => {
                setItemDetails(res)
            }
        ).catch(
            (err) => console.error(err)
        )
    }, [])

    return ( 
        <>
            <ItemDetail itemDetail={itemDetail}/>
        </>
     );
}
 
export default ItemDetailContainer;