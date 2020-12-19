# 4. Submit your first transactions

Prerequisites
1. Connect to a NEAR node with DataHub
2. Create your first NEAR account with the NEAR SDK
3. Querying the NEAR blockchain

```
nvm use v12.18.3
npm init -y

npm install --save near-api-js dotenv js-sha256

uuidgen
xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx

node transfer.js
node transfer_advanced.js

```

```
node transfer.js
Sending money to pizza.testnet
Creation result: {
  signer_id: 'cdf05ece-df46-421e-a2a8-76ddfd4b3b7a.testnet',
  public_key: 'ed25519:3w3g6Am4Qd742NimoHcrcSqNij9A7oswqyH6UxTTvVdc',
  nonce: 4,
  receiver_id: 'pizza.testnet',
  actions: [ { Transfer: [Object] } ],
  signature: 'ed25519:4Qa5iotzhKzyaGnmEtxBH8fyWGVPwWAi9B1RhCyfzPDCUxqpbDVtAbsAZWztiorc82aRUPRZyrvu6xuzfNFMmXfU',
  hash: '3NPFghezUftsAtSz4GE8GRiMJQrBvH8DYRR6o1hQtmQG'
}
----------------------------------------------------------------
OPEN LINK BELOW to see transaction in NEAR Explorer!
https://explorer.testnet.near.org/transactions/3NPFghezUftsAtSz4GE8GRiMJQrBvH8DYRR6o1hQtmQG
----------------------------------------------------------------
Checking transaction status: 3NPFghezUftsAtSz4GE8GRiMJQrBvH8DYRR6o1hQtmQG
Transaction status: {
  status: { SuccessValue: '' },
  transaction: {
    signer_id: 'cxxxa.testnet',
    public_key: 'ed25519:...',
    nonce: 4,
    receiver_id: 'pizza.testnet',
    actions: [ [Object] ],
    signature: 'ed25519:xxx',
    hash: '3NPFghezUftsAtSz4GE8GRiMJQrBvH8DYRR6o1hQtmQG'
  },
  ...
}


```