import React from "react";
import { FaCopy } from "react-icons/fa";

import "../styles/account.css"

import { FaTrashAlt } from "react-icons/fa";

const Account = ({privateKey, publicKey, ...others}) => {
  const [reveal, setReveal] = React.useState(false)
  return (
    <div className="account" {...others}>
      <div className="accountInnerDiv">
      <div>
        Address: {publicKey}
        <button className="icon ml10"><FaCopy /></button>
      </div>
      <div style={{display: reveal ? 'block' : 'none', animation: 'fadeIn 2s', marginTop: '5px'}}>
        Private Key: {privateKey}
        <button className="ml10 icon"><FaCopy /></button>
      </div>

      </div>
      <div classname="buttons-div">
        <button className="danger mr10" onClick={() => setReveal(prev => !prev)}>{reveal ? `Hide`:`Reveal`} Private Key</button>
        <button className="icon mr10"><FaTrashAlt /></button>

      </div>
    </div>
  );
};

export default Account;
