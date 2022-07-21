import './Item.css'
import { Link } from "react-router-dom";

const Item = ({ item }) => { 

    const { id, product, category, price, stock, img, description } = item;

    return ( 
        <>
            <div className="card" style={{ width: "15rem", height: "30rem" }}>
                <img src={img} className='card-img-top'/>
                <div className='card-body d-flex flex-column justify-content-center'>
                    <h5 className='card-title'>
                        {product}
                    </h5>
                    <p className="card-text">{`${stock} units available!`}</p>
                    <Link to={`item/${id}`}>
                        <button className="btn btn-primary">See product details</button>
                    </Link>
                </div>
            </div>
        </>
     );
}
 
export default Item;