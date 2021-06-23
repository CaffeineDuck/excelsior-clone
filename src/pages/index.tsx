import * as React from 'react'
import HeroSection from 'src/components/hero'
import NoLayout from 'src/components/layout/NoLayout'
 
const Home  = () => {
  return (
    <>
      <HeroSection /> 
    </>
  )
}

Home.Layout = NoLayout
export default Home