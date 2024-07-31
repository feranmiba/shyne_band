import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbars/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About'
import Service from './components/Services/Service';
import Event from './components/Events/Event';
import Footer from './components/Footer';
import Igbo from './components/Events/Igbo';
import Contact from './components/Events/Contact';
import MobileNav from './components/Navbars/MobileNavbar';

function App() {
  return (
    <div>
    <Navbar />
    <MobileNav />
    <Routes>
     <Route path='/' element={ <Home /> } />
     <Route path='/about' element={ <About /> } />
     <Route path='/service' element={ <Service /> } />
     <Route path='/event' element={ <Event /> }>
     <Route path="igbo" element={ <Igbo /> } />
     </Route>
     <Route path="/contact" element={ <Contact /> } />
     </Routes>

     <Footer />

    </div>
  );
}

export default App;