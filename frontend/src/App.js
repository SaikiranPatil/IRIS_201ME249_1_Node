import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Components/Layouts/Header/Header'
import Footer from './Components/Layouts/Footer/Footer'
import Login from './Components/User/Login/Login'
import Register from './Components/User/Register/Register'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
