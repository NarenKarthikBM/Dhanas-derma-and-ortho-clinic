import Home_Services from '../Components/Home_Services';
import Layout from '../Components/Layout';

export default function Homeservicespage() {
  return (
    <Layout footerstatic={false} description="Dhana's Derma and Ortho clinic offers a variety of services such as day care procedures/ OP procedures for Acne, scar related, Peels, Lasers, PRP and Intra articular injections, POP services and Fracture management without surgeries"
     title="Services - Dhana's Derma &amp; Ortho Clinic in Guduvanchery (Kanchipuram)">
      <Home_Services />
    </Layout>
  )
}