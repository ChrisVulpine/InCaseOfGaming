
const { GraphQLError } = require('graphql');
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'mysecretss'; // This secret should be in an environment variable
module.exports = {
    AuthenticationError: new GraphQLError('Could not authenticate user.', {
        extensions: {
            code: 'UNAUTHENTICATED',
        },
    }),
    authMiddleware: function ({ req }) {
        let token = req.body?.token || req.query?.token || req.headers?.authorization;
        console.log(token);


        if (req.headers?.authorization) {
            token = token.split(' ').pop().trim();
        }
        if (!token) {
            throw new GraphQLError('You have no token.', {
                extensions: {
                    code: 'UNAUTHENTICATED',
                },

            });
        }

        try {
            const { data } = jwt.verify(token, secret, { maxAge: '60 days' });
            req.user = data;
            return req;
        } catch (error) {
            console.error('Invalid token', error);
            return req;
        }
    },
    signToken: function ({ email, username, _id }) {
        const payload = { email, username, _id };

        return jwt.sign({ data: payload }, secret, { expiresIn: '60 days' });
    },
};
