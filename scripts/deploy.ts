import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("[Wallet Address]: " + deployer.address);

  const TokenContract = await ethers.getContractFactory("HGDToken");
  const HGDToken = await TokenContract.deploy();

  await HGDToken.deployed();

  console.log("Token contract deployed:", HGDToken.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
