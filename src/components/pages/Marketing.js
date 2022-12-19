// Referral of Outschool for parents and teachers plus Canva https://www.youtube.com/watch?v=0C9NNsyvueI
import React from 'react';

import kelliead from '../../components/examples/lifecoachadpicture.jpg';
import teaad from '../../components/examples/bingteaadpicture.jpg';
import jumpropeflyer from '../../components/examples/jumpropeflyer.jpg';
import jumpropeclass from '../../components/examples/jumpropeclass.jpg';

const styles = {
  projectStyle: {
    background: '#70CE4E',
  },
  titleStyle: {
    background: '#CF4FC6',
  },
};

const onButtonClick = () => {
  // using Java Script method to get PDF file
  fetch('examples_expediataap.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'examples_expediataap.pdf';
          alink.click();
      })
  })
}

export default function Marketing() {
  return (
    <nav style={styles.projectStyle} className="projectsection">
      <div className="container">
      <div class="boxes">
      <ul>
      <h4 style={styles.titleStyle} className="card">Marketing Ad Examples</h4>
        <ul>Life Coach Ad on Google</ul>
        <ul>
        <div className = "ads">
          <img src = {kelliead} alt="life coach ad" style ={{
                                       display: 'block',
                                       border: '10px black',
                                       boxshawdow: '10px 10px',
                                       marginTop: '5px',
                                       marginBottom: '2px',
                                       width:'50%', 
                                       height:'50%'
                              
          }}></img>
          </div>
          </ul>
        <ul>Affiliate Marketing for Tea on Bing</ul>
        <ul>
        <div className = "ads">
          <img src = {teaad} alt="life coach ad" style ={{
                                       display: 'block',
                                       border: '10px black',
                                       boxshawdow: '10px 10px',
                                       marginTop: '5px',
                                       marginBottom: '2px',
                                       width:'40%', 
                                       height:'40%'
                              
          }}></img>
          </div>
          </ul>
        <h4 style={styles.titleStyle} className="card">Marketing Flyer Examples</h4>
          <ul>Jump Rope Marketing Example</ul>
          <ul>
        <div className = "ads">
          <img src = {jumpropeflyer} alt="jump rope flyer" style ={{
                                       display: 'block',
                                       border: '10px black',
                                       boxshawdow: '10px 10px',
                                       marginTop: '5px',
                                       marginBottom: '2px',
                                       width:'50%', 
                                       height:'50%'
                              
          }}></img>
          </div>
          </ul>
          <ul>Jump Rope Class Flyer Example</ul>
          <ul>
        <div className = "ads">
          <img src = {jumpropeclass} alt="jump rope class" style ={{
                                       display: 'block',
                                       border: '10px black',
                                       boxshawdow: '10px 10px',
                                       marginTop: '5px',
                                       marginBottom: '2px',
                                       width:'40%', 
                                       height:'40%'
                              
          }}></img>
          </div>
          </ul>
          <ul></ul>
        {/* <ul><a href=""></a></ul> */}
        {/* <ul><a href="">Affiliate Marketing on Pinterest</a></ul> */}
      <h4 style={styles.titleStyle} className="card">YouTube Marketing Video Creation</h4>
        <ul><a href="https://www.youtube.com/watch?v=0C9NNsyvueI">Referral of Outschool for parents and teachers using Canva</a></ul>
        <ul><a href="https://www.youtube.com/watch?v=IoO6F3MgT-k">Always RV Presentation</a></ul>
        <ul><a href="https://www.youtube.com/@salesjandj3668">J & J Janitor YouTube Channel Creation plus 6 video presentation creations</a></ul>
        <ul><a href="https://www.youtube.com/watch?v=FVZq24FbKas">I Love To Jump Rope</a></ul>
    <h4 style={styles.titleStyle} className="card">Social Media Creations</h4>
        <ul><a href="https://www.facebook.com/media/set/?set=a.1816908478378821&type=3">Always RV Service</a></ul>
        <ul><a href="https://www.facebook.com/alwaysrvs/posts/1861066083963060">Always RV Service</a></ul>
        <ul><a href="https://www.facebook.com/JanitorialServicesInArizona/videos/716326412471344/">J & J Janitor Content and Posts</a></ul>
        <ul><a href="https://www.facebook.com/JanitorialServicesInArizona/posts/2281727885468866">J & J Janitor Carousel Post</a></ul>
        <ul><a href="https://www.facebook.com/JanitorialServicesInArizona/posts/2281750065466648">J & J Janitor Job Post</a></ul>
        <ul>Suzuki Violin Lessons - coming soon</ul>
        <ul>Native Grill and Wings public review - coming soon</ul>
        <ul></ul>
        <h4 style={styles.titleStyle} className="card">Created Original Content for www.expediataap.com</h4>
        <ul>Created plan for better customer facing support site on paper. Coordinated to launch the first few versions of www.ExpediaTAAP.com for a travel agency support site to the Expedia Travel Agent Affiliate Program. Created support frequently asked questions and organized support team signatures for all team members in USA. Provided equal TAAP education to other TAAP country platforms. Coordinated with web team Big Blue Road under Discover the World to set up my wireframe mock up and to ensure implementation including proper contact form function to direct to support email as well as FAQ's to be set up as individual links for better customer service. Later on coordinated directly with the Expedia web development team on recommendations to their 2nd releast from Expedia agent rez and Expedia agents to the Live TAAP site. Tracked bugs in Jira. Created resolutions. The site is still being utilized today.</ul>
        <ul>
      <ul></ul><button onClick={onButtonClick}>
              Download Original FAQ content for ExpediaTAAP that I created
        </button></ul>
        </ul>
        <ul></ul>
        {/* <ul>
    <h4 style={styles.titleStyle} className="card">Business Reviews - coming soon</h4>
      <ul><a href=""></a></ul>
      <ul><a href=""></a></ul>
        </ul> */}
      </div>
      </div>
      </nav>
  );
}
