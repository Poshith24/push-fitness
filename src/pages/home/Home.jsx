import FAQ from '../../components/FAQs'
import MainHeader from '../../components/MainHeader'
import Programs from '../../components/Programs'
import Testimonials from '../../components/Testimonials'
import Values from '../../components/Values'
import './Home.css'
const Home = () => {
  return (
    <>
      <MainHeader />
      <Programs />
      <Values />
      <FAQ />
      <Testimonials />
    </>
  )
}

export default Home