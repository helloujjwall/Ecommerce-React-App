import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { FaMapLocationDot, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";

// Footer links
const FooterLinks = [
  { title: "Home", link: "/#" },
  { title: "About", link: "/#about" },
  { title: "Contact", link: "/#contact" },
  { title: "Blog", link: "/#blog" },
];

const Footer = () => {
  return (
    <footer className="bg-[#212529] text-white pt-10 pb-16">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-10">
        {/* Logo and About */}
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2 mb-4">
            <FiShoppingBag size={28} />
            QuickDealz
          </h1>
          <p className="text-gray-300">
           QuickDealz is your ultimate fashion destination, offering the latest trends in clothing, accessories, and footwear — all at unbeatable prices with fast delivery.
          </p>
          <p className="mt-4 text-sm">
            Developed by{" "}
            <a
              href="https://ujjwalsingh.rf.gd/"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              Ujjwal Singh
            </a>
          </p>
        </div>

        {/* Footer Navigation */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
            <ul className="space-y-2">
              {FooterLinks.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.link}
                    className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>

          </div>
          <div>
            <h2 className="text-xl font-semibold mb-3">Explore</h2>
            <ul className="space-y-2">
              <li className="text-gray-300 hover:text-white cursor-pointer">Deals of the Day</li>
              <li className="text-gray-300 hover:text-white cursor-pointer">Gift Cards</li>
              <li className="text-gray-300 hover:text-white cursor-pointer">Return Policy</li>
              <li className="text-gray-300 hover:text-white cursor-pointer">Affiliate Program</li>
            </ul>
          </div>
        </div>

        {/* Contact & Social */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Connect With Us</h2>
          <div className="flex gap-4 text-2xl mb-4">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <FaMapLocationDot />
            <p>Bareilly, Uttar Pradesh, India</p>
          </div>
          <div className="flex items-center gap-2">
            <IoCall />
            <p>+91 83550 68389</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
