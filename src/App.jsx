import './styles/main.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Layouts/Header';
function App() {

  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<h1>About</h1>} />
          <Route path='/menu' element={<h1>Our Menu</h1>} />
          <Route path='/shop' element={<h1>Shop</h1>} />
          <Route path='/blog' element={<h1>Blog</h1>} />
          <Route path='/contact' element={<h1>Contact</h1>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
