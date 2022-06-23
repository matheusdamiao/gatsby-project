

import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Layout from '../components/layout'


const IndexPage = () => {
  return (
    <>
    <Layout pageTitle="Home Page">
      <p> Let's test this page component</p>
      <StaticImage
      width={350}
      src="https://i.pinimg.com/originals/63/da/43/63da438514e0b4990863dacc3f8ab4c7.jpg"
      alt="a photo of a pittbull puppy"
      />

    </Layout>
    
    
    </>
  )
}


export default IndexPage