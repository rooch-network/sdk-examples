import { getRoochNodeUrl, RoochClient } from '@roochnetwork/rooch-sdk'

const NETWORK = 'mainnet' // 'mainnet' or 'testnet'

async function main() {
  const client = new RoochClient({
    url: getRoochNodeUrl(NETWORK)
  });

   const obj_state = await client.getObjectStates({
    ids: ['0xc87604825b720bc01434686db6001c0f69122856edc446fa6c367834fc8b21e9006abb3c49e638d9c4ad3edb394d46c007bfe985648d627d3aee52f90eab8000']
  });
  console.log('Object States:', obj_state);
  
}

main()