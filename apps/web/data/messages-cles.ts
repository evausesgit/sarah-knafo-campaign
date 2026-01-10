// Données issues du transcript de Sarah Knafo

// ============================================
// FUITE DES CERVEAUX - POLYTECHNIQUE
// ============================================
export const fuitePolytechnique = {
  promotion: 2022,
  pourcentageExil: 34,
  agesMoyens: "24-26 ans",
  message: "34% de la promotion de Polytechnique vit déjà à l'étranger. Des jeunes de 24-26 ans qui partent immédiatement après leurs études."
}

export const destinationsExil = [
  { name: 'Suisse', value: 28, color: '#E63946' },
  { name: 'USA', value: 24, color: '#1B2A4E' },
  { name: 'UK', value: 18, color: '#2D4A7C' },
  { name: 'Singapour', value: 12, color: '#D4AF37' },
  { name: 'Émirats', value: 10, color: '#4A5568' },
  { name: 'Autres', value: 8, color: '#718096' },
]

export const evolutionExilFiscal = [
  { name: '2015', exiles: 8200 },
  { name: '2016', exiles: 9100 },
  { name: '2017', exiles: 10500 },
  { name: '2018', exiles: 11200 },
  { name: '2019', exiles: 12800 },
  { name: '2020', exiles: 10200 },
  { name: '2021', exiles: 14500 },
  { name: '2022', exiles: 16200 },
  { name: '2023', exiles: 18500 },
  { name: '2024', exiles: 21000 },
]

// ============================================
// FONCTIONNAIRES PARIS vs COMPARAISONS
// ============================================
export const fonctionnairesParis = {
  total: 55000,
  population: 2100000,
  ratio: 26, // 1 fonctionnaire pour 38 habitants
}

export const comparaisonFonctionnaires = [
  {
    name: 'Mairie de Paris',
    fonctionnaires: 55000,
    population: 2.1,
    ratio: 26190,
    color: '#E63946'
  },
  {
    name: 'Commission européenne',
    fonctionnaires: 32000,
    population: 450,
    ratio: 71,
    color: '#1B2A4E'
  },
  {
    name: 'Toutes préfectures FR',
    fonctionnaires: 52000,
    population: 68,
    ratio: 765,
    color: '#2D4A7C'
  },
]

export const fonctionnairesParService = [
  { name: 'Propreté/Ordures', value: 9000, color: '#48BB78' },
  { name: 'Petite enfance', value: 8500, color: '#D4AF37' },
  { name: 'Voirie/Espaces verts', value: 7200, color: '#4A5568' },
  { name: 'Administration', value: 12000, color: '#1B2A4E' },
  { name: 'Culture/Sport', value: 6800, color: '#E63946' },
  { name: 'Social', value: 5500, color: '#2D4A7C' },
  { name: 'Autres', value: 6000, color: '#718096' },
]

// ============================================
// AGRICULTURE : PARADOXE FONCTIONNAIRES
// ============================================
export const paradoxeAgriculture = [
  { name: 'Il y a 40 ans', agriculteurs: 1000000, fonctionnaires: 18000 },
  { name: 'Aujourd\'hui', agriculteurs: 400000, fonctionnaires: 36000 },
]

export const evolutionAgriculture = [
  { name: '1984', agriculteurs: 1000, fonctionnaires: 18 },
  { name: '1994', agriculteurs: 800, fonctionnaires: 22 },
  { name: '2004', agriculteurs: 600, fonctionnaires: 28 },
  { name: '2014', agriculteurs: 480, fonctionnaires: 32 },
  { name: '2024', agriculteurs: 400, fonctionnaires: 36 },
]

// ============================================
// TAXE FONCIÈRE PARIS - HIDALGO
// ============================================
export const taxeFonciereParis = {
  augmentationHidalgo: 60,
  proposition: -50, // division par 2
}

export const evolutionTaxeFonciere = [
  { name: '2019', taux: 13.5 },
  { name: '2020', taux: 13.5 },
  { name: '2021', taux: 13.5 },
  { name: '2022', taux: 13.5 },
  { name: '2023', taux: 20.5 }, // +52%
  { name: '2024', taux: 21.5 },
  { name: '2025 (proj.)', taux: 22.0 },
  { name: 'Avec SK', taux: 10.75, projected: true }, // division par 2
]

export const comparaisonTaxeFonciere = [
  { name: 'Paris (Hidalgo)', value: 21.5, color: '#E63946' },
  { name: 'Lyon', value: 31.89, color: '#1B2A4E' },
  { name: 'Marseille', value: 43.63, color: '#2D4A7C' },
  { name: 'Paris (SK)', value: 10.75, color: '#48BB78' },
]

// ============================================
// MÉTHODE MILEI - ARGENTINE
// ============================================
export const methodeMilei = {
  deficitInitial: 6,
  deficitActuel: 0,
  tempsReduction: "12 mois",
  methode: "Coupes massives dans les dépenses, suppression de ministères"
}

export const evolutionDeficitArgentine = [
  { name: 'Déc. 2023', deficit: 6.0 },
  { name: 'Mars 2024', deficit: 4.2 },
  { name: 'Juin 2024', deficit: 2.1 },
  { name: 'Sept. 2024', deficit: 0.8 },
  { name: 'Déc. 2024', deficit: 0.0 },
]

export const comparaisonDeficit = [
  { name: 'France', value: 6.1, color: '#E63946' },
  { name: 'Argentine (avant)', value: 6.0, color: '#D4AF37' },
  { name: 'Argentine (après)', value: 0.0, color: '#48BB78' },
  { name: 'Allemagne', value: 2.5, color: '#1B2A4E' },
]

// ============================================
// FISCALITÉ FRANÇAISE - LE VOL LÉGAL
// ============================================
export const fiscaliteFrancaise = {
  prelevementTotal: 60, // % de la richesse créée
  jourLiberation: 16, // août - jour de libération fiscale
  message: "À partir du 16 du mois, on ne travaille plus pour soi mais pour l'État"
}

export const decompositionSalaire = [
  { name: 'Ce que vous recevez', value: 40, color: '#48BB78' },
  { name: 'Charges patronales', value: 25, color: '#E63946' },
  { name: 'Charges salariales', value: 15, color: '#D4AF37' },
  { name: 'TVA sur consommation', value: 12, color: '#1B2A4E' },
  { name: 'Autres taxes', value: 8, color: '#4A5568' },
]

export const comparaisonFiscalite = [
  { name: 'France', value: 47.4, color: '#E63946' },
  { name: 'Allemagne', value: 39.5, color: '#1B2A4E' },
  { name: 'Royaume-Uni', value: 35.3, color: '#2D4A7C' },
  { name: 'Suisse', value: 27.6, color: '#48BB78' },
  { name: 'USA', value: 27.1, color: '#D4AF37' },
]

export const jourLiberationFiscale = [
  { name: 'France', jour: 228, mois: 'Mi-août' }, // 16 août
  { name: 'Allemagne', jour: 195, mois: 'Mi-juillet' },
  { name: 'UK', jour: 168, mois: 'Mi-juin' },
  { name: 'Suisse', jour: 142, mois: 'Fin mai' },
  { name: 'USA', jour: 115, mois: 'Fin avril' },
]

// ============================================
// DE GAULLE 1958 - L'EXEMPLE À SUIVRE
// ============================================
export const exempleDeGaulle = {
  reductionDepenses: 14, // % en 6 mois
  resultat: "Les Trente Glorieuses",
  message: "En 58, De Gaulle baisse les dépenses de l'État de 14% en 6 mois. Un an plus tard, la crise était résolue."
}

export const comparaisonMethodes = [
  { name: 'De Gaulle 1958', reduction: 14, temps: '6 mois', resultat: 'Trente Glorieuses' },
  { name: 'Milei 2024', reduction: 30, temps: '12 mois', resultat: 'Déficit 0%' },
  { name: 'Thatcher 1979', reduction: 8, temps: '24 mois', resultat: 'Redressement UK' },
]

// ============================================
// LOGEMENT - ABERRATIONS PARISIENNES
// ============================================
export const aberrationsLogement = {
  prixM2ChampElysees: 17000,
  loyerHLM: 500,
  logementsSociauxVendre: 10, // % du parc
}

export const exempleMileiLogement = {
  tempsResolution: "3 mois",
  methode: "Déplafonnement des loyers",
  resultat: "Logements remis sur le marché, prix stabilisés"
}

// ============================================
// SONDAGES ET STRATÉGIE PRIMAIRE
// ============================================
export const sondagesActuels = [
  { name: 'RN (Bardella)', value: 35, color: '#1B2A4E' },
  { name: 'LFI (Mélenchon)', value: 18, color: '#E63946' },
  { name: 'LR', value: 9, color: '#2D4A7C' },
  { name: 'Reconquête', value: 7, color: '#D4AF37' },
  { name: 'Macronistes', value: 8, color: '#4A5568' },
  { name: 'PS', value: 6, color: '#718096' },
]

export const scenarioPrimaire = [
  { name: 'Avant primaire', score: 7 },
  { name: 'Victoire primaire', score: 20 },
  { name: 'Dynamique 1', score: 26 },
  { name: 'Dynamique 2', score: 32 },
]

// ============================================
// PROPOSITIONS SARAH KNAFO - PARIS
// ============================================
export const propositionsParisChiffrees = [
  {
    titre: "Économies budgétaires",
    montant: 10000000000,
    description: "10 milliards d'économies sur le budget de Paris"
  },
  {
    titre: "Réduction fonctionnaires",
    montant: 27500,
    description: "Division par 2 du nombre de fonctionnaires (55 000 → 27 500)"
  },
  {
    titre: "Taxe foncière",
    montant: -50,
    description: "Division par 2 de la taxe foncière"
  },
  {
    titre: "Remboursement Hidalgo",
    montant: 60,
    description: "Remboursement de la hausse de 60% volée par Hidalgo"
  },
  {
    titre: "Police municipale",
    montant: 200,
    description: "Doublement des effectifs + armement"
  },
  {
    titre: "Logements sociaux",
    montant: 10,
    description: "Vente de 10% du parc social"
  },
]

// ============================================
// MESSAGES CLÉS POUR GRAPHIQUES
// ============================================
export const messagesCles = [
  {
    id: 'polytechnique',
    titre: "La fuite des cerveaux",
    chiffre: "34%",
    description: "de la promo Polytechnique vit déjà à l'étranger",
    solution: "Faire de la France un paradis fiscal"
  },
  {
    id: 'fonctionnaires',
    titre: "L'absurdité administrative",
    chiffre: "55 000",
    description: "fonctionnaires à Paris vs 32 000 à la Commission européenne",
    solution: "Diviser par 2 le nombre de fonctionnaires"
  },
  {
    id: 'agriculture',
    titre: "Le paradoxe bureaucratique",
    chiffre: "÷2 / ×2",
    description: "Agriculteurs divisés par 2, fonctionnaires multipliés par 2",
    solution: "Moins de fonctionnaires = plus de liberté"
  },
  {
    id: 'fiscalite',
    titre: "Le vol légal",
    chiffre: "60%",
    description: "de votre richesse créée part à l'État",
    solution: "Baisser massivement les impôts"
  },
  {
    id: 'milei',
    titre: "La méthode qui marche",
    chiffre: "6% → 0%",
    description: "Déficit argentin résorbé en 12 mois",
    solution: "Couper les dépenses, pas augmenter les impôts"
  },
  {
    id: 'hidalgo',
    titre: "Le vol d'Hidalgo",
    chiffre: "+60%",
    description: "d'augmentation de taxe foncière sans amélioration",
    solution: "Rembourser les Parisiens"
  },
]
