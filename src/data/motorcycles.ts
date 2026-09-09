import type { Motorcycle } from '../types';

export const MOTORCYCLES_DATA: Motorcycle[] = [
  {
    id: 'kawa-ninja-demo',
    brand: 'Kawasaki',
    model: 'Ninja Series Sport',
    category: 'Sport',
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=1200&auto=format&fit=crop',
    description: 'Diseño aerodinámico de alto rendimiento, tecnología de inyección avanzada y agilidad excepcional.',
    specs: {
      displacement: 'Consulte ficha técnica',
      engine: 'Refrigerado por líquido',
      transmission: 'Mecánica 6 velocidades'
    },
    featured: true
  },
  {
    id: 'kawa-z-demo',
    brand: 'Kawasaki',
    model: 'Z Series Supernaked',
    category: 'Naked',
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1200&auto=format&fit=crop',
    description: 'Estilo agresivo Sugomi, postura de manejo erguida e imponente aceleración para la ciudad y carretera.',
    specs: {
      displacement: 'Consulte ficha técnica',
      engine: '4 tiempos multi-cilindro',
      transmission: 'Mecánica'
    },
    featured: true
  },
  {
    id: 'benelli-tnt-demo',
    brand: 'Benelli',
    model: 'TNT Series Naked',
    category: 'Naked',
    image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?q=80&w=1200&auto=format&fit=crop',
    description: 'Ingeniería y herencia italiana con chasis multitubular expuesto y sonido inconfundible.',
    specs: {
      displacement: 'Consulte disponibilidad',
      engine: 'Inyección electrónica',
      transmission: 'Mecánica 6 velocidades'
    },
    featured: true
  },
  {
    id: 'benelli-trk-demo',
    brand: 'Benelli',
    model: 'TRK Series Aventura',
    category: 'Aventura / Touring',
    image: 'https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?q=80&w=1200&auto=format&fit=crop',
    description: 'Ergonomía touring para largas distancias, protección aerodinámica y suspensiones de gran recorrido.',
    specs: {
      displacement: 'Consulte disponibilidad',
      engine: 'Bicilíndrico DOHC',
      transmission: 'Mecánica'
    },
    featured: false
  },
  {
    id: 'kymco-agility-demo',
    brand: 'Kymco',
    model: 'Agility / X-Town Series',
    category: 'Scooter Urbana',
    image: 'https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?q=80&w=1200&auto=format&fit=crop',
    description: 'Eficiencia de combustible insuperable, amplio baúl bajo el asiento y transmisión automática fluida.',
    specs: {
      displacement: 'Consulte versión',
      engine: '4 tiempos OHC',
      transmission: 'Automática CVT'
    },
    featured: true
  },
  {
    id: 'kymco-downtown-demo',
    brand: 'Kymco',
    model: 'Maxi Scooter Confort',
    category: 'Maxi Scooter',
    image: 'https://images.unsplash.com/photo-1525160354320-d8e92641c563?q=80&w=1200&auto=format&fit=crop',
    description: 'El equilibrio entre elegancia ejecutiva, frenos ABS y máxima comodidad para trayectos intermunicipales.',
    specs: {
      displacement: 'Consulte versión',
      engine: 'Inyección electrónica',
      transmission: 'Automática'
    },
    featured: false
  },
  {
    id: 'victory-black-demo',
    brand: 'Victory',
    model: 'Black Series Street',
    category: 'Calle / Urbana',
    image: 'https://images.unsplash.com/photo-1571188654248-7a89213915f7?q=80&w=1200&auto=format&fit=crop',
    description: 'Resistencia, agilidad en el tráfico de Medellín y un costo de mantenimiento sumamente accesible.',
    specs: {
      displacement: 'Consulte catálogo',
      engine: 'Monocilíndrico 4T',
      transmission: 'Mecánica 5 velocidades'
    },
    featured: true
  },
  {
    id: 'victory-nitro-demo',
    brand: 'Victory',
    model: 'Nitro Series Sport',
    category: 'Sport Urbana',
    image: 'https://images.unsplash.com/photo-1615172282427-9a57ef2d142e?q=80&w=1200&auto=format&fit=crop',
    description: 'Líneas deportivas juveniles, iluminación LED y excelente respuesta para el día a día.',
    specs: {
      displacement: 'Consulte catálogo',
      engine: 'Monocilíndrico',
      transmission: 'Mecánica'
    },
    featured: false
  },
  {
    id: 'starker-electric-bike',
    brand: 'Stärker',
    model: 'E-Mobility Scooter & Bike',
    category: 'Eléctrica / Movilidad Cero Emisiones',
    image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1200&auto=format&fit=crop',
    description: 'Movilidad 100% eléctrica sin pico y placa. Batería de litio extraíble, bajo costo por km y cero emisiones.',
    specs: {
      displacement: 'Motor Eléctrico Brushless',
      engine: 'Batería de Litio',
      transmission: 'Automática directa'
    },
    featured: true
  }
];
