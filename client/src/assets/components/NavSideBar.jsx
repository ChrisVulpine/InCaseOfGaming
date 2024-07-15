import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './../images/InCaseOfGaming.png';


function NavSideBar() {



    const headerIndex = {
        zIndex:0
    }

    const navIndex = {
        zIndex:1
    }

    return (
        <div class="isolate object-left items-center max-w-dvh md:w-100 2xl:w-screen h-60 overflow-hidden text-gray-400 bg-slate-900" style={headerIndex}>
            <div class="grid grid-cols-4 grid-rows-2 h-60 items-stretch justify-center sm:ml-0 md:ml-72 lg:ml-64 p-6">
                <div class="col-span-4 text-8xl text-center">
                    In Case Of Gaming
                </div>
                <div class="col-start-2 col-end-4 place-self-end w-full max-w-lg">
                    <form class="mt-5 sm:flex sm:items-center">
                        <input id="q" name="q" class="inline w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-3 leading-5 placeholder-gray-500 focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm" placeholder="Keyword" type="search" autofocus="" value="" />
                        <button type="submit" class="mt-3 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                            Search
                        </button>
                    </form>
                </div>
            </div>
            <div style={navIndex} class="fixed flex-col items-center -mt-60 w-24 md:w-52 lg:w-64 h-dvh overflow-hidden text-gray-400 bg-slate-900 ">
                <div class="flex flex-col items-center w-full mt-3 border-b ml-2 border-gray-700">
                    <NavLink to="/" className={({ isActive }) => isActive ? 'active sm:px-2 md:px-8 mt-2 rounded hover:bg-gray-700 hover:text-gray-300' : 'sm:px-2 md:px-8 mt-2 py-0 md:py-10 rounded hover:bg-gray-700 hover:text-gray-300'}>
                    <img src={Logo} ></img>
                    </NavLink>
                </div>
                <div class="w-full px-2">
                    <div class="flex flex-col items-center w-full mt-3 border-b border-gray-700">
                        <NavLink to="/" className={({ isActive }) => isActive ? 'active flex items-center w-full h-32 px-3 mt-2 py-0 md:py-10 rounded hover:bg-gray-700 hover:text-gray-300' : 'flex items-center w-full h-32 px-3 mt-2 py-0 md:py-10 rounded hover:bg-gray-700 hover:text-gray-300'}>
                            {/*can insert small icon here*/}
                            <span class="ml-2 text-sm md:text-lg lg:text-xl font-medium">Search</span>
                        </NavLink>
                        <NavLink to="/LikedGames" className={({ isActive }) => isActive ? 'active flex items-center w-full h-32 px-3 mt-2 py-0 md:py-10 rounded hover:bg-gray-700 hover:text-gray-300' : 'flex items-center w-full h-32 px-3 mt-2 py-0 md:py-10 rounded hover:bg-gray-700 hover:text-gray-300'}>
                            {/*can insert small icon here*/}
                            <span class="ml-2 text-sm md:text-lg lg:text-xl font-medium">Favorites</span>
                        </NavLink>
                        <NavLink to="/Wishlist" className={({ isActive }) => isActive ? 'active flex items-center w-full h-32 px-3 mt-2 py-0 md:py-10 rounded hover:bg-gray-700 hover:text-gray-300' : 'flex items-center w-full h-32 px-3 mt-2 py-0 md:py-10 rounded hover:bg-gray-700 hover:text-gray-300'}>
                            {/*can insert small icon here*/}
                            <span class="ml-2 text-sm md:text-lg lg:text-xl font-medium">Wishlist</span>
                        </NavLink>

                    </div>
                </div>
                <a class="flex items-center w-full h-12 px-3 mt-2 py-0 md:py-10 rounded hover:bg-gray-700 hover:text-gray-300" href="#">

                    {/* below is a portfolio icon*/}
                    {/* <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg> */}
                    <span class="ml-2 md:text-md  lg:text-xl font-medium">Account</span>
                </a>
            </div>
        </div>
    )
}

export default NavSideBar;

{/* <a class="flex items-center w-full h-12 px-3 mt-2 py-0 md:py-10 text-gray-200 bg-gray-700 rounded" href="#"> */}
