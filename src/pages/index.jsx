import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import Presentation from '@/components/Presentation'
import FeaturesSection from '@/components/FeaturesSection'
import MainInfos from '@/components/MainInfos'

export default function Home() {
  return (
    <>
      <Head>
        <title>AgoraCan - Accounting made simple for small businesses</title>
        <meta
          name="description"
          content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
        />
      </Head>
      <Header />
      <main>
        {/* <Hero /> */}
        {/* <PrimaryFeatures /> */}
        {/* <SecondaryFeatures /> */}
        {/* <CallToAction /> */}
        <MainInfos/>
        <Presentation/>
        <FeaturesSection/>
        {/* <Testimonials /> */}
        <Pricing />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
