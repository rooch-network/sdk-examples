import { getRoochNodeUrl, RoochClient } from '@roochnetwork/rooch-sdk'

const NETWORK = 'mainnet' // 'mainnet' or 'testnet'
const ADDRESS = 'bc1ph25pk4xm36y3mt6uwclm0fgj8dgdnf5u7xf987qvyv58x987cldswp09hc' // Replace with your address
const RGAS_TYPE = '0x3::gas_coin::RGas' // RGas coin type

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