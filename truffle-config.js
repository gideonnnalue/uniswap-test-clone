const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
module.exports = {
  networks: {
    inf_uniswap_goerli: {
      network_id: 5,
      gasPrice: 50000,
      provider: new HDWalletProvider(fs.readFileSync('/Users/gideonnnalue/Documents/Projects/blockchain/uniswap-clone-infura-youtube/private.env', 'utf-8'), "https://goerli.infura.io/v3/d692fd940f134dc6b168bcb3f91d61a3")
    },
    loc_development_development: {
      network_id: "*",
      port: 7545,
      host: "127.0.0.1"
    }
  },
  mocha: {},
  compilers: {
    solc: {
      version: "0.8.17"
    }
  }
};
