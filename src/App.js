import { useState } from 'react';
import './App.css';
import Cart  from './components/Cart';
// import Plates  from './components/Product';
import data from './data';
import Main from './components/Main';

function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className='App'>
      <div className="wrapper menu">
      <Main products={products} onAdd={onAdd}></Main>
      <Cart 
      onAdd={onAdd} 
      cartItems={cartItems}
      onRemove={onRemove}
      ></Cart>
      </div>
    </div>
  );
}

export default App;
