const typeDefs = `
    type User{
    _id: ID!
    username: String!
    email: String!
    password: String!
    wishlist: [Wishlist]
    likedGames: [LikedGames]
    }
    
    type Wishlist{
      _id: ID!
      game: [Game!]
      }

    type LikedGames{
      _id: ID!
      game: [Game!]
      }  

    type Game{
        _id: ID!
        name: String!
        type: String!
        price: String!
        img: String!
        small_cap: String!
        }  
    
    type Auth{
        token: ID!
        user: User
        }
    

    input GameInput{
        id: ID!
        name: String!
        type: String!
        price: String!
        img: String!
        small_cap: String!
    }
    
    type Query{
        users: [User]
        user(userId: String!): User
        wishlist(userId: ID!): Wishlist 
        likedGames(userId: ID!): LikedGames 
        games: [Game]
        game(name: String!): Game
        }

    type Mutation{
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        logout: Auth
        addGame(name: String!, type: String!, price: String!, img: String!, small_cap: String!): Game 
        # addWishlist(userId: ID!, gameIds: [ID!]!): Wishlist
        # addLikedGames(userId: ID!, gameIds:[ID!]! ): LikedGames
        addWishlist(userId: ID!, game: GameInput ): User
        addLikedGames(userId: ID!, game: GameInput ): User
        deleteGame(_id: ID!, name: String!): Game
        }
        
    `//add functionality to remove games from wishlist and likedGames

module.exports = typeDefs;