// Función simple para calcular presupuesto estimado
// Basado en distancia, tipo de servicio y peso aproximado
export const calculateQuote = (serviceType, distance, weight, urgent) => {
  // Tarifas base por tipo de servicio (puedes ajustar)
  const baseRates = {
    mudanza: 50,
    mercancia: 40,
    mensajeria: 20,
    flete: 60,
    alquiler: 80,
    ultimamilla: 30,
    medida: 70,
  };

  const base = baseRates[serviceType] || 50;
  const distanceCost = distance * 0.8; // 0.8€ por km
  const weightCost = weight * 0.1; // 0.1€ por kg
  const urgentCost = urgent ? 20 : 0;

  const total = base + distanceCost + weightCost + urgentCost;
  return Math.round(total * 100) / 100; // redondear a 2 decimales
};
