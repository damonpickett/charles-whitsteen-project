import './App.css';
import Nav from './components/Nav';
import Intro from './components/Intro';
import Collection from './components/Collection';
import About from './components/About';
import Roadmap from './components/Roadmap';
import Social from './components/Social';

function App() {
  return (
    <div className="App">
      <Nav />
      <Intro />
      <Collection />
      <About />
      <Roadmap />
      <Social />
    </div>
  );
}

export default App;
