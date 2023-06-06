import React from "react";

function Annoucement({title, description}) {
  return (
    <div className="regex_event_card">
      <div className="regex_detail">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Annoucement;
