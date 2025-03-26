# queryUTXO

## 例子

```ts
import { getRoochNodeUrl, RoochClient } from '@roochnetwork/rooch-sdk'

const NETWORK = 'mainnet' // '主网' 或 '测试网'

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
  console.log('UTXO 查询结果:', utxo);
  console.log('UTXO 总数:', utxo.data.length)

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
```

## 运行

```bash
# 安装依赖
npm i

# 运行
npm start

> queryutxo@1.0.0 start
> ts-node src/index.ts

UTXO 查询结果: {
  data: [
    {
      id: '0xf74d177bfec2d8de0c4893f6502d3e5b55f12f75e158d53b035dcbe33782ef1695d422fbf96fa4956df0e9946fa17467264d4813108dc4d136fe419411e3cbe0',
      owner: 'rooch1p8ufstjnfvm80x5n0sjjx8nexapy480z3dpaj77y8ye60hhpph9qn70wgl',
      owner_bitcoin_address: 'bc1ql49ydapnjafl5t2cp9zqpjwe6pdgmxy98859v2',
      flag: 0,
      state_root: '0x5350415253455f4d45524b4c455f504c414345484f4c4445525f484153480000',
      size: '0',
      created_at: '1742548239731',
      updated_at: '1742548239731',
      object_type: '0x4::utxo::UTXO',
      value: [Object],
      tx_order: '103798089',
      state_index: '1'
    },
    {
      id: '0xf74d177bfec2d8de0c4893f6502d3e5b55f12f75e158d53b035dcbe33782ef16fbcf5b30288f3f3d3f56afa1f9a3d196f63349085a29430bc4a9fdf3713d4088',
      owner: 'rooch1p8ufstjnfvm80x5n0sjjx8nexapy480z3dpaj77y8ye60hhpph9qn70wgl',
      owner_bitcoin_address: 'bc1ql49ydapnjafl5t2cp9zqpjwe6pdgmxy98859v2',
      flag: 0,
      state_root: '0x5350415253455f4d45524b4c455f504c414345484f4c4445525f484153480000',
      size: '0',
      created_at: '1741695766558',
      updated_at: '1741695766558',
      object_type: '0x4::utxo::UTXO',
      value: [Object],
      tx_order: '99264566',
      state_index: '4'
    },
    {
      id: '0xf74d177bfec2d8de0c4893f6502d3e5b55f12f75e158d53b035dcbe33782ef16996a8777283dd2b9f1ffc4894ac5ad4cb0ed320df1b66e64bc63d1d526b6e4ff',
      owner: 'rooch1p8ufstjnfvm80x5n0sjjx8nexapy480z3dpaj77y8ye60hhpph9qn70wgl',
      owner_bitcoin_address: 'bc1ql49ydapnjafl5t2cp9zqpjwe6pdgmxy98859v2',
      flag: 0,
      state_root: '0x5350415253455f4d45524b4c455f504c414345484f4c4445525f484153480000',
      size: '0',
      created_at: '1740744589143',
      updated_at: '1740744589143',
      object_type: '0x4::utxo::UTXO',
      value: [Object],
      tx_order: '95308982',
      state_index: '11'
    },
    {
      id: '0xf74d177bfec2d8de0c4893f6502d3e5b55f12f75e158d53b035dcbe33782ef163e80747eb1d2b44ee7f36f827cc5183713d77553655e553f56f0bf45212100a1',
      owner: 'rooch1p8ufstjnfvm80x5n0sjjx8nexapy480z3dpaj77y8ye60hhpph9qn70wgl',
      owner_bitcoin_address: 'bc1ql49ydapnjafl5t2cp9zqpjwe6pdgmxy98859v2',
      flag: 0,
      state_root: '0x5350415253455f4d45524b4c455f504c414345484f4c4445525f484153480000',
      size: '0',
      created_at: '1739536370062',
      updated_at: '1739536370062',
      object_type: '0x4::utxo::UTXO',
      value: [Object],
      tx_order: '88910570',
      state_index: '0'
    },
    {
      id: '0xf74d177bfec2d8de0c4893f6502d3e5b55f12f75e158d53b035dcbe33782ef165e4c1c29fd205bcbbb5c7d4f53932f49d3a37e1550ca44e838b773229ef32dc8',
      owner: 'rooch1p8ufstjnfvm80x5n0sjjx8nexapy480z3dpaj77y8ye60hhpph9qn70wgl',
      owner_bitcoin_address: 'bc1ql49ydapnjafl5t2cp9zqpjwe6pdgmxy98859v2',
      flag: 0,
      state_root: '0x5350415253455f4d45524b4c455f504c414345484f4c4445525f484153480000',
      size: '0',
      created_at: '1739318100062',
      updated_at: '1739318100062',
      object_type: '0x4::utxo::UTXO',
      value: [Object],
      tx_order: '87896736',
      state_index: '11'
    },
    {
      id: '0xf74d177bfec2d8de0c4893f6502d3e5b55f12f75e158d53b035dcbe33782ef16fc68bfba8382cb8ad33d2c77534ee332a4b25325e32191449e4b5af69cc9930a',
      owner: 'rooch1p8ufstjnfvm80x5n0sjjx8nexapy480z3dpaj77y8ye60hhpph9qn70wgl',
      owner_bitcoin_address: 'bc1ql49ydapnjafl5t2cp9zqpjwe6pdgmxy98859v2',
      flag: 0,
      state_root: '0x5350415253455f4d45524b4c455f504c414345484f4c4445525f484153480000',
      size: '0',
      created_at: '1737234750569',
      updated_at: '1737234750569',
      object_type: '0x4::utxo::UTXO',
      value: [Object],
      tx_order: '78382037',
      state_index: '110'
    },
    {
      id: '0xf74d177bfec2d8de0c4893f6502d3e5b55f12f75e158d53b035dcbe33782ef1673fc8174ff135998e2f92fa756b2cc1aa01e927633d7320e1d91d831f3ea71ba',
      owner: 'rooch1p8ufstjnfvm80x5n0sjjx8nexapy480z3dpaj77y8ye60hhpph9qn70wgl',
      owner_bitcoin_address: 'bc1ql49ydapnjafl5t2cp9zqpjwe6pdgmxy98859v2',
      flag: 0,
      state_root: '0x5350415253455f4d45524b4c455f504c414345484f4c4445525f484153480000',
      size: '0',
      created_at: '1737234750569',
      updated_at: '1737234750569',
      object_type: '0x4::utxo::UTXO',
      value: [Object],
      tx_order: '78382037',
      state_index: '47'
    },
    {
      id: '0xf74d177bfec2d8de0c4893f6502d3e5b55f12f75e158d53b035dcbe33782ef165e8dc0f307342bb630f6b69a2f46c439af6c0d819b4c24f2861820a8b0142fe7',
      owner: 'rooch1p8ufstjnfvm80x5n0sjjx8nexapy480z3dpaj77y8ye60hhpph9qn70wgl',
      owner_bitcoin_address: 'bc1ql49ydapnjafl5t2cp9zqpjwe6pdgmxy98859v2',
      flag: 0,
      state_root: '0x5350415253455f4d45524b4c455f504c414345484f4c4445525f484153480000',
      size: '0',
      created_at: '1737234750569',
      updated_at: '1737234750569',
      object_type: '0x4::utxo::UTXO',
      value: [Object],
      tx_order: '78382037',
      state_index: '42'
    },
    {
      id: '0xf74d177bfec2d8de0c4893f6502d3e5b55f12f75e158d53b035dcbe33782ef16500978b222b7f6df7bd492c6d725cf70461f4f82155a40099aeb66307c231250',
      owner: 'rooch1p8ufstjnfvm80x5n0sjjx8nexapy480z3dpaj77y8ye60hhpph9qn70wgl',
      owner_bitcoin_address: 'bc1ql49ydapnjafl5t2cp9zqpjwe6pdgmxy98859v2',
      flag: 0,
      state_root: '0x5350415253455f4d45524b4c455f504c414345484f4c4445525f484153480000',
      size: '0',
      created_at: '1737234750569',
      updated_at: '1737234750569',
      object_type: '0x4::utxo::UTXO',
      value: [Object],
      tx_order: '78382037',
      state_index: '37'
    },
    {
      id: '0xf74d177bfec2d8de0c4893f6502d3e5b55f12f75e158d53b035dcbe33782ef160d9f17f05ce71127efbec9504061956cc584acd705f23073074b57a5b9920698',
      owner: 'rooch1p8ufstjnfvm80x5n0sjjx8nexapy480z3dpaj77y8ye60hhpph9qn70wgl',
      owner_bitcoin_address: 'bc1ql49ydapnjafl5t2cp9zqpjwe6pdgmxy98859v2',
      flag: 0,
      state_root: '0x5350415253455f4d45524b4c455f504c414345484f4c4445525f484153480000',
      size: '0',
      created_at: '1737234750569',
      updated_at: '1737234750569',
      object_type: '0x4::utxo::UTXO',
      value: [Object],
      tx_order: '78382037',
      state_index: '5'
    }
  ],
  next_cursor: { tx_order: '78382037', state_index: '5' },
  has_next_page: true
}
UTXO 总数: 10

UTXO #1:
所有者: rooch1p8ufstjnfvm80x5n0sjjx8nexapy480z3dpaj77y8ye60hhpph9qn70wgl
比特币地址: bc1ql49ydapnjafl5t2cp9zqpjwe6pdgmxy98859v2
UTXO 详情:
- 交易 ID (TxID): 0x3345d48e1a28834069134d16eaf8f20f884600265be83cf6828095e9932b6660
- 比特币交易 ID: 60662b93e9958082f63ce85b260046880ff2f8ea164d13694083281a8ed44533
- 输出索引 (Vout): 0
- 数值 (聪): 546
- 封印 (Seals): {}

UTXO #2:
所有者: rooch1p8ufstjnfvm80x5n0sjjx8nexapy480z3dpaj77y8ye60hhpph9qn70wgl
比特币地址: bc1ql49ydapnjafl5t2cp9zqpjwe6pdgmxy98859v2
UTXO 详情:
- 交易 ID (TxID): 0xd1cedb4a118da59d554d439e6db42addc8fc31d31f8ec1227ebe4038417d77cf
- 比特币交易 ID: cf777d413840be7e22c18e1fd331fcc8dd2ab46d9e434d559da58d114adbced1
- 输出索引 (Vout): 0
- 数值 (聪): 546
- 封印 (Seals): {}

UTXO #3:
所有者: rooch1p8ufstjnfvm80x5n0sjjx8nexapy480z3dpaj77y8ye60hhpph9qn70wgl
比特币地址: bc1ql49ydapnjafl5t2cp9zqpjwe6pdgmxy98859v2
UTXO 详情:
- 交易 ID (TxID): 0xf1edacba35c22512fcf3b7f1873f5b6ef226bf1daa947c99ccba0649e77867ed
- 比特币交易 ID: ed6778e74906bacc997c94aa1dbf26f26e5b3f87f1b7f3fc1225c235baacedf1
- 输出索引 (Vout): 19
- 数值 (聪): 34101
- 封印 (Seals): {}

UTXO #4:
所有者: rooch1p8ufstjnfvm80x5n0sjjx8nexapy480z3dpaj77y8ye60hhpph9qn70wgl
比特币地址: bc1ql49ydapnjafl5t2cp9zqpjwe6pdgmxy98859v2
UTXO 详情:
- 交易 ID (TxID): 0xfde1014e5455493955f74bfbfe706604254851c5fcf9e9f039cf8195f20dcdda
- 比特币交易 ID: dacd0df29581cf39f0e9f9fcc5514825046670fefb4bf755394955544e01e1fd
- 输出索引 (Vout): 0
- 数值 (聪): 546
- 封印 (Seals): {}

UTXO #5:
所有者: rooch1p8ufstjnfvm80x5n0sjjx8nexapy480z3dpaj77y8ye60hhpph9qn70wgl
比特币地址: bc1ql49ydapnjafl5t2cp9zqpjwe6pdgmxy98859v2
UTXO 详情:
- 交易 ID (TxID): 0x6a16716924bfb5fd4065f7900e1de1ab1690bf5d8ba5ed783ab18b2e9c74a00b
- 比特币交易 ID: 0ba0749c2e8bb13a78eda58b5dbf9016abe11d0e90f76540fdb5bf246971166a
- 输出索引 (Vout): 31
- 数值 (聪): 10000
- 封印 (Seals): {}

UTXO #6:
所有者: rooch1p8ufstjnfvm80x5n0sjjx8nexapy480z3dpaj77y8ye60hhpph9qn70wgl
比特币地址: bc1ql49ydapnjafl5t2cp9zqpjwe6pdgmxy98859v2
UTXO 详情:
- 交易 ID (TxID): 0xe14322d95b2ba3576b9e4db4c37b7b6a66349ccde938c1bbae40e8c4647278a9
- 比特币交易 ID: a9787264c4e840aebbc138e9cd9c34666a7b7bc3b44d9e6b57a32b5bd92243e1
- 输出索引 (Vout): 52
- 数值 (聪): 546
- 封印 (Seals): {}

UTXO #7:
所有者: rooch1p8ufstjnfvm80x5n0sjjx8nexapy480z3dpaj77y8ye60hhpph9qn70wgl
比特币地址: bc1ql49ydapnjafl5t2cp9zqpjwe6pdgmxy98859v2
UTXO 详情:
- 交易 ID (TxID): 0xe14322d95b2ba3576b9e4db4c37b7b6a66349ccde938c1bbae40e8c4647278a9
- 比特币交易 ID: a9787264c4e840aebbc138e9cd9c34666a7b7bc3b44d9e6b57a32b5bd92243e1
- 输出索引 (Vout): 51
- 数值 (聪): 546
- 封印 (Seals): {}

UTXO #8:
所有者: rooch1p8ufstjnfvm80x5n0sjjx8nexapy480z3dpaj77y8ye60hhpph9qn70wgl
比特币地址: bc1ql49ydapnjafl5t2cp9zqpjwe6pdgmxy98859v2
UTXO 详情:
- 交易 ID (TxID): 0xe14322d95b2ba3576b9e4db4c37b7b6a66349ccde938c1bbae40e8c4647278a9
- 比特币交易 ID: a9787264c4e840aebbc138e9cd9c34666a7b7bc3b44d9e6b57a32b5bd92243e1
- 输出索引 (Vout): 50
- 数值 (聪): 546
- 封印 (Seals): {}

UTXO #9:
所有者: rooch1p8ufstjnfvm80x5n0sjjx8nexapy480z3dpaj77y8ye60hhpph9qn70wgl
比特币地址: bc1ql49ydapnjafl5t2cp9zqpjwe6pdgmxy98859v2
UTXO 详情:
- 交易 ID (TxID): 0xe14322d95b2ba3576b9e4db4c37b7b6a66349ccde938c1bbae40e8c4647278a9
- 比特币交易 ID: a9787264c4e840aebbc138e9cd9c34666a7b7bc3b44d9e6b57a32b5bd92243e1
- 输出索引 (Vout): 54
- 数值 (聪): 546
- 封印 (Seals): {}

UTXO #10:
所有者: rooch1p8ufstjnfvm80x5n0sjjx8nexapy480z3dpaj77y8ye60hhpph9qn70wgl
比特币地址: bc1ql49ydapnjafl5t2cp9zqpjwe6pdgmxy98859v2
UTXO 详情:
- 交易 ID (TxID): 0xe14322d95b2ba3576b9e4db4c37b7b6a66349ccde938c1bbae40e8c4647278a9
- 比特币交易 ID: a9787264c4e840aebbc138e9cd9c34666a7b7bc3b44d9e6b57a32b5bd92243e1
- 输出索引 (Vout): 53
- 数值 (聪): 546
- 封印 (Seals): {}