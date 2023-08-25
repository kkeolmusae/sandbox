import * as QuickNode from "./QuickEthNode.js";

(async () => {
  const blockNumber = 13000000;
  const block = await QuickNode.getBlockByBlockNumber("0x" + blockNumber.toString(16), true);
  const blockReceipt = await QuickNode.getBlockReceipts("0x" + blockNumber.toString(16));
  console.log(block);
})();
