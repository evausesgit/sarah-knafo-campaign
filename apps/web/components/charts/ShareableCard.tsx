'use client'

import { useRef } from 'react'
import { Share2, Download, Twitter, Facebook } from 'lucide-react'

interface ShareableCardProps {
  title: string
  mainStat: string
  subtitle: string
  description?: string
  source?: string
  theme?: 'red' | 'navy' | 'gold' | 'green'
  children?: React.ReactNode
}

const themeClasses = {
  red: 'from-reconquete-red to-reconquete-red-dark',
  navy: 'from-reconquete-navy to-reconquete-navy-dark',
  gold: 'from-reconquete-gold to-yellow-600',
  green: 'from-green-500 to-green-700',
}

export default function ShareableCard({
  title,
  mainStat,
  subtitle,
  description,
  source,
  theme = 'red',
  children,
}: ShareableCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleShare = async (platform: 'twitter' | 'facebook' | 'copy') => {
    const text = `${title}\n\n${mainStat} ${subtitle}\n\n${description || ''}`
    const url = window.location.href

    switch (platform) {
      case 'twitter':
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
          '_blank'
        )
        break
      case 'facebook':
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`,
          '_blank'
        )
        break
      case 'copy':
        await navigator.clipboard.writeText(`${text}\n\n${url}`)
        alert('Copié dans le presse-papier !')
        break
    }
  }

  return (
    <div className="relative group">
      <div
        ref={cardRef}
        className={`bg-gradient-to-br ${themeClasses[theme]} rounded-2xl p-8 text-white relative overflow-hidden`}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Content */}
        <div className="relative">
          <p className="text-sm uppercase tracking-wide opacity-80 mb-2">{title}</p>
          <p className="text-6xl md:text-7xl font-bold mb-2">{mainStat}</p>
          <p className="text-xl md:text-2xl">{subtitle}</p>
          {description && (
            <p className="mt-4 text-white/80 text-sm md:text-base">{description}</p>
          )}
          {children}

          {/* Branding */}
          <div className="mt-6 pt-4 border-t border-white/20 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-display font-bold">Sarah Knafo</span>
              <span className="text-reconquete-gold text-sm font-semibold">2026</span>
            </div>
            {source && (
              <span className="text-xs opacity-60">Source : {source}</span>
            )}
          </div>
        </div>
      </div>

      {/* Share buttons - visible on hover */}
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={() => handleShare('twitter')}
          className="p-2 bg-[#1DA1F2] text-white rounded-full shadow-lg hover:scale-110 transition-transform"
          title="Partager sur X"
        >
          <Twitter className="h-4 w-4" />
        </button>
        <button
          onClick={() => handleShare('facebook')}
          className="p-2 bg-[#4267B2] text-white rounded-full shadow-lg hover:scale-110 transition-transform"
          title="Partager sur Facebook"
        >
          <Facebook className="h-4 w-4" />
        </button>
        <button
          onClick={() => handleShare('copy')}
          className="p-2 bg-gray-700 text-white rounded-full shadow-lg hover:scale-110 transition-transform"
          title="Copier le lien"
        >
          <Share2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
