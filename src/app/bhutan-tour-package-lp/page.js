// import BhutanPackages from '@/components/BhutanPackages'
import BaliCarousel from '@/components/carosel/clients'
import FaqAccordion from '@/components/FaqAccordion'
import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'
import Herosection from '@/components/herosection'
import BhutanExperience from '@/components/includedsection'
// import Itinerary from '@/components/ItineraryAccordion'
import KailashBanner from '@/components/KailashBanner'
import CustomCarousel from '@/components/mainbanner'
import TestimonialsSection from '@/components/TestimonialsSection'
import TourFeatures from '@/components/TourFeatures'
import TourInfoTabs from '@/components/TourInfoTabs'
import WhyChooseUsSection from '@/components/Whychoosesection'

import React from 'react'


// ✅ SEO Metadata
export const metadata = {
  title: 'Bhutan Tour Package from Bangalore Enquire Now',
  description: 'Experience the spiritual charm of Bhutan with Sai Shishir Tours. Our tour package from Bangalore offers majestic monasteries, serene landscapes, and complete travel support.',
}

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
