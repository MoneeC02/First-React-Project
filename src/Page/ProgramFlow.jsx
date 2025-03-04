import React from 'react'

const ProgramFlow = () => {
  return (

    < div id="program-flow">

        <div className="relative w-full bg-cover bg-center py-16 px-8 lg:px-24" >
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start">

           <div className="lg:w-1/2 text-left">

           <div className=" mt-30 text-6xl italic font-serif">Program flow</div>
            
            <button className="mt-4 px-6 py-2 rounded-full text-black font-semibold shadow-xl z-50 backdrop-blur-lg hover:bg-slate-400">
            Register Now
            </button>
      
           </div>

           <div className="lg:w-1/2 mt-8 lg:mt-0 bg-white text-center text-black p-4">
            <ul className="text-md space-y-4">
          <li>6:00 PM - Cocktail Hour</li>
          <li>7:00 PM - Welcome Remarks</li>
          <li>7:15 PM - Dinner Service</li>
          <li>8:00 PM - Keynote speaker</li>
          <li>8:15 PM - Live Auction</li>
          <li>8:45 PM - Entertainment segment</li>
          <li>9:15 PM - Closing remarks </li>
          <li>9:30 PM - Networking & Silent Auction</li>
          <li>10:00 - Conclusion</li>
            </ul>
           </div>

            </div>

        </div>

    </div>
  );
};

export default ProgramFlow;
