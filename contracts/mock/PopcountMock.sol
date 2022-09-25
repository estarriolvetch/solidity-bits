// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../Popcount.sol";

contract PopcountMock {
    function popcount256A(uint256 x) public pure returns (uint256 count) {
        return Popcount.popcount256A(x);
    }

    function popcount256B(uint256 x) public pure returns (uint256 count) {
        return Popcount.popcount256B(x);
    }
}