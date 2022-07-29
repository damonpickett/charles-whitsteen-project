import '../App.css';

function Intro() {
  return (
      <div className='intro'>
        <h1>The Charles Whitsteen Project</h1>
        <p>The Charles Whitsteen Project gives collectors the chance to own original artwork by Charles Whitsteen.</p>
        <p>Every purchase helps fund <a href='https://flyingfurrescue.wixsite.com/rescue' rel='noreferrer' target='_blank'>Flying Fur Rescue</a> to help save doggies, kitties, and other friendly little critters.</p>
        <p>Whenever a Roadmap goal is reached, more art by Charles Whitsteen is unlocked.</p>
        <a href='#' className='link-button' rel='noreferrer' target='_blank'>View on OpenSea</a>
      </div>
  );
}

export default Intro;