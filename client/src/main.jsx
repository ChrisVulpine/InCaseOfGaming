import './App.css';
import { Outlet } from 'react-router-dom';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import React from 'react';
import { createRoot } from 'react-dom/client';


// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: 'http://localhost:3000/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {

  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');

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

const root = createRoot(document.getElementById('root'))
root.render(
    
    <ApolloProvider client={client}>
      <App />
      <Outlet />
    </ApolloProvider>
  );


export default App;