import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { Header } from "../components/Header/index";
import { Siderbar } from "../components/Siderbar";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    forColor: theme.colors.gray[500],
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
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      "2021-03-18T00:00:00.000z",
      "2021-03-19T00:00:00.000z",
      "2021-03-20T00:00:00.000z",
      "2021-03-21T00:00:00.000z",
      "2021-03-22T00:00:00.000z",
      "2021-03-23T00:00:00.000z",
      "2021-03-24T00:00:00.000z",
      "2021-03-25T00:00:00.000z",
    ],
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
} as const;

const series = [
  { name: "series 1", data: [31, 120, 10, 222, 35, 370, 150, 223] },
];

export default function dashboard() {
  return (
    <Flex direction="column" height="100vh">
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Siderbar />

        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="320px"
          alignItems="flex-start"
        >
          <Box p="8" bg="gray.800" borderRadius={8} pb="4">
            <Text fontSize="lg" mb="4">
              Inscrito da semana
            </Text>
            <Chart type="area" height={160} options={options} series={series} />
          </Box>

          <Box p="8" bg="gray.800" borderRadius={8} pb="4">
            <Text fontSize="lg" mb="4">
              Taxa de abertura
            </Text>
            <Chart type="area" height={160} options={options} series={series} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
