import './Item.css'

const Item = ({price, product, stock, img}) => { 


    return ( 
        <>
            <div className="card d-flex flex-column align-items-center">
                <div>
                    <img src={img} alt="" className='card-img-top'/>
                </div>
                <div>
                    <h5>
                        {product}
                    </h5>
                </div>
                <div>
                    <p>
                        {price} ARS
                    </p>
                </div>
                <div>
                    <button className="btn">Agregar producto</button>
                </div>
                <div>
                    <p>
                        Stock disponible: {stock}
                    </p>
                </div>
            </div>
        </>
     );
}
 
export default Item;