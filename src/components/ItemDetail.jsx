

const ItemDetail = ({itemDetail}) => {
    
    console.log('Render ItemDetail', itemDetail)

    return ( 
    <>
      <h1>Items Details</h1>
      <div className="d-flex justify-content-around align-items-center">
        {
          itemDetail.map(
            cadaItemDetail => <div>{cadaItemDetail[0]}</div>
          )
        }
      </div>
    </> 
    );
}
 
export default ItemDetail;