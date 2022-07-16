const ItemDetail = ({itemDetail}) => {
    
    console.log('Render ItemDetail', itemDetail)

    return ( 
    <>
      <h1>{itemDetail.product}</h1>
    </> 
    );
}
 
export default ItemDetail;