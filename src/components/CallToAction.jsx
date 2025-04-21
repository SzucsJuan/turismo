function CallToAction() {
    return (
      <section className="bg-verde text-white py-16 px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold font-montserrat mb-4">
          ¿Listo para tu próxima aventura?
        </h2>
        <p className="text-lg font-nunito mb-8 max-w-2xl mx-auto">
          Nuestro equipo está listo para ayudarte a planear unas vacaciones inolvidables. Contanos qué tenés en mente y lo hacemos realidad.
        </p>
        <a
          href="https://wa.me/5491167582349"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-verde font-bold font-nunito px-6 py-3 rounded-full hover:bg-petroleoClaro hover:text-white transition"
        >
          Consultar por WhatsApp
        </a>
      </section>
    );
  }
  
  export default CallToAction;
  