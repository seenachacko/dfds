import React from "react";
import "./App.css";
import LinearProgressBar from "./components/LinearProgressBar/LinearProgressBar";

function App() {
  return (
    <div className="App">
      <LinearProgressBar
        startTime="11"
        endTime="20"
        loading="Copenhagen"
        discharge="Oslo"
      />
    </div>
  );
}

export default App;
