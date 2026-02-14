import React from "react";
import { FaTruck, FaClock, FaShieldAlt, FaSmile } from "react-icons/fa";
import Section from "../components/common/Section";
import Button from "../components/common/Button";
import Card from "../components/common/Card";
import { testimonials } from "../data/testimonials";
import heroImage from "../assets/hero-truck.jpg"; // Asegúrate de tener una imagen en assets
import Seo from "../components/common/Seo";

const Home = () => {
  return (
    <>
      <Seo
        title="Inicio"
        description="Transportes del Sur: mudanzas, mensajería y transporte de mercancías en Sevilla. Servicio personalizado con un trato cercano."
        url="https://www.transxsur.com/"
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            opacity: 0.3,
          }}
        ></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold mb-4 leading-tight">
              Transporte flexible,{" "}
              <span className="text-secondary">a tu medida</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              En TransXSur ofrecemos soluciones de transporte con un trato
              cercano, un solo vehículo y mil posibilidades. Desde mudanzas
              hasta distribución urgente.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                to="/contacto"
                variant="secondary"
                className="text-lg px-8 py-4"
              >
                Contactanos
              </Button>
              <Button
                to="/servicios"
                variant="outline"
                className="text-lg px-8 py-4 bg-white/10 border-white text-white hover:bg-white hover:text-primary"
              >
                Ver servicios
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <Section className="bg-gray-50">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaTruck className="text-3xl text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Flota moderna</h3>
            <p className="text-gray-600">
              Un vehículo en perfectas condiciones para garantizar tu carga.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaClock className="text-3xl text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Puntualidad</h3>
            <p className="text-gray-600">
              Sabemos que tu tiempo vale. Llegamos a la hora acordada.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaShieldAlt className="text-3xl text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Seguro incluido</h3>
            <p className="text-gray-600">
              Toda carga está asegurada para tu tranquilidad.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaSmile className="text-3xl text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Trato cercano</h3>
            <p className="text-gray-600">
              Hablas directamente con el transportista, sin intermediarios.
            </p>
          </div>
        </div>
      </Section>

      {/* Servicios destacados - Diseño editorial moderno */}
      <section
        id="servicios"
        className="py-28 bg-gradient-to-b from-[#44aa56]/30 via-white/70 to-[#1e5939]/30 relative"
      >
        {/* Decoración suave */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

        {/* Blob decorativo derecha */}
        <div className="absolute bottom-10 right-0 w-[420px] h-[420px] bg-gradient-to-br from-secondary/20 via-primary/10 to-transparent rounded-[40%] blur-3xl opacity-70 translate-x-1/4"></div>

        <div className="relative container mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-display font-bold text-primary tracking-tight">
              Nuestros servicios
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-4">
              Soluciones de transporte diseñadas para un mundo que se mueve
              rápido.
            </p>
          </div>

          {/* Mosaico dinámico */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 auto-rows-[380px]">
            {/* Servicio 1 – Mudanzas */}
            <div className="relative group rounded-3xl overflow-hidden shadow-2xl bg-white/40 backdrop-blur-xl border border-white/30 md:col-span-2">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                alt="Mudanzas locales"
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

              <div className="absolute bottom-0 p-10 text-white">
                <h3 className="text-3xl font-bold mb-3">
                  Mudanzas locales y residenciales
                </h3>
                <p className="text-white/80 max-w-md mb-6">
                  Ayudamos a familias y particulares a trasladar sus
                  pertenencias con cuidado y puntualidad.
                </p>
                <a
                  href="/servicios/mudanzas-locales"
                  className="inline-flex items-center font-semibold hover:text-secondary transition-colors"
                >
                  Saber más
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Servicio 2 – Transporte mercancías */}
            <div className="relative group rounded-3xl overflow-hidden shadow-2xl bg-white/40 backdrop-blur-xl border border-white/30">
              <img
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80"
                alt="Transporte de mercancías"
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

              <div className="absolute bottom-0 p-10 text-white">
                <h3 className="text-3xl font-bold mb-3">
                  Transporte de mercancías generales
                </h3>
                <p className="text-white/80 max-w-md mb-6">
                  Carga seca, paletizada o bultos sueltos. Desde un envío
                  pequeño hasta media carga.
                </p>
                <a
                  href="/servicios/transporte-mercancias"
                  className="inline-flex items-center font-semibold hover:text-secondary transition-colors"
                >
                  Saber más
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Servicio 3 – Mensajería urgente */}
            <div className="relative group rounded-3xl overflow-hidden shadow-2xl bg-white/40 backdrop-blur-xl border border-white/30">
              <img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
                alt="Mensajería urgente"
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

              <div className="absolute bottom-0 p-10 text-white">
                <h3 className="text-3xl font-bold mb-3">
                  Mensajería y paquetería urgente
                </h3>
                <p className="text-white/80 max-w-md mb-6">
                  Entregas puerta a puerta en el mismo día o en franjas horarias
                  concretas.
                </p>
                <a
                  href="/servicios/mensajeria-urgente"
                  className="inline-flex items-center font-semibold hover:text-secondary transition-colors"
                >
                  Saber más
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Servicio 4 – Fletes empresas */}
            <div className="relative group rounded-3xl overflow-hidden shadow-2xl bg-white/40 backdrop-blur-xl border border-white/30 md:col-span-2">
              <img
                src="https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?auto=format&fit=crop&w=1200&q=80"
                alt="Fletes y mudanzas para empresas"
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

              <div className="absolute bottom-0 p-10 text-white">
                <h3 className="text-3xl font-bold mb-3">
                  Fletes y mudanzas para empresas
                </h3>
                <p className="text-white/80 max-w-md mb-6">
                  Traslado de mobiliario de oficina, material informático o
                  documentación.
                </p>
                <a
                  href="/servicios/fletes-empresas"
                  className="inline-flex items-center font-semibold hover:text-secondary transition-colors"
                >
                  Saber más
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="text-center mt-20">
            <button className="group relative bg-primary text-white px-10 py-5 rounded-full font-semibold text-lg shadow-xl overflow-hidden inline-flex items-center gap-3">
              <span className="relative z-10">
                Explorar todos los servicios
              </span>
              <svg
                className="w-5 h-5 relative z-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
              <span className="absolute inset-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </button>
          </div>
        </div>
      </section>

      {/* Sobre Nosotros - Con dos métricas */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
                Un equipo, un camión,{" "}
                <span className="text-secondary">mil soluciones</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                En TransXSur creemos que la cercanía marca la diferencia. Somos
                una empresa familiar con un solo vehículo, lo que nos permite
                ofrecer un trato personalizado y una disponibilidad que las
                grandes empresas no pueden igualar.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Nuestro objetivo es que cada cliente se sienta acompañado
                durante todo el proceso, desde el primer contacto hasta la
                entrega final. Con más de 7 años de experiencia, hemos aprendido
                que la confianza se gana con hechos.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="group relative bg-primary text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg overflow-hidden">
                  <span className="relative z-10">Conoce nuestra historia</span>
                  <span className="absolute inset-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </button>
                <button className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-full font-semibold text-lg shadow-md hover:bg-primary hover:text-white transition-all duration-300">
                  Habla con nosotros
                </button>
              </div>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Equipo TransXSur"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
              </div>

              {/* Primera métrica - izquierda */}
              <div className="absolute -bottom-20 -left-14 hidden md:block bg-white rounded-2xl shadow-xl p-6 max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center text-3xl font-bold text-secondary">
                    7+
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Años de experiencia</p>
                    <p className="text-xl font-bold text-primary">Desde 2015</p>
                  </div>
                </div>
              </div>

              {/* Segunda métrica - derecha */}
              <div className="absolute -bottom-20 -right-12 hidden md:block bg-white rounded-2xl shadow-xl p-6 max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center text-3xl font-bold text-accent">
                    1k+
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Entregas realizadas</p>
                    <p className="text-xl font-bold text-primary">
                      Más de 1000
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <Section
        title="Lo que dicen nuestros clientes"
        subtitle="Opiniones reales de personas y empresas que confiaron en nosotros."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="p-6">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.content}"</p>
              <div className="flex text-secondary mt-3">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA final */}
      <Section className="bg-gray-900 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
          ¿Listo para mover tu carga?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Solicita un presupuesto sin compromiso en menos de 2 minutos. Te
          responderemos a la mayor brevedad.
        </p>
        <Button to="/cotizar" variant="secondary" className="text-lg px-8 py-4">
          Quiero mi presupuesto
        </Button>
      </Section>
    </>
  );
};

export default Home;
