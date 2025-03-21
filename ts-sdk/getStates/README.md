# getBalance

## Example

```ts
import { getRoochNodeUrl, RoochClient } from '@roochnetwork/rooch-sdk'

const NETWORK = 'mainnet' // 'mainnet' or 'testnet'

async function main() {
  const client = new RoochClient({
    url: getRoochNodeUrl(NETWORK)
  });

  const states = await client.getStates({
    accessPath: '/object/0x3',
    stateOption: {
      decode: true
    }
  });
  console.log(states);
}

main()
```

## Run

```bash
# Install dependencies
npm i

# Run
npm start

> getstates@1.0.0 start
> ts-node src/index.ts

[
  {
    id: '0x0000000000000000000000000000000000000000000000000000000000000003',
    owner: 'rooch1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpsd68l8x',
    owner_bitcoin_address: null,
    flag: 0,
    state_root: '0xaf6d179aa4db54194950b415d404356ae90301772f3ae047f1a02fcb429d8881',
    size: '2',
    created_at: '1724967961000',
    updated_at: '1724967961000',
    object_type: '0x2::account::Account',
    value: '0x00000000000000000000000000000000000000000000000000000000000000030000000000000000',
    decoded_value: { abilities: 8, type: '0x2::account::Account', value: [Object] },
    display_fields: null
  }
]
```

## Access Path

Common access path patterns:

- / - Query all states
- /object/{address} - Query account states
- /object/{address}/{module} - Query module states
- /resource/{address}/{type} - Query specific resource type states

Replace the placeholders with actual values:

- {address} - Account address (e.g., 0x1)
- {module} - Module name (e.g., counter)
- {type} - Resource type (e.g., 0x1::Account::Account)