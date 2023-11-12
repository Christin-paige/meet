// src/components/NumberOfEvents.js
import { useState } from 'react';

const NumberOfEvents = ({ setCurrentNOE }) => {
  const [number, setNumber] = useState(32);


  const handleInputChanged = (event) => {
    const value = event.target.value;
    setNumber(value);
    setCurrentNOE(value);
  };

  return (
    <div id='number-of-events'>
       <label htmlFor="number-of-events-input">Number of Events: </label>
      <input
        type='text'
        className='event-number'
        id='number-of-events-input'
        value={number}
        onChange={handleInputChanged}
      />
    </div>
  );
}

export default NumberOfEvents;