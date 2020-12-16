# 3. Query the NEAR blockchain

Prerequisites
1. Connect to a NEAR node with DataHub
2. Create your first NEAR account with the NEAR SDK

```
nvm use v12.18.3
npm init -y

npm install --save near-api-js dotenv js-sha256

uuidgen
xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx

node query.js

```

```
node query.js
network status: {
  version: { version: '1.17.0-rc.2', build: '46b02963' },
  chain_id: 'testnet',
  protocol_version: 41,
  latest_protocol_version: 41,
  rpc_addr: '0.0.0.0:3030',
  validators: [
    { account_id: 'orangeclub.pool.f863973.m0', is_slashed: false },
    { account_id: 'tribe-pool.pool.f863973.m0', is_slashed: false },
    ...
  ],
  sync_info: {
    latest_block_hash: '...',
    latest_block_height: 28330877,
    latest_state_root: '...',
    latest_block_time: '2020-12-15T17:31:26.944036204Z',
    syncing: false
  },
  validator_account_id: null
}
current block: {
  author: 'masternode24.pool.f863973.m0',
  header: {
    height: 28331308,
    ...
  }
}
block by height: {
  author: 'lunanova.pool.f863973.m0',
  header: {
    height: 28331310,
    ...
  }
}
network validators: {
  current_validators: [
    {
    }
    ...
  ]
  ...
}
block by height: {
  author: 'dokia.pool.f863973.m0',
  header: {
    height: 28331643,
    ...
  }
}
account state: {
  amount: '500000001000000000000000000',
  locked: '0',
  ...
}

```

```
(node:7061) UnhandledPromiseRejectionWarning: Error: [-32001] DB Not Found Error: FMBFuXFBjaah35jH3S5H9kv1deqQBDirBhvdw1cdxBG7 
 Cause: Unknown: undefined
    at JsonRpcProvider.sendJsonRpc (./Figment/NEAR-pathway/3.-querying-the-near-blockchain/node_modules/near-api-js/lib/providers/json-rpc-provider.js:163:27)
    at processTicksAndRejections (internal/process/task_queues.js:97:5)
    at async main (./Figment/NEAR-pathway/3.-querying-the-near-blockchain/query.js:25:18)
(node:7061) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 1)
(node:7061) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
...

(node:7516) UnhandledPromiseRejectionWarning: Error: [-32000] Server error: DB Not Found Error: BLOCK HEIGHT: 28369837 
 Cause: Unknown
...

```