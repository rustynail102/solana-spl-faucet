import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { SplFaucet } from "../target/types/spl_faucet";

describe("spl-faucet", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.SplFaucet as Program<SplFaucet>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
