export const satisfactionTransports = [
  { name: 'Métro', satisfaction: 62, ponctualite: 91 },
  { name: 'Bus', satisfaction: 48, ponctualite: 72 },
  { name: 'RER', satisfaction: 38, ponctualite: 85 },
  { name: 'Tramway', satisfaction: 71, ponctualite: 94 },
  { name: 'Vélib\'', satisfaction: 55, ponctualite: null },
]

export const evolutionCirculation = [
  { name: '2015', voitures: 100, velos: 100, pietons: 100 },
  { name: '2016', voitures: 98, velos: 115, pietons: 102 },
  { name: '2017', voitures: 95, velos: 135, pietons: 105 },
  { name: '2018', voitures: 90, velos: 160, pietons: 108 },
  { name: '2019', voitures: 85, velos: 195, pietons: 112 },
  { name: '2020', voitures: 65, velos: 240, pietons: 90 },
  { name: '2021', voitures: 72, velos: 280, pietons: 105 },
  { name: '2022', voitures: 68, velos: 310, pietons: 115 },
  { name: '2023', voitures: 62, velos: 350, pietons: 118 },
  { name: '2024', voitures: 58, velos: 385, pietons: 120 },
]

export const repartitionModale = [
  { name: 'Transports en commun', value: 37, color: '#1B2A4E' },
  { name: 'Marche', value: 34, color: '#D4AF37' },
  { name: 'Voiture', value: 13, color: '#E63946' },
  { name: 'Vélo', value: 11, color: '#48BB78' },
  { name: 'Deux-roues motorisés', value: 5, color: '#718096' },
]

export const proprete = [
  { name: '2018', note: 12.5, satisfaction: 42 },
  { name: '2019', note: 12.1, satisfaction: 39 },
  { name: '2020', note: 11.8, satisfaction: 36 },
  { name: '2021', note: 11.2, satisfaction: 32 },
  { name: '2022', note: 10.8, satisfaction: 28 },
  { name: '2023', note: 10.5, satisfaction: 25 },
  { name: '2024', note: 10.2, satisfaction: 22 },
]

export const comparaisonProprete = [
  { name: 'Zurich', note: 18.2 },
  { name: 'Vienne', note: 17.5 },
  { name: 'Madrid', note: 15.8 },
  { name: 'Berlin', note: 14.2 },
  { name: 'Rome', note: 11.5 },
  { name: 'Paris', note: 10.2 },
]

export const transportStats = {
  tempsTrajetMoyen: 42,
  bouchonsJour: 145,
  stationsMetro: 308,
  kmPistesCyclables: 1200,
  satisfactionProprete: 22,
  budgetProprete: 750000000,
}
