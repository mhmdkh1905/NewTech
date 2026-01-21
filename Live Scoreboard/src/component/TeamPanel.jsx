import React from "react";

export default function TeamPanel(props) {
  return (
    <div className="TeamPanel">
      <h2>Team {props.teamName}</h2>
      <p>{props.count}</p>
      <button className="button-add" 
      onClick={() => props.add(props.teamName)}>
        +1
      </button>
      <button
        className="button-minus"
        onClick={() => props.subtract(props.teamName)}
      >
        -1
      </button>
    </div>
  );
}
