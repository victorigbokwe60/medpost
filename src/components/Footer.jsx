import { BsTwitterX } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <Link to="/" className="text-2xl font-bold">
            MEDPOST
          </Link>
        </div>
        <nav className="mb-6 md:mb-0">
          <div className="text-center text-gray-400">
            <p>&copy; 2025 MEDPOST. All rights reserved.</p>
          </div>
          {/* <ul className="flex space-x-4">
            <li>
              <Link to="/category/shop" className="hover:text-gray-400">
                About
              </Link>
            </li>
            <li>
              <Link to="/category/about" className="hover:text-gray-400">
                Contact
              </Link>
            </li>
          </ul>*/}
        </nav>
        <div className="flex space-x-4">
          <Link to="https://x.com/1MedPost">
            <BsTwitterX
              className="cursor-pointer hover:text-gray-400"
              size={24}
            />
          </Link>

          <Link to="https://wa.me/message/MRSEHLF3RYAIK1">
            <IoLogoWhatsapp
              className="cursor-pointer hover:text-gray-400"
              size={24}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
