import React from 'react';
import { useState } from 'react';
import { useMutation } from '@apollo/client'; 
import { LOGIN_USER, ADD_USER } from '../../utils/mutations';


function SignInSignUp() {
    const [formState, setFormState] = useState({ username: '', email: '', password: '' });
    const [isSignUp, setIsSignUp] = useState(false); // State to toggle between sign in and sign up
    const [Login] = useMutation(LOGIN_USER);
    const [signup] = useMutation(ADD_USER);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const mutation = isSignUp ? signup : login;
            const { data } = await mutation({
                variables: { ...formState }
            });
            // Assuming you have a function to handle login after receiving the token
            auth.login(data.token);
        } catch (e) {
            console.error(e);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    return (
        <>
            <div className="w-96 backdrop-blur-lg bg-opacity-80 rounded-lg shadow-lg p-5 bg-gray-900 text-white">
                <h2 className="text-2xl font-bold pb-5">{isSignUp ? 'Sign Up' : 'Login'}</h2>
                <form onSubmit={handleFormSubmit}>
                    {isSignUp && (
                        <div className="mb-4">
                            <label htmlFor="username" className="block mb-2 text-sm font-medium">Your username</label>
                            <input
                                type="text"
                                name="username"
                                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                                placeholder="jsmith1"
                                value={formState.username}
                                onChange={handleChange}
                            />
                        </div>
                    )}
                    {isSignUp && (
                            <div class="mb-4">
                        <label for="email" class="block mb-2 text-sm font-medium">Your email</label>
                        <input
                            type="email"
                            id="email"
                            class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                            placeholder="andrew@mail.com"
                            required
                            value={formState.email}
                            onChange={handleChange}
                        />
                        </div>                    
                    )}    
                    {isSignUp && (
                        <div class="mb-4">
                        <label for="password" class="block mb-2 text-sm font-medium">Your password</label>
                        <input
                            type="password"
                            id="password"
                            class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                            placeholder="*********"
                            required
                            value=""
                            onChange={handleChange}
                        />
                        </div>
                    )}
                        <div className="flex items-center justify-between mb-4">
                        <button
                            type="button"
                            onClick={() => setIsSignUp(false)}
                            className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5 w-full sm:w-auto"
                        >
                            Log In
                        </button>
                        <button
                            type="button"
                            onClick={() => setIsSignUp(true)}
                            className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5 w-full sm:w-auto"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default SignInSignUp;


// import React from 'react';
// import { useState } from 'react';
// // import auth from '../utils/auth';   
// import { useMutation } from '@apollo/client'; 
// import { LOGIN_USER, SIGNUP_USER } from '../utils/mutations';


// function Signup () {
//     const [formState, setFormState] = useState({ username:'', email: '', password: '' });
//     // const [login, { error }] = useMutation(LOGIN_USER);
//     const [signup] = useMutation(addUser);
//     const [validate] = useState(false);
    
//     const handleFormSubmit = async (event) => {
//         event.preventDefault();
//         try {
//             const { data } = await signup({
//                 variables: { ...formState }
//             });
//             auth.signup(data.signup.token);
//         } catch (e) {
//             console.error(e);
//         }
//     }

//     const handleChange = (event) => {
//         const { name, value } = event.target;
//         setFormState({
//             ...formState,
//             [name]: value
//         });
//     }

//     setFormState({ username: '', email: '', password: '' });

//     return (
//         <>
//         <div></div>
//             <div class="w-96 backdrop-blur-lg bg-opacity-80 rounded-lg shadow-lg p-5 bg-gray-900 text-white">
//             <h2 class="text-2xl font-bold pb-5">Login</h2>
//             <form onSubmit={handleFormSubmit}>
//                 <div class="mb-4">
//                 <label for="name" class="block mb-2 text-sm font-medium">Your name</label>
//                 <input
//                     type="text"
//                     id="userName"
//                     class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
//                     placeholder="jsmith1"
//                     required
//                     value=""
//                     onChange={handleChange}

//                 />
                // </div>
                // <div class="mb-4">
                // <label for="email" class="block mb-2 text-sm font-medium">Your email</label>
                // <input
                //     type="email"
                //     id="email"
                //     class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                //     placeholder="andrew@mail.com"
                //     required
                //     value=""
                //     onChange={handleChange}

                // />
                // </div>
                // <div class="mb-4">
                // <label for="password" class="block mb-2 text-sm font-medium">Your password</label>
                // <input
                //     type="password"
                //     id="password"
                //     class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                //     placeholder="*********"
                //     required
                //     value=""
                //     onChange={handleChange}

                // />
                // </div>
//                 <div>
//                 <p class="text-red-500 pb-5"></p>
//                 </div>
//                 <div class="flex items-center justify-between mb-4">
//                 <button
//                     type="submit"
//                     class="text-white bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5 w-full sm:w-auto"
//                 >
//                     Log In
//                 </button>
//                 <button
//                     type="submit"
//                     class="text-white bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5 w-full sm:w-auto"
//                 >
//                     Sign Up
//                 </button>

//                 </div>
//             </form>
//             </div>
//         </>
// )
// }

// export default Signin;