import Home from './pages/Home';
import './App.css';
import ProductList from './pages/ProductList';
import ProductPage from './pages/ProductPage';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/products/:category' element={<ProductList />} />
        <Route path='/product/:id' element={<ProductPage />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
          
        
      </Routes>
    </Router>
  );
}

export default App;
