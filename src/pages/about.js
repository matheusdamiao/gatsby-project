
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'


const AboutPage = () => {
  return (
    <Layout pageTitle='About'>
      <p> This is my Bio</p>
      <StaticImage
      width={200}
      src="../images/photo.jpeg"
      alt="personal photo"
      />
    </Layout>
  )
}


export default AboutPage