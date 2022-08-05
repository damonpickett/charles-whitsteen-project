import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import BurgerMenu from './components/BurgerMenu';
import Home from './components/Home';
import Roadmap from './components/Roadmap';
import Social from './components/Social';
import Footer from './components/Footer';


function App() {

  const [menu, setMenu] = useState(false);
  console.log(menu)

  return (
    <div className="App">
      <Nav setMenu={setMenu}/>
      <BurgerMenu menu={menu} setMenu={setMenu}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/roadmap' element={<Roadmap />} />
        <Route path='/social' element={<Social />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
