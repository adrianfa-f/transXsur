import React, { useState } from "react";
import Section from "../components/common/Section";
import Button from "../components/common/Button";
import { FaWhatsapp, FaEnvelope, FaPhone, FaUser } from "react-icons/fa";
import Seo from "../components/common/Seo";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Generar mensaje para WhatsApp y Email
  const getMessage = (includeUserInfo = true) => {
    let intro = "Hola Pedro Ernesto Pérez,%0A%0A";
    let body = "";

    if (
      includeUserInfo &&
      (formData.name || formData.email || formData.phone || formData.message)
    ) {
      body += "Te escribo desde la web de TransXSur:%0A%0A";
      if (formData.name) body += `Nombre: ${formData.name}.%0A`;
      if (formData.email) body += `Email: ${formData.email}.%0A`;
      if (formData.phone) body += `Teléfono: ${formData.phone}.%0A`;
      if (formData.message) body += `Mensaje: ${formData.message}.%0A`;
    } else {
      body =
        "Me gustaría recibir información sobre sus servicios de transporte.%0A%0AQuedo a la espera de su respuesta.";
    }

    return intro + body;
  };

  const handleWhatsApp = () => {
    // Número real de la empresa (ajústalo según corresponda)
    const phoneNumber = "34643495351"; // Ejemplo: +34 612 345 678 sin espacios ni +
    const message = getMessage(true);
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank");
  };

  const handleEmail = () => {
    const subject = "Contacto desde la web de TransXSur";
    const body = getMessage(true).replace(/%0A/g, "\n"); // Convertir saltos para email
    const mailtoUrl = `mailto:info@transxsur.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <>
      <Seo
        title="Contacto"
        description="Ponte en contacto con TransXSur para solicitar presupuesto o resolver tus dudas. Te responderemos en menos de 24h."
        url="https://www.transxsur.com/contacto"
      />
      <section className="bg-[#1e5939] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Contacto
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Puedes escribirnos directamente por
            WhatsApp o email.
          </p>
        </div>
      </section>

      <Section>
        <div className="max-w-3xl mx-auto">
          {/* Tarjeta de contacto con el dueño */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
            <div className="bg-gradient-to-r from-[#1e5939] to-[#317a45] p-6 text-white">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <FaUser /> Pedro Ernesto Pérez
              </h2>
              <p className="opacity-90">Fundador y transportista</p>
            </div>
            <div className="p-8">
              <p className="text-gray-700 mb-6 text-lg">
                Puedes contactar directamente con Pedro Ernesto. Te atenderá
                personalmente y te dará la mejor solución para tu necesidad de
                transporte.
              </p>

              {/* Botones de contacto destacados */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  onClick={handleWhatsApp}
                  variant="primary"
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 focus:ring-green-600 flex items-center gap-3 flex-1 justify-center text-lg"
                >
                  <FaWhatsapp className="text-2xl" />
                  WhatsApp
                </Button>
                <Button
                  onClick={handleEmail}
                  variant="secondary"
                  size="lg"
                  className="flex items-center gap-3 flex-1 justify-center text-lg"
                >
                  <FaEnvelope className="text-2xl" />
                  Email
                </Button>
              </div>

              {/* Teléfono tradicional (opcional) */}
              <div className="flex items-center justify-center gap-2 text-gray-700 border-t pt-6">
                <FaPhone className="text-[#1e5939]" />
                <span>También puedes llamar al </span>
                <a
                  href="tel:+34643495351"
                  className="font-bold text-[#1e5939] hover:underline"
                >
                  +34 643 49 53 51
                </a>
              </div>
            </div>
          </div>

          {/* Formulario opcional para incluir datos en el mensaje */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-[#1e5939] mb-4">
              ¿Quieres adjuntar información?
            </h3>
            <p className="text-gray-600 mb-6">
              Rellena estos campos y se incluirán automáticamente en el mensaje
              cuando contactes por WhatsApp o email. Si no, se enviará un
              mensaje genérico.
            </p>

            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Tu nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#1e5939] focus:border-[#1e5939]"
                  placeholder="Ej. Juan Pérez"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Tu email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#1e5939] focus:border-[#1e5939]"
                  placeholder="ejemplo@correo.com"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Tu teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#1e5939] focus:border-[#1e5939]"
                  placeholder="+34 612 345 678"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Mensaje (opcional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#1e5939] focus:border-[#1e5939]"
                  placeholder="¿Qué necesitas? (opcional)"
                ></textarea>
              </div>

              <p className="text-sm text-gray-500 italic">
                * Los datos que introduzcas se incluirán en el mensaje de
                WhatsApp o email.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Contact;
