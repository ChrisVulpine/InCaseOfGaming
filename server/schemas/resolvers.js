
const { User, Game, Wishlist, LikedGames } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('wishlist').populate('likedGames');
        },
        user: async (parent, { username }) => {
            return User.findOne({ username }).populate('wishlist').populate('likedGames');
        },
        wishlist: async (parent, { userId }) => {
            return Wishlist.findOne({user: userId}).populate('games');
        },
        likedGames: async (parent, { userId }) => {
            // const params = username ? { username } : {};
            return LikedGames.findOne({user: userId}).populate('games');
        },
        games: async () => {
            // const params = username ? { username } : {};
            return Game.find();
        },
        game: async (parent, {name}) => {
            return Game.findOne({name});
        },
    //     me: async (parent, args, context) => {
    //         if (context.user) {
    //             return User.findOne({ _id: context.user._id }).populate('wishlist').populate('likedGames');
    //         }
    //         throw AuthenticationError('You need to be logged in!');

    // },
},

Mutation: {
    addUser : async (parent, {username, email, password}) => {
        const user = await User.create({username, email, password});
        const token = signToken(user);
        return { token, user };
    },
    login: async (parent, {email, password}) => {
        const user = await  User.findOne({ email });
        if (!user) {
            throw new AuthenticationError('No user found with this email address');
        }
        const correctPw = await user.isCorrectPassword(password);
        if (!correctPw) {
            throw new AuthenticationError('Incorrect password');
        }
        const token = signToken(user);

        return { token, user };
    },
    logout: async (parent, args, context) => {
        if (context.user) {
            return User.findOneAndUpdate(
                { _id: context.user._id },
                { $set: { token: '' } },
                { new: true }
            );
        }
        throw new AuthenticationError('You need to be logged in!');
    },
    addGame: async (parent, { name, description, price, image }, context) => {
        if (context.user) {
            const game = await Game.create({ name, description, price, image });
            console.log(game);
            return game;
        }
        else {
            throw new AuthenticationError('You need to be logged in!');
        }
    },
    addWishlist: async (parent, { userId, game }, context) => {
        if (context.user && context.user._id === userId) {
            const user = await User.findOneAndUpdate(
                {
                    _id: userId,
                }, 
                {
                    $addToSet: { wishlist: game },
                },
                { new: true }
            )
            return user;
        } else {
            console.log("no wishlist");
        }
    },
    // addLikedGames: async (parent, { userId, gameIds }, context) => {
    addLikedGames: async (parent, { userId, game }, context) => {
        console.log(context.user);
        console.log(userId)
        if (context.user && context.user._id === userId) {
            // const likedGames = await LikedGames.findOneAndUpdate(
            //     { user: userId },
            //     { $addToSet: { games: { $each: gameIds } } },
            //     { new: true, upsert: true }
            // ).populate('game')
            
            const user = await User.findOneAndUpdate(
                {
                    _id: userId,
                },
                {
                    $addToSet: { likedGames: game },
                },
                { new: true }
            )
            console.log(user)
            return user;
        }else {
            console.log("no liked games");
        }
    },
    deleteGame: async (parent, { _id, name }, context) => {
        if (context.user) {
        return Game.findOneAndDelete({ _id: _id, name: name });
        }
    },
},// add functionality to remove games from wishlist and likedGames
};

module.exports = resolvers;