import React from 'react'
import "../styles/modal.css";

const LoginModal = ({onClose, onSuccess}) => {
  const [input, setInput] = React.useState('');
  return (
    <div className={'modal'}>
      <div className='modal-wrap'>
      <div style={{ textAlign: "right"}}>
        <button className='icon' onClick={() => onClose()}>X</button>
      </div>
      <h2>Enter Wallet Private Key</h2>
          <hr />
          <input
            type="text"
            placeholder="Enter Wallet Private Key here"
            className='modal-input'
            onChange={(e) => setInput(e.target.value)}
          />
          <hr />
          <button className="button1 mr10" onClick={() => onSuccess(input)}>
            Add Wallet
          </button>
          <button className="button3" onClick={() => onClose()}>
            Cancel
          </button>
      </div>
    </div>
  )
}

export default LoginModal