# listStates

## 示例

```ts
import { getRoochNodeUrl, RoochClient } from '@roochnetwork/rooch-sdk'

const NETWORK = 'mainnet' // 'mainnet' 或 'testnet'

async function main() {
  const client = new RoochClient({
    url: getRoochNodeUrl(NETWORK)
  });

  const state = await client.listStates({
    // accessPath: '/resource/0x3'
    accessPath: '/resource/0xc87604825b720bc01434686db6001c0f69122856edc446fa6c367834fc8b21e9'
  });
  console.log('交易信息:', state);
  console.log('\n交易信息:', state.data[0]);
  console.log('\n计数器值:', state.data[0].state.decoded_value?.value);
}

main()
```

## 运行

```bash
# 安装依赖
npm i

# 运行
npm start

> liststates@1.0.0 start
> ts-node src/index.ts

交易信息: {
  data: [
    {
      field_key: '0x006abb3c49e638d9c4ad3edb394d46c007bfe985648d627d3aee52f90eab8000',
      state: [Object]
    }
  ],
  next_cursor: '0x006abb3c49e638d9c4ad3edb394d46c007bfe985648d627d3aee52f90eab8000',
  has_next_page: false
}

交易信息: {
  field_key: '0x006abb3c49e638d9c4ad3edb394d46c007bfe985648d627d3aee52f90eab8000',
  state: {
    id: '0xc87604825b720bc01434686db6001c0f69122856edc446fa6c367834fc8b21e9006abb3c49e638d9c4ad3edb394d46c007bfe985648d627d3aee52f90eab8000',
    owner: 'rooch1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqhxqaen',
    owner_bitcoin_address: null,
    flag: 0,
    state_root: '0x5350415253455f4d45524b4c455f504c414345484f4c4445525f484153480000',
    size: '0',
    created_at: '1742787816365',
    updated_at: '1742787816365',
    object_type: '0x2::object::DynamicField<0x1::string::String, 0xc87604825b720bc01434686db6001c0f69122856edc446fa6c367834fc8b21e9::quick_start_counter::Counter>',
    value: '0x603078633837363034383235623732306263303134333436383664623630303163306636393132323835366564633434366661366333363738333466633862323165393a3a717569636b5f73746172745f636f756e7465723a3a436f756e7465720000000000000000',
    decoded_value: {
      abilities: 12,
      type: '0x2::object::DynamicField<0x1::string::String, 0xc87604825b720bc01434686db6001c0f69122856edc446fa6c367834fc8b21e9::quick_start_counter::Counter>',
      value: [Object]
    },
    display_fields: null
  }
}

计数器值: {
  name: '0xc87604825b720bc01434686db6001c0f69122856edc446fa6c367834fc8b21e9::quick_start_counter::Counter',
  value: {
    abilities: 8,
    type: '0xc87604825b720bc01434686db6001c0f69122856edc446fa6c367834fc8b21e9::quick_start_counter::Counter',
    value: { count_value: '0' }
  }
}
```

## 访问路径

常见的访问路径模式：

- 仅 `/resource/<address>` - 用于资源