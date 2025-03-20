# getChainId

## 例子

```ts
import { getRoochNodeUrl, RoochClient } from '@roochnetwork/rooch-sdk'

const NETWORK = 'mainnet' // 'mainnet' or 'testnet'

async function main() {
  const client = new RoochClient({
    url: getRoochNodeUrl(NETWORK)
  });

  const chainId = await client.getChainId();
  console.log('Chain ID:', chainId);
}

main()
```

## 运行

```bash
# 安装依赖
npm i

# 运行
npm start

> getchainid@1.0.0 start
> ts-node src/index.ts

Chain ID: 1
```