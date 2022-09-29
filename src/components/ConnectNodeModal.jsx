import React, {useState} from "react";
import "../styles/modal.css";

const ConnectNodeModal = ({onClose, onSuccess}) => {
  const [nodeUrl, setNodeUrl] = useState('');
  const [faucetUrl, setFaucetUrl] = useState('');

  return (
    <div className={"modal"}>
      <div className="modal-wrap">
        <div style={{ textAlign: "right" }}>
          <button className="icon" onClick={() => onClose()}>
            X
          </button>
        </div>
        <h2>Connect To Node</h2>
        <hr />
        <input
          type="text"
          placeholder="Enter Node URL"
          className="modal-input"
          onChange={(e) => setNodeUrl(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Faucet URL"
          className="modal-input"
          onChange={(e) => setFaucetUrl(e.target.value)}
        />
        <hr />
        <button className="button1 mr10" onClick={() => onSuccess(nodeUrl, faucetUrl)}>
          Connect
        </button>
        <button className="danger" onClick={() => onClose()}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ConnectNodeModal;
