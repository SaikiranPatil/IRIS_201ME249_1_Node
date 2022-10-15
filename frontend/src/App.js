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
import PageNotFound from './Components/Layouts/PageNotFound/PageNotFound';
import NewSubTask from './Components/Tasks/NewSubTask/NewSubTask';
import EditTask from './Components/Tasks/EditTask/EditTask';
import AllSubTAsks from './Components/Tasks/AllSubTasks/AllSubTasks';
import MailSucess from './Components/User/MailSucess/MailSucess';

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
        <Route excat path="/tasks/subtasks/me" element={<AllSubTAsks />} />
        <Route excat path="/task/edit/:id" element={<EditTask />} />
        <Route excat path="/task/subtask/create/:id" element={<NewSubTask />} />
        <Route excat path="/task/:id" element={<SingleTask />} />
        <Route excat path="/mail/sucess" element={<MailSucess />} />
        <Route excat path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
