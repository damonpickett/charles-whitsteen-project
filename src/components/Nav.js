import '../App.css';
import { HashLink as Link } from 'react-router-hash-link';

function Nav() {
  return (
    <>
      <div id='home'></div>
      <div className='nav'>
        <ul>
          <li><Link smooth to='/#home'>Home</Link></li>
          <li><Link smooth to='/#collection'>Collection</Link></li>
          <li><Link smooth to='/#about'>About</Link></li>
          <li><Link to='/roadmap'>Roadmap</Link></li>
          <li><Link to='/social'>Social</Link></li>
        </ul>
        <ul>
          <li><button>Instructions</button></li>
          <li><button>Connect Wallet</button></li>
        </ul>
      </div>
    </>
  );
}

export default Nav;