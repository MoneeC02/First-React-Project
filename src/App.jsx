import React from "react";
import NavBar from "./Components/NavBar";
import "./index.css";
import Introduction from "./Page/Introduction";
import EventDetails from "./Page/EventDetails";
import ProgramFlow from "./Page/ProgramFlow";
import FAQs from "./Page/FAQs";
import Donate from "./Page/Donate"
import SpreadTheWorld from "./Page/SpreadTheWorld";
import ContactUs from "./Page/ContactUs";


function App() {
  return (
    <div className="relative bg-hero-pattern bg-cover bg-center bg-no-repeat min-h-screen">
      <NavBar />
      <Introduction />
      <EventDetails />
      <ProgramFlow />
      <FAQs />
      <Donate />
      <SpreadTheWorld />
      <ContactUs />
    </div>
  );
}

export default App;
