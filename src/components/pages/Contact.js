//The Contact section has a form name, email and message and the form shows notification that the field is required if it is not filled in, and if the email is invalid it shows a message.

import React from 'react';
import Lauracard from '../images/businesscardpic.jpg';

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
      <h3>Contact Me</h3>
      <h2>Business card</h2>
    <div className = "lauracard">
          <img src = {Lauracard} alt="laura sandura pic" style ={{
                                       display: 'block',
                                       border: '10px black',
                                       boxshawdow: '10px 10px',
                                       marginTop: '5px',
                                       marginBottom: '2px',
                                       width:'50%', 
                                       height:'50%'
                              
          }}></img>
          
    <ul><a href="https://www.canva.com/design/DAFVK-73Y9Y/Mn1kvqwDX1Oidteh8K4GgQ/view?utm_content=DAFVK-73Y9Y&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink">Get Business Card</a></ul>
      <h2>Please see my resume to contact me</h2>
    </div>
    </div>
    </div>
    </nav>
  );
}



