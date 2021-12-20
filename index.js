async function main() {
    const API_URL ="# Paste your Infura API url here (use https)"
    const PRIVATE_KEY=" # paste your account private key"
    const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
    const web3 = createAlchemyWeb3(API_URL);
    const myAddress = '# Paste from address' //TODO: replace this address with your own public address
   
    const nonce = await web3.eth.getTransactionCount(myAddress, 'latest'); // nonce starts counting from 0

    const transaction = {
     'to': '# Paste to address', // Address to send ETH
     'value': 1000000000000000000, // in wei [1000000000000000000 wei == 1 Ether Transfered]
     'gas': 30000,
     'nonce': nonce,
     // optional data field to send message or execute smart contract
    };
   
    const signedTx = await web3.eth.accounts.signTransaction(transaction, PRIVATE_KEY);
    
    web3.eth.sendSignedTransaction(signedTx.rawTransaction, function(error, hash) {
    if (!error) {
      console.log("🎉 The hash of your transaction is: ", hash, "\n Check the status of your transaction in Etherscan ","Link : https://ropsten.etherscan.io/tx/"+hash);
    } else {
      console.log("❗Something went wrong while submitting your transaction:", error)
    }
   });
}

main();






// For reference I used this site to learn this
// https://betterprogramming.pub/how-to-send-ethereum-transactions-using-web3-d05e0c95f820