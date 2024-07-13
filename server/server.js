const express = require('express');
// const path = require('path');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');
const db = require('./config/connection');
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
const { GraphQLError } = require('graphql');
// const { expressMiddleware } = require('apollo-server-express');

//const routes = require('./routes');


const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  context: ({ req}) => {
  const auth = authMiddleware(req);
  return { auth };
},
  introspection: process.env.NODE_ENV !== 'production',
  playground: true,
  });




async function startServer() {
  try {  
    
    await server.start(); // Start Apollo Server
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
  
    server.applyMiddleware({ app, path: `/graphql` });

  // server.applyMiddleware({ app });
    db.once('open', () => {
      app.listen( PORT, () => {
        console.log(`API server running on port ${PORT}!`);
        console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
      });
    });

    db.on('error', (err) => {
      console.error('MongoDB connection error: ', err);
    }); 
  }catch(err){
  console.log('Error starting server: ', err);
  }
};

startServer();