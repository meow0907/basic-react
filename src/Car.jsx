import { useState } from 'react';

const Car = ({ num1, num2 }) => {
  const [scorer, setScorer] = useState('');

  const sum = num1 + num2;

  const shoot = (msg) => {
    alert(`${msg} by ${scorer}`);
  };

  return (
    <>
      <h2>I am Anjila {sum}/{sum}</h2>
      <input 
        placeholder="Enter Scorer" 
        value={scorer} 
        onChange={(e) => setScorer(e.target.value)} 
      />
      <button onClick={() => shoot("Goal...")}>Shoot the ball</button>
    </>
  );
};

export default Car;
