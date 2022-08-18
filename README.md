# The Whitsteen Project
A mock NFT art project featuring the work of Whitsteen. 

## Tech Stack
- React.js (front-end)
- Solidity (smart contracts)
- Hardhat (contract deployment)
- Ethers.js (allows React to communicate with blockchain)

## Overview
I built this site to demonstrate my ability to conceptualize and execute an NFT art project. Users are able to connect their Ethereum wallets and purchase NFTs. These transactions are verifiable on the [Rinkeby Testnet](https://rinkeby.etherscan.io/) and the corresponding smart contract can be viewed [here](https://rinkeby.etherscan.io/address/0x129f706Dd367D6E1aF251c6a3f89913D62e86B92). The smart contract also allows for whitelisted addresses to mint NFTs within a specified timeframe. There are three NFTs for sale on this

## Lessons Learned

- Use fixed position for background images and nav menu on mobile screens
- If a contract has arguments, the arguments need to be deployed in a separate `.js` file. E.G. `paymentsArguments.js`:
```js
module.exports = [
    ['0x7c4029Baab6092FaA64465cbCdAC0D979079EB01',
    '0x9A09DcB28e2fB829DE9D4201b571Ad397fC490E6',
    '0x8C55B9bD2aF24c2f937632720E472eC0aB7D1015'
    ],
    [30, 50, 20]
];
```
and added during the verification process via CLI, after the contract has been deployed, like this:
`npx hardhat verify --contract contracts/payments.sol:payments --constructor-args paymentsArguments.js 0xDC97fa5b8Fd674D9ff5D5CB8574286d0DAbeCcBf`

Also, deploy script has to have arguments and those arguments must match the arguments script.

whitelistMint does have user paying gas fees.

### Hardhat Contract Deployment and Verification via CLI

To deploy a contract via CLI, assuming your `hardhat.config` and `deploy.js` files are in order, type this:
`npx hardhat clean`
`npx hardhat compile`
`npx hardhat run scripts/[SCRIPT].js --network [NETWORK]`

To verify, enter this:
`npx hardhat verify --network [NETWORK] [CONTRACT ADDRESS]`

If you're contract imports other contracts, you'll need to enter:
`npx hardhat verify --contract [FILE PATH TO CONTRACT:NAME OF CONTRACT] [OTHER ARGUMENTS]`

If you're contract requires arguments, you'll need to create an `arguments.js` file (see above) and enter:
`npx hardhat verify --constructor-args arguments.js DEPLOYED_CONTRACT_ADDRESS`

You might need to combine the above instructions in various ways in different scenarios

rinkeby whitsteen contract: 0x129f706Dd367D6E1aF251c6a3f89913D62e86B92

rinkeby Payments.sol: 0x63115c14f666832FcAf261e159396CCf70963EDD