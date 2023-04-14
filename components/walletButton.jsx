import dynamic from 'next/dynamic';
import { useWallet } from "@solana/wallet-adapter-react";

const WalletMultiButtonNoSSR = dynamic(
  () => import("@solana/wallet-adapter-react-ui").then((mod) => mod.WalletMultiButton),
  { ssr: false }
);

export const SolanaWallet = () => {
  const { publicKey } = useWallet();
  let walletText;
  if (publicKey) {
    walletText = `${publicKey.toString().slice(0,6)}...`
  } else {
    walletText = "Get Started"
  }

  return (
    <div style={{ position: "absolute", top: 0, right: 0 }}>
      <WalletMultiButtonNoSSR
        style={{
          backgroundImage: "linear-gradient(120deg, #f6d365 0%, #fda085 100%)",
        }}
      >
        <p style={{ color: "#000" }}><b>{walletText}</b></p>
      </WalletMultiButtonNoSSR>
    </div>
  );
};
