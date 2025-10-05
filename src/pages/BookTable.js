import React, { useState } from "react";
import "./BookTable.css";
import Footer1 from "./Footer1";

function BookTable() {
  const [partySize, setPartySize] = useState("2 guests");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [selectedSlot, setSelectedSlot] = useState(null);

  const timeSlots = [
    "10:15 PM", "10:30 PM", "10:45 PM", "11:00 PM", "11:15 PM",
    "11:30 PM", "11:45 PM", "12:00 AM", "12:15 AM", "12:30 AM",
    "12:45 AM", "1:00 AM", "1:15 AM", "1:30 AM", "1:45 AM"
  ];

  return (
    <div>
    <div className="book-table-container">
      <p id="p10">BOOK A TABLE</p>

      <div className="booking-options">
        <div className="option">
          <label>Party size</label>
          <select value={partySize} onChange={(e) => setPartySize(e.target.value)}>
            <option>1 guest</option>
            <option>2 guests</option>
            <option>3 guests</option>
            <option>4 guests</option>
            <option>5 guests</option>
            <option>6+ guests</option>
          </select>
        </div>

        <div className="option">
          <label>Date</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>

        <div className="option">
          <label>Time</label>
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
        </div>
      </div>

      <p id="p11">Choose an available time slot:</p>
      <div className="time-slots">
        {timeSlots.map((slot, index) => (
          <button 
            key={index}
            className={selectedSlot === slot ? "selected" : ""}
            onClick={() => setSelectedSlot(slot)}
          >
            {slot}
          </button>
        ))}
      </div>

      <button className="book-now">BOOK NOW</button>
    </div>

    <Footer1/>
    </div>
  );
}
export default BookTable;