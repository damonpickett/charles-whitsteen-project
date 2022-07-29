import './App.css';
import Nav from './components/Nav';
import Intro from './components/Intro';
import Collection from './components/Collection';
import About from './components/About';
import Roadmap from './components/Roadmap';

function App() {
  return (
    <div className="App">
      <Nav />
      <Intro />
      <Collection />
      <About />
      <Roadmap />
    </div>
  );
}

export default App;
