import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Roadmap from './components/Roadmap';
import Social from './components/Social';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/roadmap' element={<Roadmap />} />
        <Route path='/social' element={<Social />} />
      </Routes>
    </div>
  );
}

export default App;
