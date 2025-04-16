import { useState, useEffect } from "react";
import CountUp from "react-countup";
import { FaMapMarkedAlt, FaSmile, FaMountain } from "react-icons/fa";

const imagenes = [
  "/images/salta.jpg",
  "/images/mendoza.jpg",
  "/images/glaciar.jpg",
];

function Inicio() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % imagenes.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Carrusel con texto y botón */}
      <div className="relative w-full h-[80vh] overflow-hidden">
        {imagenes.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Paisaje ${index + 1}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold">Descubrí Argentina</h1>
          <p className="font-nunito mt-4 text-lg md:text-xl max-w-xl">
            Explora los paisajes más hermosos del país. Naturaleza, cultura y aventura.
          </p>
          <a
            href="/destinos"
            className="mt-6 px-6 py-3 bg-white text-verde font-montserrat font-semibold rounded transform transition-all duration-300 ease-in-out hover:scale-105"
          >
            Ver destinos
          </a>
        </div>
      </div>

      <div className="bg-white py-12 px-4 text-center">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">
          <div className="flex flex-col items-center">
            <FaMapMarkedAlt className="text-verde text-5xl mb-4" />
            <CountUp end={100} duration={3} className="text-4xl font-bold text-verde" />
            <p className="text-gray-700 font-semibold mt-2">Destinos turísticos</p>
          </div>
          <div className="flex flex-col items-center">
            <FaSmile className="text-verde text-5xl mb-4" />
            <CountUp end={10000} duration={3} separator="." className="text-4xl font-bold text-verde" />
            <p className="text-gray-700 font-semibold mt-2">Viajeros felices</p>
          </div>
          <div className="flex flex-col items-center">
            <FaMountain className="text-verde text-5xl mb-4" />
            <CountUp end={500} duration={3} className="text-4xl font-bold text-verde" />
            <p className="text-gray-700 font-semibold mt-2">Experiencias únicas</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Inicio;
