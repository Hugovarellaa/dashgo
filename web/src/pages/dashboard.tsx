import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import Head from 'next/head'
import { Graph } from '../components/Graph'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { setupApiClient } from '../services/axios'
import { withSSRAuth } from '../utils/withSSRAuth'

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
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
            flex={1}
            gap="4"
            minChildWidth="320px"
            alignItems="flex-start"
          >
            <Box
              padding={['6', '8']}
              backgroundColor="gray.800"
              borderRadius={8}
            >
              <Text
                padding="8"
                backgroundColor="gray.800"
                borderRadius={8}
                paddingBottom="4"
              >
                Box 1
              </Text>
              <Graph />
            </Box>
            <Box
              padding={['6', '8']}
              backgroundColor="gray.800"
              borderRadius={8}
            >
              <Text
                padding="8"
                backgroundColor="gray.800"
                borderRadius={8}
                paddingBottom="4"
              >
                Box 2
              </Text>
              <Graph />
            </Box>
          </SimpleGrid>
        </Flex>
      </Flex>
    </>
  )
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupApiClient(ctx)
  const response = await apiClient.get('/me')
  console.log(response.data)

  return {
    props: {},
  }
})
