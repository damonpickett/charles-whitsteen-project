import { useState } from 'react';
import '../App.css';
import Piece from './Piece';
import nerveSlug from '../images/nerve-slug300x320.jpg';
import hoboGoblin from '../images/hobo-goblin300x320.jpg'
import daydreamDragons from '../images/daydream-dragons300x320.jpg';

function Collection() {

  const [mintAmount1, setMintAmount1] = useState(1);
  const [mintAmount2, setMintAmount2] = useState(1);
  const [mintAmount3, setMintAmount3] = useState(1);

  return (
      <div className='collection'>
        <div className='collection-canvas'>
          <h2>Gotta Collect 'em all!</h2>
          <div className='pieces'>
            <Piece
              title={'Nerve Slug'}
              src={nerveSlug}
              alt={'Nerve Slug'}
              mintAmount={mintAmount1}
              setMintAmount={setMintAmount1}
            />
            <Piece
              title={'Hobo Goblin'}
              src={hoboGoblin}
              alt={'Hobo Goblin'}
              mintAmount={mintAmount2}
              setMintAmount={setMintAmount2}
            />
            <Piece
              title={'Daydream Dragons'}
              src={daydreamDragons}
              alt={'Daydream Dragons'}
              mintAmount={mintAmount3}
              setMintAmount={setMintAmount3}
            />
          </div>
        </div>
        <div id='about'></div>
      </div>
  );
}

export default Collection;