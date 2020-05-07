const EC = require("elliptic").ec;
const ec = new EC("secp256k1");
const { Blockchain, Transaction } = require("./BlockChain");
const myKey = ec.keyFromPrivate(
  "f018e59de21483e96365a93e1a42e8b7d1d00afb89934fde17e98d13c9c9ab77"
);
const myWalletAddress = myKey.getPublic("hex");
let syndiCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, "public key goes here", 10);

syndiCoin.createTransaction(new Transaction("address1", "address2", 100));
syndiCoin.createTransaction(new Transaction("address2", "address1", 50));

console.log("\n Starting the miner.......");
syndiCoin.mindPendingTransactions("saffats-address");
console.log(
  "\nBalance of Saffat is: ",
  syndiCoin.getBalanceOfAddress("saffats-address")
);

console.log("\n Starting the miner.......");
syndiCoin.mindPendingTransactions("saffats-address");

console.log(
  "\nBalance of Saffat is: ",
  syndiCoin.getBalanceOfAddress("saffats-address")
);
