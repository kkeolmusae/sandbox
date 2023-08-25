import fetch from "node-fetch";

const QUICK_NODE_URL = "https://docs-demo.btc.quiknode.pro";
const VERBOSITY = 2; // default: 1

export async function getBlockByHash(hash) {
  const raw = JSON.stringify({
    method: "getblock",
    params: [hash, VERBOSITY],
  });
  return await fetch(QUICK_NODE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: raw,
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

export async function getBlockHash(blockNumber) {
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
      return JSON.parse(result).result;
    })
    .catch((err) => {
      console.error(err);
      throw err;
    });
}

export async function getBlockCount() {
  const raw = JSON.stringify({
    method: "getblockcount",
    params: [],
  });
  return await fetch(QUICK_NODE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: raw,
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
