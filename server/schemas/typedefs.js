const typeDefs= `
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

    type likedGames{
      _id: ID!
      games: [Game!]
      }  

    type Game{
        _id: ID!
        name: String!
        description: String!
        price: Float!
        image: String!
        }  
    
    type Auth{
        token: ID!
        user: User
        }
    
    type Query{
        users: [User]
        user(username: String!): User
        wishlist(userId: ID!): Wishlist // should return games in wishlist
        likedGames(userId: ID!): LikedGames // should return games in likedGames
        games: [Game]
        game(name: String!): Game
        }

    type Mutation{
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        logout: Auth
        addGame(name: String!, description: String!, price: Float!, image: String!): Game 
        addWishlist(userId: ID!, gameIds: [ID!]!): Wishlist
        addLikedGames(userId: ID!, gameIds:[ID!]! ): LikedGames
        deleteGame(_id: ID!, name: String!): Game
        }
        
    `

module.exports = typeDefs;