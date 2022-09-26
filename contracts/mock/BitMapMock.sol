// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "../BitMaps.sol";

contract BitMapMock {
    using BitMaps for BitMaps.BitMap;

    BitMaps.BitMap private _bitmap;

    function get(uint256 index) public view returns (bool) {
        return _bitmap.get(index);
    }

    function setTo(uint256 index, bool value) public {
        _bitmap.setTo(index, value);
    }

    function set(uint256 index) public {
        _bitmap.set(index);
    }

    function unset(uint256 index) public {
        _bitmap.unset(index);
    }

    function setBatch(uint256 startIndex, uint256 amount) public {
        _bitmap.setBatch(startIndex, amount);
    }

    function unsetBatch(uint256 startIndex, uint256 amount) public {
        _bitmap.unsetBatch(startIndex, amount);
    }

    function popcountA(uint256 startIndex, uint256 amount) public view returns(uint256) {
        return _bitmap.popcountA(startIndex, amount);
    }

    function popcountB(uint256 startIndex, uint256 amount) public view returns(uint256) {
        return _bitmap.popcountB(startIndex, amount);
    }

    function scanForward(uint256 index) public view returns (uint256) {
        return _bitmap.scanForward(index);
    }
}