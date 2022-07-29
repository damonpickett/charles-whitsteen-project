import '../App.css';

function About() {
  return (
      <div className='about'>
        <div className='story'>
          <h2>The Story</h2>
          <p>Join Charles Whitsteen as he probes the depths of reality and turns it inside out to remind us that not all is not what it seems. And along the way we'll  <a href='https://flyingfurrescue.wixsite.com/rescue' target='_blank' rel='noreferrer'>save cute little animals</a>.</p>
        </div>
        <div classnName='community'>
          <h2>The Community</h2>
          <p>The Charles Whitsteen Project community is a place where all are welcome, as long as you're a weirdo. Vulgar heresies may be spoken.</p>
          <button>Join Discord</button>
        </div>
      </div>
  );
}

export default About;