import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import BurgerMenu from './components/BurgerMenu';
import Home from './components/Home';
import Roadmap from './components/Roadmap';
import Social from './components/Social';
import Footer from './components/Footer';
import InstructionsModal from './components/InstructionsModal';


function App() {

  const [menu, setMenu] = useState(false);
  const [modal, setModal] = useState(false);

  return (
    <div className="App">
      <Nav setMenu={setMenu} setModal={setModal}/>
      <BurgerMenu menu={menu} setMenu={setMenu}/>
      <InstructionsModal modal={modal} setModal={setModal}/>
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
