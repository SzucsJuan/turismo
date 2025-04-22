import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { FaDollarSign, FaSuitcaseRolling } from "react-icons/fa";

import paquetes from "../mocks/paquetes";

const PaqueteDetalle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const paquete = paquetes.find((p) => p.id === parseInt(id));

  if (!paquete) {
    return (
      <p className="text-center py-20 text-red-500 text-xl">
        Paquete no encontrado.
      </p>
    );
  }

  return (
    <main className="max-w-5xl mx-auto px-6 py-12 font-sans">
      <button
        onClick={() => navigate(-1)}
        className="text-lg text-gray-600 hover:text-gray-900 transition mb-8 flex items-center gap-2"
      >
        ← Volver
      </button>

      <div className="rounded-3xl overflow-hidden shadow-2xl mb-10">
        <img
          src={paquete.img}
          alt={paquete.title}
          className="w-full h-[400px] object-cover hover:scale-105 transition duration-500"
        />
      </div>

      <div className="space-y-6 px-4 sm:px-0">
        <h1 className="text-5xl font-extrabold text-petroleo tracking-tight">
          {paquete.title}
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed">
          {paquete.descripcion}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <h3 className="text-sm text-gray-500">Destino</h3>
            <p className="text-lg font-medium text-petroleo">
              {paquete.destino}
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <h3 className="text-sm text-gray-500">Duración</h3>
            <p className="text-lg font-medium text-petroleo">
              {paquete.duracion} días
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <h3 className="text-sm text-gray-500">Tipo de experiencia</h3>
            <p className="text-lg font-medium text-petroleo">
              {paquete.experiencia}
            </p>
          </div>
        </div>

        <div className="mt-12 bg-gray-50 p-8 rounded-2xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
  <div className="flex items-center gap-4 text-petroleo">
    <p className="text-3xl font-bold">
      Desde <span className="text-petroleo">USD {paquete.precio}</span>
    </p>
  </div>

  <Link
    to="/contacto"
    className="flex items-center gap-3 bg-verde hover:bg-petroleo text-white px-6 py-3 rounded-full text-lg font-medium shadow-md transition"
  >
    <FaSuitcaseRolling className="text-xl" />
    Reservar ahora
  </Link>
</div>
        {/* Itinerario */}
        <section className="mt-16">
          <h2 className="text-3xl font-semibold text-petroleo mb-4">
            Itinerario
          </h2>
          <ul className="space-y-3 list-disc list-inside text-gray-700">
            {paquete.itinerario.map((item, index) => (
              <li key={index} className="text-lg">
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Servicios incluidos */}
        <section className="mt-12">
          <h2 className="text-3xl font-semibold text-petroleo mb-4">
            Servicios incluidos
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-gray-700">
            {paquete.servicios.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-lg">
                <span className="text-verde mt-1">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
};

export default PaqueteDetalle;
