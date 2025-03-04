import React from "react";
import donateImage from "../assets/image2.jpg";

const Donate = () => {
  return (
  <div id="donate">

    <div className="relative w-full bg-cover bg-center py-16 px-8 lg:px-24" > 
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start">

            <div className="lg:w-1/2 text-left">
                <img
                  src={donateImage}
                  className="w-1/2 rounded-lg shadow-md"
                />
            </div>
    
            <div className="bg-gray-200 w-1/2 h-full">
      
      <div className="text-center p-8">
        <div className="text-4xl font-serif italic text-teal-500">Donate Here</div>
      </div>

      
      <div className="w-1/2 mx-auto bg-white p-6 m-10 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800">Unity Outreach Network</h2>
        <p className="mt-2 text-gray-600">Help us reach our $250,000 goal!</p>
        <div className="mt-6">
        <button className="mt-4 px-6 py-2 rounded-full text-black font-semibold shadow-xl z-50 backdrop-blur-lg hover:bg-slate-400 bg-teal-500">
            Donate
            </button>
        </div>
      </div>

      </div>


        </div>
    </div>
</div>
  );
};

export default Donate;
