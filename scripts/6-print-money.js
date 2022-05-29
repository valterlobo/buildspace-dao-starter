import sdk from "./1-initialize-sdk.js";

// This is the address of our ERC-20 contract printed out in the step before.
const token = await sdk.getToken("0xddFe9d9FCd044c59dfd1363509f26169214bdF5E");

(async () => {
  try {
    // What's the max supply you want to set? 1,000,000 is a nice number!
    const amount = 1000000;
    // Interact with your deployed ERC-20 contract and mint the tokens!
    //console.log(token);
    await token.mintTo("0x272a9A2c75326aAdFBE1fEe6B1e395961F90a01E" , amount);
    const totalSupply = await token.totalSupply();

    // Print out how many of our token's are out there now!
    console.log("✅ There now is", totalSupply.displayValue, "$ArtBr in circulation");
  } catch (error) {
    console.error("Failed to print money", error);
  }
})();