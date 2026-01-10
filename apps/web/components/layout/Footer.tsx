import Link from 'next/link'
import { Twitter, Facebook, Instagram, Youtube, Mail } from 'lucide-react'

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/SarahKnaworep', icon: Twitter },
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'YouTube', href: '#', icon: Youtube },
]

const footerNavigation = {
  programme: [
    { name: 'Sécurité', href: '/programme/securite' },
    { name: 'Économie', href: '/programme/economie' },
    { name: 'Logement', href: '/programme/logement' },
    { name: 'Transport', href: '/programme/transport' },
  ],
  engagement: [
    { name: 'Devenir bénévole', href: '/engagement/benevole' },
    { name: 'Faire un don', href: '/engagement/don' },
    { name: 'Newsletter', href: '/engagement/newsletter' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Mentions légales', href: '/mentions-legales' },
    { name: 'Politique de confidentialité', href: '/confidentialite' },
    { name: 'CGU', href: '/cgu' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-reconquete-navy-dark text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <span className="font-display text-xl font-bold">Sarah Knafo</span>
              <span className="text-reconquete-gold text-sm font-semibold">2026</span>
            </Link>
            <p className="text-gray-300 text-sm mb-4">
              Pour Paris, Pour la France.
              <br />
              Ensemble, redressons notre ville.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-reconquete-gold transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Programme */}
          <div>
            <h3 className="text-reconquete-gold font-semibold mb-4">Programme</h3>
            <ul className="space-y-2">
              {footerNavigation.programme.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Engagement */}
          <div>
            <h3 className="text-reconquete-gold font-semibold mb-4">S'engager</h3>
            <ul className="space-y-2">
              {footerNavigation.engagement.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-reconquete-gold font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-300 text-sm mb-4">
              Recevez les dernières actualités de la campagne.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Votre email"
                className="bg-reconquete-navy border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-reconquete-gold"
              />
              <button
                type="submit"
                className="bg-reconquete-red hover:bg-reconquete-red-light text-white px-4 py-2 rounded-lg font-semibold transition-colors"
              >
                S'inscrire
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2026 Campagne Sarah Knafo. Tous droits réservés.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {footerNavigation.legal.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
