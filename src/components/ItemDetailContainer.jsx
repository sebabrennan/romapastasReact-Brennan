import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import database from "./helpers/database";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    const { id } = useParams();
    console.log(id)
    const [itemDetail, setItemDetails] = useState([])

    const getItem = new Promise ((resolve) => {
        setTimeout(() => resolve(database), 2000);
    });

    useEffect( () => {
       getItem.then((res) => {
        const products = res;
        if (id) {
            setItemDetails(products.filter((product) => product.id == id))
        } else {
            setItemDetails(products);
        }    
        });
   }, [id]);
    
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
    

    return ( 
        <>
            <ItemDetail itemDetail={itemDetail}/>
        </>
     );
}
 
export default ItemDetailContainer;