import Home_info from '../Components/Home_info';
/* import Home_booknow from '../Components/Home_booknow'; */
import Contact_us from '../Components/Contact_us';
import Home_about_the_doctors from '../Components/Home_about_the_doctors';
import Layout from '../Components/Layout';
import Gallery from '../Components/Gallery';

export default function Home() {
  return (
    <Layout footerstatic={true} description="Dhana's Derma and Ortho clinic ensures ethical practice of the skin, hair and nail problems and Ortho / trauma related and joint related issues. 
    We also undertake day care procedures/ OP procedures for Acne, scar related, Peels, Lasers, PRP and Intra articular injections, POP services and Fracture management without surgeries" title="Dhana's Derma &amp; Ortho Clinic in Guduvanchery (Kanchipuram)- Book an appointment now ">
      <Home_info />
      {/* <Home_booknow /> */}
      <Home_about_the_doctors />
      <Contact_us />
      <Gallery />
    </Layout>
  )
}
