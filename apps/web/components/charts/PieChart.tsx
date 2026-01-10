'use client'

import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

interface PieChartProps {
  data: Array<{
    name: string
    value: number
    color?: string
  }>
  title: string
  subtitle?: string
  unit?: string
  showLegend?: boolean
  innerRadius?: number
  showLabels?: boolean
}

const defaultColors = [
  '#1B2A4E', // navy
  '#E63946', // red
  '#D4AF37', // gold
  '#2D4A7C', // navy-light
  '#4A5568', // gray
  '#718096', // gray-light
  '#48BB78', // green
  '#ED8936', // orange
]

export default function PieChart({
  data,
  title,
  subtitle,
  unit = '',
  showLegend = true,
  innerRadius = 0,
  showLabels = false,
}: PieChartProps) {
  const total = data.reduce((sum, item) => sum + item.value, 0)

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

  const formatPercent = (value: number) => {
    return `${((value / total) * 100).toFixed(1)}%`
  }

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload
      return (
        <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200">
          <p className="font-semibold text-reconquete-navy">{data.name}</p>
          <p className="text-text-secondary">
            {formatValue(data.value)} ({formatPercent(data.value)})
          </p>
        </div>
      )
    }
    return null
  }

  const renderCustomLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    name,
  }: any) => {
    const RADIAN = Math.PI / 180
    const radius = innerRadius + (outerRadius - innerRadius) * 1.2
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    if (percent < 0.05) return null

    return (
      <text
        x={x}
        y={y}
        fill="#1B2A4E"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
        fontSize={12}
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    )
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
        <RechartsPieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={innerRadius}
            outerRadius={100}
            paddingAngle={2}
            dataKey="value"
            label={showLabels ? renderCustomLabel : false}
            labelLine={showLabels}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color || defaultColors[index % defaultColors.length]}
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          {showLegend && (
            <Legend
              layout="vertical"
              align="right"
              verticalAlign="middle"
              formatter={(value, entry: any) => (
                <span className="text-sm text-text-primary">{value}</span>
              )}
            />
          )}
        </RechartsPieChart>
      </ResponsiveContainer>
      {innerRadius > 0 && (
        <div className="text-center -mt-4">
          <p className="text-2xl font-bold text-reconquete-navy">
            {formatValue(total)}
          </p>
          <p className="text-text-muted text-sm">Total</p>
        </div>
      )}
    </div>
  )
}
