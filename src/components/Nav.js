import '../App.css';

function Nav() {
  return (
      <div className='nav'>
        <ul>
          <li>Collection</li>
          <li>About</li>
          <li>Roadmap</li>
          <li>Contact</li>
        </ul>
        <ul>
          <li><button>Instructions</button></li>
          <li><button>Connect Wallet</button></li>
        </ul>
      </div>
  );
}

export default Nav;