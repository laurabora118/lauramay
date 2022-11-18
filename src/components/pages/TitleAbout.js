//The Portfolio section has at least 6 of the developers application with links to deployed app and git hub repo.

import React from 'react';

const styles = {
  portfolioStyle: {
    background: '#70CE4E',
  },
};

export default function Titleabout() {
  return (
    <nav style={styles.portfolioStyle} className="portfoliopage">
    <div className="container">
      <h3>About Me</h3>
    </div>
    </nav>
  )
}


