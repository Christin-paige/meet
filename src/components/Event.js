
import { useState } from 'react';
import mockData  from '../mock-data';


const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);
 
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return ( 
    <li className="eventTitle">
    <div id="eventList">{event.summary}</div>
    <div>{event.created}</div>
    <div>{event.location}</div>
   

<div className="detailsBtn">
 <button
   className="showDetailsButton"
  
   onClick={toggleDetails}
   >show details
   </button>
 <button
   className="hideDetails"
   >hide details</button>
</div>

   {showDetails && <div className="eventDetails">{event.description}</div>}
  </li>
  )
}


  export default Event;