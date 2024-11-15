import React, { useState } from 'react';
import Navbar from './component/Navbar/Navbar';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import { Route, Routes } from 'react-router-dom';
import Footer from './component/Footer/Footer';
import LoginPopUp from './component/LoginPopUp/LoginPopUp';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [userName, setUserName] = useState(''); // User name state

  return (
    <>
      {showLogin ? <LoginPopUp setShowLogin={setShowLogin} setUserName={setUserName} /> : null}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} userName={userName} /> {/* Pass userName to Navbar */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
