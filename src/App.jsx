import { Fragment } from 'react';
import './App.css';
import Header from './components/Header'
import ItemList from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount'


const App = () => {
  return (
    <Fragment>
      <Header />
      <ItemList greeting="Bienvenidos al e-commerce de ARM Boots"></ItemList>
        <ItemCount />
    </Fragment>
  );
};

export default App;