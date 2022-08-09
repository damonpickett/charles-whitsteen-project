# Things I've learned so far

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

## Hardhat Contract Deployment and Verification via CLI

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

whitsteen contract: 0xb8c9B79A541B1419B72d18306d95342f19e64cD5