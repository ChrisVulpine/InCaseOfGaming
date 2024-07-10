const UserModel = require('../models/user.model');

const resolvers = {
  Query: {
    getAllUsers: async () => await UserModel.find(),
  },
  Mutation: {
    createUser: async (_, { name, age }) => {
      const newUser = new UserModel({ name, age });
      return await newUser.save();
    },
  },
};

module.exports = resolvers;