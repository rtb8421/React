
import './App.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';

    function App() {
      return(
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path= "/" element={<Home/>}/>
          <Route path= "/About" element={<About/>}/>
          <Route path= "/Contact" element={<Contact/>}/>
          <Route path= "/Register" element={<Register/>}/>
          <Route path="/Login" element={<Login/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>

  );
}

export default App;
