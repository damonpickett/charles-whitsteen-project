import '../App.css';
import Piece from './Piece';
import nerveSlug from '../images/nerve-slug300x320.jpg';
import hoboGoblin from '../images/hobo-goblin300x320.jpg'
import daydreamDragons from '../images/daydream-dragons300x320.jpg';

function Collection() {
  return (
      <div className='collection'>
        <Piece
          src={nerveSlug}
          alt={'Nerve Slug'}
        />
        <Piece
          src={hoboGoblin}
          alt={'Hobo Goblin'}
        />
        <Piece 
          src={daydreamDragons}
          alt={'Daydream Dragons'}
        />
      </div>
  );
}

export default Collection;