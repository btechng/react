import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// Sample images (replace with your assets)
import HeroImage from "../Images/A.jpg";
import Portfolio1 from "../Images/Group-17-768x1055.webp";
import Portfolio2 from "../Images/Screenshot_20250615-075921.jpg";
import Portfolio3 from "../Images/Screenshot_20250615-115603.jpg";
import Portfolio4 from "../Images/6ixStoresHome.png";
import Client1 from "../Images/Top3-solutions-Logo-1-1536x345-1.webp";
import Client2 from "../Images/talktalkhd1.png";
import Client3 from "../Images/Screenshot_20250710-161236.jpg";

const AooConcept: React.FC = () => {
  const countersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const counters = countersRef.current?.querySelectorAll(".counter");
    const speed = 100;

    const animateCounters = () => {
      counters?.forEach((counter) => {
        counter.innerHTML = "0";
        const updateCount = () => {
          const target = +counter.getAttribute("data-target")!;
          const count = +counter.innerHTML;
          const increment = Math.ceil(target / speed);

          if (count < target) {
            counter.innerHTML = `${count + increment}`;
            setTimeout(updateCount, 20);
          } else {
            counter.innerHTML = `${target}+`;
          }
        };
        updateCount();
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters();
          }
        });
      },
      { threshold: 0.4 }
    );

    if (countersRef.current) observer.observe(countersRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="font-poppins">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-4 bg-white shadow sticky top-0 z-50">
        <img src={HeroImage} alt="Logo" className="h-16" />
        <ul className="flex space-x-6 text-sm font-medium">
          <li>
            <a href="#home" className="hover:text-orange-500">
              Home
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-orange-500">
              Services
            </a>
          </li>
          <li>
            <a href="#portfolio" className="hover:text-orange-500">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-orange-500">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-orange-500">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero Split Section */}
      <section className="flex flex-col md:flex-row h-[85vh]">
        <div className="flex-1 bg-black flex items-center justify-center text-white text-4xl">
          <img src={HeroImage} alt="AooConcept" />
        </div>
        <div className="flex-1 bg-black flex items-center justify-center text-white text-4xl">
          <img src={HeroImage} />
        </div>
      </section>

      {/* Portfolio Marquee */}
      <section className="p-8 text-center">
        <a
          href="#"
          className="inline-block px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition"
        >
          Explore Our Projects →
        </a>
        <div className="mt-8 overflow-hidden whitespace-nowrap animate-marquee flex space-x-6">
          <img
            src={Portfolio1}
            alt="Project1"
            className="h-48 rounded shadow"
          />
          <img
            src={Portfolio2}
            alt="Project2"
            className="h-48 rounded shadow"
          />
          <img
            src={Portfolio3}
            alt="Project3"
            className="h-48 rounded shadow"
          />
          <img
            src={Portfolio4}
            alt="Project4"
            className="h-48 rounded shadow"
          />
        </div>
      </section>

      {/* Tags */}
      <section className="flex justify-center gap-4 mt-8">
        <span className="bg-green-500 text-white px-4 py-2 rounded-full">
          Website Design
        </span>
        <span className="bg-blue-500 text-white px-4 py-2 rounded-full">
          Branding
        </span>
        <span className="bg-green-500 text-white px-4 py-2 rounded-full">
          Website Care
        </span>
      </section>

      {/* Stats */}
      <section
        ref={countersRef}
        className="flex flex-wrap justify-center text-center p-8 gap-8 bg-gray-50"
      >
        <div className="flex flex-col items-center">
          <img src="/icons/layers.svg" alt="" className="h-12 mb-2" />
          <h3 className="text-3xl font-bold counter" data-target="150">
            0
          </h3>
          <p>Websites Designed</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/icons/diamond.svg" alt="" className="h-12 mb-2" />
          <h3 className="text-3xl font-bold counter" data-target="99">
            0
          </h3>
          <p>Customer Satisfaction</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/icons/heart.svg" alt="" className="h-12 mb-2" />
          <h3 className="text-3xl font-bold counter" data-target="10">
            0
          </h3>
          <p>Countries Served</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/icons/layers.svg" alt="" className="h-12 mb-2" />
          <h3 className="text-3xl font-bold counter" data-target="10">
            0
          </h3>
          <p>Years of Experience</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="p-8 text-center bg-white">
        <h2 className="text-2xl font-bold">
          Trusted by hundreds
          <br />
          <span className="text-orange-500">businesses</span>
        </h2>
        <p className="text-gray-600 mt-2">
          Join businesses relying on A.O.O Consults for design and branding.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-gray-100 p-4 rounded shadow text-left">
            <img src={Client1} alt="Client" className="h-12 mb-2" />
            <p>
              “Working with A.O.O Concept was a game-changer for our business.”
            </p>
            <p className="mt-2 text-sm text-gray-700">
              – Amb. Dr. Fatoumatta Gaye, CEO Top3 Solutions
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow text-left">
            <img src={Client2} alt="Client" className="h-12 mb-2" />
            <p>
              “A.O.O Concept transformed our online presence with a sleek,
              user-friendly website.”
            </p>
            <p className="mt-2 text-sm text-gray-700">
              – Yemi, COO, VolkDeutchesInstitut
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow text-left">
            <img src={Client3} alt="Client" className="h-12 mb-2" />
            <p>
              “A.O.O Concept contributed to our success story with a
              user-friendly optimized website. They did a goood job .”
            </p>
            <p className="mt-2 text-sm text-gray-700">
              – Mr Six, CFO, 6ixStores Inc.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="p-8 bg-black-500 text-black text-center">
        <h2 className="text-2xl font-bold">Ready to start your project?</h2>
        <p className="mt-2">
          Let's bring your vision to life with a stunning website and branding.
        </p>
        <a
          href="#contact"
          className="mt-4 inline-block px-6 py-3 bg-white text-orange-500 rounded-full hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </section>

      {/* Footer */}
      <footer className="p-4 text-center bg-gray-800 text-white">
        <p>© 2025 A.O.O Consults. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AooConcept;
