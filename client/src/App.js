import React, {useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
// import { jwtDecode } from "jwt-decode";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import './index.css';
import Loading from './components/Loading';
import Home from './components/Home';


function App() {

  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    // <GoogleLogin
    //   onSuccess={(credentialResponse) => {
    //     const credentialResponseDecoded = jwtDecode(credentialResponse.credential);
    //     console.log(credentialResponseDecoded);
        
    //   }}
    //   onError={() => {
    //     console.log("Login Failed");
    //   }}
    // />
    <div className='h-screen w-screen overflow-hidden'>
      {isLoading && <Loading />}
      {!isLoading && <Home />}
    </div>
  );
}

export default App;
