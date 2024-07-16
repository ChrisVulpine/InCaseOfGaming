// const mongoose = require('mongoose');

// async function connectToDatabase() {
//     try {
//       await mongoose.connect('mongodb://localhost:27017/graphql-incaseofgaming',
//          {
//       });
//     } catch (error) {
  //       console.error('Error connecting to MongoDB:', error);
  //     }
  //   }
  
  //   connectToDatabase();
  
  //   module.exports = mongoose.connection;
  
  
  const mongoose = require('mongoose');
  require('dotenv').config();
  
  
  mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/incaseofgaming',);
        console.log('💾 Successfully connected to MongoDB');

// mongoose.connect(process.env.MONGODB_URI);

module.exports = mongoose.connection;