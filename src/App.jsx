import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import PrivateRouter from './pages/PrivateRouter';
import Account from './pages/Account';
import Product from './pages/Product';
import Order from './pages/Order';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
       <BrowserRouter>
        <Routes>
          {/* Định nghĩa các route chính */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Định nghĩa route admin với các trang con */}
          <Route path="/admin" element={<PrivateRouter />}>
            <Route path="account" element={<Account />} />
            <Route path="product" element={<Product />} />
            <Route path="order" element={<Order />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
