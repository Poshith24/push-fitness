import './Notfound.css'
import { Link } from 'react-router-dom'
const Notfound = () => {
  return (
    <section>
      <div className="container notfound__container">
        <h2>
          Page Not Found
        </h2>
        <Link to="/" className='btn'>Go To Home</Link>
      </div>
    </section>
  )
}

export default Notfound