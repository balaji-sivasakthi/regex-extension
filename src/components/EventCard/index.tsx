import React from "react";

function EventCard({title, description, image, link}) {
  return (
    <div className="regex_event_card">
      <div className="regex_img">
        <img src={image} alt="" />
      </div>
      <div className="regex_detail">
        <h1>{title}</h1>
        <p>{description}</p>
        <a href={link}>Register Now</a>
      </div>
    </div>
  );
}

export default EventCard;
