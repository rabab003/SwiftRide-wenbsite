import Navigation from './Components/Blocks/Navigation'
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import Help from './Components/Pages/Help'
import Benefits from './Components/Pages/Benefits'
import { Route , Routes } from 'react-router-dom'

function App() {

  return (
    <>

    <div className='bg-[#101010] h-screen text-white'>
      <Navigation/>

       <Routes>
         <Route path='/home' element={<Home/>} />
         <Route path='/about' element={<About/>} />
         <Route path='/benefits' element={<Benefits/>} />
         <Route path='/help' element={<Help/>} />
      </Routes>
     
     
     </div>




    </>
    
  )
}

export default App
