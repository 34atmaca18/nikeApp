import React from 'react'
import './App.css'
import { Navbar,Main,About,Products,Footer,Services,Offer, Reviews,Subs} from './components/index.js'

const App = () => {
  return (
    <div className='text-white bg-black h-fit overflow-hidden'>
      <Navbar />
      <Main />
      <About />
      <Products />
      <Services />
      <Offer />
      <Reviews />
      <Subs />
      <Footer />
    </div>
  )
}

export default App