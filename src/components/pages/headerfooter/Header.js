//Presents page header and section plus footer
//add picture to Header
import React from 'react';
import Lauraimage from '../../images/mypic.jpg';


const styles = {
  headerStyle: {
    background: '#824FCF',
  },
};

export default function Header() {
  // from render element lesson notes must hav JSX 
  return (
    <nav style={styles.headerStyle} className="headersection">
    <div className="container">
    <div className = "lauraimage">
          <img src = {Lauraimage} alt="laura sandura pic" style ={{
                                       display: 'block',
                                       border: '10px solid purple',
                                       boxshawdow: '10px 10px',
                                       marginTop: '5px',
                                       marginBottom: '2px',
                                       width:'10%', 
                                       height:'10%'
                              
          }}></img>
      <h1>Laura Sandura</h1>
      <h2>Full Stack Web Developer</h2>
      <ul className="header">
        {/* <li>Full Stack Coding Bootcamp Graduate 2022</li> */}
      </ul>
    </div>
    </div>
    </nav>
  );
}


