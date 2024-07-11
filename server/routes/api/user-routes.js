const router = require('express').Router();
const {
    createUser,
    login,
    getSingleUser,
    addGameToWishlist,
    addGameToLikedGames
} = require('../../controllers/user-controller');
const { authMiddleware } = require('../../utils/auth');

router.route('/').post(createUser);

router.route('/login').post(login);

router.route('/me').get(authMiddleware, getSingleUser);

router.route('/wishlist').put(authMiddleware, addGameToWishlist);

router.route('/likedGames').put(authMiddleware, addGameToLikedGames);

module.exports = router;