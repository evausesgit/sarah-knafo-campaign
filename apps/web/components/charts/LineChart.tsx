'use client'

import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts'

interface LineChartProps {
  data: Array<{
    name: string
    [key: string]: string | number
  }>
  title: string
  subtitle?: string
  lines: Array<{
    dataKey: string
    name: string
    color?: string
    dashed?: boolean
  }>
  unit?: string
  showLegend?: boolean
  referenceLine?: {
    y: number
    label: string
    color?: string
  }
}

const colorPalette = [
  '#1B2A4E', // navy
  '#E63946', // red
  '#D4AF37', // gold
  '#2D4A7C', // navy-light
  '#4A5568', // gray
]

export default function LineChart({
  data,
  title,
  subtitle,
  lines,
  unit = '',
  showLegend = true,
  referenceLine,
}: LineChartProps) {
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
          <p className="font-semibold text-reconquete-navy mb-2">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: entry.color }}
              />
              <span>{entry.name}: {formatValue(entry.value)}</span>
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
        <RechartsLineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis tickFormatter={formatValue} />
          <Tooltip content={<CustomTooltip />} />
          {showLegend && <Legend />}
          {referenceLine && (
            <ReferenceLine
              y={referenceLine.y}
              stroke={referenceLine.color || '#E63946'}
              strokeDasharray="5 5"
              label={{
                value: referenceLine.label,
                fill: referenceLine.color || '#E63946',
                fontSize: 12,
              }}
            />
          )}
          {lines.map((line, index) => (
            <Line
              key={line.dataKey}
              type="monotone"
              dataKey={line.dataKey}
              name={line.name}
              stroke={line.color || colorPalette[index % colorPalette.length]}
              strokeWidth={2}
              dot={{ fill: line.color || colorPalette[index % colorPalette.length], strokeWidth: 2 }}
              strokeDasharray={line.dashed ? '5 5' : undefined}
              activeDot={{ r: 6 }}
            />
          ))}
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  )
}
