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
      games: [Game!]
      }

    type LikedGames{
      _id: ID!
      games: [Game!]
      }  

    type Game{
        _id: ID!
        name: String!
        description: String!
        price: Float!
        img: String!
        small_cap: String!
        }  
    
    type Auth{
        token: ID!
        user: User
        }
    

    input GameInput{
        id: ID
        name: String!
        type: String
        price: Float
        img: String!
        small_cap: String
    }
    
    type Query{
        users: [User]
        user(id:ID!): User
        wishlist(userId: ID!): Wishlist 
        likedGames(userId: ID!): LikedGames 
        games: [Game]
        game(name: String!): Game
        }

    type Mutation{
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        logout: Auth
        addGame(name: String!, description: String!, price: Float!, image: String!): Game 
        addWishlist(userId: ID!, gameInput: GameInput!): Wishlist
        addLikedGames(userId: ID!, gameIds:[ID!]! ): LikedGames
        deleteGame(_id: ID!, name: String!): Game
        }
        
    `//add functionality to remove games from wishlist and likedGames

module.exports = typeDefs;