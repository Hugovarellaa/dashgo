import { theme } from '@chakra-ui/react'
import dynamic from 'next/dynamic'

// lazy loading da lib apex-charts que precisa da referencia do window
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
      color: theme.colors.gray[500],
    },
    axisTicks: {
      color: theme.colors.gray[500],
    },
    categories: [
      '2023-02-03T00:00:00.000Z',
      '2023-02-04T00:00:00.000Z',
      '2023-02-05T00:00:00.000Z',
      '2023-02-06T00:00:00.000Z',
      '2023-02-07T00:00:00.000Z',
      '2023-02-08T00:00:00.000Z',
      '2023-02-09T00:00:00.000Z',
      '2023-02-10T00:00:00.000Z',
      '2023-02-11T00:00:00.000Z',
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
    name: 'series-1',
    data: [30, 40, 25, 50, 19, 60, 20, 91, 13],
  },
]

export function ApexGraph() {
  return <Chart options={options} series={series} type="area" width="500" />
}
