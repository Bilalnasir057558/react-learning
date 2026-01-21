import { useDispatch } from "react-redux"
import React, { useEffect, useState } from 'react'
import authService from "./appwrite/auth";
import './App.css'
import { login, logout } from "./features/authSlice";
import {Header, Footer} from "./components"
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
    .then(userData => {
      if(userData) {
        dispatch(login(userData));
      } else {
        dispatch(logout());
      }
    })
    .finally(() => setLoading(false));
  }, [dispatch])
  
  return loading ? <div className="text-center">Loading...</div> : (
    <div className="min-h-screen flex flex-wrap bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App
