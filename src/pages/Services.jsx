import Section from "../components/common/Section";
import Button from "../components/common/Button";
import { services } from "../data/services";
import { FaArrowRight } from "react-icons/fa";
import Seo from "../components/common/Seo";

const Services = () => {
  const allServices = services;

  // Función auxiliar para renderizar icono seguro
  const renderIcon = (service, className = "text-3xl mb-2") => {
    const IconComponent = service.icon;
    return <IconComponent className={`text-[#44aa56] ${className}`} />;
  };

  return (
    <>
      <Seo
        title="Servicios"
        description="Descubre todos nuestros servicios de transporte: mudanzas locales, mensajería urgente, distribución última milla y más. Adaptados a tus necesidades."
        url="https://www.transxsur.com/servicios"
      />
      <Section
        title="Todos nuestros servicios"
        subtitle="Descubre todo lo que podemos hacer por ti con un solo vehículo y mucha dedicación."
        className="bg-gray-50"
      >
        {/* Grid asimétrico de 12 columnas con contenido que llena los espacios */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-auto">
          {/* Servicio 1: Tarjeta grande con imagen de fondo y texto superpuesto */}
          <div className="md:col-span-7 row-span-2 group relative rounded-2xl overflow-hidden shadow-xl md:mt-20 h-96">
            <img
              src={allServices[0].images[0]}
              alt={allServices[0].title}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1e5939]/90 via-[#1e5939]/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 text-white">
              {renderIcon(allServices[0], "text-4xl mb-3 text-white")}
              <h3 className="text-3xl font-bold mb-2">
                {allServices[0].title}
              </h3>
              <p className="text-lg mb-4 max-w-md">
                {allServices[0].shortDescription}
              </p>
              <Button
                to={`/servicios/${allServices[0].slug}`}
                variant="outline-primary"
                size="md"
                className="bg-white/20 backdrop-blur-sm border-white/50 text-white hover:bg-white hover:text-[#1e5939]"
              >
                Saber más <FaArrowRight className="ml-2" />
              </Button>
            </div>
          </div>

          {/* Bloque de relleno: estadísticas o texto motivacional */}
          <div className="md:col-span-5 bg-white rounded-2xl shadow-md p-6 flex flex-col justify-center">
            <h4 className="text-xl font-bold text-[#1e5939] mb-2">
              Más de 7 años de experiencia
            </h4>
            <p className="text-gray-600">
              Hemos realizado más de 1.000 entregas con un único vehículo,
              demostrando que la calidad no depende del tamaño.
            </p>
            <div className="mt-4 flex gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-[#44aa56]">+7</p>
                <p className="text-xs text-gray-500">años</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-[#44aa56]">+1k</p>
                <p className="text-xs text-gray-500">entregas</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-[#44aa56]">100%</p>
                <p className="text-xs text-gray-500">satisfacción</p>
              </div>
            </div>
          </div>

          {/* Servicio 2: Imagen a la izquierda, texto a la derecha */}
          <div className="md:col-span-5 bg-white rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-2/5 h-48 md:h-auto">
              <img
                src={allServices[1].images[0]}
                alt={allServices[1].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-3/5 p-6 flex flex-col justify-center">
              {renderIcon(allServices[1], "text-3xl mb-2")}
              <h3 className="text-xl font-bold mb-2 text-[#1e5939]">
                {allServices[1].title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                {allServices[1].shortDescription}
              </p>
              <Button
                to={`/servicios/${allServices[1].slug}`}
                variant="ghost"
                size="sm"
                className="self-start"
              >
                Saber más <FaArrowRight className="ml-1 text-sm" />
              </Button>
            </div>
          </div>

          {/* Servicio 3: Dos imágenes pequeñas arriba, texto abajo */}
          <div className="md:col-span-5 bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="grid grid-cols-2 gap-1 h-40">
              <img
                src={allServices[2].images[0]}
                alt={allServices[2].title}
                className="w-full h-full object-cover"
              />
              <img
                src={allServices[2].images[1] || allServices[2].images[0]}
                alt={allServices[2].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              {renderIcon(allServices[2], "text-3xl mb-2")}
              <h3 className="text-xl font-bold mb-2 text-[#1e5939]">
                {allServices[2].title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                {allServices[2].shortDescription}
              </p>
              <Button
                to={`/servicios/${allServices[2].slug}`}
                variant="ghost"
                size="sm"
                className="self-start"
              >
                Saber más <FaArrowRight className="ml-1 text-sm" />
              </Button>
            </div>
          </div>

          {/* Servicio 4: Tarjeta con fondo de color y lista de características */}
          <div className="md:col-span-7 bg-gradient-to-br from-[#1e5939] to-[#317a45] rounded-2xl p-8 text-white shadow-lg flex flex-col justify-between">
            <div>
              {renderIcon(allServices[3], "text-4xl mb-4 text-[#44aa56]")}
              <h3 className="text-2xl font-bold mb-3">
                {allServices[3].title}
              </h3>
              <p className="mb-4 opacity-90">
                {allServices[3].shortDescription}
              </p>
              <ul className="space-y-2 mb-6">
                {allServices[3].features.slice(0, 3).map((feat, idx) => (
                  <li key={idx} className="flex items-center text-sm">
                    <span className="w-1.5 h-1.5 bg-[#44aa56] rounded-full mr-2"></span>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
            <Button
              to={`/servicios/${allServices[3].slug}`}
              variant="outline-primary"
              size="md"
              className="self-start bg-white/20 backdrop-blur-sm border-white/50 text-white hover:bg-white hover:text-[#1e5939]"
            >
              Saber más <FaArrowRight className="ml-2" />
            </Button>
          </div>

          {/* Bloque de relleno: testimonio rápido */}
          <div className="md:col-span-5 p-6 flex flex-col justify-center">
            <p className="text-gray-600 italic">
              "El mejor servicio de transporte que he contratado. Puntuales,
              cuidadosos y muy profesionales."
            </p>
            <p className="mt-2 font-semibold text-[#1e5939]">— María G.</p>
            <p className="text-xs text-gray-500">Cliente desde 2021</p>
          </div>

          {/* Servicio 5: Imagen grande a la izquierda, texto en columna a la derecha */}
          <div className="md:col-span-6 bg-white rounded-2xl shadow-md overflow-hidden flex flex-col md:ml-20 md:flex-row">
            <div className="md:w-1/2 h-56 md:h-auto">
              <img
                src={allServices[4].images[0]}
                alt={allServices[4].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-6 flex flex-col justify-center">
              {renderIcon(allServices[4], "text-3xl mb-2")}
              <h3 className="text-xl font-bold mb-2 text-[#1e5939]">
                {allServices[4].title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                {allServices[4].shortDescription}
              </p>
              <Button
                to={`/servicios/${allServices[4].slug}`}
                variant="ghost"
                size="sm"
                className="self-start"
              >
                Saber más <FaArrowRight className="ml-1 text-sm" />
              </Button>
            </div>
          </div>

          {/* Servicio 6: Tarjeta con imagen de fondo y texto lateral (diseño distinto) */}
          <div className="md:col-span-6 relative rounded-2xl overflow-hidden shadow-xl h-80">
            <img
              src={allServices[5].images[0]}
              alt={allServices[5].title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#1e5939]/70 mix-blend-multiply"></div>
            <div className="absolute inset-0 flex items-end p-6 text-white">
              <div>
                {renderIcon(allServices[5], "text-3xl mb-2 text-[#44aa56]")}
                <h3 className="text-2xl font-bold mb-1">
                  {allServices[5].title}
                </h3>
                <p className="mb-3 text-sm opacity-90">
                  {allServices[5].shortDescription}
                </p>
                <Button
                  to={`/servicios/${allServices[5].slug}`}
                  variant="outline-primary"
                  size="sm"
                  className="bg-white/20 backdrop-blur-sm border-white/50 text-white hover:bg-white hover:text-[#1e5939]"
                >
                  Saber más <FaArrowRight className="ml-1" />
                </Button>
              </div>
            </div>
          </div>

          {/* Bloque de relleno: otra estadística o llamada */}
          <div className="md:col-span-5 bg-[#44aa56] text-white rounded-2xl shadow-md p-6 flex flex-col justify-center items-center text-center">
            <h4 className="text-xl font-bold mb-2">¿Hablamos?</h4>
            <p className="mb-4">
              Cuéntanos qué necesitas y te haremos un presupuesto sin
              compromiso.
            </p>
            <Button
              to="/contacto"
              variant="primary"
              size="md"
              className="bg-white text-[#1e5939] hover:bg-gray-100"
            >
              Contactar ahora
            </Button>
          </div>

          {/* Servicio 7: Diseño de mosaico con tres imágenes pequeñas y texto */}
          <div className="md:col-span-7 bg-white rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-2/5 grid grid-cols-2 gap-1 p-2">
              {allServices[6].images.slice(0, 4).map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt=""
                  className="w-full h-24 object-cover rounded"
                />
              ))}
            </div>
            <div className="md:w-3/5 p-6 flex flex-col justify-center">
              {renderIcon(allServices[6], "text-3xl mb-2")}
              <h3 className="text-xl font-bold mb-2 text-[#1e5939]">
                {allServices[6].title}
              </h3>
              <p className="text-gray-600 mb-4">
                {allServices[6].shortDescription}
              </p>
              <Button
                to={`/servicios/${allServices[6].slug}`}
                variant="ghost"
                size="md"
                className="self-start"
              >
                Saber más <FaArrowRight className="ml-1" />
              </Button>
            </div>
          </div>

          {/* Último bloque de relleno: algo más */}
          <div className="md:col-span-5 bg-white rounded-2xl shadow-md p-6 flex flex-col justify-center">
            <h4 className="text-xl font-bold text-[#1e5939] mb-2">
              Confianza y cercanía
            </h4>
            <p className="text-gray-600">
              Somos una empresa familiar, con un trato directo y personalizado.
              Sin intermediarios.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA con botón de contacto */}
      <section className="bg-[#1e5939] text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            ¿No encuentras lo que buscas?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Podemos crear un servicio a medida para ti. Cuéntanos tu necesidad.
          </p>
          <Button
            to="/contacto"
            variant="secondary"
            size="lg"
            className="shadow-lg"
          >
            Ponte en contacto
          </Button>
        </div>
      </section>
    </>
  );
};

export default Services;
