import { Flex } from '@chakra-ui/react'
import Head from 'next/head'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'

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
        </Flex>
      </Flex>
    </>
  )
}
