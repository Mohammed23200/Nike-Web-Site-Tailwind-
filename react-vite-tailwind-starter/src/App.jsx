import './index.css'
import React from 'react'
import { CustomerReviews,Footer,PopularProduct,Services,SpacialOffer,Subscribe,SuperQuality ,Hero} from './sections'
import Nav from './components/Nav'
const App = () => (
  <main className="relative">
    {/* Nav */}
    <Nav/>

    {/* Hero */}
    <section className="px-8 sm:px-16 py-12 sm:py-24 xl:pl-16">
      <Hero/>
    </section>

    {/* PopularProducts */}
    <section className="px-8 sm:px-16 py-12 sm:py-24">
      <PopularProduct/>
    </section>

    {/* SuperQuality */}
    <section className="px-8 sm:px-16 py-12 sm:py-24">
      <SuperQuality/>
    </section>

    {/* Services */}
    <section className="px-8 sm:px-16 py-10">
      <Services/>
    </section>

    {/* SpecialOffers */}
    <section className="px-8 sm:px-16 py-12 sm:py-24">
      <SpacialOffer/>
    </section>

    {/* CustomersReviews */}
    <section className="px-8 sm:px-16 py-12 sm:py-24 bg-blue-50">
      <CustomerReviews/>
    </section>

    {/* Subscribe */}
    <section className="w-full px-8 sm:px-16 py-16 sm:py-32">
      <Subscribe/>
    </section>

    {/* Footer */}
    <section className="bg-black px-8 sm:px-16 pt-12 sm:pt-24 pb-8">
      <Footer/>
    </section>
  </main>
)

export default App
