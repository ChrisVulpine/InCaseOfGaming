const express = require('express');
const { ApolloServer } = require('apollo-server-express');


const connectToDatabase = require('./config/connection');

// FIXME:Navigate to where Nate has these made!! //fixed!!
const typeDefs = require('./schemas/typedefs');
const resolvers = require('./schemas/resolvers');

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