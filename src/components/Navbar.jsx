import { Link } from "react-router-dom";
import { FaEnvelope, FaPhone, FaFacebookF, FaInstagram, FaGoogle, } from "react-icons/fa";

function Navbar() {
  return (
    <header className="w-full shadow-md">
      {/* Barra superior */}
      <div className="bg-petroleo text-white text-sm px-4 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-4 font-nunito">
          <span className="flex items-center space-x-1">
            <FaEnvelope className="text-sm" />
            <span>turismoup@turismo.com</span>
          </span>
          <span className="flex items-center space-x-1">
            <FaPhone className="text-sm" />
            <span>+549-11-6758-2349</span>
          </span>
        </div>
        <div className="flex space-x-4 pr-4 text-white text-sm">
          <a href="#" className="transform transition-all duration-200 ease-in-out hover:scale-105">
            <FaGoogle />
          </a>
          <a href="#" className="transform transition-all duration-200 ease-in-out hover:scale-105">
            <FaFacebookF />
          </a>
          <a href="#" className="transform transition-all duration-200 ease-in-out hover:scale-105">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Barra principal */}
      <nav className="bg-white text-gray-800 px-6 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-montserrat font-bold text-verde">
            Turismo Up
          </Link>
          <div className="flex space-x-8 font-montserrat text-gris">
            <Link to="/destinos" className="hover:text-petroleoClaro transition">
              Destinos
            </Link>
            <Link to="/quienes-somos" className="hover:text-petroleoClaro transition">
              Quienes somos
            </Link>
            <Link to="/contacto" className="hover:text-petroleoClaro transition">
              Contacto
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
