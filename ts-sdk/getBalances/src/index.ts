import { getRoochNodeUrl, RoochClient } from '@roochnetwork/rooch-sdk'

const NETWORK = 'mainnet' // 'mainnet' or 'testnet'

async function main() {
  const client = new RoochClient({
    url: getRoochNodeUrl(NETWORK)
  });

  // 查询账户余额
  const balances = await client.getBalances({
    owner: "bc1ph25pk4xm36y3mt6uwclm0fgj8dgdnf5u7xf987qvyv58x987cldswp09hc", // 替换为要查询的地址
    cursor: null,
    limit: "10"
  });
  console.log('Account Balances:', balances);
}

main()