import Head from 'next/head'
import { Header } from '../components/Header'

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div>
        <Header />
      </div>
    </>
  )
}
