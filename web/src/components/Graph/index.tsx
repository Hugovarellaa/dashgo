import { theme } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

// lazy loading
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
      '2023-02-07T00:00:00.000Z',
      '2023-02-06T00:00:00.000Z',
      '2023-02-05T00:00:00.000Z',
      '2023-02-04T00:00:00.000Z',
      '2023-02-03T00:00:00.000Z',
      '2023-02-02T00:00:00.000Z',
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
    name: 'Series 1',
    data: [31, 120, 28, 51, 18, 109],
  },
]

export function Graph() {
  const [assembleGraphics, setAssembleGraphics] = useState(false)

  useEffect(() => {
    setAssembleGraphics(true)
  }, [])
  return (
    assembleGraphics && (
      <Chart
        options={options}
        series={series}
        type="area"
        height={160}
        width="100%"
      />
    )
  )
}
