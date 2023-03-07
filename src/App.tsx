import React from "react";
import "./App.css";
import LinearProgressBar from "./components/LinearProgressBar/LinearProgressBar";

function App() {
  return (
    <div className="App">
      <LinearProgressBar
        startTime="1"
        endTime="3"
        loading="copenhagen"
        discharge="Norvay"
      />
    </div>
  );
}

export default App;
