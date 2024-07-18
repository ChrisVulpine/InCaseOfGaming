import './App.css';
import './index.css';
import { Outlet } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import React from 'react';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
  // uri: 'http://localhost:3000/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {

  // get the authentication token from local storage if it exists
  // const token = localStorage.getItem('id_token');
  const token = localStorage.getItem('authToken');
  console.log(token)
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({

  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),

  cache: new InMemoryCache(),
});

function App () {
  return (
    <ApolloProvider client={client}>
        {/* <ul> // Navigation bar if desired//
          <li><a href="/">Home</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/wishlist">Wishlist</a></li>
          <li><a href="/likedGames">Liked Games</a></li>
      </ul> */}
    <Outlet />
  </ApolloProvider >
  )
}




export default App;




// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Signin from './assets/components/Signin'



// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//     <Signin />
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>InCaseOfGaming</h1>
//       <div className="card">
//         {/* <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button> */}
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
