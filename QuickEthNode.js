import fetch from "node-fetch";

const QUICK_NODE_URL = "https://docs-demo.quiknode.pro";

export async function getBlockByBlockNumber(blockNumber, flag) {
  const raw = JSON.stringify({
    method: "eth_getBlockByNumber",
    params: [blockNumber, flag],
    jsonrpc: "2.0",
    id: 1,
  });
  return await fetch(QUICK_NODE_URL, {
    body: raw,
    method: "POST",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.text())
    .then((result) => {
      return JSON.parse(result).result;
    })
    .catch((err) => {
      console.error(err);
      throw err;
    });
}

export async function getBlockReceipts(blockNumber) {
  const raw = JSON.stringify({
    method: "eth_getBlockReceipts",
    params: [blockNumber],
    jsonrpc: "2.0",
    id: 1,
  });
  return await fetch(QUICK_NODE_URL, {
    body: raw,
    method: "POST",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.text())
    .then((result) => {
      return JSON.parse(result).result;
    })
    .catch((err) => {
      console.error(err);
      throw err;
    });
}
