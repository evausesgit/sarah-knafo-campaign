'use client'

import { ShareableCard } from '@/components/charts'
import { Share2 } from 'lucide-react'

const infographies = [
  {
    id: 'polytechnique',
    title: 'Polytechnique - Promotion 2022',
    mainStat: '34%',
    subtitle: 'vivent déjà à l\'étranger',
    description: 'Des jeunes de 24-26 ans qui partent immédiatement. Solution : faire de la France un paradis fiscal.',
    theme: 'red' as const,
    source: 'Enquête insertion X-2022',
  },
  {
    id: 'fonctionnaires',
    title: 'Mairie de Paris',
    mainStat: '55 000',
    subtitle: 'fonctionnaires',
    description: 'C\'est plus que la Commission européenne (32 000) qui gère 450 millions d\'habitants. Paris : 2 millions.',
    theme: 'navy' as const,
    source: 'Ville de Paris',
  },
  {
    id: 'agriculture',
    title: 'Ministère de l\'Agriculture',
    mainStat: '÷2 × 2',
    subtitle: 'Le paradoxe français',
    description: 'En 40 ans : agriculteurs divisés par 2 (1M → 400k), fonctionnaires multipliés par 2 (18k → 36k).',
    theme: 'gold' as const,
    source: 'Min. Agriculture',
  },
  {
    id: 'fiscalite',
    title: 'Prélèvements obligatoires',
    mainStat: '60%',
    subtitle: 'de votre richesse part à l\'État',
    description: 'À partir du 16 du mois, vous ne travaillez plus pour vous mais pour l\'État.',
    theme: 'red' as const,
    source: 'INSEE',
  },
  {
    id: 'milei',
    title: 'La méthode Milei',
    mainStat: '6% → 0%',
    subtitle: 'Déficit résorbé en 12 mois',
    description: 'L\'Argentine avait le même déficit que la France. Milei l\'a supprimé en coupant les dépenses.',
    theme: 'green' as const,
    source: 'FMI 2024',
  },
  {
    id: 'hidalgo',
    title: 'Taxe foncière Paris',
    mainStat: '+60%',
    subtitle: 'd\'augmentation',
    description: 'Et zéro amélioration. La ville n\'est pas plus propre, pas plus sûre. C\'est du vol.',
    theme: 'red' as const,
    source: 'Ville de Paris 2023',
  },
  {
    id: 'dette-paris',
    title: 'Dette de Paris',
    mainStat: '10 Md€',
    subtitle: 'de dette municipale',
    description: 'Paris devrait être la ville la plus riche de France. C\'est devenu un boulet pour le pays.',
    theme: 'navy' as const,
    source: 'Cour des comptes',
  },
  {
    id: 'economie',
    title: 'Programme Sarah Knafo',
    mainStat: '10 Md€',
    subtitle: 'd\'économies proposées',
    description: 'Division par 2 des fonctionnaires, privatisation des services, fin des subventions absurdes.',
    theme: 'gold' as const,
  },
  {
    id: 'taxe-promesse',
    title: 'Ma promesse aux Parisiens',
    mainStat: '÷ 2',
    subtitle: 'Division de la taxe foncière',
    description: 'Et un chèque de remboursement pour chaque Parisien. On vous rend ce qu\'Hidalgo a volé.',
    theme: 'green' as const,
  },
  {
    id: 'de-gaulle',
    title: 'De Gaulle en 1958',
    mainStat: '-14%',
    subtitle: 'de dépenses en 6 mois',
    description: 'Un an plus tard, la France était redressée. Résultat : les Trente Glorieuses.',
    theme: 'navy' as const,
    source: 'Archives nationales',
  },
  {
    id: 'liberation-fiscale',
    title: 'Jour de libération fiscale',
    mainStat: '16 août',
    subtitle: 'France vs 30 avril aux USA',
    description: 'Le jour où vous commencez à travailler pour vous et non pour l\'État.',
    theme: 'red' as const,
    source: 'Institut Molinari',
  },
  {
    id: 'prelevements',
    title: 'Prélèvements : record du monde',
    mainStat: '47%',
    subtitle: 'du PIB prélevé',
    description: 'La France est championne du monde des prélèvements. Suisse : 27%. USA : 27%.',
    theme: 'red' as const,
    source: 'OCDE 2024',
  },
]

export default function PartagerPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero */}
      <section className="bg-reconquete-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Share2 className="h-12 w-12 mx-auto mb-4 text-reconquete-gold" />
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Infographies à partager
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Des visuels percutants pour les réseaux sociaux.
            Survolez une carte pour voir les options de partage.
          </p>
        </div>
      </section>

      {/* Grid de cartes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {infographies.map((info) => (
            <ShareableCard
              key={info.id}
              title={info.title}
              mainStat={info.mainStat}
              subtitle={info.subtitle}
              description={info.description}
              theme={info.theme}
              source={info.source}
            />
          ))}
        </div>
      </section>

      {/* Instructions */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-reconquete-navy mb-6">
            Comment partager ?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="w-12 h-12 bg-reconquete-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-reconquete-navy">1</span>
              </div>
              <h3 className="font-semibold mb-2">Survolez une carte</h3>
              <p className="text-text-secondary text-sm">
                Les boutons de partage apparaissent en bas
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-reconquete-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-reconquete-navy">2</span>
              </div>
              <h3 className="font-semibold mb-2">Choisissez le réseau</h3>
              <p className="text-text-secondary text-sm">
                Twitter/X, Facebook ou copier le lien
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-reconquete-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-reconquete-navy">3</span>
              </div>
              <h3 className="font-semibold mb-2">Partagez !</h3>
              <p className="text-text-secondary text-sm">
                Le message et le lien sont préparés automatiquement
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
