import fetch from "node-fetch";
import * as dotenv from "dotenv";
dotenv.config();

const GET_BLOCK_NODE_URL = `https://btc.getblock.io/${process.env.API_KEY}/mainnet/`;

export async function getBlockCount() {
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
