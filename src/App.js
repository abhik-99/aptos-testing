import React, { useState } from "react";
import Account from "./components/Account";
import ConnectNodeModal from "./components/ConnectNodeModal";
import CustomHeader from "./components/Header";
import LoginModal from "./components/LoginModal";
import SendToAddress from "./components/SendToAddress";
import "./styles/App.css";

import "./styles/button.css";

function App() {
  const [accounts, setAccounts] = useState([]);
  const [auth, setAuth] = useState({loggedIn: false});
  const [balance, setBalance] = useState(0);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showConnectNodeModal, setShowConnectNodeModal] = useState(false);

  const handleGenerateAccount = () => {
    setAccounts((prev) => [
      ...prev,
      { private: prev.length + 1, public: prev.length + 2 },
    ]);
  };

  const handleAddWallet = () => {
    setShowLoginModal(true);
  };

  const handleLogin = (privateKey) => {
    setAuth(prev => ({...prev, loggedIn: true, privateKey}));
    setShowLoginModal(false);
  }

  const handleLogout = () => {
    setAuth({loggedIn: false});
  }

  const handleNodeConnect = (nodeUrl, faucetUrl) => {
    console.log("Connecting to Node", nodeUrl);
    console.log("Connecting to Faucet", faucetUrl);
  }

  return (
    <div className="App">
      <CustomHeader toggleNodeConnectModal={() => setShowConnectNodeModal(true)}/>
      <div className="Box1">
        <button className="button1" onClick={handleGenerateAccount}>
          Generate Account
        </button>
        {accounts.length > 0 &&
          accounts.map((each, idx) => (
            <Account
              privateKey={each.private}
              publicKey={each.public}
              key={"acc" + idx}
            />
          ))}
      </div>
      <div className="Box1">
        <h2>Playground</h2>
        {!auth.loggedIn && (
          <button className="button2" onClick={handleAddWallet}>
            Add Wallet
          </button>
        )}
        {
          auth.loggedIn &&
          <>
          <div className="account">
            <p>Public Key: {auth.privateKey}</p>
            <p>Balance: 0</p>
            <button className="danger" onClick={handleLogout}>Logout</button>
          </div>
          <SendToAddress />
          </>
        }
      </div>
      {showLoginModal && (
        <LoginModal onClose={() => setShowLoginModal(false)} onSuccess={handleLogin}/>
      )}
      {
        showConnectNodeModal &&
        <ConnectNodeModal onClose={() => setShowConnectNodeModal(false)} onSuccess={handleNodeConnect} />
      }
    </div>
  );
}

export default App;
