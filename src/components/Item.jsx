import "./Item.css"
import { Link } from "react-router-dom";

const Item = ({ item }) => { 

    const { id, product, stock, img } = item;

    return ( 
        <>
            <div className="card mt-3 cardItem" style={{ width: "15rem", height: "30rem" }}>
                <img src={img} className='card-img-top'/>
                <div className='card-body d-flex flex-column justify-content-center'>
                    <h5 className='card-title'>
                        {product}
                    </h5>
                    <p className="card-text">{`${stock} unidades disponibles!`}</p>
                    <Link to={`item/${id}`}>
                        <button className="btn btn-color">Ver más...</button>
                    </Link>
                </div>
            </div>
        </>
     );
}
 
export default Item;