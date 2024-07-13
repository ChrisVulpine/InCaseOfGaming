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

app.use(cors());

const server = new ApolloServer({ //This layout works!!!
  typeDefs, 
  resolvers,
  context: ({ req}) => {
    // console.log('req object:', req);
    // return {};
    // try{
    // expressMiddleware({ app, path: `/graphql` });
  // const auth = authMiddleware(req);
  // return { auth };
    // } catch (err) {
    //   console.error('Context creation failed:', err);
    //   throw new GraphQLError('Context creation failed:', {
    //     extensions: {
    //       code: 'CONTEXT_CREATION_FAILED',
    //     exception: err,
    //     },
    //   });
    //  },
},
  introspection: true, //process.env.NODE_ENV === 'development',
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