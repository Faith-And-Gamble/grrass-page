import React from 'react';
import SendMessages from './SendMessage';
import './style.css';

function WhatsApp() {
  return (
    <div style={{ width: '100vw', height: '100vh' }} className="flex_middle">
      <SendMessages />
    </div>
  );
}

export default WhatsApp;
