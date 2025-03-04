import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="fixed top-4 left-0 w-full text-slate-500 py-4 shadow-xl z-50 backdrop-blur-lg">
      <ul className="flex justify-center space-x-8 font-semibold text-xl">
        {[
          { name: "Introduction", to: "introduction" },
          { name: "Event Details", to: "event-details" },
          { name: "Program Flow", to: "program-flow" },
          { name: "FAQs", to: "faqs" },
          { name: "Donate Here", to: "donate" },
          { name: "Spread the Word", to: "spread-word" },
          { name: "Contact Us", to: "contact" },
        ].map((item, index) => (
          <li key={index} className="relative group">
            <Link
              to={item.to}
              smooth={true}
              duration={500}
              className="cursor-pointer px-4 py-2 transition-all duration-300 hover:text-teal-500"
            >
              {item.name}
            </Link>
            {/* Hover Effect - Animated Underline */}
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
