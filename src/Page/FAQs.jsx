import React from "react";

const FAQs = () => {
  return (
    <div id="faqs"> 

<div className="bg-teal-500 p-10 h-full mb-10">
    
    <div className="w-full flex flex-col  mx-20">

      <div className="text-6xl font-semibold  mt-10 mb-10 italic">FAQs</div>

      <div
        className="relative w-4/5 p-20 bg-cover bg-center text-black rounded-lg shadow-xl"
        style={{
          backgroundImage: "url('/NavBackImage.jpg')", 
        }}
      >
        <div className="relative z-10">

          <p className="mt-4 text-lg">
            <strong>What is the purpose of this fundraiser?</strong> 
            <p>Our event aims to raise funds to support our ongoing programs and initiatives.</p>
          </p>
          <p className="mt-4 text-lg">
            <strong>Can I donate without attending the event?</strong> 
            <p>Absolutely! Donate here on our website or reach out to us. Every contribution helps support our mission.</p>
          </p>
          <p className="mt-4 text-lg">
            <strong>Is the event accessible to people with disabilities?</strong> 
            <p>Yes! Entrances and restrooms are wheelchair-accessible. Contact us in advance so we can make the necessary arrangements to support you.</p>
          </p>
          <p className="mt-4 text-lg">
            <strong>What happens if the event is rescheduled or canceled?</strong>
            <p>We will be sharing updates on our social media channels for updates on any changes or cancellations.</p>
          </p>
          <p className="mt-4 text-lg">
            <strong>How can I volunteer for the event?</strong> 
            <p>We will be sharing volunteer opportunities for this event on our social media pages. Kindly watch that space.</p>
          </p>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default FAQs;
