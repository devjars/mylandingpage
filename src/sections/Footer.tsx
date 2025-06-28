import { Link } from "react-scroll";
import {  FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

import logo from "../assets/jarslogo.webp";
import { nav } from "./Headers";

function Footer() {
  return (
    <footer className="w-full bg-ctmblue pt-16  text-gray-300 text-sm ">
      <div className=" px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 lg:place-items-center">

        {/* Branding */}
        <div>
          <div className="flex items-center gap-1">
            <img className="h-9 rounded-md shadow-md shadow-black/50" src={logo} alt="ars. logo" />
            <h2 className="text-white text-3xl font-black font-logo">ars.</h2>
          </div>
          <p className="mt-4 font-secondary lg:text-lg">
            Building fast, responsive, and effective websites tailored to your business goals.
          </p>
           <div className="flex items-center space-x-4 mt-8 text-3xl text-white">
            <a href="https://www.facebook.com/john.solana.96/" aria-label="go to facebook"  target="_blank" rel="noreferrer" className="hover:text-gray-400">
              <FaFacebookSquare />
            </a>
            <a href="https://www.instagram.com/anjo_solana/" aria-label="goto instagram" target="_blank" rel="noreferrer" className="hover:text-gray-400">
              <FaInstagram />
            </a>
            
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-white font-semibold mb-2 lg:text-xl">Quick Links</h2>
          <nav aria-label="Footer navigation">
            <ul className="font-secondary mt-4 space-y-2 lg:text-lg">
              {nav.map((section) => (
                <li key={section} className="capitalize ">
                  <Link
                    to={section}
                    smooth
                    duration={700}
                    offset={-80}
                    className="cursor-pointer hover:text-white transition"
                  >
                    {section}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Contact & Socials */}
        <div>
          <h2 className="text-white font-semibold mb-2 lg:text-xl">Get in Touch</h2>
          <p>
            Email:{" "}
            <a href="mailto:johnanthonysolana@gmail.com" className="hover:text-white text-lg">
              johnanthonysolana@gmail.com
            </a>
          </p>
         
        </div>
      </div>

      <div className="w-full  mt-12 bg-black text-center text-gray-500 text-xs border-t lg:text-sm border-gray-700 py-4">
        © {new Date().getFullYear()} Jars.dev. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
