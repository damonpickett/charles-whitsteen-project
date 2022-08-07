const hre = require("hardhat");

async function main() {

  const Payments = await hre.ethers.getContractFactory("PAYMENTS");
  const payments = await Payments.deploy(
    ['0x7c4029Baab6092FaA64465cbCdAC0D979079EB01',
    '0x9A09DcB28e2fB829DE9D4201b571Ad397fC490E6',
    '0x8C55B9bD2aF24c2f937632720E472eC0aB7D1015'
    ],
    [30, 50, 20]
  );

  await payments.deployed();

  console.log("Payments deployed to:", payments.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

