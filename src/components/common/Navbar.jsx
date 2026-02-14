import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { services } from "../../data/services";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'servicios' o 'nosotros' o null
  const timeoutRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleDropdownEnter = (menu) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(menu);
  };

  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleServiciosClick = (e) => {
    e.preventDefault();
    navigate("/");
    // Pequeño retraso para asegurar que el home se ha cargado
    setTimeout(() => {
      const element = document.getElementById("servicios");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const navLinks = [
    { to: "/", label: "Inicio" },
    {
      to: "/servicios",
      label: "Servicios",
      dropdown: true,
      key: "servicios",
      onClick: handleServiciosClick,
      items: services.map((s) => ({
        to: `/servicios/${s.slug}`,
        label: s.title,
      })),
    },
    {
      to: "/nosotros",
      label: "Nosotros",
      dropdown: true,
      key: "nosotros",
      items: [
        { to: "/nosotros#historia", label: "Nuestra historia" },
        { to: "/nosotros#valores", label: "Valores" },
        { to: "/nosotros#equipo", label: "El equipo" },
        { to: "/nosotros#porque", label: "Por qué elegirnos" },
      ],
    },
    { to: "/contacto", label: "Contacto", highlight: true },
    { to: "/cotizar", label: "Cotizar", outline: true },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 overflow-visible">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative overflow-visible">
        <div className="flex justify-between items-center h-20 overflow-visible">
          {/* Logo y nombre - ajustado para que sobresalga */}
          <Link to="/" className="flex items-center space-x-3 relative">
            <img
              src={logo}
              alt="TransXSur"
              className="h-16 w-16 rounded-full object-cover border-4 border-secondary"
            />
            <span className="text-3xl font-display font-extrabold text-primary">
              TransXSur
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {navLinks.map((link, idx) => {
              if (link.dropdown) {
                const isOpen = activeDropdown === link.key;
                return (
                  <div
                    key={idx}
                    className="relative"
                    onMouseEnter={() => handleDropdownEnter(link.key)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    {link.key === "servicios" ? (
                      <a
                        href="/#servicios"
                        onClick={handleServiciosClick}
                        className={`flex items-center font-medium px-3 py-2 rounded-lg transition-all duration-200 ${
                          isOpen
                            ? "text-primary bg-primary/10"
                            : "text-gray-700 hover:text-primary hover:bg-gray-100"
                        }`}
                      >
                        {link.label}
                        <FaChevronDown
                          className={`ml-1 text-sm transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </a>
                    ) : (
                      <NavLink
                        to={link.to}
                        className={({ isActive }) =>
                          `flex items-center font-medium px-3 py-2 rounded-lg transition-all duration-200 ${
                            isActive || isOpen
                              ? "text-primary bg-primary/10"
                              : "text-gray-700 hover:text-primary hover:bg-gray-100"
                          }`
                        }
                      >
                        {link.label}
                        <FaChevronDown
                          className={`ml-1 text-sm transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </NavLink>
                    )}
                    {isOpen && (
                      <div
                        className="dropdown-menu absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden"
                        onMouseEnter={() => handleDropdownEnter(link.key)}
                        onMouseLeave={handleDropdownLeave}
                      >
                        {link.items.map((item, i) => (
                          <NavLink
                            key={i}
                            to={item.to}
                            className="dropdown-item block px-4 py-2 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary transition"
                            style={{ animationDelay: `${i * 0.05}s` }}
                          >
                            {item.label}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                );
              } else if (link.highlight) {
                return (
                  <NavLink
                    key={idx}
                    to={link.to}
                    className="bg-secondary text-white px-5 py-2.5 rounded-lg font-semibold shadow-md hover:bg-accent hover:shadow-lg transition-all duration-200"
                  >
                    {link.label}
                  </NavLink>
                );
              } else if (link.outline) {
                return (
                  <NavLink
                    key={idx}
                    to={link.to}
                    className="border border-primary text-primary px-4 py-2 rounded-lg font-medium hover:bg-primary hover:text-white transition-all duration-200"
                  >
                    {link.label}
                  </NavLink>
                );
              } else {
                return (
                  <NavLink
                    key={idx}
                    to={link.to}
                    className={({ isActive }) =>
                      `font-medium px-3 py-2 rounded-lg transition-all duration-200 ${
                        isActive
                          ? "text-primary bg-primary/10"
                          : "text-gray-700 hover:text-primary hover:bg-gray-100"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                );
              }
            })}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-3xl text-primary focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 space-y-3">
            {navLinks.map((link, idx) => {
              if (link.dropdown) {
                return (
                  <div key={idx} className="space-y-2">
                    {link.key === "servicios" ? (
                      <a
                        href="/#servicios"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleMenu();
                          navigate("/");
                          setTimeout(() => {
                            const element =
                              document.getElementById("servicios");
                            if (element)
                              element.scrollIntoView({ behavior: "smooth" });
                          }, 100);
                        }}
                        className="block font-semibold text-primary px-4 py-2"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <NavLink
                        to={link.to}
                        onClick={toggleMenu}
                        className="block font-semibold text-primary px-4 py-2"
                      >
                        {link.label}
                      </NavLink>
                    )}
                    {link.items.map((item, i) => (
                      <NavLink
                        key={i}
                        to={item.to}
                        onClick={toggleMenu}
                        className={({ isActive }) =>
                          `block px-8 py-2 text-sm rounded-lg font-medium ${
                            isActive
                              ? "bg-primary/10 text-primary"
                              : "text-gray-700 hover:bg-gray-100"
                          }`
                        }
                      >
                        {item.label}
                      </NavLink>
                    ))}
                  </div>
                );
              } else if (link.highlight) {
                return (
                  <NavLink
                    key={idx}
                    to={link.to}
                    onClick={toggleMenu}
                    className="block bg-secondary text-white px-4 py-3 rounded-lg font-semibold text-center shadow-md"
                  >
                    {link.label}
                  </NavLink>
                );
              } else if (link.outline) {
                return (
                  <NavLink
                    key={idx}
                    to={link.to}
                    onClick={toggleMenu}
                    className="block border border-primary text-primary px-4 py-3 rounded-lg font-medium text-center hover:bg-primary hover:text-white transition"
                  >
                    {link.label}
                  </NavLink>
                );
              } else {
                return (
                  <NavLink
                    key={idx}
                    to={link.to}
                    onClick={toggleMenu}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-lg font-medium text-center ${
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-gray-700 hover:bg-gray-100"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                );
              }
            })}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
