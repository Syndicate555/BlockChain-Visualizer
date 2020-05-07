const { Blockchain, Transaction } = require("./BlockChain");

let syndiCoin = new Blockchain();

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
