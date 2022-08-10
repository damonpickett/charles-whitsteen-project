import { useState } from 'react';
import '../App.css';
import Piece from './Piece';
import nerveSlug from '../images/nerve-slug300x320.jpg';
import hoboGoblin from '../images/hobo-goblin300x320.jpg'
import daydreamDragons from '../images/daydream-dragons300x320.jpg';
import { ethers, BigNumber } from 'ethers';
import charlesWhitsteenProjectNFT from '../charlesWhitsteenProject.json';

const charlesWhitsteenProjectAddress = '0xb8c9B79A541B1419B72d18306d95342f19e64cD5'

function Collection(props) {

  const [mintAmount1, setMintAmount1] = useState(1);
  const [mintAmount2, setMintAmount2] = useState(1);
  const [mintAmount3, setMintAmount3] = useState(1);

  async function handleMint() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        charlesWhitsteenProjectAddress,
        charlesWhitsteenProjectNFT.abi,
        signer
      );
      try {
        const response = await contract.mint(BigNumber.from())
      }
    }
  }

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
              accounts={props.accounts}
              setAccounts={props.setAccounts}
            />
            <Piece
              title={'Hobo Goblin'}
              src={hoboGoblin}
              alt={'Hobo Goblin'}
              mintAmount={mintAmount2}
              setMintAmount={setMintAmount2}
              accounts={props.accounts}
              setAccounts={props.setAccounts}
            />
            <Piece
              title={'Daydream Dragons'}
              src={daydreamDragons}
              alt={'Daydream Dragons'}
              mintAmount={mintAmount3}
              setMintAmount={setMintAmount3}
              accounts={props.accounts}
              setAccounts={props.setAccounts}
            />
          </div>
        </div>
        <div id='about'></div>
      </div>
  );
}

export default Collection;