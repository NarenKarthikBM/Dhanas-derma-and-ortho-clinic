import Home_info from '../Components/Home_info';
/* import Home_booknow from '../Components/Home_booknow'; */
import Contact_us from '../Components/Contact_us';
import Home_about_the_doctors from '../Components/Home_about_the_doctors';
import Layout from '../Components/Layout';
import Gallery from '../Components/Gallery';
import Events from '../Components/Events';

export default function Home() {
  return (
    <Layout footerstatic={true} description="Dhana's Derma and Ortho Clinic, in Guduvanchery (Kanchipuram), ensures ethical practice of the skin, hair and nail problems and Ortho / trauma related and joint-related issues. We take safe and aseptic precautions 
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
