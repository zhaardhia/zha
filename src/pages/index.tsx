import React from 'react';
import Head from 'next/head';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import Intro from '@/components/Intro'
import Stuff from '@/components/Stuff'
import AboutMeMain from '@/components/AboutMeMain'
import FadeBox from '@/components/FadeBox'
import FieldBadges from '@/components/FieldBadges'
import SocialMedias from '@/components/SocialMedias'
import { mainPersonalFields } from '@/lib/utils'
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>localdiskzha | firzha ardhia ramadhan🧑🏻‍💻</title>
        <meta name="description" content="localdiskzha is firzha's document of work." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="localdiskzha | firzha ardhia ramadhan🧑🏻‍💻" />
        <meta property="og:description" content="localdiskzha is firzha's document of work." />
      </Head>
      <Layout>
        <Intro
          headerTitle="hi, it’s firzha."
          childTitle="crafting digital solutions & making art."
        />
        <FieldBadges fields={mainPersonalFields} />
        <FadeBox>
          <Stuff />
          <AboutMeMain />
          <div className="my-10 flex flex-col gap-5">
            <hr  />
            <SocialMedias />
          </div>
        </FadeBox>
      </Layout>
    </>
  )
}
