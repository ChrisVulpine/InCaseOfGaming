const mongoose = require('mongoose');

async function connectToDatabase() {
    try {
      await mongoose.connect('mongodb://localhost:27017/graphql-incaseofgaming', {
      });
      console.log('Successfully connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  }

  connectToDatabase();

  module.exports = mongoose.connection;