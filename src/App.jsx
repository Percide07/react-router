import './App.css'
import About from './component/About'
import Contact from './component/Contact'
import Home from './component/Home'
import { BrowserRouter,Link,Route,Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
      <nav>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
        </div>
      </nav>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/> 
          <Route path='/about' element={<About/>}/> 
          <Route path='/contact' element={<Contact/>}/> 
        </Routes>  
      </main>
      </BrowserRouter>
    </>
  )
}

export default App
