import './App.css'
import Home from './components/Nav/Nav'
import { Link } from 'react-router-dom'
import { Route,Routes, useLocation } from 'react-router-dom'
import Cats from './components/Cats/Cats'
import Dogs from './components/Dogs/Dogs'
import Products from './components/Products/Products'
import LearnMore from './components/LearnMore/LearnMore'
import Nav from './components/Nav/Nav'
import ShoppingCar from './components/ShoppingCar/ShoppingCar'

function App() {

  const location = useLocation()

  const {pathname} = location

  return (
    <div className="App"> 

      {        
        pathname === '/' ? <Link to={'/Nav'}><button>Hello, let's start ?</button></Link>        
          : 
      <Routes>
        <Route path='/Nav' element={<Home/>}/>
        <Route path='/cats' element={<Cats/>}/>
        <Route path='/dogs' element={<Dogs/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/learnMore' element={<LearnMore/>}/>
        <Route path='/shoppingCar' element={<ShoppingCar/>}/>
      </Routes>
      
      }   
      
    </div>
  )
}

export default App
