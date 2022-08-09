// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts (last updated v4.7.0) (finance/PaymentSplitter.sol)

pragma solidity ^0.8.7;

import "@openzeppelin/contracts/finance/PaymentSplitter.sol";

contract payments is PaymentSplitter {

    // We add "PaymentSplitter(_payees, _shares)" after the parameters because the paramenters "still haven't passed into our PaymentSplitter"
    constructor(address[] memory _payees, uint256[] memory _shares) PaymentSplitter(_payees, _shares) payable {}

}