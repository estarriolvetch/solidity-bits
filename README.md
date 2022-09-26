# solidity-bits
[![Test](https://github.com/estarriolvetch/solidity-bits/actions/workflows/node.js.yml/badge.svg)](https://github.com/estarriolvetch/solidity-bits/actions/workflows/node.js.yml)
[![Publish Package to npmjs](https://github.com/estarriolvetch/solidity-bits/actions/workflows/deploy_npm.yml/badge.svg)](https://github.com/estarriolvetch/solidity-bits/actions/workflows/deploy_npm.yml)
[![npm version](https://badge.fury.io/js/solidity-bits.svg)](https://www.npmjs.com/package/solidity-bits)

This library provides useful tools for bit tricks with solidity and gas-efficient data sturctures powered by these bit tricks.

- BitScan: Powered by de Bruijn sequence, this library provides gas efficient functions to find the index of the least and most significant set bits. It can also be used for efficiently calculating the log2 of a value.
- Popcount: Calculate the number of 1 bits of an unsigned integer.
- BitMaps: A modified Openzeppelin's BitMaps library with additional functions to efficiently find the closest set bit.

## Installaion
### npm
```
npm install --save-dev solidity-bits
```
### yarn
```
yarn add --dev solidity-bits
```

## Projects powered by solidity-bits
- [erc721psi](https://github.com/estarriolvetch/ERC721Psi)
- [fpe-map](https://github.com/estarriolvetch/fpe-map)

## Contributor
- [sillytuna](https://github.com/sillytuna): https://github.com/estarriolvetch/solidity-bits/issues/1 
