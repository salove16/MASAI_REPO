import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    
    return () => {
      clearInterval(timerID);
    };
  }, []); 

  const tick = () => {
    setSeconds(prevSeconds => prevSeconds + 1);
  };

  return (
    <div>
        <h1> Seconds: {seconds}</h1>
     
    </div>
  );
};

export default Timer;
