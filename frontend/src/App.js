import './App.css';
import React from "react";
import store from "./redux/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { loadUser } from "./redux/actions/userAction";
import Header from './Components/Layouts/Header/Header'
import Footer from './Components/Layouts/Footer/Footer'
import Login from './Components/User/Login/Login'
import Register from './Components/User/Register/Register'
import { ToastContainer } from 'react-toastify';
import Profile from './Components/User/Profile/Profile';
import Forgot from './Components/User/ForgotPassword/ForgotPassword';
import AllTasks from './Components/Tasks/AllTasks/AllTasks';
import ProtectedRoute from './Components/Route/ProtectedRoute'
import SingleTask from './Components/Tasks/SingleTask/SingleTask';
import NewTask from './Components/Tasks/NewTask/NewTask';

function App() {
  const { isAuthenticated, user, loading } = useSelector(state => state.user);

  React.useEffect(() => {
    store.dispatch(loadUser());
  }, [])
  return (
    <BrowserRouter>
      <Header user={user} isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path="/" element={<AllTasks />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/account" element={<Profile />} />
        <Route excat path="/tasks/new" element={<NewTask />} />
        <Route path="/task/:id" element={<SingleTask />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
