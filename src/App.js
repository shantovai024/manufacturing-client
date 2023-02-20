import { Route, Routes } from 'react-router-dom';
import './App.css';
import "react-multi-carousel/lib/styles.css";
import '@fortawesome/fontawesome-free/css/all.css'
import './assets/style.css'
import Navbar from './Components/Navbar';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer';

function App() {
  return (
    <div className='container mx-auto'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}> </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
