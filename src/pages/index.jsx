import Head from 'next/head'

import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Pricing } from '@/components/Pricing'
import { Testimonials } from '@/components/Testimonials'
import Presentation from '@/components/Presentation'
import FeaturesSection from '@/components/FeaturesSection'
import MainInfos from '@/components/MainInfos'
import { Steps } from '@/components/Steps'
import Map from '@/components/MainInfos'
import Cta from '@/components/domiciliation/Cta'

export default function Home() {
  return (
    <>
      <Head>
        <title>AgoraCan - The best for your business</title>
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
        <MainInfos />
        <Presentation />
        <FeaturesSection />
        <Pricing />
        <Testimonials />
        <Steps/>
        <Cta/>
        <Faqs/>
      </main>
      <Footer />
    </>
  )
}
