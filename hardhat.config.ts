/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require('dotenv').config()
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'

module.exports = {
  solidity: {
    compilers: [
      {
        version: '0.8.17',
        settings: {
          optimizer: {
            enabled: true,
            runs: 5000
          }
        }
      }
    ]
  },
  networks: {
    hardhat: {
      settings: {
        debug: {
          revertStrings: 'debug'
        }
      }
    },
    mainnet: {
      url: `https://invictus.ambire.com/ethereum`, // or any other JSON-RPC provider
      chainId: 1,
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []
    },
    base: {
      url: 'https://invictus.ambire.com/base',
      chainId: 8453,
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []
    }
  }
}
