import './About.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam consequatur deleniti, fugiat nesciunt quae reiciendis! Expedita qui alias sint, illo consequatur ducimus, distinctio vero adipisci eligendi nulla nisi unde nostrum.
      </Header>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem vero veniam explicabo recusandae quas fuga illum doloremque nulla necessitatibus itaque, dolore voluptatem enim, esse porro nesciunt velit quasi placeat inventore.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero voluptas illum perspiciatis? Adipisci nobis rerum reiciendis impedit eos quibusdam ut minus totam saepe eum, a, eveniet corrupti aut omnis debitis?</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores mollitia beatae, cupiditate, perspiciatis adipisci doloremque fugit ipsum unde consectetur totam quidem voluptate vel nemo iusto? Doloremque minus nostrum reiciendis adipisci.
            </p>
          </div>
        </div>
      </section>
      <section className="about__Vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem vero veniam explicabo recusandae quas fuga illum doloremque nulla necessitatibus itaque, dolore voluptatem enim, esse porro nesciunt velit quasi placeat inventore.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero voluptas illum perspiciatis? Adipisci nobis rerum reiciendis impedit eos quibusdam ut minus totam saepe eum, a, eveniet corrupti aut omnis debitis?</p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our Vision Image" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our Mission Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem vero veniam explicabo recusandae quas fuga illum doloremque nulla necessitatibus itaque, dolore voluptatem enim, esse porro nesciunt velit quasi placeat inventore.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero voluptas illum perspiciatis? Adipisci nobis rerum reiciendis impedit eos quibusdam ut minus totam saepe eum, a, eveniet corrupti aut omnis debitis?</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores mollitia beatae, cupiditate, perspiciatis adipisci doloremque fugit ipsum unde consectetur totam quidem voluptate vel nemo iusto? Doloremque minus nostrum reiciendis adipisci.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About