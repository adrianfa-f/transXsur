import React from "react";
import { Link } from "react-router-dom";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  // Datos de contacto actualizados
  const contactInfo = {
    phone: "+34 643 49 53 51",
    email: "info@transxsur.com",
    address: "Calle del Transporte, 42, 41001 Sevilla",
    atendidoPor: "Pedro Ernesto Pérez", // Nombre del responsable
  };

  // Manejador para enlaces deshabilitados (redes sociales)
  const handleDisabledClick = (e) => {
    e.preventDefault();
    // Opcional: Podrías mostrar un mensaje suave al usuario
    console.log("Enlace temporalmente no disponible");
  };

  return (
    <footer className="bg-[#1e5939] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & description */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-display font-bold mb-4">TransXSur</h3>
            <p className="text-gray-300 text-sm">
              Transportes del Sur, tu aliado de confianza para mudanzas,
              mensajería y carga. Un solo vehículo, mil soluciones. Atendido por{" "}
              {contactInfo.atendidoPor}.
            </p>
          </div>

          {/* Quick links (enlaces internos, estos sí funcionan) */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Enlaces</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/" className="hover:text-[#44aa56] transition">
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/servicios"
                  className="hover:text-[#44aa56] transition"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  to="/nosotros"
                  className="hover:text-[#44aa56] transition"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  to="/contacto"
                  className="hover:text-[#44aa56] transition"
                >
                  Contacto
                </Link>
              </li>
              <li>
                <Link to="/cotizar" className="hover:text-[#44aa56] transition">
                  Cotizar
                </Link>
              </li>
            </ul>
          </div>

          {/* Services links (enlaces internos) */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link
                  to="/servicios/mudanzas-locales"
                  className="hover:text-[#44aa56] transition"
                >
                  Mudanzas locales
                </Link>
              </li>
              <li>
                <Link
                  to="/servicios/transporte-mercancias"
                  className="hover:text-[#44aa56] transition"
                >
                  Transporte de mercancías
                </Link>
              </li>
              <li>
                <Link
                  to="/servicios/mensajeria-urgente"
                  className="hover:text-[#44aa56] transition"
                >
                  Mensajería urgente
                </Link>
              </li>
              <li>
                <Link
                  to="/servicios/distribucion-ultima-milla"
                  className="hover:text-[#44aa56] transition"
                >
                  Distribución última milla
                </Link>
              </li>
              <li>
                <Link
                  to="/servicios/fletes-empresas"
                  className="hover:text-[#44aa56] transition"
                >
                  Fletes para empresas
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contacto</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start space-x-2">
                <FaPhone className="mt-1 flex-shrink-0 text-[#44aa56]" />
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="hover:text-[#44aa56] transition"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <FaEnvelope className="mt-1 flex-shrink-0 text-[#44aa56]" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-[#44aa56] transition"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <FaMapMarkerAlt className="mt-1 flex-shrink-0 text-[#44aa56]" />
                <span>{contactInfo.address}</span>
              </li>
            </ul>

            {/* Redes sociales: botones deshabilitados pero accesibles */}
            <div className="flex space-x-4 mt-4">
              <button
                onClick={handleDisabledClick}
                className="text-gray-300 hover:text-[#44aa56] text-xl transition cursor-not-allowed opacity-60 focus:outline-none focus:ring-2 focus:ring-[#44aa56] focus:ring-offset-2 focus:ring-offset-[#1e5939] rounded-full p-2"
                aria-label="Facebook (enlace no disponible)"
                disabled
              >
                <FaFacebook />
              </button>
              <button
                onClick={handleDisabledClick}
                className="text-gray-300 hover:text-[#44aa56] text-xl transition cursor-not-allowed opacity-60 focus:outline-none focus:ring-2 focus:ring-[#44aa56] focus:ring-offset-2 focus:ring-offset-[#1e5939] rounded-full p-2"
                aria-label="Instagram (enlace no disponible)"
                disabled
              >
                <FaInstagram />
              </button>
              <button
                onClick={handleDisabledClick}
                className="text-gray-300 hover:text-[#44aa56] text-xl transition cursor-not-allowed opacity-60 focus:outline-none focus:ring-2 focus:ring-[#44aa56] focus:ring-offset-2 focus:ring-offset-[#1e5939] rounded-full p-2"
                aria-label="X (enlace no disponible)"
                disabled
              >
                <FaTwitter />
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              Enlaces a redes sociales en preparación
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} TransXSur. Todos los derechos
          reservados. Atendido por {contactInfo.atendidoPor}.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
