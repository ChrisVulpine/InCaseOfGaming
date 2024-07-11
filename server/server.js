const express = require('express');
const path = require('path');


const { ApolloServer } = require('apollo-server-express');
const { expressMiddleware } = require('@apollo/server/express');
const {authMiddleware} = require('./utils/auth');

const db = require('./config/connection');
const { typeDefs, resolvers } = require('./schemas');
//const routes = require('./routes');


const PORT = process.env.PORT || 3001;
const server = new ApolloServer({ typeDefs, resolvers });
const app = express();




async function startServer() {
  await connectToDatabase();

  const app = express();
  const server = new ApolloServer({ typeDefs, resolvers });
  
  await server.start(); // Start Apollo Server
  
  server.applyMiddleware({ app });

  app.listen({ port: 3000 }, () => {
    console.log(`Server ready at http://localhost:3000${server.graphqlPath}`);
  });
}

startServer();