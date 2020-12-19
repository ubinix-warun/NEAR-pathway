// Load environment variables
require("dotenv").config();

// Load NEAR Javascript API components
const near = require("near-api-js");

// Directory where NEAR credentials are going to be stored
const credentialsPath = "./credentials";

// Configure the keyStore to be used with the NEAR Javascript API
const UnencryptedFileSystemKeyStore = near.keyStores.UnencryptedFileSystemKeyStore;
const keyStore = new UnencryptedFileSystemKeyStore(credentialsPath)

// Setup default client options
const options = {
  networkId:   process.env.NEAR_NETWORK,
  nodeUrl:     process.env.NEAR_NODE_URL,
  walletUrl:   `https://wallet.${process.env.NEAR_NETWORK}.near.org`,
  helperUrl:   `https://helper.${process.env.NEAR_NETWORK}.near.org`,
  explorerUrl: `https://explorer.${process.env.NEAR_NETWORK}.near.org`,
  accountId:   process.env.NEAR_ACCOUNT,
  deps: {
    keyStore: keyStore
  }
}

async function main() {
  // Configure the client with options and our local key store
  const client = await near.connect(options);
  const account = await client.account(options.accountId);

  // We'are using the same contract name, feel free to create a different one.
  const contractName = options.accountId;

  // Construct a new contract object, we'll be using it to perform calls
  const contract = new near.Contract(account, contractName, {
    viewMethods: ["getValue"],   // our read function
    changeMethods: ["setValue"], // our write function
    sender: options.accountId,   // account used to sign contract call transactions
  });

  // We will send the current date when calling `setValue`
  const value = (new Date()).toString();

  console.log(`Calling contract call 'setValue' with '${value}'`);
  await contract.setValue({ value: value });

  // Get the value we assigned
  console.log("Getting current value");
  result = await contract.getValue();
  console.log("Result:", result);

  // Alternative way of calling a function
  result = await account.functionCall(
    contractName,
    "getValue",
    {}
  );
  console.log(result);
};

main();