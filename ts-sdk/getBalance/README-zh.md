# 获取余额

## 例子

```ts
import { getRoochNodeUrl, RoochClient } from '@roochnetwork/rooch-sdk'

const NETWORK = 'mainnet' // 'mainnet' 或 'testnet'
const ADDRESS = 'bc1ph25pk4xm36y3mt6uwclm0fgj8dgdnf5u7xf987qvyv58x987cldswp09hc' // 替换为你的地址
const RGAS_TYPE = '0x3::gas_coin::RGas' // RGas 币种类型

async function main() {
  try {
    const client = new RoochClient({
      url: getRoochNodeUrl(NETWORK)
    });

    // 查询 RGas 余额
    const balance = await client.getBalance({
      owner: ADDRESS,
      coinType: RGAS_TYPE,
    });

    console.log('RGas 余额:', balance.fixedBalance);
  } catch (error) {
    console.error('错误:', error);
  }
}

main()
```

## 运行

```bash
# 安装依赖
npm i

# 运行
npm start

> getbalance@1.0.0 start
> ts-node src/index.ts

RGas 余额: 97.58826626
```