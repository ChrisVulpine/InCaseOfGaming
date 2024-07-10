
const { GraphQLError } = require('graphql');
const jwt = require('jsonwebtoken');
const secret = 'mysecretss'; // This secret should be in an environment variable
module.exports = {
    AuthenticationError: new GraphQLError('Could not authenticate user.',{
        extensions: {
            code: 'UNAUTHENTICATED',
        },
    }),
    authMiddleware: function ({ req }) {
        let token = req.body.token || req.query.token || req.headers.authorization;

        if (req.headers.authorization) {
            token = token.split(' ').pop().trim();
        }

        if (!token) {
            return req;
        }

        try {
            const { data } = jwt.verify(token, secret, { maxAge: '60 days' });
            req.user = data;
        } catch {
            console.error('Invalid token');
        }

        return req;
    },
    signToken: function ({ email, username, _id }) {
        const payload = { email, username, _id };

        return jwt.sign({ data: payload }, secret, { expiresIn: '60 days' });
    },
    };
// const jwt = require('jsonwebtoken');
// const secret = 'mysecretsshhhhh';
// const expiration = '2h';

// module.exports = {

//         // function for our authenticated routes
  
//         //==============================================================================================================================
//         // [GraphQL API built with Apollo Server.]
//         //==============================================================================================================================
        
//             authMiddleware: function ({ req }) {
//             // allows token to be sent via req.body, req.query, or headers
//             let token = req.body.token || req.query.token || req.headers.authorization;
        
//         //==============================================================================================================================
        
        
//             // ["Bearer", "<tokenvalue>"]
//             if (req.headers.authorization) {
//               token = token.split(' ').pop().trim();
//             }
        
//             // verify token and get user data out of it
//             if (token) try {
//               const { data } = jwt.verify(token, secret, { maxAge: expiration });
              
//               req.user = data;
//             } catch {}
        
//             // send to next endpoint
//             // next();
        
//             return req;
//           },
//           signToken: function ({ username, email, _id }) {
//             const payload = { username, email, _id };
        
//             return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
//           },
//         };
