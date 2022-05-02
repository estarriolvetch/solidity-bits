# solidity-bits
This library provides useful tools for bit tricks with solidity and gas-efficient data sturctures powered by these bit tricks.

- BitScan: Powered by de Bruijn sequence, this library provides gas efficient functions to find the index of the least and most significant set bits. It can also be used for efficiently calculating the log2 of a value.
- BitMaps: A modified Openzeppelin's BitMaps library with additional functions to efficiently find the closest set bit.

## Installaion
### npm
```
npm install --save-dev erc721psi
```
### yarn
```
yarn add --dev erc721psi
```

## Projects powered by solidity-bits
- (erc721psi)[https://github.com/estarriolvetch/ERC721Psi]
