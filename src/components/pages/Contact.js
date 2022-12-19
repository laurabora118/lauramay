//The Contact section has a form name, email and message and the form shows notification that the field is required if it is not filled in, and if the email is invalid it shows a message.

import React from 'react';
import lauracard from '../../components/images/mybusinesscard.jpg';

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
      <h3>Business Card</h3>
    <div className = "lauracard">
          <img src = {lauracard} alt="laura sandura business card pic" style ={{
                                       display: 'block',
                                       border: '10px black',
                                       boxshawdow: '10px 10px',
                                       marginTop: '5px',
                                       marginBottom: '2px',
                                       width:'50%', 
                                       height:'50%'
                              
          }}></img>
          
      <h2>Please reach out for any questions.</h2>
    </div>
    </div>
    </div>
    </nav>
  );
}



