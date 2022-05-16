import React, { useState } from "react";
import Navigation from "./Navigation";
import Header from "./Header";
import Footer from "./Footer";
import AboutMe from "./pages/AboutMe";
import Form from "./pages/Form";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";


export default function PortfolioContainer() {
  const [activeTab, setActiveTab] = useState('About Me')
  const navArray = ["About Me", "Portfolio", "Contact Me", "Resume"];
  
  const renderPage = () => {
    return (
    <div className="App">
      <Header
        navArray={navArray}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <div className="bodyContent">
        <h2>{activeTab}</h2>
        {activeTab == "About Me" && <AboutMe/>}
        {activeTab == "Portfolio" && <Portfolio/>}
        {activeTab == "Contact Me" && <Form/>}
        {activeTab == "Resume" && <Resume/>}
      </div>
      <Footer />
    </div>
    )}
  const handlePageChange = (page) => setActiveTab(page);

return (
  <div>
    {renderPage()}
  </div>
);
};