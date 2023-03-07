import React from "react";
import "./Progress.css";
import { FaShip } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useState, useEffect } from "react";

type LinearProgressBarProps = {
  startTime: string;
  endTime: string;
  loading: string;
  discharge: string;
};

const LinearProgressBar = (props: LinearProgressBarProps) => {
  const d = new Date().toLocaleTimeString("en-US", { hour12: false });
  const [date, setDate] = useState(d);
  const segments = [...Array(100).keys()];
  const departureTime = parseFloat(props.startTime);
  const arraivalTime = parseFloat(props.endTime);

  function refreshClock() {
    const localTime = new Date().toLocaleTimeString("en-US", { hour12: false });
    setDate(localTime);
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 60000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  const duration = arraivalTime - departureTime;
  const currentTime = date.replaceAll(":", ".");
  const actuallCurrentTime = parseFloat(currentTime);
  const differnce =
    arraivalTime >= actuallCurrentTime
      ? actuallCurrentTime - departureTime
      : 100;
  const percentage =
    arraivalTime >= actuallCurrentTime
      ? ((differnce / duration) * 100).toFixed(2)
      : 100;

  return (
    <div className="linear-progress">
      <span>{props.loading}</span>
      <div className="progress-bar">
        <IconContext.Provider value={{ color: "#53ACBF", size: "30px" }}>
          <div className="shipContainer" style={{ left: `${percentage}%` }}>
            <FaShip />
          </div>
        </IconContext.Provider>
        {segments.map((segment) => (
          <div
            key={segment}
            className={`progress-segment ${
              percentage >= segment + 1 ? "active" : ""
            }`}
          />
        ))}
      </div>
      <span>{props.discharge}</span>
    </div>
  );
};

export default LinearProgressBar;
