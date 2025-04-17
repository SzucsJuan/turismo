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
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold">
            Descubrí el mundo con nosotros
          </h1>
          <p className="font-nunito mt-4 text-lg md:text-xl max-w-xl">
            Explorá los destinos más increíbles del planeta. Cultura, aventura y
            experiencias inolvidables te esperan.
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
            <CountUp
              end={100}
              duration={3}
              className="text-4xl font-bold text-verde"
            />
            <p className="text-gray-700 font-semibold mt-2">
              Destinos turísticos
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FaSmile className="text-verde text-5xl mb-4" />
            <CountUp
              end={10000}
              duration={3}
              separator="."
              className="text-4xl font-bold text-verde"
            />
            <p className="text-gray-700 font-semibold mt-2">Viajeros felices</p>
          </div>
          <div className="flex flex-col items-center">
            <FaMountain className="text-verde text-5xl mb-4" />
            <CountUp
              end={500}
              duration={3}
              className="text-4xl font-bold text-verde"
            />
            <p className="text-gray-700 font-semibold mt-2">
              Experiencias únicas
            </p>
          </div>
        </div>
      </div>

      {/* Mosaico de categorías populares */}
      <div className="bg-gray-100 py-12 px-4">
        <h2 className="text-3xl font-montserrat font-bold text-center mb-8 text-verde">
          Categorías populares
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { title: "Playa", img: "/images/playa.jpeg" },
            { title: "Montaña", img: "/images/montaña.png" },
            { title: "Gastronomía", img: "/images/gastronomia.jpg" },
            { title: "Cultura", img: "/images/cultural.jpg" },
          ].map((cat, i) => (
            <div
              key={i}
              className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer hover:scale-105 transform transition duration-300"
            >
              <img
                src={cat.img}
                alt={cat.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <h3 className="text-white text-xl font-bold">{cat.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sección de tips de viaje */}
      <section className="bg-white py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-verde font-montserrat">Tips de viaje</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 font-nunito">✈️ 5 cosas que no sabías de viajar por Asia</h3>
            <p className="text-gray-700 font-nunito text-sm">Descubrí curiosidades, consejos culturales y cómo sacarle el jugo a tu experiencia asiática.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 font-nunito">🏕️ Cómo preparar tu mochila para la aventura</h3>
            <p className="text-gray-700 font-nunito text-sm">Una guía práctica para llevar solo lo necesario sin dejar nada importante atrás.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 font-nunito">🌎 10 destinos que no te podés perder</h3>
            <p className="text-gray-700 font-nunito text-sm">Desde paisajes surrealistas hasta ciudades vibrantes, armá tu bucket list viajera.</p>
          </div>
        </div>
      </section>

      {/* Sección de newsletter */}
      <section className="bg-verde text-white py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat">¿Querés recibir ofertas y novedades?</h2>
        <p className="mb-6 text-lg font-nunito">Suscribite a nuestro newsletter y enterate de los mejores destinos antes que nadie.</p>
        <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Ingresá tu correo"
            className="flex-1 px-4 py-3 rounded text-gray-800"
          />
          <button
            type="submit"
            className="bg-white text-verde font-semibold px-6 py-3 rounded hover:bg-gray-100 transition"
          >
            Suscribirme
          </button>
        </form>
      </section>
    </>
  );
}

export default Inicio;
