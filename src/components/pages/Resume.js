//The Resume section has an option for a downloadable resume plus a list of developers skills.

import React from 'react';


const styles = {
  resumeStyle: {
    background: '#70CE4E',
  },
};

//Reference: How to download PDF found at from https://www.geeksforgeeks.org/how-to-download-pdf-file-in-reactjs/
// Function will execute on click of button
const onButtonClick = () => {
  // using Java Script method to get PDF file
  fetch('Laura_Sandura_Web_Development_Resume_2022_November.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'ls_resume_web_developer.pdf';
          alink.click();
      })
  })
}


export default function Resume() {
  return (
    <div>
      <nav style={styles.resumeStyle} className="resumesection">
      <div className="container">
      <h4>Consultant - Web Design - Marketing - Sales</h4>
      <ul>HTML    CSS     JavaScript    Terminal    GitHub    Google Api's    PureCSS     Heroku</ul>      
      <ul>jQuery    Bootstrap     Restful Api's   JSON    Parsing data    Fetch   Node.js   MySQL</ul>
      <ul>MongoDB   React   Data structures   Algorithms  GoDaddy   WordPress</ul>
      <ul>Amazon Seller, KDP and Web Services   Shopify</ul>
      <ul>Google Marketing, Analytics, and KeyWords</ul>
      <ul>Facebook Business   Facebook Pixel and Marketing  Cloud Services</ul>
      <ul>UI Testing, Bug Tracking</ul>
      <ul></ul>
      <ul></ul>
      <ul></ul>
      <ul></ul>
      <ul></ul>
      <ul></ul>
      <ul></ul>
      <h3>Resume</h3>
      <button onClick={onButtonClick}>
              Download Laura Sandura Resume
        </button>
      </div>  
      </nav>
    </div>
  )
}


