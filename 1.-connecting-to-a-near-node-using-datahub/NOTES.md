# 1. Connect to a NEAR node with DataHub

```
nvm use v12.18.3
npm init -y

npm install --save near-api-js dotenv js-sha256

uuidgen
xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx

node connect.js

```

```
node connect.js

Client config: {
  networkId: 'testnet',
  nodeUrl: 'https://near-testnet--rpc.datahub.figment.io/apikey/<>',
  walletUrl: 'https://wallet.testnet.near.org',
  helperUrl: 'https://helper.testnet.near.org',
  explorerUrl: 'https://explorer.testnet.near.org',
  keyStore: {}
}
Status: {
  version: { version: '1.17.0-rc.2', build: '46b02963' },
  chain_id: 'testnet',
  protocol_version: 41,
  latest_protocol_version: 41,
  rpc_addr: '0.0.0.0:3030',
  validators: [
    { account_id: 'orangeclub.pool.f863973.m0', is_slashed: false },
    { account_id: 'lunanova.pool.f863973.m0', is_slashed: false },
    { account_id: 'dokia.pool.f863973.m0', is_slashed: false },
    { account_id: 'stakin.pool.f863973.m0', is_slashed: false },
    { account_id: 'alexandruast.pool.f863973.m0', is_slashed: false },
    { account_id: 'masternode24.pool.f863973.m0', is_slashed: false },
    { account_id: '01node.pool.f863973.m0', is_slashed: false },
    { account_id: 'jazza.pool.f863973.m0', is_slashed: false },
    { account_id: 'valeraverim.pool.f863973.m0', is_slashed: false },
    { account_id: 'rioblocks.pool.f863973.m0', is_slashed: false },
    { account_id: 'chorus-one.pool.f863973.m0', is_slashed: false },
    { account_id: 'p2p.pool.f863973.m0', is_slashed: false },
    { account_id: 'nearpy.pool.f863973.m0', is_slashed: false },
    { account_id: 'nodeasy.pool.f863973.m0', is_slashed: false },
    { account_id: 'sweden.pool.f863973.m0', is_slashed: false },
    { account_id: 'tribe-pool.pool.f863973.m0', is_slashed: false }
  ],
  sync_info: {
    latest_block_hash: '...',
    latest_block_height: 28326253,
    latest_state_root: '...',
    latest_block_time: '2020-12-15T16:45:10.766931299Z',
    syncing: false
  },
  validator_account_id: null
}

```