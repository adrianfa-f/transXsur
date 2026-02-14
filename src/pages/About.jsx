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

const About = () => {
  return (
    <>
      <Seo
        title="Sobre nosotros"
        description="Conoce a TransXSur, una empresa familiar de transporte con más de 7 años de experiencia. Trato cercano y servicio personalizado."
        url="https://www.transxsur.com/nosotros"
      />
      {/* Hero */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Sobre TransXSur
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Una empresa de transporte con alma local y vocación de servicio.
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
              TransXSur nació en 2015 de la mano de{" "}
              <strong>Antonio Martínez</strong>, transportista con más de 20
              años de experiencia. Lo que comenzó como un pequeño negocio
              unipersonal con un único camión, hoy es una empresa de referencia
              en el transporte local y regional en el sur de España.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Antonio decidió emprender tras años trabajando para grandes
              compañías, donde echaba en falta un trato más cercano con el
              cliente. Su visión era clara: ofrecer un servicio de calidad,
              puntual y personalizado, donde cada cliente se sintiera único.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Hoy, seguimos creciendo sin perder nuestra esencia. Cada carga es
              tratada como si fuera la única, y cada cliente es parte de nuestra
              familia.
            </p>
            <div className="mt-8 flex gap-4">
              <Button to="/contacto" variant="primary">
                Habla con Antonio
              </Button>
              <Button to="/servicios" variant="outline">
                Ver servicios
              </Button>
            </div>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Antonio Martínez, fundador"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
              <p className="font-bold text-primary">Antonio Martínez</p>
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
              Hablas directamente con el transportista. Sin teleoperadores ni
              esperas. Te ofrecemos un trato familiar y transparente.
            </p>
          </Card>
          <Card className="p-8 text-center hover:shadow-lg transition">
            <FaLeaf className="text-5xl text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Sostenibilidad</h3>
            <p className="text-gray-600">
              Optimizamos rutas para reducir emisiones, usamos materiales
              ecológicos en embalajes y colaboramos con proyectos de
              reforestación.
            </p>
          </Card>
          <Card className="p-8 text-center hover:shadow-lg transition">
            <FaHeart className="text-5xl text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Pasión</h3>
            <p className="text-gray-600">
              Amamos lo que hacemos y se nota en cada entrega. Para nosotros,
              cada servicio es una oportunidad de superación.
            </p>
          </Card>
        </div>

        {/* Cifras destacadas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          <div className="text-center">
            <p className="text-4xl font-bold text-primary">+500</p>
            <p className="text-gray-600">Clientes satisfechos</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary">+1000</p>
            <p className="text-gray-600">Entregas realizadas</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary">7</p>
            <p className="text-gray-600">Años de experiencia</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary">1</p>
            <p className="text-gray-600">Vehículo (¡pero muy querido!)</p>
          </div>
        </div>
      </Section>

      {/* El equipo */}
      <Section id="equipo" title="El equipo humano">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="text-gray-700 mb-4 leading-relaxed">
              Aunque seamos pequeños, somos un equipo unido.{" "}
              <strong>Antonio</strong> es el conductor principal y cara visible,
              pero detrás hay un grupo de colaboradores que hacen posible cada
              servicio: desde la oficina hasta la carga y descarga.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              <strong>Elena</strong> se encarga de la coordinación y atención al
              cliente. <strong>Carlos</strong> y <strong>Miguel</strong> son
              nuestros ayudantes en las mudanzas más grandes. Y por supuesto,{" "}
              <strong>Rocky</strong>, nuestro fiel acompañante en la oficina.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Creemos en el trabajo bien hecho y en la mejora continua. Cada día
              aprendemos algo nuevo para ofrecerte un servicio aún mejor.
            </p>
            <div className="mt-8">
              <Button to="/contacto" variant="secondary">
                ¿Quieres conocernos en persona?
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 relative h-80 rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Equipo TransXSur"
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
              Trato directo con el transportista, sin intermediarios. Resolvemos
              tus dudas al instante.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg text-center">
            <FaUsers className="text-4xl text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Compromiso local</h3>
            <p className="opacity-90">
              Conocemos la zona, los accesos y las mejores rutas. Apostamos por
              la economía de proximidad.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg text-center">
            <FaAward className="text-4xl text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Calidad garantizada</h3>
            <p className="opacity-90">
              Más de 7 años de experiencia y cientos de clientes satisfechos nos
              avalan.
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
