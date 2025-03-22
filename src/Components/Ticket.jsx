import React from 'react'
import "./ticket.css"
function Ticket({time,flyer,title,location,host,price}) {
  return (
    <div  className='ticket-container'>
      <img  src={flyer} alt="Event Flyer" />
      <p className='time'>{time}</p>
      <div className='event-description'>
      <h3 >{title}</h3>
      <p className='location'>{location}</p>
      <p className='host'>Hosted by {host}</p>
      </div>
      <div className='ticket-footer'><span>FCFA{price}</span> <button>Reserve</button></div> 
      
    </div>
  )
}

export default Ticket
