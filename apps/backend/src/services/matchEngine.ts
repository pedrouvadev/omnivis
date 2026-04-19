import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Função para calcular distância entre dois pontos (Haversine)
export function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Raio da Terra em km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// Encontrar transportadores próximos a um doador
export const findTransportadores = async (doadorLocation: string, radiusKm: number = 5) => {
  const [doadorLat, doadorLng] = doadorLocation.split(',').map(Number);
  
  const transportadores = await prisma.voluntario.findMany({
    where: {
      disponibilidades: {
        some: {
          tipo: 'Transporte',
        },
      },
    },
    include: {
      disponibilidades: true,
    },
  });
  
  const comDistancia = transportadores.map((v: any) => {
    const [volLat, volLng] = v.localizacao.split(',').map(Number);
    return {
      ...v,
      distance: calculateDistance(doadorLat, doadorLng, volLat, volLng),
    };
  });
  
  return comDistancia
    .filter((v: any) => v.distance <= radiusKm)
    .sort((a: any, b: any) => a.distance - b.distance);
};

// Encontrar voluntários por competência e localização
export const findVoluntariosPorCompetencia = async (
  tipo: string,
  location: string,
  radiusKm: number = 10
) => {
  const [centerLat, centerLng] = location.split(',').map(Number);
  
  const voluntarios = await prisma.voluntario.findMany({
    where: {
      disponibilidades: {
        some: { tipo },
      },
    },
    include: {
      disponibilidades: true,
    },
  });
  
  const comDistancia = voluntarios.map((v: any) => {
    const [volLat, volLng] = v.localizacao.split(',').map(Number);
    return {
      ...v,
      distance: calculateDistance(centerLat, centerLng, volLat, volLng),
    };
  });
  
  return comDistancia
    .filter((v: any) => v.distance <= radiusKm)
    .sort((a: any, b: any) => a.distance - b.distance);
};
