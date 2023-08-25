import * as QuickNode from "./QuickBtcNode.js";
import * as GetBlockBtcNode from "./GetBlockBtcNode.js";

(async () => {
  const blockHash = await QuickNode.getBlockHash(803647);
  const block = await QuickNode.getBlockByHash(blockHash);
  const count = await GetBlockBtcNode.getBlockCount();
  console.log(block);
})();
