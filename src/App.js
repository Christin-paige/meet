// src/App.js
import NumberOfEvents from './components/NumberOfEvents';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import { useEffect, useState } from 'react';
import { extractLocations, getEvents } from './api';
import './App.css';


const App = () => {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");

  const handleCurrentNOEUpdate = (newNumber) => {
    setCurrentNOE(newNumber);
  }


useEffect(() => {
  fetchData();
}, [currentCity, currentNOE]);

const fetchData = async () => {
  const allEvents = await getEvents();
  const filteredEvents = currentCity === "See all cities" ?
      allEvents :
      allEvents.filter(event => event.location === currentCity)
  setEvents(filteredEvents.slice(0, currentNOE));
  setAllLocations(extractLocations(allEvents));
}


 return (
   <div className="App">
     <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity} />
     <NumberOfEvents onUpdateNumber={handleCurrentNOEUpdate} />
     <EventList events={events}/>
   </div>
 );
}

export default App;
