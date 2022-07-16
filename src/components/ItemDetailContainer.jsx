import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import details from './helpers/details';

const ItemDetailContainer = () => {

    const [itemDetail, setItemDetails] = useState([])

    console.log("%c Render ItemDetailContainer", "color: blue");
    console.log(itemDetail)


    useEffect( () => {
        let getItem = new Promise ( (resolve, reject) => {
            setTimeout(
                () => {
                    resolve(details)
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

    /* const getItem = new Promise ( (resolve, reject) => {
        setTimeout (
            () => {
                resolve(details)
            },
            2000);
    })

    useEffect ( () => {
        
        getItem.then (
            (res) => {
                setItemDetails(res, console.log(res))
            }
        ).catch(
            (err) => console.error(err)
        )
    }, []) */



    return ( 
        <>
            <ItemDetail itemDetail={itemDetail}/>
        </>
     );
}
 
export default ItemDetailContainer;