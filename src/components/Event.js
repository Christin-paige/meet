
import { useState } from 'react';
import mockData  from '../mock-data';


const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);
 
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return ( 
    <li className="event-title">
    <div id="event-list">{event.summary}</div>
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

   {showDetails && <div className="event-details">{event.description}</div>}
  </li>
  )
}


  export default Event;