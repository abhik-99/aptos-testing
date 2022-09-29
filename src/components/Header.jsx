import React from 'react';
import "../styles/header.css";
import logo from "../logo-short.png";

import { FaConnectdevelop } from "react-icons/fa";
const CustomHeader = ({toggleNodeConnectModal}) => {
  return (
    <header className='header'>
      <div className='ml10'>
        <h1>Aptos Playground</h1>
        <span>made by <img src={logo} className="ml10"/> Wits Innovation Labs</span>        
      </div>
      <button className='icon mr10' title="Change Node" onClick={toggleNodeConnectModal}><FaConnectdevelop /></button>
    </header>
  )
}

export default CustomHeader