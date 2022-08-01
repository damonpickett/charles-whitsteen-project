import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Intro from './components/Intro';
import Roadmap from './components/Roadmap';
import Social from './components/Social';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Intro />} />
        <Route path='/roadmap' element={<Roadmap />} />
        <Route path='/social' element={<Social />} />
      </Routes>
    </div>
  );
}

export default App;
