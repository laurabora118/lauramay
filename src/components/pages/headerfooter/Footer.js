//Presents page header and section plus footer
//The Footer section has text or icon links to developers github and linked in profiles and profile on other platforms such as Stack, Twitter, etc.

import React from 'react';

const styles = {
  footerStyle: {
    background: '#70CE4E',
  },
};

export default function Footer() {
    // from render element lesson notes must hav JSX 

  return (
    <nav style={styles.footerStyle} className="footersection">
    <div className="container">
        <h5>Connect with Laura online:</h5>
        <ul><h5><a href="https://laurasandura.com/"></a>Laura Sandura Site</h5></ul>
        <ul><h5><a href="https://github.com/laurabora118">GitHub </a></h5></ul>
        <ul><h5><a href="https://www.linkedin.com/in/laurasandura">LinkedIn </a></h5></ul>
        <ul> </ul>
        <ul> </ul>
        <ul> </ul>
        <ul> </ul>
        <ul> </ul>
        <ul> </ul>
        {/* <ul>Slack</ul>
        <ul>Facebook</ul>
        <ul>YouTube</ul>
        <ul>Twitter</ul>
        <ul>Instagram</ul> */}
    </div>
    </nav>
  )
}


