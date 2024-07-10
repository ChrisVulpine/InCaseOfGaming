import React from 'react';


function Signin () {
    return (
        <>
        <div></div>
            <div class="w-96 backdrop-blur-lg bg-opacity-80 rounded-lg shadow-lg p-5 bg-gray-900 text-white">
            <h2 class="text-2xl font-bold pb-5">Login</h2>
            <form>
                <div class="mb-4">
                <label for="name" class="block mb-2 text-sm font-medium">Your name</label>
                <input
                    type="text"
                    id="name"
                    class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                    placeholder="Andrew Jackson"
                    required
                    value=""
                />
                </div>
                <div class="mb-4">
                <label for="email" class="block mb-2 text-sm font-medium">Your email</label>
                <input
                    type="email"
                    id="email"
                    class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                    placeholder="andrew@mail.com"
                    required
                    value=""
                />
                </div>
                <div class="mb-4">
                <label for="password" class="block mb-2 text-sm font-medium">Your password</label>
                <input
                    type="password"
                    id="password"
                    class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                    placeholder="*********"
                    required
                    value=""
                />
                </div>
                <div>
                <p class="text-red-500 pb-5"></p>
                </div>
                <div class="flex items-center justify-between mb-4">
                <button
                    type="submit"
                    class="text-white bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5 w-full sm:w-auto"
                >
                    Log In
                </button>
                <button
                    type="submit"
                    class="text-white bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5 w-full sm:w-auto"
                >
                    Sign Up
                </button>

                </div>
            </form>
            </div>
        </>
)
}

export default Signin;