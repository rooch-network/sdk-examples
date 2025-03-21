# 获取余额

## 示例

```ts
import { getRoochNodeUrl, RoochClient } from '@roochnetwork/rooch-sdk'

const NETWORK = 'mainnet' // 'mainnet' 或 'testnet'

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

## 运行

```bash
# 安装依赖
npm i

# 运行
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

## 访问路径

常见的访问路径模式：

- / - 查询所有状态
- /object/{address} - 查询账户状态
- /object/{address}/{module} - 查询模块状态
- /resource/{address}/{type} - 查询特定资源类型状态

将占位符替换为实际值：

- {address} - 账户地址（例如，0x1）
- {module} - 模块名称（例如，counter）
- {type} - 资源类型（例如，0x1::Account::Account）