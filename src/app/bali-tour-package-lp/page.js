
import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'
import KailashBanner from '@/components/Bali/BaliBanner'
import BaliCarousel from '@/components/Bali/Baliclients'
import FaqAccordion from '@/components/Bali/BaliFaqAccordion'
import Herosection from '@/components/Bali/Baliherosection'
import BhutanExperience from '@/components/Bali/Baliincludedsection'
import CustomCarousel from '@/components/Bali/Balimainbanner'
import TestimonialsSection from '@/components/Bali/BaliTestimonialsSection'
import TourFeatures from '@/components/Bali/BaliTourFeatures'
import TourInfoTabs from '@/components/Bali/BaliTourInfoTabs'
import WhyChooseUsSection from '@/components/Bali/BaliWhychoosesection'
// import KailashBanner from '@/components/Singapore-Malasiya/SMBanner'
// import BaliCarousel from '@/components/Singapore-Malasiya/SMclients'
// import FaqAccordion from '@/components/Singapore-Malasiya/SMFaqAccordion'
// import Herosection from '@/components/Singapore-Malasiya/SMherosection'
// import BhutanExperience from '@/components/Singapore-Malasiya/SMincludedsection'
// import CustomCarousel from '@/components/Singapore-Malasiya/SMmainbanner'
// import TestimonialsSection from '@/components/Singapore-Malasiya/SMTestimonialsSection'
// import TourFeatures from '@/components/Singapore-Malasiya/SMTourFeatures'
// import TourInfoTabs from '@/components/Singapore-Malasiya/SMTourInfoTabs'
// import WhyChooseUsSection from '@/components/Singapore-Malasiya/SMWhychoosesection'


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
