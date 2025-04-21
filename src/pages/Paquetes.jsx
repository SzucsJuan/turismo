import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Plane } from "lucide-react";

const paquetes = [
  {
    title: "Riviera Maya Inolvidable",
    descripcion:
      "7 noches en resort all-inclusive con excursiones a cenotes y ruinas mayas.",
    precio: 1200,
    img: "/images/riviera-maya.jpg",
    destino: "Riviera Maya",
    experiencia: "Relax",
    duracion: 7,
  },
  {
    title: "Aventura en Bariloche",
    descripcion:
      "5 días de paisajes patagónicos, excursiones y chocolate artesanal.",
    precio: 950,
    img: "/images/bariloche.jpg",
    destino: "Bariloche",
    experiencia: "Aventura",
    duracion: 5,
  },
  {
    title: "Europa Mágica",
    descripcion:
      "15 días recorriendo París, Roma y Barcelona con guía y alojamiento.",
    precio: 3200,
    img: "/images/europa.jpeg",
    destino: "Europa",
    experiencia: "Cultural",
    duracion: 15,
  },
  {
    title: "Cataratas del Iguazú",
    descripcion:
      "3 noches con visita al parque nacional, alojamiento y traslados incluidos.",
    precio: 800,
    img: "/images/cataratas.jpg",
    destino: "Iguazú",
    experiencia: "Aventura",
    duracion: 3,
  },
  {
    title: "Fiesta en Río de Janeiro",
    descripcion: "5 noches en Copacabana con entradas al Carnaval y city tour.",
    precio: 1100,
    img: "/images/rio-janeiro.jpg",
    destino: "Río de Janeiro",
    experiencia: "Fiesta",
    duracion: 5,
  },
  {
    title: "Mendoza & Vinos",
    descripcion: "Recorrido en bodegas, degustaciones y spa en la montaña.",
    precio: 890,
    img: "/images/mendoza.jpg",
    destino: "Mendoza",
    experiencia: "Relax",
    duracion: 4,
  },
];

const Paquetes = () => {
  // Estados para los filtros
  const [filtroDestino, setFiltroDestino] = useState("");
  const [filtroExperiencia, setFiltroExperiencia] = useState("");
  const [filtroPrecio, setFiltroPrecio] = useState("");

  // Filtrar paquetes según los filtros seleccionados
  const paquetesFiltrados = paquetes.filter((paquete) => {
    const destinoCoincide = !filtroDestino || paquete.destino === filtroDestino;
    const experienciaCoincide =
      !filtroExperiencia || paquete.experiencia === filtroExperiencia;
    const precioCoincide =
      !filtroPrecio || paquete.precio <= parseInt(filtroPrecio);

    return destinoCoincide && experienciaCoincide && precioCoincide;
  });

  return (
    <main className="bg-white">
      {/* Hero */}
      <section
        className="relative h-72 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/world.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl sm:text-5xl font-bold font-montserrat">
            Explorá nuestros paquetes turísticos
          </h1>
        </div>
      </section>

      {/* Listado de paquetes turísticos */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center text-petroleo mb-12 font-montserrat flex items-center justify-center gap-4">
          <Plane className="w-6 h-6" />
          Todos los destinos disponibles
          <Plane className="w-6 h-6 transform rotate-180" />
        </h2>

        {/* Filtros */}
        <section className="py-4 px-6 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Filtro Destino */}
            <div>
              <label className="block font-semibold mb-2">Destino</label>
              <select
                value={filtroDestino}
                onChange={(e) => setFiltroDestino(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg"
              >
                <option value="">Todos</option>
                <option value="Riviera Maya">Riviera Maya</option>
                <option value="Bariloche">Bariloche</option>
                <option value="Europa">Europa</option>
                <option value="Iguazú">Iguazú</option>
                <option value="Río de Janeiro">Río de Janeiro</option>
                <option value="Mendoza">Mendoza</option>
              </select>
            </div>

            {/* Filtro Tipo de Experiencia */}
            <div>
              <label className="block font-semibold mb-2">
                Tipo de experiencia
              </label>
              <select
                value={filtroExperiencia}
                onChange={(e) => setFiltroExperiencia(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg"
              >
                <option value="">Todos</option>
                <option value="Relax">Relax</option>
                <option value="Aventura">Aventura</option>
                <option value="Fiesta">Fiesta</option>
                <option value="Cultural">Cultural</option>
              </select>
            </div>

            {/* Filtro Precio */}
            <div>
              <label className="block font-semibold mb-2">Precio (máx.)</label>
              <input
                type="number"
                value={filtroPrecio}
                onChange={(e) => setFiltroPrecio(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Máximo precio"
              />
            </div>
          </div>
        </section>

        {/* Cards de paquetes */}
        <div className="py-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {paquetesFiltrados.map((p, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={p.img}
                alt={p.title}
                className="h-56 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gris mb-2">
                  {p.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{p.descripcion}</p>
                <span className="block text-verde font-bold text-lg mb-2">
                  Desde USD {p.precio}
                </span>
                <button className="bg-verde text-white px-4 py-2 rounded-full hover:bg-petroleo transition-colors duration-300">
                  Ver detalle
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sección final */}
      <section className="bg-[#f5f5f5] py-20 px-6 text-center font-montserrat">
        <h2 className="text-4xl font-bold text-petroleo mb-6">
          Viajes exclusivos, experiencias únicas
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-12">
          Disfrutá de una planificación a medida con destinos seleccionados,
          alojamientos de lujo y atención personalizada. Vos soñás el viaje,
          nosotros lo hacemos realidad.
        </p>

        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 mb-12">
          <div className="flex flex-col items-center text-center">
            <span className="text-3xl mb-2">💼</span>
            <p className="text-gray-800 text-base">Asesor personalizado</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="text-3xl mb-2">🛏</span>
            <p className="text-gray-800 text-base">Hoteles 5 estrellas</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="text-3xl mb-2">✈️</span>
            <p className="text-gray-800 text-base">
              Vuelos y traslados incluidos
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="text-3xl mb-2">🍷</span>
            <p className="text-gray-800 text-base">Experiencias gourmet</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/contacto"
            className="bg-petroleo text-white px-8 py-3 rounded-full hover:bg-verde transition duration-300"
          >
            Consultanos
          </Link>
          <a
            href="https://wa.me/5491123456789?text=Hola%2C%20quiero%20más%20info%20sobre%20los%20paquetes%20turísticos"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-petroleo border border-petroleo px-8 py-3 rounded-full hover:bg-gray-100 transition duration-300"
          >
            WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
};

export default Paquetes;
