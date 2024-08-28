// Placeholder to host a component
import React from 'react';

const Hours = () => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = new Date().getDay();

  const hours = {
    weekday: '10 a.m. - 4 p.m.',
    weekend: '9 a.m. - 8 p.m.',
  };

  const openHours = today === 0 || today === 6 ? hours.weekend : hours.weekday;

  return (
    <div>
      <h2>Today's Hours:</h2>
      <p>{days[today]}: {openHours}</p>
    </div>
  );
};

export default Hours;
