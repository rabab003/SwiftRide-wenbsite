import Navigation from './Components/Blocks/Navigation'
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import Help from './Components/Pages/Help'
import Benefits from './Components/Pages/Benefits'
import { Route , Routes } from 'react-router-dom'
import Error from './Components/Pages/ErrorPage'

function App() {

  return (
    <>

    <div className='bg-[#101010] h-screen text-white'>
      <Navigation/>

       <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/home' element={<Home/>} />
         <Route path='/about' element={<About/>} />
         <Route path='/benefits' element={<Benefits/>} />
         <Route path='/help' element={<Help/>} />
         <Route path='*' element={<Error/>}/>
      </Routes>
     
     
     </div>




    </>
    
  )
}

export default App
