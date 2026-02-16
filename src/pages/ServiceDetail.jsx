import React from "react";
import { useParams, Link } from "react-router-dom";
import Section from "../components/common/Section";
import Button from "../components/common/Button";
import { services } from "../data/services";
import { FaCheckCircle, FaArrowLeft } from "react-icons/fa";
import Seo from "../components/common/Seo";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <Section>
        <div className="text-center py-20">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Servicio no encontrado
          </h2>
          <p className="text-gray-600 mb-8">
            El servicio que buscas no existe o ha sido eliminado.
          </p>
          <Button to="/servicios" variant="primary">
            Ver todos los servicios
          </Button>
        </div>
      </Section>
    );
  }

  const Icon = service.icon;

  return (
    <>
      <Seo
        title={service.title}
        description={service.shortDescription}
        keywords={`transporte, ${service.title.toLowerCase()}, Cádiz, mudanzas`}
        image={service.images[0]}
        url={`https://www.transxsur.com/servicios/${service.slug}`}
      />
      {/* Hero con imagen de fondo */}
      <section className="relative bg-primary text-white py-24">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${service.images[0]})` }}
        ></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            to="/servicios"
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition"
          >
            <FaArrowLeft className="mr-2" /> Volver a servicios
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <Icon className="text-5xl text-secondary" />
            <h1 className="text-4xl md:text-5xl font-display font-bold">
              {service.title}
            </h1>
          </div>
          <p className="text-xl max-w-3xl">{service.shortDescription}</p>
        </div>
      </section>

      {/* Descripción extensa con layout asimétrico */}
      <Section>
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Columna principal (2/3) */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Galería de imágenes asimétrica */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
              {service.images.map((img, idx) => (
                <div
                  key={idx}
                  className={`rounded-lg overflow-hidden shadow-md ${
                    idx === 0 ? "col-span-2 row-span-2" : ""
                  }`}
                >
                  <img
                    src={img}
                    alt={`${service.title} - imagen ${idx + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                </div>
              ))}
            </div>

            {/* Beneficios */}
            <div className="mt-12 bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Beneficios de este servicio
              </h3>
              <ul className="grid sm:grid-cols-2 gap-4">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-secondary mr-3 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Columna lateral (1/3) */}
          <div className="lg:col-span-1">
            <div className="bg-white sticky top-28 rounded-lg shadow-lg p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-primary mb-4">
                Características
              </h3>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-secondary mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-bold text-primary mb-4">
                ¿Necesitas más información?
              </h3>
              <p className="text-gray-600 mb-6">
                Este servicio puede adaptarse a tus necesidades. Ponte en
                contacto con nosotros para una consulta personalizada.
              </p>
              <Button
                to="/contacto"
                variant="secondary"
                className="w-full mb-3"
              >
                Solicita información
              </Button>
              <Button
                to="/cotizar"
                variant="outline-primary"
                className="w-full"
              >
                Calcular presupuesto
              </Button>

              <hr className="my-6" />

              <div className="text-center">
                <p className="text-sm text-gray-500">O llámanos directamente</p>
                <a
                  href="tel:+34643495351"
                  className="text-xl font-bold text-primary hover:text-secondary transition"
                >
                  +34 643 49 53 51
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA final con botón de contacto distinto */}
      <section className="bg-accent text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            ¿Listo para contratar este servicio?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Cuéntanos qué necesitas y te enviaremos un presupuesto personalizado
            en menos de 24h.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button to="/contacto" variant="primary">
              Habla con nosotros
            </Button>
            <Button
              to="/cotizar"
              variant="secondary"
              className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4"
            >
              Simulador rápido
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;
