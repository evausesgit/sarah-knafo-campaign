'use client'

import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from 'recharts'

interface BarChartProps {
  data: Array<{
    name: string
    value: number
    [key: string]: string | number
  }>
  title: string
  subtitle?: string
  dataKey?: string
  secondaryDataKey?: string
  colors?: {
    primary?: string
    secondary?: string
  }
  showLegend?: boolean
  horizontal?: boolean
  unit?: string
  highlightIndex?: number
}

const defaultColors = {
  primary: '#1B2A4E',
  secondary: '#E63946',
}

export default function BarChart({
  data,
  title,
  subtitle,
  dataKey = 'value',
  secondaryDataKey,
  colors = defaultColors,
  showLegend = false,
  horizontal = false,
  unit = '',
  highlightIndex,
}: BarChartProps) {
  const formatValue = (value: number) => {
    if (value >= 1000000000) {
      return `${(value / 1000000000).toFixed(1)} Md${unit}`
    }
    if (value >= 1000000) {
      return `${(value / 1000000).toFixed(1)} M${unit}`
    }
    if (value >= 1000) {
      return `${(value / 1000).toFixed(1)} k${unit}`
    }
    return `${value}${unit}`
  }

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200">
          <p className="font-semibold text-reconquete-navy">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} style={{ color: entry.color }}>
              {entry.name}: {formatValue(entry.value)}
            </p>
          ))}
        </div>
      )
    }
    return null
  }

  return (
    <div className="chart-container">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-reconquete-navy">{title}</h3>
        {subtitle && (
          <p className="text-text-muted text-sm mt-1">{subtitle}</p>
        )}
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <RechartsBarChart
          data={data}
          layout={horizontal ? 'vertical' : 'horizontal'}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
          {horizontal ? (
            <>
              <XAxis type="number" tickFormatter={formatValue} />
              <YAxis type="category" dataKey="name" width={100} />
            </>
          ) : (
            <>
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis tickFormatter={formatValue} />
            </>
          )}
          <Tooltip content={<CustomTooltip />} />
          {showLegend && <Legend />}
          <Bar
            dataKey={dataKey}
            fill={colors.primary}
            radius={[4, 4, 0, 0]}
            name="Valeur"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={
                  highlightIndex === index
                    ? colors.secondary
                    : colors.primary
                }
              />
            ))}
          </Bar>
          {secondaryDataKey && (
            <Bar
              dataKey={secondaryDataKey}
              fill={colors.secondary}
              radius={[4, 4, 0, 0]}
              name="Comparaison"
            />
          )}
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  )
}
