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
    
    const {name} = useParams();

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true)

    const container = () => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const fillterCollection = name ? query(itemsCollection, where("category", "==", name))
        : itemsCollection;
        getDocs (fillterCollection).then(snapshot => {
            const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setItems(data);
            setLoading(false)
        })
    }

    useEffect( () => {
        container();
    }, [name]);

    return (
        <> 
            {loading ? (<Spinner />) : (<ItemList items={items}/>)}
        </>
    )
}
 
export default ItemListContainer;