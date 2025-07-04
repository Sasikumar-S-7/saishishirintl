import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'
import KailashBanner from '@/components/Singapore-Malasiya/SMBanner'
import SMBelowBanner from '@/components/Singapore-Malasiya/SMBelowbanner'
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

// ✅ SEO Metadata
export const metadata = {
  title: 'Singapore Malaysia Tour Package from Bangalore Landing Page',
  description: 'Explore the best Singapore Malaysia tour package from Bangalore with Sai Shishir Tours. Enjoy premium hotels, sightseeing, Indian meals, and experienced tour guides.',
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
      <SMBelowBanner/>
      <FaqAccordion/>
      <Footer/>
    </div>
  )
}

export default page
