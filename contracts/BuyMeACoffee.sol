//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.7;

contract BuyMeACoffee {
    // Event when a Memo is Created
    event NewMemo(
        address indexed from,
        uint256 timestamp,
        string name,
        string message
    );

    // Memo struct
    struct Memo {
        address from;
        uint256 timestamp;
        string name;
        string message;
    }

    // List of all the Memos received from friends
    Memo[] memos;

    // Address of the contract deployer
    address payable owner;

    // Deploy logic
    constructor() {
        owner = payable(msg.sender);
    }

    /**
    * 
     */
    function buyCoffee() {}
}
