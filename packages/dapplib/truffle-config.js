require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arch outer sugar warrior ridge remain social install hill foster segment'; 
let testAccounts = [
"0xcca657db0319ac3f7c443cccaf8f9867988960e352d50367f907bd464ce43913",
"0xa32254ad3bef691c261112925288d61804171fcd8fe4fc55dc40968c9e6c0469",
"0x42b803030829518ab4131626d0c94cf5ab04a760539e0ffd3929396c63bb97fc",
"0x0d7764c2d7e8992e3802a2e0880102ab9748b363481dc5df8764825e1be5e857",
"0x2984bd815985f4b727afe1f5a8021045072f47839752cf355aa9df28b46288c2",
"0xb8bd57a53c8377d01f197e06538e694e9343d5a0fb12a9c1d43ce9be856b231c",
"0xe444b4fa347b2ed3e631d74a0630a2abdbec366011eacd65b48884599645c245",
"0xc370ed72a2e430a943ae575fab438e001ca07db182e47cb2dd594a5bf32b6617",
"0xbc83763585a9c2c4c642e42ff62ec8bdc8d0971307ccc829dd9c8be7f1f96934",
"0x9a4a94add69852f6ff487ffd2461cda6f0ffee3d9810b45962318493390fd11f"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

