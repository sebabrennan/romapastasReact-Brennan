import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom"
import Spinner from "./helpers/spinner"
import {
    getFirestore,
    collection,
    getDocs,
    query,
    where,
  } from "firebase/firestore";

const ItemListContainer = () => {

   /*  const params = useParams()
    console.log(params) */
    
    const {categoryId} = useParams();
    console.log(categoryId)

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true)

    const container = () => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const fillterCollection = categoryId ? query(itemsCollection, where("category", "==", categoryId))
        : itemsCollection;
        getDocs (fillterCollection).then(snapshot => {
            const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setItems(data);
            setLoading(false)
        })
    }

    useEffect( () => {
        container();
    }, [categoryId])

    return (
        <> 
            {loading ? (<Spinner />) : (<ItemList items={items}/>)}
        </>
    )
}



 
export default ItemListContainer;