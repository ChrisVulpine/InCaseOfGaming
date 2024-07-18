// import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { useState } from 'react';
import { useMutation } from '@apollo/client'; 
import { LOGIN_USER, ADD_USER } from '../../utils/mutations';




//========================================================================
// Functions to add to Login and Add User using mutations -cdl
//========================================================================

function LogInSignUp() {
    const [formState, setFormState] = useState({ username: '', email: '', password: '' });
    const [login] = useMutation(LOGIN_USER);
    const [addUser] = useMutation(ADD_USER);
    //Just FYI(Previous code was for a single button. The new code is for two separate buttons - a sign up and a login button.)
    const navigate = useNavigate();
    //updates form state after user input
    const handleChange = (event) => {
        // console.log("handleChange called");
        // event.preventDefault()
        const { name, value } = event.target;
        setFormState(prevState => ({ ...prevState, [name]: value }));
       };

    //============= Validates Input Form =================//
    const validateForm = () => {
        console.log("validateForm called");

        const { username, email, password } = formState;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!username || !email || !password) {
            alert('All fields are required.');
            console.log (formState);
            return false;
        }
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            console.log (formState);
            return false;

        } else if (password.length < 8) {
            alert('Password must be at least 8 characters long.');
            console.log (formState);
            return false;
        }
        return true; // Form is valid
    };

//========================================================================
// Function to handle login using mutations -cdl
//========================================================================

    const handleLogin = async (event) => {
        event.preventDefault();

        console.log(formState)
        console.log("handleLogin called");


        if (!validateForm()) return; //if validateForm test fails
        console.log('Logging in with:', formState);

        try {
            const { data } = await login({
                variables: { ...formState },
            });
            console.log('Login successful:', data);
            // Assuming `data` includes a `token` and `userId`
            const token = data.login.token; // Get the auth token
            const userId = data.login.user._id; // Get the user ID

        // const { token, userId } = data;
            // const data = { token, userId}

        // Store the token in localStorage or another storage mechanism
        localStorage.setItem('token_id', token);
        localStorage.setItem('userId', userId);

        console.log('Token stored:', token)
        console.log('userId stored:', userId)






            navigate('/'); // Redirect to home page after login
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

//========================================================================
// Function to handle sign up using mutations -cdl
//========================================================================

    const handleSignup = async (event) => {
        
        event.preventDefault();
        console.log(formState);
        console.log("handleSignup called");
        

        if (!validateForm()) return;  //if validateForm test fails
        console.log('Signing up with:', formState);

        //insert signup logic
        try {
            const { data } = await addUser({
                variables: { ...formState },
            });
            console.log('Signup successful:', data);
            const token = data.addUser.token; // Get the auth token
            const userId = data.addUser.user._id; // Get the user ID
            localStorage.setItem('token_id', token);
            localStorage.setItem('userId', userId);
            navigate('/'); // Redirect to home page after login
        } catch (error) {
            console.error('Error signing up:', error);
        }
    };

        
//========================================================================

    return (
        <>
            <div className="w-96 m-auto backdrop-blur-lg bg-opacity-80 rounded-lg shadow-lg p-5 bg-gray-900 text-white">
                <h2 className="text-2xl font-bold pb-5"></h2>

                <form>
                        <div className="mb-4">
                            <label htmlFor="username" className="block mb-2 text-sm font-medium">Your username</label>
                            <input
                                type="text"
                                name="username"
                                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                                placeholder="jsmith1"
                                required
                                defaultValue={formState.username}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium">Your email</label>
                            <input
                                type="email"
                                name="email"
                                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                                placeholder="quack@mail.com"
                                required
                                defaultValue={formState.email}
                                onChange={handleChange}
                            />
                        </div>      

                        <div className="mb-4">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium">Your password</label>
                            <input
                                type="password"
                                name="password"
                                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                                placeholder="*********"
                                required
                                defaultValue={formState.password}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="flex items-center justify-between mb-4">
                        <button
                            // type="button"
                            onClickCapture={handleLogin}
                            className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5 w-full sm:w-auto"
                        >
                            Log In
                        </button>
                        <button
                            // type="button"
                            onClickCapture={handleSignup}
                            className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5 w-full sm:w-auto"
                        >
                            Sign Up
                        </button>
                        </div>
                </form>
                <button className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5 w-full sm:w-auto">
                    <NavLink to="/">
                    Nevermind, Go Back
                    </NavLink>
                </button>
            </div>
        </>
    );
}

export default LogInSignUp;


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