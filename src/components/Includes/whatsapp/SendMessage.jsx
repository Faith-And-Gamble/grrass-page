/* eslint-disable react/no-unused-prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';

function SendMessages() {
  // const CHARACTER_LIMIT = 100;

  const [numberEmptyError, setNumberEmptyError] = useState(false);
  const [messageEmptyError, setMessageEmptyError] = useState(false);

  const [formData, setFormData] = useState({
    mobileNumber: '9983340133',
    message: '',
  });

  const { mobileNumber, message } = formData;

  const onChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (mobileNumber.length < 1) {
      setNumberEmptyError(true);
      setTimeout(() => setNumberEmptyError(false), 3000);
    } else if (message.length < 1) {
      setMessageEmptyError(true);
      setTimeout(() => setMessageEmptyError(false), 3000);
    } else {
      // Regex expression to remove all characters which are NOT alphanumeric
      const number = mobileNumber.replace(/[^\w\s]/gi, '').replace(/ /g, '');

      // Appending the phone number to the URL
      let url = `https://web.whatsapp.com/send?phone=${number}`;

      // Appending the message to the URL by encoding it
      url += `&text=${encodeURI(message)}&app_absent=0`;

      // Open our newly created URL in a new tab to send the message
      window.open(url);
    }
  };

  return (
    <div className="communication">
      <div className="whatsapp-card app">
        <div className="title flex_middle">
          <div style={{ marginRight: '0.5em' }}>
            <i className="fa fa-whatsapp" aria-hidden="true" />
          </div>
          <div>Send Message</div>
        </div>
        {numberEmptyError && (
          <div className="errors">Mobile number cannot be empty!</div>
        )}
        {messageEmptyError && (
          <div className="errors">Message cannot be empty!</div>
        )}
        {!numberEmptyError && !messageEmptyError && (
          <div className="errors-null">.</div>
        )}
        <div className="search_contact app">
          {formData.mobileNumber}
        </div>
        <div className="app" style={{ marginTop: '1.5em' }}>
          <textarea
            label="Message"
            className="text"
            style={{ height: '200px' }}
            placeholder="Hi! Sending a message to Aarambh...."
            name="message"
            value={message}
            onChange={onChange}
            required
          />
        </div>
        <div style={{ marginTop: '1.5em' }}>
          <button
            onClick={onSubmit}
            type="button"
            style={{ width: '90px', borderRadius: '10%', background: '#c0fcc0' }}
            variant="outlined"
            color="success"
            size="small"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

SendMessages.propTypes = {
  number: PropTypes.string.isRequired,
  message: PropTypes.string,
};

export default SendMessages;
