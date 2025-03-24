import { getRoochNodeUrl, RoochClient } from '@roochnetwork/rooch-sdk'

const NETWORK = 'mainnet' // 'mainnet' or 'testnet'

async function main() {
  const client = new RoochClient({
    url: getRoochNodeUrl(NETWORK)
  });

  const states = await client.getStates({
    // accessPath: '/object/0x3',
    accessPath: '/object/0xc87604825b720bc01434686db6001c0f69122856edc446fa6c367834fc8b21e9006abb3c49e638d9c4ad3edb394d46c007bfe985648d627d3aee52f90eab8000',
    stateOption: {
      decode: true
    }
  });
  console.log(states);
  console.log('\nState Root:', states[0].state_root);
  console.log('\nDecoded Value:', states[0].decoded_value);

}

main()