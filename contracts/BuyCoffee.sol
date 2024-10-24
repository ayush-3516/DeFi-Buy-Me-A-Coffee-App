// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;


contract BuyCoffee {

    // coffee buyer
    struct Memo{
        string name;
        string description;
        uint timestamp;
        address from;
    }

    address payable owner;
    constructor() {
        owner = payable(msg.sender);
    }
    
    Memo[] memos;

    function buyCoffee(string memory _name,string memory _message)public payable{
        require(msg.value >0 ,"Provide true amount");
        owner.transfer(msg.value);
        memos.push(Memo(_name,_message,block.timestamp,msg.sender));
    }

    function getMemo() public view returns(Memo[] memory){
        return memos;
    }
}

//  0x535BAD02FdAAFb2768480D140635802A5a23019D conrtract address deployed on hardhat
