import { useState, useEffect } from "react";
import database from "./helpers/database";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom"
import Spinner from "./helpers/spinner"
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

const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect( () => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        getDocs (itemsCollection).then(snapshot => {
            const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setItems(data);
            setLoading(false)
        })
    })

    return (
        <> 
            {loading ? (<Spinner />) : (<ItemList items={items}/>)}
        </>
    )
}



 
export default ItemListContainer;