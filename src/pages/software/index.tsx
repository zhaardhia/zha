import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import FieldBadges from '@/components/FieldBadges'
import { softwareFields } from '@/lib/utils'
import SoftwareSections from '@/components/softwares/SoftwareSections'
import SocialMedias from '@/components/SocialMedias'
const index = () => {
  return (
    <>
      <Head>
        <title>localdiskzha | software works🧑🏻‍💻</title>
        <meta name="description" content="localdiskzha's software work." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="localdiskzha | software works🧑🏻‍💻" />
        <meta property="og:description" content="localdiskzha's software work." />
      </Head>
      <Layout>
        <div className="min-h-[50vh]">
          <div className="h-28">
          </div>
          <FieldBadges fields={softwareFields} />
          <SoftwareSections />
        </div>
        <div className="my-10 flex flex-col gap-5">
          <hr  />
          <SocialMedias />
        </div>
      </Layout>
    </>
  )
}

export default index