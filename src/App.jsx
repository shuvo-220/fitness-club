import './App.css'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import bgImg from './assets/bg.png'
import Equipments from './components/Equiepments/Equipments'
import Banner from './components/Banner/Banner'
import img1 from './assets/2.png'
import img2 from './assets/3.png'

const bgStyle = {
  backgroundImage:`url(${bgImg})`,
  backgroundRepeat:"no-repeat",
  backgroundSize:'cover',
  backgroundPosition:'center',
  backgroundAttachment:'fixed'
}

const bannerData = {
  image:img1,
  title:'The Importants of Take Care of Yourself.',
  subtitle:'It is along established fact that s reader will be by readable content of a page when are the best product.It is along established fact that s reader will be by readable content of a page when are the best product.'
}

const banner2dData = {
  image:img2,
  title:'The Importants of Take Care of Yourself.',
  subtitle:'It is along established fact that s reader will be by readable content of a page when are the best product.It is along established fact that s reader will be by readable content of a page when are the best product.'
}

function App() {

  return (
    <>
      <div className='overflow-x-hidden'>
        <div style={bgStyle}>
          <Navbar />
          <Hero />
        </div>
        <Equipments />
        <Banner {...bannerData} />
        {/* <Banner {...banner2dData} /> */}
      </div>
    </>
  )
}

export default App
