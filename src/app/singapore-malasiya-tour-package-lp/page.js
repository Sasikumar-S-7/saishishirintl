
import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'
import KailashBanner from '@/components/Singapore-Malasiya/SMBanner'
import BaliCarousel from '@/components/Singapore-Malasiya/SMclients'
import FaqAccordion from '@/components/Singapore-Malasiya/SMFaqAccordion'
import Herosection from '@/components/Singapore-Malasiya/SMherosection'
import BhutanExperience from '@/components/Singapore-Malasiya/SMincludedsection'
import CustomCarousel from '@/components/Singapore-Malasiya/SMmainbanner'
import TestimonialsSection from '@/components/Singapore-Malasiya/SMTestimonialsSection'
import TourFeatures from '@/components/Singapore-Malasiya/SMTourFeatures'
import TourInfoTabs from '@/components/Singapore-Malasiya/SMTourInfoTabs'
import WhyChooseUsSection from '@/components/Singapore-Malasiya/SMWhychoosesection'


import React from 'react'

const page = () => {
  return (
    <div>
          <Header/>
          <CustomCarousel/>
        <Herosection/>
        <KailashBanner/>
      <BaliCarousel/>
      {/* <Itinerary/> */}
      {/* <BhutanPackages/> */}
      <TourFeatures/>
      <WhyChooseUsSection/>
      <BhutanExperience/>
      <TourInfoTabs/>
      <TestimonialsSection/>
      <FaqAccordion/>
      <Footer/>
    </div>
  )
}

export default page
