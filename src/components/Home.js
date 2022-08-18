import '../App.css';
import Collection from './Collection';
import About from './About';

function Intro(props) {
  return (
    <>
      <div className='intro'>
        <div className='disclaimer'>* This is a mock NFT project. It is for demonstration purposes only. The NFTs below can only be purchased with mock Ethereum and can only be displayed on OpenSea's testnet site.</div>
        <h1>The Whitsteen Project</h1>
        <p>The Whitsteen Project gives collectors the chance to own original artwork by Whitsteen.</p>
        <p>Every purchase helps fund <a href='https://flyingfurrescue.wixsite.com/rescue' rel='noreferrer' target='_blank'>Flying Fur Rescue</a> to help save doggies, kitties, and other friendly little critters.</p>
        <p>Whenever a Roadmap goal is reached, more art by Whitsteen is unlocked.</p>
        <button className='link-button'><a href='https://opensea.io/' rel='noreferrer' target='_blank'>View on OpenSea</a></button>
        <div id='collection'></div>
      </div>
      
      <Collection accounts={props.accounts} setAccounts={props.setAccounts}/>
      <About />
    </>
  );
}

export default Intro;