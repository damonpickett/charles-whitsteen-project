import '../App.css';
import metaMan from '../images/meta-man375x375.jpg';
import insaneParade from '../images/insane-parade375x375.jpg';

function About() {
  return (
      <div className='about'>
        <div className='story'>
          <h2>The Story</h2>
          <div className='content'>
            <img src={metaMan} alt='Meta Man'></img>
            <p>Join Charles Whitsteen as he probes the depths of reality and turns it inside out to remind us that not all is not what it seems. And along the way we'll  <a href='https://flyingfurrescue.wixsite.com/rescue' target='_blank' rel='noreferrer'>save cute little animals</a>.</p>
          </div>
          <button>Instagram</button>
        </div>
        <div className='community'>
          <h2>The Community</h2>
          <div className='content'>
            <p>The Charles Whitsteen Project community is a place where all are welcome, as long as you're a weirdo. Vulgar heresies may be spoken.</p>
            <img src={insaneParade} alt='The Green Room'></img>
          </div>
          <button>Join Discord</button>
        </div>
      </div>
  );
}

export default About;