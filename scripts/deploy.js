const hre = require("hardhat");

async function main() {

  const CharlesWhitsteenProject = await hre.ethers.getContractFactory("charlesWhitsteenProject");
  const charlesWhitsteenProject = await CharlesWhitsteenProject.deploy();

  await charlesWhitsteenProject.deployed();

  console.log("CharlesWhitsteenProject deployed to:", charlesWhitsteenProject.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
