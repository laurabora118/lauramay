import React from 'react';

const styles = {
  extrasStyle: {
    background: '#70CE4E',
  },
  titleStyle: {
    background: '#CF4FC6',
  },
};

export default function Extras() {
  return (
      <nav style={styles.projectStyle} className="extrassection">
      <div className="container">
      <div class="boxes">
      <ul>
        <h4 style={styles.titleStyle} className="card">Additional Past Website Design Examples</h4>
        <ul><a href="https://youtu.be/bfj3i1d5aws">Client sites built on GoDaddy</a></ul>
      </ul>
      <ul>
        <h4 style={styles.titleStyle} className="card">Coming Soon</h4>
        <ul><a href="">Uncirculated Coin Collection Estate Sale</a></ul>
      </ul>
      </div>
      </div>
      </nav>
  );
}



