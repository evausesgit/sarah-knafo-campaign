'use client'

import { useState } from 'react'
import {
  GraduationCap,
  Building2,
  Tractor,
  Receipt,
  TrendingDown,
  Euro,
  ArrowRight,
  ChevronDown,
  Share2,
  Download,
} from 'lucide-react'
import { BarChart, LineChart, PieChart, StatCard } from '@/components/charts'
import {
  fuitePolytechnique,
  destinationsExil,
  evolutionExilFiscal,
  comparaisonFonctionnaires,
  fonctionnairesParService,
  paradoxeAgriculture,
  evolutionAgriculture,
  evolutionTaxeFonciere,
  evolutionDeficitArgentine,
  comparaisonDeficit,
  decompositionSalaire,
  comparaisonFiscalite,
  jourLiberationFiscale,
  messagesCles,
} from '@/data/messages-cles'

const sections = [
  { id: 'polytechnique', name: 'Fuite des cerveaux', icon: GraduationCap },
  { id: 'fonctionnaires', name: 'Bureaucratie', icon: Building2 },
  { id: 'agriculture', name: 'Paradoxe agricole', icon: Tractor },
  { id: 'fiscalite', name: 'Spoliation fiscale', icon: Receipt },
  { id: 'milei', name: 'Méthode Milei', icon: TrendingDown },
  { id: 'hidalgo', name: 'Vol d\'Hidalgo', icon: Euro },
]

export default function MessagesPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-gradient-to-br from-reconquete-navy via-reconquete-navy-dark to-reconquete-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-reconquete-red text-white text-sm font-semibold px-4 py-1 rounded-full mb-6">
            Les chiffres qui dérangent
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            La France en<br />
            <span className="text-reconquete-gold">chiffres</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Des graphiques simples pour comprendre pourquoi la France décline
            et comment la redresser.
          </p>
        </div>
      </section>

      {/* Navigation rapide */}
      <div className="sticky top-16 bg-white border-b border-gray-200 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-1 overflow-x-auto py-2" aria-label="Thématiques">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  activeSection === section.id
                    ? 'bg-reconquete-navy text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => setActiveSection(section.id)}
              >
                <section.icon className="h-4 w-4" />
                {section.name}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">

        {/* SECTION 1: FUITE DES CERVEAUX */}
        <section id="polytechnique" className="scroll-mt-32">
          <MessageHeader
            icon={GraduationCap}
            title="La fuite des cerveaux"
            subtitle="Nos meilleurs talents quittent la France"
            color="red"
          />

          <div className="mt-8 grid md:grid-cols-2 gap-8">
            {/* Chiffre choc */}
            <div className="bg-gradient-to-br from-reconquete-red to-reconquete-red-dark rounded-2xl p-8 text-white">
              <p className="text-sm uppercase tracking-wide opacity-80 mb-2">Polytechnique - Promotion 2022</p>
              <p className="text-7xl font-bold mb-4">34%</p>
              <p className="text-xl">vivent déjà à l'étranger</p>
              <p className="mt-4 text-white/80">
                Des jeunes de 24-26 ans qui ont fait leurs études et s'en vont immédiatement.
              </p>
            </div>

            <PieChart
              data={destinationsExil}
              title="Où partent-ils ?"
              subtitle="Destinations des expatriés fiscaux français"
            />
          </div>

          <div className="mt-8">
            <LineChart
              data={evolutionExilFiscal}
              title="L'exode fiscal s'accélère"
              subtitle="Nombre de départs pour raisons fiscales par an"
              lines={[
                { dataKey: 'exiles', name: 'Expatriés fiscaux', color: '#E63946' },
              ]}
            />
          </div>

          <SolutionBox
            problem="Pourquoi partent-ils ?"
            problemText="Ils vont chercher des endroits fiscaux plus attractifs."
            solution="La solution de Sarah Knafo"
            solutionText="Faire de la France un paradis fiscal. C'est l'objectif. Ils sont en train d'en faire un enfer social, je veux que demain ce soit un paradis fiscal."
          />
        </section>

        {/* SECTION 2: FONCTIONNAIRES */}
        <section id="fonctionnaires" className="scroll-mt-32">
          <MessageHeader
            icon={Building2}
            title="L'absurdité administrative"
            subtitle="Paris, championne du monde de la bureaucratie"
            color="navy"
          />

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <StatCard
              title="Fonctionnaires Paris"
              value={55000}
              description="Pour 2 millions d'habitants"
              color="red"
            />
            <StatCard
              title="Commission européenne"
              value={32000}
              description="Pour 450 millions d'habitants"
              color="navy"
            />
            <StatCard
              title="Toutes préfectures FR"
              value={52000}
              description="Pour 68 millions d'habitants"
              color="gold"
            />
          </div>

          <div className="mt-8 bg-reconquete-navy rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Le scandale en un graphique</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {comparaisonFonctionnaires.map((item, index) => (
                <div key={index}>
                  <p className="text-4xl font-bold text-reconquete-gold">{item.fonctionnaires.toLocaleString()}</p>
                  <p className="text-lg mt-2">{item.name}</p>
                  <p className="text-sm text-gray-400 mt-1">
                    pour {item.population} M d'habitants
                  </p>
                  <p className="text-xs text-reconquete-red mt-2">
                    1 fonctionnaire / {Math.round(item.population * 1000000 / item.fonctionnaires)} hab.
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <PieChart
              data={fonctionnairesParService}
              title="55 000 fonctionnaires : pour quoi faire ?"
              subtitle="Répartition par service à la mairie de Paris"
              innerRadius={60}
            />
          </div>

          <SolutionBox
            problem="Le constat"
            problemText="55 000 fonctionnaires à Paris, c'est plus que toutes les préfectures de France réunies, plus que la Commission européenne qui gère 450 millions d'habitants."
            solution="La solution de Sarah Knafo"
            solutionText="Diviser par 2 le nombre de fonctionnaires. Privatiser ce qui doit l'être. Le privé sait mieux faire et ça coûte moins cher. Chaque année, 5 000 fonctionnaires partent : on ne les remplace pas."
          />
        </section>

        {/* SECTION 3: AGRICULTURE */}
        <section id="agriculture" className="scroll-mt-32">
          <MessageHeader
            icon={Tractor}
            title="Le paradoxe agricole"
            subtitle="Plus de fonctionnaires, moins d'agriculteurs"
            color="gold"
          />

          <div className="mt-8 bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-reconquete-navy mb-8 text-center">
              En 40 ans, tout s'est inversé
            </h3>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="text-center">
                <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">Agriculteurs</p>
                <div className="flex items-center justify-center gap-4">
                  <div>
                    <p className="text-4xl font-bold text-reconquete-navy">1 M</p>
                    <p className="text-sm text-gray-500">Il y a 40 ans</p>
                  </div>
                  <ArrowRight className="h-8 w-8 text-reconquete-red" />
                  <div>
                    <p className="text-4xl font-bold text-reconquete-red">400 k</p>
                    <p className="text-sm text-gray-500">Aujourd'hui</p>
                  </div>
                </div>
                <p className="mt-4 text-2xl font-bold text-reconquete-red">÷ 2.5</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">Fonctionnaires du ministère</p>
                <div className="flex items-center justify-center gap-4">
                  <div>
                    <p className="text-4xl font-bold text-reconquete-navy">18 k</p>
                    <p className="text-sm text-gray-500">Il y a 40 ans</p>
                  </div>
                  <ArrowRight className="h-8 w-8 text-reconquete-red" />
                  <div>
                    <p className="text-4xl font-bold text-reconquete-red">36 k</p>
                    <p className="text-sm text-gray-500">Aujourd'hui</p>
                  </div>
                </div>
                <p className="mt-4 text-2xl font-bold text-reconquete-red">× 2</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <LineChart
              data={evolutionAgriculture}
              title="L'évolution en 40 ans"
              subtitle="Agriculteurs (milliers) vs Fonctionnaires du ministère (milliers)"
              lines={[
                { dataKey: 'agriculteurs', name: 'Agriculteurs (k)', color: '#48BB78' },
                { dataKey: 'fonctionnaires', name: 'Fonctionnaires (k)', color: '#E63946' },
              ]}
            />
          </div>

          <SolutionBox
            problem="Le constat de Sarah Knafo"
            problemText="À minima, ils ne servent à rien. Et si on est logique, on se dit que c'est peut-être de leur faute. Plus vous mettez de fonctionnaires quelque part, plus ils vont inventer des normes, des règlements, plus ils vont pourrir la vie des gens."
            solution="La solution"
            solutionText="Peut-être que la solution serait d'enlever le nombre de fonctionnaires qu'il y a dans ce ministère plutôt que de vouloir le renforcer. Les agriculteurs n'ont pas besoin de ce représentant."
          />
        </section>

        {/* SECTION 4: FISCALITÉ */}
        <section id="fiscalite" className="scroll-mt-32">
          <MessageHeader
            icon={Receipt}
            title="La spoliation fiscale"
            subtitle="60% de votre travail part à l'État"
            color="red"
          />

          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-reconquete-red to-reconquete-red-dark rounded-2xl p-8 text-white">
              <p className="text-sm uppercase tracking-wide opacity-80 mb-2">Ce que vous créez vs ce que vous recevez</p>
              <p className="text-7xl font-bold mb-4">60%</p>
              <p className="text-xl">de votre richesse créée part à l'État</p>
              <p className="mt-4 text-white/80">
                "À partir du 16 du mois, on ne travaille plus pour soi mais pour l'État"
              </p>
            </div>

            <PieChart
              data={decompositionSalaire}
              title="Où part votre salaire ?"
              subtitle="Décomposition du coût total employeur"
            />
          </div>

          <div className="mt-8">
            <BarChart
              data={comparaisonFiscalite.map(c => ({ name: c.name, value: c.value }))}
              title="Prélèvements obligatoires : la France championne"
              subtitle="En % du PIB"
              unit="%"
              highlightIndex={0}
            />
          </div>

          <div className="mt-8 bg-reconquete-navy rounded-2xl p-8 text-white">
            <h3 className="text-xl font-bold mb-6">Jour de libération fiscale</h3>
            <p className="text-gray-300 mb-6">Le jour où vous commencez à travailler pour vous et plus pour l'État</p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {jourLiberationFiscale.map((pays, index) => (
                <div key={index} className="text-center">
                  <p className="text-3xl font-bold text-reconquete-gold">{pays.mois}</p>
                  <p className="text-sm mt-1">{pays.name}</p>
                  <p className="text-xs text-gray-400">Jour {pays.jour}/365</p>
                </div>
              ))}
            </div>
          </div>

          <SolutionBox
            problem="Le mensonge du 'social'"
            problemText="Le pouvoir d'achat, ce n'est pas l'argent que l'État vous donne. Pour vous faire ce chèque, il vous prend dans votre poche droite ce qu'il met dans la poche gauche. Mais entre-temps, il garde 50% pour payer la bureaucratie."
            solution="La vraie politique sociale"
            solutionText="Le pouvoir d'achat n'est pas l'argent que l'État vous donne, c'est celui qu'il ne vous prend pas. Il faut baisser massivement les dépenses pour baisser massivement les impôts."
          />
        </section>

        {/* SECTION 5: MÉTHODE MILEI */}
        <section id="milei" className="scroll-mt-32">
          <MessageHeader
            icon={TrendingDown}
            title="La méthode qui marche"
            subtitle="L'exemple argentin de Javier Milei"
            color="green"
          />

          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 text-white">
              <p className="text-sm uppercase tracking-wide opacity-80 mb-2">Déficit public argentin</p>
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-5xl font-bold">6%</p>
                  <p className="text-sm opacity-80">Décembre 2023</p>
                </div>
                <ArrowRight className="h-10 w-10" />
                <div>
                  <p className="text-5xl font-bold">0%</p>
                  <p className="text-sm opacity-80">Décembre 2024</p>
                </div>
              </div>
              <p className="mt-6 text-white/80">
                En 12 mois, Milei a résorbé un déficit équivalent à celui de la France.
              </p>
            </div>

            <LineChart
              data={evolutionDeficitArgentine}
              title="La trajectoire Milei"
              subtitle="Évolution du déficit public (%)"
              lines={[
                { dataKey: 'deficit', name: 'Déficit (%)', color: '#48BB78' },
              ]}
              referenceLine={{ y: 0, label: 'Équilibre', color: '#1B2A4E' }}
            />
          </div>

          <div className="mt-8">
            <BarChart
              data={comparaisonDeficit.map(c => ({ name: c.name, value: c.value }))}
              title="Déficit public : avant/après Milei"
              subtitle="En % du PIB"
              unit="%"
              highlightIndex={2}
              colors={{ primary: '#E63946', secondary: '#48BB78' }}
            />
          </div>

          <SolutionBox
            problem="Comment il a fait ?"
            problemText="Il a coupé les dépenses, il a supprimé les ministères. On fera la même chose : 10 ministres et pas plus, il n'y a pas besoin d'avoir plus de ministres."
            solution="Application à la France"
            solutionText="C'est la méthode de Milei. Quand il arrive au pouvoir il a un déficit équivalent au nôtre. Aujourd'hui il est à 0%. Ce qu'on va réussir à couper, c'est tout ce qu'on va vous rendre."
          />
        </section>

        {/* SECTION 6: VOL D'HIDALGO */}
        <section id="hidalgo" className="scroll-mt-32">
          <MessageHeader
            icon={Euro}
            title="Le vol d'Hidalgo"
            subtitle="60% de hausse, 0% d'amélioration"
            color="red"
          />

          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-reconquete-red to-reconquete-red-dark rounded-2xl p-8 text-white">
              <p className="text-sm uppercase tracking-wide opacity-80 mb-2">Taxe foncière Paris</p>
              <p className="text-7xl font-bold mb-4">+60%</p>
              <p className="text-xl">d'augmentation en 2023</p>
              <p className="mt-4 text-white/80">
                "Est-ce qu'un seul d'entre vous a vu un service municipal qui s'est amélioré ?"
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-reconquete-navy mb-6">Les questions qui fâchent</h3>
              <ul className="space-y-4">
                {[
                  "La ville est-elle plus propre ?",
                  "Y a-t-il plus de places en crèche ?",
                  "La ville est-elle plus en sécurité ?",
                  "A-t-on armé la police municipale ?",
                ].map((question, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-reconquete-red/10 text-reconquete-red flex items-center justify-center font-bold">
                      ✗
                    </span>
                    <span className="text-text-secondary">{question}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-reconquete-red font-bold">
                Réponse : ZÉRO. Ça s'appelle du vol.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <LineChart
              data={evolutionTaxeFonciere}
              title="Évolution de la taxe foncière à Paris"
              subtitle="Taux en %"
              lines={[
                { dataKey: 'taux', name: 'Taux taxe foncière', color: '#E63946' },
              ]}
            />
          </div>

          <SolutionBox
            problem="Le vol caractérisé"
            problemText="Elle vous a pris votre argent et elle ne vous a rien donné en retour. Je considère que c'est du vol."
            solution="La promesse de Sarah Knafo"
            solutionText="Si je suis élue, les Parisiens recevront un chèque dans leur boîte aux lettres, un vrai chèque qui leur rendra l'argent qu'Hidalgo leur a volé. Et pour les années d'après : division par 2 de la taxe foncière pour tout le monde."
          />
        </section>

      </div>

      {/* CTA Final */}
      <section className="bg-reconquete-navy text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Partagez ces chiffres
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Les Français doivent savoir. Partagez ces graphiques sur les réseaux sociaux.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-secondary inline-flex items-center justify-center gap-2">
              <Share2 className="h-5 w-5" />
              Partager sur X
            </button>
            <button className="btn-outline border-white text-white hover:bg-white hover:text-reconquete-navy inline-flex items-center justify-center gap-2">
              <Download className="h-5 w-5" />
              Télécharger les graphiques
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

function MessageHeader({
  icon: Icon,
  title,
  subtitle,
  color,
}: {
  icon: any
  title: string
  subtitle: string
  color: 'red' | 'navy' | 'gold' | 'green'
}) {
  const colorClasses = {
    red: 'bg-reconquete-red/10 text-reconquete-red',
    navy: 'bg-reconquete-navy/10 text-reconquete-navy',
    gold: 'bg-reconquete-gold/10 text-reconquete-gold',
    green: 'bg-green-500/10 text-green-600',
  }

  return (
    <div className="flex items-start gap-4">
      <div className={`p-4 rounded-xl ${colorClasses[color]}`}>
        <Icon className="h-8 w-8" />
      </div>
      <div>
        <h2 className="text-3xl font-display font-bold text-reconquete-navy">{title}</h2>
        <p className="text-text-secondary text-lg mt-1">{subtitle}</p>
      </div>
    </div>
  )
}

function SolutionBox({
  problem,
  problemText,
  solution,
  solutionText,
}: {
  problem: string
  problemText: string
  solution: string
  solutionText: string
}) {
  return (
    <div className="mt-8 grid md:grid-cols-2 gap-6">
      <div className="bg-red-50 border-l-4 border-reconquete-red p-6 rounded-r-lg">
        <h4 className="font-bold text-reconquete-red mb-2">{problem}</h4>
        <p className="text-text-secondary">{problemText}</p>
      </div>
      <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
        <h4 className="font-bold text-green-700 mb-2">{solution}</h4>
        <p className="text-text-secondary">{solutionText}</p>
      </div>
    </div>
  )
}
