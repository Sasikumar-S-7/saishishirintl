import BhutanPackages from '@/components/BhutanPackages'
import BaliCarousel from '@/components/carosel/clients'
import FaqAccordion from '@/components/FaqAccordion'
import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'
import BhutanTourBanner from '@/components/herosection'
import Itinerary from '@/components/ItineraryAccordion'
import TestimonialsSection from '@/components/TestimonialsSection'
import TourFeatures from '@/components/TourFeatures'
import TourInfoTabs from '@/components/TourInfoTabs'
import WhyChooseUsSection from '@/components/Whychoosesection'

import React from 'react'

const page = () => {
  return (
    <div>
          <Header/>
        <BhutanTourBanner/>
      <BaliCarousel/>
      <Itinerary/>
      <BhutanPackages/>
      <TourFeatures/>
      <WhyChooseUsSection/>
      <TourInfoTabs/>
      <TestimonialsSection/>
      <FaqAccordion/>
      <Footer/>
    </div>
  )
}

export default page
