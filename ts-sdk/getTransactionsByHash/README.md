# getTransactionsByHash

## Example

```ts
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
```

## Run

```bash
# Install dependencies
npm i

# Run
npm start

> gettransactionsbyhash@1.0.0 start
> ts-node src/index.ts

Transaction Info: [
  {
    transaction: { data: [Object], sequence_info: [Object] },
    execution_info: {
      tx_hash: '0x5f2de41d53e5d821ed26df2d923c445126faed28f6ca7ed9b5c44294309f95f8',
      state_root: '0x123dfb0f926dce8526eb53bc6af7fe87f646e55577e74bc39ab80b460dda158e',
      event_root: '0xec7bf3fa58f7580fc889e821468ad01bdb724fed9d5eb98c1f08c69a4c79dbcc',
      gas_used: '2192631',
      status: [Object]
    }
  }
]
````