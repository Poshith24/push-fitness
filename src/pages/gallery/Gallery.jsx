import './Gallery.css'
import HeaderImage from '../../images/header_bg_3.jpg'
import Header from '../../components/Header'


const Gallery = () => {
  const galleryLength = 15;
  const images = []
  for (let i = 1; i <= galleryLength; i++) {
    images.push(require(`../../images/gallery${i}.jpg`))
  }
  //console.log(images);
  return (
    <>
      <Header title="Our Gallery" image={HeaderImage}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus odio consectetur itaque nemo assumenda dolorum veritatis sequi commodi tenetur rem quae ullam, velit deserunt, tempore esse saepe non laudantium nulla!
      </Header>
      <section className="gallery">
        <div className="container gallery__container">
          {
            images.map((image, index) => {
              return <article key={index}>
                <img src={image} alt={`Gallery Image ${index + 1}`} />
              </article>
            })
          }
        </div>
      </section>
    </>
  )
}

export default Gallery