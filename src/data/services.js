import {
  FaTruck,
  FaBoxOpen,
  FaEnvelope,
  FaBuilding,
  FaHandsHelping,
  FaMapMarkedAlt,
  FaCog,
} from "react-icons/fa";

export const services = [
  {
    id: 1,
    slug: "mudanzas-locales",
    title: "Mudanzas locales y residenciales",
    shortDescription:
      "Te ayudamos a trasladar tus cosas con cuidado y puntualidad. Trato cercano y sin prisas.",
    description:
      "Sabemos que una mudanza es un momento especial. Por eso, aunque empezamos con una sola furgoneta, ponemos toda la atención en que tus pertenencias lleguen perfectas. Te ayudamos con la carga y descarga, y si necesitas consejo para embalar, aquí estamos. En Cádiz, nos gusta el trato directo: habla con el propietario, que será quien conduzca y se encargará personalmente de tu mudanza.",
    icon: FaBoxOpen,
    images: [
      "/images/services/mudanzas-locales-1.jpg",
      "/images/services/mudanzas-locales-2.jpg",
      "/images/services/mudanzas-locales-3.jpg",
    ],
    features: [
      "Carga y descarga incluida",
      "Trato personal del propietario",
      "Presupuesto sin compromiso",
      "Flexibilidad horaria",
      "Atención a domicilio",
    ],
    benefits: [
      "Ahorras esfuerzo físico",
      "Sabes quién te atiende en todo momento",
      "Puntualidad gaditana",
      "Sin letra pequeña",
    ],
  },
  {
    id: 2,
    slug: "transporte-mercancias",
    title: "Transporte de mercancías generales",
    shortDescription:
      "Llevamos tus bultos, palés o pedidos. Desde una caja hasta media carga.",
    description:
      "¿Necesitas enviar material a un cliente o recoger un pedido? Nuestra furgoneta está lista para circular por toda Cádiz. Al ser un negocio pequeño, nos adaptamos a tus horarios y te ofrecemos un precio justo. Además, al tratar directamente con el dueño, no hay intermediarios: lo que pactamos se cumple.",
    icon: FaTruck,
    images: [
      "/images/services/transporte-mercancias-1.jpg",
      "/images/services/transporte-mercancias-2.jpg",
      "/images/services/transporte-mercancias-3.jpg",
    ],
    features: [
      "Recogida y entrega",
      "Seguimiento por WhatsApp",
      "Mercancía asegurada",
      "Rutas optimizadas",
      "Sin permanencia",
    ],
    benefits: [
      "Confianza de trato directo",
      "Precio cerrado",
      "Rapidez en gestiones",
      "Conoce a quien conduce",
    ],
  },
  {
    id: 3,
    slug: "mensajeria-urgente",
    title: "Mensajería y paquetería urgente",
    shortDescription: "Entregas exprés en la provincia. Si urge, nos movemos.",
    description:
      "Documentos, repuestos, muestras... lo que necesites enviar con urgencia. Como solo tenemos un vehículo, coordinamos contigo para buscar el momento justo. En muchos casos podemos hacerlo en el día, especialmente en zonas cercanas. El propietario en persona llevará tu paquete, así que puedes estar tranquilo.",
    icon: FaEnvelope,
    images: [
      "/images/services/mensajeria-urgente-1.jpg",
      "/images/services/mensajeria-urgente-2.jpg",
      "/images/services/mensajeria-urgente-3.jpg",
    ],
    features: [
      "Entrega en mano",
      "Confirmación al instante",
      "Horario adaptado",
      "Urgencias consultar",
      "Trato directo",
    ],
    benefits: [
      "Sabes quién lo lleva",
      "Sin centralitas",
      "Flexible a tus necesidades",
      "Cercanía",
    ],
  },
  {
    id: 4,
    slug: "fletes-empresas",
    title: "Fletes y mudanzas para empresas",
    shortDescription:
      "Traslado de mobiliario, archivos o equipos para negocios.",
    description:
      "Si tu empresa necesita mover material de una oficina a otra, o enviar equipos a clientes, podemos ayudarte. Aunque seamos pequeños, nuestro servicio es ágil y sin complicaciones. El propietario se desplaza, evalúa la carga y te da un presupuesto claro. Ideal para pymes y autónomos que buscan un trato humano.",
    icon: FaBuilding,
    images: [
      "/images/services/fletes-empresas-1.jpg",
      "/images/services/fletes-empresas-2.jpg",
      "/images/services/fletes-empresas-3.jpg",
    ],
    features: [
      "Carga y descarga",
      "Horario compatible",
      "Presupuesto rápido",
      "Seguro básico incluido",
      "Sin sorpresas",
    ],
    benefits: [
      "Atención personal empresarial",
      "Agilidad en la gestión",
      "Precio ajustado",
      "Trato con el responsable",
    ],
  },
  {
    id: 5,
    slug: "alquiler-con-conductor",
    title: "Alquiler de furgoneta con conductor",
    shortDescription:
      "Llevamos lo que necesites: tú no conduces, nosotros nos encargamos.",
    description:
      "¿No tienes carnet o prefieres no conducir? Te ofrecemos nuestro vehículo con el propietario al volante. Ideal para recoger un mueble, llevar enseres al punto limpio o trasladar objetos voluminosos. El servicio incluye la ayuda en carga y descarga, y te acompaña en el trayecto si lo deseas.",
    icon: FaHandsHelping,
    images: [
      "/images/services/alquiler-con-conductor-1.jpg",
      "/images/services/alquiler-con-conductor-2.jpg",
      "/images/services/alquiler-con-conductor-3.jpg",
    ],
    features: [
      "Conductor (propietario)",
      "Ayuda con bultos",
      "Trayecto a medida",
      "Precio por hora o trayecto",
      "Trato cercano",
    ],
    benefits: [
      "Despreocúpate del volante",
      "Compañía en la ruta",
      "Sin letra pequeña",
      "Ideal para particulares",
    ],
  },
  {
    id: 6,
    slug: "distribucion-ultima-milla",
    title: "Distribución de última milla",
    shortDescription:
      "Reparto local para comercios, tiendas online o pequeños negocios.",
    description:
      "¿Tienes una tienda online o un comercio y necesitas reparto rápido en tu ciudad? Nos encargamos de llevar tus productos a clientes finales. Al ser un servicio con una sola furgoneta, podemos ser muy flexibles con las rutas. Además, el cliente recibe su pedido de manos del propietario, lo que suma cercanía a tu marca.",
    icon: FaMapMarkedAlt,
    images: [
      "/images/services/distribucion-ultima-milla-1.jpg",
      "/images/services/distribucion-ultima-milla-2.jpg",
      "/images/services/distribucion-ultima-milla-3.jpg",
    ],
    features: [
      "Reparto diario",
      "Entregas personalizadas",
      "Coordinación vía WhatsApp",
      "Devoluciones rápidas",
      "Rutas optimizadas",
    ],
    benefits: [
      "Mejora la imagen de tu negocio",
      "Trato amable con tus clientes",
      "Flexibilidad horaria",
      "Precio económico",
    ],
  },
  {
    id: 7,
    slug: "transporte-medida",
    title: "Transporte a medida",
    shortDescription: "¿Tienes algo especial? Pregúntanos sin compromiso.",
    description:
      "Sabemos que a veces las necesidades no encajan en casillas. Por eso, si necesitas algo fuera de lo común (un objeto frágil, una recogida complicada, etc.), habla con nosotros. Evaluaremos cómo podemos ayudarte con nuestra furgoneta y, si no podemos, te lo diremos sinceramente. La transparencia es nuestra base.",
    icon: FaCog,
    images: [
      "/images/services/transporte-medida-1.jpg",
      "/images/services/transporte-medida-2.jpg",
      "/images/services/transporte-medida-3.jpg",
    ],
    features: [
      "Asesoramiento sincero",
      "Presupuesto sin compromiso",
      "Soluciones creativas",
      "Trato personal",
      "Adaptación a lo que necesites",
    ],
    benefits: [
      "Te escuchamos primero",
      "Sin overbooking",
      "Confianza total",
      "El propietario te atiende",
    ],
  },
];
