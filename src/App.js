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
import Blogs from './Components/Blogs';
import Loading from './Components/Loading';
import Portfolio from './Components/Portfolio';
import PrivateRoute from './Components/PrivateRoute';
import Dashboard from './Components/Dashboard';
import AddAReviews from './Components/AddAReviews';
import MyOrders from './Components/MyOrders';
import MyProfile from './Components/MyProfile';

function App() {
  return (
    <div className='container mx-auto'>
      <Navbar />
      <Routes>

        <Route element={<PrivateRoute />}>
          <Route path='/portfolio' element={<Portfolio />}> </Route>
          <Route path='/dashboard' element={<Dashboard />}>
            <Route path='add-review' element={<AddAReviews />}></Route>
            <Route path='my-orders' element={<MyOrders />}></Route>
            <Route path='my-profile' element={<MyProfile />}></Route>
          </Route>
        </Route>


        <Route path='/' element={<Home />}> </Route>
        <Route path='/purchase' element={<Purchase />}> </Route>
        <Route path='/login' element={<Login />}> </Route>
        <Route path='/signup' element={<SignUp />}> </Route>
        <Route path='/resetpassword' element={<ResetPassword />}> </Route>
        <Route path='/blogs' element={<Blogs />}> </Route>
        {/* <Route path='/portfolio' element={<Portfolio />}> </Route> */}
        <Route path='/dashboard' element={<Dashboard />}> </Route>
        <Route path='/loading' element={<Loading />}> </Route>
        <Route path='*' element={<Error404 />}> </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
