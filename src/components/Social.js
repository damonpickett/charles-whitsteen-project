import '../App.css';
import instagram from '../images/instagram-icon.png';
import homepage from '../images/homepage.png';
import linkedin from '../images/linkedin.png';
import twitter from '../images/twitter.png'

function Social() {
  return (
      <div className='social'>
        <div className='social-block'>
          <h2>Charles Whitsteen <span className='subtitle'>(Artist)</span></h2>
          <div className='icons'>
            <a href='https://anxietydisordercomics.com/' target='_blank' rel='noreferrer'><img src={homepage} alt='Homepage'></img></a>
            <a href='https://www.instagram.com/whitsteen_/' target='_blank' rel='noreferrer'><img src={instagram} alt='Instagram'></img></a>
          </div>
        </div>
        <div className='social-block'>
          <h2>Damon Pickett <span className='subtitle'>(Developer)</span></h2>
          <div className='icons'>
          <a href='https://damonpickett.github.io/portfolio/' target='_blank' rel='noreferrer'><img src={homepage} alt='Homepage'></img></a>
          <a href='https://www.linkedin.com/in/damon-pickett/' target='_blank' rel='noreferrer'><img src={linkedin} alt='Linkedin'></img></a>
          <a href='https://twitter.com/Damon_Pickett' target='_blank' rel='noreferrer'><img src={twitter} alt='Twitter'></img></a>
          </div>
        </div>
      </div>
  );
}

export default Social;