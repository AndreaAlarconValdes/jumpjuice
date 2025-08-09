import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Menu from './pages/Menu'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </>
  )
}

export default App
