
import './App.css';
import Header from './components/Header'
import ItemList from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import News from './pages/News/News'
import About from './pages/AboutUs/About'
import ItemDetailContainer from './components/ItemDetail/itemDetailContainer';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';


const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/News" element={<News />} />
          <Route path="/Products" element={<ItemList greeting="Bienvenidos al e-commerce de ARM Boots"></ItemList>} />
          <Route path="/About" element={<About />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;