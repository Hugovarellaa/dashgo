import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { axios } from "../services/axios/axios";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

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
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[500],
    },
    axisTicks: {
      color: theme.colors.gray[500],
    },
    categories: [
      "2021-03-10T00:00:00.000Z",
      "2021-03-11T00:00:00.000Z",
      "2021-03-12T00:00:00.000Z",
      "2021-03-13T00:00:00.000Z",
      "2021-03-14T00:00:00.000Z",
      "2021-03-15T00:00:00.000Z",
      "2021-03-16T00:00:00.000Z",
      "2021-03-17T00:00:00.000Z",
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

const series = [{ name: "series1", data: [10, 100, 23, 150, 11, 109, 37, 72] }];

export default function Dashboard() {
  useEffect(() => {
    axios.get("/me").then((response) => console.log(response));
  }, []);
  return (
    <Flex direction="column" height="100vh">
      <Header />

      <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="10">
        <Sidebar />

        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="300px"
          alignItems="flex-start"
        >
          <Box p={["6", "8"]} background="gray.800" borderRadius={8} pb="4">
            <Text fontSize="lg" mb="4">
              Inscritos da semana
            </Text>
            <Chart type="area" height={160} options={options} series={series} />
          </Box>

          <Box p={["6", "8"]} background="gray.800" borderRadius={8} pb="4">
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
