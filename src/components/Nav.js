import '../App.css';
import { HashLink as Link } from 'react-router-hash-link';
import * as FaIcons from 'react-icons/fa';
import BurgerMenu from './BurgerMenu';
import { useState } from 'react';

function Nav(props) {
  
  

  return (
    <>
      <div id='home'></div>
        <div className='nav'>
          
          <ul className='full-screen-menu'>
            <li><Link smooth to='/#home'>Home</Link></li>
            <li><Link smooth to='/#collection'>Collection</Link></li>
            <li><Link smooth to='/#about'>About</Link></li>
            <li><Link to='/roadmap'>Roadmap</Link></li>
            <li><Link to='/social'>Social</Link></li>
          </ul>
          
          {/* for mobile */}
          <div className='burger'>
            <FaIcons.FaBars onClick={() => props.setMenu(true)}/>
          </div>          
          
          <ul className='nav-buttons'>
            <li><button>Instructions</button></li>
            <li><button>Connect Wallet</button></li>
          </ul>
        </div>
    </>
  );
}

export default Nav;