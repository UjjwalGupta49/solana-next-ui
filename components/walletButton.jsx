import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";

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
      <WalletMultiButton
        style={{
          backgroundImage: "linear-gradient(120deg, #f6d365 0%, #fda085 100%)",
        }}
      >
        <p style={{ color: "#000" }}><b>{walletText}</b></p>
      </WalletMultiButton>
    </div>
  );
};
