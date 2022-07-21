
const ItemDetail = ({itemDetail}) => {
    
    console.log('Render ItemDetail', itemDetail)

    return ( 
    <>
      <div className="card d-flex justify-content-around flex-row" style={{ width: "auto", margin:"3rem", borderRadius: "20px" }}>
        <img src={itemDetail.img} style={{ width: "40%", borderRadius: "20px" }}/>
        <div className='card-body d-flex flex-column'>
          <h3 className='card-title'>
            {itemDetail.product}
          </h3>
          <h6>Opiniones:</h6>
          <p>{itemDetail.description}</p>
          {/* <p className="card-text">{`${itemDetail.stock} units available!`}</p> */}
          <p><strong>Comen:</strong> {itemDetail.rinde}</p>
          <div className="">
            <button className="btn bg-warning m-2">Añadir al carrito</button>
            <button className="btn bg-success m-2">Comprar ahora</button>
          </div>
        </div>
      </div>
    
    </> 
    );
}
 
export default ItemDetail;