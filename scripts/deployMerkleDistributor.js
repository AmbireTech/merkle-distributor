require('dotenv').config()
require('@nomiclabs/hardhat-ethers')
const { ethers } = require('hardhat')

async function main() {
  const MerkleDistributor = await ethers.getContractFactory('MerkleDistributor')
  const merkleDistributor = await MerkleDistributor.deploy( 
    '0xE575cC6EC0B5d176127ac61aD2D3d9d19d1aa4a0', // Token - stkWallet
    '0x3e2b5f343a7e9e511c2cbb041d24b420b9aae944f6247f0842bbf66f5f65ec1c', // MerkleRoot - season 1
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
