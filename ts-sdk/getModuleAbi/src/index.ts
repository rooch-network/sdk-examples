import { getRoochNodeUrl, RoochClient } from '@roochnetwork/rooch-sdk'

const NETWORK = 'mainnet' // 'mainnet' or 'testnet'

async function main() {
  const client = new RoochClient({
    url: getRoochNodeUrl(NETWORK)
  });

  const abiList = await client.getModuleAbi({
    moduleAddr: '0x3',
    moduleName: 'gas_coin',
  });
  console.log('Module ABI List:', abiList);
}

main()