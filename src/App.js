import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <>
    
    <NavBar name="ROMA PASTAS"/>
    <ItemListContainer greeting={'Esto es un saludo'}/>
    <hr></hr>
    <ItemCount stock={5} initial={1}/>
    </>
  );
}

export default App;
