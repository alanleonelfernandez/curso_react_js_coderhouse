import { Fragment } from 'react';
import './App.css';
import Header from './components/Header'
import ItemList from './components/ItemListContainer/ItemList';


const App = () => {
  return (
    <Fragment>
      <Header />
      <ItemList greeting="Bienvenidos al e-commerce de ARM Boots"></ItemList>
    </Fragment>
  );
};

export default App;