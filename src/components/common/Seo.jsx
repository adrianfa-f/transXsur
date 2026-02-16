import React from "react";
import { Helmet } from "react-helmet-async";

const Seo = ({
  title,
  description,
  keywords,
  image = "/images/services/transporte-mercancias-1.jpg", // Reemplaza con tu imagen real
  url,
  type = "website",
}) => {
  const siteName = "TransXSur";
  const defaultDescription =
    "Transportes del Sur, tu aliado de confianza para mudanzas, mensajería y carga. Un solo vehículo, mil soluciones.";
  const defaultKeywords =
    "transporte, mudanzas, mensajería, fletes, última milla, Cádiz, transporte de mercancías";

  return (
    <Helmet>
      {/* Título y descripción */}
      <title>{title ? `${title} | ${siteName}` : siteName}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />

      {/* Open Graph (Facebook, LinkedIn) */}
      <meta property="og:title" content={title || siteName} />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url || "https://www.transxsur.com/"} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="es_ES" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || siteName} />
      <meta
        name="twitter:description"
        content={description || defaultDescription}
      />
      <meta name="twitter:image" content={image} />

      {/* Canonical URL */}
      <link rel="canonical" href={url || "https://www.transxsur.com/"} />

      {/* Idioma */}
      <html lang="es" />
    </Helmet>
  );
};

export default Seo;
