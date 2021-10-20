require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drink fortune strategy guard render remember attitude inflict arena breeze slice'; 
let testAccounts = [
"0xd22e8d28345fa3d18865c8a514e7c0cc2443a5a2045ba583130971d9d4cef9e9",
"0xf964047dd7e3fd5c9a8e8c70838308a44ba4f49f3df7c9fd5d7b9a7eb501cbec",
"0xc4d89a63636b7a44cef406a03c440c94270b2650ee869129d6d4d6ad2119f810",
"0xc141d25a56e8aed817e10c080402068f868ea8cf99acf17889b9af52ceb11bbe",
"0x328afd87e638396c1423bce00ac5ebc795e22501c64f14b0bdb73cf1ded4a4cb",
"0x1f97f38a2b31bac78a4c93810a7f92f94ecd6b7541cfecd95a17f0da6c89d23c",
"0x57daabde74e0f7128458059a61ed8f95dc6ca35ee61390ef0a8c8c74039265f2",
"0x41905689dec5185df7cedc0d23c3a051e70b732ecb28dafc4565748ec077475f",
"0xc968529d204c0f8fbd0017612b2e29db6ff96e754fbb1794cb2ecc0b6905cdf0",
"0xa36cde00d79adf13d00a6490e77d468348870cfe799feac5f9b6a3d9e8eaa711"
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

