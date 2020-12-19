# 5. Write and deploy your first NEAR smart contract

Prerequisites
1. Connect to a NEAR node with DataHub
2. Create your first NEAR account with the NEAR SDK
3. Querying the NEAR blockchain
4. Submit your first transactions

```
nvm use v12.18.3
npm init -y

npm install --save near-api-js dotenv js-sha256
npm install --save near-sdk-as

uuidgen
xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx

```

```
npx asb
I/O Read   :    12.610 ms  n=348
I/O Write  :     0.445 ms  n=1
Parse      :   708.105 ms  n=139
Initialize :    36.330 ms  n=1
Compile    :   273.486 ms  n=1
Emit       :    68.595 ms  n=1
Validate   :    85.224 ms  n=1
Optimize   :  7760.134 ms  n=1
Transform  :          n/a  n=4

```

```
npm install -g near-cli

near deploy \
  --contractName=your-unique-account-name.testnet \
  --keyPath=./credentials/testnet/your-unique-account-name.testnet.json \
  --wasmFile=./contract.wasm

------------------------
Starting deployment. Account id: your-unique-account-name.testnet, node: https://rpc.testnet.near.org, helper: https://helper.testnet.near.org, file: ./contract.wasm

Loaded master account your-unique-account-name.testnet key from ./credentials/testnet/your-unique-account-name.testnet.json with public key = ed25519:xxxxx

Transaction Id 5PCXwvdzK9DDNVR5E8hxAeDdhKQ3yq1xjr1gyQtftRSk

To see the transaction in the transaction explorer, please open this url in your browser
https://explorer.testnet.near.org/transactions/5PCXwvdzK9DDNVR5E8hxAeDdhKQ3yq1xjr1gyQtftRSk

Done deploying to your-unique-account-name.testnet


```