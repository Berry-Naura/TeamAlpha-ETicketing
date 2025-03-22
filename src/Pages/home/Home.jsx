import React from "react";
import Ticket from "../../Components/Ticket";
import Fly1 from "../../Assets/flyer1.jpeg";
import "./App.css";
function Home() {
  return (
    <div className="ticket">
      <Ticket
        time="10:00am -5:00pm"
        flyer={Fly1}
        title="Holy Drill"
        location="Molyko Stadium"
        host="Storm"
      />
      <Ticket
        time="10:00am -5:00pm"
        flyer={Fly1}
        title="Holy Drill"
        location="Molyko Stadium"
        host="Storm"
      />
      <Ticket
        time="10:00am -5:00pm"
        flyer={Fly1}
        title="Holy Drill"
        location="Molyko Stadium"
        host="Storm"
      />
      <Ticket
        time="10:00am -5:00pm"
        flyer={Fly1}
        title="Holy Drill"
        location="Molyko Stadium"
        host="Storm"
      />
      <Ticket
        time="10:00am -5:00pm"
        flyer={Fly1}
        title="Holy Drill"
        location="Molyko Stadium"
        host="Storm"
      />
      <Ticket
        time="10:00am -5:00pm"
        flyer={Fly1}
        title="Holy Drill"
        location="Molyko Stadium"
        host="Storm"
      />
    </div>
  );
}

export default Home;
