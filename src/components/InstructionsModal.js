import React from 'react';
import { AiOutlineClose } from "react-icons/ai";

const InstructionsModal = (props) => {
    if (!props.modal) {
        return null
    }

    return (
        <div className="modal" onClick={() => props.setModal(false)}>
            <div className="modal-canvas">
                <div className='exit-button'>
                    <AiOutlineClose onClick={() => props.setModal(false)}/>
                </div>
                <div className="modal-header">
                    <h3>Instructions</h3>
                </div>
                <div className="modal-body">
                    <p>Connect your Ethereum wallet via the 'Connect Wallet' button.</p>
                    <p>Connect your wallet to Ethereum's <a href='https://rinkeby.etherscan.io/' target='_blank' rel='noreferrer'>Rinkeby testnet</a>.</p>
                    <p>You'll need mock Ethereum tokens to interact with the blockchain. You can collect mock Ethereum from the <a href='https://rinkebyfaucet.com/' target='_blank' rel='noreferrer'>Rinkeby Faucet</a>.</p>
                    <p>Once your wallet is connected you'll be able to choose the number of tokens you'd like to mint. The maximum is 3.</p>
                    <p>Click the 'Mint' button to purchase an NFT. You can verify your transaction via your wallet address' transaction history on the <a href='https://rinkeby.etherscan.io/' target='_blank' rel='noreferrer'>Rinkeby Testnet</a>.</p>
                </div>
                <div className="modal-header">
                    <h3>Further Info</h3>
                </div>
                <div className="modal-body">
                    <p>Click <a href='https://rinkeby.etherscan.io/address/0x129f706Dd367D6E1aF251c6a3f89913D62e86B92' target='_blank' rel='noreferrer'>here</a> to view the smart contract for this NFT project.</p>
                </div>
            </div>
        </div>
    )

}

export default InstructionsModal;