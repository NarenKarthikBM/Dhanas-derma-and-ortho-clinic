import Home_info from '../Components/Home_info';
import loadable from '@loadable/component';
/* import Home_booknow from '../Components/Home_booknow'; */
import Contact_us from '../Components/Contact_us';
import Layout from '../Components/Layout';
const Events = loadable(() => import('../Components/Events'))
const Gallery = loadable(() => import('../Components/Gallery'))
const Home_about_the_doctors = loadable(() => import('../Components/Home_about_the_doctors'))

export default function Home() {
  return (
    <Layout footerstatic={true} description="Dhana's Derma and Ortho Clinic, in Guduvanchery (Chengalpattu), ensures ethical practice of the skin, hair and nail problems and Ortho / trauma related and joint-related issues. We take safe and aseptic precautions 
    while taking day care procedures / OP procedures for acne, scar related, peels, lasers, PRP and intra articular injections, POP services and fracture management without surgery" title="Dhana's Derma &amp; Ortho Clinic in Guduvanchery (Kanchipuram)- Book an appointment now ">
      <Home_info />
      {/* <Home_booknow /> */}
      <Home_about_the_doctors />
      <Contact_us />
      <Events />
      <Gallery />
    </Layout>
  )
}
