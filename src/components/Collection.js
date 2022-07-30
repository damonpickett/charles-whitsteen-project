import '../App.css';
import Piece from './Piece';
import nerveSlug from '../images/nerve-slug300x320.jpg';
import hoboGoblin from '../images/hobo-goblin300x320.jpg'
import daydreamDragons from '../images/daydream-dragons300x320.jpg';

function Collection() {
  return (
      <div className='collection'>
        <div className='collection-canvas'>
          <h2>Gotta Collect 'em all!</h2>
          <div className='pieces'>
            <Piece
              title={'Nerve Slug'}
              src={nerveSlug}
              alt={'Nerve Slug'}
            />
            <Piece
              title={'Hobo Goblin'}
              src={hoboGoblin}
              alt={'Hobo Goblin'}
            />
            <Piece
              title={'Daydream Dragons'}
              src={daydreamDragons}
              alt={'Daydream Dragons'}
            />
          </div>
        </div>
      </div>
  );
}

export default Collection;