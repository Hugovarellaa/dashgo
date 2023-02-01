import { Box, Flex, SimpleGrid, Text, theme } from '@chakra-ui/react'

import dynamic from 'next/dynamic'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'

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

export default function Dashboard() {
  return (
    <Flex direction="column" height="100vh">
      <Header />
      <Flex
        width="100%"
        marginY="6"
        maxWidth={1480}
        marginX="auto"
        paddingX="6"
      >
        <Sidebar />

        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="320px"
          alignItems="flex-start"
        >
          <Box
            padding="8"
            backgroundColor="gray.800"
            borderRadius={8}
            paddingBottom="4"
          >
            <Text fontSize="lg" marginBottom="4">
              Inscritos da semana
            </Text>

            <Chart
              options={options}
              series={series}
              width="500"
              type="area"
              height={160}
            />
          </Box>

          <Box
            padding="8"
            backgroundColor="gray.800"
            borderRadius={8}
            paddingBottom="4"
          >
            <Text fontSize="lg" marginBottom="4">
              Inscritos da semana
            </Text>

            <Chart
              options={options}
              series={series}
              width="500"
              type="area"
              height={160}
            />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}
