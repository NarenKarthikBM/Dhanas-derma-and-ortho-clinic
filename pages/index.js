import Home_info from '../../../dhanas-clinic/Components/Home_info';
/* import Home_booknow from '../Components/Home_booknow'; */
import Contact_us from '../../../dhanas-clinic/Components/Contact_us';
import Home_about_the_doctors from '../../../dhanas-clinic/Components/Home_about_the_doctors';
import Layout from '../../../dhanas-clinic/Components/Layout';
import Gallery from '../../../dhanas-clinic/Components/Gallery';

export default function Home() {
  return (
    <Layout footerstatic={true} description="Dhana's Derma and Ortho Clinic, in Guduvanchery (Kanchipuram), ensures ethical practice of the skin, hair and nail problems and Ortho / trauma related and joint-related issues. We take safe and aseptic precautions 
    while taking day care procedures / OP procedures for acne, scar related, peels, lasers, PRP and intra articular injections, POP services and fracture management without surgery" title="Dhana's Derma &amp; Ortho Clinic in Guduvanchery (Kanchipuram)- Book an appointment now ">
      <Home_info />
      {/* <Home_booknow /> */}
      <Home_about_the_doctors />
      <Contact_us />
      <Gallery />
    </Layout>
  )
}
