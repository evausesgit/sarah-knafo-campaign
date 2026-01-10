'use client'

import Link from 'next/link'
import {
  Shield,
  Wallet,
  Home,
  Train,
  Users,
  Calendar,
  ArrowRight,
  ChevronRight,
  CheckCircle,
} from 'lucide-react'
import { StatCard } from '@/components/charts'

const priorities = [
  {
    icon: Shield,
    title: 'Sécurité',
    description: 'Restaurer l\'ordre et la tranquillité dans tous les quartiers',
    stats: '+42% de criminalité en 5 ans',
    color: 'red' as const,
  },
  {
    icon: Wallet,
    title: 'Finances',
    description: 'Réduire la dette et baisser les impôts locaux',
    stats: '8,5 Md€ de dette',
    color: 'navy' as const,
  },
  {
    icon: Home,
    title: 'Logement',
    description: 'Rendre le logement accessible aux classes moyennes',
    stats: '165 000 logements vacants',
    color: 'gold' as const,
  },
  {
    icon: Train,
    title: 'Transports',
    description: 'Des transports propres, ponctuels et sécurisés',
    stats: '42 min de trajet moyen',
    color: 'navy' as const,
  },
]

const keyFigures = [
  { value: 196000, label: 'Faits de délinquance par an', unit: '' },
  { value: 8.5, label: 'Milliards de dette', unit: 'Md€' },
  { value: 22, label: 'Satisfaction propreté', unit: '%' },
  { value: 285000, label: 'Demandeurs de logement social', unit: '' },
]

const engagements = [
  'Tripler les effectifs de police municipale',
  'Geler les impôts locaux pendant 6 ans',
  'Créer 10 000 logements par an pour les Parisiens',
  'Nettoyer Paris en 100 jours',
  'Supprimer les pistes cyclables dangereuses',
  'Rouvrir les voies sur berge',
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-reconquete-navy text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-reconquete-navy-dark to-reconquete-navy" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-reconquete-red text-white text-sm font-semibold px-4 py-1 rounded-full mb-6">
                Élections municipales 2026
              </span>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
                Pour Paris,
                <br />
                <span className="text-reconquete-gold">Pour la France</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-lg">
                Sarah Knafo, candidate à la mairie de Paris.
                Ensemble, redressons notre capitale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/engagement" className="btn-secondary inline-flex items-center justify-center gap-2">
                  Je soutiens la campagne
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link href="/donnees" className="btn-outline border-white text-white hover:bg-white hover:text-reconquete-navy inline-flex items-center justify-center gap-2">
                  Voir les données
                </Link>
              </div>
            </div>

            {/* Countdown or Key Figure */}
            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <p className="text-reconquete-gold font-semibold mb-4">Chiffre clé</p>
                <p className="text-6xl font-bold mb-2">+42%</p>
                <p className="text-xl text-gray-300">
                  de criminalité à Paris en 5 ans
                </p>
                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="text-sm text-gray-400 mb-2">Et aussi...</p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-reconquete-gold" />
                      8,5 milliards de dette
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-reconquete-gold" />
                      22% de satisfaction propreté
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-reconquete-gold" />
                      165 000 logements vacants
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Priorities Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Mes priorités pour Paris</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Quatre axes majeurs pour redonner à Paris sa grandeur
              et offrir aux Parisiens la qualité de vie qu'ils méritent.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {priorities.map((priority, index) => (
              <Link
                key={priority.title}
                href={`/programme/${priority.title.toLowerCase()}`}
                className="card group hover:border-reconquete-navy border-2 border-transparent"
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                  priority.color === 'red' ? 'bg-reconquete-red/10 text-reconquete-red' :
                  priority.color === 'gold' ? 'bg-reconquete-gold/10 text-reconquete-gold' :
                  'bg-reconquete-navy/10 text-reconquete-navy'
                }`}>
                  <priority.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-reconquete-navy mb-2 group-hover:text-reconquete-red transition-colors">
                  {priority.title}
                </h3>
                <p className="text-text-secondary mb-4">
                  {priority.description}
                </p>
                <p className="text-sm font-semibold text-reconquete-red">
                  {priority.stats}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Engagements Section */}
      <section className="py-20 bg-reconquete-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Mes engagements
              </h2>
              <p className="text-gray-300 mb-8">
                Des mesures concrètes, chiffrées et réalisables pour transformer Paris
                dès les premiers jours de mon mandat.
              </p>
              <ul className="space-y-4">
                {engagements.map((engagement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-reconquete-gold flex-shrink-0 mt-0.5" />
                    <span>{engagement}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/programme"
                className="mt-8 inline-flex items-center gap-2 text-reconquete-gold hover:text-white transition-colors font-semibold"
              >
                Voir le programme complet
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {keyFigures.map((figure, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                >
                  <p className="text-3xl font-bold text-white mb-1">
                    {typeof figure.value === 'number' && figure.value >= 1000
                      ? figure.value.toLocaleString('fr-FR')
                      : figure.value}
                    {figure.unit && <span className="text-lg ml-1">{figure.unit}</span>}
                  </p>
                  <p className="text-gray-400 text-sm">{figure.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-reconquete-navy to-reconquete-navy-light rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Rejoignez le mouvement
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Ensemble, nous pouvons changer Paris. Votre engagement fait la différence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/engagement/benevole" className="btn-secondary">
                <Users className="h-5 w-5 mr-2 inline" />
                Devenir bénévole
              </Link>
              <Link href="/engagement/don" className="btn-outline border-white text-white hover:bg-white hover:text-reconquete-navy">
                Faire un don
              </Link>
              <Link href="/engagement/newsletter" className="btn-outline border-white text-white hover:bg-white hover:text-reconquete-navy">
                <Calendar className="h-5 w-5 mr-2 inline" />
                Newsletter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Data Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Paris en chiffres</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Des données objectives pour comprendre l'état de notre ville.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard
              title="Criminalité"
              value={196000}
              description="Faits constatés par an"
              color="red"
              trend={{ value: 42, label: 'en 5 ans', direction: 'up', isPositive: false }}
            />
            <StatCard
              title="Dette municipale"
              value={8500000000}
              unit="€"
              description="Record historique"
              color="navy"
            />
            <StatCard
              title="Logements vacants"
              value={165000}
              description="Inoccupés à Paris"
              color="gold"
            />
            <StatCard
              title="Satisfaction propreté"
              value={22}
              unit="%"
              description="Niveau historiquement bas"
              color="red"
            />
          </div>

          <div className="text-center">
            <Link
              href="/donnees"
              className="btn-primary inline-flex items-center gap-2"
            >
              Explorer toutes les données
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
