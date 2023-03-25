import './App.css';
import LoginPage from './pages/LoginPage/LoginPage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from './pages/LandingPage/LandingPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import Home from './pages/Home/Home';
import Orders from './pages/Orders/Orders';
import BankAccountPage from './pages/BankAccountPage/BankAccountPage';
import PlaceOrder from './pages/PlaceOrderPage/PlaceOrder';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Routes>
            <Route path="/" element={<LandingPage />} exact />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<SignUpPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/placeOrder" element={<PlaceOrder />} />
            <Route path="/banks" element={<BankAccountPage />} />
          </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
