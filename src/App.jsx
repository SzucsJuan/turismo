import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Inicio from "./pages/Inicio";
import Paquetes from "./pages/Paquetes";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import PaqueteDetalle from "./pages/PaqueteDetalle";

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/paquetes" element={<Paquetes />} />
          <Route path="/paquetes/:id" element={<PaqueteDetalle />} />
          <Route path="/quienes-somos" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
