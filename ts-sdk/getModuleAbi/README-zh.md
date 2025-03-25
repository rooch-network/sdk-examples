# getModuleAbi

想要列出某个模块的函数和结构体，可以调用这个 SDK 方法来获取。

## 例子

```ts
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
```

## 运行

```bash
# 安装依赖
npm i

# 运行
npm start

> getmoduleabi@1.0.0 start
> ts-node src/index.ts

Module ABI List: {
  address: '0x0000000000000000000000000000000000000000000000000000000000000003',
  name: 'gas_coin',
  friends: [
    '0x3::genesis',
    '0x3::transaction_fee',
    '0x3::transaction_validator'
  ],
  functions: [
    {
      name: 'balance',
      is_entry: false,
      type_params: [],
      params: [Array],
      return: [Array]
    },
    {
      name: 'burn',
      is_entry: false,
      type_params: [],
      params: [Array],
      return: []
    },
    {
      name: 'decimals',
      is_entry: false,
      type_params: [],
      params: [],
      return: [Array]
    },
    {
      name: 'faucet_entry',
      is_entry: true,
      type_params: [],
      params: [Array],
      return: []
    }
  ],
  structs: [
    {
      name: 'RGas',
      is_native: false,
      abilities: [Array],
      type_params: [],
      fields: [Array]
    }
  ]
}
```