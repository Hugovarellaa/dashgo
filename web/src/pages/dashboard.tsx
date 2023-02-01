import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import { ChartGraph } from '../components/Chart'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'

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
            padding={['6', '8']}
            backgroundColor="gray.800"
            borderRadius={8}
            paddingBottom="4"
          >
            <Text fontSize="lg" marginBottom="4">
              Inscritos da semana
            </Text>
            <ChartGraph />
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

            <ChartGraph />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}