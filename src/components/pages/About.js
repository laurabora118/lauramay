//About me is presented first by default with photo and short bio
import React from 'react';

const styles = {
  aboutStyle: {
    background: '#70CE4E',
  },
};

export default function About() {
  // from render element lesson notes must hav JSX 
  return (
      <nav style={styles.aboutStyle} className="aboutpage">
      <div className="container">
      {/* <h3>About Me</h3> */}
      <ul className="About">
        <p>Wherever I can I love to help others and make differences their lives.</p>
        <p>I strive to live life everyday with purpose. Most people would say that I am detail orientated and resourceful.</p>
        <p>Web development has been a big part of my life and it wasn't until recently that I took it to the next level.</p> 
        <p>I am a business owner and will always look to a life work balance and meaningful goals!</p>
      </ul>
      </div>
     </nav>
  )
}


