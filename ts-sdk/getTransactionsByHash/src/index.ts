import { getRoochNodeUrl, RoochClient } from '@roochnetwork/rooch-sdk'

const NETWORK = 'mainnet' // 'mainnet' or 'testnet'

async function main() {
  const client = new RoochClient({
    url: getRoochNodeUrl(NETWORK)
  });

  const txInfo = await client.getTransactionsByHash({
    txHashes: ["0x5f2de41d53e5d821ed26df2d923c445126faed28f6ca7ed9b5c44294309f95f8"]
  });
  console.log('Transaction Info:', txInfo);
}

main()