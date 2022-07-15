import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import details from './helpers/details';

const ItemDetailContainer = () => {

    const [itemDetail, setItemDetails] = useState([])

    console.log('RENDER ITEM DETAIL')
    console.log(itemDetail)
    console.log(details)

    useEffect ( () => {
        const getItem = new Promise ( (resolve, reject) => {
            setTimeout (
                () => {
                    resolve(details)
                },
                2000);
        })

        getItem.then (
            (res) => {
                setItemDetails(res)
            }
        ).catch(
            (err) => console.error(err)
        )
    }, [])



    return ( 
        <>
            <ItemDetail item={itemDetail}/>
        </>
     );
}
 
export default ItemDetailContainer;