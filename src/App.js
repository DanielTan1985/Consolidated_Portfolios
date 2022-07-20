import React  from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './components/pages/Home';
import Portfolios from './components/pages/Portfolios';
import PF01 from './components/Portfolios/PF01/PF01';
import PF02 from './components/Portfolios/PF02/PF02';
import PF03 from './components/Portfolios/PF03/PF03';
import PF04 from './components/Portfolios/PF04/PF04';
import PF05 from './components/Portfolios/PF05/PF05';
import About from './components/pages/About';
import Register from './Register';
import Login from './Login';
import SocialFollow from "./components/SocialFollow";




function App() {
	return (
	  <>
		<Router>
		<ScrollToTop />
		  <Navbar />
		  <Routes>
		  <Route path='/' exact element={<Home/>} />
            <Route path='/portfolios' element={<Portfolios/>} />
				<Route path='/portfolios/PF01' element={<PF01/>} />
				<Route path='/portfolios/PF02' element={<PF02/>} />
				<Route path='/portfolios/PF03' element={<PF03/>} />
				<Route path='/portfolios/PF04' element={<PF04/>} />
				<Route path='/portfolios/PF05' element={<PF05/>} />
			<Route path='/about' element={<About />}/>
			<Route path="/login" element={<Login />} />
            <Route path='/register' element={<Register/>} />
		  </Routes>
		  <SocialFollow />
		</Router>
	  </>
	);
  }
  
  export default App;
  