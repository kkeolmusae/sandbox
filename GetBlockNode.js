import fetch from "node-fetch";

const GET_BLOCK_NODE_URL = "https://btc.getblock.io/4acc178d-a108-4a51-a2b8-17621ab08d54/mainnet/";

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
