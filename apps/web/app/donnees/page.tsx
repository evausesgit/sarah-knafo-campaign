'use client'

import { useState } from 'react'
import {
  Wallet,
  Shield,
  Home,
  Train,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  Euro,
  Users,
  Building
} from 'lucide-react'
import { BarChart, LineChart, PieChart, StatCard } from '@/components/charts'
import {
  budgetRepartition,
  budgetEvolution,
  comparaisonVilles,
  budgetStats,
  criminaliteParArrondissement,
  evolutionCriminalite,
  typesDelits,
  comparaisonCapitales,
  securiteStats,
  prixM2ParArrondissement,
  evolutionPrix,
  repartitionLogement,
  logementsVacants,
  logementStats,
  satisfactionTransports,
  evolutionCirculation,
  repartitionModale,
  proprete,
  comparaisonProprete,
  transportStats,
} from '@/data'

const tabs = [
  { id: 'budget', name: 'Budget', icon: Wallet },
  { id: 'securite', name: 'Sécurité', icon: Shield },
  { id: 'logement', name: 'Logement', icon: Home },
  { id: 'transports', name: 'Transports', icon: Train },
]

export default function DonneesPage() {
  const [activeTab, setActiveTab] = useState('budget')

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-reconquete-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Paris en chiffres
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Des données claires et objectives pour comprendre l'état de notre ville
            et les défis à relever pour redresser Paris.
          </p>
        </div>
      </section>

      {/* Tabs Navigation */}
      <div className="sticky top-16 bg-white border-b border-gray-200 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8 overflow-x-auto" aria-label="Thématiques">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'border-reconquete-red text-reconquete-navy'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="h-5 w-5" />
                {tab.name}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {activeTab === 'budget' && <BudgetSection />}
        {activeTab === 'securite' && <SecuriteSection />}
        {activeTab === 'logement' && <LogementSection />}
        {activeTab === 'transports' && <TransportsSection />}
      </div>
    </div>
  )
}

function BudgetSection() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="mb-8">
        <h2 className="section-title">Budget municipal de Paris</h2>
        <p className="text-text-secondary">
          Paris dispose du budget le plus élevé de France, mais aussi de la dette la plus lourde.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Budget total"
          value={budgetStats.budgetTotal}
          unit="€"
          icon={<Euro className="h-6 w-6" />}
          color="navy"
          description="Budget primitif 2025"
        />
        <StatCard
          title="Dette de la ville"
          value={budgetStats.detteTotal}
          unit="€"
          icon={<TrendingUp className="h-6 w-6" />}
          color="red"
          trend={{ value: 47, label: 'depuis 2014', direction: 'up', isPositive: false }}
        />
        <StatCard
          title="Dépense par habitant"
          value={budgetStats.depenseParHabitant}
          unit="€"
          icon={<Users className="h-6 w-6" />}
          color="gold"
          description="Record national"
        />
        <StatCard
          title="Hausse impôts locaux"
          value={budgetStats.augmentationImpots}
          unit="%"
          prefix="+"
          icon={<AlertTriangle className="h-6 w-6" />}
          color="red"
          description="Depuis 2014"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <PieChart
          data={budgetRepartition}
          title="Répartition du budget"
          subtitle="Par poste de dépenses (en millions €)"
          unit="M€"
          innerRadius={60}
        />
        <LineChart
          data={budgetEvolution}
          title="Évolution budget et dette"
          subtitle="En millions d'euros"
          lines={[
            { dataKey: 'budget', name: 'Budget', color: '#1B2A4E' },
            { dataKey: 'dette', name: 'Dette', color: '#E63946', dashed: true },
          ]}
          unit="M€"
        />
      </div>

      <BarChart
        data={comparaisonVilles.map((v, i) => ({ ...v, value: v.depenseHab }))}
        title="Dépense par habitant : Paris vs autres grandes villes"
        subtitle="En euros par habitant par an"
        unit="€"
        highlightIndex={0}
      />

      {/* Key Message */}
      <div className="bg-reconquete-red/10 border-l-4 border-reconquete-red p-6 rounded-r-lg">
        <h3 className="font-bold text-reconquete-navy text-lg mb-2">
          Le constat de Sarah Knafo
        </h3>
        <p className="text-text-secondary">
          "Paris est la ville la plus endettée de France et celle qui dépense le plus par habitant.
          Malgré cela, les services publics se dégradent. Il est temps de remettre de l'ordre
          dans les finances de notre capitale et de faire en sorte que chaque euro dépensé
          serve réellement les Parisiens."
        </p>
      </div>
    </div>
  )
}

function SecuriteSection() {
  const top5Arrondissements = [...criminaliteParArrondissement]
    .sort((a, b) => b.faits - a.faits)
    .slice(0, 5)
    .map(a => ({ name: a.name, value: a.faits }))

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="mb-8">
        <h2 className="section-title">Sécurité à Paris</h2>
        <p className="text-text-secondary">
          La criminalité ne cesse d'augmenter dans la capitale, avec des disparités importantes entre arrondissements.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Faits constatés"
          value={securiteStats.totalFaits}
          icon={<AlertTriangle className="h-6 w-6" />}
          color="red"
          description="Par an à Paris"
        />
        <StatCard
          title="Hausse en 5 ans"
          value={securiteStats.augmentation5ans}
          unit="%"
          prefix="+"
          icon={<TrendingUp className="h-6 w-6" />}
          color="red"
          trend={{ value: 42, label: 'depuis 2019', direction: 'up', isPositive: false }}
        />
        <StatCard
          title="Agressions par jour"
          value={securiteStats.agressionJour}
          icon={<Shield className="h-6 w-6" />}
          color="navy"
          description="Moyenne quotidienne"
        />
        <StatCard
          title="Taux d'élucidation"
          value={securiteStats.tauxElucidation}
          unit="%"
          icon={<TrendingDown className="h-6 w-6" />}
          color="gold"
          description="Parmi les plus bas"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <BarChart
          data={top5Arrondissements}
          title="Les 5 arrondissements les plus touchés"
          subtitle="Nombre de faits constatés par an"
          highlightIndex={0}
        />
        <PieChart
          data={typesDelits}
          title="Types de délits"
          subtitle="Répartition par catégorie"
        />
      </div>

      <LineChart
        data={evolutionCriminalite}
        title="Évolution de la criminalité à Paris"
        subtitle="Par type de délit (nombre de faits)"
        lines={[
          { dataKey: 'vols', name: 'Vols', color: '#1B2A4E' },
          { dataKey: 'agressions', name: 'Agressions', color: '#E63946' },
          { dataKey: 'cambriolages', name: 'Cambriolages', color: '#D4AF37' },
        ]}
      />

      <BarChart
        data={comparaisonCapitales.map(c => ({ name: c.name, value: c.tauxCriminalite }))}
        title="Taux de criminalité : Paris vs capitales européennes"
        subtitle="Pour 1 000 habitants"
        highlightIndex={0}
        colors={{ primary: '#1B2A4E', secondary: '#E63946' }}
      />

      {/* Key Message */}
      <div className="bg-reconquete-red/10 border-l-4 border-reconquete-red p-6 rounded-r-lg">
        <h3 className="font-bold text-reconquete-navy text-lg mb-2">
          Le constat de Sarah Knafo
        </h3>
        <p className="text-text-secondary">
          "Les Parisiens ne se sentent plus en sécurité dans leur propre ville.
          La délinquance explose, les agressions se multiplient, et les forces de l'ordre
          manquent cruellement de moyens. Je m'engage à faire de la sécurité la priorité
          absolue de mon mandat."
        </p>
      </div>
    </div>
  )
}

function LogementSection() {
  const topPrix = [...prixM2ParArrondissement]
    .sort((a, b) => b.prix - a.prix)
    .slice(0, 6)
    .map(a => ({ name: a.name + ' arr.', value: a.prix }))

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="mb-8">
        <h2 className="section-title">Logement à Paris</h2>
        <p className="text-text-secondary">
          Se loger à Paris est devenu un luxe inaccessible pour la classe moyenne.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Prix moyen au m²"
          value={logementStats.prixMoyenM2}
          unit="€"
          icon={<Building className="h-6 w-6" />}
          color="navy"
        />
        <StatCard
          title="Logements vacants"
          value={logementStats.logementsVacants}
          icon={<Home className="h-6 w-6" />}
          color="red"
          description="Scandaleusement vides"
        />
        <StatCard
          title="Locations Airbnb"
          value={logementStats.airbnb}
          icon={<TrendingUp className="h-6 w-6" />}
          color="gold"
          description="Retirées du marché"
        />
        <StatCard
          title="Demandeurs HLM"
          value={logementStats.attenteLogementSocial}
          icon={<Users className="h-6 w-6" />}
          color="red"
          description="En attente"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <BarChart
          data={topPrix}
          title="Prix au m² par arrondissement"
          subtitle="Les 6 arrondissements les plus chers"
          unit="€"
        />
        <PieChart
          data={repartitionLogement}
          title="Répartition des logements"
          subtitle="Par type d'occupation"
          showLabels
        />
      </div>

      <LineChart
        data={evolutionPrix}
        title="Évolution des prix immobiliers"
        subtitle="Prix moyen au m² (base 100 en 2015)"
        lines={[
          { dataKey: 'paris', name: 'Paris', color: '#E63946' },
          { dataKey: 'moyenne', name: 'Moyenne nationale', color: '#1B2A4E', dashed: true },
        ]}
        unit="€"
      />

      <LineChart
        data={logementsVacants}
        title="Logements vacants vs Airbnb"
        subtitle="Évolution depuis 2015"
        lines={[
          { dataKey: 'vacants', name: 'Logements vacants', color: '#1B2A4E' },
          { dataKey: 'airbnb', name: 'Locations Airbnb', color: '#E63946' },
        ]}
      />

      {/* Key Message */}
      <div className="bg-reconquete-red/10 border-l-4 border-reconquete-red p-6 rounded-r-lg">
        <h3 className="font-bold text-reconquete-navy text-lg mb-2">
          Le constat de Sarah Knafo
        </h3>
        <p className="text-text-secondary">
          "165 000 logements vides pendant que 285 000 familles attendent un logement social.
          Cette situation est inacceptable. Je mettrai fin à cette absurdité en taxant
          massivement les logements vacants et en encadrant strictement les locations touristiques."
        </p>
      </div>
    </div>
  )
}

function TransportsSection() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="mb-8">
        <h2 className="section-title">Transports et Propreté</h2>
        <p className="text-text-secondary">
          Les déplacements dans Paris sont devenus un calvaire, et la propreté de la ville ne cesse de se dégrader.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Temps de trajet moyen"
          value={transportStats.tempsTrajetMoyen}
          unit=" min"
          icon={<Train className="h-6 w-6" />}
          color="navy"
          description="Domicile-travail"
        />
        <StatCard
          title="Heures dans les bouchons"
          value={transportStats.bouchonsJour}
          unit="h/an"
          icon={<AlertTriangle className="h-6 w-6" />}
          color="red"
          description="Par automobiliste"
        />
        <StatCard
          title="Satisfaction propreté"
          value={transportStats.satisfactionProprete}
          unit="%"
          icon={<TrendingDown className="h-6 w-6" />}
          color="red"
          trend={{ value: 48, label: 'vs 2018', direction: 'down', isPositive: false }}
        />
        <StatCard
          title="Budget propreté"
          value={transportStats.budgetProprete}
          unit="€"
          icon={<Euro className="h-6 w-6" />}
          color="gold"
          description="Pour quel résultat ?"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <PieChart
          data={repartitionModale}
          title="Modes de déplacement"
          subtitle="Répartition des trajets"
        />
        <BarChart
          data={comparaisonProprete.map(c => ({ name: c.name, value: c.note }))}
          title="Propreté : Paris vs capitales européennes"
          subtitle="Note sur 20"
          highlightIndex={5}
        />
      </div>

      <LineChart
        data={evolutionCirculation}
        title="Évolution des modes de transport"
        subtitle="Base 100 en 2015"
        lines={[
          { dataKey: 'voitures', name: 'Voitures', color: '#E63946' },
          { dataKey: 'velos', name: 'Vélos', color: '#48BB78' },
          { dataKey: 'pietons', name: 'Piétons', color: '#1B2A4E' },
        ]}
      />

      <LineChart
        data={proprete}
        title="Évolution de la propreté à Paris"
        subtitle="Note sur 20 et satisfaction des habitants"
        lines={[
          { dataKey: 'note', name: 'Note propreté', color: '#1B2A4E' },
          { dataKey: 'satisfaction', name: 'Satisfaction (%)', color: '#E63946' },
        ]}
      />

      {/* Key Message */}
      <div className="bg-reconquete-red/10 border-l-4 border-reconquete-red p-6 rounded-r-lg">
        <h3 className="font-bold text-reconquete-navy text-lg mb-2">
          Le constat de Sarah Knafo
        </h3>
        <p className="text-text-secondary">
          "Paris est devenue l'une des capitales les plus sales d'Europe. 750 millions d'euros
          sont dépensés chaque année pour la propreté, avec des résultats catastrophiques.
          Je remettrai de l'ordre et de l'efficacité dans ce service essentiel."
        </p>
      </div>
    </div>
  )
}
