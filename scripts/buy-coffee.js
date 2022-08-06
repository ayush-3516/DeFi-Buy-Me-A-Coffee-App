const hre = require("hardhat");

// Returns the Ether Balance of the given address
async function getBalance(address){
    const balanceBigInt = await hre.waffle.provider.getBalance(address);
    return hre.ethers.utils.formatEther(balanceBigInt);
}

// Logs Ether balances for a list of addresses
async function printBalance(addresses) {
    let idx = 0;
    for (const address of addresses) 
    [
        console.log(`Address ${idx} balance: `, await getBalance(address));
        idx++;
    ]
}

async function printMemos(memos) {
    for (const memo of memos) {
        const timestamp 
    }
}

async function main(){

}

main()
    .then(() => process.exit(0)) 
    .catch((error) => {
    console.error(error);
    process.exit(1);
  });
  