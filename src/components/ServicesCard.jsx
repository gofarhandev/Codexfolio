// ServicesCard.jsx
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import ActionButton from "./ActionButton";
import {
  FaUser,
  FaLaptopCode,
  FaDollarSign,
  FaCoins,
  FaFileAlt,
} from "react-icons/fa";

const ServicesCard = ({ icon, title, description, refEl }) => {
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_s2ezwev", // ✅ EmailJS service ID
        "template_1fhh6t7", // ✅ EmailJS template ID
        formRef.current,
        "ZG_21aIHLiY7eMBmS" // ✅ EmailJS public key
      )
      .then(
        () => {
          alert("✅ Request sent successfully!");
          formRef.current.reset();
          setShowForm(false);
        },
        (error) => {
          alert("❌ Failed to send request: " + error.text);
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <div
      ref={refEl} // ✅ Important: attach animation ref here
      className="bg-accent/20 p-5 lg:p-[1.5vw] rounded-xl shadow-lg transition-all duration-500 hover:-translate-y-[.5vw]"
    >
      <div className="text-2xl lg:text-[2vw] text-grow mb-2 lg:mb-[1vw]">
        {icon}
      </div>
      <h3 className="text-xl lg:text-[1.6vw] font-semibold mb-2 lg:mb-[.5vw]">
        {title}
      </h3>
      <p className="text-sm lg:text-[1.05vw] text-muted">{description}</p>

      <button
        onClick={() => setShowForm(!showForm)}
        className="mt-4 lg:mt-[1vw] text-sm lg:text-[1.2vw] text-primary"
      >
        {showForm ? "Close" : "Customize Request"}
      </button>

      {showForm && (
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-4 lg:mt-[1vw] flex flex-col gap-4 lg:gap-[1.5vw] text-base lg:text-[1vw]"
        >
          <input type="hidden" name="service" value={title} />

          {/* Name */}
          <div className="flex items-center gap-2 lg:gap-[.5vw] bg-accent/50 shadow shadow-accent rounded px-3 py-2 lg:p-[1vw]">
            <FaUser className="text-white text-[1.2em]" />
            <input
              name="name"
              type="text"
              className="w-full bg-transparent outline-none placeholder:text-white text-white font-montserrat"
              placeholder="Fullname"
              required
              min={3}
            />
          </div>

          {/* Tech */}
          <div className="flex items-center gap-3 lg:gap-[.5vw] bg-accent/50 shadow shadow-accent rounded px-3 py-2 lg:p-[1vw]">
            <FaLaptopCode className="text-white text-[1.2em]" />
            <select
              name="tech"
              className="w-full bg-transparent outline-none text-white font-montserrat"
              required
            >
              <option
                className="bg-back hover:bg-accent text-xs"
                value="React & Tailwind"
              >
                React & Tailwind
              </option>
              <option className="bg-back hover:bg-accent text-xs" value="Vanilla JS">
                Vanilla JS
              </option>
            </select>
          </div>

          {/* Currency + Budget */}
          <div className="flex items-center gap-2  lg:gap-[.5vw] bg-accent/50 shadow shadow-accent rounded px-3 py-2 lg:p-[1vw] w-full">
            <FaDollarSign className="text-white text-[1.2em]" />

            {/* Currency Selector */}
            <select
              name="currency"
              className="bg-transparent outline-none text-white font-montserrat w-17 lg:w-[4.5vw]"
              required
            >
              <option className="bg-back hover:bg-accent text-xs" value="USD">
                USD
              </option>
              <option className="bg-back hover:bg-accent text-xs" value="BDT">
                BDT
              </option>
            </select>

            {/* Budget Input */}
            <input
              name="budget"
              type="number"
              className="w-full bg-transparent outline-none placeholder:text-white text-white font-montserrat px-4 lg:px-[1vw]"
              placeholder="Ex: 100"
              required
              min={1}
            />
          </div>

          {/* Details */}
          <div className="flex items-start gap-2 lg:gap-[.5vw] bg-accent/50 shadow shadow-accent rounded px-3 py-2 lg:p-[1vw]">
            <FaFileAlt className="text-white text-[1.2em] mt-1" />
            <textarea
              name="details"
              className="w-full bg-transparent outline-none placeholder:text-white text-white font-montserrat resize-none"
              rows={3}
              placeholder="Additional details..."
              required
            />
          </div>

          {/* Submit Button */}
          <ActionButton
            type="submit"
            label={loading ? "Sending..." : "Send Request"}
            className="lg:w-[17vw]"
            disabled={loading}
          />
        </form>
      )}
    </div>
  );
};

export default ServicesCard;
