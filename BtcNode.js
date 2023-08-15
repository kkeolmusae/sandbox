/**
 * <Explorer>
 * https://explorer.btc.com/ko/btc/block/0
 *
 *
 * <API>
 *
 * getblock
 * https://getblock.io/nodes/btc/
 * https://btc.getblock.io/4acc178d-a108-4a51-a2b8-17621ab08d54/testnet/
 *
 *
 * quick node
 * https://www.quicknode.com/docs/bitcoin
 */

import fetch from "node-fetch";

const QUICK_NODE_URL = "https://docs-demo.btc.quiknode.pro";
const GET_BLOCK_NODE_URL = "https://btc.getblock.io/4acc178d-a108-4a51-a2b8-17621ab08d54/mainnet/";

async function getBlockByHash(hash) {
  const raw = JSON.stringify({
    method: "getblock",
    params: [hash],
  });
  return await fetch(QUICK_NODE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: raw,
  })
    .then((response) => response.text())
    .then((result) => {
      return result;
    });
}

async function getBlockHash(blockNumber) {
  const raw = JSON.stringify({
    method: "getblockhash",
    params: [blockNumber],
  });
  return await fetch(QUICK_NODE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: raw,
  })
    .then((response) => response.text())
    .then((result) => {
      return result;
    });
}

async function getBlockCount() {
  const raw = JSON.stringify({
    method: "getblockcount",
  });
  return await fetch(GET_BLOCK_NODE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: raw,
  })
    .then((response) => response.text())
    .then((result) => {
      return result;
    });
}

(async () => {
  // const blockHash = "00000000c937983704a73af28acdec37b049d214adbda81d7e2a3dd146f6ed09";
  // console.log(JSON.parse(await getBlockByHash(blockHash)));

  // console.log(JSON.parse(await getBlockCount()));

  // console.log(JSON.parse(await getBlockHash(0))); // 000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f
  // console.log(JSON.parse(await getBlockByHash("000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f")));

  const blockHash = JSON.parse(await getBlockHash(803310)).result;
  console.log(JSON.parse(await getBlockByHash(blockHash)));
})();
