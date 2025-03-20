# getBalance

## Example

```ts
import { getRoochNodeUrl, RoochClient } from '@roochnetwork/rooch-sdk'

const NETWORK = 'mainnet' // 'mainnet' or 'testnet'
const ADDRESS = 'bc1ph25pk4xm36y3mt6uwclm0fgj8dgdnf5u7xf987qvyv58x987cldswp09hc' // Replace with your address
const RGAS_TYPE = '0x3::gas_coin::RGas' // RGas coin type

async function main() {
  try {
    const client = new RoochClient({
      url: getRoochNodeUrl(NETWORK)
    });

    // Query RGas balance
    const balance = await client.getBalance({
      owner: ADDRESS,
      coinType: RGAS_TYPE,
    });

    console.log('RGas Balance:', balance.fixedBalance);
  } catch (error) {
    console.error('Error:', error);
  }
}

main()
```

## Run

```bash
# Install dependencies
npm i

# Run
npm start

> getbalance@1.0.0 start
> ts-node src/index.ts

RGas Balance: 97.58826626
```