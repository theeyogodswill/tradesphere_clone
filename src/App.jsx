
import './index.css'
import AmazingFeatures from './LandingPage/sections/AmazingFeatures'
import BusinessSection from './LandingPage/sections/BusinessSection'
import FAQ from './LandingPage/sections/FAQ'
import FeaturedBrands from './LandingPage/sections/FeaturedBrands'
import Footer from './LandingPage/sections/Footer'
import Hero from './LandingPage/sections/Hero'
import InfiniteScrollLogos from './LandingPage/sections/InfiniteScrollLogos'
import InfiniteScrollText from './LandingPage/sections/InfiniteScrollText'
import FeatureSection from './LandingPage/sections/Mission'
import ProductMarketSection from './LandingPage/sections/ProductMarketSection'
import Waitlist from './LandingPage/sections/Waitlist'

const App = () => {
  return (
    <div>
      <Hero />
      <InfiniteScrollLogos />
      <FeatureSection />
      <FeaturedBrands />
      <AmazingFeatures />
      <BusinessSection />
      <InfiniteScrollText />
      <ProductMarketSection />
      <InfiniteScrollText />
      <FAQ />
      <Waitlist />
      <Footer />
    </div>
  )
}

export default App
