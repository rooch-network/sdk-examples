import { getRoochNodeUrl, RoochClient } from '@roochnetwork/rooch-sdk'

const NETWORK = 'mainnet' // 'mainnet' or 'testnet'

async function main() {
  const client = new RoochClient({
    url: getRoochNodeUrl(NETWORK)
  });

  const utxo = await client.queryUTXO({
    filter: {
      owner: "bc1ql49ydapnjafl5t2cp9zqpjwe6pdgmxy98859v2"
    },
    cursor: null,
    limit: "10",
  });
  console.log('UTXO Query Results:', utxo);
  console.log('Total UTXOs:', utxo.data.length)

  // 遍历 UTXO 数据
  utxo.data.forEach((utxo, index) => {
    console.log(`\nUTXO #${index + 1}:`)
    console.log('Owner:', utxo.owner)
    console.log('Bitcoin Address:', utxo.owner_bitcoin_address)
    console.log('UTXO Details:')
    console.log('- TxID:', utxo.value.txid)
    console.log('- Bitcoin TxID:', utxo.value.bitcoin_txid)
    console.log('- Vout:', utxo.value.vout)
    console.log('- Value (sats):', utxo.value.value)
    console.log('- Seals:', utxo.value.seals)
  })
}

main()