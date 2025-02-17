import { Route, BrowserRouter as Router , Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/landingpage'
import Navbar from './components/navbar'
// import AboutUs from './pages/aboutus'
import Footer from './components/footer'
// import ContactUs from './pages/contact'
// import FAQ from './pages/faq'
// import MembershipPage from './pages/membership'
// import PersonalTraining from './pages/extra'
import ScrollToTop from './utility/scrolltop'

function App() {

  return (
    <>  
       <Router> 
        <Navbar></Navbar>
        <ScrollToTop></ScrollToTop>
                    <Routes>
                      <Route path="/" element={<LandingPage />} />
                      {/* <Route path="/about" element={<AboutUs />} /> */}
                      {/* <Route path="/contact" element={<ContactUs />} /> */}
                      {/* <Route path="/faq" element={<FAQ />} /> */}
                      {/* <Route path="/memberships" element={<MembershipPage />} /> */}
                      {/* <Route path="/pt-small-group-training" element={<PersonalTraining />} /> */}
                      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                      {/* <Route path="*" element={<NotFound />} /> */}
                      
                    </Routes>
                    <Footer></Footer>
        </Router>
    </>
  )
}

export default App
