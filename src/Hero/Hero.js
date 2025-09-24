import React from 'react';


function Hero() {
  return (
    <div className="hero">
        {/* This is an A11y Change: Only one <h1> for page; demote secondary heading */}
        <h1>Personal Budget</h1>
        <h2>A personal-budget management app</h2>
    </div>
  );
}

export default Hero;
