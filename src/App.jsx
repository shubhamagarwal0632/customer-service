import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import './styles/App.scss'
import './styles/Header.scss'
import './styles/Home.scss'
import Footer from './components/Footer'
import './styles/Footer.scss'
import './styles/Contact.scss'
import Contact from './components/Contact'
import Login from './components/Login'

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          {/* <Route path='/contact' element={<Contact/>}/> */}
          <Route path='/login' element={<Login/>}/>
        </Routes>
        <Login/>
        <Footer/>
      </Router>
    </>
  )
}

export default App
