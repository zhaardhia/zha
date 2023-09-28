import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import Intro from '@/components/Intro'
import Stuff from '@/components/Stuff'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout
      // className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Intro
        headerTitle="Hi, it’s Firzha."
        childTitle="crafting digital solutions & making art."
      />
      <Stuff />
    </Layout>
  )
}
