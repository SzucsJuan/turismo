import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Turismo Up
        </Link>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">
            Inicio
          </Link>
          <Link to="/destinos" className="hover:underline">
            Destinos
          </Link>
          <Link to="/contacto" className="hover:underline">
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
