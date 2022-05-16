import React, { useState } from "react";
import "./App.css";
import Header from "./Header";

function App() {
//about me
//portfolio
//contact me 
// resume

  const [activeTab, setActiveTab] = useState(
    "AboutME"
  );

  return (
    <div className="App">
      <Header/>
      <h2>{activeTab}</h2>
    </div>
  );
}

export default App;
