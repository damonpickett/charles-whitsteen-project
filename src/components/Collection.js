import { useState } from 'react';
import '../App.css';
import Piece from './Piece';
import nerveSlug from '../images/nerve-slug300x320.jpg';
import hoboGoblin from '../images/hobo-goblin300x320.jpg';
import daydreamDragons from '../images/daydream-dragons300x320.jpg';
import { ethers, BigNumber } from 'ethers';
import charlesWhitsteenProjectNFT from '../charlesWhitsteenProject.json';

const charlesWhitsteenProjectAddress = '0xb8c9B79A541B1419B72d18306d95342f19e64cD5'

function Collection(props) {

  const [mintAmount1, setMintAmount1] = useState(1);
  const [mintAmount2, setMintAmount2] = useState(1);
  const [mintAmount3, setMintAmount3] = useState(1);
  

  async function handleMint1() {
    if (window.ethereum) {
      const address = props.accounts.toString();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        charlesWhitsteenProjectAddress,
        charlesWhitsteenProjectNFT.abi,
        signer
      );
      try {
        const response = await contract.mint(address, BigNumber.from('1'), BigNumber.from(mintAmount1), {
          value: ethers.utils.parseEther((0.01 * mintAmount1).toString())
        });
        console.log('response: ', response);
      } catch (err) {
        console.log('error: ', err)
      }
    }
  }

  async function handleMint2() {
    console.log('click')
    if (window.ethereum) {
      const address = props.accounts.toString();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        charlesWhitsteenProjectAddress,
        charlesWhitsteenProjectNFT.abi,
        signer
      );
      try {
        const response = await contract.mint(address, BigNumber.from('2'), BigNumber.from(mintAmount2), {
          value: ethers.utils.parseEther((0.01 * mintAmount2).toString())
        });
        console.log('response: ', response);
      } catch (err) {
        console.log('error: ', err)
      }
    }
  }

  async function handleMint3() {
    if (window.ethereum) {
      const address = props.accounts.toString();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        charlesWhitsteenProjectAddress,
        charlesWhitsteenProjectNFT.abi,
        signer
      );
      try {
        const response = await contract.mint(address, BigNumber.from('3'), BigNumber.from(mintAmount3), {
          value: ethers.utils.parseEther((0.01 * mintAmount3).toString())
        });
        console.log('response: ', response);
      } catch (err) {
        console.log('error: ', err)
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
              onClick={handleMint1}
            />
            <Piece
              title={'Hobo Goblin'}
              src={hoboGoblin}
              alt={'Hobo Goblin'}
              mintAmount={mintAmount2}
              setMintAmount={setMintAmount2}
              accounts={props.accounts}
              setAccounts={props.setAccounts}
              onClick={handleMint2}
            />
            <Piece
              title={'Daydream Dragons'}
              src={daydreamDragons}
              alt={'Daydream Dragons'}
              mintAmount={mintAmount3}
              setMintAmount={setMintAmount3}
              accounts={props.accounts}
              setAccounts={props.setAccounts}
              onClick={handleMint3}
            />
          </div>
        </div>
        <div id='about'></div>
      </div>
  );
}

export default Collection;