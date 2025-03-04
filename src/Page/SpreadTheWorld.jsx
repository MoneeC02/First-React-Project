import React from 'react';
import flyerImage from "../assets/flyerImage.jpg";
import socialImage from "../assets/socialImage.jpg";
import posterImage from "../assets/posterImage.jpg";

function SpreadTheWorld() {
  return (
    <div id="spread-word">
        <div className="bg-teal-500 text-black py-16 px-6 lg:px-24 italic">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-lg">
          With your help, we can reach more people and let them know about our cause. 
          We have designs you can share on social media or print to distribute in your community.
        </p>
      </div>

      <div className="mt-10 flex flex-col md:flex-row justify-center gap-8 text-center">
        
        <div>
          <img src={flyerImage} className="w-40 h-56 mx-auto object-cover rounded-lg shadow-lg" />
          <button className="mt-4 px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition">
            Download flyer
          </button>
        </div>

        <div>
          <img src={socialImage} className="w-40 h-56 mx-auto object-cover rounded-lg shadow-lg" />
          <button className="mt-4 px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition">
            Download social media story
          </button>
        </div>

        <div>
          <img src={posterImage} className="w-40 h-56 mx-auto object-cover rounded-lg shadow-lg" />
          <button className="mt-4 px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition">
            Download poster
          </button>
        </div>
 </div>

    </div>
    </div>
  )
}

export default SpreadTheWorld