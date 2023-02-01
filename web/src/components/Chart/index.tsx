import { theme } from '@chakra-ui/react'
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
})

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },

  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      '2023-01-31T00:00:00:00.000Z',
      '2023-01-30T00:00:00:00.000Z',
      '2023-01-29T00:00:00:00.000Z',
      '2023-01-28T00:00:00:00.000Z',
      '2023-01-27T00:00:00:00.000Z',
      '2023-01-26T00:00:00:00.000Z',
      '2023-01-25T00:00:00:00.000Z',
      '2023-01-24T00:00:00:00.000Z',
      '2023-01-23T00:00:00:00.000Z',
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
} as const

const series = [
  {
    name: 'Series1',
    data: [140, 45, 150, 49, 360, 70, 151, 100, 120],
  },
]

export function ChartGraph() {
  return (
    <Chart
      options={options}
      series={series}
      width="500"
      type="area"
      height={160}
    />
  )
}
