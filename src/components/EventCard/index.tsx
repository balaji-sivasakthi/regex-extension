import truncate from "@src/utils/truncate";
import React from "react";

function EventCard({title, description, image, link}) {
  return (
    <div className="regex_event_card">
      <div className="regex_img">
        <img width={100} height={100} src={image} alt="" />
      </div>
      <div className="regex_detail">
        <h1>{truncate(title,20)}</h1>
        <p>{truncate(description,60)}</p>
        <a target="_blank" href={link}>Register Now ➡️</a>
      </div>
    </div>
  );
}

export default EventCard;
