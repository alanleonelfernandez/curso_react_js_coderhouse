
import './App.css';
import Header from './components/Header'
import ItemList from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import News from './pages/News/News'
import Products from './pages/Products/Products'
import About from './pages/AboutUs/About'


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/News" element={<News />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <ItemList greeting="Bienvenidos al e-commerce de ARM Boots"></ItemList>
    </BrowserRouter>
  );
};

export default App;