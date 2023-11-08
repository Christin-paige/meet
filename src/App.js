// src/App.js
import NumberOfEvents from './components/NumberOfEvents';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import { useState } from 'react';

import './App.css';

const App = () => {
  const [events, setEvents] = useState([]);
 return (
   <div className="App">
     <CitySearch />
     <EventList events={events}/>
     <NumberOfEvents />
    
   </div>
 );
}

export default App;
