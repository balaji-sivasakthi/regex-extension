import truncate from "@src/utils/truncate";
import React from "react";
function Annoucement({title, description}) {
  return (
    <div className="regex_event_card">
      <div className="regex_detail">
        <h1>{truncate(title,20)}</h1>
        <p>{truncate(description,100)}</p>
      </div>
    </div>
  );
}

export default Annoucement;
