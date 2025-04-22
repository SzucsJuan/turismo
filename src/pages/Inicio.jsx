import { Link } from "react-router-dom";
import { FaQuoteLeft, FaStar, FaCompass } from "react-icons/fa";

import paquetes from "../mocks/paquetes";
import CallToAction from "../components/CallToAction";
import StatsSection from "../components/StatsSection";

function Inicio() {
  return (
    <div className="font-nunito">
      {/* Hero Section */}
      <section className="relative bg-[url('/images/hero-aventura.jpg')] bg-cover bg-center h-[80vh] flex items-center justify-center text-white text-center">
        <div className="bg-black/50 absolute inset-0"></div>
        <div className="relative z-10 max-w-2xl px-6">
          <h1 className="text-4xl sm:text-5xl font-bold font-montserrat mb-6">
            Inspirate. Descubrí. Viajá.
          </h1>
          <p className="mb-8 text-lg">
            Viví la experiencia de tus sueños con los mejores paquetes
            turísticos
          </p>
          <Link
            to="/paquetes"
            className="bg-verde hover:bg-petroleo transition text-white py-3 px-6 rounded-full text-lg font-semibold"
          >
            Conocé nuestros paquetes
          </Link>
        </div>
      </section>

      {/* Estadísticas */}
      <StatsSection />

      {/* Paquetes destacados */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-montserrat font-bold text-center text-petroleo mb-10">
          Paquetes destacados
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              id: 1,
              title: "Riviera Maya Inolvidable",
              img: "/images/riviera-maya.jpg",
            },
            { 
              id: 2,
              title: "Aventura en Bariloche", 
              img: "/images/bariloche.jpg" 
            },
            { 
              id: 3,
              title: "Europa Mágica", 
              img: "/images/europa.jpeg" 
            },
          ].map((paquete, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={paquete.img}
                alt={paquete.title}
                className="h-60 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gris mb-2">
                  {paquete.title}
                </h3>
                <Link
                  to={`/paquetes/${paquete.id}`}
                  className="text-verde hover:text-petroleo font-semibold"
                >
                  Ver más →
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/paquetes"
            className="inline-flex items-center gap-2 bg-verde text-white font-semibold px-6 py-3 rounded-full hover:bg-petroleo transition-colors duration-300"
          >
            <FaCompass className="text-xl" />
            Ver todos los paquetes
          </Link>
        </div>
      </section>

      {/* Testimonios */}
      {/* <section className="py-16 bg-petroleoClaro text-white px-6">
        <h2 className="text-3xl font-montserrat font-bold text-center mb-10">
          Nuestros viajeros opinan
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            {
              name: "Lucía R.",
              text: "El viaje a Machu Picchu fue increíble. Todo bien organizado, lo volvería a hacer sin dudas.",
              stars: 5,
            },
            {
              name: "Martín G.",
              text: "TurismoUp me ayudó a planear mi luna de miel perfecta. ¡Gracias por tanto!",
              stars: 5,
            },
            {
              name: "Valeria T.",
              text: "Excelente atención y calidad en cada destino. Súper recomendados.",
              stars: 4,
            },
          ].map((testimonial, i) => (
            <div
              key={i}
              className="bg-white text-gris rounded-xl shadow-lg p-6 relative"
            >
              <FaQuoteLeft className="text-petroleo text-2xl absolute top-4 left-4" />
              <p className="italic mt-4 mb-4">{testimonial.text}</p>
              <div className="flex justify-center mb-2">
                {[...Array(testimonial.stars)].map((_, j) => (
                  <FaStar key={j} className="text-verde" />
                ))}
              </div>
              <p className="font-semibold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* Call to Action */}
      <CallToAction />
    </div>
  );
}

export default Inicio;
