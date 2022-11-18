//Presents page header and section plus footer
//The Footer section has text or icon links to developers github and linked in profiles and profile on other platforms such as Stack, Twitter, etc.

import React from 'react';

const styles = {
  bottomStyle: {
    background: '#CF4FC6',
  },
};

export default function Footer() {
    // from render element lesson notes must hav JSX 

  return (
    <nav style={styles.bottomStyle} className="bottomsection">
    <div className="container">
      <h6>Thank you for visiting</h6>
      <ul className="bottomnav">
        <p2>2022 @ All Rights Reserved</p2>
      </ul>
    </div>
    </nav>
  )
}




