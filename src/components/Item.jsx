import './Item.css'

const Item = ({cadaItem}) => {
    return ( 
        <>
            <div className="card d-flex flex-column align-items-center">
                <div>
                    {/* {cadaItem.img} */}
                </div>
                <div>
                    <h5>
                        {cadaItem.product}
                    </h5>
                </div>
                <div>
                    <p>
                        {cadaItem.price} ARS
                    </p>
                </div>
                <div>
                    <button className="btn">Agregar producto</button>
                </div>
                <div>
                    <p>
                        Stock disponible: {cadaItem.stock}
                    </p>
                </div>
            </div>
        </>
     );
}
 
export default Item;