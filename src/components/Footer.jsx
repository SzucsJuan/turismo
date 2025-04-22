import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-petroleo text-white py-10 px-6 mt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
        {/* Logo o Nombre */}
        <div>
          <h2 className="text-2xl font-montserrat font-bold">Turismo Up</h2>
          <p className="mt-2 text-sm font-nunito">
            Inspirate. Descubrí. Viajá.
          </p>
        </div>

        {/* Navegación */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Enlaces</h3>
          <ul className="space-y-2 font-nunito">
            <li>
              <Link to="/" className="hover:underline">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/paquetes" className="hover:underline">
                Paquetes Turísticos
              </Link>
            </li>
            <li>
              <Link to="/quienes-somos" className="hover:underline">
                Quienes Somos
              </Link>
            </li>
            <li>
              <Link to="/contacto" className="hover:underline">
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        {/* Redes Sociales */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Seguinos</h3>
          <div className="flex justify-center sm:justify-start space-x-4 text-white text-2xl">
            <a
              href="#"
              aria-label="Instagram"
              className="transition-all duration-200 ease-in-out hover:scale-105"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="transition-all duration-200 ease-in-out hover:scale-105"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="mt-10 text-center text-sm text-white/80 font-nunito">
        © {new Date().getFullYear()} TurismoUp. Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;
