import React from "react";

import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact" id="contactpage">
      <div className="contact-heading">
        <span className="html-entity"> &lt;/&gt;</span> Contact me{" "}
      </div>
      <div className="contact-form">
        <input
          type="text"
          placeholder="Enter email address"
          className="email"
        />
        <textarea
          type="text"
          placeholder="Enter message..."
          className="message"
        />
        <button className="send-email">Send message</button>
      </div>
    </div>
  );
};

export default Contact;
