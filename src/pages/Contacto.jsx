import { motion } from "framer-motion";

function Contacto() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-[#f4f4f4] py-20 px-6 font-montserrat"
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl font-bold text-petroleo mb-4">Contactanos</h2>
          <p className="text-lg text-gray-700 mb-6">
            ¿Listo para vivir una experiencia inolvidable? Completá el
            formulario o escribinos por los canales disponibles. Nuestro equipo
            te responderá a la brevedad.
          </p>

          <div className="space-y-4 text-gray-800">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📍</span>
              <p>Buenos Aires, Argentina</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">📞</span>
              <p>+549-11-6758-2349</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">✉️</span>
              <p>turismoup@turismo.com</p>
            </div>
          </div>
        </div>

        {/* Formulario */}
        <form className="lg:w-1/2 bg-white shadow-xl rounded-2xl p-8 w-full space-y-6">
          <div>
            <label className="block text-gray-800 mb-1 font-semibold">
              Nombre completo
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-verde"
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label className="block text-gray-800 mb-1 font-semibold">
              Correo electrónico
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-verde"
              placeholder="email@ejemplo.com"
            />
          </div>

          <div>
            <label className="block text-gray-800 mb-1 font-semibold">
              Mensaje
            </label>
            <textarea
              className="w-full border border-gray-300 rounded-md p-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-verde"
              placeholder="Escribí tu mensaje..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-petroleo text-white px-6 py-3 rounded-full hover:bg-verde transition duration-300"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </motion.section>
  );
}

export default Contacto;
