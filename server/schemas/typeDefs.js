const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    getAllUsers: [User!]!
  }

  type User {
    id: ID!
    name: String!
    age: Int!
  }

  type Mutation {
    createUser(name: String!, age: Int!): User!
  }
`;

module.exports = typeDefs;