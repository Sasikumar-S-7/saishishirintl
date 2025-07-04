import KailashBanner from '@/components/Bhutan/BhutanBanner'
import BaliCarousel from '@/components/Bhutan/Bhutanclients'
import FaqAccordion from '@/components/Bhutan/BhutanFaqAccordion'
import Herosection from '@/components/Bhutan/Bhutanherosection'
import BhutanExperience from '@/components/Bhutan/Bhutanincludedsection'
import CustomCarousel from '@/components/Bhutan/Bhutanmainbanner'
import TestimonialsSection from '@/components/Bhutan/BhutanTestimonialsSection'
import TourFeatures from '@/components/Bhutan/BhutanTourFeatures'
import TourInfoTabs from '@/components/Bhutan/BhutanTourInfoTabs'
import WhyChooseUsSection from '@/components/Bhutan/BhutanWhychoosesection'
import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'
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

// ✅ SEO Metadata
export const metadata = {
 title: 'Bhutan Tour Package from Bangalore landing page | Sai Shishir Tours',
  description: 'Experience the magic of Bhutan with our Bhutan tour package from Bangalore. Explore monasteries, Himalayan landscapes, and authentic Bhutanese culture with expert guides and quality service.',
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
