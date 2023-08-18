import fetch from "node-fetch";
import * as QuickNode from "./QuickNode.js";

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
  const blockHash = await QuickNode.getBlockHash(803647);
  const block = await QuickNode.getBlockByHash(blockHash);
  console.log(block);
})();
