import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../public/assets/logo-MN-25-peq.png";

const Home: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-[#000000] via-[#FD4B5C] to-[#10C263]">
      <div className="text-center max-w-4xl p-8 rounded-lg shadow-lg bg-white bg-opacity-90">
        <img src={Logo} alt="Logo" className="mx-auto mb-4 w-40" />

        <h1 className="text-4xl font-extrabold text-gray-800 mb-8">
          Bienvenido a nuestra plataforma
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Explora nuestras páginas de Mail Marketing
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <Link
            to="/software-abogados-mk"
            className="flex justify-center items-center bg-[#10C263] hover:bg-[#0A9F50] text-white text-xl font-semibold py-4 px-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
          >
            Abogados
          </Link>
          <Link
            to="/software-arquitectos-mk"
            className="flex justify-center items-center bg-[#FD4B5C] hover:bg-[#0A9F50] text-white text-xl font-semibold py-4 px-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
          >
            Arquitectos
          </Link>
          <Link
            to="/software-clinicas-mk"
            className="flex justify-center items-center bg-[#10C263] hover:bg-[#0A9F50] text-white text-xl font-semibold py-4 px-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
          >
            Clínicas
          </Link>
          <Link
            to="/software-asesorias-mk"
            className="flex justify-center items-center bg-[#10C263] hover:bg-[#0A9F50] text-white text-xl font-semibold py-4 px-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
          >
            Asesorías
          </Link>
          <Link
            to="/software-consulting-mk"
            className="flex justify-center items-center bg-[#10C263] hover:bg-[#E53E50] text-white text-xl font-semibold py-4 px-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
          >
            Consulting
          </Link>
          <Link
            to="/software-limpieza-mk"
            className="flex justify-center items-center bg-[#10C263] hover:bg-[#0A9F50] text-white text-xl font-semibold py-4 px-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
          >
            Limpieza
          </Link>
          <Link
            to="/software-servicios-mk"
            className="flex justify-center items-center bg-[#FD4B5C] hover:bg-[#E53E50] text-white text-xl font-semibold py-4 px-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
          >
            Servicios
          </Link>
          <Link
            to="/software-formacion-mk"
            className="flex justify-center items-center bg-[#10C263] hover:bg-[#0A9F50] text-white text-xl font-semibold py-4 px-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
          >
            Formación
          </Link>
          <Link
            to="/software-ingenieros-mk"
            className="flex justify-center items-center bg-[#FD4B5C] hover:bg-[#E53E50] text-white text-xl font-semibold py-4 px-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
          >
            Ingenieros
          </Link>
          <Link
            to="/software-odontologos-mk"
            className="flex justify-center items-center bg-[#FD4B5C] hover:bg-[#E53E50] text-white text-xl font-semibold py-4 px-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
          >
            Odontólogos
          </Link>
          <Link
            to="/software-procuradores-mk"
            className="flex justify-center items-center bg-[#FD4B5C] hover:bg-[#E53E50] text-white text-xl font-semibold py-4 px-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
          >
            Procuradores
          </Link>
          <Link
            to="/test-page"
            className="flex justify-center items-center bg-[#000000] hover:bg-[#333333] text-white text-xl font-semibold py-4 px-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
          >
            Test Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
