import './Plans.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_4.jpg'
import Card from '../../UI/Card'
import { plans } from '../../data'
const Plans = () => {
  return (
    <>
      <Header title="Membership Plans" image={HeaderImage}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, expedita amet. Maxime numquam pariatur sint, vel recusandae, necessitatibus eum animi, quos alias sapiente impedit doloremque sunt architecto! Culpa, nostrum officia!
      </Header>
      <section className='plans'>
        <div className="conatainer plans__container">
          {plans.map(({ id, name, desc, price, features }) => {
            return <Card key={id} className='plan'>
              <h3>{name}</h3>
              <small>{desc}</small>
              <h1>{`Rs. ${price}`}</h1>
              <h2>/month</h2>
              <h4>Features</h4>
              {
                features.map(({ feature, available }, index) => {
                  return <p key={index} className={!available ? 'disabled' : ''}>{feature}</p>
                })
              }
              <button className='btn lg'>Choose Plan</button>
            </Card>
          })
          }
        </div>
      </section>
    </>

  )
}

export default Plans