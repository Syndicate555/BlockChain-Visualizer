const SHA256 = require("crypto-js/sha256");
class Block {
  constructor(index, timstamp, data, previousHash = "") {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
  }

  calculateHash() {
    return SHA256(
      this.index +
        this.previousHash +
        this.timestamp +
        JSON.stringify(this.data)
    ).toString();
  }
}

class Blockchain {
  constructor() {
    this.chain = [];
  }

  createGenesisBlock() {
    return new Block(0, "01/01/2018", "Genesis Block", "0");
  }

  getLatestBlock() {
    return this.chian[this.chain.length - 1];
  }

  addBlock(newBlock) {
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.hash = newBlock.calculateHash();
    this.chain.push(newBlock);
  }
}

let syndiCoin = new Blockchain();
syndiCoin.addBlock(newBlock(1, "10/07/2018", { amount: 4 }));
syndiCoin.addBlock(newBlock(2, "10/07/2018", { amount: 40 }));
syndiCoin.addBlock(newBlock(3, "10/07/2018", { amount: 34 }));
syndiCoin.addBlock(newBlock(4, "10/07/2018", { amount: 23 }));
syndiCoin.addBlock(newBlock(5, "10/07/2018", { amount: 232 }));
