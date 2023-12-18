import React, { useState, useEffect, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Dialog } from '@headlessui/react';
// import axios from "axios";

import Search from "./Search";

const navigation = [
    { name: 'Dashboard' },
    { name: 'Appointments' },
    { name: 'Calendar' },
    { name: 'Analytics' },
];


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Home = (props) => {
    const { picture, name, email, logOut } = props;

    const items = ['Purple', 'Pink', 'Orange', 'Blue'];

    const userNavigation = [
        { name: 'Sign Out', onClick: { logOut } },
    ];


    return (
        <div>
            <header className="fixed inset-x-0 top-0 z-50">
                <Disclosure as="nav" className="">
                    {({ open }) => (
                        <>
                            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                <div className="flex h-16 items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            {/* <img
                                                className="h-8 w-8"
                                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                                alt="MeetMe"
                                            /> */}
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
                                        <div className="hidden md:block">
                                            <div className="ml-10 flex items-baseline">
                                                {navigation.map((item) => (
                                                    <button
                                                        key={item.name}
                                                        className="text-secondary hover:text-secondaryHover hover:bg-indigo-50 rounded-md px-3 py-2 text-sm font-medium"
                                                    >
                                                        {item.name}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden md:block">
                                        <div className="ml-4 flex items-center md:ml-6">
                                            <button
                                                type="button"
                                                className="relative rounded-full p-1 text-accentGreen hover:text-accentGreenHover
                                                hover:bg-green-50
                                                focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-accentGreen"
                                            >
                                                <span className="absolute -inset-1.5" />
                                                <span className="sr-only">View notifications</span>
                                                <BellIcon className="h-6 w-6" aria-hidden="true" />
                                            </button>

                                            <Menu as="div" className="relative ml-3">
                                                <div>
                                                    <Menu.Button className="relative flex max-w-xs items-center rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primaryHover">
                                                        <span className="absolute -inset-1.5" />
                                                        <span className="sr-only">Open user menu</span>
                                                        <img className="h-8 w-8 rounded-full" src={picture} alt="" />
                                                    </Menu.Button>
                                                </div>
                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95"
                                                >
                                                    <Menu.Items className="absolute w-fit right-0 z-10 mt-2 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                        <div className="">
                                                            <a className="block px-4 pt-2 text-sm text-darkText">
                                                                {name}
                                                            </a>
                                                            <a className="block px-4 pb-2 text-xs text-darkText border-b border-secondary">
                                                                {email}
                                                            </a>
                                                        </div>
                                                        {userNavigation.map((item) => (
                                                            <Menu.Item key={item.name} className="flex justify-start">
                                                                {({ active }) => (
                                                                    <button
                                                                        onClick={logOut}
                                                                        className={classNames(
                                                                            active ? 'text-primaryHover' : '',
                                                                            'block px-4 py-2 text-sm text-darkText w-52'
                                                                        )}
                                                                    >
                                                                        {item.name}
                                                                    </button>
                                                                )}
                                                            </Menu.Item>
                                                        ))}

                                                    </Menu.Items>
                                                </Transition>
                                            </Menu>
                                        </div>
                                    </div>
                                    <div className="-mr-2 flex md:hidden">
                                        <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-primary font-bold hover:bg-indigo-50 hover:text-primaryHover focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-50">
                                            <span className="absolute -inset-0.5" />
                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                            ) : (
                                                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                            )}
                                        </Disclosure.Button>
                                    </div>
                                </div>
                            </div>

                            <Disclosure.Panel className="md:hidden">
                                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                                    {navigation.map((item) => (
                                        <Disclosure.Button
                                            key={item.name}
                                            as="a"
                                            className={classNames(
                                                item.current ? 'text-primary' : 'text-secondary hover:bg-indigo-50 hover:text-secondaryHover',
                                                'block rounded-md px-3 py-2 text-base font-medium cursor-pointer'
                                            )}
                                        >
                                            {item.name}
                                        </Disclosure.Button>
                                    ))}
                                </div>
                                <div className="border-t border-indigo-50 pb-3 pt-4">
                                    <div className="flex items-center px-5">
                                        <div className="flex-shrink-0">
                                            <img className="h-10 w-10 rounded-full" src={picture} alt="" />
                                        </div>
                                        <div className="ml-3">
                                            <div className="text-base font-medium leading-none text-darkText">{name}</div>
                                            <div className="text-sm font-medium leading-none text-darkText">{email}</div>
                                        </div>
                                        <button
                                            type="button"
                                            className="relative ml-auto flex-shrink-0 rounded-full bg-green-50 p-1 text-accentGreen hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-accentGreen"
                                        >
                                            <span className="absolute -inset-1.5" />
                                            <span className="sr-only">View notifications</span>
                                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>
                                    <div className="mt-3 space-y-1 px-2">
                                        {userNavigation.map((item) => (
                                            <Disclosure.Button
                                                key={item.name}
                                                as="a"
                                                onClick={logOut}
                                                className="block rounded-md px-3 py-2 text-base font-medium text-secondary hover:bg-indigo-50 hover:text-secondaryHover cursor-pointer"
                                            >
                                                {item.name}
                                            </Disclosure.Button>
                                        ))}
                                    </div>
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </header>

            <main>
                <div className="h-screen mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 pt-16 flex gap-2 text-sm font-medium text-secondary ">
                    {/* DASHBOARD */}
                    <div className="bg-offWhite w-2/3 rounded-lg border-2 border-indigo-100 p-2">
                        <p>calendar here</p>
                    </div>
                    <div className="bg-offWhite w-1/3 rounded-lg border-2 border-indigo-100 p-2">
                        
                        <Search data={items} />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;