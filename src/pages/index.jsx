import Head from 'next/head'

import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import Presentation from '@/components/Presentation'
import FeaturesSection from '@/components/FeaturesSection'
import MainInfos from '@/components/MainInfos'
import { Steps } from '@/components/Steps'
import Map from '@/components/Map'

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
        {/* <PrimaryFeatures /> */}
        {/* <SecondaryFeatures /> */}
        {/* <CallToAction /> */}
        <Map/>
        <MainInfos />
        <Presentation />
        <FeaturesSection />
        <Pricing />
        <Testimonials />
        <Steps/>
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
