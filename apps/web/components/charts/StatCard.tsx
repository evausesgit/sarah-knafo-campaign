'use client'

import { useEffect, useState, useRef } from 'react'
import { TrendingUp, TrendingDown, Minus } from 'lucide-react'

interface StatCardProps {
  title: string
  value: number
  unit?: string
  prefix?: string
  description?: string
  trend?: {
    value: number
    label: string
    direction: 'up' | 'down' | 'neutral'
    isPositive?: boolean
  }
  icon?: React.ReactNode
  color?: 'navy' | 'red' | 'gold' | 'green'
  animate?: boolean
}

const colorClasses = {
  navy: 'border-reconquete-navy bg-reconquete-navy/5',
  red: 'border-reconquete-red bg-reconquete-red/5',
  gold: 'border-reconquete-gold bg-reconquete-gold/5',
  green: 'border-green-500 bg-green-500/5',
}

const iconColorClasses = {
  navy: 'text-reconquete-navy',
  red: 'text-reconquete-red',
  gold: 'text-reconquete-gold',
  green: 'text-green-500',
}

export default function StatCard({
  title,
  value,
  unit = '',
  prefix = '',
  description,
  trend,
  icon,
  color = 'navy',
  animate = true,
}: StatCardProps) {
  const [displayValue, setDisplayValue] = useState(animate ? 0 : value)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!animate || !isVisible) return

    const duration = 1500
    const steps = 60
    const stepDuration = duration / steps
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setDisplayValue(value)
        clearInterval(timer)
      } else {
        setDisplayValue(Math.floor(current))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [value, animate, isVisible])

  const formatValue = (val: number) => {
    if (val >= 1000000000) {
      return `${(val / 1000000000).toFixed(1)} Md`
    }
    if (val >= 1000000) {
      return `${(val / 1000000).toFixed(1)} M`
    }
    if (val >= 1000) {
      return `${(val / 1000).toFixed(1)} k`
    }
    return val.toLocaleString('fr-FR')
  }

  const TrendIcon = trend?.direction === 'up' ? TrendingUp : trend?.direction === 'down' ? TrendingDown : Minus

  const trendColor = trend?.isPositive === undefined
    ? trend?.direction === 'up' ? 'text-green-500' : trend?.direction === 'down' ? 'text-red-500' : 'text-gray-500'
    : trend.isPositive ? 'text-green-500' : 'text-red-500'

  return (
    <div
      ref={ref}
      className={`stat-card border-l-4 ${colorClasses[color]} transition-all duration-300 hover:shadow-lg`}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-text-muted text-sm font-medium mb-1">{title}</p>
          <p className={`text-3xl font-bold ${iconColorClasses[color]} animate-count-up`}>
            {prefix}
            {formatValue(displayValue)}
            {unit && <span className="text-lg ml-1">{unit}</span>}
          </p>
          {description && (
            <p className="text-text-secondary text-sm mt-2">{description}</p>
          )}
          {trend && (
            <div className={`flex items-center gap-1 mt-2 ${trendColor}`}>
              <TrendIcon className="h-4 w-4" />
              <span className="text-sm font-medium">
                {trend.direction === 'up' ? '+' : trend.direction === 'down' ? '' : ''}
                {trend.value}%
              </span>
              <span className="text-text-muted text-sm">{trend.label}</span>
            </div>
          )}
        </div>
        {icon && (
          <div className={`p-3 rounded-lg ${colorClasses[color]} ${iconColorClasses[color]}`}>
            {icon}
          </div>
        )}
      </div>
    </div>
  )
}
