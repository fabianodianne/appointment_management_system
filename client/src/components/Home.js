import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
// import { jwtDecode } from "jwt-decode";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import '../index.css';
import Dashboard from './Dashboard';

const Home = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const [user, setUser] = useState([]);
    const [profile, setProfile] = useState([]);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed: ', error)
    });

    useEffect(
        () => {
            if (user) {
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        setProfile(res.data);
                    })
                    .catch((err) => console.log(err));
            }
        },
        [user]
    );

    const logOut = () => {
        googleLogout();
        setProfile(null);
    };

    return (
        <div className='h-screen overflow-hidden'>
            {profile ? (
                <Router>
                    <Routes>
                        <Route
                            path="/"
                            element={<Dashboard picture={profile.picture} name={profile.name} email={profile.email} logOut={logOut} />}
                        />
                    </Routes>
                </Router>
            ) : (
                <div>
                    <header className="fixed inset-x-0 top-0 z-50">
                        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                                <div className="flex lg:flex-1">
                                    <button>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#6498d8"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="h-8 w-8"
                                        >
                                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                            <line x1="16" y1="2" x2="16" y2="6" />
                                            <line x1="8" y1="2" x2="8" y2="6" />
                                            <line x1="3" y1="10" x2="21" y2="10" />
                                        </svg>
                                    </button>
                            </div>
                            <div className="lg:flex lg:flex-1 lg:justify-end">
                                    <button onClick={() => login()} className="text-sm font-semibold leading-6 text-darkText hover:text-gray-950">
                                    Log in <span>&rarr;</span>
                                </button>
                            </div>
                        </nav>
                    </header>

                    <div className="relative isolate px-6 pt-14 lg:px-8">
                        <div
                            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                            aria-hidden="true"
                        >
                            <div
                                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                                style={{
                                    clipPath:
                                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                                }}
                            />
                        </div>
                        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                            <div className="text-center">
                                <h1 className="text-4xl font-bold tracking-tight text-title sm:text-6xl">
                                    Master your calendar
                                </h1>
                                <p className="mt-6 text-lg leading-8 text-darkText">
                                    Effortless appointment management starts here. Simplify your schedule, stay organized, and take control with Appointify.
                                </p>
                                <div className="mt-10 flex items-center justify-center gap-x-6">
                                    <button
                                            onClick={() => login()}
                                        className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primaryHover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primaryHover"
                                    >
                                        Get started
                                    </button>
                                    <p className="text-sm font-semibold leading-6 text-secondary hover:text-secondaryHover">
                                        Learn more <span aria-hidden="true">→</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                            aria-hidden="true"
                        >
                            <div
                                className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                                style={{
                                    clipPath:
                                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                                }}
                            />
                        </div>
                    </div>

                </div>


            )}
        </div>

    );
}


export default Home;
