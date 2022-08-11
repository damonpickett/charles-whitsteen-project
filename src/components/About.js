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
            <div className='content-text'>
              <p>We live in a world of masks. Glossy smooth surfaces hide the hideous truth within. To many, this is a blessing, a tender mercy. But there are some who wish to go deeper. There are some determined to walk the path of truth no matter the cost. Charles Whitsteen, with sight and skill, is leading us down that path. Join Whitsteen as he probes the depths of reality, turns it inside out and reminds us not all is what it seems. And we'll make some <a href='https://flyingfurrescue.wixsite.com/rescue' rel='noreferrer' target='_blank'>furry friends</a> along the way.</p>
              <button className='link-button'><a href='https://www.instagram.com/whitsteen_/' target='_blank' rel='noreferrer'>Instagram</a></button>
            </div>
          </div>
        </div>
        <div className='community'>
          <h2>The Community</h2>
          <div className='content'>
            <div className='content-text'>
              <p>Remove your mask and be the delightful ghoul that you are. The Charles Whitsteen Project community is a place where all are welcome, as long as you're a weirdo. Vulgar heresies may be spoken. Smiles are encouraged.</p>
              <button className='link-button'><a href='https://discord.com/' target='_blank' rel='noreferrer'>Join Discord</a></button>
            </div>
            <img src={insaneParade} alt='Insane Parade'></img>
          </div>
        </div>
      </div>
  );
}

export default About;