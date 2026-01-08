require('dotenv').config()
require('@nomiclabs/hardhat-ethers')
const { ethers } = require('hardhat')

async function main() {
  const MerkleDistributor = await ethers.getContractFactory('MerkleDistributor')
  const merkleDistributor = await MerkleDistributor.deploy( 
    '0xE575cC6EC0B5d176127ac61aD2D3d9d19d1aa4a0', // Token
    '0xbe154afea9ba1e08729654a19c53952a892d6b37fe0b5d1bdf8ac4f51d03a426', // MerkleRoot
    '0xFDE6d7303868fD2046c15263C9268618092664d1' //vault (buybacks.ambire.eth)
  )
  await merkleDistributor.deployed()
  console.log(`merkleDistributor deployed at ${merkleDistributor.address}`)
}

main()
  // eslint-disable-next-line no-process-exit
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    // eslint-disable-next-line no-process-exit
    process.exit(1)
  })
