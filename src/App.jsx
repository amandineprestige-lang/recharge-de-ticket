import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Tracking from './pages/Tracking.jsx'
import RechargeInfo from './pages/RechargeInfo.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/suivi" element={<Tracking />} />
        <Route path="/recharge" element={<RechargeInfo />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}
