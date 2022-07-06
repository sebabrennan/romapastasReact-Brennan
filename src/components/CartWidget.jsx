import './NavBar.css';

const CartWidget= () => {

  const amount = 4;

    return ( 
    <>
      <i class="bi bi-cart2" style={{width: 40}}></i>
      {amount}
    </>
      );
}
 
export default CartWidget;
