import React from "react";
import Section from "../components/common/Section";
import Card from "../components/common/Card";
import Button from "../components/common/Button";
import {
  FaHandsHelping,
  FaLeaf,
  FaHeart,
  FaTruck,
  FaUsers,
  FaAward,
} from "react-icons/fa";
import Seo from "../components/common/Seo";
import equipo from "../assets/equipo.jpg";
import transporte from "../assets/transporte.jpg";

const About = () => {
  return (
    <>
      <Seo
        title="Sobre nosotros"
        description="Conoce a Pedro Ernesto, transportista con años de experiencia que emprende con una furgoneta nueva para ofrecerte un servicio cercano y de confianza en Cádiz."
        url="https://www.transxsur.com/nosotros"
      />
      {/* Hero */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Sobre TransXSur
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Un proyecto nuevo con una larga experiencia sobre ruedas.
          </p>
        </div>
      </section>

      {/* Historia y fundador */}
      <Section id="historia">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">
              Nuestra historia
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              <strong>Pedro Ernesto Pérez</strong> lleva más de 7 años dedicado
              al mundo del transporte. Durante todo este tiempo ha trabajado
              como conductor para diferentes empresas, acumulando kilómetros y
              experiencia, pero siempre con el sueño de tener su propio negocio.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              En 2025, Pedro Ernesto decidió dar el paso. Con una furgoneta Ford
              nueva y mucha ilusión, nace TransXSur. Su objetivo es claro:
              ofrecer un servicio cercano, flexible y de confianza, donde el
              cliente sea el centro de todo.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Aquí no hay intermediarios. Hablarás directamente con Pedro
              Ernesto, el transportista, y entre los dos encontraréis la mejor
              solución para tus necesidades. Porque cuando hay experiencia y
              ganas, el tamaño del negocio no importa.
            </p>
            <div className="mt-8 flex gap-4">
              <Button to="/contacto" variant="primary">
                Habla con Pedro Ernesto
              </Button>
              <Button to="/servicios" variant="outline">
                Ver servicios
              </Button>
            </div>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <img
              src={transporte}
              alt="Pedro Ernesto Pérez, fundador"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
              <p className="font-bold text-primary">Pedro Ernesto Pérez</p>
              <p className="text-sm text-gray-600">Fundador y transportista</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Filosofía y valores */}
      <Section id="valores" className="bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">
          Nuestra filosofía
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 text-center hover:shadow-lg transition">
            <FaHandsHelping className="text-5xl text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Cercanía</h3>
            <p className="text-gray-600">
              Hablas directamente con Pedro Ernesto. Sin teleoperadores ni
              esperas. Te ofrecemos un trato familiar y transparente desde el
              primer contacto.
            </p>
          </Card>
          <Card className="p-8 text-center hover:shadow-lg transition">
            <FaLeaf className="text-5xl text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Eficiencia</h3>
            <p className="text-gray-600">
              Optimizamos cada ruta para ahorrar tiempo y combustible. Un
              servicio responsable que cuida tu bolsillo y el medio ambiente.
            </p>
          </Card>
          <Card className="p-8 text-center hover:shadow-lg transition">
            <FaHeart className="text-5xl text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Pasión</h3>
            <p className="text-gray-600">
              Amamos lo que hacemos y se nota en cada detalle. Para Pedro
              Ernesto, cada servicio es una oportunidad para demostrar su
              profesionalidad.
            </p>
          </Card>
        </div>

        {/* Cifras destacadas (ahora realistas) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          <div className="text-center">
            <p className="text-4xl font-bold text-primary">+7</p>
            <p className="text-gray-600">Años de experiencia</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary">1</p>
            <p className="text-gray-600">Furgoneta (¡a estrenar!)</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary">100%</p>
            <p className="text-gray-600">Dedicación exclusiva</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary">Cádiz</p>
            <p className="text-gray-600">Nuestra zona de trabajo</p>
          </div>
        </div>
      </Section>

      {/* El equipo */}
      <Section id="equipo" title="El equipo humano">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="text-gray-700 mb-4 leading-relaxed">
              Hoy por hoy, <strong>Pedro Ernesto</strong> es el conductor y la
              cara visible de TransXSur. Pero un proyecto así no funciona solo:
              cuenta con la ayuda puntual de colaboradores de confianza para la
              carga y descarga en trabajos más grandes, y con el apoyo de su
              familia en la gestión diaria.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Esta pequeña estructura nos permite ser ágiles, económicos y,
              sobre todo, mantener un trato directo y personalizado contigo. Sin
              grandes jerarquías, solo personas comprometidas con hacerlo bien.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Estamos al principio del camino, pero con la mochila llena de
              experiencia y la ilusión de quien empieza un proyecto propio. ¿Te
              vienes de viaje con nosotros?
            </p>
            <div className="mt-8">
              <Button to="/contacto" variant="secondary">
                ¿Quieres conocernos en persona?
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 relative h-80 rounded-lg overflow-hidden shadow-xl">
            <img
              src={equipo}
              alt="Pedro Ernesto y su furgoneta"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Por qué elegirnos */}
      <Section id="porque" className="bg-primary text-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            ¿Por qué confiar en nosotros?
          </h2>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            No somos la empresa más grande, pero sí la que más se preocupa por
            ti.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg text-center">
            <FaTruck className="text-4xl text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Atención personalizada</h3>
            <p className="opacity-90">
              Trato directo con Pedro Ernesto, sin intermediarios. Resolvemos
              tus dudas al instante y adaptamos el servicio a ti.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg text-center">
            <FaUsers className="text-4xl text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Compromiso local</h3>
            <p className="opacity-90">
              Conocemos cada rincón de Cádiz, sus accesos y necesidades.
              Apostamos por la economía de proximidad.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg text-center">
            <FaAward className="text-4xl text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Experiencia contrastada</h3>
            <p className="opacity-90">
              Más de 7 años moviendo mercancía con profesionalidad y cuidado. Tu
              carga estará en buenas manos.
            </p>
          </div>
        </div>
        <div className="text-center mt-12">
          <Button
            to="/contacto"
            variant="secondary"
            className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4"
          >
            Solicita una reunión informativa
          </Button>
        </div>
      </Section>
    </>
  );
};

export default About;
