const EC = require('elliptic').ec;
const SHA256 = require('crypto-js/sha256');

const ec = new EC('secp256k1');

// TODO: insert private key here
const privateKey = '';

const key = ec.keyFromPrivate(privateKey);

const message = "I am in the ChainShot Bootcamp";

const msgHash = SHA256(message);

const signature = key.sign(msgHash.toString());

console.log({
  message,
  signature: {
    r: signature.r.toString(16),
    s: signature.s.toString(16)
  }
});
