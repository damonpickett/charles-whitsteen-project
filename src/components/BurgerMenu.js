import React from 'react';
import '../App.css';
import { HashLink as Link } from 'react-router-hash-link';
import { AiOutlineClose } from "react-icons/ai";

const BurgerMenu = (props) => {

    let visibility = 'hide'

    if(props.menu) {
        visibility = 'show'
    }

  return (
      <div id='burger-menu' className={visibility}>
        <div className='close-button'>
            <AiOutlineClose onClick={() => props.setMenu(false)}/>
        </div>
        <ul className='burger-list'>
            <li><Link smooth to='/#home'>Home</Link></li>
            <li><Link smooth to='/#collection'>Collection</Link></li>
            <li><Link smooth to='/#about'>About</Link></li>
            <li><Link to='/roadmap'>Roadmap</Link></li>
            <li><Link to='/social'>Social</Link></li>
        </ul>
      </div>
  );
}

export default BurgerMenu;