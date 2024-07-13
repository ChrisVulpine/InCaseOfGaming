
const { GraphQLError } = require('graphql');
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'mysecretss'; // This secret should be in an environment variable
module.exports = {
    AuthenticationError: new GraphQLError('Could not authenticate user.',{
        extensions: {
            code: 'UNAUTHENTICATED',
        },
    }),
    authMiddleware: function ({ req }) {
        let token = req.body?.token || req.query?.token || req.headers?.authorization;

        if (req.headers?.authorization) {
            token = token.split(' ').pop().trim();
        }

        if (!token) {
            return res.status(400).json({ message: 'You have no token!' });
        }

        try {
            const { data } = jwt.verify(token, secret, { maxAge: '60 days' });
            req.user = data;
        } catch {
            console.error('Invalid token');
            return res.status(400).json({ message: 'invalid token!' });
        }

        //return req;

        next();
    },
    signToken: function ({ email, username, _id }) {
        const payload = { email, username, _id };

        return jwt.sign({ data: payload }, secret, { expiresIn: '60 days' });
    },
    };
