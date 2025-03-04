import React from 'react';
import contactImage from "../assets/contact.jpg";

function ContactUs() {
  return (
    <div id="contact">
          <div className="relative w-full bg-cover bg-center py-16 px-8 lg:px-24" > 
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start">

            <div className="lg:w-1/2 text-left">
                <img
                  src={contactImage}
                  className="h-1/4 rounded-lg shadow-md"
                />
            </div>

            <div className="bg-gray-200 rounded-lg w-1/2 h-full">
      
      <div className="text-center p-8">
        <div className="text-4xl font-serif italic text-teal-500">Contact Us</div>

        <div className="w-1/2 mx-auto bg-white p-6 m-10 rounded-lg shadow-md">

        <ul className="text-md text-black">
              <li>Phone: </li>
              <li><strong>(123) 456-7890</strong></li>

              <li>Email:</li>
              <li><strong>hello@reallygreatsite.com</strong></li>

              <li>Address:</li>
              <li><strong>123 Anywhere St., Any City, ST 12345</strong></li>


        </ul>
      </div>

      </div>

            </div>
            </div>
    </div>
    </div>
  )
}

export default ContactUs