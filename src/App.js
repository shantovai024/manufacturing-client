import { Route, Routes } from 'react-router-dom';
import './App.css';
import "react-multi-carousel/lib/styles.css";
import '@fortawesome/fontawesome-free/css/all.css'
import './assets/style.css'
import Navbar from './Components/Navbar';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer';
import Error404 from './Components/Error404';
import Purchase from './Components/Purchase';
import Login from './Components/Login';
import ResetPassword from './Components/ResetPassword';
import SignUp from './Components/SignUp';
import Loading from './Components/Loading';

function App() {
  return (
    <div className='container mx-auto'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}> </Route>
        <Route path='/purchase' element={<Purchase />}> </Route>
        <Route path='/login' element={<Login />}> </Route>
        <Route path='/signup' element={<SignUp />}> </Route>
        <Route path='/resetpassword' element={<ResetPassword />}> </Route>
        <Route path='/loading' element={<Loading />}> </Route>
        <Route path='*' element={<Error404 />}> </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
