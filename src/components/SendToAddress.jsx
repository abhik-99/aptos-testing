import React from "react";

const SendToAddress = () => {
  return (
    <div className="Outer-box2">
      <h3 align='left'>Send to Address</h3>
      <div className="Box2">
      <div>
        <input placeholder="Enter Address" />
        <input placeholder="Enter Amount" />
      </div>
      <button className="button1">Send</button>
      </div>
    </div>
  );
};

export default SendToAddress;
