import './App.css';
import LoginPage from './pages/LoginPage/LoginPage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from './pages/LandingPage/LandingPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import Home from './pages/Home/Home';
import Orders from './pages/Orders/Orders';


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
          </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
