import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import Spinner from "./helpers/spinner";
import { useParams } from "react-router-dom";
import {
    getDoc,
    doc,
    getFirestore,
    collection,
    getDocs,
    query,
    where,
    limit,
  } from "firebase/firestore";

  
  const ItemDetailContainer = () => {
      
    const [itemDetail, setItemDetails] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect( () => {

        const db = getFirestore();
        const docRef = doc(db, "items", id);
        getDoc(docRef).then((snapshot) => {
            setItemDetails({ ...snapshot.data(), id: snapshot.id });
            setLoading(false)
        });
    }, [id])

    return ( 
            loading ? <Spinner /> : <ItemDetail itemDetail={itemDetail}/>
     );
}
 
export default ItemDetailContainer;