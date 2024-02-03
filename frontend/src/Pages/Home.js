import Navbar from '../Components/Navbar'
import '../CSS/Home.css'
import Footer from '../Components/Footer'
function Home() {
  return (
    <div>
      <div className='Navbar'>
        <Navbar/>
      </div>
      <div className='Body'>
        <div className='Text'>
          Learn Continually,<br/> There's always<br/>
          "One more thing" <br/>to Learn.
        </div>
      </div>
      <div className='footer'>
        <Footer/>
      </div>
    </div>
  )
}

export default Home
