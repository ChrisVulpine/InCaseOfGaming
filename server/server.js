const express = require('express');
const path = require('path');


const { ApolloServer } = require('apollo-server-express');
const db = require('./config/connection');
const { typeDefs, resolvers } = require('./schemas');
const authMiddleware = require('./utils/auth');
// const { expressMiddleware } = require('apollo-server-express');
// const {authMiddleware} = require('./utils/auth');



//const routes = require('./routes');


const PORT = process.env.PORT || 3001;
const server = new ApolloServer({ typeDefs, resolvers });
const app = express();




async function startServer() {
  try {  
    
  await server.start(); // Start Apollo Server
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  
  app.use('/graphql', expressMiddleware( server, { context: authMiddleware}));

  // server.applyMiddleware({ app });
  db.once('open', () => {
  app.listen( PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
  })}catch(err){
  console.log('Error starting server: ', err);
};
};

startServer();