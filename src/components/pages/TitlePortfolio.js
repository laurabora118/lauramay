//The Portfolio section has at least 6 of the developers application with links to deployed app and git hub repo.

import React from 'react';

const styles = {
  portfolioStyle: {
    background: '#70CE4E',
  },
};

export default function Portfolio() {
  return (
    <nav style={styles.portfolioStyle} className="portfoliopage">
    <div className="container">
      <h3>Portfolio</h3>
    </div>
    </nav>
  )
}


