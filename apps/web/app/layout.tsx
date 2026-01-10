import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Sarah Knafo - Pour Paris, Pour la France',
  description: 'Suivez la campagne de Sarah Knafo, candidate à la mairie de Paris. Découvrez son programme et ses propositions pour redresser Paris et la France.',
  keywords: ['Sarah Knafo', 'Paris', 'élections municipales', 'Reconquête', 'politique'],
  authors: [{ name: 'Équipe de campagne Sarah Knafo' }],
  openGraph: {
    title: 'Sarah Knafo - Pour Paris, Pour la France',
    description: 'Découvrez le programme de Sarah Knafo pour Paris',
    type: 'website',
    locale: 'fr_FR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
