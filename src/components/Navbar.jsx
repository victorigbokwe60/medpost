import { BsTwitterX } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="flex items-center justify-between p-6 bg-gray-800 text-white"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="flex-1 text-left">
        <Link to="/" className="text-2xl font-bold">
          MEDPOST
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        {/* <Link
          to="/contact"
          className="hover:text-gray-400 mx-2 block md:inline-block px-4 py-2"
        >
          Contact
        </Link>
        <Link
          to="/about"
          className="hover:text-gray-400 mx-2 block md:inline-block px-4 py-2"
        >
          About
        </Link> */}
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
    </nav>
  );
};

export default Navbar;
