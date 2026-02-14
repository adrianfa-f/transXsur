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
      "Ayudamos a familias y particulares a trasladar sus pertenencias con cuidado y puntualidad.",
    description:
      "Realizamos mudanzas locales con la máxima atención al detalle. Nuestro equipo se encarga de todo: embalaje, desmontaje de muebles, carga, transporte y montaje en el nuevo hogar. Trabajamos con materiales de embalaje ecológicos y ofrecemos seguros a medida para tu tranquilidad. Además, al ser una empresa pequeña, coordinamos directamente contigo para adaptarnos a tus horarios y necesidades específicas.",
    icon: FaBoxOpen,
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
    features: [
      "Embalaje profesional",
      "Desmontaje de muebles",
      "Seguro de carga",
      "Montaje en destino",
      "Material ecológico",
    ],
    benefits: [
      "Ahorra tiempo y esfuerzo",
      "Trato personalizado",
      "Puntualidad garantizada",
      "Sin sorpresas en el precio",
    ],
  },
  {
    id: 2,
    slug: "transporte-mercancias",
    title: "Transporte de mercancías generales",
    shortDescription:
      "Carga seca, paletizada o bultos sueltos. Desde un envío pequeño hasta media carga.",
    description:
      "Ofrecemos servicios de transporte para todo tipo de mercancías: desde un palé hasta media carga. Nuestro vehículo está equipado con sistemas de sujeción y protección para garantizar que tu mercancía llegue en perfectas condiciones. Realizamos rutas optimizadas para reducir tiempos y costes. Ideal para empresas que necesitan enviar productos a clientes o entre almacenes.",
    icon: FaTruck,
    images: [
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
    features: [
      "Carga completa o parcial",
      "Mercancía paletizada",
      "Seguimiento en tiempo real",
      "Seguro de mercancía",
      "Rutas optimizadas",
    ],
    benefits: [
      "Flexibilidad de carga",
      "Precios competitivos",
      "Entregas rápidas",
      "Profesionalidad",
    ],
  },
  {
    id: 3,
    slug: "mensajeria-urgente",
    title: "Mensajería y paquetería urgente",
    shortDescription:
      "Entregas puerta a puerta en el mismo día o en franjas horarias concretas.",
    description:
      "¿Necesitas enviar un documento o paquete con urgencia? Ofrecemos servicio de mensajería exprés en toda la provincia. Recogemos en tu domicilio o empresa y entregamos en el menor tiempo posible. Puedes elegir franja horaria de entrega y recibir confirmación. Ideal para notificaciones, muestras, repuestos o cualquier envío que no pueda esperar.",
    icon: FaEnvelope,
    images: [
      "https://images.unsplash.com/photo-1566577106856-3b50d5a3e1b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
    features: [
      "Entrega exprés",
      "Horario flexible",
      "Confirmación de entrega",
      "Recogida a domicilio",
      "Urgencias 24h",
    ],
    benefits: [
      "Máxima rapidez",
      "Tranquilidad",
      "Seguimiento continuo",
      "Adaptación a tus horarios",
    ],
  },
  {
    id: 4,
    slug: "fletes-empresas",
    title: "Fletes y mudanzas para empresas",
    shortDescription:
      "Traslado de mobiliario de oficina, material informático o documentación.",
    description:
      "Especialistas en mudanzas de oficinas y empresas. Minimizamos el impacto en tu actividad: planificamos el traslado en horarios de menor afluencia o fines de semana. Gestionamos el embalaje de equipos informáticos, archivos y mobiliario, y nos encargamos del montaje en las nuevas instalaciones. Todo con la máxima confidencialidad y cuidado.",
    icon: FaBuilding,
    images: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6a72?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556740714-a8395b3bf30f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
    features: [
      "Montaje en destino",
      "Gestión de residuos",
      "Horario adaptado",
      "Embalaje de equipos",
      "Seguro a medida",
    ],
    benefits: [
      "Mínima interrupción",
      "Profesionalidad",
      "Coordinación integral",
      "Confidencialidad",
    ],
  },
  {
    id: 5,
    slug: "alquiler-con-conductor",
    title: "Alquiler de vehículo con conductor",
    shortDescription:
      "Necesitas llevar algo y no tienes tiempo? Nosotros nos encargamos.",
    description:
      "¿Tienes que transportar un objeto voluminoso pero no puedes conducir? Contrata nuestro servicio de vehículo con conductor. Nosotros llevamos el camión, cargamos y descargamos. Tú solo indicas el origen y destino. Perfecto para particulares sin carnet, empresas que necesitan enviar mercancía sin movilizar personal, o para eventos.",
    icon: FaHandsHelping,
    images: [
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1568605117036-5fe5e7fa0ab7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
    features: [
      "Conductor profesional",
      "Ruta optimizada",
      "Carga y descarga incluida",
      "Flexibilidad horaria",
      "Asistencia en ruta",
    ],
    benefits: [
      "Sin preocupaciones",
      "Ahorro de tiempo",
      "Profesionalidad",
      "Seguridad",
    ],
  },
  {
    id: 6,
    slug: "distribucion-ultima-milla",
    title: "Distribución de última milla",
    shortDescription:
      "Reparto local para comercios, tiendas online o pequeñas empresas.",
    description:
      "Servicio de distribución capilar para negocios locales. Recogemos tu mercancía y la entregamos a tus clientes en la misma jornada. Ideal para tiendas online, restaurantes, farmacias o cualquier negocio que necesite entregas rápidas en la ciudad. Ofrecemos rutas diarias y seguimiento de cada entrega.",
    icon: FaMapMarkedAlt,
    images: [
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1580674285054-bed31e145f59?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607478900766-32e075a3e7b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
    features: [
      "Rutas diarias",
      "Flota adaptada",
      "Entregas programadas",
      "Seguimiento online",
      "Devoluciones gestionadas",
    ],
    benefits: [
      "Rapidez",
      "Cobertura local",
      "Confianza para tus clientes",
      "Optimización de costes",
    ],
  },
  {
    id: 7,
    slug: "transporte-medida",
    title: "Transporte a medida",
    shortDescription:
      "¿Tienes una necesidad especial? Contáctanos y buscaremos la solución.",
    description:
      "Sabemos que no todas las cargas son iguales. Por eso ofrecemos un servicio totalmente personalizado para necesidades especiales: mercancías frágiles, obras de arte, material delicado, o envíos con requisitos específicos. Estudiaremos tu caso y te propondremos la mejor solución, con los medios adecuados y el trato cercano que nos caracteriza.",
    icon: FaCog,
    images: [
      "https://images.unsplash.com/photo-1617529497471-9218633199c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586528116311-3b6b64c0f3a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1580674285054-bed31e145f59?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
    features: [
      "Asesoramiento personalizado",
      "Soluciones flexibles",
      "Presupuesto sin compromiso",
      "Adaptación a normativas",
      "Seguro a medida",
    ],
    benefits: [
      "Tranquilidad",
      "Soluciones a medida",
      "Atención exclusiva",
      "Experiencia",
    ],
  },
];
