import React from "react";
import { useState } from "react";
import TeamPanel from "./TeamPanel";
import "../style.css";

export default function Scoreboard() {
  const [countRed, setCountRed] = useState(0);
  const [countBlue, setCountBlue] = useState(0);

  function addCount(team) {
    if (team === "Red") {
      setCountRed(countRed + 1);
    } else if (team === "Blue") {
      setCountBlue(countBlue + 1);
    }
  }

  function subtractCount(team) {
    if (team === "Red") {
      setCountRed(countRed - 1);
    } else if (team === "Blue") {
      setCountBlue(countBlue - 1);
    }
  }
  return (
    <div>
      <h1>Live Scoreboard</h1>
      <div id="TeamContainer">
        <TeamPanel
          teamName="Red"
          count={countRed}
          add={addCount}
          subtract={subtractCount}
        />
        <TeamPanel
          teamName="Blue"
          count={countBlue}
          add={addCount}
          subtract={subtractCount}
        />
      </div>
      <button
        id="reset-button"
        onClick={() => {
          setCountRed(0);
          setCountBlue(0);
        }}
      >
        Reset Game
      </button>
    </div>
  );
}
