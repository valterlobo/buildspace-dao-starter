import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x9Df67D11fcb4f525C10a8E9F818c3599f38A8a78");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Utread",
        description: "This NFT will give you access to ArtBrDAO!",
        image: readFileSync("scripts/assets/ultred.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();