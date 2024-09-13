import "./App.css"
import React, { useMemo } from 'react';
import RequestAirdrop from './RequestAirdrop';
import TokenLaunchpad from './components/TokenLaunchpad';

// Adding Wallet ComponentsF
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react"
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base"
import { UnsafeBurnerWalletAdapter } from "@solana/wallet-adapter-wallets"
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui"
import { clusterApiUrl } from "@solana/web3.js"

// Default styles that can be overridden by your app
import "@solana/wallet-adapter-react-ui/styles.css"





function App() {
  return (
    <>
      {/* replace endpoint with Alchemy */}
      <ConnectionProvider
        endpoint={
          "https://solana-devnet.g.alchemy.com/v2/0o51gmjVvq78Axn05LTgKUfECR_LGmUS"
        }
      >
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>

            {/* adding and disconnect wallet component */}
            <div
              style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", padding: "20px" }}
            >
              <WalletMultiButton />
              <WalletDisconnectButton />
            </div>
            {/* RequestAirdrop component */}
            {/* <RequestAirdrop /> */}
            <TokenLaunchpad />

            <h1 style={{ textAlign: "center" }}>React App</h1>

          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </>
  );
}

export default App
