import { FaMapMarkedAlt, FaSmile, FaPlaneDeparture } from "react-icons/fa";
import CountUp from "react-countup";

function StatsSection() {
  return (
    <section className="bg-white py-14 px-6 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-petroleo mb-10 font-montserrat">
        Más que viajes, creamos experiencias
      </h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12">
        {/* Destinos turísticos */}
        <div className="flex flex-col items-center">
          <FaMapMarkedAlt className="text-verde text-5xl mb-4" />
          <CountUp end={120} duration={3} className="text-4xl font-bold text-verde" />
          <p className="text-gray-700 font-semibold mt-2 font-nunito">Destinos soñados</p>
        </div>

        {/* Viajeros felices */}
        <div className="flex flex-col items-center">
          <FaSmile className="text-verde text-5xl mb-4" />
          <CountUp end={15000} duration={3} separator="." className="text-4xl font-bold text-verde" />
          <p className="text-gray-700 font-semibold mt-2 font-nunito">Viajeros felices</p>
        </div>

        {/* Paquetes vendidos */}
        <div className="flex flex-col items-center">
          <FaPlaneDeparture className="text-verde text-5xl mb-4" />
          <CountUp end={800} duration={3} className="text-4xl font-bold text-verde" />
          <p className="text-gray-700 font-semibold mt-2 font-nunito">Paquetes vendidos</p>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
