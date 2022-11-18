//The Contact section has a form name, email and message and the form shows notification that the field is required if it is not filled in, and if the email is invalid it shows a message.

import React from 'react';

const styles = {
  aboutStyle: {
    background: '#70CE4E',
  },
};

export default function Contact() {
  return (
    <nav style={styles.aboutStyle} className="contactpage">
    <div className="container">
    <div>
      <h3>Contact</h3>
    </div>
    </div>
    </nav>
  );
}



