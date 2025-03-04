import React from "react";
import myImage from "../assets/image1.jpg";

const EventDetails = () => {
  return (
< div id="event-details">

<div className="bg-teal-500 p-10 h-full mb-10">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        <img
          src={myImage}
          className="w-full rounded-lg shadow-md"
        />

<div>
          <h2 className="text-4xl font-bold text-brown-800 italic text-center ">Event Details</h2>
          <p className="mt-8 text-lg"><strong>Funds to raise:</strong> <span className="text-emerald-950">$250,000</span></p>
          <p className="mt-8 text-gray-700">
            This is our 8th year hosting the <strong>Gala of Hope</strong>. Join us for a
            special evening raising awareness and much-needed funds to sustain our mission at Unity Outreach Network.
          </p>
          <p className="mt-4 text-gray-700">
            Guests will enjoy a formal dinner, live entertainment, inspiring speeches, and a silent auction.
          </p>
        </div>
        </div>
        </div>

      
   </div>
  );
};

export default EventDetails;


