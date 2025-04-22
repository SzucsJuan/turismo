import { motion } from "framer-motion";
import { Briefcase, CheckCircle, ShieldCheck } from "lucide-react";

function Nosotros() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-[#fafafa] py-24 px-6 font-montserrat"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold text-petroleo mb-6"
        >
          Quiénes somos
        </h2>

        <p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-10 font-nunito"
        >
          Somos un equipo de profesionales apasionados por diseñar experiencias
          de viaje inigualables. Combinamos elegancia, confort y planificación
          meticulosa para ofrecer aventuras únicas y memorables.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12"
        >
          <div className="bg-white shadow-lg rounded-2xl p-6 text-left">
            <div className="flex items-center gap-2 mb-2">
              <Briefcase className="text-petroleo w-6 h-6" />
              <h3 className="text-xl font-semibold text-petroleo">
                Experiencia
              </h3>
            </div>
            <p className="text-gray-700 font-nunito">
              Más de 10 años creando viajes personalizados para clientes
              exigentes alrededor del mundo.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6 text-left">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="text-petroleo w-6 h-6" />
              <h3 className="text-xl font-semibold text-petroleo">Calidad</h3>
            </div>
            <p className="text-gray-700 font-nunito">
              Trabajamos con los mejores proveedores, hoteles y aerolíneas para
              garantizar una experiencia de lujo.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6 text-left">
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheck className="text-petroleo w-6 h-6" />
              <h3 className="text-xl font-semibold text-petroleo">Confianza</h3>
            </div>
            <p className="text-gray-700 font-nunito">
              Cada detalle es cuidadosamente planificado. Tu viaje soñado está
              en buenas manos.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Nosotros;
