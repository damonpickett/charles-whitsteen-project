import '../App.css';
import { HashLink as Link } from 'react-router-hash-link';
import { useEffect } from 'react';
import * as FaIcons from 'react-icons/fa';

function Nav(props) {

  // function which sets state
  // useState + if statement + event listener?
  useEffect(() => {
      if(window.innerWidth >= 600) {
      props.setMenu(true)
    } 
  
  }, [props])

  return (
    <>
      <div id='home'></div>
        <div className='nav'>
          {props.menu ? (
          <ul>
            <li><Link smooth to='/#home'>Home</Link></li>
            <li><Link smooth to='/#collection'>Collection</Link></li>
            <li><Link smooth to='/#about'>About</Link></li>
            <li><Link to='/roadmap'>Roadmap</Link></li>
            <li><Link to='/social'>Social</Link></li>
          </ul>
          ) : (
          <FaIcons.FaBars />
          )}
          <ul>
            <li><button>Instructions</button></li>
            <li><button>Connect Wallet</button></li>
          </ul>
        </div>
    </>
  );
}

export default Nav;