import { getRoochNodeUrl, RoochClient } from '@roochnetwork/rooch-sdk'

const NETWORK = 'mainnet' // 'mainnet' or 'testnet'

async function main() {
  const client = new RoochClient({
    url: getRoochNodeUrl(NETWORK)
  });

  const state = await client.listStates({
    // accessPath: '/resource/0x3'
    accessPath: '/resource/0xc87604825b720bc01434686db6001c0f69122856edc446fa6c367834fc8b21e9'
  });
  console.log('Transaction Info:', state);
  console.log('\nTransaction Info:', state.data[0]);
  console.log('\nCounter value:', state.data[0].state.decoded_value?.value);
}

main()