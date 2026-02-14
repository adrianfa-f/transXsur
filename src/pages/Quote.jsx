import React, { useState } from "react";
import Section from "../components/common/Section";
import Button from "../components/common/Button";
import { calculateQuote } from "../utils/quoteCalculator";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import Seo from "../components/common/Seo";

const Quote = () => {
  const [formData, setFormData] = useState({
    serviceType: "mudanza",
    distance: "",
    weight: "",
    urgent: false,
    phone: "", // opcional para WhatsApp
  });

  const [quote, setQuote] = useState(null);

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleEstimate = (e) => {
    e.preventDefault();
    const distance = parseFloat(formData.distance) || 0;
    const weight = parseFloat(formData.weight) || 0;
    const estimated = calculateQuote(
      formData.serviceType,
      distance,
      weight,
      formData.urgent,
    );
    setQuote(estimated);
  };

  // Generar mensaje para WhatsApp y Email
  const getMessage = () => {
    const tipoServicio =
      {
        mudanza: "Mudanza",
        mercancia: "Transporte de mercancías",
        mensajeria: "Mensajería urgente",
        flete: "Flete para empresas",
        alquiler: "Alquiler con conductor",
        ultimamilla: "Distribución última milla",
        medida: "Transporte a medida",
      }[formData.serviceType] || formData.serviceType;

    let message = `Hola, me interesa el servicio de transporte.%0A%0A`;
    message += `Tipo de servicio: ${tipoServicio}.%0A`;
    message += `Distancia aproximada: ${formData.distance || "No especificada"} km.%0A`;
    message += `Peso aproximado: ${formData.weight || "No especificado"} kg.%0A`;
    message += `Urgente: ${formData.urgent ? "Sí" : "No"}.%0A`;
    if (quote !== null) {
      message += `Presupuesto estimado aproximado: ${quote} €%0A`;
    }
    message += `%0A¿Podemos hablar más detalles?`;

    return message;
  };

  const handleWhatsApp = () => {
    const phone = formData.phone
      ? formData.phone.replace(/\D/g, "")
      : "123456789"; // Número por defecto
    const url = `https://wa.me/${phone}?text=${getMessage()}`;
    window.open(url, "_blank");
  };

  const handleEmail = () => {
    const subject = "Solicitud de información sobre transporte";
    const body = getMessage().replace(/%0A/g, "\n"); // Reemplazar saltos para email
    const url = `mailto:info@transxsur.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
  };

  return (
    <>
      <Seo
        title="Calcula tu presupuesto"
        description="Calcula el presupuesto aproximado de tu envío y contacta directamente con nosotros por WhatsApp o email."
        url="https://www.transxsur.com/cotizar"
      />
      <section className="bg-[#1e5939] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Calcula tu presupuesto aproximado
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Introduce los datos de tu envío y obtén una estimación. Luego
            contacta con nosotros directamente.
          </p>
        </div>
      </section>

      <Section>
        <div className="max-w-2xl mx-auto">
          <form
            onSubmit={handleEstimate}
            className="space-y-6 bg-white p-8 rounded-lg shadow-lg"
          >
            {/* Tipo de servicio */}
            <div>
              <label
                htmlFor="serviceType"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Tipo de servicio *
              </label>
              <select
                id="serviceType"
                name="serviceType"
                required
                value={formData.serviceType}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#1e5939] focus:border-[#1e5939]"
              >
                <option value="mudanza">Mudanza</option>
                <option value="mercancia">Transporte de mercancías</option>
                <option value="mensajeria">Mensajería urgente</option>
                <option value="flete">Flete para empresas</option>
                <option value="alquiler">Alquiler con conductor</option>
                <option value="ultimamilla">Distribución última milla</option>
                <option value="medida">Transporte a medida</option>
              </select>
            </div>

            {/* Distancia aproximada */}
            <div>
              <label
                htmlFor="distance"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Distancia aproximada (km) *
              </label>
              <input
                type="number"
                id="distance"
                name="distance"
                required
                min="0"
                step="1"
                value={formData.distance}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#1e5939] focus:border-[#1e5939]"
              />
              <p className="text-xs text-gray-500 mt-1">
                Si no sabes la distancia, puedes calcularla con{" "}
                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1e5939] underline"
                >
                  Google Maps
                </a>{" "}
                (abre en nueva ventana).
              </p>
            </div>

            {/* Peso aproximado */}
            <div>
              <label
                htmlFor="weight"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Peso aproximado (kg) *
              </label>
              <input
                type="number"
                id="weight"
                name="weight"
                required
                min="0"
                step="1"
                value={formData.weight}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#1e5939] focus:border-[#1e5939]"
              />
            </div>

            {/* Urgente */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="urgent"
                name="urgent"
                checked={formData.urgent}
                onChange={handleChange}
                className="h-4 w-4 text-[#1e5939] focus:ring-[#1e5939] border-gray-300 rounded"
              />
              <label
                htmlFor="urgent"
                className="ml-2 block text-sm text-gray-700"
              >
                Necesito servicio urgente (recargo)
              </label>
            </div>

            {/* Teléfono opcional para WhatsApp */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Tu teléfono (opcional, para WhatsApp)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+34 123 456 789"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#1e5939] focus:border-[#1e5939]"
              />
            </div>

            {/* Botón de estimar */}
            <Button type="submit" variant="primary" size="lg" fullWidth>
              Estimar presupuesto
            </Button>
          </form>

          {/* Resultado de la estimación y botones de contacto */}
          {quote !== null && (
            <div className="mt-8 bg-[#e6f3e6] border border-[#44aa56] rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold text-[#1e5939] mb-2">
                Presupuesto estimado
              </h3>
              <p className="text-4xl font-display font-bold text-[#44aa56] mb-4">
                {quote} €
              </p>
              <p className="text-gray-600 mb-6">
                *Este es un cálculo automático. El presupuesto final puede
                variar según las características específicas del servicio.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* Botón WhatsApp */}
                <Button
                  onClick={handleWhatsApp}
                  variant="primary"
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 focus:ring-green-600 flex items-center gap-2"
                >
                  <FaWhatsapp className="text-xl" />
                  Contactar por WhatsApp
                </Button>

                {/* Botón Email */}
                <Button
                  onClick={handleEmail}
                  variant="secondary"
                  size="lg"
                  className="flex items-center gap-2"
                >
                  <FaEnvelope className="text-xl" />
                  Enviar por email
                </Button>
              </div>

              <p className="text-sm text-gray-500 mt-4">
                Al hacer clic en WhatsApp o Email, se generará un mensaje con
                los datos de tu solicitud y el presupuesto estimado.
              </p>
            </div>
          )}

          {/* Si no hay estimación, mostramos los botones de contacto directo */}
          {quote === null && (
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                ¿Prefieres contactarnos directamente?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleWhatsApp}
                  variant="primary"
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 focus:ring-green-600 flex items-center gap-2"
                >
                  <FaWhatsapp className="text-xl" />
                  WhatsApp
                </Button>
                <Button
                  onClick={handleEmail}
                  variant="secondary"
                  size="lg"
                  className="flex items-center gap-2"
                >
                  <FaEnvelope className="text-xl" />
                  Email
                </Button>
              </div>
            </div>
          )}
        </div>
      </Section>

      {/* Sección de ayuda para calcular distancias (opcional) */}
      <Section className="bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#1e5939] mb-4">
            ¿Cómo calcular la distancia?
          </h2>
          <p className="text-gray-700 mb-6">
            Puedes usar Google Maps para medir la distancia aproximada entre el
            punto de recogida y el destino.
          </p>
          <ol className="text-left text-gray-700 space-y-2 mb-6">
            <li>
              1. Abre{" "}
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1e5939] underline"
              >
                Google Maps
              </a>{" "}
              en tu navegador.
            </li>
            <li>
              2. Haz clic derecho en el punto de origen y selecciona "Medir
              distancia".
            </li>
            <li>3. Haz clic en el punto de destino para trazar la ruta.</li>
            <li>
              4. La distancia aparecerá en la parte inferior de la pantalla.
            </li>
          </ol>
          <p className="text-sm text-gray-500">
            En el futuro, incorporaremos un selector de puntos en el mapa
            directamente en nuestra web.
          </p>
        </div>
      </Section>
    </>
  );
};

export default Quote;
