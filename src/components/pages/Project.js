import React from 'react';

const styles = {
  projectStyle: {
    background: '#70CE4E',
  },
  titleStyle: {
    background: '#CF4FC6',
  },
};

export default function Project() {
  return (
      <nav style={styles.projectStyle} className="projectsection">
      <div className="container">
      <div class="boxes">
      <ul>
        <h4 style={styles.titleStyle} className="card">Accessibility Challenge</h4>
        <ul><a href="https://github.com/laurabora118/uofa-module1-accessibilitychallenge-lsandura">GitHub</a></ul>
        <ul><a href="https://laurabora118.github.io/uofa-module1-accessibilitychallenge-lsandura">Deployed Page</a></ul>
      </ul>
      <ul>
        <h4 style={styles.titleStyle} className="card">Html, Css, JavaScript Portfolio</h4>
        <ul><a href="https://github.com/laurabora118/uofa-module2-professionalportfolio-lsandura">GitHub</a></ul>
        <ul><a href="https://laurabora118.github.io/uofa-module2-professionalportfolio-lsandura">Deployed Page</a></ul>      
      </ul>
      <ul>
      <h4 style={styles.titleStyle} className="card">Password Generator</h4>
        <ul><a href="https://github.com/laurabora118/uofa-module3-passwordgenerator-lsandura">GitHub</a></ul>
        <ul><a href="https://github.com/laurabora118/uofa-module3-passwordgenerator-lsandura">Deployed Page</a></ul>      
        </ul>
      <ul>
      <h4 style={styles.titleStyle} className="card">Api Code Quiz</h4>
        <ul><a href="https://github.com/laurabora118/uofa-module4-apicodequiz-lsandura">GitHub</a></ul>
        <ul><a href="https://laurabora118.github.io/uofa-module4-apicodequiz-lsandura">Deployed Page</a></ul>      
        </ul>
      <ul>
      <h4 style={styles.titleStyle} className="card">Work Day Scheduler</h4>
        <ul><a href="https://github.com/laurabora118/uofa-module5-workdayscheduler-lsandura">GitHub</a></ul>
        <ul><a href="https://laurabora118.github.io/uofa-module5-workdayscheduler-lsandura">Deployed Page</a></ul>      
        </ul>
      <ul>
      <h4 style={styles.titleStyle} className="card">Server Api Weather</h4>
        <ul><a href="https://github.com/laurabora118/uofa-module6-serverapiweather-lsandura">GitHub</a></ul>
        <ul><a href="https://laurabora118.github.io/uofa-module6-serverapiweather-lsandura">Deployed Page</a></ul>      
        </ul>
      <ul>
      <h4 style={styles.titleStyle} className="card">ReadMe Generator</h4>
        <ul><a href="https://github.com/laurabora118/uofa-module9-readmegenerator-lsandura">GitHub</a></ul>
        <ul><a href="https://laurabora118.github.io/uofa-module9-readmegenerator-lsandura">Deployed Page</a></ul>      
        </ul>
        <ul><a href="https://drive.google.com/file/d/1JLmAVXm4vhq-1Gxser9j2dK5H2UBXX8O/view">Video Tutorial</a></ul>      
        
      <ul>
      <h4 style={styles.titleStyle} className="card">Team Project 1</h4>
        <ul>I was project Manager</ul>
        <ul><a href="https://github.com/laurabora118/Project1TeamPluto">GitHub</a></ul>
        <ul><a href="https://laurabora118.github.io/Project1TeamPluto">Deployed Page</a></ul>
        <ul><a href=""></a>Original Wireframe Plan</ul>
        <ul><a href=""></a>Class Presentation</ul>
        <ul><a href="www.sunscout.co"></a>Live Site</ul>
        </ul>
      <ul>
      <h4 style={styles.titleStyle} className="card">Team Project 2</h4>
      <ul>I managed the parent view for the events content, implemented the google search and the data for local events plus creative content images for the page</ul>
      <ul><a href="https://github.com/alexiaValen/Manticore">GitHub</a></ul>
      <ul><a href="https://glacial-sierra-66630.herokuapp.com">Deployed Heroku Page</a></ul>
      <ul><a href="">Video Presentation</a></ul>
      </ul>
      <ul>
      <h4 style={styles.titleStyle} className="card">Team Project 3</h4>
      <ul><a href="https://github.com/SonnyAddison/payme_now">GitHub</a></ul>
      <ul><a href="https://git.heroku.com/payme-now.git">Deployed Heroku Page</a></ul>
      <ul><a href="">Video Presentation</a></ul>
      </ul>
      <ul>
      <h4 style={styles.titleStyle} className="card">React Portfolio</h4>
      <ul><a href="https://github.com/laurabora118/uofa-module20-reactportfolio-lsandura">GitHub</a></ul>
      <ul><a href="https://github.com/laurabora118/uofa-module20-reactportfolio-lsandura/settings/pages">Deployed Page</a></ul>
      </ul>
      <ul>
      <h4 style={styles.titleStyle} className="card">Demo Day Project</h4>
      <ul>Coming Soon Dec 2022</ul>
      </ul>
      <ul>
      {/* <h4 style={styles.titleStyle} className="card">Additional Projects</h4>
      <ul>Coming Soon</ul> */}
      </ul>
      </div>
      </div>
      </nav>
  );
}



