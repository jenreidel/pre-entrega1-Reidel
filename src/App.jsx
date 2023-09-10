import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {

  return (
    <body /*className="bg-img"*/>
      <header>
        <Navbar />
        <ItemListContainer greeting={"PLANTAS DE INTERIOR PARA VESTIR TODOS TUS AMBIENTES"} />
      </header>
    </body>
  );
};

export default App;
