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