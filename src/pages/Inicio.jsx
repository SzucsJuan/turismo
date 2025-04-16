import { useState, useEffect } from "react";

const imagenes = [
  "public/images/salta.jpg",
  "public/images/mendoza.jpg",
  "public/images/glaciar.jpg",
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
          Explora los paisajes más hermosos del país. Naturaleza, cultura y
          aventura.
        </p>
        <a
          href="/destinos"
          className="mt-6 px-6 py-3 bg-white text-verde font-montserrat font-semibold rounded hover:bg-blue-100 transition"
        >
          Ver destinos
        </a>
      </div>
    </div>
  );
}

export default Inicio;
