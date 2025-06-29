import { useState } from "react";
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";

const SocialsSubscribe6ixStores = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    // Handle subscription logic here
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <div>
      <footer className="bg-gray-900 text-white py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
            {/* Logo and Newsletter Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-2">
                  <div className="w-6 h-6 bg-orange-500 rounded-sm transform rotate-12"></div>
                </div>
                <span className="text-xl font-bold">6iXSTORES</span>
              </div>

              {/* Newsletter Subscription */}
              <div className="mb-6">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email Address"
                    className="flex-1 px-4 py-3 rounded-l-md sm:rounded-r-none rounded-r-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <button
                    onClick={handleSubscribe}
                    className="px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-r-md sm:rounded-l-none rounded-l-md font-semibold transition-colors duration-200"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold mb-4 text-orange-500">
                CONTACT INFO
              </h3>
              <div className="space-y-3 text-gray-300">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Address:</p>
                  <p className="text-sm">No. 108 PortHarcourt Road, Owerri</p>
                  <p className="text-sm">Imo State, Nigeria</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Phone:</p>
                  <p className="text-sm">+234 09119225365</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Email:</p>
                  <p className="text-sm">contact.6ixstores.com</p>
                </div>
              </div>
            </div>

            {/* Store Notice */}
            <div className="lg:col-span-1">
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-sm text-gray-300 leading-relaxed">
                  <span className="text-orange-500 font-semibold">
                    WE AT 6IXSTORES ARE SURE TO WANT TO SERVE YOU BETTER, MAKE
                    USE OF THE WHATSAPP BUTTON TO HIT US A MESSAGE DIRECTLY.
                    SUBSCRIBE TO OUR SITE TO GET LATEST UPDATES{" "}
                  </span>
                  <span className="text-blue-400">⬆️ UP.</span>
                  <span className="text-orange-500">
                    {" "}
                    ALL YOU HAVE TO DO IS TO JUST PUT YOUR EMAIL ADDRESS AND
                    CLICK SUBSCRIBE
                  </span>
                  <span className="text-blue-400">?</span>
                </p>
              </div>
            </div>

            {/* My Account */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold mb-4 text-orange-500">
                MY ACCOUNT
              </h3>
              <div className="space-y-3">
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white text-sm transition-colors duration-200"
                >
                  Login
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white text-sm transition-colors duration-200"
                >
                  Order History
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white text-sm transition-colors duration-200"
                >
                  My Wishlist
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white text-sm transition-colors duration-200"
                >
                  Track Order
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white text-sm transition-colors duration-200"
                >
                  Be an affiliate partner
                </a>
              </div>

              {/* Be a Seller Button */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold mb-3">BE A SELLER</h4>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-semibold transition-colors duration-200">
                  Apply Now
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <div className="text-sm text-gray-400">
                Copyright © 2025 6IXSTORES INC. All Rights Reserved.
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-sky-500 hover:bg-sky-600 rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-pink-500 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label="YouTube"
                >
                  <Youtube size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-700 hover:bg-blue-800 rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SocialsSubscribe6ixStores;
