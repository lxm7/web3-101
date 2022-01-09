import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xD0f65D949f45bB06a5A0f8949B29D3E3fd02DabD",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Somewhere between web2 and web3",
        description: "This NFT will give you access to Web2NoobsDAO! (image by Bruce Pennington)",
        image: readFileSync("scripts/assets/web3-pennington.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()