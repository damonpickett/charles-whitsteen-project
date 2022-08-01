import '../App.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
      <div className='nav'>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/#collection'>Collection</Link></li>
          <li><Link to='/'>About</Link></li>
          <li><Link to='/roadmap'>Roadmap</Link></li>
          <li><Link to='/social'>Social</Link></li>
        </ul>
        <ul>
          <li><button>Instructions</button></li>
          <li><button>Connect Wallet</button></li>
        </ul>
      </div>
  );
}

export default Nav;