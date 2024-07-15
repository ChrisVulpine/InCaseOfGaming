import React from 'react';


function SideBarTest() {
    const headerIndex = {
        zIndex:0
    }

    const navIndex = {
        zIndex:1
    }

    return (
        <div style={headerIndex} class="isolate object-left items-center w-dvw h-48 overflow-hidden text-gray-400 bg-gray-900 ">
            <div style={navIndex} class="fixed object-left items-center w-24 md:w-48 lg:w-60 h-dvh overflow-hidden text-gray-400 bg-gray-900 ">
                <a class="flex items-center w-full h-12 px-3 mt-2 py-0 md:py-10" href="#">
                <svg class="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path
                    d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                </svg>
                <span class="ml-2 text-sm md:text-md  lg:text-xl font-bold">The App</span>
                </a>
                <div class="w-full px-2">
                    <div class="flex flex-col items-center w-full mt-3 border-t border-gray-700">
                        <a class="flex items-center w-full h-12 px-3 mt-2 py-0 md:py-10 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
                            {/*can insert small icon here*/}
                            <span class="ml-2 text-sm md:text-md lg:text-xl">Dasboard</span>
                        </a>
                        <a class="flex items-center w-full h-12 px-3 mt-2 py-0 md:py-10 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
                            {/*can insert small icon here*/}
                            <span class="ml-2 text-sm md:text-md  lg:text-xl font-medium">Search</span>
                        </a>
                        <a class="flex items-center w-full h-12 px-3 mt-2 py-0 md:py-10 text-gray-200 bg-gray-700 rounded" href="#">
                            {/*can insert small icon here*/}
                            <span class="ml-2 text-sm md:text-md  lg:text-xl font-medium">Insights</span>
                        </a>
                        <a class="flex items-center w-full h-12 px-3 mt-2 py-0 md:py-10 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
                            {/*can insert small icon here*/}
                            <span class="ml-2 text-sm md:text-md  lg:text-xl font-medium">Docs</span>
                        </a>
                    </div>
                    <div class="flex flex-col items-center w-full mt-2 py-0 md:py-10 border-t border-gray-700">
                        <a class="flex items-center w-full h-12 px-3 mt-2 py-0 md:py-10 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
                            {/*can insert small icon here*/}
                            <span class="ml-2 text-sm md:text-md  lg:text-xl font-medium">Products</span>
                        </a>
                        <a class="flex items-center w-full h-12 px-3 mt-2 py-0 md:py-10 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
                            {/*can insert small icon here*/}
                            <span class="ml-2 text-sm md:text-md  lg:text-xl font-medium">Settings</span>
                        </a>
                        <a class="relative flex items-center w-full h-12 px-3 mt-2 py-0 md:py-10 rounded hover:bg-gray-700 hover:text-gray-300"
                            href="#">
                            {/*can insert small icon here*/}
                            <span class="ml-2 text-sm md:text-md  lg:text-xl font-medium">Messages</span>
                            <span class="absolute top-0 left-0 w-2 h-2 mt-2 py-0 md:py-10 ml-2 text-sm bg-indigo-500 rounded-full"></span>
                        </a>
                    </div>
                </div>
                <a class="flex items-center justify-center w-full h-16 mt-auto bg-gray-800 hover:bg-gray-700 hover:text-gray-300"
                    href="#">
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

export default SideBarTest;