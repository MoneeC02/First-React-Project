import React from "react";

const Introduction = () => {
  return (
< div id="introduction">

<div className="relative z-20 flex flex-col justify-center items-center text-center p-10 m-20">
        <h1 className="text-5xl font-serif font-bold">Gala of Hope</h1>
        <p className="mt-6 text-lg italic pt-6 ">
          A night of inspiration, connection, and a chance to make a real impact
        </p>
        
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-md  p-4 backdrop-blur-xl">
       
          <p><strong>Save the date:</strong> May 7, 2028</p>
          <p><strong>Check-in time:</strong> 5:30 PM</p>
          <p><strong>Event begins:</strong> 6:00 PM</p>
          <p><strong>Event venue:</strong> Liberty Events Plaza</p>
 
        </div>

        <div className="mt-12">
          <button className="px-6 py-2 rounded-full text-black font-semibold shadow-xl z-50 backdrop-blur-lg hover:bg-slate-400">
            Register to Attend
          </button>
        </div>

        <p className="mt-3 text-lg italic ">
        Unity Outreach Network
        </p>
      </div>
      
   </div>
  );
};

export default Introduction;


