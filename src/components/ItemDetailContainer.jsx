import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import database from "./helpers/database";
/* import detailsItem from "./helpers/details" */
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    const { id } = useParams();
    console.log(id)
    const [itemDetail, setItemDetails] = useState({})

    const getItem = new Promise ((resolve) => {
        setTimeout(() => resolve(database), 2000);
    });

    useEffect( () => {
       getItem.then((res) => {
        const products = res;
        const foundItem = products.filter((item) => item.id == id)
            setItemDetails(foundItem[0])
        });
   }, []);

    return ( 
        <>
            <ItemDetail itemDetail={itemDetail}/>
        </>
     );
}
 
export default ItemDetailContainer;